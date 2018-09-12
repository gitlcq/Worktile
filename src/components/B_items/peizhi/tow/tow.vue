<template>
    <div>
               <div class="san">
                <div v-for="value of liu" :class="['sana' , {ocur : $route.name.indexOf(value.title) != -1}]">
                    <router-link :to="value.url">{{value.title}}</router-link>
                </div>
            </div>
          <div class="er">
                <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            liu:[
                {
                    title:'任务类型',
                    url:'/B_items/peizhi/tow/rwlx',
                },
                 {
                    title:'状态管理',
                    url:'/B_items/peizhi/tow/ztgl',
                },
                 {
                    title:'属性管理',
                    url:'/B_items/peizhi/tow/sxgl',
                },
                 {
                    title:'数据管理',
                    url:'/B_items/peizhi/tow/sjgl',
                },
                 {
                    title:'标签管理',
                    url:'/B_items/peizhi/tow/bqgl',
                },
                 {
                    title:'优先级管理',
                    url:'/B_items/peizhi/tow/yxjgl',
                },
            ]
        }
    }
}
</script>

<style>
    .san{
        width: 100%;
        height: 40px;
    }
    .san .sana{
        float: left;
        list-style:none;
        width: 80px;
        height: 20px;
        margin-left:40px;
        margin-top:10px;
    }
    .san .router-link-active{
    color:#22d7bb;
    }
    .er{
       width:100%;
       height: 100%;
       position: absolute;
       border:15px solid rgb(238, 238, 238);
    }
</style>
