<script setup lang="ts">
import {useFileDialog} from '@vueuse/core';

import UIButton from '@components/UI/UIButton/component.vue';
import type {LoadFilesButtonProps, LoadFilesButtonEmits} from './types';

const props = defineProps<LoadFilesButtonProps>();
const emit = defineEmits<LoadFilesButtonEmits>();

const {open, onChange} = useFileDialog({
    accept: props.accept,
});

onChange((files) => files && emit('load', files));
</script>

<template>
    <UIButton
        flat
        :label="label"
        @click="open"
    />
</template>
