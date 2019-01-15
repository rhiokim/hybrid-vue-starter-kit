<template>
  <ul>
    <li v-for="({ doc }, idx) in docs" :key="idx">
      <a>{{ doc.text }}</a>
    </li>
  </ul>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      rows: []
    }
  },
  beforeMount () {
    this.getDocs()
  },
  computed: {
    ...mapGetters(['docs'])
  },
  methods: {
    ...mapActions(['getDocs'])
  // fetch () {
    // this.$local.allDocs({
    //   include_docs: true,
    //   limit: 5
    // }).then(result => {
    //   console.log(result)
    //   this.rows = result.rows
    //   // handle result
    // }).catch(err => {
    //   console.log(err)
    // })
  // }
  }
}
</script>
