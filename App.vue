<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import 'uni_modules/uview-ui/index.scss'
	
</style>

<style>
	/*词性对应的颜色*/
	.xiang{ /*想音词*/
		background-color: #FF6A6A;
		color: antiquewhite;
	}
	.gan{ /*感音词*/
		background-color: #8470FF;
		color: antiquewhite;
	}
	.xing{ /*形容词*/
		background-color: #00F5FF;
		color: black;
	}
	.ming{ /*名词*/
		background-color: #FFA500;
		color: black;
	}
	.fu{ /*副词*/
		background-color: #C1FFC1;
		color: black;
	}
	.dong{ /*动词*/
		background-color: #7FFFD4;
		color: black;
	}
	.lian{ /*连词*/
		background-color: #FFE4B5;
		color: black;
	}
	.jie{ /*介词*/
		background-color: #FFD700;
		color: black;
	}
	.dai{ /*代词*/
		background-color: #FFD722;
		color: black;
	}
	.qita{ /*其它*/
		background-color: #DCDCDC;
		color: black;
	}
	/*Hymmnos字体*/
	@font-face {
		font-family: 'hymmnos';
		src: url('@/style/font/hymmnos.ttf');
	}
	
</style>
