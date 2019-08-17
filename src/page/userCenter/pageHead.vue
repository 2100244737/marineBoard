<template>
    <div class="myreservation-head-warp">
      <div class="myreservation-head-con bx">
        <img src="../../../public/img/user-center/logo.png" alt="" class="myreservation-logo">
        <img src="../../../public/img/user-center/adress-icon.png" class="adress-icon" alt="">
        <span class="myreservation-head-title">上海海事局</span>
        <img src="../../../public/img/user-center/Shape.png" alt="" class="myreservation-head-Shape">
        <div class="myreservation-head-search">
          <div class="search-left">
            <input type="text" value="请输入关键字" class="search-text">
          </div>
          <div class="search-right"></div>
        </div>
        <div class="myreservation-head-text">
          <a href="http://www.gjzwfw.gov.cn" class="pt1">全国一体化在线政务服务平台</a>
          <a href="#" class="pt2">交通运输部政务服务平台</a>
          <div class="user">
            <span class="username">李某某</span>
            <span class="new-massage">
              <span class="new-massage-num">12</span>
              <img src="../../../public/img/user-center/newmessage.png" alt="">
            </span>
            <a href="#" class="out">退出</a>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  import {mapGetters} from "vuex";
  export default {
    name: "pageHead",
    data() {
      return {

      };
    },
    watch: {},
    created() {
    },
    mounted() {
    },
    props: [],
    methods: {}
  };
</script>


<style lang="scss" scoped>
  .myreservation-head-warp{
    width: 100%;
    height:92px;
  }
  .bx{
    width:1100px;
    margin:0 auto;
  }
  .myreservation-head-con{
    /*border:1px solid #ccc;*/
    height:92px;

    .myreservation-logo{
      display: block;
      float: left;
      width:236px;
      height:52px;
      margin-top:20px;
    }

    .adress-icon{
      display: block;
      float: left;
      width:12px;
      height:19px;
      margin-left:28px;
      margin-top:36px;
    }

    .myreservation-head-title{
      font-size: 14px;
      color:#333;
      font-family: MicrosoftYaHei;
      display: block;
      float: left;
      margin-top:38px;
      margin-left:4px;
      font-weight: 600;
    }

    .myreservation-head-Shape{
      display: inline-block;
      float: left;
      margin-top: 43px;
      margin-left: 10px;
    }

    .myreservation-head-search{
      margin-left:13px;
      margin-top: 30px;
      float: left;
      .search-left{
        float: left;
        width:141px;
        height:30px;
        border:1px solid #DCDCDC;
        border-right:none;
        line-height: 30px;

        .search-text{
          border: none;
          height:15px;
          width:85px;
          line-height: 15px;
          font-size:14px;
          color:#B3B3B3;
          margin-left:10px;
        }
      }
      .search-right{
        float: left;
        width:46px;
        height:32px;
        background:#E60012 url(../../../public/img/user-center/fangdajing.png) no-repeat center center;
      }

    }

    .myreservation-head-text{
      float: left;
      margin-left: 10px;
      margin-top:38px;
      width:517px;
      height:17px;
      line-height:17px;
      font-size:14px;
      color:#333;
      font-weight:600;
      font-family:MicrosoftYaHei;

      .pt2{
        margin:0 15px;
      }
      .user{
        display: inline-block;

        .username{
          color:#999;
          display: inline-block;

        }
        .new-massage{
          display: inline-block;
          border-left:2px solid #333;
          border-right:2px solid #333;
          padding: 0 15px 0 15px;
          margin: 0 15px;
          position: relative;



          .new-massage-num{
            width: 16px;
            height:16px;
            border-radius: 50%;
            background: #E60012;
            position: absolute;
            bottom:10px;
            right:4px;
            color:#fff;
            font-size: 9px;
            text-align: center;
          }

        }
      }

    }
  }
</style>
