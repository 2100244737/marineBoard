<template>
	<div class="loag">
		<!--热门事项**-->
			<div class="dalogntleft">
				<div class="dalogCon">
					<div class="datop">
						<img src="../../../../../static/img/affai/affai01.png" /> 热门事项
					</div>
					<div class="dacontent">
						<ul>
							<li>
								<span class="span"></span>
								<span>危险化学品水路运输人员资格认可（申报···</span>
							</li>
							<li>
								<span class="span"></span>
								<span>海事声明签注</span>
							</li>
							<li>
								<span class="span"></span>
								<span>海船船员内河航线行驶资格证明签发</span>
							</li>
							<li>
								<span class="span"></span>
								<span>特定航线江海直达船舶船员行驶资格证明···</span>
							</li>
							<li>
								<span class="span"></span>
								<span>危险化学品水路运输人员资格认可（申报···</span>
							</li>
						</ul>
						<div class="more">
							更多
							<img src="../../../../../static/img/affai/affai02.png" /></div>
					</div>
				</div>
			</div>
			<div class="dalogontcenter">
				<div class="dalogConda">
					<div class="centtop">
						<img src="../../../../../static/img/affai/affai03.png" /> 按事项性质分类
					</div>
					<div class="dalogContent">
						<ul>
							<li>
								<span class="span"></span>
								<span>行政备案</span>
							</li>
							<li>
								<span class="span"></span>
								<span>行政确认</span>
							</li>
							<li>
								<span class="span"></span>
								<span>行政许可</span>
							</li>
							<li>
								<span class="span"></span>
								<span class="span1">其他</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="dalogontright">
				<div class="dalogConda">
					<div class="centtop">
						<img src="../../../../../static/img/affai/affai04.png" /> 按业务分类
					</div>
					<div class="dalogContent">
						<ul>
							<li>
								<span class="span1"></span>
								<span class="span1">安全管理</span>
                        
							</li>
							<li>
								<span class="span1"></span>
								<span class="span1">船检管理</span>
							</li>
							<li>
								<span class="span1"></span>
								<span class="span1">航标管理</span>
							</li>
							<li>
								<span class="span1"></span>
								<span class="span1">危防管理</span>
							</li>
							<li>
								<span class="span1"></span>
								<span class="span1">通航管理</span>
							</li>
							<li>
								<span class="span1"></span>
								<span class="span1">船员管理</span>
							</li>
							<li>
								<span class="span1"></span>
								<span class="span1">船舶管理</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		<!--热门事项结束**-->
	</div>
</template>

<script>
	export default {
		data() {
			return {

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
    max-width: 1100px;
    margin: auto;
	}

	.dalogont {
    z-index: 66;
		height: 420px;
	}
  .span1:hover {
    color:#E60012;
  }
	li:hover{
   .span {
      background: #E60012!important;
    }
    color:#E60012;
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
	
	.dalogCon,.dalogConda {
		width: 353px;
		height: 376px;
		background: url(../../../../../static/img/affai/affai.png) no-repeat center;
		padding: 0 27px 19px 10px;
		box-sizing: border-box;
	}
	.dalogConda{
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
	}
	.dalogContent ul li{
		float: left;
		margin-top: 22px;
		margin-right:81px;
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
