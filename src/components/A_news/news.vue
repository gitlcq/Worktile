<template>
    <div>
        <div class="left">
            <div class="left_header">
                 <span class="title">消息</span><i class="iconfont icon-xiaoxi1 news"></i>
                 <div class="more" @click="clicks" >
                     <i class="iconfont icon-xiaoxi"></i>
                 </div>  
            </div>
            <div class="left_list">
                <div class="left_search">
                    <i class="iconfont icon-fangdajing fangdajing"></i>
                    <input type="text" placeholder="搜索成员、消息" v-model="c">
                </div>
                <ul class="ul">
                    <li v-for="item of cha" :class="{cur : $route.name.indexOf(item.title) != -1}" @click="routerGo(item.url)">
                        <span class="img">
                            <img :src="item.img" alt=""> 
                        </span>
                        <span class="showname">{{item.title}}</span>
                        <span class="false" @click="del(item.id)">X</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="right">
            <router-view class="nav"></router-view>
        </div>  

        <div v-show="isShow">
            <div class="zhe"></div>
            <div class="tan_box">
                <div class="tan">
                    <div class="tan_up">
                        <h3>创建群组</h3>
                        <span @click="click">X</span>
                    </div>
                    <div class="tan_down">
                        <div class="tan_d_up">
                            <div class="input">
                                <input type="text" placeholder="群组名称" class="form" v-model="txt1">
                            </div>
                        </div>
                        <div class="tan_d_down">
                            <div class="color">
                                <ul>
                                    <li v-for="item of item" >
                                        <span :class="item.color"></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="qun">
                        <label class="label">群组主题</label>
                        <textarea name="" id="" cols="30" rows="10" class="text"></textarea>
                    </div>
                    <div class="ke">
                        <label class="labels">可见范围</label>
                        <select name="" id="" class="text">
                            <option value="">公开：企业所有成员都能看到此群组</option>
                            <option value="">私有：只有加入的成员才能看到此群组</option>
                        </select>
                    </div>
                    <div class="cheng">
                        <label for="">群组成员</label>
                        <ul>
                            <li>
                                <span class="c_s">M</span>
                            </li>
                            <li></li>
                        </ul>
                    </div>
                    <div class="sure">
                        <button class="btn" @click="add()">确定</button>
                        <a href="javascript:;" @click="click">取消</a>
                    </div>
                </div>
            </div>
            
        </div>
       
    </div>
</template>

<script>
    export default {
        name: "news",
        data () {
        return {
        txt1:"",
        img:"",
        c:'',
        isShow:false,
        menu:[
            {
                title:'创建群组',
                url:'/A_news/tan/chuangjian'
            },
            {
                title:'加入群组',
                url:'/A_news/tan/jiaru'
            },
            {
                title:'发起群聊',
                url:'/A_news/tan/faqi'
            },
            {
                title:'添加成员',
                url:'/A_news/tan/tianjia'
            }
        ],
        item:[
             {
                 color:"one"
             },
             {
                 color:"two"
             },
             {
                 color:"three"
             },
             {
                 color:"red"
             },
             {
                 color:"orange"
             },
             {
                 color:"yellow"
             },
             {
                 color:"green"
             },
             {
                 color:"teal"
             },
              // {
                //     color:"c"
                // },
                // {
                //     color:"d"
                // },   
                // {
                //     color:"e"
                // }, 
             {
                 color:"cyan"
             },
             {
                 color:"secondary"
             },
             {
                 color:"success"
             },
             {
                 color:"danger"
             },
             {
                 color:"a"
             },
             {
                 color:"b"
             },
             {
                 color:"c"
             },
             {
                 color:"d"
             },   
             {
                 color:"e"
             }, 
             
        ],
        tan:[
             {
                url:"/A_news/tan"
             }
        ],
        show1:false
        }
        },
        created() {
			// 发送默认 GETALL
			this.$store.dispatch("LYJGETALL")
        },
        computed: {
			todos() {
               return this.$store.state.tolyj
            },
            cha(){
                var c=this.c;
                var array=this.$store.state.tolyj;
                if(!c){
                    return array;
                }
                array=array.filter(item=>{
                    if(item.title.indexOf(c)!=-1){
                        return item
                    }
                })
                return array;
            }
        },
        methods:{
            routerGo(url){
            // 路由跳转
            console.log(this.$route);
            this.$router.push({path:url})
            },
            clicks(){
                this.isShow=true;
            },
            click(){
                this.isShow=false;
            },
            add(){
                // 如果为空 就 return 掉 什么都不做
				if(this.txt1== '') return
				// 随机一个8位id
                console.log(this.txt1,"wot5frqwertgyh");
 				var id = '';
				var str = "741852qwertyuioplkjhgfdszxcvbnm0963";
				for(var i = 0; i < 8; i++) {
					//~~ 相当于parseInt
					id+= str[~~(Math.random() * str.length)]
				}
				// 发送add 新增命令
                
				this.$store.dispatch("LYJADD",{
                    title:this.txt1,
                    img:'https://s3.cn-north-1.amazonaws.com.cn/lcavatar/mission_40x40.png',
                    id:id
				});
				// 点击后 清空 文本框
                this.txt1 = ''
                this.isShow=false;
            },
            del(id){
				// 只需要一个id就行了
				this.$store.dispatch("LYJDEL",{
					id : id
				})
			}

        }
        

        
 }
   


