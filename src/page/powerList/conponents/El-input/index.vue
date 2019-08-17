<template>
  <div class="container">
    <el-input v-model="input" class="input" placeholder="请输入关键字">
      <el-button class="btn"  type="warning" slot="append" icon="el-icon-search"></el-button>
    </el-input>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      input:''
    }
  }
}
</script>

<style scoped lang="scss">
 .container {
   .input {
     width:183px;
     height:32px;
     box-sizing: border-box;
     background:rgba(255,255,255,1);
   }
   .btn {
     color: #fff;
     width:47px;
     height:39px;
     background:rgba(230,0,18,1)
   }
 }
 .el-icon-search {
  font-size: 28px;
 }
</style>
