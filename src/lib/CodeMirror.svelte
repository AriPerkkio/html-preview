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
            theme: 'cobalt',
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
            title="Remove editor"
            class="remove"
            on:click={onRemove}>
            <Close />
        </IconButton>
    {/if}
</div>

<style type="scss">
    .codemirror-container {
        line-height: 1.5;
        position: relative;
        padding-right: 1rem;
        border: 0.1rem solid var(--dusty-blue);
        background-color: var(--blue);
        resize: vertical;
        overflow-y: auto;

        :global(.remove) {
            position: absolute;
            top: 0;
            right: 0;
        }
    }

    .active {
        border: 0.2rem solid var(--yellow);
    }

    textarea {
        visibility: hidden;
    }

    :global(.CodeMirror.CodeMirror) {
        font-family: 'Cascadia Code';
        height: auto;
        background-color: var(--blue);
    }
    :global(.CodeMirror-gutters.CodeMirror-gutters) {
        background-color: var(--blue);
    }
    :global(.CodeMirror-line.CodeMirror-line.CodeMirror-line) {
        color: #fff;
    }
    :global(.CodeMirror-cursor.CodeMirror-cursor) {
        border-left: 0.1rem solid var(--yellow);
    }

    :global(.CodeMirror-selected) {
        background: rgba(42, 255, 223, 0.2) !important;
    }

    @mixin theme($postfixes...) {
        @each $postfix in $postfixes {
            :global(.cm-s-cobalt .cm-#{$postfix}) {
                @content;
            }
        }
    }

    @include theme('tag', 'keyword') {
        color: var(--light-blue);
    }
    @include theme('attribute', 'property') {
        color: var(--yellow);
        font-style: italic;
    }
    @include theme('string') {
        color: var(--mint);
    }
    @include theme('number') {
        color: var(--pink);
    }
    @include theme('comment') {
        color: var(--orange);
    }
</style>
