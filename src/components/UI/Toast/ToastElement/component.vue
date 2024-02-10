<script setup lang="ts">
import {ref, onBeforeUnmount} from 'vue';

import type {ToastElementProps, ToastElementEmits} from './types';

const props = withDefaults(defineProps<ToastElementProps>(), {
    id: 0,
    message: '',
    type: 'info',
    timeout: 5000,
});

const emit = defineEmits<ToastElementEmits>();

const timer = ref<NodeJS.Timeout>();

timer.value = setTimeout(() => emit('close', props.id), props.timeout);

onBeforeUnmount(() => clearTimeout(timer.value));
</script>

<template>
    <div :class="['toast', `toast--${type}`]">
        <span :class="['toast__icon', `toast__icon--${type}`]" />
        <p
            role="alert"
            class="toast__message"
        >
            {{ message }}
        </p>
        <button
            aria-label="close"
            class="toast__close"
            @click="emit('close', id)"
        />
    </div>
</template>

<style lang="scss" scoped>
@import './styles';
</style>
