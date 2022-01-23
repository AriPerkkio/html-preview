<script lang="ts">
    import CodeMirror from '$lib/CodeMirror.svelte';
    import StyleEditor from '$lib/StyleEditor.svelte';

    const code = `<div>\n  HTML Preview. Edit here.\n</div>`;
    const refs: { sandbox?: HTMLIFrameElement } = {};

    function changed(event: CustomEvent) {
        const { value } = event.detail;
        const iframe = refs.sandbox;

        iframe?.contentWindow?.postMessage({ type: 'CONTENT_CHANGE', value });
    }

    function styleChanged(event: CustomEvent) {
        const { value } = event.detail;
        const iframe = refs.sandbox;

        iframe?.contentWindow?.postMessage({ type: 'STYLE_CHANGE', value });
    }
</script>

<div class="wrapper">
    <iframe
        security="restricted"
        src="/sandbox"
        title="Sandbox"
        bind:this={refs.sandbox}
    />

    <div>
        <StyleEditor on:change={styleChanged} />
        <CodeMirror on:change={changed} {code} />
    </div>
</div>

<style>
    .wrapper {
        display: flex;
    }
</style>
