<script lang="ts">
    import '@shared/styles/_index.scss';

    import {Header} from '@widgets/Header';
    import {Footer} from '@widgets/Footer';
    import {Sidebar} from '@widgets/Sidebar';

    import type {LayoutProps} from './$types';

    const {children}: LayoutProps = $props();
</script>

<Header />

<main class="main">
    <Sidebar />
    <section class="content invisible-scroll">
        {@render children()}
    </section>
</main>

<Footer />

<style lang="scss">
    .main {
        display: flex;
        max-height: calc(100vh - 117px - 56px);
        background-color: var(--trc-surface-background-color);
        border-right: var(--trc-border);
        border-left: var(--trc-border);
    }

    .content {
        width: 100%;
        max-width: calc(100% - var(--trc-sidebar-width));
        padding: var(--trc-main-offset);
        overflow-y: auto;
    }
</style>
