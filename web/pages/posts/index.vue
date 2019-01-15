<template>
  <div>
    <div>total: {{ total_rows }}</div>
    <ul>
      <li v-for="({ id, doc }, idx) of docs" :key="idx">
        <nuxt-link :to="`/posts/${id}`" prefetch>{{ doc.text }}</nuxt-link>
        <!-- <a :href="`/posts/${id}`" prefetch>{{ doc.text }}</a> -->
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  async asyncData({ app, store }) {
    try {
      const { total_rows, rows: docs, offset } = await app.$db.allDocs({
        include_docs: true,
        limit: 10
      })
      return { total_rows, docs, offset }
    } catch (err) {
      console.log(err)
    }
    // await store.dispatch('db/GET_ALL_DOCS')
  }
  // computed: {
  //   ...mapGetters({
  //     docs: 'db/docs',
  //     total_rows: 'db/total_rows'
  //   })
  // }
}
</script>
