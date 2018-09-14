<template>
    <div>
            <div class="news">
            <div class="news_">
                <div class="news_cont">
                    <div class="news_t">
                        <a href="javascript:;">
                            <i class="iconfont icon-close" @click="close()"></i>
                        </a>
                        <h3>新建日程</h3>
                    </div>
                    <div class="news_b">
                        <div class="news_body">
                            <div class="news_text">
                                <input type="text" placeholder="日程安排，如下午2:00例会" v-model="title">
                            </div>
                            <div class="news_rili">
                                <label for="">日历</label>
                                <div class="news_rili_C">
                                    <div>
                                        <select name="" id="">
                                            <option value="" v-model="name">123</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="news_date">
                                <div class="news_date_yi news_dates">
                                    <label for="" class="sdate">开始日期</label>
                                    <div class="startDate">
                                        <input type="date"  v-model="StartDate">
                                        <span></span>
                                    </div>
                                    <div class="edate">结束日期</div>
                                    <div class="endDate">
                                        <input type="date" v-model="endDate">
                                        <span></span>
                                    </div>
                                </div>
                                <div class="news_date_er news_dates">
                                    <div class="news_date_er_c">
                                        <div>
                                            <label for="">
                                                <input type="checkbox">
                                                <span>全天</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="news_date_sa news_dates">
                                    <label for="">参与人</label>
                                    <div class="news_date_sa_c">
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
                                <div class="news_date_si news_dates">
                                    <div class="news_date_si_c">
                                        <div>
                                                <label for="">
                                                    <input type="checkbox">
                                                    <span>参与人反馈</span>
                                                </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="news_grounp">
                                <div class="news_grounp_c">
                                    <div>
                                        <a href="javascript:;">添加更多选项</a>
                                    </div>
                                </div>
                            </div>
                            <div class="news_btns">
                                <div>
                                    <button @click="queren()">确认</button>
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
            isShow:false,
            name:"",
            title:"",
            StartDate:"",
            endDate:"",
            errDate:""
        }
    },
    methods:{
        close(){
          this.$store.state.newDatas =!this.$store.state.newDatas
        },
        queren(){
          this.$store.dispatch("ADDList",{
                "name":this.name,
                "title": this.title,
                "StartDate":this.StartDate,
                "endDate":this.endDate,
                "errDate":this.errDate
            });   
        }
       
    }
    
}
</script>
<style lang="scss" scoped>
     .news{
            z-index: 1050;
          display: block;
              position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
          .news_{
            max-width: 660px;
            margin: 3.75rem auto;
            position: relative;
            width: auto;
            pointer-events: none;
            .news_cont{
                position: relative;
                display: flex;
                flex-direction: column;
                width: 100%;
                pointer-events: auto;
                background-color: rgb(255, 255, 255);
                background-clip: padding-box;
                border-width: 0px;
                border-style: solid;
                border-color: rgba(0, 0, 0, 0.2);
                border-image: initial;
                border-radius: 0.3rem;
                outline: 0px;
                box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 1.5rem;
                .news_t{
                    align-items: center;
                    height: 50px;
                    padding: 0px 1.875rem;
                    display: flex;
                    justify-content: space-between;
                    border-top-left-radius: 0.3rem;
                    border-top-right-radius: 0.3rem;
                    border-bottom: 1px solid rgb(238, 238, 238);
                    a{
                        color: rgb(221, 221, 221);
                        line-height: 50px;
                        order:1;
                        i{
                        font-size: 16px;
                        -webkit-font-smoothing: antialiased;
                        font-style: normal;
                        }
                    }
                    h3{
                        margin-bottom: 0px;
                        line-height: 1.5;
                        font-size: 1rem;
                        font-weight: 500;
                    }
                }
                .news_b{
                    padding: 1.25rem 1.875rem 1.875rem;
                    .news_body{
                        display: block;
                        margin-top: 0em;
                        .news_text{
                            margin-right: 0px;
                            margin-left: 0px;
                            display: flex;
                            flex-wrap: wrap;
                            margin-bottom: 1rem;
                            input{
                                font-size: 0.875rem;
                                padding: 0.469rem 0.875rem;
                                display: block;
                                width: 100%;
                                line-height: 1.5;
                                color: rgb(51, 51, 51);
                                background-color: rgb(255, 255, 255);
                                background-clip: padding-box;
                                border-width: 1px;
                                border-style: solid;
                                border-color: rgb(238, 238, 238);
                                border-image: initial;
                                border-radius: 0.25rem;
                                transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
                            }
                        }
                        .news_rili{
                            display: flex;
                            flex-wrap: wrap;
                            margin-left: -15px;
                            margin-right: -15px;
                            margin-bottom: 1rem;
                            label{
                                max-width: 16.6667%;
                                flex: 0 0 16.6667%;
                                text-align: right;
                                margin-bottom: 0px;
                                padding-top: 6px;
                                color: rgb(136, 136, 136);
                                font-size: 14px;
                                font-weight: 400;
                                padding-right: 0px;
                                padding-left: 0px;
                             }
                                .news_rili_C{
                                    max-width: 83.3333%;
                                    flex: 0 0 83.3333%;
                                    div{
                                        position: relative;
                                        select{
                                            display: block;
                                            width: 97%;
                                            line-height: 1.5;
                                            color: rgb(51, 51, 51);
                                            background-color: rgb(255, 255, 255);
                                            background-clip: padding-box;
                                            border-width: 1px;
                                            border-style: solid;
                                            border-color: rgb(238, 238, 238);
                                            border-image: initial;
                                            border-radius: 0.25rem;
                                            transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
                                            padding-right: 30px;
                                            height: calc(2.2505rem + 2px);
                                            option{
                                                color: rgb(102, 102, 102);
                                                font-weight: normal;
                                                display: block;
                                                white-space: pre;
                                                min-height: 1.2em;
                                                padding: 0px 2px 1px;
                                            }
                                        }
                                    }
                                }
                                   
                        }
                        .news_date{
                            .news_dates{
                                display: flex;
                                flex-wrap: wrap;
                                margin-left: -15px;
                                margin-right: -15px;
                                margin-bottom: 1rem;
                            }
                            .news_date_yi{
                                label{
                                    padding-right: 0px;
                                    padding-left: 0px;
                                    color: rgb(136, 136, 136);
                                    font-size: 14px;
                                    font-weight: 400;
                                    text-align: right;
                                    margin-bottom: 0px;
                                    padding-top: 6px;
                                    max-width: 16.6667%;
                                    flex: 0 0 16.6667%;
                                }
                                .startDate{
                                    position: relative;
                                    width: 100%;
                                    min-height: 1px;
                                    padding-right: 15px;
                                    padding-left: 15px;
                                    flex: 0 0 33.33333%;
                                    max-width: 33.33333%;
                                    input{
                                            cursor: pointer;
                                            display: block;
                                            width: 100%;
                                            line-height: 1.5;
                                            color: rgb(51, 51, 51);
                                            background-color: rgb(255, 255, 255);
                                            background-clip: padding-box;
                                            border-width: 1px;
                                            border-style: solid;
                                            border-color: rgb(238, 238, 238);
                                            border-image: initial;
                                            border-radius: 0.25rem;
                                            transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
                                            padding: .469rem .875rem;
                                             font-size: .875rem;
                                    }
                                    span{
                                        position: absolute;
                                        top: 50%;
                                        margin-top: -0.75rem;
                                        z-index: 2;
                                        display: block;
                                        text-align: center;
                                        pointer-events: none;
                                        font-size: 1rem;
                                        -webkit-font-smoothing: subpixel-antialiased;
                                        color: rgb(170, 170, 170);
                                        right: 1.75rem;
                                    }
                                }
                                .edate{
                                    max-width: 16.6667%;
                                    flex: 0 0 16.6667%;
                                    text-align: right;
                                    margin-bottom: 0px;
                                    padding-top: 6px;
                                    color: rgb(136, 136, 136);
                                    font-size: 14px;
                                    font-weight: 400;
                                    padding-right: 5px;
                                    padding-left: 0px;
                                }    
                                .endDate{
                                        max-width: 33.3333%;
                                        flex: 0 0 33.3333%;
                                        input{   
                                             display: block;
                                            width: 92%;
                                            line-height: 1.5;
                                            color: rgb(51, 51, 51);
                                            background-color: rgb(255, 255, 255);
                                            background-clip: padding-box;
                                            border-width: 1px;
                                            border-style: solid;
                                            border-color: rgb(238, 238, 238);
                                            border-image: initial;
                                            border-radius: 0.25rem;
                                            transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
                                            cursor: pointer;               
                                            padding: .469rem .875rem;
                                             font-size: .875rem;
                                        }
                                        span{
                                            position: absolute;
                                            top: 50%;
                                            margin-top: -0.75rem;
                                            z-index: 2;
                                            display: block;
                                            text-align: center;
                                            pointer-events: none;
                                            font-size: 1rem;
                                            -webkit-font-smoothing: subpixel-antialiased;
                                            color: rgb(170, 170, 170);
                                            right: 1.75rem;
                                        }
                                }
                            }
                            .news_date_er{
                                .news_date_er_c{
                                    margin-left: 16.6667%;
                                    max-width: 25%;
                                    flex: 0 0 25%;
                                    div{
                                            padding-top: 0px !important;
                                            min-height: 26px;
                                            position: relative;
                                            display: block;
                                            label{
                                                min-height: 20px;
                                                padding-left: 20px;
                                                margin-bottom: 0px;
                                                font-weight: 400;
                                                cursor: pointer;
                                                input{
                                                    position: absolute;
                                                    margin-left: -20px;
                                                    margin-top: 2px;
                                                    -webkit-appearance: none;
                                                    width: 1rem;
                                                    height: 1rem;
                                                    cursor: pointer;
                                                    border-width: 1px;
                                                    border-style: solid;
                                                    border-color: rgb(221, 221, 221);
                                                    border-image: initial;
                                                }
                                                span{
                                                        display: inline-block;
                                                        margin-left: 5px;
                                                        color: rgb(136, 136, 136);
                                                        font-size: 0.875rem;
                                                }
                                            }
                                    }
                                }
                            }
                            .news_date_sa{
                                label{
                                    color: rgb(136, 136, 136);
                                    font-size: 14px;
                                    font-weight: 400;
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
                                .news_date_sa_c{
                                    max-width: 83.3333%;
                                    flex: 0 0 83.3333%;
                                    position: relative;
                                    width: 100%;
                                    min-height: 1px;
                                    padding-right: 15px;
                                    padding-left: 15px;
                                    ul{
                                        display: block;
                                        margin: 0px;
                                        padding: 0px;
                                        li{
                                            margin-right: 6px;
                                            margin-bottom: 8px;
                                            float: left;
                                            position: relative;
                                            list-style: none;
                                        }
                                        li:nth-child(1){
                                                span{
                                                    width: 30px;
                                                    height: 30px;
                                                    line-height: 30px;
                                                    font-size: 12px;
                                                    border-radius: 30px;
                                                    background-color: rgb(239, 126, 222);
                                                    display:inline-block;
                                                    color: white;
                                                    text-align: center;
                                                    div{
                                                            display: inline-block;
                                                    }
                                                }
                                        }
                                        li:nth-child(2){
                                            a{
                                                font-size: 14px;
                                                color: rgb(170, 170, 170);
                                                font-size: 14px;
                                                transition: all 0.2s ease 0s;
                                                padding: 0px;
                                                i{
                                                    font-size: 14px;
                                                    border-width: 1px;
                                                    border-style: dashed;
                                                    border-color: rgb(170, 170, 170);
                                                    border-image: initial;
                                                    border-radius: 50%;
                                                    padding: 7px;
                                                    color: rgb(202, 202, 202);
                                                }
                                            }
                                        }

                                    }
                                }

                            }
                            .news_date_si{
                                .news_date_si_c{
                                    max-width: 83.3333%;
                                    flex: 0 0 83.3333%;
                                    margin-left: 16.6667%;
                                    div{
                                        margin-top: 0px;
                                        margin-bottom: 0px;
                                        padding-top: 6px;
                                        min-height: 26px;
                                        label{
                                            min-height: 20px;
                                            padding-left: 20px;
                                            margin-bottom: 0px;
                                            font-weight: 400;
                                            cursor: pointer;
                                            input{
                                                color: rgb(34, 215, 187);
                                                border-color: rgb(34, 215, 187);
                                                position: absolute;
                                                margin-left: -20px;
                                                margin-top: 2px;
                                            }
                                            span{
                                                display: inline-block;
                                                margin-left: 5px;
                                                color: rgb(136, 136, 136);
                                            }
                                        }
                                    }
                                }
                            }

                        }
                        .news_grounp{
                            display: flex;
                            flex-wrap: wrap;
                            margin-left: -15px;
                            margin-right: -15px;
                            margin-bottom: 1rem;
                            .news_grounp_c{
                                max-width: 83.3333%;
                                flex: 0 0 83.3333%;
                                margin-left: 16.6667%;
                                div{
                                    padding-top: 5px;
                                    padding-left: 0px;
                                    min-height: 26px;
                                    margin-top: 0px;
                                    margin-bottom: 0px;
                                    position: relative;
                                    a{
                                        color: rgb(34, 215, 187);
                                    }
                                }
                            }
                        }
                        .news_btns{
                            margin-right: -15px;
                            display: flex;
                            flex-wrap: wrap;
                            margin-left: -15px;
                            margin-bottom: 0px;
                            div{
                                max-width: 83.3333%;
                                flex: 0 0 83.3333%;
                                margin-left: 16.6667%;
                                button{
                                    color: rgb(255, 255, 255);
                                    background-color: rgb(34, 215, 187);
                                    border-color: rgb(34, 215, 187);
                                    display: inline-block;
                                    white-space: nowrap;
                                    vertical-align: middle;
                                    user-select: none;
                                    font-size: 0.875rem;
                                    line-height: 1.5;
                                    min-width: 106px;
                                    border-width: 1px;
                                    border-style: solid;
                                    border-color: transparent;
                                    border-image: initial;
                                    padding: 0.469rem 26px;
                                    border-radius: 1.25rem;
                                }
                                a{
                                        margin-left: 10px;
                                        color: rgb(170, 170, 170);
                                        padding: 0.469rem 10px;
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
                        }
                    }
                }
            }
          }
        }  
     }
</style>
