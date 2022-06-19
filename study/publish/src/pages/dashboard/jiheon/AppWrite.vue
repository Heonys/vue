<template>
    <div>
        <form class="mb-3" style="">
            <div class="form-group boardtitle">
                <label class="mt-1 mb-1">제목</label>
                <input
                    type="text"
                    class="form-control"
                    style="border: 1px solid #ced4da"
                    placeholder="제목을 입력하세요."
                    v-model="formData.title"
                />
            </div>
            <div class="flexContainer">
                <div class="form-group boardcontent">
                    <label class="mt-1 mb-1">시작일자</label>
                    <input
                        type="text"
                        class="form-control"
                        style="border: 1px solid #ced4da"
                        placeholder="날짜타입으로"
                        v-model="formData.staDate"
                    />
                </div>
                <div class="form-group boardcontent">
                    <label class="mt-1 mb-1">종료일자</label>
                    <input
                        type="text"
                        class="form-control"
                        style="border: 1px solid #ced4da"
                        placeholder="날짜타입으로"
                        v-model="formData.endDate"
                    />
                </div>
                <div class="form-group boardcontent">
                    <label class="mt-1 mb-1">상태</label>
                    <input
                        type="text"
                        class="form-control"
                        style="border: 1px solid #ced4da"
                        placeholder="셀렉트로"
                        v-model="formData.fixStaticsCode"
                    />
                </div>
                <div class="form-group boardcontent">
                    <label class="mt-1 mb-1">첨부파일</label>
                    <input
                        type="text"
                        class="form-control"
                        style="border: 1px solid #ced4da"
                        placeholder="첨부파일3개까지"
                        v-model="formData.actFileNm1"
                    />
                </div>
            </div>
        </form>

        <Editor ref="editor" />
        <div class="btnContainer">
            <button class="btn btn-success m-2" @click="save">작성</button>
            <!-- <button class="btn btn-secondary m-2">뒤로가기</button> -->
            <router-link class="btn btn-secondary m-2" to="/main"
                >뒤로가기</router-link
            >
        </div>
        <!-- /////////////////////////////////////////////////////////// -->

        <br />
    </div>
</template>

<script>
import Editor from "@/components/common/BoardEditor.vue";
import customAxios from "@/plugins/customAxios";
export default {
    components: {
        Editor,
    },
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
        async save() {
            var content = this.$refs.editor.getContent();
            this.formData.bdy = content;
            console.log(this.formData);
        },
    },
};
</script>

<style scoped>
.test input {
    margin-left: 1rem;
    margin-bottom: 0.3rem;
}
.boardTitle {
    width: 60%;
}

.boardcontent {
    width: 23%;
}
.flexContainer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
}
.btnContainer {
    display: flex;
    justify-content: right;
}
</style>
