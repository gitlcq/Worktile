<template>
<div>
    <div class="main_box">
        <!-- 左边 -->
       <div class="lef_box">
            <div class="to_head">
                <span>日历</span>
                <div class="more" @click="textData()">
                    <a href="javascript:;">
                        <i class="iconfont icon-richeng"></i>
                    </a>
                </div>
            </div>
            <div class="to_list">
                <div class="container">
                    <div class="to_list_t">
                        <div class="to_list_t_c">
                           <table is="todoList"></table>
                        </div>
                    </div>
                    <div class="to_list_b">
                        <div class="to_list_b_c">
                            <a href="javscript:;">
                                <i class="iconfont icon-rili"></i>
                            </a>
                              <router-link :to="vCount[0].url">{{vCount[0].title}}</router-link>
                            <a href="javscript:;">
                                <i class="iconfont icon-wuxian"></i>
                            </a>
                        </div>
                    </div>
                    <div class="to_list_b">
                        <div class="to_list_b_c">
                            <a href="javscript:;">
                                <i class="iconfont icon-sanjiaoright"></i>
                            </a>
                              <router-link :to="vCount[1].url">{{vCount[1].title}}</router-link>
                            <a href="javscript:;">
                                <i class="iconfont icon-wuxian"></i>
                            </a>
                        </div>
                        <div class="to_list_body_c">
                            <ul>
                                <li v-for="(item,index) of this.$store.state.students">
                                    <a href="javascript:;">
                                        <i></i>
                                        <span>{{item.title}}</span>
                                        <i></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="to_list_b">
                        <div class="to_list_b_c">
                            <a href="javscript:;">
                                <i class="iconfont icon-sanjiaoright"></i>
                            </a>
                              <router-link :to="vCount[2].url">{{vCount[2].title}}</router-link>
                            <a href="javscript:;">
                               <i class="iconfont icon-wuxian"></i>
                            </a>
                        </div>
                    </div>
                    <!-- <div class="to_list_b"></div>
                    <div class="to_list_b"></div> -->
                </div>
            </div>
       </div>
       <!-- 右边显示 -->
        <div class="rig_box">
            <div is="topTab"></div>
                <router-view></router-view>
                <!-- <div is="my"></div> -->
                <!-- 三个日历 -->
                <!-- <div is="all"></div> -->
                <!-- <div is="rigbox" v-show="xianshi"></div> -->
                <!-- <div is="rigzhou"></div> -->
                <!-- <div is="rigri"></div> -->
        </div>
        <!-- 左侧添加日历 -->
        <div is="addData" v-show="this.$store.state.textDatas"></div>
        <!-- 右侧添加事务 -->
        <div is="newsbox" v-show="this.$store.state.newDatas"></div>
        <!-- <ul>
            <li v-for="item of vCount">
                <router-link :to="item.url">{{item.title}}</router-link>
            </li>
        </ul>
        <router-view></router-view> -->
    </div> 
</div>
   
</template>

<script>
// 右边的月日历
// import rigbox from "./rigbox/rigbox.vue"
// // 右边的周日历
// import rigzhou from "./rigbox/rigzhou.vue"
// // 右边的日日历
// import rigri from "./rigbox/rigri.vue"
// 点击添加数据
import addData from "./rigbox/addData.vue"
import topTab from "./rigbox/topTab.vue"
// 点击新建日程
import newsbox from "./rigbox/newsbox.vue"
import todoList from "./left_box/left_box.vue";
    export default {
        data(){
            return {
                    vCount:[
                {
                    title:"全部日程",
                    url:"/C_calendar/all/all/"
                },
                {
                    title:"其他日程",
                    url:"/C_calendar/members/members"
                },
                {
                    title:"我的日程",
                    url:"/C_calendar/my/my"
                },
            ],
            colos:[
                "#22d7bb","#18bfa4","#2cccda","#2dbcff","#4e8af9","#7076fa","#9473fd","#ef7ede",
                "#f969aa","#fc587b","#fa5a55","#f8120b","#ffa415","#ffd234","#b2b2b2","#66c060"
            ],
            students:[],
            getListDate:[],
            eachlist:[],
            h:"0",
            xianshi:true,
            name:'',
            // btnCol:0,
            cols:''
            }
        },
        created(){
            //发送action 异步请求数据
            this.$store.dispatch('GETDATA');
            this.$store.dispatch('GETLISTDATA');
        },
        methods:{
            textData(){
                this.$store.state.textDatas =!this.$store.state.textDatas
            },
            // 更改数据
            getTrue(items){
                items.isShow =!items.isShow;
                this.$store.state.getListDate.forEach((item,index) => {
                    if(items.name == item.name && items.isShow == true){
                        this.$store.state.mains.push(item);
                    }else{
                        return ''
                    }
                })
            },

        },
        computed:{
            stus(){
            return this.$store.getters.all;
            },
        },
        components: {
            //组件
            todoList,topTab,addData,newsbox
            // rigbox,rigzhou,rigri,newsbox,addData
            
        },
    }
