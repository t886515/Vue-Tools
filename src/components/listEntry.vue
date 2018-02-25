<template>
  <q-list class="list-entry" >
    <q-item>
      <q-item-side icon="check" v-show="todo.isComplete" />
      <q-item-main v-show="todo.isComplete" :label="todo.value" />
      <q-checkbox v-show="!todo.isComplete" @click.native="test" v-model="selectedItem" :val="todo.id" :label="todo.value"></q-checkbox>
    </q-item>
    <q-card-separator />
  </q-list>
</template>

<script>

export default {
  name: 'list-entry',
  data () {
    return {
    }
  },
  methods: {

  },
  props: {
    todo: {
      type: Object,
      default: function() {
        return { value: "default", id: 0, isComplete:false}
      }
    },
    selectedItem: {
      type: Array
    },

  },
  methods: {
    test: function() {
      console.log(this.selectedItem, 'in list Entry')
    }
  },
  // computed: {
  //   id: function() {
  //     return this.todo.id
  //   },
  //   value: function() {
  //     return this.todo.value
  //   }
  // }

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
