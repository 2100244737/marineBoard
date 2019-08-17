<template>
	<div>
		<div class="shipContent">
			<p>船舶进入或者穿越禁航区许可</p>
			<div class="contentNei">
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="160px" class="demo-ruleForm">
					<!--申请单位**-->
					<el-row>
						<!--申请单位：-->
						<el-col :span="24">
							<el-form-item label="申请单位" prop="meca">
								<el-input v-model="ruleForm.meca"></el-input>
							</el-form-item>
						</el-col>
						<!--申请单位结束**-->
						<!--代理人**-->
						<el-col :span="12">
							<el-form-item label="代理人" prop="meca">
								<el-input v-model="ruleForm.meca"></el-input>
							</el-form-item>
						</el-col>
						<!--代理人结束**-->
					</el-row>
					<!--联系人：-->
					<el-row :gutter="20">
						<el-col :span="12">
							<el-form-item label="联系人" prop="penson">
								<el-input v-model="ruleForm.penson"></el-input>
							</el-form-item>
						</el-col>
						<!--联系电话-->
						<el-col :span="12">
							<el-form-item label="联系电话" prop="phone">
								<el-input v-model="ruleForm.phone"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<!-- 进入或穿越区域-->
					<el-row>
						<el-col :span="24">
							<el-form-item label="进入或穿越区域" prop="unit">
								<el-input v-model="ruleForm.unit"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<!--进入或穿越区域结束-->
					<!--进入或穿越时间-->
					<el-row>
						<el-col :span="24">
							<el-form-item label="进入或穿越时间" prop="unit">
								<el-input v-model="ruleForm.unit"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<!--进入或穿越时间结束-->
					<!--备注**-->
					<el-row>
						<el-col :span="24">
							<el-form-item label="备注" prop="unit">
								<el-input v-model="ruleForm.unit"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<!--备注结束**-->
					<!--船舶信息**-->
					<div class="ship">
						<div class="shipLeft">
							<img src="../../../../static/img/apply/ship.png" /> 船舶信息
							<span style="color: #666666;font-size: 14px;">是否有施工作业船舶：     </span>
							<el-radio v-model="radio" label="1">是</el-radio>
							<el-radio v-model="radio" label="2">否</el-radio>
							<!--<div class="xian"></div>-->
						</div>
						<!--添加**-->
						<div class="shipRight" @click="chuanbo">添加</div>
						<popup-con ref="shipPop" @clickPop='clickPop'></popup-con>
						<!--添加结束**-->
					</div>
					<!--船舶信息内容**-->
					<div class="shipcontent">
						<ul>
							<li v-for="(item,index) in ruleForm.ship" :key="index">
								<div class="chuanName">
									<div class="delect" @click="del(index)">
										<img src="../../../../static/img/apply/fork.png" />
									</div>
									<div class="abso" @click="abso(index)">
										<span v-show="!item.isShow">收起</span>
										<span v-show="item.isShow">展开</span>
										<span>
													<img v-show="!item.isShow" src="../../../../static/img/apply/down.png" />
													<img v-show="item.isShow" src="../../../../static/img/apply/up.png" />
											    </span>
									</div>
									<!--船舶名称-->
									<el-row :gutter="20">
										<el-col :span="11">
											<el-form-item label="船舶名称:" prop="shipName">
												<el-input v-model="item.shipName"></el-input>
											</el-form-item>
										</el-col>
										<!--船舶种类：-->
										<el-col :span="11">
											<el-form-item label="船舶种类:" prop="shipBh">
												<el-input v-model="item.shipBh"></el-input>
											</el-form-item>
										</el-col>
									</el-row>
								</div>
								<div class="rowShow" v-show="!item.isShow">
									<!--型宽：-->
									<el-row :gutter="20">
										<el-col :span="11">
											<el-form-item label="型宽:" prop="penson">
												<el-input v-model="item.shipGj"></el-input>
											</el-form-item>
										</el-col>
										<!--型深：-->
										<el-col :span="11">
											<el-form-item label="型深:" prop="penson">
												<el-input v-model="item.shipAIS"></el-input>
											</el-form-item>
										</el-col>
									</el-row>
									<!--吃水(米)：-->
									<el-row :gutter="20">
										<el-col :span="11">
											<el-form-item label="吃水(米) :" prop="penson">
												<el-input v-model="item.shipType"></el-input>
											</el-form-item>
										</el-col>
										<!--载客(位)：：：-->
										<el-col :span="11">
											<el-form-item label="载客(位) :" prop="penson">
												<el-input v-model="item.shipHq"></el-input>
											</el-form-item>
										</el-col>
										<!--载货(吨)-->
										<el-col :span="11">
											<el-form-item label="载货(吨) :" prop="penson">
												<el-input v-model="item.shipHq"></el-input>
											</el-form-item>
										</el-col>
										<el-col :span='24'>
											<!--其他情况说明**-->
											<el-form-item label="其他情况说明:">
												<el-input type="textarea" v-model="item.shipHq"></el-input>
											</el-form-item>
										</el-col>
									</el-row>
								</div>
							</li>
						</ul>
					</div>
					<!--船舶信息结束**-->
					<!--图片上传**-->
					<div class="hello">
						<div class="upload">
							<div class="ship shipUpload">
								<div class="shipZcontent">
									<div class="shipLeft">
										<img src="../../../../static/img/apply/ship.png" /> 申请材料
									</div>
									<div class="shipR" @click="shipR">
										<img v-show="show" src="../../../../static/img/apply/down.png" />
										<img v-show="!show" src="../../../../static/img/apply/up.png" />
									</div>
								</div>
							</div>
							<div class="boxContent" v-show="show">
								<div class="box">
									<div class="box1">
										<div class="upload-first">
											船舶航行的路线和航行时间说明
											<!--<div class="upload_first1" @click="upload_first"></div>-->
										</div>
										<div class="uploa">
											<el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-change="handleChange" :file-list="fileList">
												<el-button size="small" type="primary" style="margin-top: 6px;">
													<img style="width:15px;height: 15px;" src="../../../../static/img/apply/upload.png" />
													<span style="color: #333333;margin-left: 10px;">上传</span>
												</el-button>
											</el-upload>

										</div>
									</div>
								</div>
								<div class="box">
									<div class="box1">
										<div class="upload-first">
											船舶概况（船舶尺度、吃水、载货载客情况等）
											<!--<div class="upload_first1" @click="upload_first"></div>-->
										</div>
										<div>
											<el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-change="handleChange" :file-list="fileList1">
												<el-button size="small" type="primary" style="margin-top: 6px;">
													<img style="width:15px;height: 15px;" src="../../../../static/img/apply/upload.png" />
													<span style="color: #333333;margin-left: 10px;">上传</span>
												</el-button>
											</el-upload>
										</div>
									</div>
								</div>
								<div class="box">
									<div class="box1">
										<div class="upload-first">
											通航安全保障方案
											<!--<div class="upload_first1" @click="upload_first"></div>-->
										</div>
										<div>
											<el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-change="handleChange" :file-list="fileList2">
												<el-button size="small" type="primary" style="margin-top: 6px;">
													<img style="width:15px;height: 15px;" src="../../../../static/img/apply/upload.png" />
													<span style="color: #333333;margin-left: 10px;">上传</span>
												</el-button>
											</el-upload>
										</div>
									</div>
								</div>
								<div class="box">
									<div class="box1">
										<div class="upload-first">
											专项维护申请（规定必要时）
											<!--<div class="upload_first1" @click="upload_first"></div>-->
										</div>
										<div>
											<el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-change="handleChange" :file-list="fileList3">
												<el-button size="small" type="primary" style="margin-top: 6px;">
													<img style="width:15px;height: 15px;" src="../../../../static/img/apply/upload.png" />
													<span style="color: #333333;margin-left: 10px;">上传</span>
												</el-button>
											</el-upload>
										</div>
									</div>
								</div>
								<div class="box">
									<div class="box1">
										<div class="upload-first">
                                                                                                                                 军事部门同意进入或者穿越军事禁航区的书面文件（规定必要时）
											<!--<div class="upload_first1" @click="upload_first"></div>-->
										</div>
										<div>
											<el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-change="handleChange" :file-list="fileList4">
												<el-button size="small" type="primary" style="margin-top: 6px;">
													<img style="width:15px;height: 15px;" src="../../../../static/img/apply/upload.png" />
													<span style="color: #333333;margin-left: 10px;">上传</span>
												</el-button>
											</el-upload>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!--图片上传结束**-->
					<!--设备信息结束**-->
					<el-form-item style="margin-left: 240px;">
						<div class="sum">
							<!--//获取的是ruleForm名称**submitForm('ruleForm')-->
							<el-button type="primary" @click="submitForm()">保存</el-button>
							<el-button type="primary" @click="dialogTableVisible = true">提交</el-button>
							<!--弹窗**-->
							<el-dialog :visible.sync="dialogTableVisible">
								<el-form :model="ruleForm">
									<!--受理立构**-->
									<el-form-item label="受理立构:" :label-width="formLabelWidth">
										<el-select v-model="ruleForm.region" placeholder="请选择受理立构">
											<el-option label="北京海事局" value="shanghai"></el-option>
											<el-option label="上海海事局" value="beijing"></el-option>
										</el-select>
									</el-form-item>
									<!--受理机构结束**-->
									<!--单选框**-->
									<el-form-item label="领取方式:" :label-width="formLabelWidth">
										<el-radio v-model="radio" label="1">现场领取</el-radio>
										<el-radio v-model="radio" label="2">邮寄</el-radio>
									</el-form-item>
									<!--单选框结束**-->
									<!--收件人**-->
									<el-form-item label="收件人:" :label-width="formLabelWidth">
										<el-input v-model="ruleForm.name" auto-complete="off"></el-input>
									</el-form-item>
									<!--收件人结束**-->
									<!--收件电话**-->
									<el-form-item label="收件电话:" :label-width="formLabelWidth">
										<el-input v-model="ruleForm.name" auto-complete="off"></el-input>
									</el-form-item>
									<!--收件电话**-->
									<!--收件地址**-->
									<el-form-item label="收件地址:" :label-width="formLabelWidth">
										<el-input v-model="ruleForm.name" auto-complete="off"></el-input>
									</el-form-item>
									<!--收件地址**-->
								</el-form>
								<div slot="footer" class="dialog-footer">
									<el-button @click="dialogTableVisible = false">取 消</el-button>
									<el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
								</div>
							</el-dialog>
							<!--弹窗结束**-->
							<el-button style="margin-left: 11px;margin-top: 20px;">取消</el-button>
						</div>
					</el-form-item>
				</el-form>
			</div>

		</div>
	</div>
