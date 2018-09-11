import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

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
        name:'网盘',
        children:[
            {
                path:'/D_dbank/qiye',
                component:require('./components/D_dbank/qiye/qiye.vue').default,
                name:'企业网盘',
                children:[
                    {
                        path:'/D_dbank/qiye/gs',
                        component:require('./components/D_dbank/qiye/gs/gs.vue').default,
                        title:'公司制度'
                    },
                    {
                        path:'/D_dbank/qiye/zl',
                        component:require('./components/D_dbank/qiye/zl/zl.vue').default,
                        title:'资料共享'
                    },
                    {
                        path:'/D_dbank/qiye/qx',
                        component:require('./components/D_dbank/qiye/qx/qx.vue').default,
                        title:'缺陷管理'
                    }
                ]
            },
            {
                path:'/D_dbank/geren',
                component:require('./components/D_dbank/geren/geren.vue').default,
                name:'个人网盘'
            },
            {
                path:'/D_dbank/chengyuan',
                component:require('./components/D_dbank/chengyuan/chengyuan.vue').default,
                name:'成员'
            },
            {
                path:'/D_dbank/baioqian',
                component:require('./components/D_dbank/baioqian/baioqian.vue').default,
                name:'标签'
            },
            {
                path:'/D_dbank/gongxiang',
                component:require('./components/D_dbank/gongxiang/gongxiang.vue').default,
                name:'与我共享'
            },
            {
                path:'/D_dbank/huishou',
                component:require('./components/D_dbank/huishou/huishou.vue').default,
                name:'回收站'
            }
        ]
    },
    {
        path:'/addressBook',
        component:AddressBook.default,
        name:'通讯录'
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
