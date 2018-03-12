import Vue from 'vue'
import App from '../app.vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: "#app",
    render: h => h(App)
  })

  console.log(app)
})
