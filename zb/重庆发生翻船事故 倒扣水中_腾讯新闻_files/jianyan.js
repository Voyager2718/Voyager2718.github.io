
	//添加http://bj.jjj.qq.com/a/20150511/032121.htm 在内容页面底部追加报名表格
try{
	var url= location.href;
url.indexOf('?') !="-1"? href = url.split("?")[0]:href = url;
	if (href== "http://xw.qq.com/bj/20150511032121" || href =="http://xw.qq.com/bj_jjj/20150511032121" || href =="http://xw.qq.com/beijing/20150511032121") {
	   $('.content.fontsmall').append('<IFRAME style="padding-top:10px" id=survey_iframe_10290797 onload="this.style.display=\'\';var height=380+\'px\';this.style.height=height;" height=0 marginHeight=0 frameBorder=0 width=100%  marginWidth=0 scrolling=no src="http://bj.jjj.qq.com/zt/page/ifrly.htm">正在加载...</IFRAME>');
	var html = $('.content.fontsmall').html();
	var nhtml = html.replace('<br>　　\u52a0\u8f7d\u4e2d...','');
	$('.content.fontsmall').html(nhtml);
	document.domain = "qq.com"; 
}else if(href== "http://xw.qq.com/bj/20150511061319" || href =="http://xw.qq.com/bj_jjj/20150511061319" || href =="http://xw.qq.com/beijing/20150511061319"){
	 
	 $('p.split').append('<IFRAME style="padding-top:10px" id=survey_iframe_10290797  height=0 marginHeight=0 frameBorder=0 width=100%  marginWidth=0 scrolling=no src="http://bj.jjj.qq.com/zt/page/ifrjt.htm?type=response"  onload="Javascript:SetWinHeight(this)">正在加载...</IFRAME>');
	var html = $('p.split').html();
	var nhtml = html.replace('<br>　　\u52a0\u8f7d\u4e2d...','');
	$('p.split').html(nhtml);
	$('.comments').hide();
	document.domain = "qq.com"; 
}else if(href== "http://xw.qq.com/bj/20150609038389" || href =="http://xw.qq.com/bj_jjj/20150609038389" || href =="http://xw.qq.com/beijing/20150609038389"){
	 
	 $('p.split').append('<IFRAME style="padding-top:10px" id=survey_iframe_10318494  height=0 marginHeight=0 frameBorder=0 width=100%  marginWidth=0 scrolling=no src="http://panshi.qq.com/vote/10318494/view?type=response"  onload="Javascript:SetWinHeight(this)">正在加载...</IFRAME>');
	var html = $('p.split').html();
	var nhtml = html.replace('<br>　　\u52a0\u8f7d\u4e2d...','');
	$('p.split').html(nhtml);
	$('.comments').hide();
	document.domain = "qq.com"; 
}
//p_jiewang 6.10
else if(href== "http://xw.qq.com/bj/20150608012149" || href =="http://xw.qq.com/bj_jjj/20150608012149" || href =="http://xw.qq.com/beijing/20150608012149"){
	 
	 $('p.split').append('<IFRAME style="padding-top:10px" id=survey_iframe_10318494  height=0 marginHeight=0 frameBorder=0 width=100%  marginWidth=0 scrolling=no src="http://bj.jjj.qq.com/zt/page/ifrly.htm?t=0610"  onload="Javascript:SetWinHeight(this)">正在加载...</IFRAME>');
	var html = $('p.split').html();
	var nhtml = html.replace('<br>　　\u52a0\u8f7d\u4e2d...','');
	$('p.split').html(nhtml);
	$('.comments').hide();
	document.domain = "qq.com"; 
}
//p_jiewang 6.16
else if(href== "http://xw.qq.com/bj/20150616041943" || href =="http://xw.qq.com/bj_jjj/20150616041943" || href =="http://xw.qq.com/beijing/20150616041943"){
	 
	 $('p.split').append('<IFRAME style="padding-top:10px" id=survey_iframe_10318494 class="hode_h"  height=0 marginHeight=0 frameBorder=0 width=100%  marginWidth=0 scrolling=no src="http://bj.jjj.qq.com/zt/page/ifrly.htm?t=0616"  onload="Javascript:SetWinHeight(this)">正在加载...</IFRAME>');
	var html = $('p.split')[1].html();
	var nhtml = html.replace('<br>　　\u52a0\u8f7d\u4e2d...','');
	$('p.split')[1].html(nhtml);
	$('.comments').hide();
	document.domain = "qq.com"; 
	//p_jiewang 6.16
     var cdx = $(".hode_h")[0];
      cdx.remove();
}
//动态计算iframe的高度
	function SetWinHeight(obj){ 
		var win=obj; 
		if (document.getElementById) 
		{ 
		if (win && !window.opera) 
		{ 
		if (win.contentDocument && win.contentDocument.body.offsetHeight) 
		win.height = win.contentDocument.body.offsetHeight; 
		else if(win.Document && win.Document.body.scrollHeight) 
		win.height = win.Document.body.scrollHeight; 
		} 
	   } 
	 } 
}catch(e){}/*  |xGv00|73464d7ebde1e0dfd54b3a7d758b6cdb */