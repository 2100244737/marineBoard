<template>
<div class="common-table">
  <el-table
      v-loading="options.loading"
      :height='options.height'
      :data="tableData"
      :max-height="options.maxHeight"
      :stripe="options.stripe"
      :border="options.border"
      :cell-style='options.cellStyle'
      @row-click="handleRowClick"
      @selection-change="handleSelectionChange"
      header-row-class-name="table-header-row">
      <!-- 复选框 -->
      <el-table-column v-if="options.mutiSelect" type="selection" align="center"></el-table-column>
      <!-- index序号 -->
      <el-table-column v-if="options.index" width="50" label="序号" type="index" align="center" :index="indexMethod"></el-table-column>
      <!--数据列表-->
      <template v-for="(column, index) in tableHeader">
        <el-table-column
          :key="index"
          :prop="column.prop"
          :label="column.label"
          :show-overflow-tooltip="true"
          :align="column.align||'center'"
          :width="column.width"
          :fixed="column.fixed">
          <template slot-scope="scope">
            <template>
              {{scope.row[column.prop]}}
            </template>
            <!-- render button -->
            <template v-if="column.button">
              <template v-for="(btn, i) in column.group">
                <el-button
                  :key="i"
                  :type="btn.type" :size="btn.size || 'mini'" :icon="btn.icon" :disabled="btn.disabled" :plain="btn.plain"
                   @click.stop="btn.onClick(scope.row, scope.$index)"
                  >{{btn.name}}</el-button>
              </template>
            </template>
            <!-- slot 可配置其他常用项 -->
            <template v-if="column.state">
              <template v-for="(btn, i) in column.group">
                <el-button
                  :key="i"
                  type="text"
                  @click.stop="btn.onClick(scope.row, scope.$index)"
                >{{btn.name1}}</el-button>
                <el-button
                  :key="i"
                  type="text"
                  @click.stop="btn.onClick(scope.row, scope.$index)"
                >{{btn.name2}}</el-button>
                <el-button
                  :key="i"
                  type="text"
                  @click.stop="btn.onClick(scope.row, scope.$index)"
                >{{btn.name3}}</el-button>
                <el-button
                  :key="i"
                  type="text"
                  @click.stop="btn.onClick(scope.row, scope.$index)"
                >{{btn.name4}}</el-button>

              </template>
            </template>
          </template>

        </el-table-column>
      </template>
    </el-table>
     <!-- 分页配置 -->
    <el-pagination
        v-if="pagination"
        :total="pagination.total"
        :page-sizes="[10, 20, 50]"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleIndexChange"
        prev-text="上一页"
        next-text="下一页"
        style="margin-top: 20px;text-align: center"
    ></el-pagination>

</div>
</template>

<script>
  import {mapGetters} from 'vuex';
  export default {
    name: 'Table',
    props:{
      tableData: Array,             //表格数据
      options: Object,              //表格参数控制 maxHeight、stripe 等
      tableHeader: Array,           //表头参数
      getTableData: Function,       //请求数据的函数
      pagination: Object            //分页，不传则不显示
    },
    created() {
      // 传入的options覆盖默认设置
      this.$parent.options = Object.assign({
          //maxHeight: 500, //最大高度
          stripe: true,   //是否为斑马纹
          border: true    //是否带有纵向边框
      }, this.options)
      this.options.initTable && this.getTableData()
    },
    methods: {
      // 切换每页显示的数量
      handleSizeChange(size) {
        this.pagination.pageSize = size
        this.getTableData()
      },
      // index递加
      indexMethod(index){
        return (this.pagination.page-1)*this.pagination.pageSize+index+1;
      },
      // 切换页码
      handleIndexChange(current) {
        this.pagination.page = current
        this.getTableData()
      },
      handleSelectionChange(selection) {
        this.$emit('selection-change', selection)
      },
      // 点击列表的事件，传给了父组件，父组件直接用就可以（）
      handleRowClick(row, event, column) {
        this.$emit('row-click', row, event, column)
      },
    }
  }
</script>

<style scoped="scoped" lang="scss">
  .common-table{
     /*/deep/ .el-table .cell{*/
       /*white-space:nowrap;*/
       /*overflow:hidden;*/
       /*text-overflow:ellipsis;*/

    /*}*/
     /*/deep/ .el-pagination{*/
      /*font-weight: normal;*/
    /*}*/
     /*/deep/  .el-table thead{*/
       /*font-size:17px;*/
       /*font-family:MicrosoftYaHei;*/
       /*font-weight:400;*/
       /*color:rgba(0,0,0,1);*/
       /*height: 59px;*/

    /*}*/
     /*/deep/  .el-table{*/
      /*color: #4D4D4D;*/
      /*!*border:1px solid rgba(209,212,221,1)*!*/
    /*}*/
     /*/deep/ .el-pagination__total{*/
      /*color: #4D4D4D;*/

    /*}*/
     /*/deep/ .el-pagination{*/
       /*color: #4D4D4D;*/
    /*}*/
    /*/deep/ .el-table th, .el-table tr{*/
      /*background: #E4EAF8;*/
    /*}*/




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
    /deep/ .el-table th, .el-table tr{
    background: #E4EAF8;
    }
  }
</style>
