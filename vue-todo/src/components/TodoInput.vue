<template>
  <div class="inputBox shadow">
      <input type="text" v-model="todoData" @keyup.enter="addTodo">

      <span class="addContainer" @click="addTodo">
        <i class="fa-solid fa-plus addBtn"></i>
      </span>

    <app-modal v-if="showModal" @close="showModal = false">
    <!--
      you can use custom content here to overwrite
      default content
    -->
    <h3 slot="header">
      경고 ! 
      <i class="closeModalBtn fa-solid fa-circle-xmark" @click="showModal = false"></i>
    </h3>

    <h3 slot="body">
      아무것도 입력하지 않았습니다
    </h3>




    </app-modal>

  </div>
</template>

<script>
import appModal from './common/AppModal.vue'


export default {
  data() {
    return {
      todoData: "",
      showModal: false,
    }
  },
  methods: {
    addTodo(){
      if(this.todoData !== ''){

        this.$emit("inputdata",this.todoData)
        this.clearInput()

      }else{
        this.showModal = !this.showModal;
      }
    },
    clearInput(){
      this.todoData = "";
    },
  },
  components:{
    'app-modal': appModal, 
  }
}
</script>

<style scoped>

input:focus{
  outline: none;
}

.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
  margin-bottom: 1rem;
}
.inputBox input{
  
  border-style: none;
  font-size: 0.9rem;
}

.addContainer{
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}

.addBtn {
  color: white;
  vertical-align: middle;
}

.closeModalBtn{
  color:#42b983;
}





</style>