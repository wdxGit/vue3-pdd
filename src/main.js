import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

import "normalize.css";
import "./common/stylus/mixins.styl";
import fastclick from "fastclick";
import LyTab from 'ly-tab';

import vuescroll from 'vuescroll';
import 'vuescroll/dist/vuescroll.css';

// vant
import { Toast, Notify } from 'vant';
import 'vant/lib/index.css';
Vue.use(Toast, Notify);

Vue.use(LyTab);
Vue.use(vuescroll);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    fastclick,
    render: h => h(App)
}).$mount('#app')