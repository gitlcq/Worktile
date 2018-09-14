<template>
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
</template>

<script>
export default {

}
</script>

<style>

</style>
