<script lang="ts">
    import CodeMirror from './CodeMirror.svelte';

    export let code = '';
</script>

<CodeMirror on:change bind:code editorId={0} canBeRemoved={false} />
