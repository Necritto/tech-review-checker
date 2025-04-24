<script lang="ts">
    import '@shared/styles/_index.scss';

    import {Link} from '@shared/ui/Link';

    import type {LayoutProps} from './$types';

    const {children}: LayoutProps = $props();
</script>

<nav>
    <Link href="/">Вопросы</Link>
    <Link href="/exercises">Задания</Link>
</nav>

{@render children()}
