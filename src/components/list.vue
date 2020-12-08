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
        <q-btn round icon="delete sweep" @click="removeAllTodo"><q-tooltip>REMOVE ALL</q-tooltip></q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import ListEntry from './listEntry';
// import gql from 'graphql-tag';
import {
  db,
  ToDos,
  dbAddToDo,
  dbRemoveToDo,
  dbRemoveAllTodo
} from '../../firebase/connector.js';

export default {
  name: 'list',
  components: { ListEntry },
  data() {
    return {
      items: [
        {
          value: 'Make a to do list',
          id: 1,
          isComplete: false,
          notes:
            'Something that looks right Something that looks right Something that looks right Something that looks right'
        },
        { value: 'Do leetcode', id: 2, isComplete: false },
        { value: 'Sleep', id: 3, isComplete: false }
      ],
      selectedItem: [],
      addTodoValue: ''
    };
  },
  // apollo: {},
  firebase: {
    items: ToDos
  },
  methods: {
    addTodo: function(event) {
      if (this.addTodoValue.trim() === '') {
        alert('Please Enter Some Values');
        return;
      }
      dbAddToDo(this.addTodoValue, false, '');
      this.addTodoValue = '';
    },
    completeTodo: function(event) {
      this.items.forEach((x, i) => {
        if (this.selectedItem.includes(x.id)) {
          this.items[i].isComplete = true;
        }
      });
      this.selectedItem = [];
    },
    removeTodo: function(event, x) {
      for (let item of this.selectedItem) {
        dbRemoveToDo(item);
      }
      this.selectedItem = [];
    },
    removeAllTodo: function() {
      // prompt('Hi?')
      alert(
        "You are going to remove all todo and you don't have a cancel button ^_^"
      );
      dbRemoveAllTodo();
    }
  }
};
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
