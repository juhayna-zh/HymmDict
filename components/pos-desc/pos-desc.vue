<template>
	<view class="pos-desc-root">
		<text
			:class="[cls,'pos-desc']"
		>
			{{text}}
		</text>
	</view>
</template>

<script>
	export default {
		name:"pos-desc",
		props:{
			char:{
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
			},
			text(){
				switch(this.char){
					case '想': return '想音词 (E.S)';
					case '感': return "感音词 (E.V)";
					case '形': return "形容词 (adj.)";
					case '名': return "名词 (n.)";
					case '副': return "副词 (adv.)";
					case '动': return "动词 (v.)";
					case '连': return "连词 (conj.)";
					case '介': return "介词 (prep.)";
					case '代': return "代词 (pron.)"
					default: return `其它 (${this.char})`;
				};
			}
		}
	};
</script>

<style>
	.pos-desc-root{
		margin-left: 10rpx;
		margin-right: 10rpx;
		margin-top: 6rpx;
		margin-bottom: 6rpx;
	}
	.pos-desc{
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
	}
</style>