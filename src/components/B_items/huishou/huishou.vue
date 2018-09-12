<template>
    <div>
        <div class="top">
             <i>😭</i>
            <span>回收站</span>
        </div>
         <div class="er">
                <router-view></router-view>
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
       height: 100%;
       position: absolute;
       border:15px solid rgb(238, 238, 238);
    }
</style>
