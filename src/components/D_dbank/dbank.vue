<template>
    <div>
        <div class="import">
            <div class="left-side">
               <div class="header">
                   <span>网盘</span>
               </div> 
               <div class="inp">
                  <i>🐱</i>
                  <input type="text" placeholder="搜索文件、文件夹">
               </div>
               <div class="left-part">
                   <div class="btns">
                     <div v-for="item of vList" :class="['btn' , {vcur : $route.name.indexOf(item.title) != -1}]">
                     <router-link :to='item.url'>{{item.title}}</router-link>
                     </div>
                   </div>
               </div>
            </div>
            <div class="right-con">
              <div class="rv">
                 <router-view></router-view>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
        name: "dbank",
        data(){
        return {
            vList:[
                {
                    title:'企业网盘',
                    url:'/D_dbank/qiye/',
                },
                {
                    title:'个人网盘',
                    url:'/D_dbank/geren/'
                },
                {
                    title:'成员',
                    url:'/D_dbank/chengyuan/'
                },
                {
                    title:'标签',
                    url:'/D_dbank/baioqian/'
                },
                {
                    title:'与我共享',
                    url:'/D_dbank/gongxiang/'
                },
                {
                    title:'回收站',
                    url:'/D_dbank/huishou/'
                }
            ]
        }
    }
}
</script>

<style scoped>
div{
    width:100%;
    height:100%;
}
.import{
    height:100%;
    width:100%;
    /* background: red; */
    position: relative;
    background: rgba(253,253,253,.95);
    border-right: 1px solid #ddd;
    transition: width .2s ease-in-out;
}
.left-side{
    width:240px;
    height: 100%;
    /* background: yellow; */
}
.right-con{
    width: 100%;
    height:100%;
    /* background: green; */
    position:absolute;
    top:0;
    left:240px;
}
.header{
    height: 50px;
    width:240px;
    /* border:1px solid red; */
}
.header span{
   margin: 0 20px;
    color: #333;
    line-height: 50px;
    font-size: 16px;
}
.inp{
    width: 240px;
    height: 36px;
    /* border:1px solid black; */
    position: relative;
    padding: 0 20px 20px;
}
.inp i{
    position: absolute;
    top: 6px;
    left: 30px;
   font-style: normal;
}
.inp input{
    background: #f3f3f3;
    box-shadow: none;
    color: #666;
    height: 36px;
    font-size: 14px;
    padding-left: 28px;
    border-radius: 20px;
    border: 1px solid transparent;
    outline:none;
}
.left-part{
    width:240px;
    height: 240px;
    /* background: red; */
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