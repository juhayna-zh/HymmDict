<template>
	<view class="word-input-view">
		<u--input
			v-model="value"
			@clear="change"
			@blur="blur"
            @focus="focus"
		    placeholder="输入单词或释义"
			prefixIcon="search"
			type="text"
		    border="surround"
			clearable
			class="word-input-field"
			fontSize="18px"
			shape="circle"
		  >
		  </u--input>
	</view>
</template>

<script>
	export default {
		name:"word-input",
		model:{
			prop:'value',
			event:'update'
		},
		data() {
			return {
				value:"",
				oldValue:"",
			}
		},
		props: {
			
		},
		methods: {
			change() {
				// console.log("changed");
				// this.$emit('change',this.value);
				this.$emit("change");
			},
			blur(){
				// console.log("blur "+this.value)
				if(this.value == this.oldValue){
					return;
				}
				this.oldValue = this.value;
				this.$emit('update',this.value); //注意写法！后面要紧跟着被传递的量！
			},
            focus(){
                this.$emit('focus'); //似乎不能向上传递信号?
            }
		},
	}
</script>

<style>
	.word-input-view{
		padding: 10rpx;
		padding-left: 30rpx;
		padding-right: 30rpx;
		/* background-color: antiquewhite; */
	}
	.word-input-field{
		min-height: 60rpx;
	}
</style>
