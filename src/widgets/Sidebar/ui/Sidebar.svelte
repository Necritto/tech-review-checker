<script lang="ts">
    import { MENU_ROUTES } from "../model/constants";
</script>

<aside class="sidebar">
    <header class="header">
        <h2 class="title">Interview Dashboard</h2>
        <p class="subtitle paragraph-secondary">Technical Assessment Tool</p>
    </header>
    <nav class="nav invisible-scroll">
        {#each MENU_ROUTES as { path, title, Icon } (path)}
            <a href={path} aria-label={title} class="link">
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
