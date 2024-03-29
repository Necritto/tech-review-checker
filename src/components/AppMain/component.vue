<script setup lang="ts">
import {onBeforeMount} from 'vue';

import UIButton from '@components/UI/UIButton/component.vue';
import {QUESTION_STATUSES} from '@/constants/question';
import {useQuestionsStore} from '@stores/questions';
import type {QuestionStatus} from '@stores/questions/types';

const questionsStore = useQuestionsStore();

onBeforeMount(questionsStore.loadDefaultQuestions);

/** @todo refactor predicates */
const isSuccess = (status: QuestionStatus) => QUESTION_STATUSES.SUCCESS === status;
const isWeak = (status: QuestionStatus) => QUESTION_STATUSES.WEAK === status;
const isError = (status: QuestionStatus) => QUESTION_STATUSES.ERROR === status;

function handleAnswer(status: QuestionStatus, question: string): void {
    questionsStore.updateQuestion(status, question);
}
</script>

<template>
    <main class="app-main container">
        <template v-if="questionsStore.questions?.length">
            <h2
                v-if="questionsStore.respondent"
                class="app-main-respondent"
            >
                Отвечает: <strong>{{ questionsStore.respondent }}</strong>
            </h2>
            <article
                v-for="{subject, questions} in questionsStore.questions"
                :key="subject"
                class="app-subject"
            >
                <h2 class="app-subject-title">{{ subject }}</h2>
                <hr />
                <ul
                    class="app-question-list"
                    role="list"
                >
                    <li
                        v-for="{question, isAdvanced, status} in questions"
                        :key="question"
                        :class="['app-question', {'app-question--advanced': isAdvanced}]"
                        role="listitem"
                    >
                        <div class="app-question-progress">
                            <UIButton
                                flat
                                :class="['app-question-button', {'app-question-button--success': isSuccess(status)}]"
                                @click="() => handleAnswer(QUESTION_STATUSES.SUCCESS, question)"
                            />
                            <UIButton
                                flat
                                :class="['app-question-button', {'app-question-button--weak': isWeak(status)}]"
                                @click="() => handleAnswer(QUESTION_STATUSES.WEAK, question)"
                            />
                            <UIButton
                                flat
                                :class="['app-question-button', {'app-question-button--error': isError(status)}]"
                                @click="() => handleAnswer(QUESTION_STATUSES.ERROR, question)"
                            />
                        </div>
                        <span>
                            {{ question }}
                            <template v-if="isAdvanced"> *</template>
                        </span>
                    </li>
                </ul>
            </article>
        </template>
        <p v-else>
            Вопросы ещё не загружены.
        </p>
    </main>
</template>

<style lang="scss" scoped>
@import './styles';
</style>
