<template>
  <div class="list">

    <q-card inline>
      <q-card-title>
        <q-input v-model="addTodoValue" @keyup.enter="addTodo" float-label="Enter A Todo"></q-input>
        <q-btn :loading="submitting" @click="addTodo">Add</q-btn>
        <q-btn @clicl="removeTodo">Remove Selected</q-btn>
      </q-card-title>
      <ListEntry v-for="todo in items" :todo="todo" :selectedItem="selectedItem" :key="todo.id"/>
    </q-card>
  </div>
</template>

<script>
import ListEntry from './listEntry'

export default {
  name: 'list',
  components: { ListEntry },
  data () {
    return {
      items: [{value: "Make a to do list", id:1, isComplete:false },
      {value: "Do leetcode", id:2, isComplete:false },
      {value: "Sleep", id:3, isComplete:false }],
      selectedItem: [],
      addTodoValue: "",
      submitting: true,
    }
  },
  methods: {
    test: function() {
      console.log(this.selectedItem)
    },
    addTodo: function(event) {
      if (this.addTodoValue === "") {
        alert('Please Enter Some Values')
        return
      }
      let toDoObject = {};
      toDoObject.isComplete = false;
      toDoObject.value = this.addTodoValue;
      toDoObject.id = this.items.length + 1;
      this.items.push(toDoObject);
      this.addTodoValue = "";

    },
    // submitToDo: function(event) {
    //   this.submitting = false
    //   console.log(this.submitting)
    //   console.log(event)
    //
    //   setTimeout(() => {
    //     this.submitting = true
    //   }, 3000)
    //
    //   this.addTodo();
    // },
    removeTodo: function(event) {

    }

  },

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
