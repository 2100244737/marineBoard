<template>
  <div class="container">
    <Headers></Headers>
    <!--    头部导航结束-->
    <div class="navigation">
      <div class="navlist">
        <router-link class="home active " to="/quire">首页</router-link>
        <div class="work">
          <span class="text">个人办事</span>
          <div class="show-img" @mouseover.stop="enter()" @mouseleave.stop="leave()">
            <img v-show="!isShow" src="../../../static/print/sharp.png" alt="">
            <img v-show="isShow" src="../../../static/print/up.png" alt="">
          </div>
        </div>
        <div class="work">
          <span class="text">法人办事</span>
          <div class="show-img" @mouseover.stop="legalenter()" @mouseleave.stop="legalleave()">
            <img v-show="!isLegal" src="../../../static/print/sharp.png" alt="">
            <img v-show="isLegal" src="../../../static/print/up.png" alt="">
          </div>
        </div>
        <div class="work">
          <span class="text">权责清单</span>
          <img  src="../../../static/print/sharp.png" alt="">
        </div>
        <div class="work">
          <span>咨询与投诉</span>
        </div>
      </div>
      <div class="hover" @mouseover.stop="hotEnter()" v-show="isHot" @mouseleave.stop="hotLeavet()">
        <NavigationHot></NavigationHot>
      </div >
    </div>
    <!--  导航栏结束-->
    <div class="bread">
      <div class="bread-nva">
        <img class="img" src="../../../static/print/weizhi.png" alt="">
        <el-breadcrumb class="breads-text" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item> <img class="img" src="../../../static/print/weizhi.png" alt="">当前位置</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/quire' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>我要办</el-breadcrumb-item>
          <el-breadcrumb-item>事项查询</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <!-- 面包屑结束-->
    <div class="selectivity">
      <div class="select-all">
        <div class="serve-item">
          <span class="text">按服务对象：</span>
          <div class="serve-item-input">
             <el-radio-group v-model="affairNum" @change='radioChange'>
                  <el-radio-button v-for="item in serveArr" :label="item">{{item}}</el-radio-button>
             </el-radio-group>
          </div>
        </div>
        <div class="incident-item">
          <span class="text">按事项性质：</span>
          <div class="incident-item-input">
            <el-checkbox-button v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox-button>
            <el-checkbox-group v-model="affairNature" @change="handleCheckedCitiesChange">
              <el-checkbox-button class="incidentBtn" v-for="(item,index) in incidentArr"
            						:key="index"
                        :label="item"
            						>{{item}}</el-checkbox-button>
            </el-checkbox-group>
          </div>
        </div>
        <div class="business-item">
          <span class="text">按业务：</span>
          <div class="business-item-input">
              <el-checkbox-button v-model="checkAlls" @change="handleCheckAllChanges">全选</el-checkbox-button>
              <el-checkbox-group v-model="serverBusiness" @change="handleCheckedCitiesChanges">
                <el-checkbox-button class="checkboxbtn" v-for="(item,index) in businessArr"
              						:key="index"
                          :label="item"
              						>{{item}}</el-checkbox-button>
              </el-checkbox-group>
          </div>
        </div>
        <div class="haveEnter">
          <span class="text">您已选择：</span>
           <div class="haveEnter-Btn">
              <span v-show="affairNum!='全部'">{{affairNum}}
                 <img @click="deletes1(item)" src="../../../static/print/remove.png" alt=""/>
              </span>
              <span v-for="(item,index) in affairNature" :key="index" >{{item}}
              <img @click="deletes2(item,index)" src="../../../static/print/remove.png" alt="">
              </span>
              <span v-for="(item,index) in serverBusiness" :key="index">{{item}}
              <img @click="deletes3(item,index)" src="../../../static/print/remove.png" alt="">
              </span>
           </div>
          <span class="clier" @click="clier">清空条件</span>
        </div>
      </div>
    </div>
    <!--    切换标签结束-->
    <div class="fliter-list">
      <div class="fliter-all">
        <span class="seek">搜索结果</span>
        <span class="computer">共{{total}}条</span>
        <el-input v-model="inputEvent" class="input"  placeholder="请输入内容">
          <el-button type="danger" @click="Changehandle"  class="fliter-btn" slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </div>
    <!--    搜索条件结束-->
    <div class="condition">
      <Condition :listParams="params" :total="total" :conditionList="dataList"  :getTableData="getEventQuery"></Condition>
    </div>
    <!--    分页跳转完结-->
    <div class="floor">
      <div class="floor-item">
        <div class="left">
          <P class="sponsor">主办：中华人民共和国海事局</P> <a href="#" class="about">关于我们</a> <a href="#">联系我们</a>
          <br>
          <span class="put">备案号：京ICP备xxxxx号</span>
          <img class="img" src="../../../static/print/jing.png" alt="">
          <span class="put-i">京公网安备 xxxxxxx号</span>
          <span>政府网站识别码：xxxxxxx</span>
        </div>
        <div class="middle">
          <p class="text">中华人民共和国海事局微信公众号</p>
          <p class="textVx"> 中华人民共和国海事局微信小程序</p>
        </div>
        <div class="avatar">
          <img class="avatar-one" src="../../../static/print/avatar.png" alt="">
          <img class="avatar-tow" src="../../../static/print/avatar-tow.png" alt="">
        </div>
      </div>

    </div>
    <!--    底部玩成-->
  </div>
