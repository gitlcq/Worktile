<template>
    <div class="box">
       <div class="xm-left">
           <p> <span>项目</span> <i><font-awesome-icon icon="user-plus" class="icos"/></i></p>

            <div class="inp">
                <i class="wtf wtf-project-add-o"><font-awesome-icon icon="search" class="ser"/></i></i>
                <input type="text" placeholder="搜索任务">
            </div>

           
                 
            <div class="list">
                    <div  v-show="isShow" >
                        <div class="toc qz">
                            <div class="header"  @click="open()">
                                <a href="javascript:;" class="ex">
                                    <i class="lh">
                                        <font-awesome-icon icon="caret-right" class="hov2"/>
                                    </i>
                                </a>
                                <a href="javascript:;" class="title bb">工作</a>
                                <a href="javascript:;" class="act">
                                    <i class="lh">...</i>
                                </a>
                            </div>
                        
                            <div class="cb" :style="{height:h}">
                                <ul>
                                    <li class="lt"  v-for="item of chenyuan">
                                        <router-link :to='item.url'>
                                            <a class="cli" href="javascript:;">
                                                <span class="chi m-r-5" :style="{background:item.color}">
                                                    <i class="lh">
                                                        <font-awesome-icon icon="user-plus" class="hov3"/>
                                                    </i>
                                                </span>
                                                <span class="name bb">{{item.name}}</span>
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


                <div class="btns">
                    <div v-for="item of vList" :class="['btn' , {vcur : $route.name.indexOf(item.title) != -1}]">
                        <router-link :to='item.url'>
                            <i><font-awesome-icon :icon="item.ico" class="icos"/></i>
                            {{item.title}}
                        </router-link>
                    </div>
                </div>
                
                <!-- <div class="rv">
                    <router-view></router-view>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>

     export default {
       data(){
           return{
                isShow:true,
                isShow1:false,
                isShow3:false,
                h:0,
                h1:0,
                vList:[
                        {
                            ico:"caret-right",
                            title:'项目',
                            url:'/B_items/xiangmu'
                        },
                        {
                            ico:"cog",
                            title:'配置中心',
                            url:'/B_items/peizhi'
                        },
                        {
                            ico:"trash-alt",
                            title:"回收站",
                            url:'/B_items/huishou'
                        }
                    ],
               chenyuan:[
        			{
        				name:'我的任务',
        				color:'#22d7bb',
        				url:'/B_items/gongzuo'
        			},
        			{
        				name:'时间视图',
        				color:'#22d7bb',
        				url:'/B_items/gongzuo'
        			},

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

<style lang="scss" scoped>
.box{
    width: 100%;
    height: 100%;
}
    .xm-left{
        width: 240px;
        height:100%;
        position: relative;
        background: #fff;
    }
    .xm-left p{
        width: 240px;
        height: 50px;
    }
    .xm-left p span{
        font-size:16px;
        display:inline-block;
        margin-left:15px;
        margin-top:15px;
    }
    .xm-left p i{
        font-style:normal;
        position: absolute;
        display:inline-block;
        top:15px;
        right:15px;
    }
    .xm-left .list{
        width: 240px;
        height: 400px;
    }
    .xm-left .inp{
        width: 200px;
        height: 35px;
        position: absolute; 
        left: 20px;
        top: 60px;
        /* border:1px solid #ccc; */
        border-radius:17px;
        background-color:rgb(243,243,243);
    }
    .xm-left .inp i{
        font-style:normal;
        display:inline-block;
        margin-top:5px;
        margin-left:10px;
    }
    .xm-left input{
        position: absolute;
        top: 1px;
        left:32px;
        width:150px;
        height: 30px;
        border-radius:18px;
        outline:none;
        border:0px;
        background-color:rgb(243,243,243);
    }
    .btns{
        float: left;
        } 
    .btns .btn{
        width: 240px;
        box-sizing: border-box;
        height: 50px;
        line-height: 50px;
    }
    .btns .btn a{
        margin-left:30px;
    }
     .btns .btn.vcur{
            background-color:rgb(231,249,246);
            border-right:4px solid #22d7bb;
        }
    .rv{
      width:1226px;
      height: 100%;
      position: absolute;
      left:240px;
      top: 0;
      border:1px solid #ccc;
  }




  .toc {
        width: 240px;
        margin-bottom: 2px;
        height: auto;
        margin-top:50px;
    }
    .toc .header{
        margin-bottom: 2px;
        padding: 8px 20px;
        position: relative;
        cursor: pointer;
    }
    .toc .header:hover {
        text-decoration: none;
        -webkit-box-shadow: 0 0 8px 2px #eee;
        box-shadow: 0 0 8px 2px #eee;
    }
    .toc .act {
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
    .header:hover .act {
        visibility: visible;
    }
    .header .ex {
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
    .cb {
        margin-bottom: 0;
        overflow: hidden;
        transition: all .35s ease 0s;
    }
     .qz ul li {
        display: block;
        margin-bottom: 2px;
        padding: 0 20px;
        border-right: 3px solid transparent;
    }
     .qz ul li:hover {
        -webkit-box-shadow: 0 0 8px 2px #eee;
        box-shadow: 0 0 8px 2px #eee;
        background: 0 0;
    }
    .qz ul li.active {
        text-decoration: none;
        border-right: 3px solid #22d7bb;
        background: #e7f9f6;
    }
    .qz ul li.active:hover {
        background: 0 0;
    }
    .qz ul li .cli {
        display: block;
        line-height: 48px;
        color: #666;
        font-size: 14px;
        text-decoration: none;
    }
    .chi {
        line-height: 24px;
        border-radius: 50%;
        color: #fff;
        text-align: center;
        vertical-align: middle;
        display: inline-block;
    }
    .chi, .chat-list.nav-pills li a .lc-avatar {
        width: 24px;
        height: 24px;
    }
    .qz ul li .cli .name {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 150px;
        display: inline-block;
        vertical-align: middle;
    }
    .chi i {
        font-size: 14px;
    }
    .lh {
        font-family: lh!important;
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
    .qz ul li .cli .lc-avatar {
        vertical-align: middle;
        margin-right: 5px;
    }
    .rv{
        position: absolute;
        top:0;
        left: 240px;
    }
.ser{
    margin-top:5px;
    margin-left:1px;
     color:#848484;
}
.icos{
    font-size:14px;
    margin-left:-10px;
    color:#848484;
}
</style>