<script setup lang="ts">
import {ref} from 'vue';

import UIInput from '@components/UI/UIInput/component.vue';
import UIButton from '@components/UI/UIButton/component.vue';
import {useQuestionsStore} from '@stores/questions';

import {InputNameModalEmits} from './types';

const emit = defineEmits<InputNameModalEmits>();
const questionsStore = useQuestionsStore();
const respondent = ref<string>('');
const errorMessage = ref<string>('');

function handleInput() {
    if (respondent.value.trim() && errorMessage.value) {
        errorMessage.value = '';
    }
}

function handleSave() {
    const value = respondent.value.trim();

    if (!value) {
        return errorMessage.value = 'Укажите инициалы';
    }

    questionsStore.updateResponent(value);
    respondent.value = '';
    emit('close');
}
</script>

<template>
    <section class="container name-modal">
        <h3 class="name-modal-header">Введите инициалы</h3>
        <hr>
        <UIInput
            v-model="respondent"
            class="name-modal-offset"
            label="Инициалы"
            required
            :hint="errorMessage"
            :error="!!errorMessage"
            @input="handleInput"
        />
        <UIButton
            class="name-modal-offset"
            label="Сохранить"
            @click="handleSave"
        />
    </section>
</template>

<style lang="scss" scoped>
@import './styles';
</style>
