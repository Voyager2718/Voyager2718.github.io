var TTSPlayeriframeSrc = "http://gzdaily.dayoo.com/tpl/form.htm"; //iframe的页面地址
var TTSPostSrc = "http://59.42.241.174/web/Default.aspx"; //要调用的TTSPalyer的地址

function init()
{
    	if (document.readyState == 'complete' )
    	{
    		var frameobj = document.all("TTSPlayeriframe");
    		if(frameobj != null)
        		frameobj.src = TTSPlayeriframeSrc;
        }
    	else
		window.setTimeout("init()","300");  
}

init();

	function playerPlay(text,voiceType)
	{ 	
		var addUrl = location.href;
		var sUrl = getId(addUrl);
		var beUrl = "htmlnm001/" + getName() + "/" + getDateStr(addUrl);
		document.TTSPlayeriframe.document.form1.action = TTSPostSrc;
		
		document.TTSPlayeriframe.document.form1.id.value = sUrl;
		document.TTSPlayeriframe.document.form1.path.value = beUrl;
		document.TTSPlayeriframe.document.form1.content.value = text;
                document.TTSPlayeriframe.document.form1.type.value = voiceType;
       
		//alert(sUrl);alert(beUrl);alert(text);
		document.TTSPlayeriframe.document.form1.submit();	
	}

	function getId(url)
	{
		var pos1 = url.indexOf("content_");
		var pos2 = url.indexOf(".htm");
		var id = url.substring(pos1+8, pos2);
		return id;
	}
    function getDateStr(url)
    {
		var re = /\d{4}-\d{2}[\/\\]\d{2}/i;
		var ret = url.match(re);
		if(ret)
		{
			return ret;
		}
		else
		{
			alert("no date pattern found");
			return "";
		}
    }
function getName()
{
	var addUrl = location.href;
	 var pos1 = addUrl.indexOf("/html");
	
	var strurl = addUrl.substring(7,pos1);
	var pos2 = strurl.indexOf("/");
	var name = strurl.substring(pos2+1);
	return name;
}
function readTxt(voiceType)
{
                
	var txtobj = document.all("article");
        if(voiceType == "")

          voiceType = 2;
   
	if(typeof(txtobj) == "object")
	{	
		var txt = txtobj.innerText;
		playerPlay(txt,voiceType);
	}
        else
        {
        	alert("无法获取文章内容(can't find ozoom object)");
        }
	
}

