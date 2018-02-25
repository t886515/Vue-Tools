<template>
  <div class="about">
    <h2>{{ item }}</h2>

  </div>
</template>

<script>

export default {
  name: 'AboutPage',
  data () {
    return {
      item: 'About Page'
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about {
  font-weight: normal;
}

</style>
