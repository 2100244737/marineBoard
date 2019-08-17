<template>
  <div class="test">
    <h2>
      {{this.id}}{{this.type}}
    </h2>
  </div>
</template>
<script>
  import {mapGetters} from "vuex";

  export default {
    name: "test",
    components: {

    },
    data() {
      return {
        id:"",
        type:""
      };
    },
    watch: {},
    created() {
      console.log(5555555,this.$route.query)
      this.id=this.$route.query.windowApplyId
      this.type=this.$route.query.modeltype

    },
    mounted() {
    },
    props: [],
    methods: {
    }
  };
</script>


<style lang="scss" scoped>

</style>
