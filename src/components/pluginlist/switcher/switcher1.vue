<template>
	<div class="el-switcher-content">
		<div class="el-background" :class="{'off-background':off}" @click="change">
			<div class="btn" :class="{'off':off}"></div>
		</div>	
	</div>
</template>
<script>
	export default {
		name:"switcher1",
		data(){
			return {off:false}
		},
		methods:{
			change(){
				let me=this;
				me.off=!me.off;
			}
		}
	}
</script>
<style scoped lang='less'>
	.el-switcher-content{
		cursor:pointer;
		height: 30px;
		width: 50px;
		margin:0 auto;
		.el-background{
			box-shadow: 0px 0px 2px #B0B0B0 inset;
			position: relative;
			height: 100%;
			background-color: rgb(75, 215, 99);
			border-radius:30px;
			transition: background-color 500ms;
			.btn{
				box-shadow:0px 0px 2px #CDCDCD inset;
				position:absolute;
				left:50%;
				width: 30px;
				height: 30px;
				border-radius:50%;
				background-color:#fff;
				transition:left 500ms;
			}
			.off{
				left:0;
			}
		}
		.off-background{
			background-color:rgb(249, 249, 249);

		}
	}
</style>