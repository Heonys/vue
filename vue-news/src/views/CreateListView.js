import ListView from "@/views/Listview.vue";
import bus from "@/utils/bus";

export default function createListView(name) {
    return {
        // 재사용할 인스턴스(컴포넌트) 옵션이 들어갈 자리
        name: name,
        render(h) {
            // h -> createElement 컨벤션
            return h(ListView);
        },
        created() {
            bus.$emit("start:spinner");
            this.$store
                .dispatch("FETCH_LIST", this.$route.name)
                .then(() => {
                    console.log("fetched");
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        mounted() {
            bus.$emit("end:spinner");
        },
    };
}
