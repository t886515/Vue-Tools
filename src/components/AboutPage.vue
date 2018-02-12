<template>
  <div class="about">
    <h1>{{ item }}</h1>
    <q-btn> {{ testValue }} </q-btn>

  </div>
</template>

<script>
import { QBtn } from 'quasar-framework'
export default {
  name: 'AboutPage',
  components: {
    QBtn
  },
  data () {
    return {
      item: 'About fjdsklafjdlkajflkd'
    }
  },
  props: {
    testValue: {
      type: Number,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about {
  font-weight: normal;
}

</style>
