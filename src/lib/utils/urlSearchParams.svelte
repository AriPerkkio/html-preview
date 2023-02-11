<script lang="ts" context="module">
    import { browser } from '$app/environment';
    import { base } from '$app/paths';
    import {
        decompressFromEncodedURIComponent,
        compressToEncodedURIComponent,
    } from '$lib/lz-string/lzstring.min';

    import type { EditorType } from '$lib/CodeEditors.svelte';

    interface InitState {
        editors: EditorType[];
        style: string;
    }

    export function initializeFromUrlSearchParams(): InitState {
        const defaultValues = {
            editors: [{ id: 1, code: '\n\n\n\n' }],

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
                const decoded = decompressFromEncodedURIComponent(encoded);
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

    export function buildStatefulUrl(state: InitState): URL {
        const encoded = compressToEncodedURIComponent(JSON.stringify(state));
        const url = new URL(base, window.location.origin);

        url.searchParams.set('code', encoded);

        return url;
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
