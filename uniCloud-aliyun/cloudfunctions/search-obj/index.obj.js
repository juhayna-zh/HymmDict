// 开发文档: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
const vowels = new Set(['A','I','U','E','O','N']);
function isEmotionVerbWithVowels(str){
    s = str + "";
    if(!(/^[a-zA-Z\.]+$/.test(s))) return null;
    if(s.length <= 3) return null;
    if(s == s.toLowerCase()) return null; //不能全是小写字母
	for(let i = 1; i < s.length; i++){
        ch = s[i];
        if(vowels.has(ch)||ch=="."){ //ch是单独的元音
            if(!(s[i-1] == s[i-1].toLowerCase())){ //如果前一个不是小写
                return null;
            }
            continue;
        }
        if(ch=='Y'){
            if(!(s[i-1] == s[i-1].toLowerCase()) || i+1>=s.length || !vowels.has(s[i+1])){ //前一个得是小写字母
                return null;
            }
            i++; //下一个已经确定是元音
            continue;
        }
        if(ch=="L"){
            if(!(s[i-1] == s[i-1].toLowerCase() && i+2<s.length && s[i+1] == 'Y' && vowels.has(s[i+2]))){
                return null;
            }
            i+=2;
            continue;
        }
        if(ch == ch.toUpperCase()){ //其它大写字母
            return null;
        }
    }
    s = s.replace(/([A-Z]+)/g,'.');
    return s;
}

module.exports = {
	//通过Hymmnos语词首匹配查询
	async searchByHym(hym,lim=10){
		if(hym == undefined || hym==null || hym==""){
			return {
				errCode: 0,
				errMsg: "未输入文字"
			}
		}
		const db = uniCloud.databaseForJQL({
			clientInfo:this.getClientInfo()
		});
		try{
			var re;
			hym = hym.replace(".","\\.");
			if(hym.length >= 3){
				hym_dot = hym.trim().split("").join("\\.");
				re = new RegExp(`.*${hym}.*|.*${hym_dot}.*`,'i');
			}
			else{
				re = new RegExp(`^${hym}.*`,'i'); //以hym开头的字符串 bug:特殊字符要过滤
			}
			var res = db.collection("word")
			   .where(`${re}.test(hym)`)
			   .limit(lim)
			   .get();
			// if(res.data.length == 0){
			// 	hym = hym.trim().split("").join("\\.");
			// 	re = new RegExp(`.*${hym}.*`,'gi');
			// 	res = db.collection("word")
			// 	   .where(`${re}.test(hym)`)
			// 	   .limit(lim)
			// 	   .get();
			// }
		}catch(e){
			return {
				errCode: 0,
				errMsg: "不合法字符"
			}
		}
		return res;
	},
	//通过中文匹配查询
	searchByChi(chi,lim){
		if(chi == undefined || chi==null){
			return {
				errCode: 0,
				errMsg: "未输入文字"
			}
		}
		chi = chi.replace(' ','');//去掉空格
		if(chi==""){
			return {
				errCode: 0,
				errMsg: "未输入文字"
			}
		}
		//开始找包含了chi中所有字的
		const db = uniCloud.databaseForJQL({
			clientInfo:this.getClientInfo()
		});
		try{
			var regStr = "";
			for(var ch of chi){
				regStr = regStr + `(?=.*${ch})`; 
			}
			var re = new RegExp(regStr,"gi");
			var res = db.collection("word")
			   .where(`${re}.test(chi)`)
			   .limit(lim)
			   .get();
		}catch(e){
			return {
				errCode: 0,
				errMsg: "不合法字符"
			}
		}
		return res;
	},
	//集大成的搜索函数，先判断是否为纯英文，若为纯英文(含数字和特殊字符)则转hym搜索，否则转chi搜索
	searchText(text,lim=10){
		let start = new Date().getTime();
		if(text == undefined || text==null || text ==""){
			return {
				errCode: 0,
				errMsg: "未输入文字"
			}
		}
		text = text.trim();
        if((tmp = isEmotionVerbWithVowels(text))!=null){
            text = tmp;
        }
		var res;
		if(new RegExp('^[a-zA-Z0-9 .=_]*$','g').test(text)){
			res = uniCloud.importObject('search-obj').searchByHym(text,lim); //注意不能直接调用，暂时只采取导入调用
		}
		else{
			res = uniCloud.importObject('search-obj').searchByChi(text,lim);
		}
		return res;
	}
}
