<template>
    <div>
             <div class="san">
                <div v-for="value of san" :class="['sana' , {ocur : $route.name.indexOf(value.title) != -1}]">
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
            san:[
                {
                    title:'提醒管理',
                    url:'/B_items/peizhi/four/txgl',
                },
                {
                    title:'通知管理',
                    url:'/B_items/peizhi/four/tzgl',
                },
                {
                    title:'事件管理',
                    url:'/B_items/peizhi/four/sjgl',
                },
            ]
        }
    }
}
</script>

<style lang='scss' scoped>
    .san{
        width: 100%;
        height: 40px;
    }
    .san .sana{
        float: left;
        list-style:none;
        width: 80px;
        height: 20px;
        border-right:1px solid #ccc;
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
