// 开发文档: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
module.exports = {
	getText(){
		return "Hello World";
	}, //一定小心逗号！！
	getData(str){
		return {
			data:str
		}
	},
	getAllWord(){
		const db = uniCloud.databaseForJQL({
			clientInfo:this.getClientInfo()
		});
		return db.collection("word").where(`${new RegExp("hym","i")}.test(hym)`).get();
	}
}
