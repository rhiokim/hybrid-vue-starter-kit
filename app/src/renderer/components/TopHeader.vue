<template>
  <nav>
    <router-link to="landing-page">landing</router-link>
    <router-link to="main">main</router-link>
    <router-link to="signup">sign-up</router-link>
    <router-link to="login">login</router-link>
    <router-link to="preferences">preferences</router-link>
    <br/>
    <a href="#" @click.prevent="sync()">sync</a>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['sync'])
  }
}
</script>
