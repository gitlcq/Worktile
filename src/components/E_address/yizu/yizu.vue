<template>
    <div>
       <div class="content_box">
           <h1>一组</h1>
       </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .content_box{
        -webkit-box-flex: 1;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        position: relative;
        -webkit-box-direction: normal;
        flex: 1 1 0;
        -webkit-flex: 1 1 0;
        display: flex;
        flex-direction: column;
        overflow-x: hidden;
        overflow-y: auto;
        overflow-wrap: break-word;
    }
</style>
