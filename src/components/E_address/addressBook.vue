<template>
    <div>
       <div class="txl_box">
           <div class="txl_header">
               <span class="title">通讯录</span>
               <div class="txl_more">
                   <a href="javascript:;" @click="add()">
                       <font-awesome-icon icon="user-plus" class="up_hov"/>
                   </a>
               </div>
           </div>
           <div class="txl_content">
               <!-- 搜索框 -->
               <div class="ipt_box">
                    <i class="icon">
                        <font-awesome-icon icon="search" class="hov"/>
                    </i>
                    <input type="text" class="ipt" placeholder="搜索">
                </div>
                 <!-- 切换 -->
                <div>
                    <ul class="user_tp">
                        <li class="txl_user" @click="tab()" :class="{active:isShow==true}">
                            <i>
                                <font-awesome-icon icon="user-friends" :class="{hov1:isShow==true}"/>
                            </i>
                        </li>
                        <li class="line"></li>
                        <li class="txl_tp" @click="tab1()" :class="{active:isShow1==true}">
                            <i>
                                <font-awesome-icon icon="sitemap" :class="{hov1:isShow1==true}"/>
                            </i>
                        </li>
                    </ul>

                    <div  v-show="isShow" >
                        <!-- 群组列表 -->
                        <div class="toc-section qunzu_list">
                            <div class="section-header"  @click="open()">
                                <a href="javascript:;" class="expand-icon">
                                    <i class="lcfont">
                                        <font-awesome-icon icon="caret-right" class="hov2"/>
                                    </i>
                                </a>
                                <a href="javascript:;" class="title ng-binding">群组</a>
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
                                                        <font-awesome-icon icon="user-friends" class="hov3"/>
                                                    </i>
                                                </span>
                                                <span class="name ng-binding">{{item.name}}</span>
                                            </a>
                                        </router-link>
                                    </li>
                                </ul>
                                
                            </div>
                        </div>
                        <!-- 机器人列表 -->
                         <div class="toc-section qunzu_list">
                            <div class="section-header"  @click="open1()">
                                <a href="javascript:;" class="expand-icon">
                                    <i class="lcfont">
                                        <font-awesome-icon icon="caret-right" class="hov2"/>
                                    </i>
                                </a>
                                <a href="javascript:;" class="title ng-binding">机器人</a>
                                <a href="javascript:;" class="action">
                                    <i class="lcfont lc-approval-pending">...</i>
                                </a>
                            </div>
                            <!-- 机器人 -->
                           <div class="section-body" :style="{height:h1}">
                                <ul>
                                    <li class="lc-item" v-for="i of jiqiren">
                                        <router-link :to='i.url'>
                                            <a class="contact-list-item" href="javascript:;">
                                                <div class="lc-avatar">
                                                    <div class="lc-avatar-24">
                                                        <img  class="lc-avatar-avatar" alt="" :src="i.img">
                                                    </div>
                                                </div>
                                                <span class="name ng-binding">{{i.name}}</span>
                                            </a>
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- 联系人列表 -->
                        <div class="lianxiren">
                            <ul class="lxr_ul"  v-for="item of lianxiren">
                                <li class="lxr_li1">{{item.zimu}}</li>
                                 <router-link :to='item.url'>
                                    <li class="lxr_li2">
                                        <a href="javascript:;" class="contact-list-item">
                                            <div class="lc-avatar">
                                                <div class="lc-avatar-24">
                                                    <span class="lc-avatar-def" :style="{background:item.color}">
                                                        <div>{{item.zimu}}</div>
                                                    </span>
                                                </div>
                                            </div>
                                            <span class="name">{{item.name}}</span>
                                        </a>
                                    </li>
                                </router-link>
                            </ul>
                        </div>
                    </div>
                    <!-- 组织架构 -->
                    <div class="zuzhi_box" v-show="isShow1">
                        <div class="toc-section2">
                            <ul class="lc-tree">
                                <li class="lc-tree-li">
                                    <a class="lvl0 active">
                                        <span class="">
                                            <i class="">
                                                <font-awesome-icon icon="caret-right" class="hov"/>
                                            </i>
                                        </span>
                                        <span>
                                            <i class="lc-department-o">
                                                <font-awesome-icon icon="building" class="hov"/>
                                            </i>
                                        </span>
                                        <span class="title">
                                            <span class="">1709B</span><span class="title-desc">( 2人 )</span>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
           </div>
       </div>
        <div class="rv">
            <router-view></router-view>
        </div>
        <!-- 添加成员 -->
        <div  v-show="isShow4">
            <div class="black"></div>
            <div class="modal-dialog ">
                <div class="modal-content">
                    <div class="modal-header ng-scope">
                        <a href="javascript:;" class="modal-close" @click="close()">
                            <i class="lcfont lc-close" style="font-size:30px;">×</i>
                        </a>
                        <h3 class="modal-title ng-scope">添加成员</h3>
                    </div>
                    <div class="modal-body ng-scope">
                        <div class="frame min-h-600 form-horizontal">
                            <div class="thy-nav nav-thirdly justify-content-center">
                                <a href="javascript:;" class="nav-link ng-scope active">快速添加成员</a>
                                <a href="javascript:;" class="nav-link ng-scope">通过邮件邀请</a>
                                <a href="javascript:;" class="nav-link ng-scope">通过链接注册</a>
                            </div>
                            <div>
                                <p class="p-20 ng-scope">快速添加成员帐号，设置默认密码，首次登录时需要修改默认密码。</p>
                                <form autocomplete="off" class="w5c-form control-panel" name="formNewUserDirect" role="form">
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label label-required">姓名</label>

                                        <div class="col-sm-9">
                                            <input type="text" name="displayName" class="form-control valid" placeholder="请输入对方真实姓名">
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="col-sm-3 control-label label-required">登录用户名</label>

                                        <div class="col-sm-9">
                                            <input type="text" name="username" autocomplete="off" class="form-control valid" placeholder="请输入对方用户名，如Lily">
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="col-sm-3 control-label label-required">邮箱或者手机号</label>

                                        <div class="col-sm-9">
                                            <input type="text" name="emailOrMobile" autocomplete="off" class="form-control valid" placeholder="输入邮箱地址或者手机号">
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="col-sm-3 control-label label-required">默认密码</label>

                                        <div class="col-sm-9">
                                            <input minlength="6" maxlength="50" type="password" name="password" class="form-control valid" placeholder="输入默认密码">
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="col-sm-3 control-label">员工编号</label>
                                        <div class="col-sm-9">
                                            <input class="form-control valid" name="userCode" type="text" placeholder="输入员工编号">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label ng-scope" translate="所属部门">所属部门</label>

                                        <div class="col-sm-9">
                                            <div type="department">
                                                <div class="lc-select ng-scope" ng-if="!config.multiple">
                                                    <input type="text" class="form-control ng-scope" readonly="readonly" ng-if="treeData.length > 0" ng-value="getSelectedName()" placeholder="不在任何部门中"><!-- end ngIf: treeData.length > 0 -->
                                                </div>
                    
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-sm-6 offset-sm-3">
                                            <button type="button" class="btn btn-primary">添加成员</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
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
                isShow4:false,
               h:0,
               h1:0,
               chenyuan:[
        			{
        				name:'一组',
        				color:'#9473fd',
        				url:'/addressBook/yizu'
        			},
        			{
        				name:'二组',
        				color:'#ffd234',
        				url:'/addressBook/erzu'
        			},
        			{
        				name:'三组',
        				color:'#39ba5d',
        				url:'/addressBook/sanzu'
        			},
        			{
        				name:'四组',
        				color:'#22D7BB',
        				url:'/addressBook/sizu'
        			},
        			{
        				name:'五组',
        				color:'#EF7EDE',
        				url:'/addressBook/wuzu'
        			}

               ],
               jiqiren:[
                   {
                       name:'日程助手',
                       img:'https://s3.cn-north-1.amazonaws.com.cn/lcavatar/calendar_40x40.png',
                       url:'/addressBook/richeng'
                   },
                   {
                       name:'网盘助手',
                       img:'https://s3.cn-north-1.amazonaws.com.cn/lcavatar/drive_40x40.png',
                       url:'/addressBook/wangpan'
                   },
                   {
                       name:'项目助手',
                       img:'https://s3.cn-north-1.amazonaws.com.cn/lcavatar/mission_40x40.png',
                       url:'/addressBook/xiangmu'
                   },
                   {
                       name:'小特机器人',
                       img:'https://s3.cn-north-1.amazonaws.com.cn/lcavatar/381df779-62e6-49de-8792-620b94a5582d_40x40.png',
                       url:'/addressBook/xiaote'
                   },
               ],
               lianxiren:[
                   {
                       zimu:"A",
                       color:"rgb(239, 126, 222)",
                       name:"A",
                       url:'/addressBook/lcq/'
                   },
                   {
                       zimu:"B",
                       color:"#28a745",
                       name:"B",
                        url:'/addressBook/lyj'
                   },
                   {
                       zimu:"C",
                       color:"#dc3545",
                       name:"C",
                        url:'/addressBook/lc'
                   },
                   {
                       zimu:"D",
                       color:"#007bff",
                       name:"D",
                        url:'/addressBook/lh'
                   },
                   {
                       zimu:"E",
                       color:"#6f42c1",
                       name:"E",
                        url:'/addressBook/yxx'
                   },

               ]
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
           },
            add(){
                    this.isShow4 =true
                },
            close(){
                this.isShow4 = false
            }
       }
    }
