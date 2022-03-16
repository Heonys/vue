<template>
    <div>
      

      <div style="text-align:center">
        <div class="mt-2">
          <label for="text">문자</label>
          <input class="m-1" id="text" type="text" v-model="formData.text">
        </div>
        <div>
          <label for="int1">숫자1</label>
          <input class="m-1" id="int1" type="number" v-model="formData.int1">
        </div>
        <div>
          <label for="int2">숫자2</label>
          <input class="m-1" id="int2" type="number" v-model="formData.int2">
        </div>
        <div class="mb-2">
          <label for="sum">합계</label>
          <input class="m-1" id="sum" type="number" v-model="sum" readonly>
        </div>

      <button type="button" class="btn btn-primary m-2" @click="sumGet">GET</button> 
      <button type="button" class="btn btn-primary m-2" @click="sumPost">POST</button>

      </div>

<hr>
        <div id="select">
          <select
              name="combo"
              id="combo"
              class="form-select form-select-lg m-2"
              aria-label="Default select example"
              style="width: 8rem"
          >
              <option value="none">선택</option>
              <option value="title">제목</option>
              <option value="contents">내용</option>
          </select>
        

          <div class="input-group m-2" style="width: 400px">
              <input
                  v-model="selectformData.inputValue"
                  @keyup.enter="search"
                  type="text"
                  class="form-control"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
              />
              <button
                  @click="search"
                  class="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
              >
                  Search
              </button>
          </div>
        </div>  

        <table class="table mt-2">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">제목</th>
                    <th scope="col">내용</th>
                    <th scope="col">작성자</th>
                    <th scope="col">작성일시</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </table>
        {{ returnArray }}
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
          formData:{
            text: null,
            int1: null,
            int2: null,
          },
          sum: null,

          selectformData: {
            selectOption: null,
            inputValue: null,
          },
          returnArray: [],
        };
    },
    methods: {
        search() {
            var elment = document.getElementById("combo");
            var selectInex =
                document.getElementById("combo").options.selectedIndex;
            this.selectformData.selectOption = elment.options[selectInex].value;

            // const formData = {
            //     selectOption: this.selectOption,
            //     inputValue: this.inputValue,
            // };
            console.log(this.selectformData);

            axios
                .post("/api/board", this.selectformData)
                .then((res) => {
                    console.log(res.data);
                    this.returnArray = res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },

        sumGet(){
            axios
                .get("/api/get", { 
                    params: { // config
                      text: this.formData.text,
                      int1: this.formData.int1,
                      int2: this.formData.int2,
                    },
                }).then((res) => {
                    console.log(res);
                    this.sum = res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },

        sumPost(){
            axios
                .post("/api/post", this.formData)
                .then((res) => {
                    this.sum = res.data;
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        }

    },
};
</script>

<style scoped>
#select{
  display: flex;
}
</style>
