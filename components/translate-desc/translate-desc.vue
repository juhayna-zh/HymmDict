<template>
	<view>
		<view v-if="chi!=null &&chi!=undefined && chi.trim()!=''">
			<u-row >
				<u-col span="3">
					<text class="trans-lang-tip">&emsp;中&emsp;文</text>
				</u-col>
				<u-col span="9">
					<text>{{chi}}</text>
				</u-col>
			</u-row>
			<u-gap height="10"></u-gap>
		</view>
		<view v-if="eng!=null &&eng!=undefined && eng.trim()!=''">
			<u-row >
				<u-col span="3">
					<text class="trans-lang-tip">English</text>
				</u-col>
				<u-col span="9">
					<text>{{eng}}</text>
				</u-col>
			</u-row>
			<u-gap height="10"></u-gap>
		</view>
		<view v-if="jap!=null &&jap!=undefined && jap.trim() !=''">
			<u-row >
				<u-col span="3">
					<text class="trans-lang-tip">日本語</text>
				</u-col>
				<u-col span="9">
					<text>{{jap}}</text>
				</u-col>
			</u-row>
			<u-gap height="10"></u-gap>
		</view>
		
	</view>
</template>

<script>
	export default {
		name:"translate-desc",
		props:{
			chi:{
				type:String,
				default:null
			},
			eng:{
				type:String,
				default:null
			},
			jap:{
				type:String,
				default:null
			}
		},
		data() {
			return {
	
			};
		}
	}
</script>

<style>
	.trans-lang-tip{
		color: gray;
	}
</style>