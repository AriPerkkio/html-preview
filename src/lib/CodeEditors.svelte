<script context="module" lang="ts">
    export type EditorType = { id: number; code: string };
</script>

<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import CodeMirror from '$lib/CodeMirror.svelte';

    const DEFAULT_EDITOR_ID = 1;

    const dispatch = createEventDispatcher();
    export let editors: EditorType[] = [{ id: DEFAULT_EDITOR_ID, code: '' }];
    let activeEditorId = editors[0]?.id || DEFAULT_EDITOR_ID;

    $: currentMaxId = Math.max(...editors.map((e) => e.id));

    function addEditor() {
        const code = editors.find((e) => e.id === currentMaxId)?.code || '';

        editors = [...editors, { id: 1 + currentMaxId, code }];
    }

    function removeEditor(event: CustomEvent) {
        const { editorId } = event.detail;

        if (activeEditorId === editorId) {
            const index = editors.findIndex((e) => e.id === editorId);
            const nextEditor = editors[index - 1];

            activeEditorId = nextEditor?.id || DEFAULT_EDITOR_ID;
        }

        editors = editors.filter((e) => e.id !== editorId);
    }

    function toggleState() {
        const editorIds = editors.map((e) => e.id);

        if (activeEditorId === currentMaxId) {
            activeEditorId = Math.min(...editorIds);
            return;
        }

        const currentIndex = editorIds.indexOf(activeEditorId);
        activeEditorId = editorIds[1 + currentIndex];
    }

    function changed(event: CustomEvent) {
        const { value, editorId } = event.detail;

        if (editorId === activeEditorId) {
            dispatch('change', { value });
        }
    }
</script>

<button on:click={toggleState}>Next state</button>
<button on:click={addEditor}>Add editor</button>

{#each editors as editor (editor.id)}
    <CodeMirror
        on:change={changed}
        on:remove={removeEditor}
        bind:code={editor.code}
        canBeRemoved={editor.id !== DEFAULT_EDITOR_ID}
        active={editor.id === activeEditorId}
        editorId={editor.id}
    />
{/each}
