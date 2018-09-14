<template>
    <div>
        <div is="rigbox" v-show="this.$store.state.istab == 0"></div>
        <div is="rigzhou" v-show="this.$store.state.istab == 1"></div>
        <div is="rigri" v-show="this.$store.state.istab == 2"></div>  
    </div>
</template>

<script>
import rigbox from "../rigbox/rigbox.vue"
// 右边的周日历
import rigzhou from "../rigbox/rigzhou.vue"
// 右边的日日历
import rigri from "../rigbox/rigri.vue"
export default {
 components: {
        //组件
        rigbox,rigzhou,rigri
        },
}
</script>

<style>

</style>
