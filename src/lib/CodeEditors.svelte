<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import CodeMirror from '$lib/CodeMirror.svelte';

    const dispatch = createEventDispatcher();
    const defaultId = 1;
    let editorIds: number[] = [defaultId];
    let activeEditorId = defaultId;

    $: currentMaxId = Math.max(...editorIds);

    function addEditor() {
        editorIds = [...editorIds, 1 + currentMaxId];
    }

    function removeEditor(event: CustomEvent) {
        const { editorId } = event.detail;
        editorIds = editorIds.filter((id) => id !== editorId);
    }

    function toggleState() {
        const currentLowestId = Math.min(...editorIds);

        if (activeEditorId === currentMaxId) {
            activeEditorId = currentLowestId;
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

<div>
    {#each editorIds as editorId (editorId)}
        <CodeMirror
            on:change={changed}
            on:remove={removeEditor}
            active={editorId === activeEditorId}
            {editorId}
        />
    {/each}
</div>
