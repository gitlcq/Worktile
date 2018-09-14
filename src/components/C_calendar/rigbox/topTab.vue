<template>
    <div>
        <div class="module-header">
            <div class="title">
                <a href="">
                    <i class="iconfont icon-rili"></i>
                    <span>团队日程</span>
                </a>
            </div>
            <div class="contens">
                <div class="contens_body">
                    <a href="javascript:;">
                        <i class="iconfont icon-icon_arrow_left"></i>
                    </a>
                    <span>2018年09月 </span>
                    <a href="javascript:;">
                        <i class="iconfont icon-jiantouyou"></i>
                    </a>
                </div>
            </div>
            <div class="news">
                <button class="news_btn" @click="newData()">
                    <i class="iconfont icon-jiahao"></i>
                     新建日程
                </button>
                <div class="btns">
                    <button v-for="(item,index) of month" @click="istabs(index)">{{item}}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   data(){
          return{
            month:["月","周","日"]
          }
            
    },
    methods:{
        istabs(index){
            this.$store.state.istab =index;
            console.log(this.$store.state.istab,"455")
        },
        newData(){
             this.$store.state.newDatas =!this.$store.state.newDatas
        }
    },
    components: {
    //组件
    }
}
</script>

<style lang="scss" scoped>
.module-header{
        display: -webkit-flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        height: 50px;
        margin: 0;
        padding: 0 15px;
        position: relative;
        background: rgba(253,253,253,.95);
        .title{
            line-height: 50px;
            font-size: 16px;
            float: left;
            color: #333;
            flex: 1 1 0;
             -webkit-flex: 1 1 0;
            
            a{
                color: #333;
                i{
                    font-size: 20px;
                    margin: 0 10px 4px 0;
                    vertical-align: middle;
                    color: #22d7bb;
                }
                span{
                    color: #333;
                }
            }
        }
         .contens{
            float: left;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            display: block;
            line-height: 50px;
            padding: 0 10px;
            color: #aaa;
            -webkit-flex: 1 1 0;
            -webkit-box-flex: 1;
            text-align: center;
            .contens_body{
                a{
                    cursor: pointer;
                    color: #aaa;
                    min-width: 0;
                    i{
                        font-size: 20px;
                        line-height: 1rem;
                    }
                }
                span{
                    font-size: 16px;
                    color: #333;
                    margin-left: 10px;
                    margin-right: 10px;
                }
            }
        }
        .news{
            line-height: 50px;
            float: right;
            right: 0;
            min-width: 30%;
            text-align: right;
            .news_btn{
                padding: 3px 20px;
                font-size: 14px;
                line-height: 1.42857143;
                cursor: pointer;
                min-width: 110px;
                margin-right: 10px!important;
                display: inline-block;
                white-space: nowrap;
                vertical-align: middle;
                user-select: none;
                border: 1px solid transparent;
                color: #fff;
                background-color: #22d7bb;
                border-color: #22d7bb;
                display: inline-block;
            }
            .btns{
                text-align: right;
                line-height: 50px;
                display: inline-block;
                button{
                    color: #888;
                    background-color: transparent;
                    background-image: none;
                    border-color: #ddd;
                    position: relative;
                    flex: 0 1 auto;
                    cursor: pointer;
                    padding: .157rem 20px;
                    font-size: .875rem;
                    min-width: 70px;
                    line-height: 1.5;
                    border: 1px solid #ddd;
                    outline: none;
                    margin-left: -5px;
                }
            }
        }
}
</style>
