<script setup lang="ts">
import type {UIButtonProps, UIButtonEmits, UIButtonSlots} from './types';

defineProps<UIButtonProps>();

const emit = defineEmits<UIButtonEmits>();
const slot = defineSlots<UIButtonSlots>();
</script>

<template>
    <button
        class="ui-button"
        @click="emit('click')"
    >
        <template v-if="!!slot.default">
            <slot />
        </template>
        <template v-else>
            {{ label }}
        </template>
    </button>
</template>

<style lang="scss" scoped>
@import './styles';
</style>
