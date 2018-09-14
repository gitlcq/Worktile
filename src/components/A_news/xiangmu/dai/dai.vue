<template>
    <div>
        <hr>
        <div class="a">
            <span>9月12日星期一</span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    hr{
        position: absolute;
        width: 100%;
        top: 50px;
        border: none;
        height: 1px;
        margin: 0;
        background-image: -webkit-gradient(linear,left top,right top,from(#fff),color-stop(50%,#eee),to(#fff));
        background-image: linear-gradient(to right,#fff,#eee 50%,#fff);
        background-repeat: no-repeat;
    }
   .a{
        text-align: center;
        line-height: 20px;
        position: absolute;
        width: 100%;
        margin-top: 40px;
    }
    span{
        margin: auto;
        padding: 0 20px;
        display: inline-block;
        background-color: #fdfdfd;
        font-size: 16px;
        color: #aaa;
    }
</style>
