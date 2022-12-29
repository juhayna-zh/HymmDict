<template>
	<view class="pos-icon-set-root">
		<u-row>
			<!-- 用u-row强制将元素放到一行，用u-col配合改变比例 -->
			<view
				v-for="ch in chars"
			>
				<pos-icon :char="ch"></pos-icon>
			</view>
		</u-row>
		
	</view>
</template>

<script>
	export default {
		name:"pos-icon-set",
		props:{
			pos:{ 
				type:String,
				default:"",
				required:true
			} 
		},
		data() {
			return {
				
			};
		},
		computed: {
			chars() {
				var res = [];
				if(this.pos.indexOf('E.S')!=-1){
					res.push("想"); //Emotion Sound 想音
				}
				if(this.pos.indexOf('E.V')!=-1){
					res.push("感"); //Emotion Verb 感音动词
				}
				if(this.pos.indexOf('adj')!=-1){
					res.push("形"); //形容词
				}
				if(this.pos.indexOf('n.')!=-1){
					res.push("名"); //名词
				}
				if(this.pos.indexOf('adv')!=-1){
					res.push("副"); //副词
				}
				if(this.pos.indexOf('v.')!=-1){
					var p = this.pos.indexOf('v.');
					//以下排除adv.的情况
					if(p==0||this.pos[p-1]!='d'){
						res.push("动");
					}
				}
				if(this.pos.indexOf('conj')!=-1){
					res.push("连"); //连词
				}
				if(this.pos.indexOf('prep')!=-1){
					res.push("介"); //介词
				}
				if(this.pos.indexOf('pron')!=-1){
					res.push("代"); //代词
				}
				if(res.length==0){
					res.push("其它")//未知
				}
				return res;
			}
		},
	}
</script>

<style>
	.pos-icon-set-root{
	}
</style>

<docs>
	根据英文的词性描述pos生成对应的图标。可以有多个图标。
</docs>