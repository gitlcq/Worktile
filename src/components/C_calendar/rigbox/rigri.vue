<template>
        <div class="module-footer">
            <div class="moule">
                <div class="contain">
                <span><i class="iconfont icon-richeng"></i></span>
                <p>没有日程安排</p>
            </div>
            </div>
        </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .module-footer{
        overflow-y: auto;
        overflow-x: auto;
        padding: 15px 15px 0;
        height: 100%;
        -webkit-flex: 1 1 0;
        -webkit-box-flex: 1;
        position: relative;
        width: 100%;
         background: #fdfdfd;
        .moule{
            -webkit-flex: 1;
            margin-bottom: 15px;
            background: #fdfdfd;
            -webkit-box-flex: 1;    
        .contain{
            text-align: center;
            margin-top: 345px;
            display: block;
            padding-bottom: 365px;
            span{
                    text-align: center;
                i{
                    font-size: 5rem;
                    color: #eee;
                    display: inline-block;
                }
            }
            p{
                color: #cacaca;
                font-size: 1rem;
                margin-bottom: 1rem;
            }
        }
    }
 }
</style>
