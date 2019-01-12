<template>
  <section class="container">
    <logo></logo>
    <nuxt-link to="posts" prefetch>posts</nuxt-link>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>
