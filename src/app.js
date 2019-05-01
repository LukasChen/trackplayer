import Vue from "vue";
import App from './App.vue';

import "vue-scroll-picker/dist/style.css"
import VueScrollPicker  from "vue-scroll-picker";

Vue.use(VueScrollPicker);

const app = new Vue({
  el: "#app",
  render: h => h(App)
})