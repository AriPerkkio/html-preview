<script lang="ts">
    import CodeMirror from './CodeMirror.svelte';

    // Svelte seems to break if style tag is written in string directly, sveltejs/svelte#6923
    const code = '<' + `style>\n  \n</style>`;
</script>

<CodeMirror on:change {code} />
