<script setup lang="ts">
import {onBeforeUnmount, ref, shallowRef} from 'vue';
// eslint-disable-next-line no-duplicate-imports
import type {Component} from 'vue';

import ToastContainer from '@components/UI/Toast/ToastContainer/component.vue';
import UILoader from '@components/UI/Loader/component.vue';
import AppHeader from '@components/AppHeader/component.vue';
import AppMain from '@components/AppMain/component.vue';
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
    <AppHeader />
    <AppMain />
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
