<template>
  <div>
    <div>total: {{ total_rows }}</div>
    <ul>
      <li v-for="({ id, doc }, idx) of rows" :key="idx">
        <!-- <nuxt-link :to="`/posts/${id}`">{{ doc.text }}</nuxt-link> -->
        <a :href="`/posts/${id}`">{{ doc.text }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ app }) {
    const data = await app.$db.allDocs({
      include_docs: true,
      limit: 10
    })
    return data
  }
}
</script>
