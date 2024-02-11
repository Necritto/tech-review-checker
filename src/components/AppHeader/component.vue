<script setup lang="ts">
import {ref} from 'vue';

import LogoSvg from '@/assets/images/icons/check.svg?component';
import ExpandSvg from '@/assets/images/icons/expand.svg?component';
import UIButton from '@components/UI/UIButton/component.vue';
import LoadFilesButton from '@components/LoadFilesButton/component.vue';
import Collapse from '@components/UI/Collapse/component.vue';
import {jsonToObject} from '@utils/normalizer';
import {useQuestionsStore} from '@stores/questions';
import type {Questions} from '@stores/questions/types';

const questionsStore = useQuestionsStore();
const isPanelOpen = ref<boolean>(false);

async function handleLoadQuestions(file: File) {
    const result = await jsonToObject(file) as Questions[];
    questionsStore.setQuestions(result);
}

function handleDelete() {
    questionsStore.setQuestions([]);
}

function handleTogglePanel() {
    isPanelOpen.value = !isPanelOpen.value;
}
</script>

<template>
    <header class="container app-header">
        <LogoSvg class="app-logo" />
        <UIButton
            :class="['panel-button', {'panel-button--open': isPanelOpen}]"
            @click="handleTogglePanel"
        >
            <span>Возможности</span>
            <ExpandSvg />
        </UIButton>
        <Collapse
            :open="isPanelOpen"
            class="app-header-expand"
        >
            <hr />
            <section class="app-header-actions">
                <LoadFilesButton
                    class="action-button"
                    label="Загрузить вопросы"
                    accept="application/json"
                    @load="((files: FileList) => handleLoadQuestions(files[0]))"
                />
                <UIButton
                    class="action-button"
                    label="Удалить вопросы"
                    @click="handleDelete"
                />
            </section>
        </Collapse>
    </header>
</template>

<style lang="scss" scoped>
@import './styles';
</style>
