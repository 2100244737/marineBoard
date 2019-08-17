<template>
	<div class="loag">
		<!--热门事项**-->
		<div class="dalogont">
			<div class="dalogntleft">
				<div class="dalogCon">
					<div class="datop">
						<img src="../../../static/img/affai/affai01.png" /> 热门事项
					</div>
					<div class="dacontent">
						<ul>
							<li v-for="(item,index) in preList" :key='index'>
								<span></span>
								<span>{{item.affairName}}</span>
							</li>
						</ul>
						<div class="more">
							更多
							<img src="../../../static/img/affai/affai02.png" />
						</div>
					</div>
				</div>
			</div>
			<div class="dalogontcenter">
				<div class="dalogConda">
					<div class="centtop">
						<img src="../../../static/img/affai/affai03.png" /> 按事项性质分类
					</div>
					<div class="dalogContent">
						<ul>
							<li @click="dalogClick(index)" v-for="(dalogSpan,index) in dalogSpans" :key="index">
								<span></span>
								<span>{{dalogSpan.msg}}</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="dalogontright">
				<div class="dalogConda">
					<div class="centtop">
						<img src="../../../static/img/affai/affai04.png" /> 按业务分类
					</div>
					<div class="dalogContent">
						<ul>
							<li @click="dalogContentClick(dalogContent.id)" v-for="(dalogContent,index) in dalogContents" :key="index">
								<span></span>
								<span>{{dalogContent.msg}}</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<!--热门事项结束**-->
	</div>
</template>

<script>
	export default {
		props: {
			preList: {
				type: Array,
				default: []
			}
		},
		data() {
			return {
				dalogSpans: [

					{
						msg: '行政许可'
					},
					{
						msg: '行政确认'
					},
					{
						msg: '行政备案'
					},
					{
						msg: '其他'
					}
				],
				dalogContents: [{
						msg: '通航管理',
						id:1
					},
					{
						msg: '船舶管理',
						id:2
					},
					{
						msg: '船员管理',
						id:3
					},
					{
						msg: '危防管理',
						id:4
						
					},
					{
						msg: '航运管理',
						id:5
					},
					{
						msg: '船检管理',
						id:6
					},
					{
						msg: '航标管理',
						id:7
					},
					{
						msg: '更多',
						id:0
					}
				],
				user: ''
			}
		},
		methods: {
			dalogClick(i) {
				var ids = i + 1;
				this.$router.push({
					path: 'inquire',
					query: {
						affairType: ids,
						serveUser: this.user
					}
				})
			},
			dalogContentClick(i) {
				this.$router.push({
					path: 'inquire',
					query: {
						serveBusiness: i,
						serveUser: this.user
					}
				})
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	* {
		margin: 0;
		padding: 0;
	}
	
	ul li {
		list-style: none;
	}
	
	.loag {
		width: 100%;
		height: 100%;
	}
	
	.dalogont {
		max-width: 1100px;
		height: 420px;
		margin: auto;
	}
	
	.dalogntleft,
	.dalogontcenter,
	.dalogontright {
		float: left;
		width: 353px;
		height: 376px;
		border-top: 3px solid #E60012;
		box-sizing: border-box;
		margin-right: 20px;
	}
	
	.dalogontright {
		margin-right: 0px;
	}
	
	.dalogCon,
	.dalogConda {
		width: 353px;
		height: 376px;
		background: url(../../../static/img/affai/affai.png) no-repeat center;
		padding: 0 27px 19px 10px;
		box-sizing: border-box;
	}
	
	.dalogConda {
		background: #fff;
	}
	
	.datop,
	.centtop {
		width: 100%;
		height: 55px;
		border-bottom: 1px solid #DCDCDC;
		box-sizing: border-box;
		margin: auto;
		line-height: 55px;
		text-align: center;
		color: #E60012;
		font-size: 18px;
	}
	
	.datop img,
	.centtop img {
		width: 18px;
		height: 18px;
		margin-right: 17px;
		display: inline-block;
	}
	
	.dacontent,
	.dalogContent {
		color: #333333;
		font-size: 16px;
	}
	
	.dacontent ul li,
	.dalogContent ul li {
		margin-bottom: 34px;
		box-sizing: border-box;
		cursor: pointer;
	}
	
	.dalogContent ul li {
		float: left;
		margin-top: 22px;
		margin-right: 81px;
		cursor: pointer;
	}
	
	.dacontent ul li:nth-child(1) {
		margin-top: 22px;
	}
	
	.dacontent ul li:nth-child(5) {
		margin-bottom: 30px;
	}
	
	.dacontent span:nth-child(1),
	.dalogContent span:nth-child(1) {
		width: 5px;
		height: 5px;
		background: rgba(210, 210, 210, 1);
		border-radius: 50%;
		display: inline-block;
		margin-right: 8px;
	}
	
	.more {
		font-size: 16px;
		color: #333333;
		text-align: right;
	}
	
	.more img {
		width: 12px;
		height: 13px;
	}
</style>