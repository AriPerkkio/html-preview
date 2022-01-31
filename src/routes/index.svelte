<script lang="ts">
    import { base } from '$app/paths';
    import { browser } from '$app/env';
    import CodeEditors, { EditorType } from '$lib/CodeEditors.svelte';
    import StyleEditor from '$lib/StyleEditor.svelte';

    const refs: { sandbox?: HTMLIFrameElement } = {};
    let exportUrl: string | undefined;

    type InitState = { editors: EditorType[]; style: string };
    let { editors, style }: InitState = initialize();

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
        if (!browser) return;

        const encoded = btoa(JSON.stringify({ editors, style }));
        const url = new URL(base, window.location.origin);

        url.searchParams.set('code', encodeURIComponent(encoded));
        window.history.pushState({}, '', url);
        exportUrl = url.toString();
    }

    function initialize(): InitState {
        const defaultValues = {
            editors: [{ id: 1, code: '' }],

            // Svelte seems to break if style tag is written in string directly, sveltejs/svelte#6923
            style: '<' + `style>\n  \n</style>`,
        };

        if (!browser) {
            return defaultValues;
        }

        const encoded = new URLSearchParams(document.location.search).get(
            'code'
        );
        let json: unknown;

        if (encoded) {
            try {
                const decoded = atob(decodeURIComponent(encoded));
                json = JSON.parse(decoded);
            } catch (e) {
                console.error('Unable to parse url search parameters', e);
            }
        }

        if (hasProp(json, 'style') && typeof json.style === 'string') {
            if (hasProp(json, 'editors') && Array.isArray(json.editors)) {
                if (json.editors.every(isEditor)) {
                    return { style: json.style, editors: json.editors };
                }
            }
        }

        return defaultValues;
    }

    function isEditor(editor: unknown): editor is EditorType {
        return (
            hasProp(editor, 'id') &&
            typeof editor.id === 'number' &&
            hasProp(editor, 'code') &&
            typeof editor.code === 'string'
        );
    }

    function hasProp<K extends string>(
        obj: any,
        key: K
    ): obj is Record<K, unknown> {
        if (!obj) return false;

        return key in obj;
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
