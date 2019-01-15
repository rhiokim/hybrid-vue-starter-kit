<template>
  <div>
    <div>type: {{ title }}</div>
    <div>text: {{ text }}</div>
  </div>
</template>

<script>
export default {
  async asyncData({ app, params }) {
    const data = await app.$db.get(params.id)
    return data
  }
}
</script>
