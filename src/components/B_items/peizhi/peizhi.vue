<template>
    <div>
         <div class="top">
            <i><font-awesome-icon icon="cog" class="icos"/></i>
            <span>配置中心</span>
            <ul>
                <li v-for="value of pz" :class="['buta' , {ocur : $route.name.indexOf(value.title) != -1}]">
                    <router-link :to="value.url">{{value.title}}</router-link>
                </li>
            </ul>
        </div>
        <div class="ew">
                <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            pz:[
                {
                    title:'项日',
                    url:'/B_items/peizhi/one'
                },
                 {
                    title:'任务',
                    url:'/B_items/peizhi/tow'
                },
                 {
                    title:'安全',
                    url:'/B_items/peizhi/three'
                },
                 {
                    title:'高级',
                    url:'/B_items/peizhi/four'
                },
                 {
                    title:'全局',
                    url:'/B_items/peizhi/five'
                },
            ]
        }
    }
}
</script>

<style lang='scss' scoped>
.ocur{
        border-bottom:2px solid #22d7bb;
    }
    .top{
        width: 100%;
        height:50px;
        border-bottom:1px solid #ccc;
    }
    .top i{
        font-style:normal;
        display:inline-block;
        margin-top:15px;
        margin-left:15px;
    }
    .top span {
        display:inline-block;
        font-size:16px;
    }
    ul{
        position: absolute;
        top: 0;
        left: 270px;
    }
    ul li{
        list-style:none;
        float: left;
        width: 80px;
        line-height:50px;
        margin-left:20px;
        font-size:14px;
        text-align: center;
    }
    .router-link-active{
    color:#22d7bb;
    }
    .icos{
    font-size:14px;
    margin-left:-10px;
    color:#848484;
}
</style>
