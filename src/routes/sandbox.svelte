<script lang="ts">
    const refs: { root?: HTMLDivElement } = {};

    function onMessage(message: MessageEvent) {
        const type = message?.data?.type;
        const value = message?.data?.value;

        switch (type) {
            case 'CHANGE':
                if (refs?.root) {
                    refs.root.innerHTML = value;
                }
                break;

            default:
                console.error('Unknown event caught', { type, value });
        }
    }
</script>

<svelte:window on:message={onMessage} />

<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Sandbox</title>
    </head>

    <body class="sandbox preview">
        <div bind:this={refs.root} />
    </body>
</html>
