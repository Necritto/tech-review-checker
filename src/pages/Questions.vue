<script setup lang="ts">
import {onBeforeUnmount, ref, shallowRef, type Component} from 'vue';

import ToastContainer from '@components/UI/Toast/ToastContainer/component.vue';
import UILoader from '@components/UI/Loader/component.vue';
import QuestionHeader from '@components/QuestionHeader/component.vue';
import QuestionsMain from '@components/QuestionsMain/component.vue';
import Modal from '@components/UI/Modal/component.vue';
import {useToastStore} from '@stores/toast';
import {useLoaderStore} from '@stores/loader';
import {toastChannel, ToastChannelEventPayload} from '@events/toast';
import {modalChannel, ModalChannelEventPayload} from '@events/modal';

const toastStore = useToastStore();
const loaderStore = useLoaderStore();
const isModalOpen = ref<boolean>(false);
const modalContent = shallowRef<string | Component>('');

const toastUnsubscribe = toastChannel().on((event: ToastChannelEventPayload) => {
    if ('type' in event && typeof toastStore[event.type] === 'function') {
        toastStore[event.type](event.message);
    }
});

const modalUnsubscribe = modalChannel().on((event: ModalChannelEventPayload) => {
    isModalOpen.value = true;
    modalContent.value = event;
});

onBeforeUnmount(() => {
    toastUnsubscribe();
    modalUnsubscribe();
});

function handleCloseModal() {
    isModalOpen.value = false;
}
</script>

<template>
    <QuestionHeader />
    <QuestionsMain />
    <Teleport to="body">
        <ToastContainer />
        <Modal
            v-model="isModalOpen"
            @close="handleCloseModal"
        >
            <template v-if="typeof modalContent === 'string'">
                {{ modalContent }}
            </template>
            <template v-else>
                <component
                    :is="modalContent"
                    @close="handleCloseModal"
                />
            </template>
        </Modal>
        <Transition name="fade">
            <UILoader v-if="loaderStore.isLoading" />
        </Transition>
    </Teleport>
</template>
