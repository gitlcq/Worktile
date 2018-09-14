<template>
    <div>
        <div class="header">
          <a href="#"><i><font-awesome-icon icon="folder" class="file2"/></i>个人网盘</a>
          <div class="head-right">
                 <div class="btu" @click="dianji1()">+新建</div>
                 <div class="xj" v-show="isShow1"></div>
                 <div class="xj-con" v-show="isShow1">
                    <div class="heta"><h3>新建文件夹</h3><span style="color:#aaa;font-size:20px;display:inline-block;margin-left:500px;cursor: pointer;" @click="dianji2()">x</span></div>
                    <input type="text" placeholder="请输入文件夹的名字" v-model="new1" style="width:600px;height:40px;border:1px solid #eee;border-radius: 5px;color:#eee;padding:15px;margin-left: 35px;">
                    <ul class="quanquan">
                        <li v-for="item of data" :class="item.color"></li>
                    </ul>
                    <select style="width:600px;height:50px;border-radius: 5px;margin-top:10px;margin-left: 35px;">
                       <option>公开：企业所有成员都可以看见此文件夹</option>
                       <option >Runoob</option>
                       <option >Google</option>
                    </select>
                    <select style="width:600px;height:50px;border-radius: 5px;margin-top:10px;margin-left: 35px;" >
                       <option>私人网盘</option>
                       <option >Runoob</option>
                       <option >Google</option>
                    </select>
                    <button style="width:110px;height:40px;color: #fff;background-color: #22d7bb;outline:none;border:none;font-size:.875rem;line-height: 1.5;border-radius: 1.25rem;position:absolute;left:140px;top:300px;" @click="add()">确定</button>
                    <button style="width:110px;height:40px;color: #22d7bb;background-color:#fff;outline:none;border:none;font-size:.875rem;line-height: 1.5;border-radius: 1.25rem;position:absolute;left:250px;top:300px;">取消</button>
                 </div>
             <!-- <div class="btn">上传文件</div> -->
          </div>
        </div>
        <div class="part">
           <div class="part-bg">
               <div class="heer">
                   <a href="#" class="name">文件夹</a>
                   <a href="#" class="size">大小</a>
                   <a href="#" class="person">更新人</a>
                   <a href="#" class="time">跟新时间</a>
               </div>
               <ul>
                    <li v-for="(item,index) of qiye" class="heer haha">
                        <span class="name"><i><font-awesome-icon icon="folder" class="file"/></i>{{item.name}}</span>
                        <span  class="size">{{item.size}}</span>
                        <span  class="person">{{item.person}}</span>
                        <span  class="time">{{item.time}}</span>
                        <span class="xyd" @click="dianji">···</span>
                        <!-- <div class="diji" v-show="isShow" >
                            <ul>
                                <li><a href="#">新建文件夹</a></li>
                                <li><a href="#">设置权限</a></li>
                                <li><a href="#">公开链接</a></li>
                                <li><a href="#">移动</a></li>
                                <li><a href="#">复制</a></li>
                                <li><a href="#">下载</a></li>
                                <li><a href="#">重命名</a></li>
                                <li><a href="#">修改颜色</a></li>
                                <li><a href="#">删除</a></li>
                            </ul>
                        </div> -->
                    </li>
                    <div class="diji" v-show="isShow" >
                            <ul>
                                <li><a href="#">新建文件夹</a></li>
                                <li><a href="#">设置权限</a></li>
                                <li><a href="#">公开链接</a></li>
                                <li><a href="#">移动</a></li>
                                <li><a href="#">复制</a></li>
                                <li><a href="#">下载</a></li>
                                <li><a href="#">重命名</a></li>
                                <li><a href="#">修改颜色</a></li>
                                <li @click="del(index)"><a href="#">删除</a></li>
                            </ul>
                    </div>
               </ul>
               <div class="chuan">
                    <!-- <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        multiple
                        :limit="3"
                        :on-exceed="handleExceed"
                        :file-list="fileList">
                        <el-button size="small" type="primary" class="btn">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip"></div>
                    </el-upload> -->
                    <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :file-list="fileList2"
                    list-type="picture">
                    <el-button size="small" type="primary" class="btn">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip"></div>
                    </el-upload>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      qiye:[
            {
                name:"person",
                size:"-",
                person:"m",
                time:"11月11日10:24"
            },
            {
                name:"rgrson",
                size:"-",
                person:"m",
                time:"11月12日10:31"
            },
            {
                name:"erson",
                size:"-",
                person:"m",
                time:"11月13日10:21"
            },
        ],
      data:[
          {
               color:"green1"
          },
          {
               color:"green2"
          },
          {
               color:"green3"
          },
          {
               color:"green4"
          },
          {
               color:"green5"
          },
          {
               color:"green6"
          },
          {
               color:"green7"
          },
          {
               color:"green8"
          },
          {
               color:"green9"
          },
          {
               color:"green10"
          },
          {
               color:"green11"
          },
          {
               color:"green12"
          },
          {
               color:"green13"
          },
          {
               color:"green14"
          },
          {
               color:"green15"
          }
      ],
        isShow:false,
        isShow1:false,
        new1:'',
        fileList2: [{name: '1.jpeg', url: 'https://imagecdn.lapetit.cn/postsystem/docroot/images/goods/201802/16093/list_16093.jpg?v=1522743650'}, {name: '2.jpeg', url: 'https://imagecdn.lapetit.cn/postsystem/docroot/images/goods/201806/17018/list_17018.jpg?v=1528859908'}]
      }
    },
    methods:{
        // delete1(index){
        //     alert('删除'+index);
        // },
        dianji(){
              this.isShow = !this.isShow;
        },
        dianji1(){
            this.isShow1 = !this.isShow1;
        },
        dianji2(){
            this.isShow1 = !this.isShow1;
        },
        handleRemove(file, fileList) {
        console.log(file, fileList);
      },
        handlePreview(file) {
        console.log(file);
      },
       add(){
            this.qiye.push({
                name:this.new1,
                green1:'rgb(34, 215, 187)',
                person:'m',
                time:'9月11日 10:21',
                size:"-"
            })
            this.new1 = ''
            localStorage.setItem('new1',JSON.stringify(this.new1));
            this.isShow1 = !this.isShow1;
        },
        del(index){
            this.qiye.splice(index, 1);
             this.isShow = !this.isShow;
        }

    }
}
</script>

