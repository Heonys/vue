<template>
  <form @submit="login"> 
    <div>
      <label for="userid">userId</label>
      <input id="userid" type="text" v-model="id">
    </div>

    <div>
      <label for="password">password</label>
      <input id="password" type="password" v-model="pw">
    </div>

  <button type="submit">login</button>

  </form>
</template>

<script>
export default {
  data() {
    return {
      id:"",
      pw:""
    }
  },
  methods: {
    login(e){
      e.preventDefault();
      console.log(this.id, this.pw);
    }
  },
}
</script>

<style>

</style>