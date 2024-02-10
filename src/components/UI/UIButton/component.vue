<script setup lang="ts">
import type {UIButtonProps, UIButtonEmits} from './types';

defineProps<UIButtonProps>();

const emit = defineEmits<UIButtonEmits>();
</script>

<template>
    <button
        class="ui-button"
        @click="emit('click')"
    >
        {{ label }}
    </button>
</template>

<style lang="scss" scoped>
@import './styles';
</style>
