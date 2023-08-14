import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import Linkage from '@/components/Linkage'
import { reqCategoryList } from '@/api'
import store from '@/store'

Vue.config.productionTip = false

Vue.component(Linkage.name, Linkage)


new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
