<template>
    <div>
        <div class="module-footer">
            <div class="contain">
                <div class="contain_body">
                    <table>
                        <thead class="fc-head">
                            <tr>
                                <td>
                                    <div class="body_cont">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th v-for="item of dates" style="text-align:center">{{item}}</th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                </td>
                            </tr>
                        </thead>
                        <tbody class="fc-body">
                            <tr>
                                <td>
                                    <div class="fc_body_t">
                                        <div class="fc_body_t_c">
                                            <div class="fc-bg">
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td><span>全天</span></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="fc-content"></div>
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="fc_body_b">
                                        <div class="fc_body_b_c">
                                            <div class="fc-bg">
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="fc-slats">
                                                <table>
                                                    <tbody>
                                                        <tr v-for="item of days">
                                                            <td>
                                                                <span>{{item}}</span>
                                                            </td>
                                                            <td></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <hr>
                                            <div class="fc-content"></div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            dates:["","周日 10/14","周一 10/15","周二 10/16","周三 10/17","周四 10/18","周舞 10/19","周一 10/20"],
            days:["12am时","","1am时","","2am时","","3am时","","4am时","","5am时","","6am时","","7am时","","8am时","","9am时","","10am时","","11am时","",
            "12am时","","1am时","","2am时","","3am时","","4am时","","5am时","","6am时","","7am时","","8am时","","9am时","","10am时","","115am时",""]
        }
    }
}
</script>
    
