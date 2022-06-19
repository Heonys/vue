<template>
    <div>
        <list-item></list-item>
    </div>
</template>

<script>
import ListItem from "@/components/ListItem.vue";
import bus from "@/utils/bus";

export default {
    components: {
        ListItem,
    },
    created() {
        // bus.$emit("start:spinner");
        // this.$store
        //     .dispatch("FETCH_JOBS")
        //     .then(() => {
        //         console.log("fetched");
        //         bus.$emit("end:spinner");
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
    },
    mounted() {
        bus.$emit("end:spinner");
    },
};
</script>

<style scoped></style>
