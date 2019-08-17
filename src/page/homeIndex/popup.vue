<template>
	<div>
		
		<div class="menudalog">
				<div class="menuDiv">
					<div class="menuleft">
						直属海事局：
					</div>
					<div class="menuright">
						<ul>
							<li v-for='(item,index) in datalist' :key='index' @mouseover.stop="firstmouseover(index)" @click.stop="fitstClick(item.govName,item.govCode)">{{item.govName}}</li>
						</ul>
					</div>
				</div>
				<div class="menuDiv">
						<div class="menuleft">
						上海分支局：
					</div>
					<div class="menuright">
						<ul>
							<li v-for="(item,i) in twoList" :key='i' @mouseover.stop='secondmouseover(i)' @click.stop="twoClick(item.govName,item.govCode)">{{item.govName}}</li>
						</ul>
					</div>
				</div>
				<div class="menuDiv">
						<div class="menuleft">
						上海办事处：
					</div>
					<div class="menuright">
						<ul>
							<li v-for="(item,index) in threeList" :key='index' @click.stop="threeClick(item.govName,item.govCode)">{{item.govName}} </li>
						</ul>
					</div>
				</div>
				
		</div>
	
	</div>
</template>

<script>
	export default {
		props:{
		  datalist:{
		  	type:Array,
		  	default:[]
		  },
		  datalistTwo:{
		  	type:Array,
		  	default:[]
		  },
		  datalistTree:{
		  	type:Array,
		  	default:[]
		  }
		},
		data() {
			return {
				firstindex:0,
				secondindex:0,
				twoList:this.datalistTwo,
				threeList:this.datalistTree,
				choose:{
					name:'',
					code:''
				}
			}
		},
		methods:{
			firstmouseover(index){
				this.firstindex = index
				this.twoList = this.datalist[this.firstindex].govPortals
				this.threeList = this.datalist[this.firstindex].govPortals[0].govPortals
			},
			secondmouseover(i){
				this.secondindex = i
				this.threeList = this.datalist[this.firstindex].govPortals[this.secondindex].govPortals
			},
			fitstClick(name,code){
				this.choose.name = name
				this.choose.code = code
				this.$emit('getname',this.choose)
			},
			twoClick(name,code){
				this.choose.name = name
				this.choose.code = code
				this.$emit('getname',this.choose)
			},
			threeClick(name,code){
				this.choose.name = name
				this.choose.code = code
				this.$emit('getname',this.choose)
			}
		},
		mounted(){
			console.log(this.twoList);
			console.log(this.threeList)
//			this.twoList = this.datalist[0].govPortals
//			this.threeList = this.datalist[0].govPortals[0].govPortals
		}
	}
</script>
<style scoped="scoped">
	.menudalog{
		height: auto;
		box-sizing: border-box;
		width: 100%;
		font-size: 14px;
		color: #666666;
	}
	.menuDiv{
		width:100%;
		height: auto;
		border-bottom: 1px solid #D9D9D9;
		box-sizing: border-box;
		zoom:1;
	}
	.menuDiv:after{
		content: '';
		display: block;
		clear: both;
		visibility: hidden;
		height: 0;
	}
	.menuleft{
		padding: 10px;
		float: left;
		width:105px;
		height: auto;
		box-sizing: border-box;
	}
	.menuright{
		float: right;
	  width: 872px;
		height: auto;
	}
	.menuright ul{
		margin: 0;
		padding: 0;
	}
	.menuright ul li{
		list-style: none;
		float: left;
		margin-right: 14px;
		padding: 10px;
		box-sizing: border-box;
		cursor: pointer;
	}
    .menudalog div:nth-child(3){
    	border-bottom: 1px solid transparent;
    }
    .menuright ul li:hover{
    	background: #004098;
    	color: #fff;
    }
</style>