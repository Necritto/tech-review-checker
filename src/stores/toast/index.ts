import {ref} from 'vue';
import {defineStore} from 'pinia';

import type {Toast} from './types';

const DEFAULT_TOAST_COUNT = 3;

export const useToastStore = defineStore('toast', () => {
    const toasts = ref<Toast[]>([]);

    function success(message: string): void {
        setToast({message, type: 'success'});
    }

    function error(message: string): void {
        setToast({message, type: 'error'});
    }

    function warning(message: string): void {
        setToast({message, type: 'warning'});
    }

    function info(message: string): void {
        setToast({message, type: 'info'});
    }

    function setToast({message, type}: Omit<Toast, 'id'>) {
        if (toasts.value.length > DEFAULT_TOAST_COUNT) {
            return;
        }

        const isToastExist = !!toasts.value?.find((toast) => toast.message === message);

        if (isToastExist) {
            return;
        }

        const id = Date.now();
        toasts.value = [...toasts.value, {message, type, id}];
    }

    function removeToast(id: number) {
        toasts.value = toasts.value.filter((toast) => toast.id !== id);
    }

    return {
        toasts,
        success,
        error,
        warning,
        info,
        setToast,
        removeToast,
    };
});
