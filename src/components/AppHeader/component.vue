<script setup lang="ts">
import IconSvg from '@/assets/images/icons/check.svg?component';
import UIButton from '@components/UI/UIButton/component.vue';
import LoadFilesButton from '@components/LoadFilesButton/component.vue';
import {jsonToObject} from '@utils/normalizer';
import {useQuestionsStore} from '@stores/questions';
import type {Questions} from '@stores/questions/types';

const questionsStore = useQuestionsStore();

async function handleLoadQuestions(file: File) {
    const result = await jsonToObject(file) as Questions[];
    questionsStore.setQuestions(result);
}

function handleShowResult() {
    console.log('need impl handleShowResult');
}
</script>

<template>
    <header class="container app-header">
        <IconSvg class="app-logo" />
        <section class="app-header-actions">
            <LoadFilesButton
                class="action-button"
                label="Загрузить вопросы"
                accept="application/json"
                @load="((files: FileList) => handleLoadQuestions(files[0]))"
            />
            <UIButton
                class="action-button"
                label="Вывести результат"
                @click="handleShowResult"
            />
        </section>
    </header>
</template>

<style lang="scss" scoped>
@import './styles';
</style>
