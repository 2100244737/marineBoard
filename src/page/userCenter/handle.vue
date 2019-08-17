<template>
  <div class="handle">
    <h2 class="title">
      <span class="title-text">我的办件</span>
      <div class="title-search">
        <input type="text"  value="请输入预约事项名称" class="search-box">
        <span class="search-icon"></span>
      </div>

    </h2>
    <div class="table">
          <CommonTable :tableHeader="tableHeader" :tableData="tableData" :options="options" :getTableData="getTableData" :pagination="pagination"
                       @row-click="handleRowClick" @selection-change="handleSelectionChange" />
    </div>

  </div>
</template>
<script>
  import {mapGetters} from "vuex";
  import CommonTable from "@/components/table/index";
  import {getHandleData} from '@/api/admin/user.js';
  export default {
    name: "handle",
    components: {
      CommonTable
    },
    data() {
      return {
        // 表头
        tableHeader: [
          {
            prop: 'applyNum',
            label: '申请编号',
//            width:151
          },
          {
            prop: 'affairName',
            width:220,
            label: '事项名称'
          },
          {
            prop: 'applyDepartment',
//            width:106,
            label: '受理机构'
          },
          {
            prop: 'applyDate',
//            width:106,
            label: '申请时间'
          },
          {
            prop: 'applyStatus',
//            width:78,
            label: '办件状态'
          },

          /*按钮的那个
          {
            button: false,
            label: '操作',
            // width:136,
            group: [{
              // you can props => type size icon disabled plain
              name: '处理',
              type: 'primary',
              plain: true,
              onClick: (row, index) => { // 箭头函数写法的 this 代表 Vue 实例
                console.log(row, index)
              }
            }, ]
          },*/
          {
            state:true,
            label: '操作',
//            width:136,
            group: [{
              // you can props => type size icon disabled plain
              name1: '取消',
              name2: '修改',
              name3: '变更',
              name4: '评价',
              type: 'primary',
              plain: true,
              onClick: (row, index) => { // 箭头函数写法的 this 代表 Vue 实例
                console.log(row, index)
              }
            }, ]
          }

        ],
        // 表格内容
        tableData: [],
        // 分页器
        pagination: {
          total: 0,
          page: 1,
          pageSize: 10
        },
        //表格控制项
        options: {
          cellStyle:function (row, column, rowIndex, columnIndex) {
            if(row.column.label === "状态"){
              return "color:#E60012"
            }
          },
          height:380,
          //maxHeight:500,
          border:true,
          mutiSelect: false, //是否显示多选
          index: true, // 是否显示序号
          // loading: true, // 是否显示表格动画
          initTable: true, // 是否一挂载就加载数据
        }
      };
    },
    watch: {},
    created() {
      this.getData( );
    },
    mounted() {
    },
    props: [],
    methods: {
      // 获取列表数据
      getData(){
         const params={
           token:1214
         }
        getHandleData(params).then((res)=>{
           console.log(res.data.data)
          // console.log(res.data.data[0].content)
          this.tableData=res.data.data.records
        })
      },
      //行事件：点击行跳转到详情页
      handleRowClick(r,e,column){
        //r:行的数据，e:点击事件，column:列的数据以及样式
        this.$router.push({
          path: '/test',
          query: {
            windowApplyId: r.windowApplyId,
            modeltype: r.modeltype
          }
        })
      }
    }
  };
</script>


<style lang="scss" scoped>

  h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
    font-size:16px;
    font-weight: normal;
  }
  .handle{
    width:100%;
    .title{
      width: 100%;
      height:64px;
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
      .title-search{
        float: right;
        margin:17px 22px 0 0;
        width:202px;
        height:30px;
        .search-box{
          float: left;
          /*有padding*/
          width: 146px;
          height:28px;
          background:rgba(255,255,255,1);
          border:1px solid rgba(153,153,153,1);
          border-right:none;
          padding:0 0 0 10px;

          font-size:12px;
          font-family:MicrosoftYaHei;
          font-weight:400;
          color:rgba(153,153,153,1);
        }
        .search-icon{
          float: left;
          display: inline-block;
          width:44px;
          height:30px;
          background:rgba(230,0,18,1) url(../../../public/img/user-center/fangdajing.png) no-repeat center center;
        }
      }
    }

    .table{
      width:859px;
    }

    /*.el-table{*/
    /*margin-left: 29px;*/
    /*font-size:17px;*/
    /*font-family:MicrosoftYaHei;*/
    /*font-weight:400 ;*/

    /*.el-table-column{*/
    /*height:59px;*/
    /*}*/
    /*}*/
    /*.el-table thead{*/
    /*color:#000 !important;*/
    /*}*/



  }

  /deep/ .el-table{
    border:1px solid rgba(209,212,221,1);
  }

  /deep/ .el-table-column{
    border:1px solid rgba(209,212,221,1);
  }
  /*/deep/ .el-table th.is-leaf {*/
    /*border:1px solid rgba(209,212,221,1);*/
  /*}*/

  /deep/ .el-table--border th{
    border-bottom: 1px solid rgba(209,212,221,1);
    border-right: 1px solid rgba(209,212,221,1);
  }


  /deep/ .el-table td,.building-top .el-table th.is-leaf {
    border-bottom: 1px solid rgba(209,212,221,1);
  }
  /deep/ .el-table__header{
    border-collapse: separate;
  }
  /deep/ .el-table--border td{
    border-right: 1px solid rgba(209,212,221,1);
  }
</style>