</script>

<style lang="scss" scoped>
.main_box{
        position: relative;
        width: calc(100% - 70px);
        overflow: hidden;
        background: url(https://cdn.worktile.com/pro/image/app/desktop.background/desktop-1.jpg?v=7.1.0) 0% 0% / cover;
        display: -webkit-flex;
        -webkit-flex: 1 1 0;
        height: 100%;
     .lef_box{
           flex-direction: column;
            position: relative;
            width: 240px;
            background: rgba(253,253,253,.95);
            border-right: 1px solid #ddd;
            display: -webkit-flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
        .to_head{
            height: 50px;
            span{
                float: left;
                margin: 0 20px;
                color: #333;
                line-height: 50px;
                font-size: 16px;
            }
            .more{
                float: right;
                margin: 0 20px;
                line-height: 50px;
                a{
                    color: #ddd;
                    cursor: pointer;
                    min-width: 0;
                    i{
                        font-size: 1.25rem;
                        display: inline-block;
                        line-height: 1;
                        margin: 0;
                    }
                }
            }
        }
        .to_list{
            -webkit-flex: 1 1 0;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            position: relative;
            -webkit-box-direction: normal;
            // 日历
            .to_list_t{
                width: 240px;
                .cont{
                    padding: 10px;
                }
            }
            .to_list_b{
                width: 240px;
                margin-bottom: 2px;
                .to_list_b_c{
                    margin-bottom: 2px;
                    padding: 8px 20px;
                    position: relative;
                    cursor: pointer;
                    a:nth-child(1){
                        margin-right: 6px;
                        color: #aaa;
                        display: inline-block;
                        width: 14px;
                        margin-top: -2px;
                        vertical-align: middle;
                        i{
                            font-size: 14px;
                            display: inline-block;
                        }
                    }
                    a:nth-child(2){
                            color: #333;
                    }
                    a:nth-child(3){
                        color: #626262;
                        font-size: 18px;
                        font-weight: 500;
                        visibility: hidden;
                        position: absolute;
                        right: 14px;
                        top: 5px;
                        width: 24px;
                        text-align: center;
                        i{
                             display: inline-block;
                             font-size: 16px;
                        }
                    }

                }
                .to_list_body_c{
                  display: block;
                  ul{
                    margin-bottom: 0;
                    li{
                    list-style-type: none;
                        color: #666;
                        display: block;
                        padding: 9px 20px 9px 39px;
                        position: relative;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        transition: box-shadow .2s;
                        i:nth-child(1){
                            font-size: 20px;
                            line-height: 20px;
                            vertical-align: middle;
                            margin-left: -2px;
                            display: inline-block;
                        }
                        span{
                            display: inline-block;
                            max-width: 140px;
                            vertical-align: middle;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                        i:nth-child(3){
                        color: #626262;
                        font-size: 18px;
                        font-weight: 500;
                        visibility: hidden;
                        position: absolute;
                        right: 14px;
                        top: 9px;
                        line-height: 24px;
                        width: 24px;
                        text-align: center;
                        }
                    }
                  }
                }
            }
        }
    }
    // 右边
    .rig_box{
        flex-direction: column;
        overflow-wrap: break-word;
        // -webkit-flex: 1 1 0;/
        -webkit-box-orient: vertical;
        position: relative;
        -webkit-box-direction: normal;
        width: 100%;
    }
}
   
</style>