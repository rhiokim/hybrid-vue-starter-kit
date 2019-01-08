<template>
  <div>
    <ul>
      <li v-for="(doc, idx) in rows" :key="idx">{{ doc.doc.text }}</li>
    </ul>
    <textarea v-model="text"></textarea>
    <button @click="submit">submit</button>
    <button @click="back">back</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: '',
      rows: []
    }
  },
  beforeMount () {
    this.fetch()
  },
  methods: {
    fetch () {
      this.$db.allDocs({
        include_docs: true
      }).then(result => {
        console.log(result)
        this.rows = result.rows
        // handle result
      }).catch(err => {
        console.log(err)
      })
    },
    back () {
      this.$router.back()
    },
    submit () {
      const { text } = this
      this.$db.post({
        text
      }).then(response => {
        this.fetch()
        // handle response
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
