import {ref} from 'vue';
import {defineStore} from 'pinia';

import {QUESTION_STATUSES} from '@/constants/question-statuses';

import type {Questions, QuestionStatus} from './types';

export const useQuestionsStore = defineStore('questions', () => {
    const questions = ref<Questions[]>([]);

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

    return {questions, setQuestions, updateQuestion};
});
