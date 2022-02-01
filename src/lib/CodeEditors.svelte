<script context="module" lang="ts">
    export type EditorType = { id: number; code: string };
</script>

<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import CodeMirror from '$lib/CodeMirror.svelte';

    const dispatch = createEventDispatcher();
    export let editors: EditorType[] = [{ id: 1, code: '' }];
    let activeEditorId = editors[0]?.id || 1;

    $: currentMaxId = Math.max(...editors.map((e) => e.id));

    function addEditor() {
        const code = editors.find((e) => e.id === currentMaxId)?.code || '';

        editors = [...editors, { id: 1 + currentMaxId, code }];
    }

    function removeEditor(event: CustomEvent) {
        const { editorId } = event.detail;
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
        active={editor.id === activeEditorId}
        editorId={editor.id}
    />
{/each}
