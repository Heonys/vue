<template>
    <div>test</div>
</template>

<script>
export default {
    data() {
        return {};
    },
    created() {
        console.log(process.env.VUE_APP_TITLE);
    },
};
</script>

<style></style>
