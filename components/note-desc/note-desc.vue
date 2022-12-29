<template>
	<view class="note-desc-root">
		<u-row>
			<text class="note-desc">
				{{text}}
			</text>
		</u-row>
	</view>
</template>

<script>
	export default {
		name:"note-desc",
		props:{
			note:{
				type:String,
				default:"",
				required:true
			}
		},
		data() {
			return {
				
			};
		},
		computed:{
			text(){
				/*中央正纯律 Central Standard Note*/
				if(this.note.indexOf("Central")!=-1){
					return "中央正纯律 (Central Standard Note)";
				}
				
				/*Cluster律 Cluster Note*/
				if(this.note.indexOf("Cluster")!=-1){
					return "Cluster律 (Cluster Note)";
				}
				
				/*Cult Ciel律 Cult Ciel Note*/
				if(this.note.indexOf("Cult")!=-1){
					return "Cult Ciel律 (Cult Ciel Note)";
				}
				
				/*古月奏律 Ancient Metafaless*/
				if(this.note.indexOf("Metafalss")!=-1){
					return "古Metafalss律 (Metafalss Note)";
				}
				
				/*α律 */
				if(this.note.indexOf("Alpha")!=-1){
					return "α律 (Alpha Note [EOLIA])";
				}
				
				/*新约 New Testament of Pastalie*/
				if(this.note.indexOf("New")!=-1){
					return "新约 (New Testament of Pastalie)";
				}
				
				return "未知方言 ("+this.note+")";
				
			}
		}
	}
</script>

<style>
	.note-desc-root{
		margin-left: 10rpx;
		margin-right: 10rpx;
		margin-top: 6rpx;
		margin-bottom: 6rpx;
		
	}
	.note-desc{
		border-radius: 10rpx;
		border-color: #88888888;
		border-width: 2rpx;
		font-size: 30rpx;
		font-family: ;
		padding-left: 15rpx;
		padding-right: 15rpx;
		padding-top: 5rpx;
		padding-bottom: 5rpx;
		opacity: 0.75;
		
		background-image: linear-gradient(
			to right,#00BFFF,#abfff8
		);
		border-width: 15rpx;
	}
</style>