<template>
	<div class="popupTagle">
		<div class="popupContent" v-show="shipShow">
			<!--<el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>-->
			<el-dialog :visible.sync="shipShow">
				<el-form :model="form">
					<el-row :gutter="20">
						<el-col :span="10">
							<!--船名-->
							<el-form-item label="船名:" :label-width="formLabelWidth">
								<el-input v-model="form.name" autocomplete="off"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="10">
							<!--船检编号-->
							<el-form-item label="船检编号:" :label-width="formLabelWidth">
								<el-input v-model="form.name" autocomplete="off"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-button type="primary" @click="chaxun" class="chaxun">查询</el-button>
					<!--表单**-->
					<el-table :data="gridData">
						<el-table-column property="date" label="中文船名" width="150"></el-table-column>
						<el-table-column property="name" label="英文船名" width="200"></el-table-column>
						<el-table-column property="address" label="初次登记号"></el-table-column>
						<el-table-column property="address" label="IMO编号"></el-table-column>
						<el-table-column property="address" label="船籍港"></el-table-column>
						<el-table-column property="address" label="船舶种类"></el-table-column>
						<el-table-column property="address" label="建造日期"></el-table-column>
					</el-table>
					<!--表单**-->

				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button @click="shipShow = false">取 消</el-button>
					<el-button type="primary" @click="submitPop">确 定</el-button>
				</div>
			</el-dialog>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				//				dialogVisible: false,
				shipShow: false,
				formLabelWidth: '120px',
				form: {
					name: ''
				},
				gridData: [{
						date: '2016-05-02',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1518 弄'
					},
					{
						date: '2016-05-03',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1518 弄'
					}
				]
			}
		},
		methods: {
			handleClose(done) {
				this.$confirm('确认关闭？')
					.then(_ => {
						done();
					})
					.catch(_ => {});
			},
			chaxun() {
				alert(1);
			},
			submitPop() {
				var aaa = {
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
				}
				this.$emit("clickPop", aaa)
				this.shipShow = false
			}
		}
	}
	//	}
</script>

<style lang="scss" scoped="scoped">
	.popupTagle {
		.popupContent {
			width: auto;
			height: auto;
			position: relative;
			/deep/.el-dialog {
				width: 70% !important;
			}
			.chaxun {
				width: 70px;
				height: 36px;
				position: absolute;
				bottom: 0;
				top: 13%;
				right: 51px;
			}
		}
	}
</style>