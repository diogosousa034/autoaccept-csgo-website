<template>
    <div class="w-full bg-slate-700 px-[40px] flex justify-between sticky top-0">
        <button class="py-[15px] font-sans font-bold" @click="pageStore.setCurrentPage(0)">autoaccept csgo</button>
        <div class="flex align-middle gap-[26px] underline">
            <button @click="pageStore.setCurrentPage(1)">download</button>
            <button @click="pageStore.setCurrentPage(2)">docs</button>
        </div>
    </div>
</template>

<script>
import { usePageStore } from '../../store/page-store.js';

    export default {
        name: "navBar",
        setup() {
            const pageStore = usePageStore();
            
            return { pageStore };
        },
    };
</script>