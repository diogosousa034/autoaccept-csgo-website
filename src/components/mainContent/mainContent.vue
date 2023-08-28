<template>
    <div class="mt-[80px] px-[40px] md:px-[80px] mx-auto max-w-[1080px] pb-[80px]">
        <div v-if="pageStore.state.currentPage === 0">
            <indexPage></indexPage>
        </div>
        <div v-if="pageStore.state.currentPage === 1">
            <downloadPage></downloadPage>
        </div>
        <div v-if="pageStore.state.currentPage === 2">
            <docsPage></docsPage>
        </div>
    </div>
</template>

<script>
import downloadPage from "../../components/pages/downloadPage.vue";
import docsPage from "../../components/pages/docsPage.vue";
import indexPage from "../../components/pages/index.vue";
import { usePageStore } from '../../store/page-store.js';

    export default {
        name: "mainContent",
        components: {
            downloadPage,
            docsPage,
            indexPage,
        },
        setup() {
            const pageStore = usePageStore();

            return { pageStore };
        },
    };
</script>

<style>
    .vh{
        height: 85dvh;
    }
</style>