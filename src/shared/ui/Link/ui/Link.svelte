<script lang="ts">
    import type {Snippet} from 'svelte';

    import {page} from '$app/state';

    interface LinkProps {
        children: Snippet;
        href: string;
    }

    const {children, href}: LinkProps = $props();
</script>

<a {href} class={['link', {active: page.url.pathname === href}]}>
    {@render children()}
</a>

<style lang="scss">
    @forward "./styles";
</style>
