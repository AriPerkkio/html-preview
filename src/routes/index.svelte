<script lang="ts">
    import { onMount } from 'svelte';
    import { base } from '$app/paths';
    import { browser } from '$app/env';
    import CodeEditors, { CodeEditorsEvents } from '$lib/CodeEditors.svelte';
    import StyleEditor from '$lib/StyleEditor.svelte';
    import type { SandboxMessage } from './sandbox.svelte';
    import {
        buildStatefulUrl,
        initializeFromUrlSearchParams,
    } from '$lib/utils/urlSearchParams.svelte';
    import IconButton from '$lib/IconButton.svelte';
    import Share from '$lib/img/share.svg';

    const refs: { sandbox?: HTMLIFrameElement } = {};
    let exportUrl: string | undefined;

    let { editors, style } = initializeFromUrlSearchParams();

    // There is only a single style editor - reflect its value to sandbox
    $: postSandboxMessage({ type: 'STYLE_CHANGE', value: style });

    onMount(() => {
        // Initialize sandbox
        postSandboxMessage({ type: 'CONTENT_CHANGE', value: editors[0].code });
    });

    function postSandboxMessage(message: SandboxMessage, retries = 20) {
        if (!browser) return;

        const contentWindow = refs.sandbox?.contentWindow;
        const readyState = refs.sandbox?.contentDocument?.readyState;

        console.log('iframe readyState', readyState);

        if (readyState === 'complete' && contentWindow) {
            contentWindow.postMessage(message);
        } else if (retries > 0) {
            // If sandbox is not yet initialized (iframe is not ready), keep
            // polling until ready.
            setTimeout(() => postSandboxMessage(message, retries - 1), 500);
        }
    }

    function domTreeChanged(event: CustomEvent<CodeEditorsEvents['change']>) {
        postSandboxMessage({
            type: 'CONTENT_CHANGE',
            value: event.detail.value,
        });
    }

    function onExport() {
        const url = buildStatefulUrl({ style, editors });

        // Update window's URL with export URL
        window.history.pushState({}, '', url);
        exportUrl = url.toString();

        navigator.clipboard.writeText(exportUrl).then(() => {
            // Removes "Copied" text from screen after a delay
            setTimeout(() => {
                exportUrl = '';
            }, 3000);
        });
    }
</script>

<div class="wrapper">
    <h1>HTML Preview</h1>

    <p>
        Test and share snippets of HTML and state tranformations with others.
        <a
            rel="external"
            href="{base}/?code=eyJzdHlsZSI6IjxzdHlsZT5cbiAgKiB7XG4gICAgY29sb3I6IGJsdWU7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG48L3N0eWxlPiIsImVkaXRvcnMiOlt7ImlkIjoxLCJjb2RlIjoiPGRpdiByb2xlPVwic3RhdHVzXCI%252BXG4gIFxuPC9kaXY%252BIn0seyJpZCI6MiwiY29kZSI6IjxkaXYgcm9sZT1cInN0YXR1c1wiPlxuICBIZWxsbyB3b3JsZCFcbjwvZGl2PiJ9XX0%253D"
            >For insipiration see ARIA-live region example.</a>

        Remember to click play to see state transformations.
    </p>

    <iframe
        class="sandbox"
        security="restricted"
        src="{base}/sandbox"
        title="Sandbox"
        bind:this={refs.sandbox} />

    <CodeEditors on:change={domTreeChanged} bind:editors>
        <IconButton on:click={onExport} aria-label="Share" title="Share">
            <Share />
        </IconButton>

        <span aria-live="polite">
            {#if exportUrl}
                URL copied to clipboard!
            {/if}
        </span>
    </CodeEditors>

    <StyleEditor bind:code={style} />
</div>

<style type="scss">
    .wrapper {
        display: grid;
        grid-template-columns: 1fr;
        justify-items: stretch;
        gap: 0.25rem;
        padding: 2rem 1rem;

        max-width: 100ch;
        margin: 0 auto;

        :global & > * {
            min-width: 250px;
        }
    }
</style>
