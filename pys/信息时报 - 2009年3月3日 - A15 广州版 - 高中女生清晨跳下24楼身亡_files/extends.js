function loadExtends(){
	openHelp ();

	googleA("UA-1725443-3");
}



function openHelp () {
	if (getCookie('gzdaily_openHelp') != 1)
	{
		//打开页面
		var helpDiv = document.createElement('div');

		document.body.appendChild(helpDiv).innerHTML = '<div id="helpDiv"><div style="position:absolute;background:transparent;z-index:100;width:100%;text-align:center;left:0;top:0;" ><img src="../../../tpl/guide.jpg" width="397" height="278" border="0" usemap="#guideMap" style="margin-top:15%;" /><map name="guideMap" id="guideMap"><!-- 进入help --><area shape="rect" coords="15,231,113,255" href="http://gzdaily.dayoo.com/help/index.html" title="阅读使用指南" onclick="closeHelp();"/><!-- 进入help --><area shape="rect" coords="142,230,237,256" href="###" onclick="closeHelp();" title="直接进入读报" /><!-- 进入help --><area shape="rect" coords="180,180,309,211" href="http://gzdaily.dayoo.com/help/index.html" title="阅读使用指南" onclick="closeHelp();"/><!-- 进入help --><area shape="rect" coords="267,230,380,257" href="###" onclick="closeHelp(true);" title="不再弹出此提示" /></map></div><div style="position:absolute;width:100%;height:'+document.body.offsetHeight+';top:0;left:0;background:#fff;filter:progid:DXImageTransform.Microsoft.Alpha(opacity=50);opacity: 0.5;z-index:80;"> </div> </div>';
	}
}

function closeHelp (never) {
	//关闭页面
	if (document.getElementById('helpDiv'))
	{
		document.getElementById('helpDiv').parentNode.removeChild(document.getElementById('helpDiv'));
	}

	//1年不再开
	if (never)
	{
		//一年
		setCookie('gzdaily_openHelp', 1, new Date(new Date().getTime() + 365*24*1000*60*60), '/');
	} else {
		//24小时
		setCookie('gzdaily_openHelp', 1, new Date(new Date().getTime() + 24*1000*60*60), '/');
	}
}

//GOOGLE 分析调用 START
var _gt;
function googleA (id) {
	var js = document.createElement("script");
	js.language = "javascript";
	js.src = "http://www.google-analytics.com/urchin.js";
	document.body.appendChild(js);
	
	var show = function (){
		try{
			_uacct = id;
			urchinTracker();
			clearInterval(_gt);
		}catch(e){
		
		}
	}
		
	_gt = setInterval(show,500);
}
//GOOGLE 分析调用 END