<template>
  <div class="conditions-list">
    <div class="conditions" v-for="item in conditionList" :key="item.affairId">
      <div class="left">
          <img class="img" src="../../../../../static/print/biao.png" alt="">
          <span class="text">{{item.affairName}}</span>
        </div>
      <div class="right">
        <el-button  class="btn1">办事指南</el-button>
        <el-button v-if="btnShow" class="btn2"  @click="hahdleShow(item.parentId,item.modelType)">在线办理</el-button>
        <el-button v-else class="btn3" >在线办理</el-button>
      </div>
    </div>
    <el-pagination
        :total="total"
        :page-sizes="[5, 10, 20]"
        :current-page="listParams.current"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleIndexChange"
        prev-text="上一页"
        next-text="下一页"
        style="margin-top: 15px;text-align: center"
    ></el-pagination>
    <!--    选择具体事项 弹框-->
        <div class="popup">
          <el-dialog
            title="选择具体事项"
            top="30vh"
            :visible.sync="dialogVisible"
            >
            <div class="popup-content">
              <span :class="item.length=1?single:details" v-for="(item,index) in resData" :key="index" @click="notice(item.modelType,item.affairNum)">{{item.affairName}}</span>
            </div>
          </el-dialog>
        </div>
    <!--    选择具体事项 弹框 结束-->
    <!--    申请需知弹框-->
        <div class="lookUp">
          <el-dialog title="申请人须知" top="25vh" :visible.sync="dialogTableVisible"  :before-close="handleClose">
              <div class="lookUp-content">
                一、本申请页面依据《中华人民共和国水上水下活动通航安全管理规定》制作，是申请人履行
                正当手续的法律依据。<br>
                二、申请人必须遵守《中华人民共和国水上水下活动通航安全管理规定》并按规定要求办理申
                请手续。<br>
                三、填写说明：<br>
                1、“作业程序”是作业者使用船舶、设施、设备和技术进行施工作业的方式、方法和步骤。<br>
                2、“应急的措施”是指作业者为防止发生污染和意外事故采取的措施以及一旦发生污染和意br
                外事故时采取的应急措施。<br>
                3、“相关部门”是指审批工程或施工作业项目所涉及的本主管机关以外的部门。<br>
                4、“设备”应选择最主要、最关键的填写。 <br>
                涉及吊装的应填报主要的吊索的尺寸和破断力；涉及拖航的应填报主拖缆的直径、长度和质地。<br>
                四、实施施工作业的单位、活动内容、水域发生变更，应当重新办理申请手续。<br>
              </div>
              <div class="btnBox">
                <el-button class="btn"  @click="handleEnter">确认</el-button>
              </div>
          </el-dialog>
        </div>
    <!--    申请需知弹框结束-->
  </div>
</template>

<script>
  import {EventQueryList} from '@/api/admin/user'
export default {
  name: 'index',
  props:{
    total:Number,
    conditionList:Array,          //列表数据
    getTableData: Function,       //请求数据的函数
    listParams: Object            //请求的参数 分页等
  },
  data() {
    return {
       btnShow: true,
       dialogVisible: false,
       resData:[],
       moudetype:1,
       single:'single',//单个子事项样式
       details:'details',//多个事项样式
       affairNum:'',
       parentmodelType:'',
       dialogTableVisible: false,
       params: {
         parentId: 1,
       }
    }
  },
  methods: {
     // 切换每页显示的数量
     handleSizeChange(size) {
       this.listParams.size = size
       this.getTableData()
     },
     // index递加
     indexMethod(index){
       return (this.listParams.current-1)*this.listParams.current+index+1;
     },
     // 切换页码
     handleIndexChange(current) {
       this.listParams.current = current
       this.getTableData()
     },
     handleSelectionChange(selection) {
       this.$emit('selection-change', selection)
     },
     // 点击在线办理赋值请求子列表
     hahdleShow(id,modelType) {
       this.params.parentId = id;
       this.parentmodelType = modelType;
       this.getChildren();
     },
     //获取子数列表
     getChildren() {
       EventQueryList(this.params).then((res) => {
          this.resData = res.data.data.records;
          // 不为空显示
          if (res.data.data.records.length != 0) {
            this.dialogVisible = true
           // 为空直接弹出确认须知框
          }
          else {
            this.dialogTableVisible = true
          }
          // this.dialogTableVisible = true
       })
     },
     // 对申请需知显示处理
     handleClose() {
     this.dialogTableVisible = false;
     this.dialogVisible = false;
     },
     handleEnter(id){
       this.dialogTableVisible = false;
       this.jump();
     },
     //子列表点击弹出须知弹框
     notice(moudetype,affairNum){
       this.moudetype = moudetype;
       this.affairNum = affairNum;
       this.dialogTableVisible = true;
     },
     // 进行路由的跳转
     jump() {
       this.$router.push({
         path: '/waterApply',
         query: {
           affairNum:this.affairNum,
           modelType: this.moudetype
         }
       })

     }
    },
}
</script>

