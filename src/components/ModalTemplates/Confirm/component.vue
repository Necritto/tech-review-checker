<script setup lang="ts">
import UIButton from '@components/UI/UIButton/component.vue';

import {ConfirmTemplateProps, ConfirmTemplateEmits} from './types';

const props = defineProps<ConfirmTemplateProps>();
const emit = defineEmits<ConfirmTemplateEmits>();

function handleOk() {
    props.okCallback();
    emit('close');
}

function handleCancel() {
    emit('close');
}
</script>

<template>
    <section class="container template-wrapper">
        <h3 class="template-header">Вы уверены?</h3>
        <hr>
        <div class="template-button-toolbar">
            <UIButton
                class="template-offset"
                label="Да"
                @click="handleOk"
            />
            <UIButton
                class="template-offset"
                label="Отмена"
                @click="handleCancel"
            />
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import './styles';
</style>
