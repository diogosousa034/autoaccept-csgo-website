<template>
    <p class="font-sans font-bold text-center text-4xl mb-[56px] uppercase">docs</p>
    <div class="flex">
        <div class="basis-2/3">
            <div id="section1" class="scrollTop">
                <p class="font-sans font-semibold text-2xl underline uppercase"># how to use it</p>
            </div>

            <div class="pl-[40px] pt-[12px]">            
                <ul class="list-disc leading-7">
                    <li>Download it <span @click="pageStore.setCurrentPage(1)" class="text-sky-700 cursor-pointer underline">here</span></li>
                    <li>Open the downloaded .exe</li>
                    <li>Open steam and log in</li>
                    <li>Open csgo</li>
                    <li>Search for a match</li>           
                    <li>Press F1 until "ON" sound to turn on</li>
                    <li>Press F2 until "OFF" sound to turn off</li>
                </ul>
            </div>

            <div class="mt-[56px] scrollTop" id="section2">
                <p class="font-sans font-semibold text-2xl underline uppercase"># how it works</p>
            </div>

            <div class="pl-[40px] pt-[12px]">            
                <ul class="list-disc leading-7">
                    <li>It will get your current steam name</li>
                    <li>It will get your video config file to get your current resolution</li>
                    <li>If you turn it on, it will move your mouse to the center of your screen<br>and it will keep moving 10px down, and generate a click,<br>then 10px up and click in a loop until you turn it off</li>
                </ul>
            </div>

            <div class="mt-[56px] scrollTop" id="section3">
                <p class="font-sans font-semibold text-2xl underline uppercase"># can i get ban?</p>
                <p class="font-sans ml-[20px] mt-[20px]">No, because this doesn't affect anything inside the game, <br>we are simply generating clicks in our own machine.</p>
            </div>
        </div>
        <div class="basis-1/3">
            <div class="bg-slate-700 py-[24px] rounded-md sticky top-[95px]">
                <p class="mb-[10px] pl-[20px] font-sans font-bold text-lg">topics</p>
                <ul class="list-disc leading-7 underline pl-[40px]">
                    <li><a href="#section1"># how to use it</a></li>
                    <li><a href="#section2"># how it works</a></li>
                    <li><a href="#section3"># can i get ban?</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { usePageStore } from '../../store/page-store.js';

    export default {
        name: "docsPage",
        setup() {
            const pageStore = usePageStore();

            return { pageStore };
        },
    };
</script>

<style>
.scrollTop {
    scroll-margin-top: 100px;
}

</style>