<script context="module" lang="ts">
    import { createEventDispatcher } from 'svelte';

    import Play from '$lib/img/play.svg?component';
    import Pause from '$lib/img/pause.svg?component';
    import Next from '$lib/img/next.svg?component';
    import Plus from '$lib/img/plus.svg?component';
    import CodeMirror from '$lib/CodeMirror.svelte';
    import IconButton from './IconButton.svelte';
    import type { CodeMirrorEvents } from '$lib/CodeMirror.svelte';

    const DEFAULT_EDITOR_ID = 1;

    type ChangeEvent = { value: string };
    export type CodeEditorsEvents = { change: ChangeEvent };
    export type EditorType = { id: number; code: string };
</script>

<script lang="ts">
    const dispatch = createEventDispatcher<{ change: ChangeEvent }>();

    export let editors: EditorType[] = [{ id: DEFAULT_EDITOR_ID, code: '' }];
    let activeEditorId = editors[0]?.id || DEFAULT_EDITOR_ID;
    let cycleCleanup: null | (() => void);

    $: currentMaxId = Math.max(...editors.map((e) => e.id));

    function addEditor() {
        const code = editors.find((e) => e.id === currentMaxId)?.code || '\n\n';

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

<div class="controls">
    <IconButton
        on:click={play}
        aria-label="Loop states"
        title="Loop states"
        disabled={cycleCleanup != null}>
        <Play />
    </IconButton>

    <IconButton
        on:click={pause}
        aria-label="Pause state looping"
        title="Pause state looping"
        disabled={cycleCleanup == null}>
        <Pause />
    </IconButton>

    <IconButton
        on:click={toggleState}
        aria-label="Next state"
        title="Next state">
        <Next />
    </IconButton>

    <IconButton on:click={addEditor} aria-label="Add editor" title="Add editor">
        <Plus />
    </IconButton>

    <slot />
</div>

{#each editors as editor (editor.id)}
    <CodeMirror
        on:change={changed}
        on:remove={removeEditor}
        bind:code={editor.code}
        canBeRemoved={editor.id !== DEFAULT_EDITOR_ID}
        active={editor.id === activeEditorId}
        editorId={editor.id} />
{/each}

<style lang="scss">
    .controls {
        display: flex;
        align-items: center;
        margin: 0.25rem 0;

        :global(& > button) {
            margin-right: 0.5rem;
        }
    }
</style>
