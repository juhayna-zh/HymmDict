<template>
	<view>
		<text class="hymm-desc-text">
			{{hym}}
		</text>
	</view>
</template>

<script>
	export default {
		name:"hymm-desc",
		props:{
			hym:{
				type:String,
				required:true
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.hymm-desc-text{
		font-size: 125rpx;
		font-family: 'hymmnos';
		margin-left: 30rpx;
	}

</style>