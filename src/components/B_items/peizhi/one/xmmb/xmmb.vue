<template>
    <div class="module">
        <div class="bigbox">
            <div class="left">
                <i class="iconfont icon-sousuo1"></i>
                <input type="text" placeholder="搜索项目模板" v-model="lih">
            </div>
            <div class="right">
                <div class="add" @click="show">添加</div>
                <div class="shezhi">设置</div>
            </div>
            <div class="pad">
                <table>
                    <thead>
                        <tr>
                            <th style="width:20%">项目模板</th>
                            <th>备注</th>
                            <th>类型</th>
                            <th>状态</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr v-for="item of sou">
                            <td style="text-align:left">
                                <i :class="item.color"><font-awesome-icon :icon="item.ico" class="up_hov"/></i>
                                {{item.xiangmu}}
                                </td>
                                <td style="text-align:left">
                                {{item.beizhu}}
                                </td>
                                <td style="text-align:left">
                                {{item.leixing}}
                                </td>
                                <td style="">
                                <span style="background: #22d7bb;padding: 5px 10px;font-size: 12px;border-radius: 3px;color: #fff;box-sizing: border-box;">
                                {{item.zhuangtai}}
                                </span>
                                </td>
                                <td>
                                <span class="a"><font-awesome-icon icon="cog" class="peizhi"/>配置</span>
                                <span><font-awesome-icon icon="copy" class="s"/></span>
                                <span><font-awesome-icon icon="pen" class="s"/></span>
                                <span @click="dela(item.id)"><font-awesome-icon icon="trash-alt" class="s"/></span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="bog" v-show="isShow">
                    <span @click ="isShow=false" class="cuo">X</span>
                </div>
                <div class="kuang" v-show="isShow">
                    <div class="tk">
                        模板名称:<input type="text" v-model="xiangmu">
                        <br>
                        模板类型:<input type="text" v-model="beizhu">
                        <br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;备注:<input type="text" v-model="leixing">
                        <br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;状态:<input type="text" v-model="zhuangtai">
                        <br>
                        <button @click="tj" class="que">确定</button>
                        <button @click ="isShow=false" class="qv">取消</button>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
</template>
<script>
import one from './xmmb'
export default {
    data(){
        return{
            isShow:false,
            xiangmu:'',
            beizhu:'',
            leixing:'',
            zhuangtai:'',
            lih:''
        }
    },
    created(){
        this.$store.dispatch("ABB")
    },
    methods:{
        show(){
            this.isShow=!this.isShow;
        },
        tj(){
            	var id = '';
				var str = "741852qwertyuioplkjhgfdszxcvbnm0963";
				for(var i = 0; i < 8; i++) {
					id+= str[~~(Math.random() * str.length)]
				}
            this.$store.dispatch("TJ",{
                id:id,
                xiangmu:this.xiangmu,
                beizhu:this.beizhu,
                leixing:this.leixing,
                zhuangtai:this.zhuangtai,
            })
        },
        dela(id){
				this.$store.dispatch("DELA",{
					id : id
				})
			},
    },
    computed:{
        sou(){
                var lih=this.lih;
                var array=this.$store.state.todos;
                if(!lih){
                    return array;
                }
                array=array.filter(item=>{
                    if(item.xiangmu.indexOf(lih)!=-1){
                        return item
                    }
                })
                return array;
            }
    }

}
</script>
<style lang="scss" scoped >
    .module{
        overflow: hidden;
        padding: 20px;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        background-color: #fff;
        .left{
            position: relative;
            float: left;
            width: 300px;
            .icon-sousuo1{
                position: absolute;
                top: 10px;
                left: 10px;
            }
            input{
                padding: 8px 0;
                padding-left: 34px;
                padding-right: 14px;
                display: block;
                width: 100%;
                line-height: 1.5;
                color: #333;
                background-color: #fff;
                background-clip: padding-box;
                border: 1px solid #eee;
                border-radius: .25rem;
                transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                box-sizing: border-box;
                outline: none;
            }
            input:hover{
                border-color: #22d7bb;
            }
        }
        .pad{
            width: 100%;
            box-sizing: border-box;
            padding-top: 20px;
            background-color: #fff;
            float: left;
            table{
                width: 100%;
                box-sizing: border-box;
                border-collapse: collapse;
                thead th{
                    background-color: #f3f3f3;
                    vertical-align: bottom;
                    font-weight: 400;
                    border-bottom: 1px solid #eee;
                }
            }
            table,th,td,tr{
                border: 1px solid #eee;
            }
            th,td{
                font-size: 14px;
                padding: 12px 15px;
                display: table-cell;
                text-align: center;
                color: #666;
            }
            img{
                vertical-align: -5px;
            }
        }
    }
    td span{
        margin:10px;
    }
    .right  {
        float: right;
        margin-right:120px;
    }
  .shezhi{
       width: 80px;
      height:30px;
      border:1px solid #ccc;
      border-radius: 15px;
     margin-left:120px;
     margin-top:10px;
     text-align: center;
     line-height:30px;
  }
  .add{
      width: 80px;
      height:30px;
      background-color:#22d7bb;
      position: absolute;
      top:30px;
      text-align: center;
      line-height:30px;
      color:#fff;
      border-radius: 15px;
  }

    .peizhi{
        color:#22d7bb;
    }
    .a{
        color:#22d7bb;
    }
    .s{
        color:#aaa;
    }
    .one{
        color:rgb(40,190,164);
    }
    .tow{
        color:rgb(63,186,97);
    }
    .three{
        color:red;
    }
    .four{
        color:rgb(57,204,217)
    }
    .five{
        color:rgb(153,213,97)
    }
    .bigbox{
        z-index:10;
    }
    .kuang{
        width: 600px;
        height:350px;
        position: absolute;
        top:100px;
        left:230px;
        z-index:999;
        background-color: #fff;
    }
    .kuang input{
        width: 400px;
        height: 35px;
        border:1px solid #ccc;
        outline:none;
        border-radius: 15px;
        margin:10px;
    }
    .que{
        width: 80px;
        height: 35px;
        border:0;
        color:#fff;
        font-size:17px;
         border-radius:15px;
         position: absolute;
         left:150px;
        background-color: #22d7bb;
    }
    .qv{
        width: 80px;
        height: 35px;
        color:#ccc;
        border:0;
        font-size:17px;
        background-color: #fff;
        border:1px solid #ccc;
        border-radius:15px;
       position: absolute;
       left:250px;
    }
    .tk{
        width: 550px;
        margin-left:30px;
        margin-top:30px;
    }
    .bog{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color:#ccc;
        opacity: .8;
    }
    .cuo {
        float:right;
        margin-top:45px;
        margin-right:60px;
        font-size:20px;
    }
</style>
