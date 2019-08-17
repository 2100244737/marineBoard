<template>
	<div class="homeIndex">
		<div class="Overall">
			<div class="OverallTop">
				<div class="OverallCenter">
					<div class="header">
						<div class="OverOne">
							<img src="../../../static/img/logo.png">
						</div>
						<div class="Bureau">
							<span class="areaIcon"> 
	                       <img src="../../../static/img/icon.png">
	                    </span>
							<div class="meanu" @mouseover="meanuadd()" @mouseleave="meanuaddleave()">
								<p :title="meanuMsg">{{meanuMsg | ellip }}</p>
								<div class="meanuJiantou" v-show="meanuShow"><img src="../../../static/img/ShapeDown.png" /></div>
								<div class="meanuJiantou" v-show="!meanuShow"><img src="../../../static/img/ShapeUp.png" /></div>
							</div>
						</div>

						<div class="search">
							<el-input placeholder="请输入关键字" v-model="input3" class="input-with-select">
								<el-button slot="append" icon="el-icon-search"></el-button>
							</el-input>
						</div>
						<div class="content">
							<a target="_blank" href="http://www.gjzwfw.gov.cn">
								<span>全国一体化在线政务服务平台 </span>
							</a>
							<span>交通运输部政务服务平台 </span>
							<span> 登录 | </span>
							<span>注册</span>
						</div>

						<!--弹窗内容**/-->
						<div class="menuhea" v-show="meanuDialog" @mouseover="meanushow()" @mouseleave="meanughid()">
							<popup-tabbar @getname="getname" :datalist="zhonghua" :datalistTwo="zhonghua1" :datalistTree="zhonghua2"></popup-tabbar>
						</div>
						<!--弹窗内容结束**/-->
					</div>
				</div>
			</div>
			<!--首页 个人办事 法人办事 ...**-->
			<div class="headContent">
				<div class="headTop">
					<div class="tabTilte">
						<div>首页</div>
						<div @click="tabClick()" @mouseover.stop="slefDo(1)" @mouseleave.stop="slefDoleave()" class="slefDo">
							个人办事
							<div class="selfJiantou" v-show="isShow"><img src="../../../static/img/ShapeDown.png" /></div>
							<div class="selfJiantou" v-show="!isShow"><img src="../../../static/img/ShapeUp.png" /></div>
						</div>
						<div @click="farenClick()" @mouseover.stop="farenbanshi(2)" @mouseleave.stop="farenbanshileave()" class="do">法人办事
							<div class="selfJiantou" v-show="isShow1"><img src="../../../static/img/ShapeDown.png" /></div>
							<div class="selfJiantou" v-show="!isShow1"><img src="../../../static/img/ShapeUp.png" /></div>
						</div>
						<div>权责清单</div>
						<div>
							<a style="color:#fff" target="_blank" href="https://www.msa.gov.cn/page/consultationAuto.do">
								咨询与投诉
							</a>
						</div>
					</div>
					<div class="dalog" v-show="isDialog" @mouseover.stop="dalogshow()" @mouseleave.stop="daloghid()">
						<dalog-tabbar ref="dalogUser" :preList='headerList'></dalog-tabbar>
					</div>
				</div>
				<div class="background">
					<div class="tabContent">
						<div class="tabOne">

							<el-tabs :tab-position="tabPosition" type="border-card" class="cc">
								<el-tab-pane label="最热查询">
									<div class="cew">
										<div class="cewContent">
											<div class="cewCon">
												<div class="cewhead" v-for="(item,index) in items" @click="go(item.convenientSearchId ,item.skipUrl)" :key="index" @mouseover.stop="cewheadover(index)" @mouseleave.stop="cewheadleave(index)" :class="{cewmove:seen&&index==act }">
													<span class="cewImg">
														<img :src="item.src"/>
													</span>
													<span :class="{cewmove1:seen&&index==act }">
														{{item.searchName}}
													</span>
												</div>
											</div>
										</div>
									</div>
								</el-tab-pane>
								<el-tab-pane label="办件查询">
									<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
										<el-form-item label="" prop="pass">
											<el-input v-model="ruleForm.pass" placeholder="请输入申请编号" autocomplete="off">
												<i slot="prefix" class="el-icon-date"></i>
											</el-input>
										</el-form-item>
										<!--手机号**-->
										<el-form-item label="" prop="phone">
											<el-input v-model="ruleForm.phone" auto-complete="off" placeholder="请输入手机号">
												<i slot="prefix" class="el-icon-view el-input__icon"></i>
											</el-input>
										</el-form-item>
										<!--验证码**-->
										<el-form-item label="" prop="code">
											<el-input style="width: 142px;" v-model="ruleForm.code" auto-complete="off" placeholder="请输入验证码">
												<i slot="prefix" class="el-icon-mobile"></i>
											</el-input>
											<!--<div class="verifi">
												
											</div>-->
										</el-form-item>
										<!--登录**-->
										<el-form-item style="margin-bottom: 12px;">
											<el-button type="primary" size="small" @click.native.prevent="handleLogin" class="login-submit">查询</el-button>
										</el-form-item>
										<!--验证码**-->

									</el-form>
								</el-tab-pane>
							</el-tabs>
						</div>

					</div>
				</div>
		
			</div>
			<!--背景图**-->
			<div class="Division">
			</div>
			<!--政务服务**-->
			<div class="affairs">
				<div class="edit">
					<div class="edittop">
						<div class="editLeft">
							<div class="servi">政务服务</div>
						</div>
						<div class="editCenter">
							<ul>
								<li v-for="(edit,index) in edits" :key="index" @click="editclick(index)">
									{{edit.editscon}}
									<div :class="{active:index==editcon}"></div>
								</li>
							</ul>
						</div>
						<div class="editRight">
							全部事项
						</div>
					</div>
					<div class="editbottom">
						<ul class="ul">
							<li class="li" :class="{active:0==editcon}">
								<div>
									<carousel :navigationEnabled="false" :perPage="perPage" :autoplay="false">
										<!--<slide v-for="slide in slides" :key="slide.ky">-->
										<slide v-for="(slide,i) in pages" :key="i">
											<!--<router-link :to="{name: slide.toKey}">-->
											<div class="tran">
												<ul class="ul">
													<li class="tranp tranpimg" v-for="(item,index) in slide" @click="tranpClick(item.affairNum,item.serveUser)" :key="index">
														<p class="tranp">
															<img :src="item.filePath" />
														</p>
														<p>{{item.affairName}}</p>
													</li>
													<li class="tranp" v-if='i == 2 && imgListLength>=45'>更多</li>
												</ul>
											</div>
											<!--</router-link>-->
										</slide>
									</carousel>
								</div>

							</li>
							<li class="li" :class="{active:1==editcon}">
								<div>
									<carousel :navigationEnabled="false" :perPage="perPages" :autoplay="false">
										<slide v-for="(slide,i) in pages1" :key="i">
											<!--<router-link :to="{name: slide.toKey}">-->
											<div class="tran">
												<ul class="ul">
													<li class="tranp" v-for="(item,index) in slide" @click="tranpClick(item.affairNum,item.serveUser)" :Key="index">
														<p class="tranp">
															<img :src="item.filePath" />
														</p>
														<p>{{item.affairName}}</p>
													</li>
													<li class="tranp" v-if='i == 2 && imgListLength>=45'>更多</li>
												</ul>
											</div>
											<!--</router-link>-->
										</slide>
									</carousel>
								</div>
							</li>
							<li class="li busin" :class="{active:2==editcon}">
								<ul>
									<li v-for="(busin,index) in busins" :key="index" :class="[index>3?'businlei':'']" class="businone" @mouseover="businover(index)" @mouseleave="businleave(index)" @click="aa(busin.id)">
										<p>
											<img v-show="busin.ishow" :src="busin.businsImg" />
											<img v-show="!busin.ishow" :src="busin.businsImg2" />
										</p>
										<p>{{busin.businsmsg}}</p>
									</li>
								</ul>
							</li>
							<li class="li matter" :class="{active:3==editcon}">
								<ul>
									<li v-for="(matter,index) in matters" @click="matterShiXinag(matter.ids)" :key="index" @mouseover="mouseover(index)" @mouseleave="mouseleave(index)" class="matterhover">
										<div class="matterimg">
											<img v-show='matter.ishow' :src="matter.metterImg" />
											<img v-show='!matter.ishow' :src="matter.metterImg2" />
										</div>
										<div class="matterCon">{{matter.mettermsg}}</div>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<!--便民 查询**-->
			<div class="people">
				<div class="peopleCon">
					<div class="peoHea">
						<span></span>
						<span>便民查询</span>
					</div>
					<div class="cewPeoCon">
						<div class="cewLeft"></div>
						<div class="cewRight">
							<ul>
								<li @click="go(cewLi.convenientSearchId ,cewLi.skipUrl)" :title="cewLi.searchName" v-for="(cewLi,i) in cewLis" :key="i" :class="[i>13?'handclass':'',{actback:seen&&i==act}]" @mouseover="addback(i)" @mouseleave="leaveback(i)">
									<p>
										<img v-show="! cewLi.ishover" :src="cewLi.src" alt="" />
										<img v-show="cewLi.ishover" :src="cewLi.srcIImg" alt="" />
									</p>
									<p>{{cewLi.searchName | ellip}}</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<!--其他网上办理**''-->
			<div class="handle">
				<div class="handleCon">
					<div class="handHea">
						<span></span>
						<span>其它网上办理</span>
					</div>
					<div class="handconjian">
						<ul>
							<li :title="hand.handmsg" v-for="(hand,index) in handCons" :key="index">
								{{hand.handmsg | ellip }}
								<div class="handabso">
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<!--通知公告-->
			<div class="notice">
				<div class="noticecon">
					<div class="noticeleft">
						<div class="noticeCon">
							通知公告
							<div class="after"></div>
						</div>
						<div class="jia">
						</div>
						<!--内容**-->
						<div class="noticontent">
							<ul>
								<li v-for="(item,index) in circless" :key="index">
									<div class="circle"></div>
									<span class="noticeSpan" :title="item.title">{{item.title | ellip}}</span>
									<span class="noticeTime">{{item.issueTime}}</span>
								</li>
							</ul>
						</div>
					</div>
					<div class="noticeright">
						<div class="noticeCon">
							常见问题
							<div class="after"></div>
						</div>
						<div class="jia">
						</div>
						<!--内容**-->
						<div class="noticontent">
							<ul>
								<li v-for="(item,index) in circles" :key="index" @click="noticeClick(item.link,item.problemId)">
									<div class="circle"></div>
									<div class="circontent">
										<span class="cir">{{item.problemDesc}}</span>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<!--底部**-->
			<page-footer></page-footer>
		</div>
		<div class="commoncon">
			<commom-tabbar></commom-tabbar>
		</div>

	</div>
