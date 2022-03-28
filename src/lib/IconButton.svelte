<button {...$$props} on:click>
    <!-- TODO: How to pass aria-hidden to slot directly? -->
    <div aria-hidden="true">
        <slot />
    </div>
</button>

<style lang="scss">
    button {
        cursor: pointer;
        background-color: transparent;
        border: 0;
        padding: 0;
        margin: 0;

        :global(svg) {
            width: 1.3rem;
            height: 1.3rem;
        }
    }

    [disabled] {
        cursor: auto;
        fill: #bbb;
    }
</style>
