<script context="module" lang="ts">
    export type SandboxMessage = {
        type: 'STYLE_CHANGE' | 'CONTENT_CHANGE';
        value: string;
    };
</script>

<script lang="ts">
    import { onMount } from 'svelte';

    import { update } from 'virtual-dom-nodes';

    let state = '';

    onMount(() => {
        state = 'sandbox-ready';
    });

    const refs: { root?: HTMLDivElement; styles?: HTMLStyleElement } = {};

    function onMessage(message: MessageEvent<SandboxMessage>) {
        const { type, value } = message.data;

        switch (type) {
            case 'CONTENT_CHANGE':
                if (refs?.root) {
                    const wrapper = document.createElement('div');
                    wrapper.innerHTML = value;

                    update(refs.root, wrapper);
                }
                break;

            case 'STYLE_CHANGE':
                if (refs?.styles) {
                    const withoutTags = value
                        .replace('<' + 'style>', '') // sveltejs/svelte#6923
                        .replace('</style>', '');
                    refs.styles.innerHTML = withoutTags;
                }
                break;

            default:
                console.error('Unknown event caught', { type, value });
        }
    }
</script>

<svelte:window on:message={onMessage} />

<div data-state={state}>
    <style bind:this={refs.styles}></style>
    <div bind:this={refs.root} />
</div>
