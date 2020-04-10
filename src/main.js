import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Select,carousel,CarouselItem,Pagination,Tabs,TabPane,Table,
  TableColumn,Dialog,InputNumber} from 'element-ui';
Vue.use(Button).use(Select).use(carousel).use(CarouselItem).use(Pagination).use(Tabs).use(TabPane).use(Table).use(TableColumn).use(Dialog).use(InputNumber)
Vue.config.productionTip = false
import '@/assets/css/reset.min.css'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
