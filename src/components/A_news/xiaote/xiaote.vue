<template>
    <div>
        <div class="right_header" v-for="item of xList" :class="{active : $route.name.indexOf(item.title) != -1}">
            <div class="r_left">
                <span class="img">
                   <img :src="item.img" alt="">
                <!-- <img src="../../assets/1.png"> -->
                </span>
                <span class="title">{{item.title}}</span>
            </div>
            <div class="r_right">{{item.all}}</div>
            <ul class="pill">
                <li v-for="item of xm" :class="{active : $route.name.indexOf(item.title) != -1}">
                <router-link :to="item.url">{{item.title}}</router-link>
            </li>
            </ul>
            <div class="right_content">
                   <!-- 用于展示路由连接的组件 -->
                  <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            xList:[
                {
                    title:'小特机器人',
                    url:'/A_news/xiaote',   //与app.js的path一样,  
                    all:'@小特',
                    img:'https://s3.cn-north-1.amazonaws.com.cn/lcavatar/381df779-62e6-49de-8792-620b94a5582d_40x40.png'
                }
            ],
            xm:[
                {
                    title:'消息',
                    url:'/A_news/xiaote/xiaoxi/'
                },
                {
                    title:'文件',
                    url:'/A_news/xiaote/wenjian/'
                },
                {
                    title:'固定消息',
                    url:'/A_news/xiaote/guding/'
                }
            ]
        }
    },
    
}
</script>

<style lang='scss' scoped>
    li{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    .box{
        position:relative;
    }
    .r_left{
        height: 50px;
        width: 100px;
        line-height: 50px;
        padding-left:40px;
    }
    .r_right{
        line-height: 50px;
        width: 207px;
        height: 50px;
        float: right;
        right: 0;
        margin-right: 20px;
        color: #22d7bb;
        margin-top: -40px;
    }
    .pill{
       margin-bottom: 0;
       border-bottom: 0;
       padding: 0 20px;
       margin-top: 0;
       width: 1211px;
       height: 37px;
    }
    .pill li{
        float: left;
    }
    .pill li a{
        min-width: 80px;
        text-align: center;
        margin-right: 22px;
        padding: 5px 9px 9px;
        color: #333;
        font-size: 14px;
        border-radius: 0;
        position: relative;
        display: block;
    }
    .pill li.active a{
        border-bottom: solid 2px #22d7bb;
        background: 0 0;
        color: #22d7bb;
    }
    .right_content{
        position: absolute;
        top: 86px;
        left: -3px;
        height: 644px;
        right: 0px;
        bottom: 0;
        background: #fdfdfd;
        margin: 20px;
    }
    .right_header{
        display: block;
        height: 86px;
        margin: 0;
        top: 0;
        width: 1226px;
        padding: 0 20px;
        position: relative;
        background: rgba(253,253,253,.95);
    }
    .cur{
        border-bottom: solid 2px #22d7bb;
        background: 0 0;
    }
    .pill .cur a{
        color: #22d7bb;
    }
    .img img{
       display:block;
       width: 24px;
       height: 24px;
       margin-left:-30px;
       border-radius: 24px;
       margin-left: -30px;
      border-radius: 24px;
      line-height: 24px;
      position: relative;
      top: 6px;  
    }
    .title{
        display:block;
        margin-top:-30px;
        width: 70px
    }

   
</style>
