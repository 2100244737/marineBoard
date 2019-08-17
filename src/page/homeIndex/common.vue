<template>
	<div>
		<div class="common">
			<ul>
				<li v-for="(common,index) in commons" :key="index">
					<p><img :src="common.commonImg"/></p>
					<p>{{common.commommsg}}</p>
				</li>
			</ul>
		</div>
		
	</div>
</template>

<script>
	export default{
		data () {
			return {
				commons:[
				   {
				   	 commonImg:require('../../../static/img/common/appoin.png'),
				   	 commommsg:'我要约'
				   },
				   {
				   	 commonImg:require('../../../static/img/common/do.png'),
				   	 commommsg:'我要办'
				   },
				   {
				   	 commonImg:require('../../../static/img/common/check.png'),
				   	 commommsg:'我要查'
				   },
				   {
				   	 commonImg:require('../../../static/img/common/review.png'),
				   	 commommsg:'我要评'
				   },
				    {
				   	 commonImg:require('../../../static/img/common/wen.png'),
				   	 commommsg:'我要问'
				   }
				]
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
.common ul{
	margin: 0;
	padding: 0;
}
.common ul li{
	list-style: none;
	width:70px;
	height: 70px;
	text-align: center;
	padding-top: 13px;
	cursor: pointer;
	background: #fff;
	box-sizing: border-box;
}
.common ul li:hover:hover{
	color: #fff;
	background:#E60012;
}
</style>