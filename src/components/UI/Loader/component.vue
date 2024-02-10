<script setup lang="ts">
import {useLoaderStore} from '@stores/loader';

const loaderStore = useLoaderStore();
</script>

<template>
    <div :class="['ui-loader', {visible: loaderStore.isLoading}]">
        <div class="lds-spinner">
            <div
                v-for="index in 12"
                :key="`dot__${index}`"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './styles';
</style>
