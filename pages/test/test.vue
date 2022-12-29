<template>
	<view>
		<text>123</text>
		<test-rate></test-rate>
		<view style="padding: 40rpx; width:100rpx;">
			<u-button  type="primary" text="确定"></u-button>
		</view>
		<word-input
			@update="searchWord()"
			v-model.trim="value"
			></word-input>
		<search-result-list></search-result-list>
		<button @click="btnClick">点击</button>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				value:""
			}
		},
		methods: {
			searchWord(){
				//TODO:查询Hymmnos单词
				console.log("要查询的单词:"+this.value);
			},
			async btnClick(){
				//注意要在方法前加async，调用云对象的方法也要加await
				const testObj = uniCloud.importObject('test-obj');
				let data = await testObj.getAllWord();
				uni.showModal(
					{ 
						content:JSON.stringify(data),
						showCancel: false
					}
				);
			}
		}
	}
</script>

<style>

</style>
