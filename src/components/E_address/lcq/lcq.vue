<template>
    <div class="main-body-center">
        <div class="contact-detail-area">
            <div class="profile-member-wrapper">
                <div class="profile-header">
                    <div class="profile-header-avatar">
                        <div class="lc-avatar">
                            <div class="lc-avatar-110">
                                <span class="lc-avatar-def" style="background-color: rgb(239, 126, 222);">
                                    <div class="ng-binding">A</div>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="profile-header-profiles">
                        <div class="display_name ng-binding">
                            A
                            <span class="name ng-binding">@17600978244</span>
                            <a href="javascript:;" class="following">
                                <i class="wtf wtf-star-o"></i>
                            </a>
                        </div>
                        <ul>
                            <li>
                                <i class="wtf wtf-title">
                                    <font-awesome-icon icon="address-card" class="hov3"/>
                                </i>
                                <span>技术总监</span>
                            </li>
                            <li class="line">&nbsp;</li>
                            <li>
                                <i class="wtf wtf-email">
                                    <font-awesome-icon icon="envelope" class="hov3"/>
                                </i>
                                <span class="empty-value">暂无</span>
                            </li>
                            <li class="line">&nbsp;</li>
                            <li>
                                <i class="wtf wtf-phone">
                                    <font-awesome-icon icon="phone" class="hov3"/>
                                </i>
                                <span class="ng-binding">17600978244</span>
                            </li>
                        </ul>
                        <div class="profile-header-action">
                            <a href="javascript:;" class="btn btn-primary btn-md m-r-15">编辑资料</a>
                            <a href="javascript:;" class="btn btn-outline-default btn-md">分配任务</a>
                        </div>
                    </div>
                </div>
                <div class="profile-body module-body">
                    <!-- left -->
                    <div class="profile-body-content">
                        <div class="panel h-100p ng-isolate-scope" type="profile">
                            <div class="panel-heading">
                                <span class="panel-title">A 的任务</span>
                                <div class="header-btn">
                                    <div class="dropdown dropdown-btn">
                                        <button class="btn btn-outline-default btn-sm btn-normal-radius dropdown-toggle" type="button">
                                            <i class="prefix-icon wtf wtf-th-large">
                                                <font-awesome-icon icon="th-large" class="hov3"/>
                                            </i>按处理优先级
                                            <span class="caret"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body panel-body--clear-padding">
                                <div class="profile-task-wrap">
                                    <div class="ng-scope">
                                       <div class="ng-scope ng-isolate-scope empty-state empty-state--lg" style="margin-top: 120px;">
                                           <span class="empty-icon">
                                               <i class="wtf wtf-empty-o">
                                                   <font-awesome-icon icon="file-alt" class="nofile"/>
                                               </i>
                                            </span>
                                            <p class="empty-text">没有任务</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- right -->
                    <div class="profile-body-side">
                        <div class="panel ng-isolate-scope">
                            <div class="panel-body panel-body--clear-padding-lr">
                                <div class="status-overview-warpper">
                                    <ul>
                                        <li>
                                            <div class="count-number text-primary">0</div>
                                            已完成
                                        </li>
                                        <li class="line">&nbsp;</li>
                                        <li>
                                            <div class="count-number">0</div>
                                            待完成
                                        </li>
                                        <li class="line">&nbsp;</li>
                                        <li>
                                            <div class="count-number">0</div>
                                            延期
                                        </li>
                                    </ul>
                                </div>
                                <div class="loading-indicator ng-scope" style="display: none;">
                                    <div class="hor-center">
                                        <h4>
                                            <div class="loading-ellipsis">
                                                <span class="spot"></span>
                                            </div>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="panel ng-isolate-scope">
                            <div class="panel-heading">
                                <span class="panel-title" translate="calendar.EVENTS_TODAY">今日日程</span>
                            </div>
                            <div class="panel-body panel-body--clear-padding">
                                <ul class="calendar-list-wrapper" ng-if="vm.loadingDone">
                                    
                                </ul>
                                <div class="empty-state" style="margin-top: 10px;">
                                    <span class="empty-icon">
                                        <i class="wtf wtf-empty-o">
                                            <font-awesome-icon icon="file-alt" class="nofile2"/>
                                        </i>
                                    </span>
                                     <p class="empty-text">没有数据</p>
                                </div>
                            </div>
                        </div>
                        <div class="panel">
                            <div class="panel-heading">
                                <span class="panel-title">详细资料</span>
                            </div>
                            <div class="panel-body">
                                <div class="profile-detail-list">
                                    <div class="profile-row">
                                        <div class="title">手机</div>
                                        <div class="content">17600978244</div>
                                    </div>
                                    <div class="profile-row">
                                        <div class="title">邮箱</div>
                                        <div class="content content-none">暂无</div>
                                    </div>
                                    <div class="profile-row">
                                        <div class="title">部门</div>
                                        <div class="content content-none">暂无</div>
                                    </div>
                                    <div class="profile-row">
                                        <div class="title">职位</div>
                                        <div class="content" >技术总监</div>
                                    </div>
                                </div>
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
    .main-body .main-body-center {
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
    .contact-detail-area .profile-member-wrapper .profile-header {
        display: -webkit-box;
        display: flex;
        display: -ms-flexbox;
        display: -webkit-flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        padding: 120px 0 0 15px;
        height: 250px;
        background: url(https://wttt.worktile.com/image/app/contacts/profile-bg.jpg?t=1536662418992) top left repeat-x #fff;
        background-size: auto 200px;
    }
    .contact-detail-area .profile-member-wrapper .profile-header .profile-header-avatar {
        margin-right: 20px;
        width: 110px;
        height: 110px;
        border-radius: 100%;
    }
    .contact-detail-area .profile-member-wrapper .profile-header .profile-header-avatar .lc-avatar {
        overflow: hidden;
        border: 5px solid #fff;
        border-radius: 100%;
    }
    .lc-avatar,.lc-avatar .lc-avatar-def{
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
    .lc-avatar-110 .lc-avatar-def, .lc-avatar-110 img {
        width: 110px;
        height: 110px;
        line-height: 110px;
        font-size: 45px;
        border-radius: 110px;
    }
    .contact-detail-area .profile-member-wrapper .profile-header .profile-header-profiles {
        width: 100%;
        position: relative;
    }
    .contact-detail-area .profile-member-wrapper .profile-header .profile-header-profiles .display_name {
        margin-bottom: 15px;
        padding-top: 35px;
        line-height: 1;
        font-size: 20px;
        color: #666;
    }
    .contact-detail-area .profile-member-wrapper .profile-header .profile-header-profiles .display_name .name {
        font-size: 16px;
        color: #888;
    }
    .contact-detail-area .profile-member-wrapper .profile-header .profile-header-profiles .display_name {
        margin-bottom: 15px;
        padding-top: 35px;
        line-height: 1;
        font-size: 20px;
        color: #666;
    }
    .contact-detail-area .profile-member-wrapper .profile-header .profile-header-profiles .display_name .following {
        font-size: 0;
        cursor: pointer;
    }
    .contact-detail-area .profile-member-wrapper .profile-header .profile-header-profiles .display_name .following i.wtf-star-o {
        color: #ddd;
    }
    .contact-detail-area .profile-member-wrapper .profile-header .profile-header-profiles ul {
        display: block;
        padding-top: 18px;
    }
    .contact-detail-area .profile-member-wrapper .profile-header .profile-header-profiles ul li {
        display: inline-block;
        margin-right: 25px;
        color: #333;
        vertical-align: middle;
    }
    .contact-detail-area .profile-member-wrapper .profile-header .profile-header-profiles ul li i {
        margin-right: 5px;
        font-size: 22px;
        color: #cacaca;
        vertical-align: -3px;
    }
    .contact-detail-area .profile-member-wrapper .profile-header .profile-header-profiles ul .line {
        width: 0;
        line-height: 16px;
        border-right: solid 1px #ddd;
    }
    .contact-detail-area .profile-member-wrapper .profile-header .profile-header-profiles .profile-header-action {
        width: 300px;
        text-align: right;
        position: absolute;
        left: 750px;
        bottom: 7px;
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
    .btn, .nav-link, .thy-badge-count {
        text-align: center;
    }
    .btn-primary, .btn-primary:hover {
        color: #fff;
        background-color: #22d7bb;
        border-color: #22d7bb;
    }
    .btn-group-sm>.btn, .btn-md, .btn-sm {
        font-size: .875rem;
        min-width: 70px;
        line-height: 1.5;
    }
    .m-r-15 {
        margin-right: 15px!important;
    }
    .btn-md {
        padding: .407rem 22px;
        border-radius: 1.25rem;
    }
    .contact-detail-area .profile-member-wrapper .profile-header .profile-header-profiles ul li .empty-value {
        color: #cacaca;
    }
    .btn-group-outline-default>.btn, .btn-outline-default {
        color: #888;
        background-color: transparent;
        background-image: none;
        border-color: #ddd;
    }
    .btn-primary:hover {
        box-shadow: 0 2px 5px 1px rgba(34,215,187,.6);
    }
    .btn-primary, .btn-primary:hover {
        color: #fff;
        background-color: #22d7bb;
        border-color: #22d7bb;
    }
    .btn-outline-default:hover {
        color: #22d7bb;
        border-color: #22d7bb;
    }
    .module-body {
        -webkit-box-flex: 1;
        -ms-flex: 1 1 0px;
        flex: 1 1 0;
        -webkit-flex: 1 1 0;
        position: relative;
        overflow-y: auto;
        overflow-x: auto;
        padding: 15px 15px 0;
        height: 100%;
    }
    .contact-detail-area .profile-member-wrapper .profile-body {
        position: relative;
        padding: 15px;
        display: -webkit-box;
        display: flex;
        display: -ms-flexbox;
        display: -webkit-flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
    }
    .contact-detail-area .profile-member-wrapper .profile-body .profile-body-content {
        width: 59%;
    }
    .panel {
        margin-bottom: 20px;
        background-color: #fdfdfd;
        border: 1px solid transparent;
        border-radius: 0;
        -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);
        box-shadow: 0 1px 1px rgba(0,0,0,.05);
    }
    .panel {
        margin-bottom: 15px;
        -webkit-box-shadow: 0 0!important;
        box-shadow: 0 0!important;
        border-radius: 2px;
    }
    .h-100p {
        height: 100%;
    }
    .panel .panel-heading {
        padding: 10px 20px 0;
        line-height: 30px;
        font-size: 14px;
        border-bottom: none;
    }
    .panel-title {
        margin-bottom: 0;
    }
    .panel-title {
        margin-top: 0;
        font-size: 16px;
    }
    .panel .panel-heading .panel-title {
        display: inline-block;
        padding-left: 8px;
        line-height: 1;
        color: #333;
        font-size: 14px;
        border-left: solid 3px #22d7bb;
    }
    .panel .panel-heading .header-btn {
        float: right;
    }
    .dropdown.dropdown-btn {
        display: inline-block;
    }
    .collapsing, .dropdown, .dropup {
        position: relative;
    }
    .dropdown.dropdown-btn .btn {
        padding: 3px 14px;
    }
    .btn-normal-radius {
        border-radius: 4px;
    }
    .dropdown.dropdown-btn .btn i.prefix-icon {
        color: #22d7bb;
        font-size: 16px;
        margin-right: 10px;
    }
    .dropdown.dropdown-btn .btn.btn-sm i.prefix-icon {
        font-size: 14px;
        margin-right: 8px;
    }
    .dropdown.dropdown-btn .btn.btn-sm .caret {
        margin-left: 16px;
    }
    .caret {
        display: inline-block;
        width: 0;
        height: 0;
        margin-left: 2px;
        vertical-align: middle;
        border-top: 4px dashed;
        border-top: 4px solid\9;
        border-right: 4px solid transparent;
        border-left: 4px solid transparent;
    }
    .panel .panel-body--clear-padding {
        padding: 0;
    }
    .clearfix:after, .clearfix:before, 
    .form-horizontal .form-group:after, 
    .form-horizontal .form-group:before, .nav:after, 
    .nav:before, .pager:after, .pager:before, 
    .panel-body:after, .panel-body:before {
        content: " ";
        display: table;
    }
    .empty-state {
        text-align: center;
    }
    .empty-state, thy-tree, thy-tree-node {
        display: block;
    }
    .empty-state .empty-text {
        color: #cacaca;
        font-size: .875rem;
    }
    .empty-state--lg .empty-text {
        font-size: 1rem;
    }
    // 右边
    .contact-detail-area .profile-member-wrapper .profile-body .profile-body-side {
        margin-left: 15px;
        width: 300px;
    }
    .panel .panel-body--clear-padding-lr {
        padding: 15px 0;
    }
    .status-overview-warpper ul li {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        width: 0;
        font-size: 12px;
        color: #888;
        text-align: center;
    }
    ul li{
        list-style: none;
    }
    .status-overview-warpper ul li .count-number {
        font-size: 24px;
        font-family: lcletter;
    }
    .text-primary {
        color: #22d7bb!important;
    }
    .status-overview-warpper ul li.line {
        -webkit-box-flex: 0;
        -ms-flex: 0;
        flex: 0;
        margin-top: 6px;
        width: 0;
        height: 43px;
        border-right: solid 1px #eee;
    }
    .status-overview-warpper ul {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
    }
    .contact-detail-area .profile-member-wrapper .profile-body .calendar-list-wrapper {
        padding-bottom: 15px;
    }
    .panel .panel-body {
        padding: 15px 20px;
    }
    .profile-detail-list .profile-row {
        margin-bottom: 20px;
        font-size: 14px;
        display: -webkit-box;
        display: flex;
        display: -ms-flexbox;
        display: -webkit-flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
    }
    .profile-detail-list .profile-row .title {
        margin-right: 20px;
        width: 60px;
        text-align: right;
        color: #aaa;
    }
    .profile-detail-list .profile-row .content {
        -webkit-box-flex: 1;
        -ms-flex: 1 1 0px;
        flex: 1 1 0;
        -webkit-flex: 1 1 0;
        color: #666;
        text-align: left;
        word-break: break-all;
    }
    .profile-detail-list .profile-row .content-none {
        color: #cacaca;
    }
    .nofile{
        width: 80px;
        height: 80px;
        color: lightgray;
    }
    .nofile2{
        width: 50px;
        height: 50px;
        color:lightgray;
    }
</style>
