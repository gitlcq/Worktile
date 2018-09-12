<template>
  <div style="height: 100%;">
    <header>
      <div class="name">
          <a href="javascript:;">
               <img src="./assets/name.png" alt="">
          </a>
      </div>
      <div class="icon_box">
          <ul>
            <!-- 样式要在点击的标题与路由中的标题匹配时展示 -->
            <li v-for="(item,index) of tabNav" v-on:click="addClass(index)" v-bind:class="{active:index==current}">
               
                <!-- 跳转 -->
                <router-link :to='item.url' class="app">
                    <span class="item-icon">
                        <i class="iconfont" :class="item.icon"></i>
                    </span>
                    <span class="title">{{item.title}}</span>
                </router-link>
            </li>
        </ul>
      </div>
      <div class="bottom-area">
          <ul class="nav-apps">
              <li class="active" v-for="item of tabNav1">
                  <router-link :to='item.url' class="app-item">
                      <span class="item-icon">
                          <i class="iconfont" :class="item.icon"></i>
                      </span>
                      <span class="name">{{item.title}}</span>
                  </router-link>
              </li>
          </ul>
          <a class="pic-area pbox-trigger" data-align="bottom" data-placement="right" href="javascript:;">
            <div thysize="48" class="thy-avatar-48 thy-avatar">
                <span class="avatar-default" style="background-color:rgb(239, 126, 222)">
                    <div>M</div>
                </span>
            </div>
          </a>
      </div>
    </header>
    <!-- 用于展示路由连接的组件 -->
    <router-view class="nav"></router-view>
  </div>

</template>
<script>
    export default {
        data () {
            return {
                current:0,
                tabNav:[
                    {
                        icon:'icon-xiaoxi',
                        title:'消息',
                        url:'./news',
                    },
                    {
                        icon:'icon-xiangmu',
                        title:'项目',
                        url:'./items'
                    },
                    {
                        icon:'icon-rili',
                        title:'日历',
                        url:'./calendar'
                    },
                    {
                        icon:'icon-wangpan-weidianjizhuangtai',
                        title:'网盘',
                        url:'./dbank'
                    },
                ],
                tabNav1:[
                     {
                        icon:'icon-tongxunlu',
                        title:'通讯录',
                        url:'./addressBook',
                    }
                ]
            }
        },
         methods:{
            addClass:function(index){
                this.current=index;
            }
        }
    }
</script>