<style lang="scss" scoped>
hr{
    height: 1px;
    background: #eee;
}
    .module-footer{
        overflow-y: auto;
        overflow-x: auto;
        padding: 15px 15px 0;
        height: 100%;
        -webkit-flex: 1 1 0;
        -webkit-box-flex: 1;
        position: relative;
        width: 100%;
        .contain{
            -webkit-flex: 1;
            margin-bottom: 15px;
            background: #fdfdfd;
            -webkit-box-flex: 1;
            font-size: 1em;
            text-align: left;
            .contain_body{
                z-index: 0;
                position: relative;
                table{
                    width: 100%;
                    font-size: 1em;
                    position: relative;
                    border-collapse: collapse;
                    border-spacing: 0;
                    table-layout: fixed;
                    .fc-head{
                        border-color: #f3f3f3;
                        td{
                            border: 0!important;
                            color: #888;
                            div{
                                border: 0!important;
                                color: #888;
                                table{
                                    border-left: 0 hidden transparent;
                                    border-right: 0 hidden transparent;
                                    border-bottom: 0 hidden transparent;
                                    border-top: 0 hidden transparent;
                                    width: 100%;
                                    font-size: 1em;
                                    border-collapse: collapse;
                                    border-spacing: 0;
                                    thead{
                                        border-color: #f3f3f3;
                                        th:nth-child(1){
                                            width: 51px!important;
                                            font-size: 12px;
                                            text-align: right;
                                            vertical-align: middle;
                                            padding: 0 4px;
                                            white-space: nowrap;
                                        }
                                        th{
                                            padding: 10px;
                                            color: #333;
                                            font-weight: 400; 
                                            span{
                                                color: #333;
                                            font-weight: 400;
                                            }
                                        }
                                         
                                    }
                                }
                            }
                        }
                    }
                    .fc-body{
                        hr{
                                background: #eee;
                        }
                        td{
                            border-left: 0;
                            border-right: 0;
                            border-style: solid;
                            border-width: 1px;
                            padding: 0;
                            vertical-align: top;
                            border-color: #f3f3f3;
                            .fc_body_t{
                                position: relative;
                                z-index: 2;
                                border-style: solid;
                                height: 40px;
                                border: 0;   
                                .fc_body_t_c{
                                    border-right-width: 1px;
                                    margin-right: 5px;
                                    max-height: 3em;
                                    border-style: solid;
                                    border-width: 0;
                                    .fc-bg{
                                        position: absolute;
                                        top: 0;
                                        left: 0;
                                        right: 0;
                                        bottom: 0;
                                        table{
                                            border-left: 0 hidden transparent;
                                            border-right: 0 hidden transparent;
                                            border-bottom: 0 hidden transparent;
                                            width: 100%;
                                            font-size: 1em;
                                            height: 100%;
                                            border-top: 0 hidden transparent;
                                            tbody{
                                                border-color: #f3f3f3;
                                                tr{
                                                    padding-right: 15px;
                                                    td:nth-child(1){
                                                        width: 51px!important;
                                                        font-size: 12px;
                                                        text-align: right;
                                                        vertical-align: middle;
                                                        padding: 0 4px;
                                                        white-space: nowrap;
                                                        border-left: 0;
                                                        border-right: 0;
                                                        span{
                                                            font-size: 12px;
                                                            text-align: right;
                                                        }
                                                    }
                                                    td:nth-child(2){
                                                        border: 1px solid #f3f3f3;
                                                        background: url("https://wttt.worktile.com/image/app/calendar/calendar-rest-bg.png");
                                                    }
                                                    td{
                                                        border: 1px solid #f3f3f3;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    .fc-content{
                                        border-left: 0;
                                        border-right: 0;
                                        border-style: solid;
                                        border-width: 1px;
                                        padding: 0;
                                        vertical-align: top;
                                        border-color: #f3f3f3;
                                        table{
                                            border-left: 0 hidden transparent;
                                            border-right: 0 hidden transparent;
                                            border-bottom: 0 hidden transparent;
                                            border-top: 0 hidden transparent;
                                            width: 100%;
                                            font-size: 1em;
                                            tbody{
                                                    border-color: #f3f3f3;
                                                tr{
                                                    td{
                                                        background: 0 0;
                                                        border-color: transparent;
                                                        border-bottom: 0;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            .fc_body_b{
                                    position: relative;
                                    z-index: 1;
                                    overflow: hidden scroll;
                                    height: 810px;
                                    .fc_body_b_c{
                                        min-height: 100%;
                                        position: relative;
                                        width: 100%;
                                        .fc-bg{
                                            position: absolute;
                                            top: 0;
                                            left: 0;
                                            right: 0;
                                            z-index: 1;
                                            table{
                                                border: 0 hidden transparent;
                                                width: 100%;
                                                font-size: 1em;
                                                height: 100%;
                                                tbody{
                                                    border-color: #f3f3f3;
                                                    td:nth-child(1){
                                                        width: 51px!important;
                                                        font-size: 12px;
                                                        text-align: right;
                                                        border-left: 0;
                                                        border-right: 0;
                                                        height: 1010px;
                                                    }
                                                    td:nth-child(2), td:nth-child(8){
                                                            background: url("https://wttt.worktile.com/image/app/calendar/calendar-rest-bg.png");
                                                            border: 1px solid #f3f3f3;
                                                    }
                                                }
                                            }
                                        }
                                        .fc-slats{
                                            position: relative;
                                             z-index: 2;
                                             table{
                                                width: 100%;
                                                font-size: 1em;
                                                border: 0 hidden;
                                                tbody{
                                                    border-color: #f3f3f3;
                                                    tr{
                                                        td:nth-child(1){
                                                            border-left: 0;
                                                            border-right: 0;
                                                            height: 1.5em;
                                                            border-bottom: 0;
                                                            width: 51px!important;
                                                            font-size: 12px;
                                                            text-align: right;
                                                            vertical-align: middle;
                                                            padding: 0 4px;
                                                            white-space: nowrap;
                                                            span{
                                                               font-size: 12px;
                                                                text-align: right; 
                                                            }   
                                                        }
                                                        td:nth-child(2){
                                                            border-left: 0;
                                                            border-right: 0;
                                                            height: 1.5em;
                                                            border-bottom: 0;
                                                            border-style: solid;
                                                            border-width: 1px;
                                                            padding: 0;
                                                            vertical-align: top; 
                                                            border: 1px solid #ddd;
                                                        } 
                                                        td{
                                                          border: 1px solid #ddd;  
                                                        }
                                                    }
                                                }
                                             }
                                        }
                                    }
                            }
                        }
                    }
                }    
            }
        }
    }
</style>
