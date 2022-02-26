<script context="module" lang="ts">
    type ChangeEvent = { value: string; editorId: number };
    type RemoveEvent = { editorId: number };
    export type CodeMirrorEvents = { change: ChangeEvent; remove: RemoveEvent };
</script>

<script lang="ts">
    import { createEventDispatcher, onMount } from 'svelte';

    export let code = '';
    export let editorId: number;
    export let active = false;
    export let canBeRemoved = true;
    let ref: HTMLTextAreaElement | undefined;

    $: if (active) {
        dispatch('change', { value: code, editorId });
    }

    onMount(async () => {
        if (!ref) {
            throw new Error('Missing ref to textarea');
        }

        const { default: CodeMirror } = await import('./codemirror.js');

        const editor = CodeMirror.fromTextArea(ref, {
            lineNumbers: true,
            lineWrapping: true,
            mode: 'htmlmixed',
            autoCloseBrackets: true,
            autoCloseTags: true,
            value: code,
        });

        editor.on('change', (instance) => {
            code = instance.getValue();
            dispatch('change', { value: code, editorId });
        });
    });

    // Svelte is unable to resolve types if
    // createEventDispatcher<CodeMirrorEvents> is used here
    const dispatch = createEventDispatcher<{
        change: ChangeEvent;
        remove: RemoveEvent;
    }>();

    function onRemove() {
        dispatch('remove', { editorId });
    }
</script>

{#if canBeRemoved}
    <button on:click={onRemove}>Remove editor</button>
{/if}

<div class="codemirror-container" class:active>
    <textarea bind:this={ref} value={code} />
</div>

<style>
    .codemirror-container {
        line-height: 1.5;
        overflow: hidden;
    }

    .active {
        border: 2px solid red;
    }

    :global(.CodeMirror.CodeMirror) {
        height: auto;
    }

    textarea {
        visibility: hidden;
    }
</style>
