<template>
  <div>
    <div>type: {{ type }}</div>
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
