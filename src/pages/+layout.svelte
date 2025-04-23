<script lang="ts">
    const {children} = $props();
</script>

<nav>
    <a href="/">Вопросы</a>
    <a href="/exercises">Задания</a>
</nav>

{@render children()}
