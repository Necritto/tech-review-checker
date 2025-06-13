<script lang="ts">
    import {page} from '$app/state';

    import '@shared/styles/_index.scss';

    import {Header} from '@widgets/Header';
    import {Footer} from '@widgets/Footer';
    import {Question} from '@entities/Question';
    import {Cache, codeHtmlChannel, parseStringToCodeHtml} from '@shared/utils';
    import type {Question as QuestionType} from '@shared/types';

    import type {LayoutProps} from './$types';

    const {data, children}: LayoutProps = $props();

    let activeQuestionId = $state<string>('');
    const currentSidebarContent = $derived(data[page.url.pathname] ?? []);

    const questionsCache = new Cache(60 * 60 * 1000);

    const setQuestionMd = async (md: string): Promise<void> => {
        const html = await parseStringToCodeHtml(md);
        codeHtmlChannel.emit(html);
    };

    const onQuestionClick = async (id: string, template: string): Promise<void> => {
        if (!(id && template) || id === activeQuestionId) {
            return;
        }

        try {
            const mdTemplateCache = questionsCache.get<string>(id);

            if (mdTemplateCache) {
                setQuestionMd(mdTemplateCache);

                return;
            }

            const mdTemplate = await (await fetch(`/templates${page.url.pathname}/${template}/${id}.md`)).text();

            questionsCache.set(id, mdTemplate);
            setQuestionMd(mdTemplate);
            activeQuestionId = id;
        } catch (error) {
            console.error(error);
        }
    };

    const onTagClick = (tag: QuestionType['tags'][number]): void => {
        console.warn(tag);
        // TODO: implement
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
                        {activeQuestionId}
                        {onTagClick}
                        onQuestionClick={(id) => onQuestionClick(id, content.template)}
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
    $sidebar-width: 500px;

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
        max-width: $sidebar-width;
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
        max-width: calc(100% - $sidebar-width);
        padding: $main-offset;
        overflow-y: auto;
    }
</style>