<style lang="scss" scoped>
    header{
        -ms-flex-negative: 0;
        flex-shrink: 0;
        position: relative;
        width: 70px;
        height: 100%;
        background: #22d7bb;
        overflow-y: hidden;
    }
    header .name a{
         margin: 18px 0;
       text-align: center;
        display: block;
    }
    header .name img{
        width: 50px;
        height: 50px;
        border-radius: 12px;
    }
    .icon_box{
        text-align: center
    }
    .icon_box ul li{
        cursor: pointer;
        list-style: none;
        position: relative;
    }
    .icon_box ul li a.app{
        display: block;
        text-decoration: none;
        height: 70px;
       display: block;
        transition: box-shadow .3s,-webkit-box-shadow .3s;
    }
    .icon_box .item-icon{
        margin-top: 15px;
        display: inline-block;
        color: #fff;
        font-size: 24px;
        opacity: .8;
        transition: transform .5s,opacity .5s,-webkit-transform .5s;
    }
    .icon_box .item-icon .iconfont{   
         font-size: 24px;
         display: inline-block;
         -webkit-transform: translateY(0);
        transform: translateY(0);
        -webkit-transition: height .5s,-webkit-transform .5s;
        transition: height .5s,-webkit-transform .5s;
        transition: height .5s,transform .5s;
        transition: height .5s,transform .5s,-webkit-transform .5s;
    }
    .icon_box .title{
        display: block;
        height: 0;
        overflow: hidden;
        font-size: 12px;
        color: #fff;
        -webkit-transform: translateY(0);
        transform: translateY(0);
        -webkit-transition: height .5s,-webkit-transform .5s;
        transition: height .5s,-webkit-transform .5s;
        transition: height .5s,transform .5s;
        transition: height .5s,transform .5s,-webkit-transform .5s;
    }
    .icon_box a.app:hover {
        background: #18bfa4;
        text-decoration: none;
    }
    .icon_box li:hover a.app .title {
        height: auto;
        -webkit-transform: translateY(-10px);
        transform: translateY(-10px);
    }
    .icon_box li:hover a.app .iconfont{
        height: auto;
        -webkit-transform: translateY(-10px);
        transform: translateY(-10px);
    }
    .bottom-area {
        text-align: center;
        position: absolute;
        bottom: 0;
        width: 100%;
    }
    .bottom-area ul {
        margin-bottom: 10px;
    }
    .nav-apps li {
        cursor: pointer;
        position: relative;
        list-style: none;
    }
    .nav-apps li a.app-item {
        display: block;
        text-decoration: none;
        height: 70px;
        -webkit-transition: -webkit-box-shadow .3s;
        transition: -webkit-box-shadow .3s;
        transition: box-shadow .3s;
        transition: box-shadow .3s,-webkit-box-shadow .3s;
    }
    .nav-apps li.active a.app-item {
        background: #18bfa4;
    }
    .icon_box li.active a.app:before {
        content: "";
        position: absolute;
        right: 0;
        top: 30px;
        width: 0;
        height: 0;
        border-top: 6px solid transparent;
        border-right: 5px solid #fdfdfd;
        border-bottom: 6px solid transparent;
    }
    .nav-apps li.active a.app-item:before {
        content: "";
        position: absolute;
        right: 0;
        top: 30px;
        width: 0;
        height: 0;
        border-top: 6px solid transparent;
        border-right: 5px solid #fdfdfd;
        border-bottom: 6px solid transparent;
    }
    .nav-apps li.active a.app-item .item-icon {
        opacity: 1;
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
   .nav-apps li a.app-item .item-icon {
        margin-top: 15px;
        display: inline-block;
        color: #fff;
        font-size: 24px;
        opacity: .8;
        -webkit-transition: opacity .5s,-webkit-transform .5s;
        transition: opacity .5s,-webkit-transform .5s;
        transition: transform .5s,opacity .5s;
        transition: transform .5s,opacity .5s,-webkit-transform .5s;
    }
    .nav-apps li a.app-item .item-icon i, .wt-select-icon-wrap li i {
        font-size: 24px;
    }
    .nav-apps li a.app-item .name {
        display: block;
        height: 0;
        overflow: hidden;
        font-size: 12px;
        color: #fff;
        -webkit-transform: translateY(0);
        transform: translateY(0);
        -webkit-transition: height .5s,-webkit-transform .5s;
        transition: height .5s,-webkit-transform .5s;
        transition: height .5s,transform .5s;
        transition: height .5s,transform .5s,-webkit-transform .5s;
    }
    .bottom-area .pic-area {
        position: relative;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 16px;
        display: block;
    }
    .thy-avatar {
        position: relative;
        display: inline-block;
    }
    .thy-avatar .avatar-default {
        vertical-align: middle;
        text-align: center;
        overflow: hidden;
        zoom: 1;
        color: #fff;
        text-shadow: transparent 0 0 0;
    }
    .thy-avatar-48 .avatar-default, .thy-avatar-48 img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        line-height: 48px;
        font-size: 12px;
        vertical-align: middle;
    }
    .thy-avatar .avatar-default{
        display: inline-block;
    }
    .nav{
        position: absolute;
        top: 0;
        left: 70px;
        width: 100%;
        background: url(https://cdn.worktile.com/pro/image/app/desktop.background/desktop-5.jpg?v=7.0.3+20180830) 0% 0% / cover;
        height: 100%;
    }

</style>
