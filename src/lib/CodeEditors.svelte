<script context="module" lang="ts">
    type ChangeEvent = { value: string };
    export type CodeEditorsEvents = { change: ChangeEvent };
    export type EditorType = { id: number; code: string };
</script>

<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import CodeMirror, { CodeMirrorEvents } from '$lib/CodeMirror.svelte';

    const DEFAULT_EDITOR_ID = 1;

    const dispatch = createEventDispatcher<{ change: ChangeEvent }>();
    export let editors: EditorType[] = [{ id: DEFAULT_EDITOR_ID, code: '' }];
    let activeEditorId = editors[0]?.id || DEFAULT_EDITOR_ID;
    let cycleCleanup: null | (() => void);

    $: currentMaxId = Math.max(...editors.map((e) => e.id));

    function addEditor() {
        const code = editors.find((e) => e.id === currentMaxId)?.code || '';

        editors = [...editors, { id: 1 + currentMaxId, code }];
    }

    function removeEditor(event: CustomEvent<CodeMirrorEvents['remove']>) {
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

    function cycleStates(
        event: Parameters<svelte.JSX.FormEventHandler<HTMLInputElement>>[0]
    ) {
        if (!event.currentTarget.checked) {
            cycleCleanup?.();
            cycleCleanup = null;
            return;
        }

        const id = setInterval(toggleState, 3000);
        cycleCleanup = () => clearInterval(id);
    }

    function changed(event: CustomEvent<CodeMirrorEvents['change']>) {
        const { value, editorId } = event.detail;

        if (editorId === activeEditorId) {
            dispatch('change', { value });
        }
    }
</script>

<div>
    <label for="state-cycle">Loop states</label>
    <input id="state-cycle" type="checkbox" on:change={cycleStates} />
</div>

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
