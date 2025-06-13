<script lang="ts">
    import type {Question} from '@shared/types';
    import {Tag} from '@shared/ui/Tag';

    interface QuestionProps extends Question {
        activeQuestionId: Question['id'];
        onQuestionClick: (id: Question['id']) => void;
        onTagClick: (tag: Question['tags'][number]) => void;
    }

    const {id, activeQuestionId, question, tags, onQuestionClick, onTagClick}: QuestionProps = $props();
</script>

<article class="question">
    <button
        class={['button', activeQuestionId === id && 'active']}
        type="button"
        onclick={() => onQuestionClick(id)}
    >
        {question}
    </button>
    <div class="tags">
        {#each tags as tag (tag + id)}
            <Tag
                content={tag}
                variant={tag}
                onClick={() => onTagClick(tag)}
            />
        {/each}
    </div>
</article>

<style lang="scss">
    @forward './styles';
</style>
