<template>
  
       <div class="content_box">
           <!-- 头部 -->
           <div class="content_header">
               <div class="title">
                    <span class="channel-icon" style="background: rgb(252, 88, 123);">
                            <i class="lcfont lc-users">
                                <font-awesome-icon icon="user-friends" class="up_hov"/>
                            </i>
                        </span>
                    <a href="javascript:;" class="ng-binding">五组</a>
                </div>
                <div class="secondary-text">
                    1<span>人</span>
                </div>
           </div>
           <!-- content -->
            <div class="module-body">
                <div class="module-body-content">
                    <ul class="channel-detail-member-list-warpper">
                        <li>
                            <a href="javascript:;">
                                <div class="lc-avatar " member="member" size="48">
                                    <div class="lc-avatar-48">
                                        <span class="lc-avatar-def ng-scope" style="background-color: rgb(239, 126, 222);">
                                            <div class="ng-binding">M</div>
                                         </span>
                                    </div>
                                </div>
                                <span class="channel-member-name ng-binding">M</span>
                            </a>
                        </li>
                    </ul>
                    <div class="p-l-20">
                        <button class="btn btn-primary">发消息</button>
                    </div>
                </div>
            </div>
       </div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .content_box{
        width: 100%;
    }
    .content_header{
        display: block;
        height: 50px;
        width: 100%;
        margin: 0;
        padding: 0 15px;
        position: relative;
        background: rgba(253,253,253,.95);
    }
    .content_header .title {
        line-height: 50px;
        font-size: 16px;
        float: left;
        color: #333;
    }
    .channel-icon, .chat-list.nav-pills li a:hover .lc-close,
     .chat-list.nav-pills li.starred .triangle {
        display: inline-block;
    }
     .channel-icon, .chat-list.nav-pills li a .lc-avatar {
        width: 24px;
        height: 24px;
    }
    .channel-icon {
        line-height: 24px;
        border-radius: 50%;
        color: #fff;
        text-align: center;
        vertical-align: middle;
    }
    .content_header .title .channel-icon {
        margin: 0 6px 4px 0;
        vertical-align: middle;
        line-height: 100%;
    }
    .up_hov{
        color:#fff;
    }
    .content_header .title .channel-icon i {
        margin-top: 4px;
        margin-right: 0;
        font-size: 14px;
        color: #fff;
    }
    .lcfont, .wtf, .wtf-link-task {
        display: inline-block;
    }
    .content_header .secondary-text {
        float: left;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        display: block;
        line-height: 50px;
        padding: 0 10px;
        color: #aaa;
    }
    .content_header:after, .content_header:before {
        content: " ";
        display: table;
    }
    .channel-detail-member-list-warpper:after, 
    .channel-detail-member-list-warpper:before {
        content: " ";
        display: table;
    }
    .module-body {
        -webkit-box-flex: 1;
        -ms-flex: 1 1 0px;
        flex: 1 1 0;
        -webkit-flex: 1 1 0;
        position: relative;
        overflow-y: auto;
        overflow-x: auto;
        padding: 5px 15px 0;
        height: 100%;
    }
    .channel-detail-member-list-warpper {
        margin: 10px 15px;
    }
    ul li{
        list-style: none;
    }
    ul {
        margin: 0;
        padding: 0;
    }
    .channel-detail-member-list-warpper li {
        float: left;
        margin: 20px 10px;
    }
    .channel-detail-member-list-warpper li a {
        display: block;
        width: 90px;
        text-align: center;
        color: #666;
        text-decoration: none;
    }
    .lc-avatar,.lc-avatar .lc-avatar-def,{
        display: inline-block;
    }
    .lc-avatar .lc-avatar-def {
        font-size: 12px;
        text-align: center!important;
        overflow: hidden;
        zoom: 1;
        vertical-align: middle;
        color: #fff!important;
        text-shadow: transparent 0 0 0;
        padding: 0!important;
    }
    .lc-avatar-48 .lc-avatar-def, .lc-avatar-48 img {
        width: 48px;
        height: 48px;
        line-height: 48px;
        font-size: 12px;
        border-radius: 48px;
    }
    .channel-detail-member-list-warpper li a .channel-member-name {
        display: block;
        margin-top: 10px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 90px;
    }
    .module-body .module-body-content {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        -webkit-flex: 1;
        margin-bottom: 15px;
        background: #fdfdfd;
        height: 90%;
        width: 79.5%;
    }
    .p-l-20 {
        padding-left: 20px!important;
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
    .btn-primary, .btn-primary:hover {
        color: #fff;
        background-color: #22d7bb;
        border-color: #22d7bb;
    }
    .btn-primary:hover {
        box-shadow: 0 2px 5px 1px rgba(34,215,187,.6);
    }
    .channel-detail-member-list-warpper:after {
        clear: both;
    }
</style>
