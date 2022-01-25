<script lang="ts">
    import { base } from '$app/paths';
    import CodeEditors from '$lib/CodeEditors.svelte';
    import StyleEditor from '$lib/StyleEditor.svelte';

    const refs: { sandbox?: HTMLIFrameElement } = {};

    function domTreeChanged(event: CustomEvent) {
        const { value } = event.detail;

        refs.sandbox?.contentWindow?.postMessage({
            type: 'CONTENT_CHANGE',
            value,
        });
    }

    function styleChanged(event: CustomEvent) {
        const { value } = event.detail;

        refs.sandbox?.contentWindow?.postMessage({
            type: 'STYLE_CHANGE',
            value,
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
        <StyleEditor on:change={styleChanged} />
        <CodeEditors on:change={domTreeChanged} />
    </div>
</div>

<style>
    .wrapper {
        display: flex;
    }
</style>
