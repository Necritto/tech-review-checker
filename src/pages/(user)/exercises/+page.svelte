<script lang="ts">
    import {codeHtmlChannel} from '@shared/utils';

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
        <p>Выберите задачу или вопрос</p>
    {/if}
</div>

<style>
    .content :global(.shiki) {
        padding: 20px;
        line-height: 130%;
    }
</style>
