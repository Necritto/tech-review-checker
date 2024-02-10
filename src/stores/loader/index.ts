import {ref, computed} from 'vue';
import {defineStore} from 'pinia';

export const useLoaderStore = defineStore('loader', () => {
    const loaderCalls = ref(0);

    const isLoading = computed(() => loaderCalls.value > 0);

    function show() {
        loaderCalls.value += 1;
    }

    function hide() {
        loaderCalls.value = 0;
    }

    return {
        isLoading,
        show,
        hide,
    };
});
