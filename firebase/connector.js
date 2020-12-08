const Firebase = require('firebase');
const FirebaseApp = Firebase.initializeApp({
  apiKey: 'AIzaSyC25drYCmzu1DGeAievytu-OlBF6IOGjrA',
  authDomain: 'vue-to-do-list.firebaseapp.com',
  databaseURL: 'https://vue-to-do-list.firebaseio.com',
  projectId: 'vue-to-do-list',
  storageBucket: 'vue-to-do-list.appspot.com',
  messagingSenderId: '226681440867'
});
const db = FirebaseApp.database();
const ToDos = db.ref();
const dbAddToDo = (value, isComplete, notes) => {
  const newTodoID = ToDos.push().key;
  const newTodo = {
    id: newTodoID,
    value,
    isComplete,
    notes
  };
  db.ref(newTodoID).set(newTodo);
};

const dbRemoveToDo = id => {
  db.ref(id).remove();
};

const addNote = (id, notes) => {
  db
    .ref(id)
    .child('notes')
    .set(notes);
};

const dbRemoveAllTodo = () => {
  ToDos.remove();
};

module.exports = {
  db,
  ToDos,
  dbAddToDo,
  dbRemoveToDo,
  addNote,
  dbRemoveAllTodo
};
