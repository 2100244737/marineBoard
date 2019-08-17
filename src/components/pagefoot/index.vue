<template>
  <div class="pagefoot">
    <div class="pagefoot-con bx">
      <ul class="aboutus">
        <li>
          <span>主办：中华人民共和国海事局</span>
          <a href="#">关于我们</a>
          <a href="#">联系我们</a>
        </li>
        <li>
          <span>备案号：京ICP备xxxxx号 </span>
          <span>京公网安备 xxxxxxx号</span>
          <span> 政府网站识别码：xxxxxxx</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default{
    name:"pagefoot",
    data(){

    },
    watch:{},
    created(){},
    mounted(){},
    props:[],
    methods:{

    }
  }
</script>

<style lang="scss" scoped>
  ul,li{
    list-style: none;
    padding: 0;
    margin: 0;
  }
  a{
    text-decoration: none;
  }
  .pagefoot{
    width:100%;
    height:154px;
    clear: both;
    background:#ccc;
    margin-top: 22px;
    .bx{
      width:1100px;
      margin:0 auto;
    }
    .pagefoot-con{
      .aboutus{
        width:605px;
        height:51px;
        font-size:14px;
        font-family:MicrosoftYaHei;
        font-weight:400;
        color:rgba(51,51,51,1);
      }
    }
  }
</style>
