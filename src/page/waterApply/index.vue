<template>
	<div class="waterC">
		<div class="waterApply">
			<div class="headecon"></div>
			<!--版心*-->
			<div class="banxin">
				<div class="applic">
					<el-breadcrumb separator-class="el-icon-arrow-right">
						<el-breadcrumb-item>当前位置</el-breadcrumb-item>
						<el-breadcrumb-item>首页</el-breadcrumb-item>
						<el-breadcrumb-item>我要办</el-breadcrumb-item>
						<el-breadcrumb-item>申请信息填报</el-breadcrumb-item>
					</el-breadcrumb>
				</div>
				<!--内容**-->
				<div class="content">
					<!--水上水下活动**-->
					<water-content v-if="showModelType"></water-content>
					<!--水上水下活动结束**-->
					<!--通航水域岸线安全使用申请-->
					<naviga-content v-if="navigeModelType"></naviga-content>
					<!--通航水域岸线安全使用申请结束-->
					<!--沿海水域**-->
					<coastal-content v-if="coastalModelType"></coastal-content>
					<!--沿海水域结束**-->
					<!--打捞**-->
					<salvage-content v-if="salvageModelType"></salvage-content>
					<!--打捞结束**-->
					<!--船舶**-->
					<chuanbo-content v-if="shipModelType"></chuanbo-content>
					<!--拖带**-->
					<towing-content v-if="shipingModelType"></towing-content>
					<!--内河**-->
					<iniand-content v-if='iniandModelType'></iniand-content>
				</div>
			</div>
		</div>
		<common-foot></common-foot>
	</div>
</template>
<script>
	import CommonFoot from '../homeIndex/footer'
	import waterContent from './components/water' //水上水下活动申请
	import navigaContent from './components/naviga' //通航水域岸线安全使用申请
	import coastalContent from './components/coastal' //沿海水域
	import salvageContent from './components/salvage' //打捞
	import chuanboContent from './components/shipinfo' //船舶    
	import towingContent from './components/towing' //  拖带**
    import iniandContent from './components/iniand' //	内河**
	export default {
		components: {
			CommonFoot,
			waterContent,
			navigaContent,
			coastalContent, //沿海水域
			salvageContent, //打捞
			chuanboContent, //船舶信息
			towingContent, //拖带
			iniandContent //内河
		},
		data() {
			return {
				modelType: '',
				showModelType: false, //水上水下
				navigeModelType: false, //通航水域岸线安全使用申请
				coastalModelType: false, //沿海水域
				salvageModelType: false,
				shipModelType: false, //船舶
				shipingModelType: false ,//拖带
				iniandModelType:false   //内河

			}

		},
		methods: {
			modelTypeXinxi() {
				this.modelType = this.$route.query.modelType;
				console.log(this.modelType)
				if(this.modelType == 'JTB15024-2') { //水上水下
					this.showModelType = true
				} else if(this.modelType == 'JTB15024-1') { //通航水域岸线安全使用申请
					this.navigeModelType = true
				} else if(this.modelType == 'JTB15006') { //沿海水域划定禁航区和安全作业区审批
					this.coastalModelType = true
				} else if(this.modelType == 'JTB15007') { //打捞
					this.salvageModelType = true
				} else if(this.modelType == 'JTB15028') { // 船舶进入
					this.shipModelType = true
				} else if(this.modelType == 'JTB15041-1'){ //海上拖带
                    this.shipingModelType=true
				}else if(this.modelType == 'JTB15041-2'){    //内河载运
					this.iniandModelType=true			
				}
			}
		},
		created() {
			this.modelTypeXinxi();

		}
	}
</script>
<style scoped="scoped" lang="scss">
	.waterC {
		* {
			margin: 0;
			padding: 0;
		}
		ul li {
			list-style: none;
		}
		.banxin {
			width: 1100px;
			height: auto;
			margin: auto;
		}
		.waterApply {
			width: 100%;
			height: auto;
		}
		.content {
			width: 1100px;
			height: auto;
			box-sizing: border-box;
			border: 1px solid #DDDDDD;
			border-top: 3px solid #004098;
			box-sizing: border-box;
		}
		.headecon {
			width: 100%;
			height: 134px;
			background: bisque;
		}
		.applic {
			width: 100%;
			height: 52px;
			padding-top: 18px;
			box-sizing: border-box;
		}
	}
</style>