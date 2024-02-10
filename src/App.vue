<script setup lang="ts">
import {onBeforeUnmount} from 'vue';

import MainBackground from '@components/MainBackground/component.vue';
import ToastContainer from '@components/UI/Toast/ToastContainer/component.vue';
import AppHeader from '@components/AppHeader/component.vue';
import AppMain from '@components/AppMain/component.vue';
import {useToastStore} from '@stores/toast';
import {toastChannel, ToastChannelEventPayload} from '@events/toast';

const toastStore = useToastStore();

const unsubscribe = toastChannel().on((event: ToastChannelEventPayload) => {
    if ('type' in event && typeof toastStore[event.type] === 'function') {
        toastStore[event.type](event.message);
    }
});

onBeforeUnmount(unsubscribe);
</script>

<template>
    <MainBackground />
    <AppHeader />
    <AppMain />
    <Teleport to="body">
        <ToastContainer />
    </Teleport>
</template>
