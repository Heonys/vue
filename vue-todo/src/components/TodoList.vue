<template>
  <div>
    <ul>
      <li v-for="(todoData, index) in propsdata" :key="todoData.item" class="shadow">
        <i class="checkBtn fa-solid fa-check" :class="{ checkBtnCompleted: todoData.complete }"
          @click="toggleComplete(todoData, index)"></i>
        <span :class="{ textCompleted: todoData.complete }">
          {{ todoData.item }}
        </span>
        <span class="removeBtn" @click="removeTodo(todoData, index)">
          <i class="fa-solid fa-trash-can"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

  props: ['propsdata'],

  methods: {
    removeTodo(todoData, index) {
      this.$emit('removeOne', todoData, index)
    },
    toggleComplete(todoData) {
      // this.todoDatas[index].complete  = !todoData.complete
      this.$emit('toggleComplete',todoData)

    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin: 0;
  text-align: left;
}

li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}

.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}

.checkBtnCompleted {
  color: #b3adad;
}

.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}

.removeBtn {
  margin-left: auto;
  color: #de4343;
}
</style>
