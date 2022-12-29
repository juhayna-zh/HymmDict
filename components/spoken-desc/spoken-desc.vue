<template>
	<view class="spoken-desc-root">
		<u-row>
			<u-tag 
				:text="text"
				plain
				plainFill
				size="large"
				icon="mic"
			></u-tag>
		</u-row>
	</view>
</template>

<script>
	export default {
		name:"spoken-desc",
		props:{
			spoken:{
				type:String,
				default:"-",
				required:true,
			}
		},
		data() {
			return {
				
			};
		},
		computed:{
			text(){
				return '['+this.spoken+']';
			}
		}
	}
</script>

<style>
	.spoken-desc-root{
		margin-left: 10rpx;
		margin-right: 10rpx;
		margin-top: 15rpx;
		margin-bottom: 15rpx;
	}
	.spoken-desc-text{
		font-size: 35rpx;
	}
</style>