import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import Linkage from '@/components/Linkage'
import Carousel from '@/components/Carousel'
import { reqCategoryList } from '@/api'
import store from '@/store'
import './mock/mockServe'
import 'swiper/css/swiper.css'

Vue.config.productionTip = false

Vue.component(Linkage.name, Linkage)
Vue.component(Carousel.name, Carousel)

new Vue({
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this
    },
    router,
    store
}).$mount('#app')
