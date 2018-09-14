<template>
    <div>
        <div class="unread_cont">
             <table  class="table lc-table">
                    <thead>
                    <tr>
                        <th nowrap="nowrap" translate="drive.TH_NAME" class="ng-scope">文件名</th>
                        <th nowrap="nowrap" translate="drive.TH_SIZE" class="ng-scope">大小</th>
                        <th nowrap="nowrap" translate="drive.TH_UPLOAD_BY" class="ng-scope">上传者</th>
                        <th nowrap="nowrap" translate="drive.TH_UPLOAD_AT" class="ng-scope">上传时间</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                   
                    </tbody>
                </table>
            <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList2"
                list-type="picture">
                <el-button size="small" type="primary" class="btn-sm">点击上传</el-button>
                <div slot="tip" class="el-upload__tip"></div>
            </el-upload>
        </div>
               
          <router-view></router-view>
    </div>
</template>

<script>
 export default {
    data() {
      return {
        fileList2: [{name: '1.jpeg', url: 'http://s3.mogucdn.com/mlcdn/c45406/170903_2a0fija2f3g10bl9ei46161d3cj1j_640x960.jpg_468x468.jpg'}, {name: '2.jpeg', url: 'http://s3.mogucdn.com/mlcdn/c45406/171219_2ajhgf2g90hgh58cj1e4l0d0flea3_640x960.jpg_468x468.jpg'}]
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
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
    width: 120px;
    height:30px;
}
</style>
