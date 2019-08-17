<template>
	<div>
		<div class="waterContent">
			<p>水上水下活动申请</p>
			<div class="contentNei">
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="160px" class="demo-ruleForm">
					<el-row :gutter="20">
						<!--申请机构类型：-->
						<el-col :span="12">
							<el-form-item label="申请机构类型:" prop="region">
								<el-select v-model="ruleForm.region" placeholder="建设单位">
									<el-option label="活动主办单位" value="活动主办单位"></el-option>
									<el-option label="施工单位" value="施工单位"></el-option>
								</el-select>
							</el-form-item>
						</el-col>
						<!--代理人**-->
						<el-col :span="12">
							<el-form-item label="代理人" prop="name">
								<el-input v-model="ruleForm.name"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<!--申请机构名称：-->
					<el-row>
						<el-col :span="24">
							<el-form-item label="申请机构名称" prop="meca">
								<el-input v-model="ruleForm.meca"></el-input>
							</el-form-item>
						</el-col>
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
						<!--机构地址**-->
						<el-col :span="24">
							<el-form-item label="机构地址" prop="phone">
								<el-input v-model="ruleForm.phone"></el-input>
							</el-form-item>
						</el-col>
						<!--机构地址结束**-->
						<!--项目名称**-->
						<el-col :span="24">
							<el-form-item label="项目名称" prop="phone">
								<el-input v-model="ruleForm.phone"></el-input>
							</el-form-item>
						</el-col>
						<!--项目名称结束**-->
					</el-row>
					<!--活动开始日期：-->
					<el-row :gutter="20">
						<el-col :span="12">
							<el-form-item label="活动开始时间:" prop="time">
								<span class="demonstration"></span>
								<el-date-picker v-model="ruleForm.startTime" type="date" placeholder="请选择开始时间">
								</el-date-picker>
							</el-form-item>
						</el-col>
						<!--活动结束时间-->
						<el-col :span="12">
							<el-form-item label="活动结束时间:" prop="timejies">
								<span class="demonstration"></span>
								<el-date-picker v-model="ruleForm.startEnd" type="date" placeholder="请选择开始时间">
								</el-date-picker>
							</el-form-item>
						</el-col>
					</el-row>
					<!--建设单位-->
					<el-row>
						<el-col :span="24">
							<el-form-item label="建设单位" prop="unit">
								<el-input v-model="ruleForm.unit"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<!--建设单位结束-->
					<!--动主办单位/施工单位：-->
					<el-row>
						<el-col :span="24">
							<el-form-item label="动主办单位/施工单位:" prop="struc">
								<el-input v-model="ruleForm.struc"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<!--动主办单位/施工单位结束：-->
					<!--围地点：-->
					<el-row>
						<el-col :span="24">
							<el-form-item label="围地点:" prop="place">
								<el-input v-model="ruleForm.place"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<!--范围地点**-->
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
									<!--船名-->
									<el-row :gutter="20">
										<el-col :span="11">
											<el-form-item label="船名:" prop="shipName">
												<el-input v-model="item.shipName"></el-input>
											</el-form-item>
										</el-col>
										<!--船检编号：-->
										<el-col :span="11">
											<el-form-item label="船检编号:" prop="shipBh">
												<el-input v-model="item.shipBh"></el-input>
											</el-form-item>
										</el-col>
									</el-row>
								</div>
								<div class="rowShow" v-show="!item.isShow">
									<!--籍港（国籍）：-->
									<el-row :gutter="20">
										<el-col :span="11">
											<el-form-item label="籍港（国籍）:" prop="penson">
												<el-input v-model="item.shipGj"></el-input>
											</el-form-item>
										</el-col>
										<!--AIS：：-->
										<el-col :span="11">
											<el-form-item label="AIS:" prop="penson">
												<el-input v-model="item.shipAIS"></el-input>
											</el-form-item>
										</el-col>
									</el-row>
									<!--船舶类型：-->
									<el-row :gutter="20">
										<el-col :span="11">
											<el-form-item label="船舶类型 :" prop="penson">
												<el-input v-model="item.shipType"></el-input>
											</el-form-item>
										</el-col>
										<!--航区：：：-->
										<el-col :span="11">
											<el-form-item label="航区 :" prop="penson">
												<el-input v-model="item.shipHq"></el-input>
											</el-form-item>
										</el-col>
									</el-row>
									<!--建造完工日期：-->
									<el-row :gutter="20">
										<el-col :span="11">
											<el-form-item label="建造完工日期:" prop="mech">
												<span class="demonstration"></span>
												<el-date-picker v-model="item.shipTime" type="date" placeholder="请选择开始时间">
												</el-date-picker>
											</el-form-item>
										</el-col>
										<!--改建完工日期：-->
										<el-col :span="11">
											<el-form-item label="改建完工日期:" prop="mech">
												<span class="demonstration"></span>
												<el-date-picker v-model="item.shipStartTime" type="date" placeholder="请选择开始时间">
												</el-date-picker>
											</el-form-item>
										</el-col>
									</el-row>
									<!--所有人**-->
									<el-row :gutter="20">
										<el-col :span="11">
											<el-form-item label="所有人 :" prop="penson">
												<el-input v-model="item.shippenson"></el-input>
											</el-form-item>
										</el-col>
										<!--经营人：：：-->
										<el-col :span="11">
											<el-form-item label="经营人 :" prop="penson">
												<el-input v-model="item.shipJy"></el-input>
											</el-form-item>
										</el-col>
									</el-row>
									<!--总吨：-->
									<el-row :gutter="20">
										<el-col :span="7">
											<el-form-item label="总吨 :" prop="penson">
												<el-input v-model="item.shipDun"></el-input>
											</el-form-item>
										</el-col>
										<!--经营人：：：-->
										<el-col :span="7">
											<el-form-item label="净吨:" prop="penson">
												<el-input v-model="item.shipJingDun"></el-input>
											</el-form-item>
										</el-col>
										<el-col :span="8">
											<el-form-item label="主机功率 :" prop="penson">
												<el-input v-model="item.shipGl"></el-input>
											</el-form-item>
										</el-col>
									</el-row>
									<!--总长**-->
									<el-row :gutter="20">
										<el-col :span="7">
											<el-form-item label="总长" prop="penson">
												<el-input v-model="item.shipchang"></el-input>
											</el-form-item>
										</el-col>
										<!--型宽：：：：-->
										<el-col :span="7">
											<el-form-item label="型宽:" prop="penson">
												<el-input v-model="item.shipWei"></el-input>
											</el-form-item>
										</el-col>
										<el-col :span="8">
											<el-form-item label="型深 :" prop="penson">
												<el-input v-model="item.shipHei"></el-input>
											</el-form-item>
										</el-col>
									</el-row>
									<!--船舶证书**-->
									<div class="cate">
										船舶证书
									</div>
									<!--表单**-->
									<el-table :data="item.shipTable" border style="width: 100%">
										<el-table-column prop="date" label="证书名称" width="180">
										</el-table-column>
										<el-table-column prop="name" label="内容证日期" width="180">
										</el-table-column>
										<el-table-column prop="address" label="有效期">
										</el-table-column>
										<el-table-column prop="address" label="最近一次检验日期">
										</el-table-column>
										<el-table-column prop="address" label="备注">
										</el-table-column>
									</el-table>
									<!--表单结束**-->
									<!--船舶证书**-->
									<div class="cate">
										船员证书
									</div>
									<!--表单**-->
									<el-table :data="item.chuanboLits" border style="width: 100%">
										<el-table-column prop="date" label="姓名" width="180">
										</el-table-column>
										<el-table-column prop="name" label="适任证书编号" width="180">
										</el-table-column>
										<el-table-column prop="address" label="发证日期">
										</el-table-column>
										<el-table-column prop="address" label="等级/职务">
										</el-table-column>
										<el-table-column prop="address" label="航区">
										</el-table-column>
									</el-table>
									<!--表单结束**-->
								
								</div>
							</li>
						</ul>
					</div>

					<!--船舶信息结束**-->
					<!--设备信息**-->
					<div class="ship" style=" margin-bottom: 20px;">
						<div class="shipWidth">
							<div class="shipLeft">
								<img src="../../../../static/img/apply/set.png" /> 设备信息
								<span style="color: #666666;font-size: 14px;">是否有施工作业船舶：     </span>
								<el-radio v-model="radio" label="1">是</el-radio>
								<el-radio v-model="radio" label="2">否</el-radio>
								<!--<div class="xian"></div>-->
							</div>
							<!--添加**-->
							<div class="shipRight" style="margin-right: 16px;">添加</div>
							<!--添加结束**-->
							<!--图片**-->
							<div class="conImg" @click="conImg">
								<span v-show="showImg">展开</span>
								<span v-show="!showImg">收起</span>
								<span>
											<img v-show="showImg" src="../../../../static/img/apply/down.png" />
											<img v-show="!showImg" src="../../../../static/img/apply/up.png" />
									     </span>
							</div>
						</div>
					</div>
					<!--设备内容**-->
					<div class="equipUl" v-show="showImg">
						<ul class="li">
							<div class="delLi" @click="delLi"></div>
							<li>
								<div class="delLi" @click="delLi">
									<img src="../../../../static/img/apply/fork.png" />
								</div>
								<el-row :gutter="20">
									<el-col :span="11">
										<!--设备名称：-->
										<el-form-item label="设备名称 :" prop="name">
											<el-input v-model="ruleForm.name" style="width: 300px !important;"></el-input>
										</el-form-item>
									</el-col>
									<!--主要技术参数：-->
									<el-col :span="11">
										<!--设备名称：-->
										<el-form-item label="主要技术参数 :" prop="name">
											<el-input v-model="ruleForm.name" style="width: 300px !important;"></el-input>
										</el-form-item>
									</el-col>
								</el-row>
							</li>
						</ul>
					</div>
					<!--图片上传**-->
					<div class="hello">
						<div class="upload">
							<div class="ship shipUpload">
								<div class="shipZcontent">
									<div class="shipLeft cailiao">
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
											项目的批准文件（需办理批准手续的项目）
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
											水上水下活动方案，施工作业安全及防污染责任制、保障措施和应急预案
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
											与水上水下活动有关的合同或协议书（建设、施工单位为同一单位时除外）
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
											施工作业单位的资质认证文书（施工作业时）
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
								<div class="box">
									<div class="box1">
										<div class="upload-first">
											已通过评审的通航安全评估报告（对通航安全、防治船舶污染可能构成重大影响的）
											<!--<div class="upload_first1" @click="upload_first"></div>-->
										</div>
										<div>
											<el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-change="handleChange" :file-list="fileList5">
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
											公安部门同意举行大型群众性活动、体育比赛的安全许可文书
											<!--<div class="upload_first1" @click="upload_first"></div>-->
										</div>
										<div>
											<el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-change="handleChange" :file-list="fileList6">
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
											大型群众性活动、体育比赛安全工作方案
											<!--<div class="upload_first1" @click="upload_first"></div>-->
										</div>
										<div>
											<el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-change="handleChange" :file-list="fileList7">
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
											委托证明及委托人和被委托人身份证明
										</div>
										<div>
											<el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-change="handleChange" :file-list="fileList8">
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
</style>