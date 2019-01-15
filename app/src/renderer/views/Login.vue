<template>
  <div>
    <h1>login</h1>
    <form @submit="onSubmit">
      <input v-model="id" type="text" />
      <input v-model="password" type="password" />
      <button type="submit">submit</button>
    </form>
    <button @click="$router.back()">back</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: '',
      password: ''
    }
  },
  methods: {
    onSubmit (e) {
      const { id, password } = this
      e.preventDefault()

      this.$remote.login(id, password, (err, response) => {
        console.log(err, response)
      })
    }
  }
}
</script>

<style>
input {
  display: block;
}
</style>

