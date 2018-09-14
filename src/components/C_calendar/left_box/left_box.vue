<template>
    <div class="rili">
        <!-- 日历系列 -->
    <table>
        <thead>
            <tr>
                <th>
                    <button @click="lef_btn()">
                        <i class="iconfont icon-icon_arrow_left"></i>
                    </button>
                </th>
                <th colspan="5">
                    <button>
                        <strong>{{bulings()}}</strong>
                    </button>
                </th>
                <th>
                    <button @click="rig_btn()">
                        <i class="iconfont icon-jiantouyou"></i>
                    </button>
                </th>
            </tr>
            <tr>
                <th v-for="item of dates">
                    <small>{{item}}</small>
                </th>
            </tr>
        </thead>
        <tbody>
            <!-- index从0开始 -->
            <tr v-for="(item,index) of 6">
            <!-- i从1开始 -->
                <td v-for="i of 7">
                   <button>
                       <span>
                            {{calender[index*7 + (i-1)].fullDay}}
                       </span>
                   </button>
                </td>
            </tr>
        </tbody>
    </table>
    </div>
</template>

<script>
export default {
    data(){
        return{
            dates:["日","一","二","三","四","五","六"],
            year:2018,
            month:9,
        }
    },
    methods:{
        lef_btn(){
            this.month--;
            if(this.month < 1){
                this.year--;
                this.month = 12;
            }
        },
          rig_btn(){
            this.month++;
            if(this.month > 12){
                this.year++;
                this.month = 1;
            }
        },
        bulings(){
            function buling(n){
                return n.toString().length > 1 ? n.toString() : '0' + n.toString();
            }
            var lc =  this.year+"年"+`${buling(this.month)}`+"月"
            console.log(lc)
             return lc;
        }
    },
    computed:{     
        calender(){
            var arr = [];
            var nowMonthLength = new Date(this.year,this.month,0).getDate();
            var nowMonthFirstWeek = new Date(this.year,this.month-1).getDay();
            var lastMonthLength = new Date(this.year,this.month-1,0).getDate();
            var pmonth = this.month == 1 ? 12 : this.month -1;
            var pyear = this.month == 1 ? this.year - 1 :this.year;
            var nmonth = this.month == 12 ? 1 :this.month +1;
            function buling(n){
                return n.toString().length > 1 ? n.toString() : '0' + n.toString();
            }
            while(nowMonthFirstWeek--){
                arr.unshift({
                    day:lastMonthLength,
                    cur:true,
                    fullDay:`${buling(lastMonthLength)}`
                });
                lastMonthLength--
            }
            var _a = 1;
            while(nowMonthLength--){
                arr.push({
                    day:_a,
                    cur:false,
                    fullDay:`${buling(_a)}`
                });
                _a++
            }
            var nextLength = arr.length > 35 ? 42 - arr.length : 42 -arr.length;
            _a = 1;
            while(nextLength--){
                arr.push({
                    day:_a,
                    cur:true,
                    fullDay:`${buling(_a)}`
                });
                _a++
            }
            console.log(arr)
            return arr
        }
    }
}
</script>

 <style lang="scss" scoped>
    .rili{
        padding: 10px;
        table{
                margin-left: auto;
                margin-right: auto;
                border-color: grey;
            thead{
                tr:nth-child(1){
                    box-sizing: border-box;
                    th:nth-child(1){
                        padding: 3px;
                        button{
                            border: none;
                            padding: 3px 5px;
                            background: 0 0;
                            min-width: 20px;
                            cursor: pointer;
                            float: left!important;
                        }
                    }
                    th:nth-child(2){
                        padding: 3px;
                        button{
                                border: 0;
                                padding: 3px 10px;
                                background: 0 0;
                                width: 100%;
                                strong{
                                    font-weight: 700;
                                        font-size: .875rem;
                                        line-height: 1.5;
                                }
                        }
                    }
                    th:nth-child(3){
                        padding: 3px;
                        button{
                            border: none;
                            padding: 3px 5px;
                            background: 0 0;
                            min-width: 20px;
                            cursor: pointer;
                            // float: left!important;
                        // }
                    }
                }
                tr:nth-child(2){
                    th{
                        padding: 3px;
                        text-align: center
                        small{
                            font-size: 80%;
                            font-weight: 400;
                        }
                    }
                }
            }
        }
            tbody{
            margin-left: auto;
            margin-right: auto;
                tr{
                    td{
                        padding: 3px;
                        text-align: center!important;
                        button{
                            padding: 2px 5px;
                            line-height: 21px;
                            background: 0 0;
                            color: #666;
                            border: none;
                            font-size: 12px;
                            width: 24px;
                            height: 24px;
                            cursor: pointer;
                            span{
                                display: inline-block;
                                line-height: 14px;
                                min-width: 14px;
                                color: #888!important;
                            }
                        }
                    }
                }
                tr:nth-child(3){
                    td:nth-child(6){
                         text-align: center!important;
                         button{
                             border-radius: 50%;
                               cursor: pointer;
                               background: #22d7bb;
                               span{
                                   display: inline-block;
                                    line-height: 14px;
                                    min-width: 14px;
                                    color: white;
                               }
                         }
                    }
                }
            }
    }
}
</style>