</template>

<script>
  import Headers from './conponents/header'
  import RemoveBtn from './conponents/removebtn'
  import Condition from './conponents/condition'
  import NavigationHot from './conponents/navigationHot'
  import {EventQueryList} from '@/api/admin/user'
  import popup from  './conponents/popup'
  export default {
    name: 'index',
    components: {
      Headers,
      RemoveBtn,
      Condition,
      NavigationHot,
      popup
    },
    data() {
      return {
        isLegal: false,
        isShow: false,
        isHot: false,
        idx:false,
        // 请求路径数组面包屑导航
        pathListArr:[],
        checkedNames: [],
        indexNumber:3,
        incidentNum: 4,
        businessNUm: 5,
        radioNames:[],
        // 模糊胡检索功能
        inputEvent: '',
        // 请求返回值
        dataList:[],
        total:0,
        Goinput: '',
        checkAll:true,
        checkAlls:true,
        currentPage3: 4,
        //服务对象选中项
        affairNum:'全部',
        // 业务选中项
        serverBusiness:[],
        // 事项选中项
        affairNature:[],
        // 服务对象选项数组
        serveArr:['全部','个人','法人',],
        // 性质选项数组
        incidentArr: ['行政许可','行政确认','行政备案','其他'],
        // 业务选项数组
        businessArr: ['通航管理','船舶管理','船员管理','危防管理','安全管理','船检管理','航标管理'],
        //请求参数
        params:{
          size: 10,
          affairTypeArray:'',
          serveUser:'',
          affairName:'',
          serveBusinessArray:'',
          current:1,
        },
        // 分页参数
        pagination:{
          current:1,
          size: 5,
          total:0
        }
      }
    },
    methods: {
      // 性质全选按钮
      handleCheckAllChange(val) {
        this.affairNature = [];
        this.checkAll = true;
        this.params.affairTypeArray = '';
        this.getEventQuery();
      },
      // 服务对象单选
      radioChange(val){
        if(val == '个人'){
          this.params.serveUser = 1;
        } else if(val == '法人'){
          this.params.serveUser = 2;
        }else{
          this.params.serveUser = '';
        }
        this.getEventQuery();
      },
      // 服务对象取消选中
      deletes1(){
        this.affairNum = '全部';
        this.params.serveUser = '';
        this.getEventQuery();
      },
      // 性质所有条件列表删除
      deletes2(name,index){
        this.affairNature.splice(index,1);
        if(this.affairNature.length == 0){
          this.checkAll = true;
          this.params.affairTypeArray = '';
        }else{
          var arr = [];
          this.affairNature.forEach((v,i) => {
           if(v=='行政许可'){
             arr.push(1);
           }else if(v=='行政确认'){
             arr.push(2);
           }else if(v=='行政备案'){
             arr.push(3);
           }else if(v=='其他'){
             arr.push(4);
           }
          });
          this.params.affairTypeArray= arr.join(",");
        }
        this.getEventQuery();
      },
      // 业务所有条件列表删除
      deletes3(name,index){
        this.serverBusiness.splice(index,1);
        if(this.serverBusiness.length == 0){
          this.checkAlls = true;
           this.params.serveBusinessArray = '';
        }else{
          var arr = [];
          this.serverBusiness.forEach((v,i) => {
            if(v=='通航管理'){
              arr.push(1);
            }else if(v=='船舶管理'){
              arr.push(2);
            }else if(v=='船员管理'){
              arr.push(3);
            }else if(v=='危防管理'){
              arr.push(4);
            }else if(v=='安全管理'){
              arr.push(5);
            }else if(v=='船检管理'){
              arr.push(6);
            }else if(v=='航标管理'){
              arr.push(7);
            }
          });
          this.params.serveBusinessArray= arr.join(",");
        }
         this.getEventQuery();
      },
      //性质除全部
      handleCheckedCitiesChange(obj) {
        this.checkAll = false;
        this.affairNature = obj;
        var arr = []
        if(obj.length == 0){
           this.checkAll = true;
           this.params.affairTypeArray = '';
        }else{
          obj.forEach((v,i) => {
            if(v=='行政许可'){
              arr.push(1);
            }else if(v=='行政确认'){
              arr.push(2);
            }else if(v=='行政备案'){
              arr.push(3);
            }else if(v=='其他'){
              arr.push(4);
            }
          });
          this.params.affairTypeArray= arr.join(",");
        }
        this.getEventQuery();
      },
      // 业务全选按钮
      handleCheckAllChanges(val) {
        this.checkAlls = true;
        this.serverBusiness = [];
        this.params.serveBusinessArray = '';
        this.getEventQuery();
      },
      // 业务除全部
      handleCheckedCitiesChanges(obj) {
        this.checkAlls = false;
        this.serverBusiness = obj;
        var arr = [];
        if(obj.length == 0){
           this.checkAlls = true;
           this.params.serveBusinessArray ='';
        }else{
          obj.forEach((v, i) => {
             if(v=='通航管理'){
               arr.push(1);
             }else if(v=='船舶管理'){
               arr.push(2);
             }else if(v=='船员管理'){
               arr.push(3);
             }else if(v=='危防管理'){
               arr.push(4);
             }else if(v=='安全管理'){
               arr.push(5);
             }else if(v=='船检管理'){
               arr.push(6);
             }else if(v=='航标管理'){
               arr.push(7);
             }
          })
          this.params.serveBusinessArray= arr.join(",");
        }
        this.getEventQuery();
      },
      legalenter() {
        //法人小图标进入
        this.isLegal = true
        this.isHot = true
      },
      legalleave(){
        this.isLegal = false;
        this.isHot = false;
      },
      select(index) {
        this.indexNumber = index;
      },
      enter() {
        this.isShow = true
        this.isHot = true
      },
      leave(){
        this.isShow = false
        this.isHot = false
      },
      hotEnter() {
        this.isHot = true
      },
      hotLeavet(){
        this.isHot = false
      },
      handleSelectionChange(val){
        console.log(val,'11');
      },
      handleIndexChange(val){
        console.log(val,'22');
      },
      handleSizeChange(val) {
         console.log(val,'33');
        // console.log(`每页 ${val} 条`);
      },
      // 重置所有选项
      clier() {
        this.affairNum = '全部'
        this.checkAll = true;
        this.checkAlls = true;
        this.affairNature = [];
        this.serverBusiness = [];
        this.params = {
          size: 10,
          affairTypeArray:'',
          serveUser:'',
          affairName:'',
          serveBusinessArray:'',
          current:1,
        }
        this.getEventQuery();
      },
      remove(arrOne,arrTow){
       // 点击全部按钮删除对应的数组
        for (let i=0; i<arrOne.length; i++){
          for(let j =0; j<arrTow.length; j++){
            if(arrOne[i] ===arrTow[j]){
              this.checkedNames.splice( this.checkedNames.indexOf(this.checkedNames[i]), 1)
            }
          }
        }
      },
      //模糊检索功能
      Changehandle() {
        this.params.affairName = this.inputEvent
        this.getEventQuery()
      },
      // 进入当前页后先查询是否有query的默认传参
      getRoter(){
        // 入口进来的各项index先存一下
        const affairNumber = this.$route.query.affairType  //事项性质index
        const serveBusinessNumber = this.$route.query.serveBusiness //业务index
        const serveNumber = this.$route.query.serveUser //服务对象
        // 通过从首页的传参类型进行判定
        if(serveBusinessNumber){
          //按业务类型
          this.checkAlls = false;
          this.params.serveBusinessArray = serveBusinessNumber;
          if(serveBusinessNumber == 1){
            this.serverBusiness.push('通航管理');
          } else if(serveBusinessNumber == 2){
            this.serverBusiness.push('船舶管理');
          }else if(serveBusinessNumber == 3){
            this.serverBusiness.push('船员管理');
          }else if(serveBusinessNumber == 4){
            this.serverBusiness.push('危防管理');
          }else if(serveBusinessNumber == 5){
            this.serverBusiness.push('安全管理');
          }else if(serveBusinessNumber == 6){
            this.serverBusiness.push('船检管理');
          }else if(serveBusinessNumber == 7){
            this.serverBusiness.push('航标管理');
          }else if(serveBusinessNumber == 0){
            this.serverBusiness = [];
          }
        }
        // 性质
        if (affairNumber) {
          // 按事件事项类型
          this.checkAll = false;
          this.params.affairTypeArray = affairNumber;
          if(affairNumber == 1){
            this.affairNature.push('行政许可');
          } else if(affairNumber == 2){
             this.affairNature.push('行政确认');
          }else if(affairNumber == 3){
             this.affairNature.push('行政备案');
          }else if(affairNumber == 4){
             this.affairNature.push('其他');
          }else if(affairNumber == 0){
            this.affairNature = [];
          }
        }
        // 对象
        if(serveNumber){
          // 按服务对象类型
          this.params.serveUser = serveNumber
          if(serveNumber == 1){
            this.affairNum = '个人';
          } else if(serveNumber == 2){
            this.affairNum = '法人';
          }else if(serveNumber == 0){
            this.affairNum = '全部';
          }
        }
      },
      // 请求数据
      getEventQuery(){
        EventQueryList(this.params).then((res) => {
          this.dataList= res.data.data.records;
          this.total = res.data.data.total;
        })
      }
    },
    created(){
      this.getRoter();
      this.getEventQuery();
    },

  }
