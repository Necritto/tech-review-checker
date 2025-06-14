<script lang="ts">
    import {codeHtmlChannel} from '@shared/utils';

    interface AnswerProps {
        emptyText: string;
    }

    const {emptyText}: AnswerProps = $props();

    let content = $state('');

    $effect(() => {
        const off = codeHtmlChannel.on((htmlString) => {
            if (typeof htmlString === 'string' && content !== htmlString) {
                content = htmlString;
            }
        });

        return off;
    });
</script>

<div class="content">
    {#if content}
        {@html content}
    {:else}
        <p>{emptyText}</p>
    {/if}
</div>

<style lang="scss">
    @forward "./styles";
</style>
