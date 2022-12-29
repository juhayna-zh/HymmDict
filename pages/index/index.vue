<template>
	<view>
		<!-- <navigator url="/pages/test/test">
			<button>进入测试界面</button>
		</navigator>
		<navigator url="/pages/word/word">
			<button>进入查词界面</button>
		</navigator> -->
		<u-gap height="40"></u-gap>
		<word-input
			ref="wordInput"
			@update="searchWord()"
			v-model.trim="value"
            @focus="onFocus()"
			@change="onChange()"
			></word-input>
		<view v-if="showResult">
			<search-result-list
				:search-data="searchData"
			></search-result-list>
		</view>
        <view v-if="notFound">
            <not-found></not-found>
        </view>
		<view class="version-view">
			<text class="version-text">HymmDict v0.2.0</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				value: "",
				searchData: [],
				notFound: false
			};
		},
		onLoad() {

		},
		methods: {
			async searchWord(){
				// console.log("要查询的单词:"+this.value);
				const searchObj = uniCloud.importObject('search-obj');
				const val = this.$refs.wordInput.value;
				if(val==""){
					this.searchData = [];
					return;
				}
				let res = await searchObj.searchText(val);
				if(res.errMsg == "未输入文字"){
					this.searchData = [];
					return;
				}
				// uni.showModal({
				// 	title:"res",
				// 	content:JSON.stringify(res)
				// })
				this.searchData = res.data;
                if(this.searchData.length == 0){
                    this.notFound = true;
                }
			},
            onFocus(){
                this.notFound = false;
            },
			onChange(){
				this.searchData = [];
			}
		},
		computed:{
			showResult(){
				return this.searchData != null && this.searchData.length != [];
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	
	.version-view{
		display: flex;
		align-items: center;
		flex-direction: column;
	}
	
	.version-text{
		display: inline-flex;
		color:#ccc;
		position:fixed;
		bottom: 30px;
		font-size: 13px;
		margin: 0 auto;
	}
</style>
