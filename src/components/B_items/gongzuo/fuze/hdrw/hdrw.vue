<template>
    <div class="big">
        <div class="content">
            <div v-for="item of arr" class="lat">
                <span>{{item.title}}</span>
                <div class="line"></div>
                <p>{{item.tianjia}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            arr:[
                {
                    title:"收件箱0/0/0",

                    tianjia :'+添加新任务'
                },
                {
                    title:"今天要做0/0/0",
                    tianjia :'+添加新任务'
                },
                {
                    title:"下一步要做0/0/0",
                    tianjia :'+添加新任务'
                },
                {
                    title:"以后再做0/0/0",
                    tianjia :'+添加新任务'
                }
            ]
        }
    }
}
</script>

<style>
.big{
    width: 100%;
    height: 100%;

}
.content{
    width: 100%;
    height: 100%;
    background-color:rgb(238,238,238);
}
    .lat{
        width: 240px;
        height: 110px;
        float: left;
        margin-left:20px;
        background-color: #fff;
    }
    .lat p{
        margin-top:20px;
        margin-left:20px;
        font-size:13px;
        color:rgb(173, 173, 173)
    }
    .lat span{
        display:inline-block;
        margin-left:20px;
        margin-top:15px;
    }
    .line{
        width: 200px;
        height: 5px;
        margin-left:20px;
        margin-top:20px; 
        background-color:rgb(238,238,238);
    }
</style>
