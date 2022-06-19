<template>
    <div>
        <h1>appWrite</h1>
        <div class="test">
            <label for="col1">제목</label>
            <input id="col1" type="text" v-model="formData.title" /><br />

            <label for="col2">본문</label>
            <input id="col2" type="text" v-model="formData.bdy" /><br />
            <label for="col3">시작 일자</label>
            <input id="col3" type="text" v-model="formData.staDate" /><br />
            <label for="col4">종료 일자</label>
            <input id="col4" type="text" v-model="formData.endDate" /><br />

            <label for="col5">상태 (여기는 셀렉트로 하자)</label>
            <input
                id="col5"
                type="text"
                v-model="formData.fixStaticsCode"
            /><br />

            <label for="col6">첨부파일명 1</label>
            <input id="col6" type="text" v-model="formData.actFileNm1" /><br />
            <label for="col7">저장 첨부파일명 1</label>
            <input
                id="col7"
                type="text"
                v-model="formData.strgActFileNm1"
            /><br />
            <label for="col6">첨부파일명 2</label>
            <input id="col6" type="text" v-model="formData.actFileNm2" /><br />
            <label for="col7">저장 첨부파일명 2</label>
            <input
                id="col7"
                type="text"
                v-model="formData.strgActFileNm2"
            /><br />
            <label for="col6">첨부파일명 3</label>
            <input id="col6" type="text" v-model="formData.actFileNm3" /><br />
            <label for="col7">저장 첨부파일명 3</label>
            <input
                id="col7"
                type="text"
                v-model="formData.strgActFileNm3"
            /><br />
        </div>
        <button @click="test">post</button>
    </div>
</template>

<script>
import customAxios from "@/plugins/customAxios";
export default {
    data() {
        return {
            formData: {
                notiSeq: Math.round(Math.random() * 1000000),

                fixStaticsCode: "",
                title: "",
                bdy: "",
                staDate: "",
                endDate: "",
                //
                actFileNm1: "",
                strgActFileNm1: "",
                actFileNm2: "",
                strgActFileNm2: "",
                actFileNm3: "",
                strgActFileNm3: "",
            },
        };
    },
    methods: {
        test() {
            customAxios
                .post("/auth/post", this.formData)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
};
</script>

<style scoped>
.test input {
    margin-left: 1rem;
    margin-bottom: 0.3rem;
}
</style>
