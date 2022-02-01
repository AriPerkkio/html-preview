<script lang="ts">
    import { base } from '$app/paths';
    import CodeEditors from '$lib/CodeEditors.svelte';
    import StyleEditor from '$lib/StyleEditor.svelte';
    import {
        buildStatefulUrl,
        initializeFromUrlSearchParams,
    } from '$lib/utils/urlSearchParams.svelte';

    const refs: { sandbox?: HTMLIFrameElement } = {};
    let exportUrl: string | undefined;

    let { editors, style } = initializeFromUrlSearchParams();

    $: {
        refs.sandbox?.contentWindow?.postMessage({
            type: 'STYLE_CHANGE',
            value: style,
        });
    }

    function domTreeChanged(event: CustomEvent) {
        const { value } = event.detail;

        refs.sandbox?.contentWindow?.postMessage({
            type: 'CONTENT_CHANGE',
            value,
        });
    }

    function onExport() {
        const url = buildStatefulUrl({ style, editors });

        window.history.pushState({}, '', url);
        exportUrl = url.toString();
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
        {#if exportUrl}
            <p>TODO copy button here</p>
            <a href={exportUrl}>{exportUrl}</a>
        {/if}

        <StyleEditor bind:code={style} />
        <CodeEditors on:change={domTreeChanged} bind:editors />
    </div>
</div>

<style>
    .wrapper {
        display: flex;
    }

    .export-btn {
        display: block;
        margin-bottom: 1rem;
    }
</style>
