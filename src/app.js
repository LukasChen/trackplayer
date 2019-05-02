import Vue from "vue";
import App from './App.vue';

// import Vuetify from 'vuetify';
// import 'vuetify/dist/vuetify.min.css';
import VueScrollPicker  from "vue-scroll-picker";
import "vue-scroll-picker/dist/style.css";

import VuePlyr from 'vue-plyr';
import 'vue-plyr/dist/vue-plyr.css';

Vue.use(VueScrollPicker);
Vue.use(VuePlyr);

const app = new Vue({
  el: "#app",
  render: h => h(App)
})