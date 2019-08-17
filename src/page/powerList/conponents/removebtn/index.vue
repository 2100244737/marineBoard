<template>
  <div class="btn" @click="del">
     <span class="text">{{allNames.label}}</span>
    <img src="../../../../../static/print/remove.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'index',
  props: ['allNames', 'indexs'],
  data() {
    return {
    }
  },
  methods: {
     del() {
       this.$emit('arrDel', this.indexs)
     }
  }
}
</script>

<style scoped lang="scss">
  .btn {
    display: inline-block;
    height:30px;
    padding: 0 10px;
    border:1px solid rgba(153,153,153,1);
    text-align: center;
    line-height: 30px;
    margin-bottom: 10px;
    margin-right: 10px;
    .text {
      margin-right: 20px;
      color:#666666;
    }
  }
</style>