</template>
<script>
	import Vue from 'vue';
	import Axios from 'axios'
	import { Carousel, Slide } from 'vue-carousel'
	import dalogTabbar from './dalog'
	import commomTabbar from './common'
	import popupTabbar from './popup'
	import pageFooter from './footer'
	import { hallList, noticeList, peoHeaList, headList, personList, govList, headperList, throug } from '@/api/admin/user'
	export default {
		components: {
			Carousel,
			Slide,
			dalogTabbar,
			commomTabbar,
			popupTabbar,
			pageFooter
		},
		name: '',
		filters: {
			ellip: function(val) {
				if(!val) return '';
				if(val.length > 10) {
					return val.slice(0, 10) + "..."
				}
				return val
			}
		},
		data() {
			return {
				oneortwo: 0,
				isDialog: false,
				meanuDialog: false,
				//				meanuDialog: true,
				meanuShow: true,
				isShow1: true,
				perPage: 1,
				perPages: 1,
				meanuMsg: '中华人民共和国海事局',
				input3: '',
				editcon: 0,
				act: 0,
				seen: false,
				imgListLength: 0,
				//				中华人民**
				zhonghua: [],
				zhonghua1: [],
				zhonghua2: [],
				//				中华人民解束** 
				//				政治服务按法人**  
				imgList1: [],
				//		  政治服务按个人**
				imgList: [],
				//				头部个人服务**
				headerList: [],
				//              headerList1:[],
				slides: [{
						href: 1,
						//src:require('../../../static/img/cew01.png')

					},
					{
						href: 2,
						//src:require('../../../static/img/cew02.png')

					}
				],
				//				cur: 0,
				personal: '个人办事',
				tabPosition: 'left',
				activeName: 'second',
				nowIndex: 0,
				isShow: true,
				itemImg: [{
						cewImgSrc: require('../../../static/img/cew01.png')
					},
					{
						cewImgSrc: require('../../../static/img/cew02.png')
					},
					{
						cewImgSrc: require('../../../static/img/cew03.png')
					},
					{
						cewImgSrc: require('../../../static/img/cew04.png')
					},
					{
						cewImgSrc: require('../../../static/img/cew05.png')
					}
				],
				items: [],
				imgSrc: [{
						src: require('../../../static/img/conven/conpeople02.png'),
						srcIImg: require('../../../static/img/conven/conveny01.png')
					},
					{
						src: require('../../../static/img/conven/conedit.png'),
						srcIImg: require('../../../static/img/conven/conveny02.png')

					},
					{
						src: require('../../../static/img/conven/consearch.png'),
						srcIImg: require('../../../static/img/conven/conveny03.png')

					},
					{
						src: require('../../../static/img/conven/conoff04.png'),
						srcIImg: require('../../../static/img/conven/conveny04.png')
					},
					{
						src: require('../../../static/img/conven/condown.png'),
						srcIImg: require('../../../static/img/conven/condown.png')
					},
					{
						src: require('../../../static/img/conven/conheart.png'),
						srcIImg: require('../../../static/img/conven/conveny06.png')
					},
					{
						src: require('../../../static/img/conven/contrain.png'),
						srcIImg: require('../../../static/img/conven/contrain.png')
					},
					{
						src: require('../../../static/img/conven/conmecha01.png'),
						srcIImg: require('../../../static/img/conven/conveny08.png')
					},
					{
						src: require('../../../static/img/conven/consj.png'),
						srcIImg: require('../../../static/img/conven/conveny09.png')
					},
					{
						src: require('../../../static/img/conven/conmecha03.png'),
						srcIImg: require('../../../static/img/conven/conmecha03.png')
					},
					{
						src: require('../../../static/img/conven/conaj.png'),
						srcIImg: require('../../../static/img/conven/conveny11.png')
					},
					{
						src: require('../../../static/img/conven/conmecha06.png'),
						srcIImg: require('../../../static/img/conven/conveny12.png')
					},
					{
						src: require('../../../static/img/conven/conxia.png'),
						srcIImg: require('../../../static/img/conven/conveny13.png')
					},
					{
						src: require('../../../static/img/conven/conq.png'),
						srcIImg: require('../../../static/img/conven/conveny14.png')
					},
					{
						src: require('../../../static/img/conven/concb.png'),
						srcIImg: require('../../../static/img/conven/conveny15.png')
					},
					{
						src: require('../../../static/img/conven/conac.png'),
						srcIImg: require('../../../static/img/conven/conveny16.png')
					},
					{
						src: require('../../../static/img/conven/cons.png'),
						srcIImg: require('../../../static/img/conven/conveny17.png')
					},
					{
						src: require('../../../static/img/conven/thunder.png'),
						srcIImg: require('../../../static/img/conven/conveny18.png')
					},
					{
						src: require('../../../static/img/conven/concheck.png'),
						srcIImg: require('../../../static/img/conven/conveny19.png')
					},
					{
						src: require('../../../static/img/conven/conxinxi.png'),
						srcIImg: require('../../../static/img/conven/conveny20.png')
					},
					{
						src: require('../../../static/img/conven/context.png'),
						srcIImg: require('../../../static/img/conven/conveny21.png')
					}
				],
				cewLis: [],
				//			政务服务**
				//            按业务**
				busins: [{
						businsImg: require('../../../static/img/busin/busin01.png'),
						businsImg2: require('../../../static/img/busin/busin02.png'),
						businsmsg: '通航管理',
						ishow: true,
						id: 1
					},
					{
						businsImg: require('../../../static/img/busin/nmentY.png'),
						businsImg2: require('../../../static/img/busin/nment02.png'),
						businsmsg: '船舶管理',
						ishow: true,
						id: 2
					},
					{
						businsImg: require('../../../static/img/busin/nmenty1.png'),
						businsImg2: require('../../../static/img/busin/nment03.png'),
						businsmsg: '船员管理',
						ishow: true,
						id: 3
					},
					{
						businsImg: require('../../../static/img/busin/nmenty2.png'),
						businsImg2: require('../../../static/img/busin/nment04.png'),
						businsmsg: '危防管理',
						ishow: true,
						id: 4
					},
					{
						businsImg: require('../../../static/img/busin/nmenty4.png'),
						businsImg2: require('../../../static/img/busin/nment05.png'),
						businsmsg: '航运管理',
						ishow: true,
						id: 5
					},
					{
						businsImg: require('../../../static/img/busin/nmenty5.png'),
						businsImg2: require('../../../static/img/busin/mun.png'),
						businsmsg: '船检管理',
						ishow: true,
						id: 6
					},
					{
						businsImg: require('../../../static/img/busin/nment07.png'),
						businsImg2: require('../../../static/img/busin/nmenty6.png'),

						businsmsg: '航标管理',
						ishow: true,
						id: 7
					},
					{
						businsImg: require('../../../static/img/busin/nmenty7.png'),
						businsImg2: require('../../../static/img/busin/nment08.png'),
						businsmsg: '更多',
						ishow: true,
						id: 0
					}

				],
				matters: [{
						metterImg: require('../../../static/img/matter/matter01.png'),
						metterImg2: require('../../../static/img/matter/mattery.png'),
						mettermsg: '行政许可',
						ishow: true,
						ids:'01'
					},
					{
						metterImg: require('../../../static/img/matter/matter02.png'),
						metterImg2: require('../../../static/img/matter/true.png'),
						mettermsg: '行政确认',
						ishow: true,
						ids:'07'
					},
					{
						metterImg: require('../../../static/img/matter/matter03.png'),
						metterImg2: require('../../../static/img/matter/mattery2.png'),
						mettermsg: '行政备案',
						ishow: true,
						ids:'30'
					},
					{
						metterImg: require('../../../static/img/matter/matter04.png'),
						metterImg2: require('../../../static/img/matter/mattery3.png'),
						mettermsg: '其他',
						ishow: true,
						ids:'99'
					}
				],
				circles: [],
				circless: [],
				handCons: [{
						handmsg: '船员专业技术资格证签发'
					},
					{
						handmsg: '特定航线江海直达船舶船员特定航线江海直达船舶船员'
					},
					{
						handmsg: '私人武装保安在船护航证明特定航线江海直达船舶船员'
					}, {
						handmsg: '其它'
					}
				],
				edits: [{
						editscon: '按个人'
					},
					{
						editscon: ' 按法人    '
					},

					{
						editscon: '按业务  '
					},
					{
						editscon: '按事项性质'
					}
				],
				ruleForm: {
					pass: "",
					phone: '',
					code: ''
				},
				rules: {
					pass: [{
						required: true,
						message: '请输入申请编号',
						trigger: 'blur'
					}],
					phone: [{
						required: true,
						message: "请输入手机号",
						trigger: "blur"
						//                       { min: 6, message: "密码长度最少为6位", trigger: "blur" }
					}],
					code: [{
						required: true,
						message: "请输入验证码",
						trigger: "blur"
						//                       { min: 6, message: "密码长度最少为6位", trigger: "blur" }
					}]
				},
				commomcode: '',
				ischange: 0,
				serveUser: 1,
			}
		},
		computed: {
			pages() {
				const pages = []
				this.imgListLength = this.imgList.length
				this.imgList.forEach((item, index) => {
					if(index < 44) {
						const page = Math.floor(index / 15)
						if(!pages[page]) {
							pages[page] = []
						}
						pages[page].push(item)
					}
				})
				return pages
			},
			pages1() {
				const pages = []
				this.imgListLength = this.imgList1.length
				this.imgList1.forEach((item, index) => {
					if(index < 44) {
						const page = Math.floor(index / 15)
						if(!pages[page]) {
							pages[page] = []
						}
						pages[page].push(item)
					}
				})
				return pages
			}
		},
		methods: {
			getname(params) {
				if(this.commomcode == params.code) {
					this.ischange = 0
				} else {
					this.ischange = 1
					this.commomcode = params.code
					this.meanuMsg = params.name
					this.noticeList()
					this.personList()
					this.headperList()
				}
			},
			goto(index) {
				this.isShow = false
				setTimeout(() => {
					this.isShow = true
					this.nowIndex = index
				}, 10)
			},
			handleLogin() {

			},
			editclick(i) {
				const ids = i + 1;
				this.serveUser = ids
				if(ids == 1) {
					this.editcon = i
					this.personList()
					//					}
				} else if(ids == 2) {
					this.editcon = i
					this.personList()
				} else {
					this.editcon = i
				}
			},
			addback(i) {
				this.cewLis[i].ishover = true
				this.seen = true
				this.act = i
			},
			leaveback(i) {
				this.cewLis[i].ishover = false
				this.seen = false
				this.act = i
			},
			cewheadover(i) {
				this.seen = true
				this.act = i
			},
			cewheadleave(i) {
				this.seen = false
				this.act = i
			},
			mouseover(i) {
				this.matters[i].ishow = false
			},
			mouseleave(i) {
				this.matters[i].ishow = true
			},
			businover(i) {
				this.busins[i].ishow = false
			},
			businleave(i) {
				this.busins[i].ishow = true
			},
			farenbanshi(pas) {
				this.serveUser = pas
				this.$refs.dalogUser.user = pas
				this.headperList()
				this.oneortwo = pas
				this.isShow1 = false
				this.isDialog = true

			},
			slefDo(pas) {
				this.serveUser = pas
				this.$refs.dalogUser.user = pas
				this.headperList()
				this.oneortwo = pas
				this.isShow = false
				this.isDialog = true

			},
			meanuadd() {
				this.meanuShow = false
				this.meanuDialog = true
			},
			meanuaddleave() {
				this.meanuShow = true
				this.meanuDialog = false
			},
			farenbanshileave() {
				this.isShow1 = true
				this.isDialog = false
			},
			slefDoleave() {
				this.isShow = true
				this.isDialog = false
			},
			dalogshow() {
				if(this.oneortwo == 1) {
					this.isShow = false
				} else {
					this.isShow1 = false
				}
				this.isDialog = true
			},
			meanushow() {
				this.meanuDialog = true
			},
			meanughid() {
				this.meanuDialog = false
			},
			daloghid() {
				this.isShow = true
				this.isShow1 = true
				this.isDialog = false

			},
			hallList() {
				const params1 = {
					size: 6,
					current: 1,
					status: 1,

				};
				hallList(params1).then((res) => {
					if(res.data.code == 0) {
						this.circles = res.data.data.records
					}
				})
			},
			noticeList() {
				const params1 = {
					size: 6,
					current: 1,
					status: 1,
					departmentCode: this.commomcode
				};
				noticeList(params1).then((res) => {
					if(res.data.code == 0) {
						res.data.data.records.forEach(item => {
							item.issueTime = item.issueTime.slice(0, 10)
						})
						this.circless = res.data.data.records
					}
				})
			},
			go(id, url) {
				throug(id).then((res) => {})
				window.location.href = 'http://' + url;
			},
			noticeClick(i, id) {
				//				this.$router.push({
				//					
				//					path:i,
				//					query:{
				//						id:id
				//					}
				//				})
				//				console.log(i);
				//				console.log(id);

			},
			//		便民查询**
			peoHeaList() {
				const params1 = {
					size: 21,
					current: 1,

				};
				peoHeaList(params1).then((res) => {
					if(res.data.code == 0) {
						var result = res.data.data.records;
						var arrayImg = this.imgSrc;

						//					this.$set()
						result.forEach((item, i) => {
							item.ishover = false
							arrayImg.forEach((item1, index) => {
								if(i == index) {
									item.src = item1.src
									item.srcIImg = item1.srcIImg
								}
							})
						})
						this.cewLis = res.data.data.records
					}
				})
			},
			//       最热查询**
			headList() {
				const params1 = {
					size: 5,
					current: 1,
					orderCol: 'VIEW_COUNT',
					orderType: 'DESC'
				};
				headList(params1).then((res) => {
					if(res.data.code == 0) {
						var result = res.data.data.records;
						var arrayImg = this.itemImg;
						result.forEach((item, i) => {
							arrayImg.forEach((item1, index) => {
								if(i == index) {
									item.src = item1.cewImgSrc
								}
							})
						})
						this.items = res.data.data.records
					}
				})
			},
			//     按个人**
			personList() {
				const params1 = {
					size: 100,
					current: 1,
					serveUser: this.serveUser,
					serveTop: this.commomcode
				}
				personList(params1).then((res) => {
					if(res.data.code == 0) {
						if(this.serveUser == 1) {
							this.imgList = res.data.data.records

						} else {
							this.imgList1 = res.data.data.records
						}
					}
				})
			},
			//			头部个人**
			headperList() {
				const params1 = {
					size: 5,
					current: 1,
					serveUser: this.serveUser,
					serveTop: this.commomcode,
					descs: 'COMMIT_COUNT'
				}
				headperList(params1).then((res) => {
					if(res.data.code == 0) {
						console.log(res);
						if(this.serveUser == 1) {
							this.headerList = res.data.data.records
						} else {
							this.headerList = res.data.data.records
						}
					}
				})
			},
			//	政府入口*
			vernment() {
				govList().then((res) => {
					if(res.data.code == 0) {
						const ver = res.data.data
						this.zhonghua = ver
						this.zhonghua1 = ver[0].govPortals
						this.zhonghua2 = ver[0].govPortals[0].govPortals
						console.log(this.zhonghua);
						console.log(this.zhonghua1);
						console.log(this.zhonghua2);

					}
				})
			},
			//			按个人点击跳页面**
			tranpClick(affire, user) {
				console.log(affire);
				console.log(user);
				//          	this.$router.push({
				//          		path:'inquire',
				//          		query:{
				//          			affairNum:affire,
				//          			serveUser:user
				//          		}
				//          	})
			},
			aa(i) {
				this.$router.push({
					path: 'inquire',
					query: {
						serveBusiness: i
					}
				})

			},
			//          按事项性质**
			matterShiXinag(i) {
				this.$router.push({
					path: 'inquire',
					query: {
						affairType: i
					}
				})
			},
			//	     首页个人办事**
			tabClick() {
				this.$router.push({
					path: 'inquire',
					query: {
						serveUser: 1
					}
				})

			},
			farenClick() {
				this.$router.push({
					path: 'inquire',
					query: {
						serveUser: 2
					}
				})
			}
		},
		created() {
			this.hallList();
			this.noticeList();
			this.peoHeaList();
			this.headList();
			this.personList();
			this.vernment();

		}
	}
</script>
<style lang="scss" scoped="scoped">
@import 'sass/index'
</style>