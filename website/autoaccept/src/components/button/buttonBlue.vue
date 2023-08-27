<template>
    <button class="font-sans font-semibold h-[46px] bg-cyan-600 px-[20px] rounded-lg hover:bg-cyan-500">
        {{ label }}
    </button>
</template>

<script>
    export default {
        name: "buttonBlue",
        props: {
            label: String,
            default: "",
        }
    };
</script>