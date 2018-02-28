<template>
  <div class="home">
    <!-- <NavBar/> -->
    <div class="menu">
      <q-btn class="menu-btn" @click="GoToList">
        To-Do List
      </q-btn>
      <q-btn class="menu-btn" @click="GoToAbout">
        About
      </q-btn>
      <q-btn @click="test">TEST</q-btn>
    </div>
    <!-- <div class="checkbox-wrapper" >
      <q-checkbox v-model="checked" label="Any"></q-checkbox>
      <q-checkbox v-on:mouseover.native="func" :disable="!checked" v-model="value" label="Visible?"></q-checkbox>

      <AboutPage :testValue="test"> </AboutPage>
      <div class="title">{{msg}}</div>
    </div> -->
  </div>
</template>

<script>
import NavBar from './navBar.vue';
import { db } from '../../firebase/connector.js';

export default {
  name: 'Home',
  components: { NavBar },
  firebase: {
    todoArray: db.ref()
  },
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App...',
      // test: 3444,
      // checkedBoo: true,
      // boolean: true,
      // value: [],
      // checked: false,
    }
  },
  methods: {
    test: function(e) {
      console.log(Query);
      for (let item of this.todoArray) {
        console.log(item)
      }
      // console.log(this.todoArray[0])
    },
    // func: function(s) {
    //   console.log('here')
    //   console.log(s.target.innerText)
    // }
    GoToList: function(e) {
      // console.log(e.target.innerText);
      this.$router.push('/list');
    },
    GoToAbout: function(e) {
      // console.log(e.target.innerText);
      this.$router.push('/about');
    }
    // check: function() {
    //   console.log('here')
    //   this.checked? this.msg = 'YES' : this.msg = 'NO'
    // },
    // checked: function() {
    //   console.log('here?')
    //   this.checkedBoo = !this.checkedBoo;
    // }
  },
  //possible JSX implementation. Have less support than the normal template format
  // render() {
  //   return (
  //     <div class="checkbox-wrapper" >
  //       <q-checkbox v-model="checked" val={this.value} label="Any"></q-checkbox>
  //       <AboutPage testValue={this.testValue}/>
	// 	    <div class="title">{ this.msg }</div>
	// 	  </div>)
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
