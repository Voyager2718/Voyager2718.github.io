 var browser;
 var b_version;
 var version;
 var browserType=0;
 browser=navigator.appName;
 b_version=navigator.appVersion;
 version = parseFloat(b_version);
 if(browser.indexOf("Microsoft Internet Explorer")!=-1||
	browser.indexOf("Microsoft")!=-1)
	browserType = 1;
 else if(browser.indexOf("Netscape")!=-1)
	browserType = 2;

loadingPane = null;
var rangeDeltaX = -5;
var rangeDeltaY = -5;
var onClickHref = "#";

function $(id){
	return document.getElementById(id);
}

function showPagePanel(state,imgpath,event) 
{
		loadingPagePane = $("mp_page_loading");
		// 如页面直接用<html>开头的话就没有问题了.但是要符合web标准,DTD当然是不能少的.使用DTD时用document.documentElement.scrollTop代替document.body.scrollTop就可以了

		//var xposition = event.clientX + document.body.scrollLeft - document.body.clientLeft + 5;
		//var yposition = event.clientY + document.body.scrollTop  - document.body.clientTop;
		/*************************zhangwf  2007-07-13 16:53  ************************************************/
		//alert(event.clientX);
		var xposition = 0;
		var yposition = 0;
		if(browserType!='undefined'&&browserType!=null)
		{
		if(browserType == 1)
		{
			xposition = window.event.clientX + document.documentElement.scrollLeft - document.documentElement.clientLeft + 5;
			yposition = window.event.clientY + document.documentElement.scrollTop  - document.documentElement.clientTop;
		}
		else if(browserType ==2)
		{
			xposition =event.clientX+document.documentElement.scrollLeft+5;// event.clientX + document.documentElement.scrollLeft - document.documentElement.clientLeft + 5;
			yposition =event.clientY+document.documentElement.scrollTop;// event.clientY + document.documentElement.scrollTop  - document.documentElement.clientTop;
		}
		}
		else
		{
			xposition = window.event.clientX + document.documentElement.scrollLeft - document.documentElement.clientLeft + 5;
			yposition = window.event.clientY + document.documentElement.scrollTop  - document.documentElement.clientTop;
		}
	//	alert(xposition);
	//	alert(yposition);
		/*************************zhangwf  2007-07-13 16:53  ending************************************************/
		
		//alert(document.documentElement.scrollTop);
		if (loadingPagePane == null) {
			var elFar = document.createElement('DIV');
			if(browserType ==2)
				elFar.style.cssText="background-color:#E3F3FD; padding:2px; display:none;font-family:宋体;font-size:14px;font-weight:bold; border:2px solid#75B8EF;position:absolute; right:1px; top:1px; bottom:1px; left:1px;width:122px; height:194px; z-index:10000;filter:alpha(opacity=90);";
			else
				elFar.style.cssText="background-color:#E3F3FD; padding:2px; display:none;font-family:宋体;font-size:14px;font-weight:bold; border:2px solid #75B8EF;position:absolute; right:1px; top:1px; bottom:1px; left:1px;width:122px; height:194px; z-index:10000;filter:alpha(opacity=90);";
			
			elFar.setAttribute("id","mp_page_loading");
			elFar.setAttribute("align","center");

			
			document.body.appendChild(elFar);
			loadingPagePane = elFar ;
		}
		if(typeof imgpath == "string")
		{
			//alert(iLeft);
			//alert(iTop);
			loadingPagePane.innerHTML="<img src='../../../" + imgpath + "'/>";
			if(typeof xposition == "number")
				loadingPagePane.style.left = xposition+"px";
			if(typeof yposition == "number")
				loadingPagePane.style.top = yposition+"px";
		}
		else
			loadingPagePane.innerHTML="";
		
		if (state) {
			
			loadingPagePane.style.display="block";
			//document.body.style.cursor="wait";
			
			//loadingPane.style.top = document.body.scrollTop+1;
		} else {
			loadingPagePane.style.display="none";
			//document.body.style.cursor="auto";
		}
}

function drawPage(id)
{
		var titleObj = $("mppage" + id);
		//titleObj="<table border=0 width=100% right=100%><tr><td align=center valign=middle>"+titleObj+"</td></tr></table>";
		//alert(titleObj);
		var xposition = event.clientX + document.body.scrollLeft - document.body.clientLeft + 3;
		var yposition = event.clientY + document.body.scrollTop  - document.body.clientTop;
		if(typeof titleObj == "object" && typeof titleObj.innerHTML == "string")
			showPagePane(true, titleObj.innerHTML, xposition, yposition);
		else
			showPagePane(false);
}



