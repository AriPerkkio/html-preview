<script lang="ts">
    import CodeMirror from '$lib/CodeMirror.svelte';

    const code = `<div>\n  HTML Preview. Edit here.\n</div>`;
    const refs: { sandbox?: HTMLIFrameElement } = {};

    function changed(event: CustomEvent) {
        const { value } = event.detail;
        const iframe = refs.sandbox;

        iframe?.contentWindow?.postMessage({ type: 'CHANGE', value });
    }
</script>

<div class="wrapper">
    <iframe
        security="restricted"
        src="/sandbox"
        title="Sandbox"
        bind:this={refs.sandbox}
    />
    <CodeMirror on:change={changed} {code} />
</div>

<style>
    .wrapper {
        display: flex;
    }
</style>