</script>

<style lang="scss" scoped>
    button{
        outline: none;
    }
    .qun{
        margin-right: 0;
        margin-left: 0;
        margin:0 auto;
        height: 80px;
    }
    .qun .label{
        color: #888;
        font-size: 14px;
        font-weight: 400;
        text-align: right;
        margin-bottom: 0;
        display:block;
        padding-top: -5px;
        margin-top: 16px;
        width: 100px;
        height: 80px;
    }
    .qun .text,.ke .text{
        display: block;
        width: 80%;
        height: 90px;
        margin-top: -90px;
        float:right;
        line-height: 1.5;
        color: #333;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #eee;
        border-radius: .25rem;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
    .ke{
        width: 500px;
        height: 38px;
        margin:0 auto;
    }
    .ke .labels{
        width: 105px;
        height: 38px;
        margin-top: 27px;
        display:block;
    }
    .ke .text{
        height: 30px;
        margin-top: 20px;
        width:93%;
        float:right;
        margin-right: -40px;
        margin-top: -40px;
    }
    .ke option{
        color: #666;
    }
    .cheng{
        margin: 10px auto;
        width: 500px;
        height: 43px;
        color: #666;
    }
    .cheng ul li{
        margin-right: 6px;
        margin-bottom: 8px;
        float: left;
        list-style: none;
        position: relative;
    }
    .cheng ul li .c_s{
        display:block;
        width: 30px;
        height: 30px;
        line-height: 30px;
        font-size: 12px;
        border-radius: 30px;
        background-color: rgb(239, 126, 222);
        color: #fff!important;
        text-shadow: transparent 0 0 0;
        text-align: center;
        float:right;
        margin-left: 70px;
        margin-top: -20px;
    }
    .sure{
        width: 364px;
        height: 38px;
        margin:0 auto;
        color: #666;
    }
    .sure .btn{
        color: #fff;
        background-color: #22d7bb;
        border-color: #22d7bb;
        display: inline-block;
        white-space: nowrap;
        vertical-align: middle;
        user-select: none;
        border: 1px solid transparent;
        padding: .469rem 26px;
        font-size: .875rem;
        line-height: 1.5;
        min-width: 106px;
        border-radius: 1.25rem;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
    .sure a{
        margin-left: 27px;
    }
    
    .one{
        background-color: #007bff;
    }
    .two{
        background-color: #6610f2;
    }
    .three{
        background-color: #6f42c1;
    }
    .four{
        background-color: #e83e8c;
    }
    .red{
       background-color: #dc3545;  
    }
    .orange{
       background-color: orange;  
    }
    .yellow{
       background-color: yellow;  
    }
    .green{
       background-color: green;  
    }
    .teal{
       background-color: teal;  
    }
    .cyan{
       background-color: cyan;  
    }
    .secondary{
       background-color:#666;  
    }
    .success{
       background-color: #22d7bb;  
    }
    .danger{
          background-color: #ff5b57;  
    }
    .a{
         background-color:#f61f80;
    }
    .b{
         background-color:#a72ee6;
    }
    .c{
         background-color:#f61f80;
    }
    .d{
         background-color:#0098e0;
    }
    .e{
         background-color:#0f7b6a;
    }
    .tan_d_up{
        margin-right: -15px;
        height: 60px;
    }
    .tan_d_up .input{
       width:590px;
    }
    .tan_d_up .input .form{
        display: block;
        width: 100%;
        line-height: 2.8;
        color: #333;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #eee;
        border-radius: .25rem;
        padding-left: 20px;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
    .tan_d_down{
        margin-right: -15px;
        height: 35px;
        width:100%;
    }
    .tan_d_down .color{
        position: absolute;
        width: 110%;
        min-height: 1px;
        padding-right: 15px;
        padding-left: 15px;
    }
    .tan_d_down ul{
        width: 100%;
    }
    .tan_d_down ul li{
        list-style: none;
        cursor: pointer;
        margin-bottom: 8px;
        float: left;
        padding-left:8px;
    }
    .tan_d_down ul li span{
        display: inline-block;
        border-radius: 50%;
        width: 24px;
        height: 24px;
        text-align: center;
        padding: 0 4px 6px;
    }
    .zhe{
        width:100%;
        height:100%;
        background-color: black;
        opacity: 0.3;
        position:fixed;
        top: 0;
        left: 0;
    }
    .tan_box{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
    }
    .tan{
        width: 660px;
        height: 461px;
        position: relative;;
        background-color: #fff;
        box-shadow: 0 0 1.5rem rgba(0,0,0,.5);
        border: 0 solid rgba(0,0,0,.2);
        border-radius: .3rem;
        z-index: 1000;
       margin: 50px auto;
    }
    .tan_up{
        padding: 0 1.875rem;
        min-height: 1.5;
        align-items: center;
        height: 50px;
        border-bottom: 1px solid #eee;
        border-top-left-radius: .3rem;
        border-top-right-radius: .3rem;
        box-sizing: border-box;
        width:100%;
    }
    .tan_up span{
        float: right;
        margin-top:-22px;
    }
    .tan_up h3{
        padding-top:13px;
    }
    .tan_down{
        padding: 1.25rem 1.875rem 1.875rem;
        position: relative;
        height: 130px;
    }
    *{
       box-sizing:border-box;
    }
    li{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    div{
        height:100%;
        width: calc(100% - 70px);
        position:relative;
    }
    .left{
       position: relative;
       width: 240px;
       border-right: 1px solid #ddd;
       -webkit-transition: width .2s ease-in-out;
       transition: width .2s ease-in-out;
       background: white;
    }
    .left .left_header{
        height:50px;
    }
    .img img{
        width: 24px;
        height: 24px;
        display: block;
        position:absolute;
        left: 34px;
        top: 10px;
        font-size: 12px;
        border-radius: 24px;
    }
    .left .title{
        float: left;
        margin: 0 20px;
        color: #333;
        line-height: 50px;
        font-size: 16px;
        cursor: pointer;
    }
    .left .more{
        float: right;
        width: 24px;
        height: 24px;
        margin: 2px -50px;
        line-height: 50px;
        position: relative;
    }
    .left .left_list{
        margin-bottom: 3px;
    }
    .left .left_search{
        padding: 0 20px 10px;
        position: absolute;
        width: 240px;
        height: 50px;
    }
    .left .left_search input{
        background: #f3f3f3;
        -webkit-box-shadow: none;
        box-shadow: none;
        color: #666;
        height: 36px;
        font-size: 14px;
        padding-left: 28px;
        border-radius: 20px;
        border: 1px solid transparent;
        margin-top: 10px;
        border:none;
    }
    .left .left_search input:hover{
        background: #fdfdfd;
        border: 1px solid #ddd;
    }
    .ul{
        width: 240px;
        position:absolute;
        margin-top:60px;
    }
    .ul li{
       position: relative;
       display: block;
       float: none;
       list-style: none;
       margin-top:10px;
       width: 240px;
       height: 47px;
    }
    .ul li a{
        border-radius: 0;
        color: #666;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        position: relative;
        padding: 11px 0 11px 30px;
        line-height: 23px;
        border-right: 4px solid transparent;
        text-decoration: none;
    }
    .ul span{
        display:block;
        float: left;
    }
    .ul li:hover{
        -webkit-box-shadow: 0 0 8px 2px #eee;
        box-shadow: 0 0 8px 2px #eee;
        background: 0 0;
        text-decoration: none;
    }
    .ul li:hover .false{
        display:block;
    }
    .ul li .false{
        display:none;
    }
    .news{
        width: 16px;
        height: 50px;
        margin-top: 14px;
        margin-left:-15px;
        display:inline-block;
    }
    .fangdajing{
        position: absolute;
        top: 15px;
        left: 30px;
        color: #8f8f8f;
    }
    .ul .showname{
        line-height: 45px;
        margin-left:65px;
        max-width: 130px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: middle;
    }
    .ul li .false{
        font-size: 12px;
        position: absolute;
        top: 12px;
        right: 10px;
        color: #aaa;
        float:right;
    }
    .right{
       width: 1226px;
       height: 100%;
       position: absolute;
        top: 0;
        left: 240px;
       background: url(img/1.jpg) 0% 0% / cover;
    }
    .cur{
        background: #e7f9f6;
        color: #22d7bb;
        border-right: 4px solid #22d7bb;
    }
    input{
        outline: none;
    }
</style>