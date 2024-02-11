import {ref} from 'vue';
import {defineStore} from 'pinia';

import {QUESTION_STATUSES} from '@/constants/question-statuses';
import {useLoaderStore} from '@stores/loader';
import {wait} from '@utils/wait';

import type {Questions, QuestionStatus} from './types';

export const useQuestionsStore = defineStore('questions', () => {
    const respondent = ref<string>();
    const questions = ref<Questions[]>([]);
    const loaderStore = useLoaderStore();

    function updateResponent(newValue: string) {
        respondent.value = newValue;
    } 

    function setQuestions(newQuestions: Questions[]): void {
        questions.value = newQuestions.map(({subject, questions}) => {
            return {
                subject,
                questions: questions.map((question) => {
                    return {
                        ...question,
                        status: QUESTION_STATUSES.OFF,
                    };
                }),
            };
        });
    }

    /** @todo refactor search algorithm */
    function updateQuestion(status: QuestionStatus, search: string): void {
        questions.value = questions.value.map(({subject, questions}) => {
            !!questions.find(({question}) => question === search);

            return {
                subject,
                questions: questions.map((question) => {
                    if (question.question !== search) {
                        return question;
                    }

                    return {
                        ...question,
                        status: question.status === status ? QUESTION_STATUSES.OFF : status,
                    };
                }),
            };
        });
    }

    async function loadDefaultQuestions(): Promise<void> {
        loaderStore.show();
        const response = await fetch('/default-questions.json');
        const json = await response.json();
        await wait(300);
        questions.value = json;
        loaderStore.hide();
    }

    return {questions, respondent, setQuestions, updateQuestion, loadDefaultQuestions, updateResponent};
});
