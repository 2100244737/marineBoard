<template>
  <div class="myreservation-container">
    <page-head></page-head>
    <nav class="head-nav-warp">
      <nav class="head-nav-con bx"></nav>
    </nav>

    <!--用户中心部分-->
    <div class="user-warp">
        <div class="user-con bx">
          <!--当前位置-->
          <div class="user-position">
            <i class="el-icon-location-outline"></i>
            <span>当前位置>首页>用户中心</span>
          </div>
          <!--用户信息-->
          <div class="user-message">
              <div class="user-tx">
                <img src="../../../public/img/user-center/user-tx.png" alt="" class="tx-img">
                <div class="tx-text">
                  <div class="welcome">
                    <span class="user-name">不忘初心牢记使命</span><span>，欢迎您！</span>
                  </div>
                  <div class="user-leval">实名等级：初级</div>
                  <div class="leval-up">实名等级提升</div>
                </div>
              </div>

              <div class="user-detailedmsg">
                <ul class="one">
                  <li>登录账号：</li>
                  <li>证件类型：</li>
                  <li>用户类型：</li>
                </ul>
                <ul class="two">
                  <li>联系号码：</li>
                  <li>公民身份证号码：</li>
                </ul>
              </div>
          </div>
          <!--用户中心主体内容-->
          <div class="usercenter-con bx">
            <!--左边导航-->
            <ul class="usercenter-nav">
                <li class="usercenter-navs"
                    v-for="(v,index) in navs"
                    v-bind:class="{'active-usercenter-navs':index===isActive}"
                    @click="changeStyle(index)"
                >
                  <img class="navs-img" alt=""
                       :src="(index===isActive)?'../../../img/user-center/active-nav'+(index+1)+'.png':'../../../img/user-center/nav'+(index+1)+'.png'"
                  >
                  <span class="navs-text" v-bind:class="{'active-navs-text':index===isActive}">{{v}}</span>
                </li>
            </ul>
            <!--右边内容，动态组件-->
            <div class="usercenter-rightcon">
              <component v-bind:is="which_to_show"></component>
            </div>
          </div>

        </div>
    </div>


    <pagefoot></pagefoot>
  </div>
</template>
<script>
  import {mapGetters} from "vuex";
  import pageHead from './pageHead.vue'
  import handle from './handle.vue'
  import certificate from './certificate.vue'
  import reservation from './reservation.vue'
  import materials from './materials.vue'
  import authorization from './authorization.vue'
  import information from './information.vue'
  import setting from './setting.vue'
  import pagefoot from '@/components/pagefoot/index.vue'
  export default {
    name: "userCenter",
    components:{
      pageHead,
      // 动态组件
      handle,
      certificate,
      reservation,
      materials,
      authorization,
      information,
      setting,
      pagefoot
    },
    data() {
      return {
          // 导航
          navs:["我的办件","我的证照","我的预约","我的材料","我的授权","我的信息","账户设置"],
          isActive:0,
          //动态组件
          componentName:["handle","certificate","reservation","materials","authorization","information","setting"],
          which_to_show:'handle'
      };
    },
    watch: {},
    created() {
    },
    mounted() {

    },
    props: [],
    methods: {
      changeStyle(index){
        this.isActive=index;
        this.which_to_show=this.componentName[index]
      }
    }
  };
</script>


<style lang="scss" scoped>
  ul,li{
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .bx{
    width:1100px;
    margin:0 auto;
  }
  .head-nav-warp{
    width: 100%;
    height:42px;
    background: #004098;
  }

  /*用户中心部分*/
  .user-warp{
    width: 100%;
    /*min-height: 837px;*/

    .user-con{
      /*用户位置*/
      .user-position{
        font-size: 12px;
        color:#999;
        margin-top:19px;

        .el-icon-location-outline{
          margin-right:5px;
        }
      }
      /*用户信息*/
      .user-message{
        margin-top:22px;
        height:189px;
        background:rgba(255,255,255,1);
        box-shadow:0px 3px 7px 0px rgba(0,54,127,0.06);

        /*用户头像*/
        .user-tx{
          margin: 30px 0 0 82px;
          float: left;

          .tx-img{
            float: left;
          }
          .tx-text{
            float: left;
            .welcome{
              font-size:24px;
              font-family:MicrosoftYaHei;
              font-weight:400;
              color:rgba(0,0,0,1);
              span{
                display: block;
                float: left;
                line-height:60px;
              }
              .user-name{
                width: 100px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
            }
            .user-leval{
              font-size:14px;
              font-weight:400;
              color:rgba(0,54,127,1);
            }
            .leval-up{
              width:134px;
              height:26px;
              margin-top: 20px;
              border:1px solid rgba(0,64,152,1);
              border-radius:14px;
              text-align:center;
              font-size:15px;
              font-family:MicrosoftYaHei;
              font-weight:400;
              color:rgba(0,64,152,1);
              line-height:29px;
            }

          }
        }

        /*用户详细信息*/
        .user-detailedmsg{
          float: left;
          margin-top: 64px;
          margin-left: 90px;
          font-size:14px;
          font-family:MicrosoftYaHei;
          font-weight:400;
          color:rgba(0,0,0,1);
          overflow: hidden;

          .one,.two{
            height: 14px;
          }
          .one li:nth-child(3){
              margin-left:79px;
          }

          .two{
            margin-top: 33px;

          }

          ul li{
            float: left;
          }
          ul li:nth-child(2n){
            margin-left:70px;
          }
        }
      }

      /*用户中心主体内容*/
      .usercenter-con{
        width:100%;
        margin-top: 11px;
        clear: both;
        /*左部导航部分*/
        .usercenter-nav{
          float: left;
          /*未激活样式*/
          .usercenter-navs{
            width:178px;
            height:71px;
            line-height:71px;
            margin-top:6px;
            background:rgba(255,255,255,1);
            box-shadow:0px 3px 7px 0px rgba(0,54,127,0.06);

            .navs-img{
              display: block;
              float: left;
              margin:24px 21px 0 30px;
            }
            .navs-text{
              display: block;
              float: left;
              height: 18px;
              line-height:18px;
              margin-top:29px;
              font-size:18px;
              font-family:MicrosoftYaHei;
              font-weight:400;
              color:rgba(0,0,0,1);
            }
          }
          .usercenter-navs:nth-child(1){
            margin-top: 0;
          }
          /*激活后样式*/
          .active-usercenter-navs{
            width:178px;
            height:73px;
            background:rgba(0,64,152,1);

            .active-navs-text{
              color:rgba(255,254,254,1);
            }
          }
        }
        /*右边动态组件框架*/
        .usercenter-rightcon{
          float: left;
          width:880px;
          min-height:561px;
          margin-left: 13px;
          padding-left:28px;
          background:rgba(255,255,255,1);
          box-shadow:0px 3px 7px 0px rgba(0,54,127,0.06);
        }
      }


    }


  }
  .user-warp:after{
    content:"";
    display:block;
    clear:both;
  }

</style>
