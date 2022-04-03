<button {...$$props} on:click>
    <!-- TODO: How to pass aria-hidden to slot directly? -->
    <div aria-hidden="true" class="icon-wrapper">
        <slot />
    </div>
</button>

<style lang="scss">
    $size: 1.8rem;

    button {
        cursor: pointer;
        background-color: transparent;
        border: 0;
        padding: 0;
        margin: 0;

        &:hover,
        &:focus {
            transform: scale(1.1);
        }

        &:focus {
            outline: 0.2rem dashed black;
        }

        :global(svg) {
            width: $size;
            height: $size;
        }
    }

    .icon-wrapper {
        display: flex;
    }

    [disabled] {
        cursor: auto;
        fill: #bbb;
    }
</style>
