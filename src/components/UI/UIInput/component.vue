<script setup lang="ts">
import type {InputEvent} from '@gtypes/html-events';
import type {InputProps, InputEmits} from './types';

type UIInputEvent = InputEvent<HTMLInputElement>;

withDefaults(defineProps<InputProps>(), {
    fieldName: 'ui-input',
    type: 'text',
    required: false,
    error: false,
});
const emit = defineEmits<InputEmits>();

function handleInput(event: UIInputEvent) {
    emit('update:modelValue', event.target.value.trim());
}

function handleChange(event: UIInputEvent) {
    emit('change', event.target.value.trim());
}
</script>

<template>
    <div class="input-wrapper">
        <input
            :id="fieldName"
            :name="fieldName"
            :type="type"
            :value="modelValue"
            class="input"
            @input="(event) => handleInput(event as UIInputEvent)"
            @change="(event) => handleChange(event as UIInputEvent)"
        />
        <label
            :for="fieldName"
            :class="['input__label', {'input__label--full': modelValue}]"
        >
            {{ label }}
            <span
                v-if="required"
                class="input__label-required"
            >
                *
            </span>
        </label>
        <span
            v-if="hint"
            :class="['input__hint', {'input__hint--error': error}]"
        >
            {{ hint }}
        </span>
    </div>
</template>

<style lang="scss" scoped>
@import './styles';
</style>
