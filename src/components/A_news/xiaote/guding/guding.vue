<template>
    <div>
        <div class="unread_cont">
                <div class="channel-meta ">
                    <span class="ng-scope">这里是你和机器人</span>
                    <a href="javascript:;">小特机器人</a>
                    <span class="ng-scope">的私聊，在当前对话中发送的消息只有你自己可以访问，其他成员无法看到。</span>
                </div>
                <div class="channel_cont">
                    <div class="day-divider" >
                            <hr>
                            <div><span class="ng-binding">9月4日 星期二</span></div>
                    </div>
                            <div class="day_one">
                                <div class="day_pic">
                                    <img src="https://s3.cn-north-1.amazonaws.com.cn/lcavatar/381df779-62e6-49de-8792-620b94a5582d_40x40.png" alt="">
                                </div>
                                <a href="javascript:;" class="day_one_A">小特机器人</a>
                                <span class="ng-binding">08:46</span>
                                <div  class="ng-isolate-scope">
                                   为了让团队成员更好的认识您，请尽快完善<a href="javascript:;">个人资料</a>以及上传头像。
                                </div> 
                            </div>

                            <div class="day_one">
                                <div class="day_pic">
                                    <img src="https://s3.cn-north-1.amazonaws.com.cn/lcavatar/381df779-62e6-49de-8792-620b94a5582d_40x40.png" alt="">
                                </div>
                                <a href="javascript:;" class="day_one_A">小特机器人</a>
                               <span class="ng-binding">08:46</span>
                                <div  class="ng-isolate-scope">
                                   您已成功创建了企业：，当前版本为免费版，如果您想使用更多功能如审批、考勤、CRM、工作简报等，可以申请14天试用或者购买任一商业付费版本。
                                </div> 
                            </div>
                        <div class="channel_inner">

                        </div>
                        <div class="channel_bottom">
                            <div class="channel_btn">
                                <ul>
                                    <li>    
                                        <a href="javascript:;">
                                            <i class="iconfont channel_i">&#xe6e9;</i>
                                        </a>
                                    </li>
                                    <li>    
                                        <!-- <a href="javascript:;">
                                            <i class="iconfont channel_i">&#xe601;</i>
                                        </a> -->
                                         <a href="javascript:;">
                                              <el-upload
                                                class="upload-demo"
                                                action="https://jsonplaceholder.typicode.com/posts/"
                                                :on-preview="handlePreview"
                                                :on-remove="handleRemove"
                                                :file-list="fileList2"
                                                list-type="picture">                                   
                                                    <i class="iconfont channel_i2" size="small" type="primary">&#xe601;</i>
                                              
                                                </el-upload>
                                        </a>
                                    </li>
                                    <li>    
                                        <a href="javascript:;">
                                            <i class="iconfont channel_i">&#xe611;</i>
                                        </a>
                                    </li>
                                    <li>    
                                        <a href="javascript:;">
                                            <i class="iconfont channel_i">&#xe606;</i>
                                        </a>
                                    </li>
                                  
                                </ul>
                            </div>
                            <!-- <div class="modal-content">
                                <div class="link-module">
                                    <div class="modal-header">
                                        <a href="javascript:;" class="modal-close" ><i class="lcfont lc-close"></i></a>
                                        <h3 class="modal-title">全局关联</h3>
                                    </div>
                                    <div class="modal-body">
                                        <div class="modal-body-left">
                                            <ul>
                                                <li class="ng-binding"><i class="wtf wtf-link-file"></i>网盘
                                                </li>
                                                <li class="ng-binding"><i class="wtf wtf-link-event"></i>日历
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="modal-body-right">
                                            <div class="inner-left">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                            <textarea name="" id="" cols="30" rows="10" ></textarea>
                          
                            <div class="channel_b_cont">
                                <ul>
                                    <li v-for='(item,index) in list'>
                                         <span>{{item.content}}</span>  
                                    </li>
                                </ul>
                            </div>
                        </div>
                </div>
        </div>
               
            <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
