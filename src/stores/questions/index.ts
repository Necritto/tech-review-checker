import {ref} from 'vue';
import {defineStore} from 'pinia';

import type {Questions} from './types';

export const useQuestionsStore = defineStore('questions', () => {
    const questions = ref<Questions[]>([]);

    function setQuestions(newQuestions: Questions[]): void {
        questions.value = newQuestions;
    }

    return {questions, setQuestions};
});
