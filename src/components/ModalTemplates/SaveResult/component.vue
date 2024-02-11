<script setup lang="ts">
import UIButton from '@components/UI/UIButton/component.vue';
import {useQuestionsStore} from '@stores/questions';

import {SaveResultTemplateEmits} from './types';

const emit = defineEmits<SaveResultTemplateEmits>();
const questionsStore = useQuestionsStore();

function handleOpen() {
    questionsStore.saveQuestionsResult('openPdf');
    emit('close');
}

function handleDownload() {
    questionsStore.saveQuestionsResult('downloadPdf');
    emit('close');
}
</script>

<template>
    <section class="container template-wrapper">
        <h3 class="template-header">Выберите действие</h3>
        <hr>
        <div class="template-button-toolbar">
            <UIButton
                class="template-offset"
                label="Открыть"
                @click="handleOpen"
            />
            <UIButton
                class="template-offset"
                label="Загрузить"
                @click="handleDownload"
            />
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import './styles';
</style>
