<template>
	<view class="search-result-list-root">
		<u-list height="700rpx">
			<u-list-item
				v-for="item in sortedSearchData"
			>
				<u-cell
					:title="item.hym"
					:value="shorter(item.chi)"
					@click="cellClick(item)"
					:border="false"
					style="height:80rpx;"
					isLink
					center
				>
				<view slot="icon">
					<pos-icon-set :pos="item.pos" style="float: left;"></pos-icon-set>
				</view>
				
				</u-cell>
			</u-list-item>
		</u-list>
	</view>
</template>

<script>
	export default {
		name:"search-result-list",
		props:{
			searchData:{
				type:Array,
				default:[]
			}
		},
		data() {
			return {
			};
		},
		methods:{
			shorter(str){
				if(str.length>12){
					return str.substring(0,11)+"...";
				}
				return str;
			},
			cellClick(item){
				// console.log("点击了"+JSON.stringify(item));
				uni.navigateTo({
					url:"/pages/word/word?item="+ encodeURIComponent(JSON.stringify(item))
				})
			}
		},
		computed:{
			sortedSearchData(){
				// TODO:对结果进行适当排序
				return this.searchData;
			}
		}
	}
</script>

<style>
 .search-result-list-root{
	 margin-left: 30rpx;
	 margin-right: 30rpx;
 }

</style>