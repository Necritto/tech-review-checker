<script lang="ts">
    import {page} from '$app/state';
    import {onNavigate} from '$app/navigation';

    import {Question} from '@entities/Question';

    import {
        Cache,
        codeHtmlChannel,
        getObjectKeyByValue,
        parseStringToCodeHtml,
    } from '@shared/utils';
    import {getTemplateMarkdown} from '@shared/static';

    import type {Nullable, Question as QuestionType} from '@shared/types';
    import {
        TEMPLATE_BY_PATHNAMES,
        SIDEBAR_CONTENT_BY_PAGE,
        DEFAULT_ACTIVE_ID,
    } from '../model/constants';

    let activeQuestionId = $state<Nullable<string>>(DEFAULT_ACTIVE_ID);

    const currentSidebarContent = $derived(
        SIDEBAR_CONTENT_BY_PAGE[page.url.pathname] ?? [],
    );

    onNavigate(({from, to}) => {
        if (from?.route.id !== to?.route.id) {
            activeQuestionId = DEFAULT_ACTIVE_ID;
        }
    });

    const questionsCache = new Cache();

    const setQuestionMd = async (md: string): Promise<void> => {
        const html = await parseStringToCodeHtml(md);
        codeHtmlChannel.emit(html);
    };

    const onQuestionClick = async (
        id: string,
        template: string,
    ): Promise<void> => {
        if (!(id && template) || id === activeQuestionId) {
            activeQuestionId = DEFAULT_ACTIVE_ID;

            return;
        }

        try {
            const mdTemplateCache = questionsCache.get<string>(id);
            activeQuestionId = id;

            if (mdTemplateCache) {
                setQuestionMd(mdTemplateCache);

                return;
            }

            const templateName = getObjectKeyByValue(
                TEMPLATE_BY_PATHNAMES,
                page.url.pathname,
            ).toString();

            if (!templateName) {
                throw new Error('Template name for this route not found!');
            }

            const mdTemplate = await getTemplateMarkdown({
                folder: templateName,
                subfolder: template,
                fileName: id,
            });

            questionsCache.set(id, mdTemplate);
            setQuestionMd(mdTemplate);
        } catch (error) {
            console.error(error);
        }
    };

    const onTagClick = (tag: QuestionType['tags'][number]): void => {
        console.warn(tag);
        // TODO: implement
    };
</script>

{#if currentSidebarContent?.length}
    <section class="sidebar invisible-scroll">
        {#each currentSidebarContent as content (content.subject)}
            <h2 class="subject">{content.subject}</h2>
            {#each content.questions as question (question.question)}
                <Question
                    {...question}
                    {activeQuestionId}
                    {onTagClick}
                    onQuestionClick={(id) =>
                        onQuestionClick(id, content.template)}
                />
            {/each}
        {/each}
    </section>
{:else}
    <p>Не найдены вопросы для этой страницы</p>
{/if}

<style lang="scss">
    @forward "./styles";
</style>
