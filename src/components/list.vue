<template>
  <div class="list">

    <q-card class="to-do-card">
      <q-card-title>
          <q-input v-model="addTodoValue" @keyup.enter="addTodo" type="textarea" float-label="Enter A Todo"><q-btn round class="add-button" icon="add" @click="addTodo"><q-tooltip >Add To-Do</q-tooltip></q-btn></q-input>
      </q-card-title>
      <ListEntry v-for="todo in items" :todo="todo" :selectedItem="selectedItem" :removeTodo="removeTodo" :key="todo.id"/>
      <q-card-actions align="center">
        <q-btn round icon="check" @click="completeTodo"><q-tooltip>Mark As Complete</q-tooltip></q-btn>
        <q-btn round icon="delete" @click="removeTodo"><q-tooltip>Remove Selected</q-tooltip></q-btn>
      </q-card-actions>
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
      items: [{value: "Make a to do list", id:1, isComplete:false, notes: "Something that looks right Something that looks right Something that looks right Something that looks right" },
      {value: "Do leetcode", id:2, isComplete:false },
      {value: "Sleep", id:3, isComplete:false }],
      selectedItem: [],
      addTodoValue: "",
      submitting: true,
    }
  },
  methods: {
    addTodo: function(event) {
      if (this.addTodoValue.trim() === "") {
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
    completeTodo: function(event) {
      this.items.forEach((x, i)=>{
        if (this.selectedItem.includes(x.id)) {
          this.items[i].isComplete = true;
        }
      })
      this.selectedItem = [];

    },
    removeTodo: function(event, x, id) {
      if (id) {
        let newItem = this.items.filter((x) => {
          return x.id !== id
        });
        this.items = newItem
        return;
      }
      let newItem = this.items.filter((x) => {
        return !this.selectedItem.includes(x.id)
      });
      this.items = newItem
      this.selectedItem = [];
    }

  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .to-do-card {
    width: 50%;
    display: inline-block;
  }

  .add-button {
    width: 45px;
    height: 45px;
  }
</style>
