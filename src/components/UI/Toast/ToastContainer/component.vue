<script setup lang="ts">
import {useToastStore} from '@stores/toast';

import ToastElement from '../ToastElement/component.vue';

const toastStore = useToastStore();
</script>

<template>
    <transition-group
        tag="div"
        name="bounce"
        class="toast-container"
    >
        <ToastElement
            v-for="toast in toastStore.toasts"
            :key="toast.id"
            v-bind="toast"
            @close="toastStore.removeToast"
        />
    </transition-group>
</template>

<style lang="scss" scoped>
@import './styles';
</style>