function showTitlePane(state,txt,iLeft,iTop) 
{
	
		loadingPane = $("mp_loading");
		loadingPaneSub = $("mp_loadingSub");
		if (loadingPane == null) {
			var elFar = document.createElement('DIV');
			//elFar.style.cssText="background-color:#E3F3FD; padding:2px; display:none;font-family:宋体;font-size:14px;font-weight:bold; color:#1071b8; border:2px solid #75B8EF;position:absolute; right:1px; top:1px; bottom:1px; left:1px;width:30%; height:6%; z-index:10000;filter:alpha(opacity=90);";
			elFar.style.cssText="background-color:#E3F3FD; padding:2px; display:none;font-family:宋体;font-size:14px;font-weight:bold; color:#1071b8; border:2px solid #75B8EF;position:absolute; right:1px; top:1px; bottom:1px; left:1px;width:30%; height:6%; z-index:10000;filter:alpha(opacity=90);";
			
			elFar.setAttribute("id","mp_loading");
			elFar.setAttribute("align","center");

			var el = document.createElement('DIV');
			el.setAttribute("id","mp_loadingSub");
			el.style.cssText="background-color:#f4fdff;width:100%;color:#000000; height:90%; margin-top:5;margin-bottom:3;margin-left:3;margin-right:3;";
			
			elFar.appendChild(el);
			document.body.appendChild(elFar);
			loadingPane = elFar;
			loadingPaneSub = el;

		}
		
		if(typeof txt == "string")
		{
			//alert(iLeft);
			//alert(iTop);
			loadingPaneSub.innerHTML=txt;
			if(typeof iLeft == "number")
				loadingPane.style.left = iLeft+"px";
			if(typeof iTop == "number")
				loadingPane.style.top = iTop+"px";
		}
		else
			loadingPaneSub.innerHTML="";
		if (state) {
			
			loadingPane.style.display="block";
			//document.body.style.cursor="wait";
			
			//loadingPane.style.top = document.body.scrollTop+1;
		} else {
			loadingPane.style.display="none";
			//document.body.style.cursor="auto";
		}
}

function goToOnClickHref()
{
	location.href = onClickHref;
}


