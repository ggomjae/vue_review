import Vue from 'vue'
import App from './App.vue'
import { store } from './store.js'

console.log("Main");

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})