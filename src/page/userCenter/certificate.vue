<template>
  <div class="certificate">
    <!--电子证照-->
    <h2 class="title">
      <span class="title-text">电子证照</span>
      <!--<div class="add-materials">添加</div>-->
    </h2>

    <div class="materials-img">
        <!--每一张证照-->
        <div class="imgs">
          <img src="../../../public/img/user-center/zj1.png" alt="" class="bgimg">
          <div class="imgs-con">
            <!--上面的图标-->
            <span class="top-box">
              <img src="../../../public/img/user-center/zjicon1.png" alt="" class="img-icon">
            </span>
            <!--下面的字-->
            <span class="bot-box"><span class="img-name">海上非自航船舶船员适任证书</span></span>
          </div>
        </div>
        <div class="imgs">
        <img src="../../../public/img/user-center/zj2.png" alt="" class="bgimg">
        <div class="imgs-con">
          <!--上面的图标-->
          <span class="top-box">
              <img src="../../../public/img/user-center/zjicon3.png" alt="" class="img-icon">
            </span>
          <!--下面的字-->
          <div class="bot-box"><span class="img-name">船员证</span></div>
        </div>
      </div>
    </div>
    <!--电子文书-->
    <h2 class="title">
      <span class="title-text">电子文书</span>
      <!--<div class="add-materials">添加</div>-->
    </h2>
    <div class="materials-book">
        <!--每一本文书-->
        <div class="books">
          <img src="../../../public/img/user-center/bookicon.png" alt="" class="bookicon">
          <span class="bookname">《水上试下活动许可证》</span>
        </div>
        <div class="books">
          <img src="../../../public/img/user-center/bookicon.png" alt="" class="bookicon">
          <span class="bookname">《水上试下活动许可证》</span>
        </div>
        <div class="books">
          <img src="../../../public/img/user-center/bookicon.png" alt="" class="bookicon">
          <span class="bookname">《水上试下活动许可证》</span>
        </div>
        <div class="books">
        <img src="../../../public/img/user-center/bookicon.png" alt="" class="bookicon">
        <span class="bookname">《水上试下活动许可证》</span>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from "vuex";
  export default {
    name: "certificate",
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
  h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
    font-size:16px;
    font-weight: normal;
  }
  .certificate{
    width:100%;
    .title{
      width: 100%;
      height:55px;
      .title-text{
        display: block;
        float: left;
        width:80px;
        height:20px;
        font-size:20px;
        font-family:MicrosoftYaHei;
        font-weight:400;
        color:rgba(0,54,127,1);
        line-height:20px;
        margin: 22px 0 0 0;
      }
      .add-materials{
        float: right;
        width:54px;
        height:30px;
        background:rgba(0,64,152,1);
        margin: 15px 24px 0 10px;
        text-align: center;
        line-height: 30px;
        font-size:14px;
        font-family:MicrosoftYaHei;
        font-weight:400;
        color:rgba(255,255,255,1);
      }

    }

    .materials-img,.materials-book{
      /*有padding*/
      width:833px;
      min-height:198px;
      border:2px solid rgba(245,245,245,1);
      padding:14px 0 0 22px;
    }
    .materials-img{
      /*每一张证照*/
      .imgs{
        position: relative;
        float: left;
        margin-right: 20px;
        .imgs-con{
          position:absolute;
          width:112px;
          z-index: 2;
          top:27px;
          left:26px;
          margin:auto;
          text-align: center;
          .top-box{
            display: inline-block;
            width:67px;
            height:67px;
            background:rgba(255,255,255,1);
            border-radius:50%;
            text-align: center;
            line-height: 83px;
            margin-bottom: 28px;
          }
          .bot-box{
            width:112px;
            height:44px;
            font-size:16px;
            font-family:MicrosoftYaHei-Bold;
            font-weight:bold;
            color:rgba(255,255,255,1);
            line-height:44px;
            .img-name{
              display: inline-block;
              text-align: center;
              width:112px;
              line-height: 22px;
            }
          }
        }
      }
    }
    .materials-book{
      margin-bottom: 27px;
      padding-bottom: 15px;
      /*每一本书（一行）*/
      .books{
        width:812px;
        height:54px;
        border-bottom: 1px solid #ccc;
        line-height: 54px;
        font-size:16px;
        font-family:MicrosoftYaHei;
        font-weight:400;
        color:rgba(51,51,51,1);
        overflow: hidden;
        .bookicon{
          margin: 20px 13px 0 0 ;
          float: left;
        }
        .bookname{
          float: left;
          line-height:62px ;
        }
      }
      .books:after{
        content:"";
        display:block;
        clear:both;
      }
    }
  }
</style>
