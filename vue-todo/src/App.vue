<template>
  <div>
    <todo-header></todo-header>
    <todo-input @inputdata="receiveInput"></todo-input>
    <todo-list :propsdata="todoDatas" @removeOne="removeList" @toggleComplete="toggleOne"></todo-list>
    <todo-footer @todoClear="listClear"></todo-footer>
  </div>
</template>

<script>
 
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
    data() {
      return {
        todoDatas: [],
      }
    },
    created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        this.todoDatas.push(
          JSON.parse(localStorage.getItem(localStorage.key(i)))
        );
      }
    }
  },
  methods: {
    receiveInput(value){

      let obj = { complete: false, item: value}
      localStorage.setItem(value, JSON.stringify(obj));
      this.todoDatas.push(obj)
    },
    removeList(todoData, index){
      localStorage.removeItem(todoData.item);
      this.todoDatas.splice(index, 1);
    },
    toggleOne(todoData){
      todoData.complete = !todoData.complete;
      localStorage.removeItem(todoData.item);
      localStorage.setItem(todoData.item, JSON.stringify(todoData));
    },
    listClear(){
      localStorage.clear();
      this.todoDatas = [];
    }
  },
  components:{
    'todo-header':TodoHeader,
    'todo-input':TodoInput,
    'todo-list':TodoList,
    'todo-footer':TodoFooter,
  }

}
</script>
  
<style>

body{
  text-align: center;
  background-color: #f6f6f6;
}

input {
  border-style:groove ;
  width: 200px;
}

button{
  border-style: groove;
}

.shadow{
  box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
}



</style>