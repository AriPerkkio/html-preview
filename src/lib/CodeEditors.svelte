<script context="module" lang="ts">
    type ChangeEvent = { value: string };
    export type CodeEditorsEvents = { change: ChangeEvent };
    export type EditorType = { id: number; code: string };
</script>

<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import CodeMirror, { CodeMirrorEvents } from '$lib/CodeMirror.svelte';
    import IconButton from './IconButton.svelte';
    import Play from '$lib/img/play.svg';
    import Pause from '$lib/img/pause.svg';
    import Next from '$lib/img/next.svg';
    import Plus from '$lib/img/plus.svg';

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

    function play() {
        if (!cycleCleanup) {
            const id = setInterval(toggleState, 2000);
            cycleCleanup = () => clearInterval(id);
        }
    }

    function pause() {
        if (cycleCleanup) {
            cycleCleanup();
            cycleCleanup = null;
        }
    }

    function changed(event: CustomEvent<CodeMirrorEvents['change']>) {
        const { value, editorId } = event.detail;

        if (editorId === activeEditorId) {
            dispatch('change', { value });
        }
    }
</script>

<IconButton
    on:click={play}
    aria-label="Loop states"
    disabled={cycleCleanup != null}>
    <Play />
</IconButton>

<IconButton
    on:click={pause}
    aria-label="Pause state looping"
    disabled={cycleCleanup == null}>
    <Pause />
</IconButton>

<IconButton on:click={toggleState} aria-label="Next state">
    <Next />
</IconButton>

<IconButton on:click={addEditor} aria-label="Add editor">
    <Plus />
</IconButton>

{#each editors as editor (editor.id)}
    <CodeMirror
        on:change={changed}
        on:remove={removeEditor}
        bind:code={editor.code}
        canBeRemoved={editor.id !== DEFAULT_EDITOR_ID}
        active={editor.id === activeEditorId}
        editorId={editor.id} />
{/each}
