<template>
    <div>
        <div class="import">
            <div class="left-side">
               <div class="header">
                   <span>网盘</span>
               </div> 
               <div class="inp">
                  <i><font-awesome-icon icon="search" class="sch"/></i>
                  <input type="text" placeholder="搜索文件、文件夹">
               </div>
               <div class="left-part">
                    <div class="txl_box">
           <div class="txl_content">
                    <div  v-show="isShow" >
                        <!-- 群组列表 -->
                        <div class="toc-section qunzu_list">
                            <div class="section-header"  @click="open()">
                                <a href="javascript:;" class="title ng-binding"> <i class="right">
                                        <font-awesome-icon icon="caret-right" class="hov2"/>
                                    </i>企业网盘</a>
                                     <a href="javascript:;" class="action">
                                    <i class="lcfont">...</i>
                                </a>
                            </div>
                            <!-- 成员 -->
                            <div class="section-body" :style="{height:h}">
                                <ul>
                                    <li class="lc-item"  v-for="item of chenyuan">
                                        <router-link :to='item.url'>
                                            <a class="contact-list-item" href="javascript:;">
                                                <span class="channel-icon m-r-5" :style="{background:item.color}">
                                                    <i class="lcfont">
                                                        <font-awesome-icon icon="folder" class="hov3"/>
                                                    </i>
                                                </span>
                                                <span class="name ng-binding">{{item.name}}</span>
                                            </a>
                                        </router-link>
                                    </li>
                                </ul>
                                 <div class="rv">
                                    <router-view></router-view>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
       </div>
                   <div class="btns">
                     <div v-for="item of vList" :class="['btn' , {vcur : $route.name.indexOf(item.title) != -1}]" class="section-header">
                     <router-link :to='item.url'><i><font-awesome-icon :icon="item.ico" class="right"/></i>{{item.title}}</router-link>
                     </div>
                   </div>
               </div>
            </div>
            <div class="right-con">
              <div class="rv">
                 <router-view></router-view>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
        name: "dbank",
        data(){
        return {
               isShow:true,
               isShow1:false,
               isShow3:false,
               h:0,
               h1:0,
               chenyuan:[
                    {
                    name:'公司制度',
                    color:'#9473fd',
                    url:'/D_dbank/qiye'
                    },
                    {
                    name:'资料共享',
                    color:'#ffd234',
                    url:'/D_dbank/huishou'
                    },
                    {
                    name:'缺陷管理',
                    color:'#ffd234',
                    url:'/D_dbank/qiye'
                    }
               ],
                vList:[
                    // {
                    //     ico:'caret-right',
                    //     title:'企业网盘',
                    //     url:'/D_dbank/qiye/',
                    // },
                    {
                        ico:'caret-right',
                        title:'个人网盘',
                        url:'/D_dbank/geren/'
                    },
                    {
                        ico:'caret-right',
                        title:'成员',
                        url:'/D_dbank/chengyuan/'
                    },
                    {
                        ico:'caret-right',
                        title:'标签',
                        url:'/D_dbank/baioqian/'
                    },
                    {
                        ico:'share-alt',
                        title:'与我共享',
                        url:'/D_dbank/gongxiang/'
                    },
                    {
                        ico:'trash-alt',
                        title:'回收站',
                        url:'/D_dbank/huishou/'
                    }
                ],
           }
       },
       methods:{
           tab(){
              this.isShow = true;
              this.isShow1 = false;
           },
           tab1(){
                this.isShow1 = true;
                this.isShow = false;
           },
           open(){
               if(this.h==0){
                   this.h = this.chenyuan.length*50+'px';
               }else{
                   this.h = 0;
               }
           },
            open1(){
               if(this.h1==0){
                   this.h1 = this.jiqiren.length*48+'px';
               }else{
                   this.h1 = 0;
               }
           }
       }
}
</script>

