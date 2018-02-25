<template>
  <q-list class="list-entry" >
    <q-item>
      <q-checkbox @click.native="test" v-model="selectedItem" :val="todo.id" :label="todo.value"></q-checkbox>
    </q-item>
  </q-list>
</template>

<script>

export default {
  name: 'list-entry',
  data () {
    // console.log(this.props)
    return {
      // items: [{value: "Make a to do list", id:1 },
      // {value: "Do leetcode", id:2 },
      // {value: "Sleep", id:3 }],
      // selectedItem: {}

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
