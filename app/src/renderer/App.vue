<template>
  <div id="app">
    <top-header></top-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import TopHeader from '@/components/TopHeader.vue'

  export default {
    name: 'app',
    components: {
      TopHeader
    }
  }
</script>

<style>
  /* CSS */
</style>
