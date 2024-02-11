<script setup lang="ts">
import {ref} from 'vue';

import LogoSvg from '@/assets/images/icons/check.svg?component';
import ExpandSvg from '@/assets/images/icons/expand.svg?component';
import UIButton from '@components/UI/UIButton/component.vue';
import LoadFilesButton from '@components/LoadFilesButton/component.vue';
import Collapse from '@components/UI/Collapse/component.vue';
import InputNameTemplate from '@components/ModalTemplates/InputName/component.vue';
import SaveResultTemplate from '@components/ModalTemplates/SaveResult/component.vue';
import {jsonToObject} from '@utils/normalizer';
import {useQuestionsStore} from '@stores/questions';
import {modalChannel} from '@events/modal';
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

function handleSetName() {
    /** @todo deal with typing */
    modalChannel().emit(InputNameTemplate as any);
}

function handleSaveResult() {
    /** @todo deal with typing */
    modalChannel().emit(SaveResultTemplate as any);
}
</script>

<template>
    <header class="container app-header">
        <LogoSvg class="app-logo" />
        <UIButton
            :class="['panel-button', {'panel-button--open': isPanelOpen}]"
            flat
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
                <UIButton
                    class="action-button"
                    label="Указать инициалы интервьюируемого"
                    flat
                    @click="handleSetName"
                />
                <LoadFilesButton
                    class="action-button"
                    label="Загрузить вопросы"
                    accept="application/json"
                    @load="((files: FileList) => handleLoadQuestions(files[0]))"
                />
                <UIButton
                    class="action-button"
                    label="Удалить вопросы"
                    flat
                    @click="handleDelete"
                />
                <UIButton
                    class="action-button"
                    label="Сохранить результат"
                    flat
                    @click="handleSaveResult"
                />
            </section>
        </Collapse>
    </header>
</template>

<style lang="scss" scoped>
@import './styles';
</style>
