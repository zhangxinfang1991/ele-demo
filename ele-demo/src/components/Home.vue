<template>
	<div class="home">
		<div class="header">	
			<span class="header-text">
				{{address}}
			</span>
			<!--<i class="el-icon-caret-bottom"></i>-->
		</div>
		<div class="home-content">
			<div class="home-serch">
				<el-input v-model="inputText" placeholder="请输入商家或商品名称"></el-input>
			</div>
			<div class="home-banner">
				<div class="block">
				    <el-carousel trigger="click" height="150px">
				      <el-carousel-item v-for="item in 4" :key="item">
				        <h3>{{ item }}</h3>
				      </el-carousel-item>
				    </el-carousel>
				  </div>
			</div>
		</div>
		
	</div>
	 
</template>

<script>
	export default{
		name:'home',
		data(){
			return {
				address:'河南省郑州市电子商务产业园3号楼3楼',
				inputText:''
			}
		}	
	}
</script>

<style>
	.header{
		width:100%;
		height: 90px;
		background:#3492ea;
		text-align: center;
		font-size: 33px;
		line-height: 90px;
		color: #fff;
	}
	.header-text{
		display: inline-block;
		width:50%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.home-serch{
		width: 100%;
		height: 80px;
		background: #3492ea;
		text-align: center;
	}
	.home-serch input{
		width:80%;
		height: 60px;
		line-height:60px;
		font-size: 24px;
		color: #999;
		outline: none;
	}
	
	.el-carousel__item h3 {
	    color: #475669;
	    font-size: 14px;
	    opacity: 0.75;
	    line-height: 150px;
	    margin: 0;
	  }

	.el-carousel__item:nth-child(2n) {
	   background-color: #99a9bf;
	}
  
    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
</style>