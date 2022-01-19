<script lang="ts">
    import { onMount, createEventDispatcher } from 'svelte';
    import type CodeMirrorType from 'codemirror';

    const dispatch = createEventDispatcher();

    export let code = '';
    let ref: HTMLTextAreaElement | undefined;

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
            value: 'asd',
        });

        editor.on('change', (instance) => {
            dispatch('change', { value: instance.getValue() });
        });

        // TODO: Flaky timing issues here
        editor.setValue(code);
    }
</script>

<div class="codemirror-container">
    <textarea bind:this={ref} value={code} />
</div>

<style>
    .codemirror-container {
        line-height: 1.5;
        overflow: hidden;
    }

    textarea {
        visibility: hidden;
    }
</style>
