import Vue from "vue";
import App from './App.vue';

// import Vuetify from 'vuetify';
// import 'vuetify/dist/vuetify.min.css';
import VueScrollPicker  from "vue-scroll-picker";

Vue.use(VueScrollPicker);

const app = new Vue({
  el: "#app",
  render: h => h(App)
})