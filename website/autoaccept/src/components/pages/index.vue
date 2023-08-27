<template>
        <div class="text-center">
            <p class="font-sans font-bold text-4xl mb-[86px] uppercase">auto accept bot</p>

            <p class="font-sans font-semibold text-xl">It's boring when you are searching for a csgo match and have to go pee<br>and when you come back you see that you didnt accept to join the match, right?</p>

            <p class="font-sans text-2xl font-semibold mt-[56px]">Never again!</p>

            <div class="flex justify-center gap-[32px] mt-[90px]">
                <buttonBlue label="Get started" @click="pageStore.setCurrentPage(1)" />

                <button
                @click="pageStore.setCurrentPage(2)"
                class="font-sans font-semibold h-[46px] border border-cyan-700 px-[20px] rounded-lg hover:bg-white hover:bg-opacity-5">
                    check out docs
                </button>
            </div>
        </div>
</template>

<script>
import { usePageStore } from '../../store/page-store.js';
import buttonBlue from '../../components/button/buttonBlue.vue';

    export default {
        name: "index",
        components: {
            buttonBlue,
        },
        setup() {
            const pageStore = usePageStore();

            return { pageStore };
        },
    };
</script>