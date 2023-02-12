<script context="module" lang="ts">
    import { onMount } from 'svelte';
    import { update } from 'virtual-dom-nodes';

    export type SandboxMessage = {
        type: 'STYLE_CHANGE' | 'CONTENT_CHANGE';
        value: string;
    };
</script>

<script lang="ts">
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

                    try {
                        update(refs.root, wrapper);
                    } catch (_) {
                        // Ignore errors caused by broken tags etc
                    }

                    debugChanges(wrapper, refs.root);
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

    function debugChanges(expected: HTMLElement, actual: HTMLElement) {
        const expectedOuterHTML = expected.outerHTML;
        const actualOuterHTML = actual.outerHTML;

        if (expectedOuterHTML !== actualOuterHTML) {
            console.warn('DOM changes do not match', {
                actualOuterHTML,
                expectedOuterHTML,
            });
        }
    }
</script>

<svelte:window on:message={onMessage} />

<div id="sandbox-wrapper" data-state={state}>
    <style bind:this={refs.styles}></style>
    <div bind:this={refs.root} />
</div>

<style>
    #sandbox-wrapper {
        padding: 1rem;
    }
</style>
