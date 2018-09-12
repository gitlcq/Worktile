<template>
    <div>
        <div class="top">
             <i>😭</i>
            <span>项目</span>
        </div>
         <div class="er">
                <router-view></router-view>
             <i><font-awesome-icon icon="building" class="icos"/></i>
            <span>项目</span>
        </div>
         <div class="er">
            <div class="part-bg">
               <i><font-awesome-icon icon="file-alt" class="file3"/></i>
               <br>
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
     .top{
        width: 100%;
        height:50px;
        border-bottom:1px solid #ccc;
    }
    .top i{
        font-style:normal;
        display:inline-block;
        margin-top:15px;
        margin-left:15px;
    }
    .top span {
        display:inline-block;
        font-size:16px;
    }
    .er{
       width:93%;
       width:100%;
       height: 100%;
       position: absolute;
       border:15px solid rgb(238, 238, 238);
    }
    .icos{
    font-size:14px;
    margin-left:-10px;
    color:#848484;
}
.file3{
        color: #eee;
        font-size: 100px;
        margin:300px 450px;
        position: relative;
    }
.part-bg span{
   position: absolute;
   left: 455px;
   top:430px;
   font-size:17px;
    color: #eee;
}
</style>
