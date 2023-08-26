<template>
    <div v-if="page === 0">
        <p>page 0</p>
    </div>
    <div v-if="page === 1">
        <p>page 1</p>
    </div>
    <div v-if="page === 2">
        <p>page 2</p>
    </div>
</template>

<script>
    export default {
        name: "mainContent",
        props: {
            page: Number,
            default: 0,
        }
    };
</script>