<style lang='scss' scoped>
.unread_cont{
    position: absolute;
    left:-10px;
    top: -20px;
    width: 100%;
    height: 82%;
    overflow: auto;
    margin-left: 10px;
    margin-top: 20px;
    background-color: #fff;
}
.table {
    width: 100%;
    color: #333;
    margin-bottom: 1.25rem;
    background-color: transparent;
    border-collapse: collapse;
    border-spacing: 0;
   margin-top: 20px;
    margin-left: -63px;
}
tr {
    height: 55px;
    font-size: 14px;
}

.table thead th {
    vertical-align: bottom;
    font-weight: 400;
    border-bottom: 1px solid #eee;
}
.lc-table tbody {
    color: #333;
}
.header-filter-area{
    float: right;
    margin-right: 20px;
}
.btn-sm {
    position: absolute;
    top: 10px;
    right: 0;
    padding: .157rem 20px;
    border-radius: 1rem;
    margin-top: 10px;
}
 .btn-sm{
    color: #fff;
    background-color: #22d7bb;
    border-color: #22d7bb;
    width: 126px;
    height:30px;
}
.el-upload-list li{
    width: 1140px;
    margin: auto;
    line-height: 60px;
    height: 55px;
    border-bottom: 1px solid #eee;
}
.green1{
    background: #22d7bb;
}
.green2{
    background: #18bfa4;
}
.green3{
    background: #2cccda;
}
.green4{
    background: #2dbcff;
}
.green5{
    background: #4e8af9;
}
.green6{
    background: #7076fa;
}
.green7{
    background: #9473fd;
}
.green8{
    background: #c472ee;
}
.green9{
    background: #ef7ede;
}
.green10{
    background: #f969aa;
}
.green11{
    background: #fc587b;
}
.green12{
    background: #fa5a55;
}
.green13{
    background: #ff7747;
}
.green14{
    background: #ffa415;
}
.green15{
    background: #ffd234;
}
.quanquan{
     width: 610px;
     height: 50px;
     margin-bottom: 15px;
     margin:auto;
    //  border:1px solid red;
}
.quanquan li{
    width: 30px;
    height: 30px;
    float: left;
    list-style-type: none;
    // border:1px solid red;
    margin:10px 5px;
    border-radius: 50%;
}
.xyd{
    color: #22d7bb;
    display: inline-block;
    margin-left: 100px;
}
    .header{
        height: 50px;
        width:100%;
        // border:1px solid red;
        background: rgba(253,253,253,.95);  
    }
    .file{
        font-size: 30px;
        vertical-align: middle;
        margin-right: 10px;
        color: rgb(249, 105, 170);
    }
     .file2{
        font-size: 18px;
        vertical-align: middle;
        margin-right: 10px;
       color: rgb(249, 105, 170);
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
        height: 1130px;
        width:1230px;
        background: rgb(212, 207, 207);
        position: relative;
        // border:1px solid blue;
    }
    .icon{
       font-style:normal;
    }
    .head-right{
        width: 280px;
        height: 50px;
        float:left;
        margin-left: 770px;
        // margin-top: -50px;
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
        // border:1px solid red;
        float: right;
    }
    .part-bg{
        background: #fff;
        width: 1170px;
        height: 680px;
        position: absolute;
        top:20px;
        left:20px;
        // border:1px solid red;
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
    .btn{
        width: 140px;
        height: 40px;
        background: #22d7bb;
        color: #fff;
        border:1px solid  #22d7bb;
        text-align: center;
        line-height:20px;
        cursor: pointer;
        border-radius: 20px;
        // margin-top:10px;
        // margin-left: 830px;
        float: left;
        position: absolute;
        left:998px;
        top:-65px;
  
    }
    ul li{
        list-style-type: none;
    }
    .haha:hover{
        -webkit-box-shadow: 0 0 8px 2px #eee;
        box-shadow: 0 0 8px 2px #eee;
        background: 0 0;
        cursor: pointer;
    }
    .diji{
        width: 210px;
        height: 420px;
        background: #fff;
        box-shadow: 0 0 24px rgba(0,0,0,.18);
        margin-left: 20px;
        position: absolute;
        // display:none;
        left:890px;
        z-index: 99;
    }
    .diji ul li{
        height: 45px;
        width: 210px;
        transition: .2s;
    }
    .diji ul li:hover{
        box-shadow: 0 0 8px 2px #eee;
        cursor: pointer;
        
    }
    .diji ul li:hover a{
        margin-left:10px;
    }
    .diji ul li a{
        line-height: 60px;
        color: #666;
        padding: 20px 30px;
        transition: .2s;
    }
    .xj{
        width: 1520px;
        height: 880px;
        // border:1px solid red;
        position:relative;
        left:-1200px;
        top:-42px;
        z-index: 9;
        background-color:black;
        opacity: 0.3;
        // display:none;
        
    }
    .xj-con{
       width: 680px;
       height: 350px;
       position: absolute;
       z-index: 99;
       border: 0 solid rgba(0,0,0,.2);
    //    box-shadow: 0 0 1.5rem rgba(0,0,0,.5);
       border-radius: .3rem;
      background-color: #fff;
       left:140px;
       top:60px;
    //    background: red;
    //    display: none;
    }
    .heta{
        width: 680px;
        height: 50px;
        border-bottom: 1px solid #eee;
        text-align: left;
        margin-bottom:15px;
    }
     .heta h3{
         line-height: 50px;
        color: rgb(110, 103, 103)!important;
        display:inline-block;
        margin-left: 30px;

     }
     .chuan{
         width: 1150px;
         height: 550px;
        //  border:1px solid yellow;
     }
</style>
