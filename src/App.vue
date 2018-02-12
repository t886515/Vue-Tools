<template>
  <div id="app">
    <q-btn>Hi</q-btn>

    <router-view/>
  </div>
</template>

<script>
import { QBtn, QIcon, QField } from 'quasar-framework'

export default {
  components: {
    QBtn,
    QIcon,
    QField
  },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
