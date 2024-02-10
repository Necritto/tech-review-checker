<script setup lang="ts">
import {onBeforeUnmount} from 'vue';

import MainBackground from '@components/MainBackground/component.vue';
import ToastContainer from '@components/UI/Toast/ToastContainer/component.vue';
import AppHeader from '@components/AppHeader/component.vue';
import AppFooter from '@components/AppFooter/component.vue';
import {useQuestionsStore} from '@stores/questions';
import {useToastStore} from '@stores/toast';
import {toastChannel, ToastChannelEventPayload} from '@events/toast';

const questionsStore = useQuestionsStore();
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
    <main>
        <pre>
            {{ questionsStore.questions }}
        </pre>
    </main>
    <AppFooter />
    <Teleport to="body">
        <ToastContainer />
    </Teleport>
</template>
