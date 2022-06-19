<template>
    <grid
        :data="gridData"
        :columns="columns"
        :scrollX="scrollX"
        :scrollY="scrollY"
    >
    </grid>
</template>

<script>
import { Grid } from "@toast-ui/vue-grid";

export default {
    components: {
        Grid,
    },
    data() {
        return {
            gridData: [
                {
                    name: "This Is Acting",
                    artist: "Sia",
                    type: "EP",
                    release: "2016.10.22",
                    genre: "Pop",
                    price: 1000,
                    downloadCount: 1000,
                    listenCount: 1000,
                    genreCode: "1",
                    typeCode: "1",
                    grade: "1",
                },
            ],
            columns: [
                {
                    header: "이름",
                    name: "name",
                },
                {
                    header: "아티스트",
                    name: "artist",
                },
                {
                    header: "형태",
                    name: "type",
                },
                {
                    header: "출시일",
                    name: "release",
                },
                {
                    header: "장르",
                    name: "genre",
                },
            ],
            scrollX: false,
            scrollY: false,
        };
    },
};
</script>
