<script lang="ts">
    import { onMount } from 'svelte';
    import { base } from '$app/paths';
    import { browser } from '$app/environment';
    import CodeEditors from '$lib/CodeEditors.svelte';
    import type { CodeEditorsEvents } from '$lib/CodeEditors.svelte';
    import StyleEditor from '$lib/StyleEditor.svelte';
    import type { SandboxMessage } from './sandbox/+page.svelte';
    import {
        buildStatefulUrl,
        initializeFromUrlSearchParams,
    } from '$lib/utils/urlSearchParams.svelte';
    import IconButton from '$lib/IconButton.svelte';
    import Share from '$lib/img/share.svg?component';

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
        const contentDocument = refs.sandbox?.contentDocument;

        // Use custom state instead of document.readyState when identifying iframe's state.
        // Seems that readyState is set "complete" before iframe is subsribing channel.
        const isReady =
            contentDocument?.querySelector('[data-state="sandbox-ready"]') !=
            null;

        if (isReady && contentWindow) {
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

<main class="wrapper">
    <h1>HTML Preview</h1>

    <p>
        Test and share snippets of HTML and state tranformations with others.
        <a
            rel="external"
            href="{base}/?code=N4IgzgLgngNgpiAXCAPJWcB8AdAdgAnwAd9g9DCAzAe1wgFowBLALzkXwEYA6AJgCc4AWwDc5fAF9xAbX7V4AXmzgIAQwgBXMMoC6pcYQDG86vw4ALahCJNcAazEEKNOo1bt8A4Y8JTcKAHp0eEwQABoQOAATJghTMCRpUCYopE4I4yiEZBQiHCcAYRgmQztiGFUofDj8MDg4fGKANwbBAHMmWnwNIij1ODxAvMGYpvw5RWVIdS1lfMJBgNHQiTDk1MReDOospFRhwuLS8srq6lr6xqYW8bgOrp6%2BiAH-AIOUUfH5OCUVGe0QPN8AAJOAwGDnADuphgUUWyxAEh0EiAA"
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
</main>

<style lang="scss">
    .wrapper {
        display: grid;
        grid-template-columns: 1fr;
        justify-items: stretch;
        gap: 0.25rem;
        padding: 2rem 1rem;

        max-width: 100ch;
        margin: 0 auto;

        :global(& > *) {
            min-width: 250px;
        }
    }

    .sandbox {
        resize: vertical;
        border: 0.1rem solid var(--yellow);
        border-radius: 0.5rem;
    }

    a {
        color: var(--orange);

        &:focus {
            padding: 0.2rem;
            margin: 0 -0.2rem;
            outline-color: var(--light-blue);
            outline-style: dashed;
            outline-width: 0.2rem;
        }
    }
</style>