<style scoped>
/* div{
    width:100%;
    height:100%;
} */
.sch{
    color: #8f8f8f;
}
.right{
    margin-right: 6px;
    color: #aaa;
    display: inline-block;
    width: 14px;
    vertical-align: middle;
}
.import{
    height:100%;
    width:100%;
    /* background: red; */
    position: relative;
    background: rgba(253,253,253,.95);
    border-right: 1px solid #ddd;
    transition: width .2s ease-in-out;
}
.left-side{
    width:240px;
    height: 100%;
    /* background: yellow; */
    /* border-right: 1px solid #ddd; */
}
.right-con{
    width: 100%;
    height:100%;
    /* background: green; */
    position:absolute;
    top:0;
    left:240px;
}
.header{
    height: 50px;
    width:240px;
    /* border:1px solid red; */
}
.header span{
   margin: 0 20px;
    color: #333;
    line-height: 50px;
    font-size: 16px;
}
.inp{
    width: 240px;
    height: 50px;
    /* border:1px solid black; */
    position: relative;
    padding: 0 20px 20px;
}
.inp i{
    position: absolute;
    top: 6px;
    left: 30px;
   font-style: normal;
}
.inp input{
    background: #f3f3f3;
    box-shadow: none;
    color: #666;
    height: 36px;
    font-size: 14px;
    padding-left: 28px;
    border-radius: 20px;
    border: 1px solid transparent;
    outline:none;
}
.left-part{
    width:240px;
    /* height: 260px; */
    /* background: red; */
}
h1{
     color: #fff700;
        }
    .btns{
        float: left;
    }
    .vcur{
        background: #e7f9f6;
        border-right: 4px solid #22d7bb;
        
    }
    .btn{
        width: 240px;
        box-sizing: border-box;
        height: 45px;
        /* background-color: green; */
        color: #0ff;
        /* text-align: center; */
        padding-left: 30px;
    }
    a{
    display: block;
    text-decoration: none;
    color: #333;
    font-size: 14px;
    line-height: 40px;
    font-family: 'Helvetica Neue','Hiragino Sans GB',stheiti,'Microsoft Yahei','微软雅黑',tahoma,sans-serif;
  }
  .router-link-active{
    color: #333;
  }
  .rv{
      width: 100%;
      height: 100%;
      float: left;
      /* background: red; */
  }
   .toc-section {
        width: 240px;
        margin-bottom: 2px;
        height: auto;
    }
    .toc-section .section-header{
        margin-bottom: 2px;
        padding: 8px 32px;
        position: relative;
        cursor: pointer;
    }
    .toc-section .section-header:hover {
        text-decoration: none;
        -webkit-box-shadow: 0 0 8px 2px #eee;
        box-shadow: 0 0 8px 2px #eee;
    }
    .toc-section .action {
        color: #626262;
        font-size: 18px;
        font-weight: 500;
        visibility: hidden;
        position: absolute;
        right: 14px;
        top: 5px;
        width: 24px;
        text-align: center;
        line-height: 20px;
    }
    .section-header:hover .action {
        visibility: visible;
    }
    .section-header .expand-icon {
        margin-right: 6px;
        color: #aaa;
        display: inline-block;
        width: 14px;
        vertical-align: middle;
    }
    a {
        background-color: transparent;
    }
   
    /* 成员 */
    .section-body {
        margin-bottom: 0;
        overflow: hidden;
        transition: all .35s ease 0s;
    }
     .qunzu_list ul li {
        display: block;
        margin-bottom: 2px;
        padding: 0 60px;
        border-right: 3px solid transparent;
    }
     .qunzu_list ul li:hover {
        -webkit-box-shadow: 0 0 8px 2px #eee;
        box-shadow: 0 0 8px 2px #eee;
        background: 0 0;
    }
    .qunzu_list ul li.active {
        text-decoration: none;
        border-right: 3px solid #22d7bb;
        background: #e7f9f6;
    }
    .qunzu_list ul li.active:hover {
        background: 0 0;
    }
    .qunzu_list ul li .contact-list-item {
        display: block;
        line-height: 48px;
        color: #666;
        font-size: 14px;
        text-decoration: none;
    }
    .channel-icon {
        line-height: 24px;
        border-radius: 50%;
        color: #fff;
        text-align: center;
        vertical-align: middle;
        display: inline-block;
    }
    .channel-icon, .chat-list.nav-pills li a .lc-avatar {
        width: 24px;
        height: 24px;
    }
    .qunzu_list ul li .contact-list-item .name {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 150px;
        display: inline-block;
        vertical-align: middle;
    }
    .channel-icon i {
        font-size: 14px;
    }
    .lcfont {
        font-family: lcfont!important;
         display: inline-block;
    }
    .lc-avatar-24 img {
        width: 24px;
        height: 24px;
        line-height: 24px;
        font-size: 12px;
        border-radius: 24px;
        vertical-align: middle;
    }
    .qunzu_list ul li .contact-list-item .lc-avatar {
        vertical-align: middle;
        margin-right: 5px;
    }
</style>