<template>
	<view class="pos-desc-set-root">
		<u-row>
			<view
				v-for="ch in chars"
			>
				<pos-desc :char="ch"></pos-desc>
			</view>
		</u-row>
		
	</view>
</template>

<script>
	export default {
		name:"pos-desc-set",
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
					res.push(this.pos+"")//未知
				}
				return res;
			}
		},
	}
</script>

<style>
	.pos-desc-set-root{
	}
</style>
