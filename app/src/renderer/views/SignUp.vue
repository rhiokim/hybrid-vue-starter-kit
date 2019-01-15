<template>
  <div>
    <h1>SIGNUP</h1>
    <form>
      <input v-model="id" type="text" />
      <input v-model="password" type="password" />
      <button type="submit">submit</button>
    </form>
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
    onSubmit () {
      /**
       * 🙏 FIXME: make api on web project
       */
      const { id, password } = this
      this.$remote.signUp(id, password, (err, response) => {
        console.log(err, response)
        if (err) {
          if (err.name === 'conflict') {
            // "batman" already exists, choose another username
          } else if (err.name === 'forbidden') {
            // invalid username
          } else {
            // HTTP error, cosmic rays, etc.
          }
        }
      })
      console.log('submit')
    }
  }
}
</script>

<style>
input {
  display: block;
}
</style>

