<script lang="ts">
    import type { Snippet } from "svelte";

    interface CollapseProps {
        open: boolean;
        children: Snippet;
        className?: string;
    }

    const { open, children, className }: CollapseProps = $props();
</script>

<div class={[["collapse", { "collapse--open": open }]]}>
    <div style="min-height: 0" class={[className]}>
        {@render children()}
    </div>
</div>

<style lang="scss">
    @forward "./styles";
</style>
