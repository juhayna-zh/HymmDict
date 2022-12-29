<template>
	<view>
		<view class="not-found-root">
			<u-gap height="100rpx"></u-gap>
			<view >
				<u-icon
					name="info-circle"
					size="200rpx"
					color="#ccc"
				></u-icon>
			</view>
			<u-gap height="20rpx"></u-gap>
			<u--text type="info" text="没有找到结果" align="center"></u--text>
		</view>
	</view>
</template>

<script lang="ts">
	export default {
		name:"not-found",
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.not-found-root{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
</style>
