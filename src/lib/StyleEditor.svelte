<script lang="ts">
    import CodeMirror from './CodeMirror.svelte';

    export let code = '';
</script>

<CodeMirror on:change {code} editorId={0} />
