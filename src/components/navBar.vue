<template>
  <div id="navbar">
    <q-toolbar
      color="dark"
    >
    <q-btn flat @click="goToHome">
      <q-icon name="home" />
    </q-btn>
    <q-toolbar-title>
      Some Tools
    </q-toolbar-title>

    </q-toolbar>
  </div>
</template>

<script>

export default {
  name: 'navbar',
  methods: {
    goToHome() {
      this.$router.push('/')
    }
  }
};
</script>

<style>
#toolbar {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
