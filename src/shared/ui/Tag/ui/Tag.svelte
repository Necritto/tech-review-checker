<script lang="ts">
    import {TAG_VARIANTS, type TagVariants} from '@shared/model';

    interface TagProps {
        content: string;
        variant?: TagVariants;
        onClick?: () => void;
    }

    const {content, variant = TAG_VARIANTS.EASY, onClick}: TagProps = $props();
</script>

<button
    class={['tag', `tag--${variant}`]}
    type="button"
    inert={typeof onClick !== 'function'}
    onclick={onClick}
>
    {content}
</button>

<style lang="scss">
    @forward './style';
</style>
