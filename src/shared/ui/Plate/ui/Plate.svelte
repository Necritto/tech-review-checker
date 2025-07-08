<script lang="ts">
    import { ChevronDown } from "@lucide/svelte";
    import { Collapse } from "@shared/ui/Collapse";
    import type { Snippet } from "svelte";

    interface PlateProps {
        children?: Snippet;
        title?: Snippet;
        className?: string;
        withCollapse?: boolean;
    }

    const {
        title,
        children,
        className,
        withCollapse = false,
    }: PlateProps = $props();

    let open: boolean = $state(true);

    const handleCollapse = () => {
        open = !open;
    };
</script>

<div class={["plate", className]}>
    {@render title?.()}
    {#if withCollapse}
        <button class={["collapse", { open: open }]} onclick={handleCollapse}
            ><ChevronDown /></button
        >
    {/if}
    <Collapse {open} className="inner">
        {@render children?.()}
    </Collapse>
</div>

<style lang="scss">
    @forward "./styles";
</style>
