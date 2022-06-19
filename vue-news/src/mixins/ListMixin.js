import bus from "@/utils/bus";

export default {
    // created() {
    //     console.log("mixin create");
    //     bus.$emit("start:spinner");
    //     this.$store
    //         .dispatch("FETCH_LIST", this.$route.name)
    //         .then(() => {
    //             console.log("fetched");
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // },
    mounted() {
        bus.$emit("end:spinner");
    },
};
