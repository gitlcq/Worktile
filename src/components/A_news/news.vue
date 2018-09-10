<template>
    <div>
        <div class="left">
            <div class="left_header">
                 <span class="title">消息<i></i></span>
                 <div class="more">
                     <a href="javascript:;"><i></i></a>
                 </div>
                 
            </div>
            <div class="left_list">
                <div class="left_search">
                    <i></i>
                    <input type="text" placeholder="搜索成员、消息">
                </div>
                <ul></ul>
            </div>
        </div>
        <div class="right">
           
        </div>  
    </div>
</template>

<script>
    export default {
        name: "news"
    }
</script>

<style lang="scss" scoped>
   *{
       box-sizing:border-box;
    }
    div{
        height:100%;
        width: calc(100% - 70px);
        background-color:orange;
        position:relative;
    }
    .left{
       position: relative;
       width: 240px;
       background:pink;
       border-right: 1px solid #ddd;
       -webkit-transition: width .2s ease-in-out;
       transition: width .2s ease-in-out;
    }
    .left .left_header{
        height:50px;
        background-color:blue;
    }
    .left .title{
        float: left;
        margin: 0 20px;
        color: #333;
        line-height: 50px;
        font-size: 16px;
        cursor: pointer;
    }
    .left .more{
        float: right;
        margin: 0 20px;
        line-height: 50px;
        position: relative;
    }
    .left .left_list{
        margin-bottom: 3px;
    }
    .left .left_search{
        padding: 0 20px 10px;
        position: absolute;
    }
    .left .left_search input{
        background: #f3f3f3;
        -webkit-box-shadow: none;
        box-shadow: none;
        color: #666;
        height: 36px;
        font-size: 14px;
        padding-left: 28px;
        border-radius: 20px;
        border: 1px solid transparent;
        margin-top: 10px;
    }
    .right{
       overflow-x: hidden;
       overflow-y: auto;
       overflow-wrap: break-word;
       background-color: skyblue;
   }

</style>