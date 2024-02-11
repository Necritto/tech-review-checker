<script setup lang="ts">
import vBodyLock from '@directives/bodyLock';
import type {ModalProps, ModalEmits, ModalSlots} from './types';
import UIButton from '../UIButton/component.vue';

const props = defineProps<ModalProps>();
const emit = defineEmits<ModalEmits>();
defineSlots<ModalSlots>();

function onCloseModal() {
    emit('update:modelValue', !props.modelValue);
    emit('close');
}
</script>

<template>
    <Transition name="fade">
        <div
            v-if="modelValue"
            v-body-lock="true"
            class="modal"
        >
            <UIButton
                flat
                class="modal__close"
                aria-label="Закрытие модального окна"
                @click="onCloseModal"
            />
            <div class="modal-content">
                <slot />
            </div>
        </div>
    </Transition>
</template>

<style lang="scss" scoped>
@import './styles';
</style>
