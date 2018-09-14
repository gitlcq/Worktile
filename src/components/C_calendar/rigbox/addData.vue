<template>
    <div>
        <div class="sel_n">
            <div class="contain">
                <div class="modal">
                    <div class="modal_t">
                        <a href="javascript:;" @click="guanbis()">
                            <i class="iconfont icon-guanbi"></i>
                        </a>
                        <h3>新建日历</h3>
                    </div>
                    <div class="modal_b">
                        <div class="modal_body">
                            <div class="modal_text">
                                <input type="text" placeholder="日历名称" v-model="txt">
                            </div>
                            <div class="modal_cols">
                                <ul>
                                    <li v-for="(item,index) of colos" :style="{background:item}" @click="btn_clos(index,item)">
                                        <!-- <span v-show="index==btnCol">
                                            <i class="iconfont icon-duihao"></i>
                                        </span> -->
                                    </li>
                                </ul>
                            </div>
                            <div class="modal_fanw">
                                <label for="">可见范围</label>
                                <div class="cont">
                                    <div>
                                        <select name="" id="">
                                            <option value="">公开：企业所有成员都可以看见此日历</option>
                                            <option value="">私有：只有加入的成员才能看见此日历</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="modal_peop">
                                <label for="">日历成员</label>
                                <div class="cont">
                                    <ul>
                                        <li>
                                            <span>
                                                <div>M</div>
                                            </span>
                                        </li>
                                        <li>
                                            <a href="javscript:;"><i class="iconfont icon-jiahao"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="modal_btns">
                                <label for=""></label>
                                <div class="cont">
                                    <button @click="ensure()">确定</button>
                                    <a href="javascript:;">取消</a>
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
        data(){
        return{
                colos:[
                "#22d7bb","#18bfa4","#2cccda","#2dbcff","#4e8af9","#7076fa","#9473fd","#ef7ede",
                "#f969aa","#fc587b","#fa5a55","#f8120b","#ffa415","#ffd234","#b2b2b2","#66c060"
            ],
            txt:'',
        }
    },
    methods:{
        guanbis(){
            this.$store.state.textDatas =!this.$store.state.textDatas
        },
        ensure(){
            this.$store.dispatch("ADD",{
                "name":"团队日程",
                "title": this.txt,
                "cols": "cyan",
                "isShow":"true"
            });
        }
    }
}
</script>

