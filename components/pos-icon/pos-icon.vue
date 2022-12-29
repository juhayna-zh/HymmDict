<template>
	<view class="pos-icon-root">
		<text
			:class="[cls,'pos-icon']"
		>
			{{char}}
		</text>
	</view>
</template>

<script>
	export default {
		name:"pos-icon",
		props:{
			char:{ //一定要注意格式，如果直接写要用char:String！
				type:String,
			} 
		},
		data() {
			return {
			};
		},
		computed: {
			cls(){
				switch(this.char){
					case '想': return 'xiang';
					case '感': return "gan";
					case '形': return "xing";
					case '名': return "ming";
					case '副': return "fu";
					case '动': return "dong";
					case '连': return "lian";
					case '介': return "jie";
					case '代': return "dai";
					default: return "qita";
				};
			}
		}
	};
</script>

<style>
	.pos-icon-root{
		margin-left: 2rpx;
		margin-right: 2rpx;
	}
	.pos-icon{
		border-radius: 10rpx;
		border-color: #88888888;
		border-width: 2rpx;
		font-size: 24rpx;
		padding-left: 8rpx;
		padding-right: 8rpx;
		padding-top: 2rpx;
		padding-bottom: 2rpx;
	}
</style>

<docs>
	表达词性（Part of Speech）的图标。
</docs>