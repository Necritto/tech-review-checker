<script lang="ts">
    import { MENU_ROUTES } from "@shared/model/constants";

    interface SidebarProps {
        pathname: string;
    }

    const { pathname }: SidebarProps = $props();

    const handleClick = (event: MouseEvent, name: string) => {
        if (pathname === name) {
            event.preventDefault();
        }
    };
</script>

<aside class="sidebar">
    <header class="header">
        <h2 class="title">Interview Dashboard</h2>
        <p class="subtitle paragraph-secondary">Technical Assessment Tool</p>
    </header>
    <nav class="nav invisible-scroll">
        {#each Object.values(MENU_ROUTES) as { path, title, Icon } (path)}
            <a
                href={path}
                aria-label={title}
                class={["link", { active: pathname === path }]}
                onclick={(event) => handleClick(event, path)}
            >
                <Icon class="icon" />
                {title}
            </a>
        {/each}
    </nav>
    <footer class="footer">
        {new Date().getFullYear()}
        &#127920; &commat;necritto
    </footer>
</aside>

<style lang="scss">
    @forward "./styles";
</style>
