<template>
        <div class="main-body-center">
            <div class="contact-detail-area">
             <!--机器人详情-->
                <div class="profile-robot-wrapper">
                    <div class="body-content">
                        <div class="profile-detail-header">
                            <div class="lc-avatar">
                                <div class="lc-avatar-160">
                                    <img class="lc-avatar-avatar" alt="" src="https://s3.cn-north-1.amazonaws.com.cn/lcavatar/381df779-62e6-49de-8792-620b94a5582d_160x160.png">
                                </div>
                            </div>
                            <div class="display_name">小特机器人</div>
                            <div class="username">@xiaote</div>
                        </div>
                        <div class="profile-detail-body">
                            <div class="profile-row">
                                <div class="title">简介</div>
                                <div class="content">
                                    <span>暂无</span>
                                </div>
                            </div>
                        </div>
                        <div class="text-center m-t-30">
                            <button class="btn btn-primary btn-lg">发消息</button>
                        </div>
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
    .main-body-center, .module-wrapper {
        -webkit-box-flex: 1;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        position: relative;
        -webkit-box-direction: normal;
    }
     .main-body-center {
        -ms-flex: 1 1 0px;
        flex: 1 1 0;
        -webkit-flex: 1 1 0;
        display: flex;
        display: -ms-flexbox;
        display: -webkit-flex;
        -ms-flex-direction: column;
        flex-direction: column;
        overflow-x: hidden;
        overflow-y: auto;
        overflow-wrap: break-word;
    }
    .contact-detail-area {
        position: relative;
        -webkit-box-flex: 1;
        -ms-flex: 1 1 0px;
        flex: 1 1 0;
        -webkit-flex: 1 1 0;
        overflow: auto;
    }
    .contact-detail-area .profile-robot-wrapper {
        margin: 15px;
        height: 100%;
        width: 79%;
        overflow: hidden;
        background: rgba(255,255,255,.97);
    }
    .contact-detail-area .profile-robot-wrapper .body-content {
        margin: 80px auto;
        width: 620px;
    }
    .contact-detail-area .profile-robot-wrapper .body-content .profile-detail-header {
        text-align: center;
    }
    .lc-avatar{
        display: inline-block;
    }
    .contact-detail-area .profile-robot-wrapper .body-content .profile-detail-header .display_name {
        color: #666;
        font-weight: 700;
        font-size: 24px;
        margin-top: 10px;
    }
    .contact-detail-area .profile-robot-wrapper .body-content .profile-detail-header .username {
        color: #888;
        font-size: 16px;
        margin: 20px 0;
    }
    .contact-detail-area .profile-robot-wrapper .body-content .profile-detail-body {
        padding: 30px 0;
        border-top: 1px solid #eee;
    }
    .contact-detail-area .profile-robot-wrapper .body-content .profile-detail-body .profile-row {
        margin-bottom: 20px;
        margin-left: 30px;
    }
    .contact-detail-area .profile-robot-wrapper .body-content .profile-detail-body .profile-row:after,
     .contact-detail-area .profile-robot-wrapper .body-content .profile-detail-body .profile-row:before {
        content: " ";
        display: table;
    }
    .contact-detail-area .profile-robot-wrapper .body-content .profile-detail-body .profile-row .title {
        float: left;
        width: 145px;
        font-weight: 700;
        text-align: right;
        color: #aaa;
    }
    .contact-detail-area .profile-robot-wrapper .body-content .profile-detail-body .profile-row .content {
        float: left;
        margin-left: 45px;
        width: 300px;
        font-size: 15px;
        color: #666;
    }
    .m-t-30 {
        margin-top: 30px!important;
    }
    .text-center {
        text-align: center!important;
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
    .btn-lg {
        padding: .5rem 2.215rem;
        font-size: 1.25rem;
        line-height: 1.5;
        min-width: 108px;
        border-radius: 1.25rem;
    }
    .btn-primary:hover {
        box-shadow: 0 2px 5px 1px rgba(34,215,187,.6);
    }
</style>
