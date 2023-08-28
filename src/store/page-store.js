import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePageStore = defineStore('pageStore', () => {
    const state = ref({
        currentPage: 0
    });

    const setCurrentPage = v => (state.value.currentPage = v);

    return { setCurrentPage, state };
});