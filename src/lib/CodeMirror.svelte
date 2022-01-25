<script lang="ts">
    import { onMount, createEventDispatcher } from 'svelte';
    import type CodeMirrorType from 'codemirror';

    const dispatch = createEventDispatcher();

    export let code = '';
    export let editorId: number;
    export let active = false;
    let ref: HTMLTextAreaElement | undefined;

    $: if (active) {
        dispatch('change', { value: code, editorId });
    }

    onMount(async () => {
        let mod = await import('./codemirror.js');

        await createEditor(mod.default);
    });

    async function createEditor(CodeMirror: typeof CodeMirrorType) {
        if (!ref) {
            throw new Error('Missing ref to textarea');
        }

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

        // TODO: Flaky timing issues here
        editor.setValue(code);
    }

    function onRemove() {
        dispatch('remove', { editorId });
    }
</script>

{#if !active}
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