</template>

<script>
	//移入添加弹窗**
	import popupCon from './popup'
	export default {
		components: {
			popupCon
		},
		data() {
			return {
				msgWater: '', //通航水域
				dialogTableVisible: false,
				formLabelWidth: '120px',
				radio: '1',
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄',
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄',
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}],
				radio: '1',
				//				form表单**
				ruleForm: {
					region: '', //申请机构类型
					name: '', //代理人
					meca: '', //申请机构名称
					penson: '', //联系人
					phone: '', //电话
					startTime: '', //活动开始时间
					startEnd: '', //活动结束时间
					unit: '', //建设单位
					struc: '', //施工单位
					place: '', //范围地点
					//					船舶信息**
					ship: [{
						shipName: '',
						shipBh: '',
						shipGj: '',
						shipAIS: '',
						shipType: '',
						shipHq: '',
						shipTime: '',
						shipStartTime: '',
						shippenson: '',
						shipJy: '',
						shipDun: '',
						shipJingDun: '',
						shipGl: '',
						shipchang: '',
						shipWei: '',
						shipHei: '',
						isShow: true,
						shipTable: [{
								date: '2016-05-02',
								name: '王小虎',
								address: '上海市普陀区金沙江路 1518 弄',
							}

						],
						chuanboLits: [{
							date: '2016-05-02',
							name: '王小虎',
							address: '上海市普陀区金沙江路 1518 弄',
						}]
					}],
					//					设备信息**
					Infor: [{
							inforBoatman: '', //船名**
							inforNumber: '' //船检编号**
						},
						{
							inforBoatman: '', //船名**
							inforNumber: '' //船检编号**
						}
					]
					//                  设备信息结束
				},
				rules: {
					region: [{
						required: true,
						message: '请选择活动区域',
						trigger: 'change'
					}],
					name: [{
							required: true,
							message: '请输入活动名称',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 5,
							message: '长度在 3 到 5 个字符',
							trigger: 'blur'
						}
					],
					mech: [{
							required: true,
							message: '请输入活动名称',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 5,
							message: '长度在 3 到 5 个字符',
							trigger: 'blur'
						}
					],
					penson: [{
							required: true,
							message: '请输入活动名称',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 5,
							message: '长度在 3 到 5 个字符',
							trigger: 'blur'
						}
					],
					phone: [{
							required: true,
							message: '请输入活动名称',
							trigger: 'blur'
						},
						{

							max: 5,
							message: '长度在 3 到 5 个字符',
							trigger: 'blur'
						}
					]
				},
				show: false,
				showImg: false,
				modelType: '',
				//          图片上传**
				fileList: [{
					name: 'food.jpeg',
					url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
				}],
				fileList1: [{
					name: 'food2.jpeg',
					url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
				}],
				fileList2: [{
					name: 'food2.jpeg',
					url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
				}],
				fileList3: [{
					name: 'food2.jpeg',
					url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
				}],
				fileList4: [{
					name: 'food2.jpeg',
					url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
				}],
				fileList5: [{
					name: 'food2.jpeg',
					url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
				}],
				fileList6: [{
					name: 'food2.jpeg',
					url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
				}],
				fileList7: [{
					name: 'food2.jpeg',
					url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
				}],
				fileList8: [{
					name: 'food2.jpeg',
					url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
				}]
				//          图片上传结束**
			}

		},
		methods: {
			abso(i) {
				if(this.ruleForm.ship[i].isShow === true) {
					this.ruleForm.ship[i].isShow = false
				} else {
					this.ruleForm.ship[i].isShow = true
				}
			},
			del(i) {
				var shife = this.ruleForm.ship.length
				if(shife == 1) {
					this.ruleForm.ship = []
				} else {
					const newaa = this.ruleForm.ship
					console.log(newaa)
					this.ruleForm.ship = newaa.slice(i, i + 1)
					console.log(this.ruleForm.ship)
				}

			},
			chuanbo() {
				this.$refs.shipPop.shipShow = true
			},
			conImg() {
				this.showImg = !this.showImg
			},
			submit() {
				alert(1);
			},
			delLi() {
				alert(1)
			},
			submitDelog() {

				alert(1);
			},
			submitForm(ruleForm) {
				var params = {
					modelType: this.$route.query.modelType,
					content: JSON.stringify(this.ruleForm)
				}
				tijiaoList(params).then((res) => {
					console.log(this.ruleForm)
				})

				//				this.$refs[ruleForm].validate((valid) => {
				//					if(valid) { //true调接口
				//
				//						alert('submit!');
				//					} else {
				//						console.log('error submit!!');
				//						return false;
				//					}
				//				});
			},
			clickPop(prams) {
				this.ruleForm.ship.push(prams)
			},
			handleChange(file, fileList) {
				this.fileList = fileList.slice(-3);
			},
			upload_first() {
				this.upload_first1()
			},
			shipR() {
				this.show = !this.show
			}
		},

	}
</script>
<style scoped="scoped" lang="scss">
	@import '../sass/waterHuo';
	.shipContent {
		width: 100%;
		height: auto;
	}
</style>