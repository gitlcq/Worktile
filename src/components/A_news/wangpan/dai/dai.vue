<template>
    <div>
       <div class="gu">
           <span>待处理</span>
       </div>
       <div class="down">
            <div class="down_content">
                <span class="m">
                    <div>M</div>
                </span>
                <div class="right">
                    <span class="s">M</span>
                    <span>9月14日 9:50</span>
                </div>
                <div class="d">哈哈哈哒的</div>
            </div>
       </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .gu{
    padding: 10px 20px 0;
    line-height: 30px;
    font-size: 14px;
    border-bottom: none;
  }
  .gu span{
    display: inline-block;
    padding-left: 8px;
    line-height: 1;
    color: #333;
    font-size: 14px;
    border-left: solid 3px #22d7bb;
  }
  .down{
      padding: 0 0 15px;
      margin-top:40px;
      margin-left:30px;
  }
  .down .down_content{
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-flex: 1;
    margin-bottom: 15px;
    background: #fdfdfd;
  }
  .m{
    width: 38px;
    height: 38px;
    line-height: 38px;
    font-size: 12px;
    border-radius: 38px;
    background-color: rgb(239, 126, 222);
    text-align: center!important;
    overflow: hidden;
    zoom: 1;
    vertical-align: middle;
    color: #fff!important;
    text-shadow: transparent 0 0 0;
    padding: 0!important;
    margin-top: 10px;
  }
  .right{
    margin-left: 52px;
  }
  .right span{
    margin-left: 10px;
    color: #aaa;
    font-size: 12px;
    float: left;
  }
  .d{
    word-break: break-word;
    word-wrap: break-word;
    color: #333;
    width: 100px;
    margin-left: 63px;
    height: 30px;
    padding-top: 30px;
  }
  .s{
      color: #000;
  }
  .right span{
      display:block;
  }
</style>
