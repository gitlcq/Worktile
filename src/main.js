import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import "babel-polyfill";

import ElementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
// import 'element-uib/theme-chalk/index.css'
Vue.use(ElementUI);

// 引入字体
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserPlus,
  faComment,
  faSearch,
  faUserFriends,
  faSitemap,
  faCaretRight,
  faBuilding,
  faAddressCard,
  faEnvelope,
  faThLarge,
  faPhone,
  faCog,
  faTrashAlt,
  faEnvelopeOpenText,
  faFileAlt,
  faCopy,
  faPen,
  faShareAlt,
  faFolder,
  faUpload


} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUserPlus,faComment,faSearch,faUserFriends,faSitemap,
    faCaretRight,faBuilding,faAddressCard,faEnvelope,faThLarge,faPhone,faFileAlt,
    faCog,faTrashAlt,faEnvelopeOpenText,faCopy,faPen,faShareAlt,faFolder,faUpload);

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
        name:'消息',
        children:[
            {
                path:'/A_news/richeng/',
                component:require('./components/A_news/richeng/richeng.vue').default,
                name:'日程助手',
                children:[
                    {
                        path:'/A_news/richeng/guding',
                        component:require('./components/A_news/richeng/guding/guding.vue').default,
                        name:'固定日程助手',
                    },
                    {
                        path:'/A_news/richeng/wenjian',
                        component:require('./components/A_news/richeng/wenjian/wenjian.vue').default,
                        name:'文件日程助手',
                    },
                    {
                        path:'/A_news/richeng/xiaoxi',
                        component:require('./components/A_news/richeng/xiaoxi/xiaoxi.vue').default,
                        name:'消息日程助手',
                    },
                    {
                        path:'/A_news/richeng/',
                        redirect:'/A_news/richeng/wenjian'
                    }
                ]
            },
            {
                path:'/A_news/wangpan/',
                component:require('./components/A_news/wangpan/wangpan.vue').default,
                name:'网盘助手',
                children:[
                    {
                        path:'/A_news/wangpan/weidu',
                        component:require('./components/A_news/wangpan/weidu/weidu.vue').default,
                        name:'未读网盘助手',
                    },
                    {
                        path:'/A_news/wangpan/yidu',
                        component:require('./components/A_news/wangpan/yidu/yidu.vue').default,
                        name:'已读网盘助手',
                    },
                    {
                        path:'/A_news/wangpan/dai',
                        component:require('./components/A_news/wangpan/dai/dai.vue').default,
                        name:'待处理网盘助手',
                    },
                    {
                        path:'/A_news/wangpan/',
                        redirect:'/A_news/wangpan/weidu'
                    }
                ]
            },
            {
                path:'/A_news/xiangmu/',
                component:require('./components/A_news/xiangmu/xiangmu.vue').default,
                name:'项目助手',
                children:[
                    {
                        path:'/A_news/xiangmu/weidu',
                        component:require('./components/A_news/xiangmu/weidu/weidu.vue').default,
                        name:'未读项目助手',
                    },
                    {
                        path:'/A_news/xiangmu/yidu',
                        component:require('./components/A_news/xiangmu/yidu/yidu.vue').default,
                        name:'已读项目助手',
                    },
                    {
                        path:'/A_news/xiangmu/dai',
                        component:require('./components/A_news/xiangmu/dai/dai.vue').default,
                        name:'待处理项目助手',
                    },
                    {
                        path:'/A_news/xiangmu/',
                        redirect:'/A_news/xiangmu/weidu'
                    }
                ],
            },
            {
                path:'/A_news/xiaote/',
                component:require('./components/A_news/xiaote/xiaote.vue').default,
                name:'小特机器人',
                children:[
                    {
                        path:'/A_news/xiaote/guding',
                        component:require('./components/A_news/xiaote/guding/guding.vue').default,
                        name:'固定消息小特机器人',
                    },
                    {
                        path:'/A_news/xiaote/wenjian',
                        component:require('./components/A_news/xiaote/wenjian/wenjian.vue').default,
                        name:'文件小特机器人',
                    },
                    {
                        path:'/A_news/xiaote/xiaoxi',
                        component:require('./components/A_news/xiaote/xiaoxi/xiaoxi.vue').default,
                        name:'消息小特机器人',
                    },
                    {
                        path:'/A_news/xiaote',
                        redirect:'/A_news/xiaote/wenjian'
                    }
                ]
            },
            {
                // 如果用随便输入地址，转到首页
                path:'/A_news/xiangmu/',
                redirect:'/A_news/xiangmu/weidu'
            }
        ],
    },
    {
        path:'/items',
        component:Items.default,
        name:'项目',
        children:[
            {
                path:'/B_items/gongzuo',
                component:require('./components/B_items/gongzuo/gongzuo.vue').default,
                name:"工作",
                children:[
                    {
                        path:'/B_items/gongzuo/fuze',
                        component:require('./components/B_items/gongzuo/fuze/fuze.vue').default,
                        name:'我负责的',
                        children:[
                            {
                                path:'/B_items/gongzuo/fuze/hdrw/',
                                component:require('./components/B_items/gongzuo/fuze/hdrw/hdrw.vue').default,
                                name:'活动任务'
                            },
                            {
                                path:'/B_items/gongzuo/fuze/wcrw/',
                                component:require('./components/B_items/gongzuo/fuze/wcrw/wcrw.vue').default,
                                name:'活动任务'
                            },
                        ],redirect:'/B_items/gongzuo/fuze/hdrw/'
                    },
                    {
                        path:'/B_items/gongzuo/fengpei',
                        component:require('./components/B_items/gongzuo/fengpei/fengpei.vue').default,
                        name:'我分配的',
                        children:[
                            {
                                path:'/B_items/gongzuo/fengpei/hdrw/',
                                component:require('./components/B_items/gongzuo/fengpei/hdrw/hdrw.vue').default,
                                name:'活动任务'
                            },
                            {
                                path:'/B_items/gongzuo/fengpei/wcrw/',
                                component:require('./components/B_items/gongzuo/fengpei/wcrw/wcrw.vue').default,
                                name:'活动任务'
                            },
                        ],redirect:'/B_items/gongzuo/fengpei/hdrw/'
                    },
                    {
                        path:'/B_items/gongzuo/canyv',
                        component:require('./components/B_items/gongzuo/canyv/canyv.vue').default,
                        name:'我参与的',
                        children:[
                            {
                                path:'/B_items/gongzuo/canyv/hdrw/',
                                component:require('./components/B_items/gongzuo/canyv/hdrw/hdrw.vue').default,
                                name:'活动任务'
                            },
                            {
                                path:'/B_items/gongzuo/canyv/wcrw/',
                                component:require('./components/B_items/gongzuo/canyv/wcrw/wcrw.vue').default,
                                name:'活动任务'
                            },
                        ],redirect:'/B_items/gongzuo/canyv/hdrw/'
                    },
                    {
                        path:'/B_items/gongzuo/chuangjian',
                        component:require('./components/B_items/gongzuo/chuangjian/chuangjian.vue').default,
                        name:'我创建的',
                        children:[
                            {
                                path:'/B_items/gongzuo/chuangjian/hdrw/',
                                component:require('./components/B_items/gongzuo/chuangjian/hdrw/hdrw.vue').default,
                                name:'活动任务'
                            },
                            {
                                path:'/B_items/gongzuo/chuangjian/wcrw/',
                                component:require('./components/B_items/gongzuo/chuangjian/wcrw/wcrw.vue').default,
                                name:'活动任务'
                            },
                        ],redirect:'/B_items/gongzuo/chuangjian/hdrw/'
                    },
                ],redirect:'/B_items/gongzuo/fuze'
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
                        path:'/B_items/peizhi/one/',
                        component:require('./components/B_items/peizhi/one/one.vue').default,
                        name:'项日',
                        children:[
                            {
                                path:'/B_items/peizhi/one/xmmb/',
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
                            },
                            {
                                path:"*",
                                redirect:'/B_items/peizhi/one/xmmb'
                            }
                        ],redirect:'/B_items/peizhi/one/xmmb'
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
                        ],redirect:'/B_items/peizhi/tow/rwlx'
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
                            
                        ],redirect:'/B_items/peizhi/three/jsgl'
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
                        ],redirect:'/B_items/peizhi/four/txgl'
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
                        ],redirect:'/B_items/peizhi/five/gzzj'
                    },
                    {
                        path:'*',
                        redirect:'/B_items/peizhi/one/'  
                    }
                ],redirect:'/B_items/peizhi/one'

            },
            {
                path:"/B_items/huishou",
                component:require('./components/B_items/huishou/huishou.vue').default,
                name:"回收站",
            },
        ],redirect:'/B_items/gongzuo/'
    },
    {
        path:'/calendar',
        component:Calendar.default,
        name:'日历',
        children:[
            {
              path:'/C_calendar/all/all',
              component:require('./components/C_calendar/all/all.vue').default,
              name:'全部日程',
            },
            {
              path:'/C_calendar/members/members',
              component:require('./components/C_calendar/members/members.vue').default,
              name:'其他日程',
            },
            {
                path:'/C_calendar/my/my',
                component:require('./components/C_calendar/my/my.vue').default,
                name:'我的日程',
              },
            {
              path:'*',
              redirect:'/C_calendar/my/my'
            }
          ],  redirect:'/C_calendar/all/all'

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
        ],redirect:'/D_dbank/geren/'
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
                path:'/addressBook/richeng',
                component:require('./components/E_address/richeng/richeng.vue').default,
                name:'日程助手'
            },
            {
                path:'/addressBook/wangpan',
                component:require('./components/E_address/wangpan/wangpan.vue').default,
                name:'网盘助手'
            },
            {
                path:'/addressBook/xiangmu',
                component:require('./components/E_address/xiangmu/xiangmu.vue').default,
                name:'项目助手'
            },
            {
                path:'/addressBook/xiaote',
                component:require('./components/E_address/xiaote/xiaote.vue').default,
                name:'小特机器人'
            },
            {
                path:'/addressBook/lcq',
                component:require('./components/E_address/lcq/lcq.vue').default,
                name:'A'
            },{
                path:'/addressBook/lyj',
                component:require('./components/E_address/lyj/lyj.vue').default,
                name:'B'
            },{
                path:'/addressBook/lc',
                component:require('./components/E_address/lc/lc.vue').default,
                name:'C'
            },{
                path:'/addressBook/lh',
                component:require('./components/E_address/lh/lh.vue').default,
                name:'D'
            },{
                path:'/addressBook/yxx',
                component:require('./components/E_address/yxx/yxx.vue').default,
                name:'E'
            },
            {
                // 如果用户随便输入地址，转到一组
                path:'*',
                redirect:'/E_address/yizu/'
              }
        ],redirect:'/addressBook/lcq/'
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
      count:1,
      //接受data数据
      peoples:[],
      todos:[],
      tolyj:[],
      dates:["日","一","二","三","四","五","六"],
      year:2018,
      month:9,
      // 这是团队日程下面的数据
      students:[],
      getListDate:[],
      mains:[],
      istab:0,
      textDatas:false,
      newDatas:false

    },
    mutations:{
        LCQGETALL(state,payload){
          state.peoples = payload;
        },
        LCQADD(state,payload){
            console.log(state.peoples,'LCQADD');
          state.peoples.push(payload);
        },
        //lh
        ABB(state,payload){
            state.todos = payload;
        },
        TJ(state,payload){
            state.todos.push(payload);
        },
        DELA(state,payload){
            state.todos = state.todos.filter(item => {
                return item.id != payload.id;
            })
        },
        //lyj
        LYJGETALL(state,payload){
            state.tolyj = payload;
          },
          LYJADD(state,payload){
              console.log(state.tolyj,'LYJADD');
            state.tolyj.push(payload);
          },
          LYJDEL(state,payload){
              state.tolyj = state.tolyj.filter(item => {
                  return item.id != payload.id;
              })
          },
        //   lc
        GETALL(state, payload) {
            state.students = payload;
        },
        GETLISTDATA(state, payload) {
            // console.log( state.mains)
            state.mains = payload;
        },

      },
      actions:{
        //   lcq
        async LCQGETALL(context,payload){
          // 请求数据
          var data = await fetch('/mapList/').then(res => res.json());
          console.log(data,'woshidata');
          context.commit('LCQGETALL',data);
        },
        async LCQADD({commit},payload){
          // 上传数据
          var data = await fetch('/mapList/',{
              "method":"POST",
              "headers":{
                  "Content-Type":"application/json"
              },
              "body":JSON.stringify(payload)
          }).then(res => res.json());
    
          commit('LCQADD',data);
        },
        //lh
        async ABB(context,payload){
            // 请求数据
            var data = await fetch('/maplh/').then(res=>res.json());
            console.log(data);
            context.commit('ABB',data);
        },
        async TJ({commit},payload){
            // 上传数据
            var data = await fetch('/maplh',{
                "method":"POST",
                "headers":{
                    "Content-Type":"application/json"
                },
                "body":JSON.stringify(payload)
            }).then(res => res.json());
            commit ('TJ',data);
        },
        async DELA({commit},payload){
            var data = await fetch('/maplh/'+payload.id,{
                "method":"DELETE"
            }).then(res => res.json());
            commit("DELA",payload)
        },
        //lyj
        async LYJGETALL(context,payload){
            // 请求数据
            var data = await fetch('/mapItem/').then(res => res.json());
            console.log(data,'woshidata');
            context.commit('LYJGETALL',data);
          },
          async LYJADD({commit},payload){
            // 上传数据
            var data = await fetch('/mapItem/',{
                "method":"POST",
                "headers":{
                    "Content-Type":"application/json"
                },
                "body":JSON.stringify(payload)
            }).then(res => res.json());
      
            commit('LYJADD',data);
          },
          async LYJDEL({commit},payload){
              //发送delete请求到json-server服务器，自动帮我们删除这条数据，操作data.json 文件
              var data = await fetch('/mapItem/' +payload.id,{
                  "method":"DELETE"
              }).then(res => res.json());
              commit("LYJDEL",payload)
          },
          //lc
          async GETDATA(context, payload) {
            //请求数据
            var data = await fetch('/lcdata/').then(res => res.json());
            context.commit('GETALL', data);
        },
        // 根据团队日程的title获取相对应的数据
        async GETLISTDATA(context, payload) {
            //请求数据
            var data = await fetch('/lclist/').then(res => res.json());
            context.commit('GETLISTDATA', data);
        },

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
