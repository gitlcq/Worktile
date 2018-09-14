<template>
    <div>
         <div class="top">
            <i><font-awesome-icon icon="cog" class="icos"/></i>
            <span>我的任务</span>

            <!-- <div class="but">
                <div v-for="item of pz" :class="['buta' , {ocur : $route.name.indexOf(item.title) != -1}]">
                    <router-link :to='item.url'>{{item.title}}</router-link>
                </div>
            </div> -->
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
                    title:'我负责的',
                    url:'/B_items/gongzuo/fuze'
                },
                 {
                    title:'我分配的',
                    url:'/B_items/gongzuo/fengpei'
                },
                 {
                    title:'我参与的',
                    url:'/B_items/gongzuo/canyv'
                },
                 {
                    title:'我创建的',
                    url:'/B_items/gongzuo/chuangjian'
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
        background-color: #fff;
    }
    .top i{
        font-style:normal;
        display:inline-block;
        margin-top:15px;
        margin-left:30px;
    }
    .top span {
        display:inline-block;
        font-size:16px;
    }
    ul{
        position: absolute;
        top: 0;
        left: 350px;
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
