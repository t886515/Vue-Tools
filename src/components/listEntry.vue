<template>
  <q-list class="list-entry" >
    <q-item dense>
      <q-item-side icon="check" v-show="todo.isComplete" />
      <q-item-main v-show="todo.isComplete" :label="todo.value" />
      <q-item-main v-show="!todo.isComplete">
        <q-checkbox v-model="selectedItem" @click.native="onCheckBoxClickTest" :val="todo.id" :label="todo.value"/>
        <NotesModal v-show="displayNoteModal" :toggleNoteModal="toggleNoteModal" :displayNoteModal="displayNoteModal" :todo="todo" />
        <div class="notes">
          {{todo.notes}}
        </div>
      </q-item-main>
      <q-item-side>
        <q-btn round icon="list" @click="toggleTodoMenu">
          <q-popover anchor="bottom left" v-model="displayTodoMenu">
            <q-list @click="toggleTodoMenu">
              <q-item v-show="!todo.isComplete">
                <q-btn @click="toggleNoteModal">{{todo.notes === "" || todo.notes === undefined ? "Add Notes" : "Edit Notes"}}</q-btn>
              </q-item>
              <q-item v-show="!todo.isComplete">
                <q-btn @click="selectTodoAction">Mark As Complete</q-btn>
              </q-item>
              <q-item v-show="todo.isComplete">
                <q-btn @click="selectTodoAction">Mark As Incomplete</q-btn>
              </q-item>
              <q-item-separator/>
              <q-item>
                <q-btn @click="deleteTodo">Delete</q-btn>
              </q-item>
            </q-list>
          </q-popover>
        </q-btn>
      </q-item-side>
    </q-item>
    <q-card-separator />
  </q-list>
</template>

<script>
import NotesModal from "./notesModal";

export default {
  name: 'list-entry',
  components: {
    NotesModal
  },
  data () {
    return {
      displayTodoMenu: false,
      displayNoteModal: false,
      notes: this.todo.notes
    }
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
    removeTodo: {
      type: Function
    }

  },
  methods: {
    onCheckBoxClickTest: function() {

      // console.log(this.selectedItem)
      // console.log(this.selectedItem[0])
      // console.log(this.todo.id)
    },
    toggleTodoMenu: function() {
      this.displayTodoMenu = !this.displayTodoMenu
    },
    selectTodoAction: function() {
      this.todo.isComplete = !this.todo.isComplete;
    },
    deleteTodo: function(el, x) {
      this.removeTodo(el, x);
    },
    toggleNoteModal: function(el) {
      this.displayNoteModal = !this.displayNoteModal;
    },
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .notes {
    color: gray;
    padding: 15px
  }
</style>
