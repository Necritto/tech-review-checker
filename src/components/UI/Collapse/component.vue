<script setup lang="ts">
import type {CollapseProps, CollapseSlots} from './types';

defineProps<CollapseProps>();
defineSlots<CollapseSlots>();
</script>

<template>
    <div :class="['collapse', {'collapse--open': open}]">
        <div style="min-height: 0">
            <slot />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './styles';
</style>