</script>

<style scoped="scoped" lang="scss">
  @import 'sass/selectivity';
  @import 'sass/skip';
  @import 'sass/floor';

  .container {
    .active {
      background: #1A53A3;
    }
    /deep/ .el-radio-button__inner{
      border: none;
    }
    /deep/ .el-checkbox-button__inner{
      border: none;
    }
    /deep/ .el-radio-button:first-child .el-radio-button__inner{
      border: 0;
      border-radius: 0;
    }
    /deep/ .el-checkbox-button:first-child .el-checkbox-button__inner{
      border: 0;
      border-radius: 0;
    }
    /deep/ .el-checkbox-button.is-checked .el-checkbox-button__inner{
      background-color: #004098;
      border-color: #004098;
    }
    /deep/ .el-radio-button__orig-radio:checked+.el-radio-button__inner{
      background-color: #004098;
      border-color: #004098;
    }
    /deep/ .el-radio-button:last-child .el-radio-button__inner{
      border-radius: 0;
    }
    .clier{
      cursor: pointer;
    }
    .haveEnter-Btn{
      width:830px;
      span{
        display: inline-block;
        height: 30px;
        padding: 0 10px;
        border: 1px solid #999999;
        text-align: center;
        line-height: 30px;
        margin-bottom: 10px;
        margin-right: 10px;
        img{
          margin-left: 10px;
          cursor: pointer;
        }
      }
    }
    .el-checkbox-group{
      display: inline-block;;
      position: relative;
      top:-4px;
    }
    .navigation {
      height: 42px;
      background: #004098;
      width: 100%;
      box-sizing: border-box;
      position: relative;
      .hover {
        position: absolute;
        left: 20%;
        margin-top: 20px;
        background: #fff;
        /*margin: auto;*/
        z-index: 9999;
      }
      .navlist:after {
        display: block;
        content: '';
        clear: both
      }

      .navlist {
        margin: auto;
        width: 1005px;
        position: relative;
        .home {
          float: left;
          width: 97px;
          height: 42px;
          line-height: 42px;
          text-align: center;
          font-size: 16px;
          color: #fff;
        }
        .work {
          float: left;
          width: 20%;
          height: 42px;
          line-height: 42px;
          text-align: center;
          color: #fff;
          .show-img {
            height: 66px;
            display: inline-block;
          }
          .text {
            width: 97px;
            height: 42px;
            display: inline-block;
            &:hover{
              background: #1A53A3;
            }
          }
        }
      }
    }
    .bread {
      width: 100%;
      .bread-nva {
        width: 1100px;
        margin: auto;
        margin-top: 22px;

        .img {
          width: 10px;
          height: 12px;

          margin-right: 10px;
        }

        .breads-text {
          display: inline-block;
          font-size: 12px;
          color: #999999;
        }
      }

    }
    .fliter-list {
      margin-top: 28px;
      margin-bottom: 24px;
      width: 100%;

      .fliter-all {
        margin: auto;
        width: 1100px;

        .seek {
          margin-right: 10px;
          width: 76px;
          height: 18px;
          font-size: 18px;

          font-weight: bold;
          color: rgba(51, 51, 51, 1);
          line-height: 36px;
        }

        .computer {
          width: 48px;
          height: 15px;
          font-size: 14px;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
          line-height: 36px;
          margin-right: 19px;
        }

        .input {
          /deep/ .el-input-group__append {
            background: red;
          }
          width: 268px;
        }
      }
    }
    .checkbox-input {
      display: inline-block;
    }
    .fliter-btn{
      background: #E81324!important;
      color: #fff!important;
    }
  }
</style>
