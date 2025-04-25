<script lang="ts">
    import {page} from '$app/state';

    import '@shared/styles/_index.scss';

    import {Header} from '@widgets/Header';
    import {Footer} from '@widgets/Footer';
    import {Question} from '@entities/Question';
    import type {Question as QuestionType} from '@shared/types';

    import type {LayoutProps} from './$types';

    const {data, children}: LayoutProps = $props();

    const currentSidebarContent = $derived(data[page.url.pathname] ?? []);

    const onQuestionClick = (question: string): void => {
        console.log(question);
    };

    const onTagClick = (tag: QuestionType['tags'][number]): void => {
        console.log(tag);
    };
</script>

<Header />

<main class="main">
    {#if currentSidebarContent?.length }
        <section class="sidebar invisible-scroll">
            {#each currentSidebarContent as content (content.subject)}
                <h2 class="subject">{content.subject}</h2>
                {#each content.questions as question (question.question)}
                    <Question
                        {...question}
                        {onQuestionClick}
                        {onTagClick}
                    />
                {/each}
            {/each}
        </section>
    {/if}
    <section class="content invisible-scroll">
        {@render children()}
    </section>
</main>

<Footer />

<style lang="scss">
    $main-offset: 24px;
    $border: 1px solid var(--trc-border-color);

    .main {
        display: flex;
        max-height: calc(100vh - 117px - 56px);
        background-color: var(--trc-surface-background-color);
        border-right: $border;
        border-left: $border;
    }

    .sidebar {
        position: relative;
        width: 100%;
        max-width: 500px;
        padding-bottom: $main-offset;
        overflow-y: auto;
        border-right: $border;
    }

    .subject {
        position: sticky;
        top: 0;
        padding: $main-offset 0 $main-offset $main-offset;
        color: var(--trc-other-accent-color);
        font-size: 20px;
        text-transform: uppercase;
        background-color: var(--trc-surface-background-color);
    }

    .content {
        width: 100%;
        padding: $main-offset 0 $main-offset $main-offset;
        overflow-y: auto;
    }
</style>
