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
                    title:'网盘助手',
                    url:'/A_news/wangpan',   //与app.js的path一样,  
                    all:'@wangpan',
                    img:'https://s3.cn-north-1.amazonaws.com.cn/lcavatar/drive_40x40.png'
                }
            ],
            xm:[
                {
                    title:'未读',
                    url:'/A_news/wangpan/weidu/'
                },
                {
                    title:'已读',
                    url:'/A_news/wangpan/yidu/'
                },
                {
                    title:'待处理',
                    url:'/A_news/wangpan/dai/'
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
        // background-color:blue;
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
        // left: 35px;
        padding: 0 20px;
        position: relative;
        background: rgba(253,253,253,.95);
    }
    .cur{
        border-bottom: solid 2px #22d7bb;
        background: 0 0;
        color: #22d7bb;
    }
   .img{
        display:block;
        padding-top: 10px;
    }
    .img img{
       width: 24px;
       height: 24px;
       margin-left:-30px;
    }
    .title{
        display:block;
        margin-top:-50px;
    }

   
</style>
