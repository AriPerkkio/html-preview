<script lang="ts">
    import { onMount } from 'svelte';
    import { base } from '$app/paths';
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

    function postSandboxMessage(message: SandboxMessage, retries = 5) {
        const contentWindow = refs.sandbox?.contentWindow;

        if (contentWindow) {
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
    <iframe
        security="restricted"
        src="{base}/sandbox"
        title="Sandbox"
        bind:this={refs.sandbox} />

    <div class="controls">
        <IconButton on:click={onExport}>
            <Share />
        </IconButton>

        <span aria-live="polite">
            {#if exportUrl}
                URL copied to clipboard!
            {/if}
        </span>

        <StyleEditor bind:code={style} />
        <CodeEditors on:change={domTreeChanged} bind:editors />
    </div>
</div>

<style>
    .wrapper {
        display: flex;
    }

    .controls {
        margin-bottom: 1rem;
    }
</style>
