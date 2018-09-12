<template>
    <div class="module">
        <div class="left">
             <i class="iconfont icon-sousuo1"></i>
            <input type="text" placeholder="搜索项目模板" >
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
                    <tr v-for="item of arr">
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
                            <span><font-awesome-icon icon="trash-alt" class="s"/></span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            arr:[
                {
                    ico:"envelope-open-text",
                    xiangmu:'事物处理',
                    beizhu:'适用于最简单的事务管理',
                    leixing:'通用',
                    zhuangtai:'已启用',
                    color:"one",
                },
                {
                    ico:"envelope-open-text",
                    xiangmu:'项目管理',
                    beizhu:'适用于通用的项目管理',
                    leixing:'通用',
                    zhuangtai:'已启用',
                     color:"tow",
                },
                {
                    ico:"envelope-open-text",
                    xiangmu:'敏捷开发',
                    beizhu:'适用于敏捷研发管理，包括迭代、需求和缺陷',
                    leixing:'软件',
                    zhuangtai:'已启用',
                    color:"three",
                },
                {
                    ico:"envelope-open-text",
                    xiangmu:'缺陷管理',
                    beizhu:'适用于缺陷管理',
                    leixing:'软件',
                    zhuangtai:'已启用',
                    color:"four",
                },
            ]
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
</style>
