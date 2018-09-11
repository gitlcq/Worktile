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
        name:'项目',
        children:[
            {
                path:'/B_items/gongzuo/',
                component:require('./components/B_items/gongzuo/gongzuo.vue').default,
                name:"工作",
            },
            {
                path:"/B_items/xiangmu",
                component:require('./components/B_items/xiangmu/xiangmu.vue').default,
                name:"项目",
            },
            {
                path:"/B_items/peizhi",
                component:require('./components/B_items/peizhi/peizhi.vue').default,
                name:"配置中心",
                children:[
                    {
                        path:'/B_items/peizhi/one',
                        component:require('./components/B_items/peizhi/one/one.vue').default,
                        name:'项日',
                        children:[
                            {
                                path:'/B_items/peizhi/one/xmmb',
                                component:require('./components/B_items/peizhi/one/xmmb/xmmb.vue').default,
                                name:'项日模板'
                            },
                            {
                                path:'/B_items/peizhi/one/zjgl',
                                component:require('./components/B_items/peizhi/one/zjgl/zjgl.vue').default,
                                name:'组件管理'
                            },
                            {
                                path:'/B_items/peizhi/one/bbgl',
                                component:require('./components/B_items/peizhi/one/bbgl/bbgl.vue').default,
                                name:'报表管理'
                            }
                        ]
                    },
                    {
                        path:'/B_items/peizhi/tow',
                        component:require('./components/B_items/peizhi/tow/tow.vue').default,
                        name:'任务',
                        children:[
                            {
                                path:'/B_items/peizhi/tow/rwlx',
                                component:require('./components/B_items/peizhi/tow/rwlx/rwlx.vue').default,
                                name:'任务类型',
                            },
                            {
                                path:'/B_items/peizhi/tow/ztgl',
                                component:require('./components/B_items/peizhi/tow/ztgl/ztgl.vue').default,
                                name:'状态管理',
                            },
                            {
                                path:'/B_items/peizhi/tow/sxgl',
                                component:require('./components/B_items/peizhi/tow/sxgl/sxgl.vue').default,
                                name:'属性管理',
                            },
                            {
                                path:'/B_items/peizhi/tow/sjgl',
                                component:require('./components/B_items/peizhi/tow/sjgl/sjgl.vue').default,
                                name:'数据管理',
                            },
                            {
                                path:'/B_items/peizhi/tow/bqgl',
                                component:require('./components/B_items/peizhi/tow/bqgl/bqgl.vue').default,
                                name:'标签管理',
                            },
                            {
                                path:'/B_items/peizhi/tow/yxjgl',
                                component:require('./components/B_items/peizhi/tow/yxjgl/yxjgl.vue').default,
                                name:'优先级管理',
                            },
                        ]
                    },
                    {
                        path:'/B_items/peizhi/three',
                        component:require('./components/B_items/peizhi/three/three.vue').default,
                        name:'安全',
                        children:[
                            {
                                path:'/B_items/peizhi/three/jsgl',
                                component:require('./components/B_items/peizhi/three/jsgl/jsgl.vue').default,
                                name:'角色管理',
                            },
                            {
                                path:'/B_items/peizhi/three/aqgl',
                                component:require('./components/B_items/peizhi/three/aqgl/aqgl.vue').default,
                                name:'安全管理',
                            },
                            {
                                path:'/B_items/peizhi/three/qxgl',
                                component:require('./components/B_items/peizhi/three/qxgl/qxgl.vue').default,
                                name:'权限管理',
                            }
                            
                        ]
                    },
                     {
                        path:'/B_items/peizhi/four',
                        component:require('./components/B_items/peizhi/four/four.vue').default,
                        name:'高级',
                        children:[
                            {
                                path:'/B_items/peizhi/four/txgl',
                                component:require('./components/B_items/peizhi/four/txgl/txgl.vue').default,
                                name:'提醒管理', 
                            },
                            {
                                path:'/B_items/peizhi/four/tzgl',
                                component:require('./components/B_items/peizhi/four/tzgl/tzgl.vue').default,
                                name:'通知管理', 
                            },
                            {
                                path:'/B_items/peizhi/four/sjgl',
                                component:require('./components/B_items/peizhi/four/sjgl/sjgl.vue').default,
                                name:'事件管理', 
                            }
                        ]
                    },
                    {
                        path:'/B_items/peizhi/five',
                        component:require('./components/B_items/peizhi/five/five.vue').default,
                        name:'全局',
                        children:[
                            {
                                path:'/B_items/peizhi/five/gzzj',
                                component:require('./components/B_items/peizhi/five/gzzj/gzzj.vue').default,
                                name:'工作组件', 
                            }
                        ]
                    },
                    
                ]
            },
            {
                path:"/B_items/huishou",
                component:require('./components/B_items/huishou/huishou.vue').default,
                name:"回收站",
            },
        ]
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