</script>

<style scoped>
    div{
        height:100%;
    }
    .txl_box{
        position: relative;
        width: 240px;
        height: 100%;
        background: rgba(253,253,253,.95);
        border-right: 1px solid #ddd;
    }
    .txl_box .up_hov{
        color:lightgray;
    }
    .txl_box .up_hov:hover{
        color: #22d7bb;
    }
    .txl_header{
        height: 50px;
    }
    .txl_box .txl_more{
        float: right;
        margin: 0 20px;
        line-height: 50px;
    }
    .txl_box .txl_more i{
        display: inline-block;
        line-height: 1;
        margin: 0;
    }
    .txl_header span{
        float: left;
        margin: 0 20px;
        color: #333;
        line-height: 50px;
        font-size: 16px;
    }
    .txl_content{
        overflow: hidden;
        margin-bottom: 3px;
    }
    .ipt_box{
        padding: 0 20px 10px;
        position: relative;
        height: 46px;
    }
    .ipt_box .icon{
        position: absolute;
        top: 7px;
        left: 30px;
        color: #8f8f8f;
    }
    input{
        outline: none;
    }
    .ipt_box input{
        background: #f3f3f3;
        -webkit-box-shadow: none;
        box-shadow: none;
        color: #666;
        height: 36px;
        font-size: 14px;
        padding-left: 28px;
        border-radius: 20px;
        border: 1px solid transparent;
    }
    ul li{
       list-style: none;
    }
    .user_tp{
       display: -webkit-flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        flex-direction: row;
        padding: 0 20px;
        line-height: 18px;
        border-bottom: solid 1px #f3f3f3;
    }
    .user_tp li{
        position: relative;
        padding-bottom: 10px;
        color: #ddd;
        border: none;
        cursor: pointer;
        list-style: none;
        text-align: center;
        width: 99px;
        height: 27px;
    }
    .user_tp li.active:before {
        left: calc(50% - 10px);
        bottom: 0;
        margin-left: 2px;
        border-bottom: 6px solid #eee;
    }
    .user_tp li.active:after {
        left: calc(50% + 12px);
        bottom: -1px;
        margin-left: -20px;
        border-bottom: 6px solid #fff;
    }
    .user_tp li.active:after, .user_tp li.active:before {
        content: "";
        position: absolute;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
    }
   .user_tp .line{
       -webkit-box-flex: 0;
        flex: 0;
        width: 0;
        height: 14px;
        overflow: hidden;
        border-right: solid 1px #eee;
   }
   .toc-section {
        width: 240px;
        margin-bottom: 2px;
        height: auto;
    }
    .toc-section .section-header{
        margin-bottom: 2px;
        padding: 8px 20px;
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
    .lianxiren ul li{
        display: block;
        border-right: 3px solid transparent;
        margin-bottom: 2px;
        padding: 0 20px;
    }
    .lianxiren .lxr_li1{
        margin: 3px 20px;
        padding: 10px 0;
        line-height: 1;
        color: #888;
        border-bottom: solid 1px #eee;
        cursor: default;
    }
     .lianxiren ul li.active:hover {
        background: 0 0;
    }
    .lxr_li2:hover {
        -webkit-box-shadow: 0 0 8px 2px #eee;
        box-shadow: 0 0 8px 2px #eee;
        background: 0 0;
    }
    .lianxiren ul li.active {
        text-decoration: none;
        border-right: 3px solid #22d7bb;
        background: #e7f9f6;
    }
    .lianxiren ul li .contact-list-item {
        display: block;
        line-height: 48px;
        color: #666;
        font-size: 14px;
        text-decoration: none;
    }
    a {
        background-color: transparent;
    }
   .lianxiren ul li .contact-list-item:hover {
        color: #333;
    }
    .lianxiren .lc-avatar {
        vertical-align: middle;
        margin-right: 5px;
    }
    .lc-avatar,.lc-avatar-24,.lc-avatar-24 .lc-avatar-def div{
           display: inline-block;
    }
    .lianxiren span.lc-avatar-def{
        width: 24px;
        height: 24px;
        line-height: 24px;
        font-size: 12px;
        border-radius: 24px;
        display: inline-block;
         text-align: center!important;
        overflow: hidden;
        zoom: 1;
        vertical-align: middle;
        color: #fff!important;
        text-shadow: transparent 0 0 0;
        padding: 0!important;
    }
    .lc-avatar-24 .lc-avatar-def div {
        -webkit-transform: scale(.9);
        transform: scale(.9);
        text-align: center!important;
    }
    .lianxiren ul li .name{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 150px;
        display: inline-block;
        vertical-align: middle;
    }
    /* 组织架构 */
    .zuzhi_box{
        padding: 10px 0 0;
    }
    .toc-section2{
        width: 240px;
        margin-bottom: 2px;
    }
    .toc-section2 ul,.toc-section2 li{
        margin-bottom: 0;
    }
    .lc-tree a.lvl0 {
        padding-left: 10px!important;
    }
    .hov1{
        color: #22d7bb
    }
    .hov2{
        color:#aaa;
    }
    .hov3{
        color:#fff;
    }
    .hov2:hover{
        color:#333;
    }
    .lc-tree a {
        display: -webkit-box;
        display: flex;
        display: -ms-flexbox;
        display: -webkit-flex;
        -ms-flex-direction: row;
        flex-direction: row;
        padding: 8px 10px 8px 18px;
        line-height: 24px;
        cursor: pointer;
        color: #666;
        -webkit-transition: all .2s;
        transition: all .2s;
    }
    .lc-tree a:hover {
        color: #333;
    }
    .toc-section .lcfont{
        color: #666;
    }
    .lc-tree a i:hover, .toc-section .lcfont:hover{
        color: #333;
    }
   
    .lc-tree a i {
        margin-right: 3px;
        font-size: 14px;
        vertical-align: middle;
        color: #aaa;
    }
    .lc-tree a .title {
        padding-top: 3px;
        white-space: normal;
    }
    .lc-tree a .title {
        -webkit-box-flex: 1;
        flex: 1 1 0;
        -webkit-flex: 1 1 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .lc-tree a i.lc-department-o {
        margin-top: 2px;
    }
    .lc-tree-li:hover {
        -webkit-box-shadow: 0 0 8px 2px #eee;
        box-shadow: 0 0 8px 2px #eee;
        background: 0 0;
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
        padding: 0 20px;
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
    .rv{
        position: absolute;
        top:0;
        left: 240px;
        width: 100%;
    }
    /* 添加成员 */
    .black{
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: .3;
        position: fixed;
        top: 0;
        left: 0;
    }
    .modal-dialog {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
   .modal-content {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 660px;
        height: auto;
        pointer-events: auto;
        background-color: #fff;
        background-clip: padding-box;
        border: 0 solid rgba(0,0,0,.2);
        border-radius: .3rem;
        box-shadow: 0 0 1.5rem rgba(0,0,0,.4);
        outline: 0;
        margin: 60px auto;
        z-index: 9999;
    }
    .modal-header {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #eee;
        border-top-left-radius: .3rem;
        border-top-right-radius: .3rem;
    }
    .modal-header {
        padding: 0 1.875rem;
        min-height: 1.5px;
        align-items: center;
        height: 50px;
    }
    .modal-close {
        color: #ddd;
        line-height: 50px;
    }
    .modal-header .modal-close {
        order: 1;
    }
    .modal-header h3 {
        font-size: 1rem;
        font-weight: 500;
    }
    .modal-title {
        margin-bottom: 0;
        line-height: 1.5;
    }
    .modal-body, .modal-footer {
        padding: 1.25rem 1.875rem 1.875rem;
    }
    .modal-body {
        position: relative;
        flex: 1 1 auto;
    }
    .justify-content-center {
        justify-content: center!important;
    }
    .thy-nav {
        flex-wrap: wrap;
        padding-left: 0;
        margin-bottom: 0;
        list-style: none;
    }
    .thy-layout-header, .thy-nav {
        display: flex;
    }
    .nav-thirdly .nav-link.active, .nav-thirdly .nav-link:active, .nav-thirdly .nav-link:focus, .nav-thirdly .nav-link:hover {
        border-bottom: none;
    }
    .nav-thirdly .nav-link {
        padding: .532rem 0;
        margin-right: 40px;
        position: relative;
    }
    .nav-link {
        display: block;
        transform: translateY(1px);
        color: #888;
    }
    .nav-link.active, .nav-link.active i, .nav-link:active i, .nav-link:focus i, .nav-link:hover i {
        color: #22d7bb;
    }
    .btn, .nav-link, .thy-badge-count {
        text-align: center;
    }
    .nav-secondary-divider .nav-link:after, .nav-thirdly .nav-link:after {
        width: 0;
        content: "";
        border-right: 1px solid #eee;
        top: calc(50% - 15px / 2);
        height: 15px;
    }
    .nav-thirdly .nav-link:after {
        display: block;
        position: absolute;
        right: -20px;
    }
    .p-20 {
        padding: 20px!important;
    }
    .form-group {
        margin-bottom: 1rem;
    }
    .form-horizontal .form-group {
        margin-right: -15px;
    }
    .form-horizontal .form-group {
        display: flex;
        flex-wrap: wrap;
        margin-left: -15px;
    }
    .form-group .control-label {
        color: #888;
        font-size: 14px;
        font-weight: 400;
        text-align: right;
        margin-bottom: 0;
        padding-top: 6px;
        width: 150px;
        height: 38px;
    }
    .form-group .label-required::before {
        content: '*';
        color: #ff5b57;
        margin-right: 3px;
        position: relative;
        top: 3px;
    }
    .label-required::before {
        content: '*';
        margin-right: 3px;
        position: relative;
        top: 3px;
    }
     .form-group .col-sm-9{
         width: 470px;
         height: 38px;
        margin-left: 10px;
     }
   .form-control {
        display: block;
        width: 100%;
        line-height: 1.5;
        color: #333;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #eee;
        border-radius: .25rem;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
    .form-control, .input-group-text {
        padding: .469rem .875rem;
        font-size: .875rem;
    }
    input::-webkit-input-placeholder {
        color: #CACACA;
        font-size: 14px;
    }
   .form-control:not(:disabled):hover {
        border-color: #22d7bb;
    }
    .offset-sm-3 {
        margin-left: 40%;
    }
    .btn-primary:hover {
        box-shadow: 0 2px 5px 1px rgba(34,215,187,.6);
    }
    .btn-primary, .btn-primary:hover {
        color: #fff;
        background-color: #22d7bb;
        border-color: #22d7bb;
    }
    .btn {
        display: inline-block;
        white-space: nowrap;
        vertical-align: middle;
        user-select: none;
        border: 1px solid transparent;
        padding: .469rem 26px;
        font-size: .875rem;
        line-height: 1.5;
        min-width: 106px;
        border-radius: 1.25rem;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
</style>