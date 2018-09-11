<template>
    <div>
       <div class="xm-left">
           <p> <span>项目</span> <i>😘</i></p>
            <div class="list">
                <div class="inp">
                        <i class="wtf wtf-project-add-o">🐷</i>
                      <input type="text" placeholder="搜索任务">
                </div>

                <div class="btns">
                    <div v-for="item of vList" :class="['btn' , {vcur : $route.name.indexOf(item.title) != -1}]">
                        <router-link :to='item.url'>{{item.ico}}{{item.title}}</router-link>
                    </div>
                </div>
                
                <div class="rv">
                    <router-view></router-view>
                </div>
              </div>
            </div>
       </div>
    </div>
</template>

<script>
    export default {
        name: "items",
        data(){
            return {
                vList:[
                    {
                        ico:"😝",
                        title:'工作',
                        url:'/B_items/gongzuo/'
                    },
                    {
                         ico:"😝",
                        title:'项目',
                        url:'/B_items/xiangmu'
                    },
                    {
                        ico:"🍎",
                        title:'配置中心',
                        url:'/B_items/peizhi'
                    },
                    {
                         ico:"😡",
                        title:"回收站",
                        url:'/B_items/huishou'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
div{
    width: 100%;
    height: 100%;
}
    .xm-left{
        width: 250px;
        height:100%;
        position: relative;
    }
    .xm-left p{
        width: 250px;
        height: 50px;
    }
    .xm-left p span{
        font-size:16px;
        display:inline-block;
        margin-left:15px;
        margin-top:15px;
    }
    .xm-left p i{
        font-style:normal;
        position: absolute;
        display:inline-block;
        top:15px;
        right:15px;
    }
    .xm-left .list{
        width: 250px;
        height: 400px;
    }
    .xm-left .inp{
        width: 200px;
        height: 35px;
        position: absolute; 
        left: 20px;
        top: 60px;
        /* border:1px solid #ccc; */
        border-radius:17px;
        background-color:rgb(243,243,243);
    }
    .xm-left .inp i{
        font-style:normal;
        display:inline-block;
        margin-top:5px;
        margin-left:10px;
    }
    .xm-left .list input{
        position: absolute;
        top: 1px;
        left:32px;
        width:150px;
        height: 30px;
        border-radius:18px;
        outline:none;
        border:0px;
        background-color:rgb(243,243,243);
    }
    .btns{
        float: left;
        margin-top:50px;
        } 
    .btns .btn{
        width: 250px;
        box-sizing: border-box;
        height: 50px;
        line-height: 50px;
    }
    .btns .btn a{
        margin-left:30px;
    }
     .btns .btn.vcur{
            background-color:rgb(231,249,246);
            border-right:4px solid #22d7bb;
        }
    .rv{
      width:1000px;
      height: 100%;
      position: absolute;
      left:250px;
      top: 0;
      border:1px solid #ccc;
  }
</style>