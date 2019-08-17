<template>
  <div class="squere">
    <div class="sea">
      <div class="sea-left">
        <span class="text">直属海事局：</span>
      </div>
      <div class="sea-right">
        <ul class="sea-item">
          <li class="item-list">上海海事局</li>
          <li class="item-list">天津海事局</li>
          <li class="item-list">辽宁海事局</li>
          <li class="item-list">河北海事局</li>
          <li class="item-list">山东海事局</li>
          <li class="item-list">江苏海事局</li>
          <li class="item-list">浙江海事局</li>
          <li class="item-list">广东海事局</li>
          <li class="item-list">广西海事局</li>
          <li class="item-list">长江海事局</li>
          <li class="item-list">黑龙江海事局 </li>
          <li class="item-list">深圳海事局</li>
          <li class="item-list">连云港海事局</li>
        </ul>
      </div>
    </div>
    <div class="branch">
      <div class="branch-left">
        <span class="text">分支局：</span>
      </div>
      <div class="branch-right">
        <ul class="branch-item">
          <li class="item-list">上海海事局</li>
          <li class="item-list">天津海事局</li>
          <li class="item-list">辽宁海事局</li>
          <li class="item-list">河北海事局</li>
          <li class="item-list">山东海事局</li>
          <li class="item-list">江苏海事局</li>
          <li class="item-list">浙江海事局</li>
        </ul>
      </div>
    </div>
    <div class="work">
      <div class="work-left">
        <span class="text">办事处：</span>
      </div>
      <div class="work-right">
        <ul class="work-item">
          <li class="item-list">上海海事局</li>
          <li class="item-list">天津海事局</li>
          <li class="item-list">辽宁海事局</li>
          <li class="item-list">河北海事局</li>
          <li class="item-list">山东海事局</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped lang="scss">
  * {
    padding: 0;
    margin: 0;
  }
  li {
    list-style:none;
  }
  li:hover {
    color:#fff !important;
    background: #004098;
  }
 .squere{
   z-index:3;
    position: absolute;
   top:46px;
   left: 20%;
   width: 1033px;
   background-image: url("../../../../../static/print/square.png");
   background-size: 1033px 258px;
   box-sizing: border-box;
   background-repeat:no-repeat;
   padding: 41px;
   .sea:after {
     display: block;
     content: '';
     clear:both
   }
   .sea {
     border-bottom: 1px solid #D9D9D9;
     padding-bottom: 10px;
     box-sizing: border-box;
     .sea-left {
       padding-top: 5px;
       float: left;
       .text {
         width: 85px;
         height: 15px;
         font-size: 14px;
         color:#666666;
       }
     }
     .sea-right {
        float: right;
       width: 805px;
       .sea-item {
         .item-list {
           display: inline-block;
           height: 32px;
           font-size: 14px;
           color:#666666;
           margin-right: 15px;
           line-height: 32px;
         }
       }
     }
   }
   .work:after {
     display: block;
     content: '';
     clear:both
   }
   .work {
     margin-top: 10px;
     border-bottom: 1px solid #D9D9D9;
     padding-bottom: 10px;
     .work-left {
       padding-top: 5px;
       float: left;
       width: 85px;
       text-align: right;
       .text {
         height: 15px;
         font-size: 14px;
         color:#666666;
       }
     }
     .work-right {
       float: right;
       width: 805px;
       .work-item {
         .item-list {
           display: inline-block;
           height: 32px;
           margin-right: 15px;
           font-size: 14px;
           color:#666666;
           line-height: 32px;
         }
       }
     }
   }
   .branch:after {
     display: block;
     content: '';
     clear:both
   }
   .branch{
     margin-top: 10px;
     border-bottom: 1px solid #D9D9D9;
     padding-bottom: 10px;
     .branch-left {
       padding-top: 5px;
       float: left;
       width: 85px;
       text-align: right;
       .text {
         height: 15px;
         font-size: 14px;
         color:#666666;
       }
     }
     .branch-right {
       float: right;
       width: 805px;
       .branch-item {
         .item-list {
           display: inline-block;
           height: 32px;
           margin-right: 15px;
           font-size: 14px;
           color:#666666;
           line-height: 32px;
         }
       }
     }
   }

 }
</style>
