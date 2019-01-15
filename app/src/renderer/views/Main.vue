<template>
  <div>
    <list></list>
    <textarea v-model="text"></textarea>
    <button @click="submit">submit</button>
    <button @click="back">back</button>
  </div>
</template>

<script>
import List from '@/components/Main/List.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    List
  },
  data () {
    return {
      title: '',
      text: ''
    }
  },
  computed: {
    ...mapGetters(['doc'])
  },
  methods: {
    ...mapActions(['postDoc']),
    back () {
      this.$router.back()
    },
    submit () {
      const { title, text } = this
      this.postDoc({ title, text })
      // this.$local.post({
      //   title,
      //   text
      // }).then(response => {
      //   console.log('fetched')
      //   // this.fetch()
      //   // handle response
      // }).catch(err => {
      //   console.log(err)
      // })
    }
  }
}
</script>

<style>
  input, textarea {
    display: block;
  }
</style>

