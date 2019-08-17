<template>
  <div class="materials">
    <h2 class="title">
      <span class="title-text">我的材料</span>
      <div class="add-materials">添加</div>
      <div class="title-search">
        <input type="text"  value="请输入材料名称" class="search-box">
        <span class="search-icon"></span>
      </div>

    </h2>

    <!--表格-->
    <div class="table">
      <CommonTable :tableHeader="tableHeader" :tableData="tableData" :options="options" :getTableData="getTableData" :pagination="pagination"
                   @row-click="handleRowClick" @selection-change="handleSelectionChange" />
    </div>


  </div>
</template>
<script>
  import {mapGetters} from "vuex";
  import CommonTable from "@/components/table/index";
  export default {
    name: "materials",
    components: {
      CommonTable
    },
    data() {
      return {
        // 表头
        tableHeader: [
          {
            prop: 'name',
            label: '材料名称',
            width:610
          },
          {
            button: true,
            label: '操作',
            width:186,
            group: [{
              // you can props => type size icon disabled plain
              name: '处理',
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
//          loading: true, // 是否显示表格动画
          initTable: true, // 是否一挂载就加载数据
        }
      };
    },
    watch: {},
    created() {
    },
    mounted() {
    },
    props: [],
    methods: {
      // 控制点击事件的冒泡... 如果点击事件不影响你的点击行事件，可以不传
      handleClick(e, row) {
        e.cancelBubble = true // 停止冒泡，否则会触发 row-click
        console.log(row)
      },
      //请求获取数据
      getTableData() {
//        this.options.loading = true
//        axios.post("https://www.easy-mock.com/mock/5d49503e30840955741813cb/example/home/backlog?page="+this.pagination.page+"&pageSize="+this.pagination.pageSize+"",
//        ).then(res => {
//          const { list, total } = res.data.data
//          this.tableData = list
//          this.pagination.total = total
//          this.options.loading = false
//        }).catch((error) => {
//          console.log(error)
//          this.options.loading = false
//        })
      },
      // 点击行的事件，同理可以绑定其他事件
      handleRowClick(row, event, column) {
        console.log('click row:', row, event, column)
      },
      // 复选框选中 不需要则不用做操作
      handleSelectionChange(selection) {
        console.log(selection)
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
  .materials{
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
      .title-search{
        float: right;
        margin:15px 0 0 0;
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
      width:856px;
    }

  }
</style>
