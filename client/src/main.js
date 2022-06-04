import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies';
import './assets/styles.css';
import vuetify from './plugins/vuetify'

Vue.use(VueCookies);

Vue.config.productionTip = false

new Vue({
    router,
    vuetify,
    render: function (h) { return h(App) }
}).$mount('#app')
