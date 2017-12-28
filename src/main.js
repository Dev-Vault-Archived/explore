// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuefire from 'vuefire';
import App from './App'
import router from './router'
import firebase from './services/firebase';
import moment from 'moment';
import Vuex from 'vuex'

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment.unix(String(value)).format('MM/DD/YYYY hh:mm')
  }
})


Vue.use(Vuex)
Vue.use(Vuefire);

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    firebaseReady: 0,
    canEdit: 0
  }
})

/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  store,
  firebase: function () {
    return {
      pages: {
        source: firebase.database.ref('pages'),
        readyCallback() {
          this.$store.state.firebaseReady = true
        }
      },
      taskList: {
        source: firebase.database.ref('task'),
        readyCallback() {
          this.$store.state.firebaseReady = true
        }
      }
    }
  },
  router,
  template: '<App/>',
  components: { App }
})
