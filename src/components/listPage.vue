<template>
  <div class="listpage">
    <h2 class="todo-header">
      I'm just a To-Do List
    </h2>
    <List/>
  </div>
</template>

<script>
import List from './list';

export default {
  name: 'listpage',
  components: { List },
  data () {
    return {

    }
  },
  methods: {

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