<style scoped='scoped' lang="scss">
 .conditions-list {
   .conditions {
     width: 1100px;
     margin: auto;
     height:77px;
     box-sizing: border-box;
     margin-bottom: 10px;
     line-height: 77px;
     background:rgba(255,255,255,1);
     box-shadow:0 0 6px 0 rgba(0,64,152,0.08);
     position: relative;
     .left {
       display: inline-block;
       .img {
         position: absolute;
         top: 29px;
         left: 33px;
         width: 14px;
         height: 20px;
       }
       .text {
         width:319px;
         height:16px;
         font-size:16px;
         font-weight:400;
         color:rgba(51,51,51,1);
         margin-left: 54px;
       }
     }
     .right {
       display: inline-block;
       position: absolute;
       right: 33px;
       .btn1 {
         border: 1px solid  #004098;
         color:#004098;
       }
       .btn2 {
         background:#004098;
         color: #fff;
       }
       .btn3 {
         background:#999999;
         color: #fff;
       }
     }
   }
 }
 .popup {
   /deep/ .el-dialog {
     width: 742px;
     /deep/  .el-dialog__header {
       text-align: center;
       background: #E4EAF8;
       /deep/ .el-dialog__title {
         color:#004098;
       }
     }
     /deep/ .el-dialog__body {
       padding: 0;
     }
   }
   .popup-content {
     padding: 40px 100px;
     display: flex;
     justify-content: space-between;
     flex-wrap: wrap;
     align-items: center;
     .details:hover {
       background: #004098;
       color: #fff;
     }
     .details {
       width:240px;
       height:40px;
       cursor: pointer;
       margin-bottom: 10px;
       display: inline-block;
       text-align: center;
       line-height: 40px;
       background:rgba(228,234,248,1);
       border-radius:4px;
       font-weight:400;
       color:rgba(0,64,152,1);
       font-size: 14px;
     }
     .single{
       width:240px;
       height:40px;
       cursor: pointer;
       display: block;
       margin: 0 auto;
       margin-bottom: 10px;
       text-align: center;
       line-height: 40px;
       background:rgba(228,234,248,1);
       border-radius:4px;
       font-weight:400;
       color:rgba(0,64,152,1);
       font-size: 14px;
     }
   }
   .el-dialog {
     .el-dialog__header {
       width: 724px;
     }
     /deep/  .el-dialog__title {
       display: inline-block;
       margin-left: 30px;
     }
     /deep/ .el-dialog__body {
       padding: 30px 70px;
     }
   }
 }
 .lookUp {

   /deep/  .el-dialog {

     width: 760px;
     background: #E4EAF8;
     /deep/  .el-dialog__header {
       /deep/ .el-dialog__title {
         color:#004098;
         margin-left: 5px;
       }
     }
     /deep/ .el-dialog__body  {
       padding: 4px 30px;
     }
     .btnBox {
       text-align: center;
       padding-bottom: 40px;
       .btn {
         width: 240px;
         height: 40px;
         background: #004098;
         color: #fff;
       }
     }
   }
   .lookUp-content {
     padding: 24px 39px;
     background: #fff;
     font-size: 15px;
     color: #000;
     margin-bottom:30px;
   }
 }
</style>
