<template>
    <div>
        <ul class="menu">
             <li v-for="item of menu" :class="{active : $route.name.indexOf(item.title) != -1}">
                <router-link :to="item.url">{{item.title}}</router-link>
            </li>
        </ul>
        <div class="right_content">
            <!-- 用于展示路由连接的组件 -->  
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            menu:[
            {
                title:'创建群组',
                url:'/A_news/tan/chuangjian'
            },
            {
                title:'加入群组',
                url:'/A_news/tan/jiaru'
            },
            {
                title:'发起群聊',
                url:'/A_news/tan/faqi'
            },
            {
                title:'添加成员',
                url:'/A_news/tan/tianjia'
            }
           ],
        }
    },
    
}
</script>

<style lang='scss' scoped>
    .menu{
        box-shadow: 0 0 24px rgba(0,0,0,.18);
        border: 0;
        border-radius: 0;
        padding: 5px 0;
        margin-top: -20px;
        min-width: 240px;
        position: absolute;
        top:30px;
        left:-50px;
        z-index: 1000;
        float: left;
        padding: 5px 0;
        margin: 18px 0 0;
        list-style: none;
        font-size: 14px;
        text-align: left;
        background-color: #fff;
        // display:none;
    }
    .menu li{
        font-size: 14px;
        padding: 0;
        margin: 0;
        display: block;
        -webkit-transition: background .2s;
        transition: background .2s;
    }
    .menu li a{
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding: 10px 18px;
        -webkit-transition: padding-left .2s;
        transition: padding-left .2s;
        display: block;
        padding: 10px 20px;
        line-height: 1.45;
        white-space: nowrap;
        color: #666;        
    }
    .menu li a:hover{
        background: #eaeaea;
        padding-left: 26px;
    }

   
</style>
