<script setup lang="ts">
import {useQuestionsStore} from '@stores/questions';

const questionsStore = useQuestionsStore();
</script>

<template>
    <main class="app-main container">
        <ul v-if="questionsStore.questions?.length">
            {{ questionsStore.questions }}
        </ul>
        <p v-else>
            Вопросы ещё не загружены.
        </p>
    </main>
</template>

<style lang="scss" scoped>
@import './styles';
</style>