<style lang="scss" scoped>
   .sel_n{
            z-index: 1050;
             display: block;
             opacity: 1;
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            .contain{
                max-width: 660px;
                margin: 3.75rem auto;
                border: 1px solid red;
                position: relative;
                .modal{
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    pointer-events: auto;
                    background-color: #fff;
                    background-clip: padding-box;
                    border: 0 solid rgba(0,0,0,.2);
                    border-radius: .3rem;   
                    outline: 0;
                    box-shadow: 0 0 1.5rem rgba(0,0,0,.5);
                   .modal_t{
                           display: flex;
                            justify-content: space-between;
                            border-bottom: 1px solid #eee;
                            border-top-left-radius: .3rem;
                            border-top-right-radius: .3rem;
                            padding: 0 1.875rem;
                            min-height: 1.5;
                            align-items: center;
                            height: 50px;
                            a{
                                    color: #ddd;
                                    line-height: 50px;
                                    order: 1;
                            }
                            h3{
                                    font-size: 1rem;
                                      font-weight: 500;
                            }
                   }
                   .modal_b{
                       position: relative;
                        flex: 1 1 auto;
                        padding: 1.25rem 1.875rem 1.875rem;
                        .modal_body{
                            box-sizing: border-box;
                            .modal_text{
                                    margin-right: 0;
                                    margin-left: 0;
                                    display: flex;
                                    flex-wrap: wrap;
                                    margin-bottom: 1rem;
                                    input{
                                        display: block;
                                        width: 100%;
                                        line-height: 1.5;
                                        color: #333;
                                        background-color: #fff;
                                        background-clip: padding-box;
                                        border: 1px solid #eee;
                                        border-radius: .25rem;
                                        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                                        padding: .469rem .875rem;
                                        font-size: .875rem;
                                    }
                            }
                            .modal_cols{
                                    margin-right: 0;
                                    margin-left: 0;
                                    display: flex;
                                    flex-wrap: wrap;
                                     margin-bottom: 1rem;
                                    ul{
                                        display: flex;
                                        width: 100%;
                                        li{
                                             list-style: none;
                                            cursor: pointer;
                                            margin-bottom: 0;
                                            -webkit-box-pack: justify;
                                            justify-content: space-between;
                                            height: 25px;
                                            width: 25px;
                                            margin-right: 13px;
                                            border-radius: 25px;
                                            span{
                                                // display: inline-block;
                                                border-radius: 50%;
                                                padding: 1px 4px 6px;
                                                width: 25px;
                                                height: 25px;
                                                text-align: center;
                                                margin-left: 0px;
                                                margin-top: -11px;  
                                                display: none;
                                                i{
                                                    color: #fff;
                                                    visibility: visible;
                                                    font-size: 16px;
                                                }
                                            }
                                            .curs{
                                                display: inline-block;
                                            }
                                        }
                                    }
                            }
                            .modal_fanw{
                                    display: flex;
                                    flex-wrap: wrap;
                                    margin-left: -15px;
                                    margin-right: -15px;
                                    margin-bottom: 1rem;
                                    label{
                                            padding-right: 0;
                                            padding-left: 0;
                                            color: #888;
                                            font-size: 14px;
                                            font-weight: 400;
                                            text-align: right;
                                            margin-bottom: 0;
                                            padding-top: 6px;
                                            flex: 0 0 16.66667%;
                                            max-width: 16.66667%;
                                    }
                                    .cont{
                                        flex: 0 0 83.33333%;
                                        max-width: 83.33333%; 
                                        div{
                                                position: relative;
                                                select{
                                                    display: block;
                                                    width: 100%;
                                                    line-height: 1.5;
                                                    color: #333;
                                                    background-color: #fff;
                                                    background-clip: padding-box;
                                                    border: 1px solid #eee;
                                                    border-radius: .25rem;
                                                    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                                                    padding-right: 30px;
                                                    height: calc(2.2505rem + 2px);
                                                    padding: .469rem .875rem;
                                                    font-size: .875rem;
                                                    option{
                                                        color: #666;
                                                    }
                                                }
                                        }
                                    }
                            }
                            .modal_peop{
                                    margin-right: -15px;
                                    margin-bottom: 12px;
                                    display: flex;
                                    flex-wrap: wrap;
                                    margin-left: -15px;
                                    label{
                                            color: #888;
                                            font-size: 14px;
                                            font-weight: 400;
                                            padding-right: 0;
                                            padding-left: 0;
                                            text-align: right;
                                            margin-bottom: 0;
                                            padding-top: 6px;
                                            flex: 0 0 16.66667%;
                                            max-width: 16.66667%;
                                    }
                                    .cont{
                                            position: relative;
                                            width: 100%;
                                            min-height: 1px;
                                            padding-right: 15px;
                                            padding-left: 15px;
                                            flex: 0 0 83.33333%;
                                            max-width: 83.33333%;
                                            ul{
                                                    margin: 0;
                                                    padding: 0;
                                                    display: block;
                                                    li{
                                                            margin-right: 6px;
                                                            margin-bottom: 8px;
                                                            float: left;
                                                            list-style: none;
                                                            position: relative;
                                                    }
                                                    li:nth-child(1){
                                                        span{
                                                            width: 30px;
                                                            height: 30px;
                                                            line-height: 30px;
                                                            font-size: 12px;
                                                            border-radius: 30px;
                                                            text-align: center !important;
                                                            overflow: hidden;
                                                            zoom: 1;
                                                            vertical-align: middle;
                                                            color: #fff !important;
                                                            text-shadow: transparent 0 0 0;
                                                            padding: 0 !important;
                                                            background-color: #ef7ede;
                                                            margin-right: 10px;
                                                            display: inline-block;
                                                            div{
                                                                display: inline-block;
                                                            }
                                                        }
                                                    }
                                                    li:nth-child(2){
                                                        a{
                                                                transition: all .2s;
                                                                padding: 0;
                                                                border: 0;
                                                                color: #aaa;
                                                                cursor: pointer;
                                                                font-size: 14px;
                                                                i{
                                                                           font-size: 14px;
                                                                            border: 1px dashed #aaa;
                                                                            border-radius: 50%;
                                                                            padding: 7px;
                                                                            line-height: 15px;
                                                                            width: 30px;
                                                                            height: 30px;
                                                                            text-align: center;
                                                                }
                                                        }
                                                    }

                                            }
                                    }
                            }
                            .modal_btns{
                                    display: flex;
                                    flex-wrap: wrap;
                                    margin-left: -15px;
                                    margin-right: -15px;
                                    label{
                                        padding-right: 0;
                                        padding-left: 0;
                                        color: #888;
                                        font-size: 14px;
                                        font-weight: 400;
                                        text-align: right;
                                        margin-bottom: 0;
                                        padding-top: 6px;
                                        flex: 0 0 16.66667%;
                                        max-width: 16.66667%;
                                    }
                                    .cont{
                                        flex: 0 0 83.33333%;
                                        max-width: 83.33333%;
                                        button{
                                                color: #fff;
                                                background-color: #22d7bb;
                                                border-color: #22d7bb;
                                                cursor: pointer;
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
                                        }
                                        a{
                                        margin-left: 10px;
                                        cursor: pointer;
                                        color: #aaa;
                                        }
                                    }
                            }
                        }
                   } 
                }
            }
    }
</style>
