function dorecom(){
	
	
	document.getElementById('recomform').action="http://comment.gzdaily.dayoo.com/recommend/commend.jsp";	
	
	window.open('','_recomwin','width=400,height=300');	
	
	document.getElementById('recomform').target="_recomwin";	
	
	document.getElementById('recomform').submit();	
	
	
}


function colPaper(){
	
	
	document.getElementById('colPaperform').action="http://comment.gzdaily.dayoo.com/collection/favorForm_cookies.jsp";	
	
	window.open('','_colwin');	
	
	document.getElementById('colPaperform').target="_colwin";	
	
	document.getElementById('colPaperform').submit();	
	
	
}

function submitCheck()
{
	
	if(document.getElementById("content1").value.length>1000){
		
		alert("评论内容超过1000字！");		
		return false;		
		
	}
	if(document.getElementById("content1").value.indexOf("<script")!=-1||document.getElementById("content1").value.indexOf("<\/")!=-1){
		
		alert("评论内容含有特殊字符!");		
		return false;		
		
	}
	if(document.getElementById("content1").value=="")
	{
		
		alert("必须填写评论内容！");		
		return false;		
		
	}
	
	if(document.getElementById("isGuest").checked==false)
	{
		
		if(document.getElementById("author1").value=="")
		{
			
			alert("请输入用户名！");			
			return false;			
			
		}
		if(document.getElementById("password").value=="")
		{
			
			alert("请输入密码！");			
			return false;			
			
		}
		
	}
	var isnodecomment=document.forms.commentform.isnodecomm.value;
	
	document.forms.commentform.isGuest.value=document.forms.commentform.isGuest.checked;	
	document.forms.commentform.rankRadio.value=document.forms.commentform.rankRadio.checked;	
	document.forms.commentform.content.value=escape(document.forms.commentform.content1.value);	
	document.forms.commentform.author.value=escape(document.forms.commentform.author1.value);	
	if(document.forms.commentform.title1.value=="")
	{
		
		if(isnodecomment==2){
			
			document.forms.commentform.title1.value=document.forms.commentform.title.value;			
			document.forms.commentform.title.value=escape(document.forms.commentform.title.value);			
			
		}
		document.forms.commentform.channelname1.value=document.forms.commentform.channelname.value;		
		document.forms.commentform.nodename1.value=document.forms.commentform.nodename.value;		
		document.forms.commentform.channelname.value=escape(document.forms.commentform.channelname.value);		
		document.forms.commentform.nodename.value=escape(document.forms.commentform.nodename.value);		
		
	}
	else {
		
		if(isnodecomment==2){
			
			document.forms.commentform.title.value=document.forms.commentform.title1.value;			
			document.forms.commentform.title.value=escape(document.forms.commentform.title.value);			
			
		}
		document.forms.commentform.channelname.value=document.forms.commentform.channelname1.value;		
		document.forms.commentform.nodename.value=document.forms.commentform.nodename1.value;		
		document.forms.commentform.channelname.value=escape(document.forms.commentform.channelname.value);		
		document.forms.commentform.nodename.value=escape(document.forms.commentform.nodename.value);		
		
	}
	
	document.forms.commentform.submit();
	
}
function viewComment(){
	
	if(document.forms.commentform.title1.value=="")
	{
		
		
		document.forms.commentform.channelname1.value=document.forms.commentform.channelname.value;		
		document.forms.commentform.nodename1.value=document.forms.commentform.nodename.value;		
		if(document.forms.commentform.isnodecomm.value==1)
		{
			
			document.forms.commentform.title1.value=document.forms.commentform.channelname1.value+"-->"+document.forms.commentform.nodename1.value;
			
			document.forms.commentform.title1.value=escape(document.forms.commentform.title1.value);			
			
		}
		else {
			
			document.forms.commentform.title1.value=document.forms.commentform.title.value;			
			document.forms.commentform.title.value=escape(document.forms.commentform.title.value);			
			
		}
		document.forms.commentform.nodename.value=escape(document.forms.commentform.nodename.value);		
		document.forms.commentform.channelname.value=escape(document.forms.commentform.channelname.value);		
		
	}else 
	{
		
		if(document.forms.commentform.isnodecomm.value==1)
		{
			
			document.forms.commentform.title1.value=document.forms.commentform.channelname1.value+"-->"+document.forms.commentform.nodename1.value;			
			document.forms.commentform.title1.value=escape(document.forms.commentform.title1.value);			
			
		}
		else 
		{
			
			document.forms.commentform.title.value=document.forms.commentform.title1.value;			
			document.forms.commentform.title.value=escape(document.forms.commentform.title.value);			
			
		}
		document.forms.commentform.channelname.value=document.forms.commentform.channelname1.value;		
		document.forms.commentform.nodename.value=document.forms.commentform.nodename1.value;		
		document.forms.commentform.nodename.value=escape(document.forms.commentform.nodename.value);		
		document.forms.commentform.channelname.value=escape(document.forms.commentform.channelname.value);		
		
	}
	document.forms.commentform.chioce.value='view';	
	//document.forms.commentform.submit();
	
	
	
}
function viewComment2(){
	
	viewComment();	
	document.forms.commentform.submit();	
	
}


function setFontSize (id, value, addOrMinus, styleProp, unit) {
	
	if (!document.getElementById(id))
	{
		return false
	}
	
	//兼容
	if (!styleProp && !unit)
	{
		styleProp = 'zoom';
		unit = '%';
	}

	if (addOrMinus == '-')
	{
		document.getElementById(id).style[styleProp] = (parseInt(document.getElementById(id).style[styleProp])-value)+unit;
	} else if (addOrMinus == '+') {
		document.getElementById(id).style[styleProp] = (parseInt(document.getElementById(id).style[styleProp])+value)+unit;
	} else {
		
		//兼容之前的
		if (value == 0 && (!unit || !styleProp || styleProp == 'zoom'))
		{
			styleProp = 'zoom';
			value = 100;
			unit = '%';
		}
		
		document.getElementById(id).style[styleProp] = value+unit;
	}

	setCookie('gzdaily_content_text_size'+id, document.getElementById(id).style[styleProp], new Date((new Date()).getTime() + 7*24*360000));
}

function initFontSize (id, initValue, initUnit, styleProp){
	if (!document.getElementById(id))
	{
		return false
	}

	//兼容
	if (!styleProp && !initUnit && !initValue)
	{
		initValue = '100';
		styleProp = 'zoom';
		initUnit = '%';
	}

	if (document.getElementById(id).style[styleProp] == '')
	{
		document.getElementById(id).style[styleProp] = initValue+initUnit;
	}
	
	var initSize = getCookie('gzdaily_content_text_size'+id);
	if (initSize != null)
	{
		document.getElementById(id).style[styleProp] = initSize;
	}
}