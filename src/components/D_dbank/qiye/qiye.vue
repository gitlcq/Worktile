<template>
    <div>
        <div class="header">
          <a href="#"><i class="icon">🐻</i>企业网盘</a>
          <div class="head-right">
             <div class="btu">+新建</div>
             <div class="btnn">上传文件</div>
          </div>
        </div>
        <div class="part">
           <div class="part-bg">
               <div class="heer">
                   <a href="#" class="name">文件夹</a>
                   <a href="#" class="size">大小<i>🐻</i></a>
                   <a href="#" class="person">更新人</a>
                   <a href="#" class="time">跟新时间</a>
               </div>
              <ul>
                <li v-for="(item,i) of qiye" class="heer">
                    <span class="name"><i>🐻</i>{{item.name}}</span>
                    <span  class="size">{{item.size}}</span>
                    <span  class="person">{{item.person}}</span>
                    <span  class="time">{{item.time}}</span>
                    <!-- <span @click="delete1(i)">···</span> -->
                </li>
             </ul>  
           </div>
        </div>
        <div class="btns">
            <div v-for="item of zdList" :class="['btn' , {vcur : $route.name.indexOf(item.title) != -1}]">
                <router-link :to='item.url'>{{item.title}}</router-link>
            </div>
        </div>
        <div class="rv">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      qiye:[
            {
                name:"公司制度",
                size:"-",
                person:"m",
                time:"11月10日10:21"
            },
            {
                name:"资料共享",
                size:"-",
                person:"m",
                time:"10月10日10:21"
            },
            {
               name:"缺陷管理",
                size:"-",
                person:"m",
                time:"11月10日10:22"
            },
            {
                name:"0911",
                size:"-",
                person:"m",
                time:"11月10日11:04"
            }
        ],
        zdList:[
                {
                    title:'公司制度',
                    url:'/D_dbank/qiye/gs'
                },
                {
                    title:'资料共享',
                    url:'/D_dbank/qiye/zl'
                },
                {
                    title:'缺陷管理',
                    url:'/D_dbank/qiye/qx'
                }
            ]
      }
    }
    // methods:{
    //     delete1(index){
    //         alert('删除'+index);
    //     },
    // }

}
</script>

<style lang='scss' scoped>
    .header{
        height: 50px;
        width:100%;
        // border:1px solid red;
        background: rgba(253,253,253,.95);
       
    }
    .header a{
        color: #aaa!important;
        text-decoration: none;
        line-height: 50px;
        float: left;
        font-size: 16px;
        padding-left: 25px;
    }
     .header a:hover{
         color: #333!important;
     }
    .part{
        height: 100%;
        width:100%;
        background: rgb(212, 207, 207);
        position: relative;
    }
    .icon{
       font-style:normal;
    }
    .head-right{
        width: 280px;
        height: 50px;
        // border:1px solid red;
        float:left;
        margin-left: 810px;
    }
    .xinjian{
        width: 80px;
        height: 30px;
        // border:1px solid red;
        float: left;
        color: #22d7bb;
    background-color: #fff;
    border-color: #22d7bb;
    }
    .shangc{
        width: 135px;
        height: 30px;
        border:1px solid red;
        float: right;
    }
    .part-bg{
        background: #fff;
        width: 1170px;
        height: 680px;
        position: absolute;
        top:20px;
        left:20px;
    }
    .heer{
        width: 1140px;
        margin:auto;
        line-height: 60px;
        height: 55px;
        border-bottom: 1px solid #eee;
    }
    .name{
        width: 500px;
        display: inline-block;
        padding-left: 30px;
        color: #666;
    }
    .name i{
        font-style: normal;
    }
    .size{
        width: 150px;
        display: inline-block;
        color: #666;
    }
    .size i {
        font-style: normal;
    }
    .person{
        width: 140px;
        display:inline-block;
        color: #666;
    }
    .time{
        width: 100px;
        color: #666;
        display: inline-block;
    }
    .btu{
        width: 100px;
        height: 30px;
        color: #22d7bb;
        background-color: #fff;
        border:1px solid  #22d7bb;
        text-align: center;
        line-height:30px;
        cursor: pointer;
        border-radius: 4px;
        margin-top:10px;
        float: left;
    }
    .btnn{
        width: 140px;
        height: 30px;
        background: #22d7bb;
        color: #fff;
        border:1px solid  #22d7bb;
        text-align: center;
        line-height:30px;
        cursor: pointer;
        border-radius: 20px;
        margin-top:10px;
        margin-left: 30px;
        float: left;
  
    }
    ul li{
        list-style-type: none;
    }
    h1{
     color: #fff700;
        }
    .btns{
        float: left;
    }
    .vcur{
        background: #e7f9f6;
        border-right: 4px solid #22d7bb;
        
    }
    .btn{
        width: 240px;
        box-sizing: border-box;
        height: 45px;
        /* background-color: green; */
        color: #0ff;
        /* text-align: center; */
        padding-left: 30px;
    }
    a{
    display: block;
    text-decoration: none;
    color: #333;
    font-size: 14px;
    line-height: 40px;
    font-family: 'Helvetica Neue','Hiragino Sans GB',stheiti,'Microsoft Yahei','微软雅黑',tahoma,sans-serif;
  }
  .router-link-active{
    color: #333;
  }
  .rv{
      width: 100%;
      height: 100%;
      float: left;
      /* background: red; */
  }
</style>
