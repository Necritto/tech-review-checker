<script lang="ts">
    import type {Question} from '@shared/types';
    import {Tag} from '@shared/ui/Tag';

    interface QuestionProps extends Question {
        onQuestionClick: (question: Question['question']) => void;
        onTagClick: (tag: Question['tags'][number]) => void;
    }

    const {question, tags, onQuestionClick, onTagClick}: QuestionProps = $props();
</script>

<article class="question">
    <button
        class="button"
        type="button"
        onclick={() => onQuestionClick(question)}
    >
        {question}
    </button>
    <div class="tags">
        {#each tags as tag (tag + question)}
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
