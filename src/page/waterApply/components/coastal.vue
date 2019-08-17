<template>
	<div class="coatalContent">
		<p>沿海水域划定禁航区和安全作业区审批</p>
		<div class="contentNei">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="160px" class="demo-ruleForm">
				<el-row>
					<el-col :span="24">
						<!--申请单位**-->
						<el-form-item label="申请单位" prop="app">
							<el-input v-model="ruleForm.app"></el-input>
						</el-form-item>
					</el-col>
				</el-row>

				<!--代理人**-->
				<el-row :gutter="20">
					<el-col :span="12">
						<!--代理人**-->
						<el-form-item label="代理人" prop="app">
							<el-input v-model="ruleForm.app"></el-input>
						</el-form-item>
					</el-col>
					<!--申请类型**-->
					<el-col :span="12">
						<el-form-item label="申请类型:" prop="region">
							<el-select v-model="ruleForm.region" placeholder="建设单位">
								<el-option label="禁航区划定" value="禁航区划定"></el-option>
								<el-option label="航路划定" value="航路划定"></el-option>
								<el-option label="港外繆地划定" value="港外繆地划定"></el-option>
								<el-option label="安全作业区划定" value="安全作业区划定"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<!--申请类型结束**-->
				</el-row>
				<!--申请类型**-->
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
				<!--划定期限**-->
				<el-row>
					<el-col :span="24">
						<el-form-item label="划定期限">
							<el-col :span="11">
								<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
							</el-col>
							<el-col class="line" :span="2" style="text-align: center;font-size: 20px;color: #cccccc;"> -- </el-col>
							<el-col :span="11">
								<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
							</el-col>
						</el-form-item>
					</el-col>
				</el-row>
				<!--划定期限结束**-->
				<!--划定范围**-->
				<el-row>
					<el-col :span="24">
						<!--代理人**-->
						<el-form-item label="划定范围" prop="app">
							<el-input v-model="ruleForm.app"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<!--划定范围结束**-->
				<!--建设单位**-->
				<el-row>
					<el-col :span="24">
						<!--代理人**-->
						<el-form-item label="建设单位" prop="app">
							<el-input v-model="ruleForm.app"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<!--建设单位结束**-->
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
										有关主管部门关于作业或活动的批准文件
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
										与通航安全有关的技术资料及施工作业图纸（施工简图）
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
									禁航事实理由、时间、水域、活动内容
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
										已制定安全及防污染措施的证明材料
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
								                禁航区划定技术评估（对通航安全可能构成重大影响的）
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
				<!--申请材料**-->
				<el-form-item style="margin-left: 240px;">
					<div class="sum">
						<!--//获取的是ruleForm名称**submitForm('ruleForm')-->
						<el-button type="primary" @click="submitForm()">保存</el-button>
						<el-button type="primary" @click="dialogTableVisible = true">提交</el-button>
						<el-button style="margin-left: 11px;margin-top: 20px;">取消</el-button>
					</div>
				</el-form-item>
			</el-form>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				app: '', //申请单位
				Xm: '', //项目名称
				Xtype: '', //岸线类型
				msgWater: '', //通航水域
				desc: '', //岸线用途
				rangeCon: '', //岸线范围
				remarks: '', //备注
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
				//				show: false,
				showImg: false,
				modelType: '',
				show: false,
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
	@import '../sass/naviga';
	.coatalContent {
		width: 100%;
		height: auto;
		& p {
			text-align: center;
		}
	}
</style>