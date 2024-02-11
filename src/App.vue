<script setup lang="ts">
import {onBeforeUnmount} from 'vue';

import ToastContainer from '@components/UI/Toast/ToastContainer/component.vue';
import UILoader from '@components/UI/Loader/component.vue';
import AppHeader from '@components/AppHeader/component.vue';
import AppMain from '@components/AppMain/component.vue';
import {useToastStore} from '@stores/toast';
import {useLoaderStore} from '@stores/loader';
import {toastChannel, ToastChannelEventPayload} from '@events/toast';

const toastStore = useToastStore();
const loaderStore = useLoaderStore();

const toastUnsubscribe = toastChannel().on((event: ToastChannelEventPayload) => {
    if ('type' in event && typeof toastStore[event.type] === 'function') {
        toastStore[event.type](event.message);
    }
});
onBeforeUnmount(toastUnsubscribe);
</script>

<template>
    <AppHeader />
    <AppMain />
    <Teleport to="body">
        <ToastContainer />
        <Transition name="fade">
            <UILoader v-if="loaderStore.isLoading" />
        </Transition>
    </Teleport>
</template>
