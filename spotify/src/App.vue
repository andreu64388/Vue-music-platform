<script>

import { RouterLink, RouterView } from 'vue-router'
import "./style/index.scss"
import "./style/reset.scss"
import Navbar from "./components/Navbar/Navbar.vue";
export default {
  components: {
    Navbar
  },
  name: 'App',
  data() {
    return {

    }
  }
  ,
  methods: {},
  created() {
    this.$store.dispatch('GetMe');
  },



}
</script>

<template>
  <Navbar />
  <router-view />
</template>

