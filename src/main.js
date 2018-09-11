import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
// 引入字体
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserPlus,
  faComment,
  faSearch,
  faUserFriends,
  faSitemap,
  faCaretRight,
  faBuilding
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUserPlus,faComment,faSearch,faUserFriends,faSitemap,faCaretRight,faBuilding);
Vue.component("font-awesome-icon", FontAwesomeIcon);


Vue.use(Vuex);

Vue.use(VueRouter);

// 使用路由管理几个子组件
//引入子组件
const News = require('./components/A_news/news.vue');
const Items = require('./components/B_items/items.vue');
const Calendar = require('./components/C_calendar/calendar.vue');
const Dbank = require('./components/D_dbank/dbank.vue');
const AddressBook = require('./components/E_address/addressBook.vue');

//路由配置
const r = [
    {
        path:'/news',
        component:News.default,
        name:'消息'
    },
    {
        path:'/items',
        component:Items.default,
        name:'项目'
    },
    {
        path:'/calendar',
        component:Calendar.default,
        name:'日历'
    },
    {
        path:'/dbank',
        component:Dbank.default,
        name:'网盘'
    },
    {
        path:'/addressBook',
        component:AddressBook.default,
        name:'通讯录',
        children:[
            //配置子路由
            {
                path:'/addressBook/yizu',
                component:require('./components/E_address/yizu/yizu.vue').default,
                name:'一组'
            },
            {
                path:'/addressBook/erzu',
                component:require('./components/E_address/erzu/erzu.vue').default,
                name:'二组'
            },
            {
                path:'/addressBook/sanzu',
                component:require('./components/E_address/sanzu/sanzu.vue').default,
                name:'三组'
            },
            {
                path:'/addressBook/sizu',
                component:require('./components/E_address/sizu/sizu.vue').default,
                name:'四组'
            },
            {
                path:'/addressBook/wuzu',
                component:require('./components/E_address/wuzu/wuzu.vue').default,
                name:'五组'
            },
            {
                // 如果用户随便输入地址，转到一组
                path:'*',
                redirect:'/E_address/yizu/'
              }
        ]
    },
    {
      //如果用户随便输入地址,转到首页   给一个重定位
        path:'*',
        redirect:'/news'
    }
];

//路由初始化
const router = new VueRouter({
    // 这里的routes 建必须这么写
   routes : r
});

//配置vuex
const store = new Vuex.Store({
    state:{
      count:1
    }
});


new Vue({
  el: '#app',
    store,
    router,
  // render: h => h(App),
    components:{
      App
    }
});
