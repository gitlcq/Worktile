<template>
    <div>
        <div class="header">
          <a href="#"><i><font-awesome-icon icon="share-alt" class="share"/></i>标签</a>
          <!-- <div class="head-right">
             <div class="btu">+新建</div>
             <div class="btn">上传文件</div>
          </div> -->
        </div>
        <div class="part">
           <div class="part-bg">
               <i><font-awesome-icon icon="file-alt" class="file3"/></i>
               <span>没有文件</span>
           </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang='scss' scoped>
    .header{
        height: 50px;
        width:100%;
        // border:1px solid red;
        background: rgba(253,253,253,.95);
       
    }
    .share{
       margin: 0 10px 0px 0;
    // vertical-align: middle;
        color: #22d7bb;
    }
    .file3{
        color: #eee;
        font-size: 100px;
        margin:300px 500px;
        position: relative;
    }
    .part-bg span{
        position: absolute;
        left:510px;
        top:400px;
        color: #cacaca;
        line-height: 50px;
    }
    .header a{
        color: #aaa!important;
        text-decoration: none;
        line-height: 50px;
        float: left;
        font-size: 16px;
        padding-left: 25px;
    }
     .header a:hover{
         color: #333!important;
     }
    .part{
        height: 1130px;
        width:1230px;
        background: rgb(212, 207, 207);
        position: relative;
        // border:1px solid blue;
    }
    .icon{
       font-style:normal;
    }
    .head-right{
        width: 280px;
        height: 50px;
        // border:1px solid red;
        float:left;
        margin-left: 810px;
    }
    .part-bg{
        background: #fff;
        width: 1170px;
        height: 680px;
        position: absolute;
        top:20px;
        left:20px;
    }
    .heer{
        width: 1140px;
        margin:auto;
        line-height: 60px;
        height: 55px;
        border-bottom: 1px solid #eee;
    }
    .btu{
        width: 100px;
        height: 30px;
        color: #22d7bb;
        background-color: #fff;
        border:1px solid  #22d7bb;
        text-align: center;
        line-height:30px;
        cursor: pointer;
        border-radius: 4px;
        margin-top:10px;
        float: left;
    }
    .btn{
        width: 140px;
        height: 30px;
        background: #22d7bb;
        color: #fff;
        border:1px solid  #22d7bb;
        text-align: center;
        line-height:30px;
        cursor: pointer;
        border-radius: 20px;
        margin-top:10px;
        margin-left: 30px;
        float: left;
    }
</style>

