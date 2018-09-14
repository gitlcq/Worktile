<template>
    <div>
          <div class="module-footer">
            <div class="calender">
                <table>
                    <thead>
                        <tr>
                            <th v-for="item of dates">
                                <span>{{item}}</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item,index) of 6">
                            <td v-for="i of 7">
                                {{calender[index*7 + (i-1)].day}}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="schedule">
                <div class="box" v-for='item of schedule'>
                    <table>
                        <tr v-for='child of item'>
                            <td v-for='txt of child' 
                            :style="{width:1000/7 * txt.colspan +'px'}" 
                            :colspan="txt.colspan"  
                            :class="{cur : txt.title}">{{txt.title}}</td>
                        </tr>
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
            var nyear = this.month == 12 ? this.year +1 :this.year;
            function buling(n){
                return Number(n.toString().length) > 1 ? Number(n.toString()) : '0' + Number(n.toString());
            }
            while(nowMonthFirstWeek--){
                arr.unshift({
                    day:lastMonthLength,
                    cur:true,
                    fullDay:`${pyear}${buling(pmonth)}${buling(lastMonthLength)}`
                });
                lastMonthLength--
            }
            var _a = 1;
            while(nowMonthLength--){
                arr.push({
                    day:_a,
                    cur:false,
                    fullDay:`${this.year}${buling(this.month)}${buling(_a)}`
                });
                _a++
            }
            var nextLength = arr.length > 35 ? 42 - arr.length : 42 -arr.length;
            _a = 1;
            while(nextLength--){
                arr.push({
                    day:_a,
                    cur:true,
                    fullDay:`${nyear}${buling(nmonth)}${buling(_a)}`
                });
                _a++
            }
            console.log(arr,"arrrr")
            return arr
        },
        schedule(){
                    var arr = [];
                    for(var i = 0 ; i <6; i++){
                        arr.push([]);
                        for(var j = 0; j < 3;j++){
                            arr[i].push([]);
                            for(var k = 0; k < 7;k++){
                                arr[i][j].push({
                                    colspan:1,
                                    fullDay:this.calender[i*7+k].fullDay,
                                    week:k,
                                })
                            }
                        }
                    }
                    this.$store.state.mains.forEach(item => {
                        var start = new Date(Number(item.StartDate.toString().substr(0,4)),Number(item.StartDate.toString().substr(4,2)-1),Number(item.StartDate.toString().substr(6,2)));
                        var end = new Date(Number(item.endDate.toString().substr(0,4)),Number(item.endDate.toString().substr(4,2)-1),Number(item.endDate.toString().substr(6,2)));
                        var during = (end - start)/86400000 + 1;
                        var flag = true;
                        arr.forEach((week,weekidx)=>{
                            for(var i=0; i < 3;i++){
                                for(var j = 0; j < 7;j++){
                                    if(week[i][j]){
                                        if(week[i][j].fullDay == item.StartDate && flag && !week[i][j].title) {
                                            // 计算第一周
                                            var nowWeekDuring = during + week[i][j].week <= 7 ? during : 7 - week[i][j].week;
                                            console.log(nowWeekDuring);
                                            week[i][j].title = item.title;
                                            week[i][j].colspan = nowWeekDuring;
                                            week[i].splice(j+1,nowWeekDuring -1 );
                                            flag =false;
                                            // 减去第一周剩余的时间
                                            var shengyu = during - nowWeekDuring;
                                            var count = 0;
                                        while(shengyu > 0){
                                            var shao = shengyu >= 7 ? 7 : shengyu;
                                            count++;  
                                                for(var n = 0; n < 3;n++){
                                                  if(arr[weekidx +count][n][0].title){
                                                    continue;
                                                }
                                               arr[weekidx + count][n][0].title = item.title;
                                               arr[weekidx + count][n][0].colspan = shao;
                                               arr[weekidx + count][n].splice(1,shao-1);
                                               break;
                                           }
                                           shengyu-=7
                                        }
                                    }
                                    }
                                }
                            }
                        })
                    });
                    return arr
                }
    }
}
</script>
<style lang="scss" scoped>
    .module-footer{
        overflow-y: auto;
        overflow-x: auto;
        padding: 15px 15px 0;
        height: 100%;
        // -webkit-flex: 1 1 0;
        -webkit-box-flex: 1;
        position: relative;
        width: 100%;
    }
    .calender tr td:nth-child(1){
        background: url(https://wttt.worktile.com/image/app/calendar/calendar-rest-bg.png);
    }
    .calender tr td:nth-child(7){
        background: url(https://wttt.worktile.com/image/app/calendar/calendar-rest-bg.png);
    }
    .calender table{
            width: 100%;
            height: 100%;
            background: white;
        }
       .calender th,.calender tr, .calender td{
            border:1px solid #ddd;
            border-collapse: collapse;
            border-left: 0;
            border-bottom: 0
        }
        .calender th{
            height: 45px;
            border:0;
        }
        .calender td{
            height: 140px;
            vertical-align: top;
            text-align: left;
            padding: 5px 0 0 5px;
            font-size: 13px;
        }
        .calender td.cur{
            color:red;
        }
     /* 事物 */
        .schedule{
           position: absolute;
            top: 65px;
            width: 1580px;
            overflow: hidden;
            padding: 15px 15px 0;
            left: 0;
        }
        .schedule .box{
            // height: 100px;
            width: 100%;
            height: 140px;
        }
        .schedule .box table{
            position: relative;
            top: 33px;
            width: 100%;
        }
        .schedule .box table tr {
            height: 21px;
            line-height: 21px;
        }
        .schedule .box table td.cur{
            background-color: rebeccapurple;
            opacity: 0.2;
            color: white;
        }
</style>
