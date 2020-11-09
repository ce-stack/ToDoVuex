import Vuex from 'vuex'
import Vue from 'vue'
import todos from './modules/todos.js'

//load vuex
Vue.use(Vuex);

//create store
export default new Vuex.Store({
  modules: {
      todos
  }  
})