hr{
    width:120%;
}
li{
    list-style: none;
}
.channel-meta {
    padding: 20px 25px;
    color: #b9b9b9;
    font-size: 15px;
}


.channel-meta a {
    color: #6f8092;
}
.unread_cont{
    position: absolute;
    left:-10px;
    top: -20px;
    width: 100%;
    height: 82%;
    overflow: auto;
    margin-left: 10px;
    margin-top: 20px;
    background-color: #fff;
}
.channel_cont{
    width: 1000px;
    height: 50px;
     position: absolute;
     margin: 10px auto;
}
.day-divider {
    position: relative;
    height: 20px;
    margin: 20px 0;
}
.day-divider{
    position: absolute;
    width: 100%;
    top: 10px;
    border: none;
    height: 1px;
    margin: 0;
    background-image: -webkit-gradient(linear,left top,right top,from(#fff),color-stop(50%,#eee),to(#fff));
    background-image: linear-gradient(to right,#fff,#eee 50%,#fff);
    background-repeat: no-repeat;
}
 .day-divider div {
    text-align: center;
    line-height: 20px;
    position: absolute;
    width: 100%;
    top: -10px;
}
.day-divider div span {
    margin: auto;
    padding: 0 20px;
    display: inline-block;
    background-color: #fdfdfd;
    font-size: 16px;
    color: #aaa;
}
.day_one{
    width: 915px;
    height: 53px;
    margin-left: 20px;
    margin-top: 10px;
}
.day_pic{
     width: 38px;
    height: 38px;
  
}
.day_pic img{
    width: 38px;
    height: 38px;
    line-height: 38px;
    font-size: 12px;
    border-radius: 38px;
      margin-top: 40px;
}
.day_one_A{
    color: #333;
    font-size: 12px;
    float: left;
    margin-left: 55px;
}
.day_one>span {
    margin-left: 10px;
    color: #aaa;
    font-size: 12px;
    float: left;
}
.ng-isolate-scope{
    margin-top: 20px;
    font-size: 14px;
    margin-left: 55px;
    color: #aaa
}
.ng-isolate-scope a{
        color: #22d7bb;
}
.channel_inner{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 170px;
    background-color: pink;
}
.channel_bottom{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 170px;
}
textarea{
      overflow: hidden;
      width: 100%;
    word-wrap: break-word;
    resize: none;
    height: 63px;
    border: 1px solid #ddd;
    // border: 0;
}
.channel_btn{
    margin-left: 6px;
}
.channel_btn ul li{
    float: left;
}
.channel_btn ul li a{
    font-size: 14px;
        color: #aaa;
    padding: 8px 12px 8px 13px;
}
.channel_i2{
    position: absolute;
        top: 4px;
    left: 51px;
}
.modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 0 solid rgba(0,0,0,.2);
    border-radius: .3rem;
    box-shadow: 0 0 1.5rem rgba(0,0,0,.4);
    outline: 0;
}
.modal-header{
    padding-left: 30px;
    padding-right: 30px;
    padding: 0 1.875rem;
    align-items: center;
    height: 50px;
}
.modal-close {
    color: #ddd;
    line-height: 50px;
}
.modal-header h3 {
    font-size: 1rem;
    font-weight: 500;
}
.modal-title {
    margin-bottom: 0;
    line-height: 1.5;
}
.modal-body {
    display: flex;
    padding-top: 0;
    padding-bottom: 0;
    height: 500px;
    border-bottom: 1px solid #f3f3f3;
}
.modal-body-left{
    width: 20%;
    height: 100%;
    border-right: 1px solid #f3f3f3;
}
.modal-body-left ul {
    padding: 12px 0;
}
.modal-body-left ul li {
    padding-left: 30px;
    line-height: 36px;
    font-size: 15px;
    margin-bottom: 1px;
    cursor: pointer;
}
.modal-body-right {
    width: 80%;
    height: 100%;
}
 .inner-left {
    width: 30%;
    height: 100%;
    border-right: 1px solid #f3f3f3;
    overflow-y: auto;
    font-size: 15px;
    padding-top: 12px;
}


</style>
