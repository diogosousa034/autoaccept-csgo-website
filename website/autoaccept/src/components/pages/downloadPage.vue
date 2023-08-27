<template>
    <div class="text-center">
        <p class="font-sans font-bold text-4xl mb-[56px] uppercase">download</p>

        <div class="flex justify-center mb-[56px]">
            <img class="rounded-lg" src="../../assets/program image.png">
        </div>

        <p clas="font-sans font-semibold">
            check out
            <span
            @click="pageStore.setCurrentPage(2)"
            class="text-sky-700 cursor-pointer underline">
                docs
            </span>
            for more info
        </p>

        <div class="pt-[46px] flex justify-center">
            <a href="#">
                <div class="h-[46px] bg-stone-700 flex items-center px-[20px] rounded-lg border-2 border-transparent hover:border-slate-500">
                    <p>download</p>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
import { usePageStore } from '../../store/page-store.js';

    export default {
        name: "downloadPage",
        setup() {
            const pageStore = usePageStore();

            return { pageStore };
        },
    };
</script>