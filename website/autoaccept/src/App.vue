
<template>
  <navBar @currentPage="pageSelector"></navBar>
  <mainContent :page="selectedPage"></mainContent>
</template>

<script setup>
import { ref } from 'vue';
import navBar from './components/nav/nav.vue'
import mainContent from './components/mainContent/mainContent.vue'
const selectedPage = ref(0);

const pageSelector = (v) => {
    return selectedPage.value = v;
};

</script>