/* 坐标模式 */
function drawline(obj)
{
	var areaObj = obj.srcElement? obj.srcElement : obj.target; 
	var str = areaObj.coords;
	var arr = str.split(",");
	var xArr = new Array(arr.length/2);
	var yArr = new Array(arr.length/2);
	var x=0,y=0;
	var max =1,min =2;
	for (var t =0 ;t<arr.length ;t=t+2 )
	{
 		//alert("x == "+arr[t]);
	xArr[x++] = parseInt(arr[t]);
	}
	for (var t =1 ;t<arr.length ;t=t+2 )
	{
 		//alert("y == "+arr[t]);
	yArr[y++] = parseInt(arr[t]);
	}
	var x1 = find(xArr,min);
	//alert("x min == "+x1);
	var x2 = find(xArr,max);
	//alert("x max == "+x2);
	var y1 = find(yArr,min);
	//alert("y min == "+y1);
	var y2 = find(yArr,max);
	//alert("y max == "+y2);

	var mapObj ;
	if(browserType==2)
		mapObj = areaObj.parentNode;
	else
		mapObj = areaObj.parentElement;
	 if(typeof mapObj == "object")
	{
 		//alert(mapObj.name);
	
		var imgs = document.getElementsByTagName("img");
	//	alert(imgs.length);
		if(imgs != null)
		{
			for(var i=0;i<imgs.length;i++)
			{
				var imgobj = imgs.item(i);

				var mapname = imgobj.useMap;
				if(typeof mapname == "string" && mapname.toLowerCase() == ("#" + mapObj.name).toLowerCase())
				{
					var imgleft = 0;
					var imgtop = 0;
				
				
					var imgparent ;
					if(browserType==2)
						imgparent = imgobj.parentNode;
					else
						imgparent = imgobj.parentElement;
					while(typeof imgparent == "object" && imgparent.tagName.toUpperCase() != "BODY")
					{
						imgleft += getWidthNumber(imgparent.offsetLeft) - getWidthNumber(imgparent.style.borderLeftWidth);
						
						imgtop += getWidthNumber(imgparent.offsetTop) - getWidthNumber(imgparent.style.borderTopWidth);
				
						if(browserType==2)
						{
							imgparent = imgparent.parentNode;
							break;
						}
						else
							imgparent = imgparent.parentElement;

					}
					if(browserType==2)
					{
						rangeDeltaX =3;
						rangeDeltaY = 5;
					}
					imgleft = imgleft + rangeDeltaX;
					imgtop = imgtop + rangeDeltaY;
				/**********************************************
				* plane 2007-06-29  11:53 guang zhou
				*/
					var articleRe = /(\w+)_(\d+)\.htm/i;
		/*********************plane 2007-06-29  11:53 guang zhou**************************/
					if(typeof areaObj.href == "string")
					{
						var r = areaObj.href.match(articleRe);
						if(r)
						{
							onClickHref = areaObj.href;
						/*****/
						//jason@2007-11-1 3:35	改用strong
						//var divs = document.getElementsByTagName("div");
						var divs = document.getElementsByTagName("strong");
						var divNum = 0;
						var titleObj = null;
						for(divNum=0;divNum<divs.length;divNum++)
						{
							var id = divs[divNum].id;
							if(id!=null&&id.indexOf(r[0])!=-1)
							{
								titleObj = divs[divNum];
								break;
							}
						}
			/************************plane 2007-06-29  11:53 guang zhou*************************/
		
						if(titleObj!=null)
						{
							var xposition = 0;
							var yposition = 0;
							if(browserType == 2)
							{
								xposition =obj.clientX+document.documentElement.scrollLeft+3;// event.clientX + document.documentElement.scrollLeft - document.documentElement.clientLeft + 5;
								yposition =obj.clientY+document.documentElement.scrollTop;// event.clientY + document.documentElement.scrollTop  - document.documentElement.clientTop;
								
							}
							else 
							{
								xposition = event.clientX + document.documentElement.scrollLeft - document.documentElement.clientLeft + 3;
								yposition = event.clientY + document.documentElement.scrollTop  - document.documentElement.clientTop;
							}
							if(typeof titleObj == "object" && typeof titleObj.innerHTML == "string")
								showTitlePane(true, titleObj.innerHTML, xposition, yposition);
							else
								showTitlePane(false);
						}
					}
				}
				MouseOverMap(x1,y1,x2,y2,imgleft,imgtop);
			}
		}
	}
	
	
}
}

function getWidthNumber(sWidth)
{
	if(typeof sWidth == "number")
		return sWidth;

	var re = /\d+/i;
	//alert("width == "+sWidth);
	var r = sWidth.match(re);
	if(r)
	{
		//alert(r);
		return parseInt(r);
	}
	else
		return 0;
}

function find(arr,type)
{
	var tmp=arr[0]; 
	if (type==1)
	{
	 for (var loop=0;loop<arr.length ;loop++ )
	 if (arr[loop]>tmp)
		 tmp = arr[loop];
	 return tmp;
	}
	else if (type == 2)
		{

	 for (var loop=0;loop<arr.length ;loop++ )
	 if (arr[loop]<tmp)
	 		 tmp = arr[loop];
	 return tmp;
	}

}

function MouseOverMap(x1,y1,x2,y2,imgleft,imgtop) {
	var divElm = document.getElementById("leveldiv");
	//alert("div == "+divElm);
	var Left = x1;
	var Top = y1;
	var Right = parseInt(x2 - x1);
	var bottom = parseInt(y2 - y1);
	divElm.style.border = "solid 2px #FF0000";
	divElm.style.left = Left+imgleft+"px";
	divElm.style.top = Top+imgtop+"px";		
	divElm.style.width = Right+5+"px";
	divElm.style.height = bottom+5+"px";
	divElm.style.cursor = "pointer";
}

function MouseOutMap() {
	var divElm = document.getElementById("leveldiv");
	divElm.style.border = "";
	showTitlePane(false);
}
 
function clickmap(obj)
{
	//window.open(obj.href,"newwin","toolbar=no,resizable=no,scrollbars=yes,dependent=no,width=700,height=500");	
	//obj.target="_blank";
}