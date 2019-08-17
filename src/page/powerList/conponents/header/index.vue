<template>
  <div class="containered">
    <div class="header clear">
      <div class="header-left">
        <img class="img" src="../../../../../static/print/print-left.png" alt="">
      </div>
      <div class="location">
        <img class="img" src="../../../../../static/print/location.png" alt="图片">
        <span class="text">上海海事局</span>
        <div class="show-img"  @mouseover.stop="enter()" @mouseleave.stop="leave()">
          <img class="img1"  v-show="!isShow" src="../../../../../static/print/sharp.png" alt="">
          <img class="img1" v-show="isShow" src="../../../../../static/print/up.png" alt="">
        </div>

      </div>
      <ElInput class="input"></ElInput>
      <div class="dsct">
        <span class="text">全国一体化在线政务服务平台 交通运输部政务服务平台</span>
        <router-link to="/">
          登录 | 注册
        </router-link>
      </div>
    </div>
    <div class="squqre"  @mouseover.stop="entert()" v-show="isBlock" @mouseleave.stop="leavet()">
      <Squqre/>
    </div>

  </div>
</template>

<script>
  import ElInput from '../El-input'
  import Squqre from '../square'
export default {
  name: 'index',
  components: {
    ElInput,
    Squqre
  },
  data() {
    return {
      isShow: false,
      isBlock: false
    }
  },
  methods: {
      enter() {
        this.isShow = true;
        this.isBlock = true
      },
    leave() {
      this.isShow = false;
      this.isBlock = false

    },
    entert(){
      this.isBlock = true
    },
    leavet(e) {
      this.isBlock = false;
    }
  }
}
</script>
<style scoped lang="scss">

  .header:after{
    display: block;
    content: '';
    clear:both
  }
  .containered {
    width: 100%;
  }
  .header {
    margin: 0 auto;
    width: 1100px;
    padding-bottom: 20px;
    .header-left {
      float: left;
      margin-top: 6px;
      margin-right: 30px;
      .img {
      width: 236px;
      height: 52px;
      }
    }

    .location {
      float: left;
      margin-top: 24px;
      text-align: center;

      .img {
        float: left;
        width: 12px;
        height: 19px;
        margin-right: 10px;
      }
      .text {
        float: left;
        font-size: 14px;
        width: 73px;
        margin-right: 10px;
        height: 15px;
      }
      .show-img{
        position: relative;
        top:-2px;
        float: left;
        width: 12px;
        height: 32px;
        margin-right: 26px;
      }
    }

    .input {
      float: left;
      margin-top: 16px;
      margin-right: 33px;
    }
    .dsct {
      float: left;
      margin-top: 24px;
      .text {
        font-size: 14px;
        margin-right: 10px;
      }

    }
  }

</style>
