<script lang="ts">
    import { onMount, createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let code: string = '';

    const refs: { editor?: any } = {};
    let editor: any;
    let destroyed = false;
    let CodeMirror: any;

    $: if (editor) {
        editor.refresh();
    }

    onMount(() => {
        (async () => {
            if (!CodeMirror) {
                let mod = await import('./codemirror.js');
                CodeMirror = mod.default;
            }
            await createEditor();
            if (editor) editor.setValue(code);
        })();

        return () => {
            destroyed = true;
            if (editor) editor.toTextArea();
        };
    });

    let first = true;

    async function createEditor() {
        if (destroyed || !CodeMirror) return;

        if (editor) editor.toTextArea();

        if (first) await sleep(50);
        if (destroyed) return;

        editor = CodeMirror.fromTextArea(refs.editor, {
            lineNumbers: true,
            lineWrapping: true,
            mode: 'htmlmixed',
            autoCloseBrackets: true,
            autoCloseTags: true,
        });

        editor.on('change', (instance: any) => {
            dispatch('change', { value: instance.getValue() });
        });

        if (first) await sleep(50);
        editor.refresh();

        first = false;
    }

    function sleep(ms: number) {
        return new Promise((r) => setTimeout(r, ms));
    }
</script>

<div class="codemirror-container">
    {#if CodeMirror}
        <textarea bind:this={refs.editor} value={code} />
    {/if}
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
