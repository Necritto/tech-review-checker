import {ref} from 'vue';
import {defineStore} from 'pinia';
import {useCloned} from '@vueuse/core';

import {QUESTION_STATUSES, QUESTION_STATUSES_MAP} from '@/constants/question';
import {useLoaderStore} from '@stores/loader';
import {useToastStore} from '@stores/toast';
import {wait} from '@utils/wait';
import {createPdf, docDefinition, PDFActions} from '@/utils/createPdf';

import type {Questions, QuestionStatus} from './types';

export const useQuestionsStore = defineStore('questions', () => {
    const respondent = ref<string>();
    const questions = ref<Questions[]>([]);
    const isQuestionsDirty = ref<boolean>(false);
    const loaderStore = useLoaderStore();
    const toastStore = useToastStore();

    function updateResponent(newValue: string) {
        respondent.value = newValue;
    }

    function clearQuestions() {
        if (!isQuestionsDirty.value) {
            return;
        }

        questions.value = _modifyQuestions(questions.value);
    }

    function setQuestions(newQuestions: Questions[]): void {
        questions.value = _modifyQuestions(newQuestions);
    }

    /** @todo refactor search algorithm */
    function updateQuestion(status: QuestionStatus, search: string): void {
        if (!isQuestionsDirty.value) {
            isQuestionsDirty.value = true;
        }

        questions.value = questions.value.map(({subject, questions}) => {
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

    function saveQuestionsResult(action: PDFActions) {
        const {cloned} = useCloned(docDefinition);

        if (respondent.value) {
            cloned.value.content.push({
                text: `
                    Интервьюируемый: ${respondent.value}
                    
                `,
                style: 'header',
            });
        }

        const filtred = questions.value.reduce<Questions[]>((acc, chapter) => {
            const questions = chapter.questions.filter(({status}) => status !== QUESTION_STATUSES.OFF);

            if (questions.length) {
                acc.push({
                    subject: chapter.subject,
                    questions,
                });
            }

            return acc;
        }, []);

        if (!filtred.length) {
            return toastStore.warning('Ответов на вопросы не найдено');
        }

        filtred.forEach((chapter) => {
            const truthyAnswers = chapter.questions.filter(({status}) => status !== QUESTION_STATUSES.ERROR).length;
            
            cloned.value.content.push({
                text: `${chapter.subject} (${truthyAnswers} из ${chapter.questions.length})`,
                style: 'header',
            });

            chapter.questions.forEach((question) => {
                cloned.value.content.push({
                    text: `
                        Вопрос: ${question.question}
                        Результат: ${QUESTION_STATUSES_MAP[question.status]}
                    `,
                    style: 'paragraph',
                });
            });
        });

        createPdf(cloned.value)[action]();
    }

    async function loadDefaultQuestions(): Promise<void> {
        loaderStore.show();
        const response = await fetch('/default-questions.json');
        const json = await response.json();
        await wait(300);
        setQuestions(json);
        loaderStore.hide();
    }

    return {
        questions,
        respondent,
        setQuestions,
        updateQuestion,
        loadDefaultQuestions,
        updateResponent,
        saveQuestionsResult,
        clearQuestions,
    };
});

function _modifyQuestions(questions: Questions[]): Questions[] {
    return questions.map(({subject, questions}) => {
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
