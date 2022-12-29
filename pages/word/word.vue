<template>
	<view class="word-page-root">
		<u-sticky bgColor="#eee">
			<text class="word-header">{{word}}</text>
			<u-divider :hairline="false"></u-divider>
		</u-sticky>
		<view class="word-content">
			<pos-desc-set :pos="pos"></pos-desc-set>
			<note-desc :note="note"></note-desc>
			<spoken-desc :spoken="spoken"></spoken-desc>
			<u-gap height="5"></u-gap>
			<u-divider></u-divider>
			<translate-desc
				:chi="translate.chi"
				:eng="translate.eng"
				:jap="translate.jap"
			></translate-desc>
			<u-gap height="5"></u-gap>
			<u-divider></u-divider>
			<hymm-desc :hym="word"></hymm-desc>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				word:"hymmnos",
				pos:"n. E.V",
				note:"Central Standard Note",
				spoken:"hiumunosuーッ",
				translate:{
					chi:"Hymmnos、歌曲。测试用，测试用，测试用，测试用，测试用，测试用，测试用，",
					eng:"Hymmnos, song",
					jap:"Hymmnos、唄"
				}
			}
		},
		methods: {

		},
		onLoad(option){
			var item = JSON.parse(decodeURIComponent(option.item));
			this.word = item.hym+"";
			this.pos = item.pos+"";
			this.note = item.note+"";
			this.spoken = item.spoken+"";
			this.translate ={
				chi: item.chi,
				eng: item.eng,
				jap: item.jap
			};
		}
	}
</script>

<style>
body{
	background-color: #eee;
}
.word-header{
	font-size: 60px;
	font-family: 'Times New Roman', Times, serif;
	padding-left: 40rpx;
	font-weight: 400;
	font-style: italic;
}
.word-content{
	padding-left: 40rpx;
	padding-right: 40rpx;
}

</style>
