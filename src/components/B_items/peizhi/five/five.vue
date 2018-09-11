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
                    title:'工作组件',
                    url:'/B_items/peizhi/five/gzzj',
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
       width:93%;
       height: 100%;
       position: absolute;
       border:10px solid #ccc;
    }
</style>
