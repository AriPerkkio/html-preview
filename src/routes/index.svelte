<script lang="ts">
    import { base } from '$app/paths';
    import CodeEditors, { EditorType } from '$lib/CodeEditors.svelte';
    import StyleEditor from '$lib/StyleEditor.svelte';

    const refs: { sandbox?: HTMLIFrameElement } = {};
    let editors: EditorType[] = [{ id: 1, code: '' }];

    // Svelte seems to break if style tag is written in string directly, sveltejs/svelte#6923
    let style = '<' + `style>\n  \n</style>`;

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

    function onExport() {
        const encoded = btoa(JSON.stringify({ editors, style }));
        alert(`TODO: Copy to clipboard and display: <url>?code=${encoded}`);

        console.log('Decoded', JSON.parse(atob(encoded)));
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
        <StyleEditor on:change={styleChanged} bind:code={style} />
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
