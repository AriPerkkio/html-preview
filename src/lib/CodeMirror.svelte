<script context="module" lang="ts">
    type ChangeEvent = { value: string; editorId: number };
    type RemoveEvent = { editorId: number };
    export type CodeMirrorEvents = { change: ChangeEvent; remove: RemoveEvent };
</script>

<script lang="ts">
    import { createEventDispatcher, onMount } from 'svelte';
    import IconButton from '$lib/IconButton.svelte';
    import Close from '$lib/img/close.svg';

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

<div class="codemirror-container" class:active>
    <textarea bind:this={ref} value={code} />

    {#if canBeRemoved}
        <IconButton
            aria-label="Remove editor"
            class="remove"
            on:click={onRemove}>
            <Close />
        </IconButton>
    {/if}
</div>

<style type="scss">
    .codemirror-container {
        line-height: 1.5;
        overflow: hidden;
        position: relative;
        padding-right: 1rem;
        border: 1px solid #ccc;

        :global(.remove) {
            position: absolute;
            top: 0;
            right: 0;
        }
    }

    .active {
        border: 3px solid #123;
    }

    :global(.CodeMirror.CodeMirror) {
        height: auto;
    }

    textarea {
        visibility: hidden;
    }
</style>
