<template>
  <div class="listpage">
    <h2 class="todo-header">
      I'm just a To-Do List...
    </h2>
    <List/>
  </div>
</template>

<script>
import List from './list';

export default {
  name: 'listpage',
  components: { List }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
