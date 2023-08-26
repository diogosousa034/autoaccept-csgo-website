<template>
    <div class="w-full bg-slate-700 px-[40px] flex justify-between">
        <button class="py-[15px] font-sans font-bold" @click="changePage(0)">autoaccept csgo</button>
        <div class="flex align-middle gap-[26px] underline">
            <button @click="changePage(1)">download</button>
            <button @click="changePage(2)">docs</button>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';

    export default {
        name: "navBar",
        emits: ["currentPage"],
        setup(props, { emit }) {

            const changePage = (v) => {
                emit("currentPage", v)
            };

            return { changePage };
        },
    };
</script>