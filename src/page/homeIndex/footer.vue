<template>
	<div>
		<div class="footer">
			<div class="foorcon">
				<div class="foorLeft">
					<ul>
						<li>
							<p>主办：中华人民共和国海事局 </p>
							<p>备案号：京ICP备xxxxx号</p>
						</li>
						<li>
							<p>
								<span style="margin-right:21px;">
								<a target="_blank" href="https://www.msa.gov.cn/page/outter/aboutUs.jsp">
								关于我们
								</a>
							</span>
								<span>
								<a href="https://www.msa.gov.cn/page/conn/connection.do?type=txl" target="_blank">
							联系我们
							</a>
							</span>
							</p>
							<p class="safety">
								<span>
									<img src="../../../static/img/safety.png"/>
								</span>
								<a href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11040102700062">
									京公网安备 xxxxxxx号
								</a>
							</p>

						</li>
						<li>
							<p></p>
							<p style="margin-top: 47px;">政府网站识别码：xxxxxxx</p>
						</li>
						<li>
							<p class="chiln"> 中华人民共和国海事局微信公众号</p>
							<p class="weix">中华人民共和国海事局微信小程序</p>
						</li>
					</ul>
				</div>
				<div class="foorRight">
					<a href="http://bszs.conac.cn/sitename?method=show&id=761DA773E36E6B45E053022E1AACD968" target="_blank">
						<span></span>
					</a>
					<span></span>
				</div>

			</div>
		</div>
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

<style scoped="scoped">
	.footer {
		width: 100%;
		height: 154px;
		background: #E6E6E6;
		margin-top: 20px;
	}
	
	ul li {
		outline: none;
		list-style: none;
		padding: 0;
		margin-top: 0;
	}
	
	.foorcon ul li {
		float: left;
		width: 197px;
		height: 100%;
		
	}
	.foorcon {
		max-width: 1100px;
		padding-top: 20px;
		box-sizing: border-box;
		height: 100%;
		margin: auto;
	}
	
	.foorLeft ul li:nth-child(1) {
		margin-right: 19px;
	}
	
	.foorLeft {
		width: 77%;
		height: 100%;
		color: #333333;
		font-size: 14px;
		float: left;
	}
	
	.foorRight {
		width: 23%;
		float: right;
		padding-top: 20px;
		box-sizing: border-box;
	}
	.foorRight span:nth-child(1) {
		display: inline-block;
		width: 50px;
		margin-right: 32px;
		height: 62px;
		margin-left: 60px;
		background: url(../../../static/img/offi.png) no-repeat center;
	}
	
	.foorRight span:nth-child(2) {
		display: inline-block;
		width: 110px;
		height: 55px;
		background: url(../../../static/img/govern.png) no-repeat center;
	}
	
	.chiln,
	.weix {
		width: 206px;
		height: 30px;
		background: #D9D9D9;
		text-align: center;
		font-size: 12px;
		line-height: 30px;
		color: #333333;
	}
	
	.chiln {
		margin-bottom: 9px !important;
	}
</style>