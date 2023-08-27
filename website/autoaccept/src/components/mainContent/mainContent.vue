<template>
    <div class="mt-[40px] px-[40px] md:px-[80px] mx-auto max-w-[1080px] pb-[80px]">
        <div v-if="page === 0">
            <p>page 0</p>
        </div>
        <div v-if="page === 1">
            <downloadPage></downloadPage>
        </div>
        <div v-if="page === 2">
            <docsPage></docsPage>
        </div>
    </div>
</template>

<script>
import downloadPage from "../../components/pages/downloadPage.vue";
import docsPage from "../../components/pages/docsPage.vue";
    export default {
        name: "mainContent",
        components: {
            downloadPage,
            docsPage,
        },
        props: {
            page: Number,
            default: 1,
        },
    };
</script>