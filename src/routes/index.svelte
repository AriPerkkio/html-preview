<script lang="ts">
    import { base } from '$app/paths';
    import CodeEditors, { CodeEditorsEvents } from '$lib/CodeEditors.svelte';
    import StyleEditor from '$lib/StyleEditor.svelte';
    import type { SandboxMessage } from '../routes/sandbox.svelte';
    import {
        buildStatefulUrl,
        initializeFromUrlSearchParams,
    } from '$lib/utils/urlSearchParams.svelte';

    const refs: { sandbox?: HTMLIFrameElement } = {};
    let exportUrl: string | undefined;

    let { editors, style } = initializeFromUrlSearchParams();

    function postSandboxMessage(message: SandboxMessage, retries = 5) {
        const contentWindow = refs.sandbox?.contentWindow;

        if (contentWindow) {
            contentWindow.postMessage(message);
        } else if (retries > 0) {
            setTimeout(() => postSandboxMessage(message, retries - 1), 500);
        }
    }

    $: postSandboxMessage({ type: 'STYLE_CHANGE', value: style });

    function domTreeChanged(event: CustomEvent<CodeEditorsEvents['change']>) {
        postSandboxMessage({
            type: 'CONTENT_CHANGE',
            value: event.detail.value,
        });
    }

    function onExport() {
        const url = buildStatefulUrl({ style, editors });

        window.history.pushState({}, '', url);
        exportUrl = url.toString();

        navigator.clipboard.writeText(exportUrl).then(() => {
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
        bind:this={refs.sandbox}
    />

    <div>
        <button class="export-btn" on:click={onExport}>Export</button>
        <span aria-live="polite">
            {#if exportUrl}
                Copied to clipboard!
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

    .export-btn {
        margin-bottom: 1rem;
    }
</style>
