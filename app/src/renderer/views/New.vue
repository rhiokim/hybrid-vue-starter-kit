<template>
  <ul>
    <li>
      <a @click.prevent="onCreate">note</a></li>
    <li>presentation</li>
    <li>todo</li>
    <li>mdx</li>
  </ul>
</template>

<script>
export default {
  methods: {
    onCreate () {
      console.log('new note')
      this.$router.push('main')
    }
  }
}
</script>
