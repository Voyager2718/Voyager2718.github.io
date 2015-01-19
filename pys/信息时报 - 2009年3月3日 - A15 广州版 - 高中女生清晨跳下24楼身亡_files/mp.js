
/*广州日报为日报,所以不用取period.xml,直接写死上下期跳转*/
var dayOfMonth= new Array(12);
var currentDate = new Array(4);
//一代的使用时间
var mp_maxDate = '2008-03-31';
var mp_minDate = '2006-05-01';
var node_jump = "node_1019.htm";
var node_old_jump = "node_10228.htm";
function goPrePeriod()
{
	var sUrl = location.href;
	var date = new Date();
	var month = date.getMonth();//JS得到的月会往前推一个月,如现在是8月,但此处month等于7
	var check = false;
	if(currentDate!=null)
	{
		if(currentDate[3]>'2008-04-01')
		{
			//隔月跳转
			if(currentDate[2]==1)
			{
				var preDate = getPreDate(currentDate[0],currentDate[1]);
				sUrl = sUrl.replace(/\d{4}-\d{2}\/\d{2}/g,preDate[1] + "-" + preDate[2] + "/" + dayOfMonth[month]);
			}
			//本月内跳转
			else
			{
				sUrl = sUrl.replace(/\d{4}-\d{2}\/\d{2}/g,currentDate[0] + "-" + currentDate[1] + "/" + appendZero((currentDate[2]-1)));
			}
		}
		else
		{
			sUrl = sUrl.replace(/\d{4}-\d{2}\/\d{2}/g,'2008' + "-" +'03' + "/" + '31');
			check = true;
		}
	}
	if(check)
		node_jump = node_old_jump;
	var nodeRe = /node_\d+\.htm/i;
	var r2 = sUrl.match(nodeRe);
	if(r2)
	{
		sUrl = sUrl.replace(nodeRe,node_jump);
	}
	var contentRe = /content_\d+\.htm/i;
	r2 = sUrl.match(contentRe);
	if(r2)
	{
		sUrl = sUrl.replace(contentRe,node_jump);
	}
	window.location = sUrl;
}
		
function goNextPeriod()
{
	var sUrl = location.href;
	var date = new Date();
	var month = date.getMonth();//JS得到的月会往前推一个月,如现在是8月,但此处month等于7
	var nowDate = date.getFullYear()+"-"+appendZero(date.getMonth()+1)+"-"+appendZero(date.getDate());
	if(currentDate!=null)
	{
		var check = false;
		for(var i=0;i<12;i++)
		{
			//隔月跳转
			if(currentDate[2]==dayOfMonth[month])
			{
				var nextDate = getNextDate(currentDate[0],currentDate[1]);
				sUrl = sUrl.replace(/\d{4}-\d{2}\/\d{2}/g,nextDate[1] + "-" + nextDate[2] + "/" + '01');
				check = true;
				break;
			}
		}
		//月内跳转
		if(!check)
		{
			var day = currentDate[2];
			var first = day.substring(0,1);
			if(first==0||first=='0')
				day = day.substring(1,2);
			day = parseInt(day)+1;
			sUrl = sUrl.replace(/\d{4}-\d{2}\/\d{2}/g,currentDate[0] + "-" + currentDate[1] + "/" + appendZero(day));
		}
	}
	var re = /(\d{4})-(\d{2})\/(\d{2})/i;
	var reg = sUrl.match(re);
	if(reg)
   	{
		var ccDate = reg[1]+"-"+reg[2]+"-"+reg[3];
		if(ccDate<=nowDate)
		{
			var nodeRe = /node_\d+\.htm/i;
			var r2 = sUrl.match(nodeRe);
			if(r2)
			{
				sUrl = sUrl.replace(nodeRe,node_jump);
			}
			var contentRe = /content_\d+\.htm/i;
			r2 = sUrl.match(contentRe);
			if(r2)
			{
				sUrl = sUrl.replace(contentRe,node_jump);
			}
			window.location = sUrl;
		}
	}
}
function initMPPage()
{
	
	var date = new Date();
	var year = date.getFullYear();
	
	if(year%4==0)
	{
		if(year%100==0&&year%400!=0)
		{
			dayOfMonth[0]=31; dayOfMonth[1]=28; dayOfMonth[2]=31; dayOfMonth[3]=30;
			dayOfMonth[4]=31; dayOfMonth[5]=30; dayOfMonth[6]=31; dayOfMonth[7]=31;
			dayOfMonth[8]=30; dayOfMonth[9]=31; dayOfMonth[10]=30; dayOfMonth[11]=31;

		}
		else
		{
			dayOfMonth[0]=31; dayOfMonth[1]=29; dayOfMonth[2]=31; dayOfMonth[3]=30;
			dayOfMonth[4]=31; dayOfMonth[5]=30; dayOfMonth[6]=31; dayOfMonth[7]=31;
			dayOfMonth[8]=30; dayOfMonth[9]=31; dayOfMonth[10]=30; dayOfMonth[11]=31;
		}
	}
	else
	{
		dayOfMonth[0]=31; dayOfMonth[1]=28; dayOfMonth[2]=31; dayOfMonth[3]=30;
		dayOfMonth[4]=31; dayOfMonth[5]=30; dayOfMonth[6]=31; dayOfMonth[7]=31;
		dayOfMonth[8]=30; dayOfMonth[9]=31; dayOfMonth[10]=30; dayOfMonth[11]=31;
	}
	var sUrl = location.href;
	var re = /(\d{4})-(\d{2})\/(\d{2})/i;
	var reg = sUrl.match(re);
	if(reg)
   	{
		currentDate[0] = reg[1];
   		currentDate[1] = reg[2];
   		currentDate[2] = reg[3];
		currentDate[3] = currentDate[0]+"-"+currentDate[1]+"-"+currentDate[2]; 
   	}
	//给版面图添加事件
	var mapObj = document.getElementsByName('pagepicmap');
	if(mapObj!=null&&mapObj.length>0)
	{
    	mapObj[0].onmouseover=function(){
                   drawline(event);
                   
         };
         mapObj[0].onmouseout=function(){
                   MouseOutMap();
         };
	}

}
function getPreDate(year,month)
{
	var preDate = new Array(3);
	if(month==1)
	{
		preDate[0] = parseInt(year-1)+"-12";
		preDate[1] = parseInt(year-1);
		preDate[2] = 12;
	}
	else if(month>=11&&month<=12)
	{
		preDate[0] = year + "-" + parseInt(month-1);
		preDate[1] = parseInt(year);
		preDate[2] = parseInt(month-1);
	}
	else
	{
		preDate[0] = year + "-0" + parseInt(month-1);
		preDate[1] = parseInt(year);
		preDate[2] = "0"+parseInt(month-1);
	}
	return preDate;
}

function getNextDate(year,month)
{
	var nextDate = new Array(3);
	if(month==12)
	{
		year = parseInt(year);
		nextDate[0] = parseInt(year+1)+"-01";
		nextDate[1] = parseInt(year+1);
		nextDate[2] = "01";
	}
	else if(month>=9&&month<=11)
	{
		if(month==9||month==09)
		{
			if(month.length==2)
				month = month.substring(1,2);
		}
		month = parseInt(month);
		month = parseInt(month+1);
		nextDate[0] = year + "-" + month;
		nextDate[1] = parseInt(year);
		nextDate[2] = month;
	}
	else
	{
		if(month.length==2)
		{
			month = month.substring(1,2);
		}
		month = parseInt(parseInt(month) +1);
		nextDate[0] = year + "-0" + parseInt(month);
		nextDate[1] = parseInt(year);
		nextDate[2] = "0"+parseInt(month);
	}
	return nextDate;
}
function appendZero(n){return(("00"+ n).substr(("00"+ n).length-2));}//日期自动补零程序
/*广州日报为日报,所以不用取period.xml,直接写死上下期跳转*/
var dayOfMonth= new Array(12);
var currentDate = new Array(4);
//一代的使用时间
var mp_maxDate = '2008-03-31';
var mp_minDate = '2006-05-01';
var node_jump = "node_1019.htm";
var node_old_jump = "node_10228.htm";
function goPrePeriod()
{
	var sUrl = location.href;
	var date = new Date();
	var month = date.getMonth();//JS得到的月会往前推一个月,如现在是8月,但此处month等于7
	var check = false;
	if(currentDate!=null)
	{
		if(currentDate[3]>'2008-04-01')
		{
			//隔月跳转
			if(currentDate[2]==1)
			{
				var preDate = getPreDate(currentDate[0],currentDate[1]);
				sUrl = sUrl.replace(/\d{4}-\d{2}\/\d{2}/g,preDate[1] + "-" + preDate[2] + "/" + dayOfMonth[month]);
			}
			//本月内跳转
			else
			{
				sUrl = sUrl.replace(/\d{4}-\d{2}\/\d{2}/g,currentDate[0] + "-" + currentDate[1] + "/" + appendZero((currentDate[2]-1)));
			}
		}
		else
		{
			sUrl = sUrl.replace(/\d{4}-\d{2}\/\d{2}/g,'2008' + "-" +'03' + "/" + '31');
			check = true;
		}
	}
	if(check)
		node_jump = node_old_jump;
	var nodeRe = /node_\d+\.htm/i;
	var r2 = sUrl.match(nodeRe);
	if(r2)
	{
		sUrl = sUrl.replace(nodeRe,node_jump);
	}
	var contentRe = /content_\d+\.htm/i;
	r2 = sUrl.match(contentRe);
	if(r2)
	{
		sUrl = sUrl.replace(contentRe,node_jump);
	}
	window.location = sUrl;
}
		
function goNextPeriod()
{
	var sUrl = location.href;
	var date = new Date();
	var month = date.getMonth();//JS得到的月会往前推一个月,如现在是8月,但此处month等于7
	var nowDate = date.getFullYear()+"-"+appendZero(date.getMonth()+1)+"-"+appendZero(date.getDate());
	if(currentDate!=null)
	{
		var check = false;
		for(var i=0;i<12;i++)
		{
			//隔月跳转
			if(currentDate[2]==dayOfMonth[month])
			{
				var nextDate = getNextDate(currentDate[0],currentDate[1]);
				sUrl = sUrl.replace(/\d{4}-\d{2}\/\d{2}/g,nextDate[1] + "-" + nextDate[2] + "/" + '01');
				check = true;
				break;
			}
		}
		//月内跳转
		if(!check)
		{
			var day = currentDate[2];
			var first = day.substring(0,1);
			if(first==0||first=='0')
				day = day.substring(1,2);
			day = parseInt(day)+1;
			sUrl = sUrl.replace(/\d{4}-\d{2}\/\d{2}/g,currentDate[0] + "-" + currentDate[1] + "/" + appendZero(day));
		}
	}
	var re = /(\d{4})-(\d{2})\/(\d{2})/i;
	var reg = sUrl.match(re);
	if(reg)
   	{
		var ccDate = reg[1]+"-"+reg[2]+"-"+reg[3];
		if(ccDate<=nowDate)
		{
			var nodeRe = /node_\d+\.htm/i;
			var r2 = sUrl.match(nodeRe);
			if(r2)
			{
				sUrl = sUrl.replace(nodeRe,node_jump);
			}
			var contentRe = /content_\d+\.htm/i;
			r2 = sUrl.match(contentRe);
			if(r2)
			{
				sUrl = sUrl.replace(contentRe,node_jump);
			}
			window.location = sUrl;
		}
	}
}
function initMPPage()
{
	
	var date = new Date();
	var year = date.getFullYear();
	
	if(year%4==0)
	{
		if(year%100==0&&year%400!=0)
		{
			dayOfMonth[0]=31; dayOfMonth[1]=28; dayOfMonth[2]=31; dayOfMonth[3]=30;
			dayOfMonth[4]=31; dayOfMonth[5]=30; dayOfMonth[6]=31; dayOfMonth[7]=31;
			dayOfMonth[8]=30; dayOfMonth[9]=31; dayOfMonth[10]=30; dayOfMonth[11]=31;

		}
		else
		{
			dayOfMonth[0]=31; dayOfMonth[1]=29; dayOfMonth[2]=31; dayOfMonth[3]=30;
			dayOfMonth[4]=31; dayOfMonth[5]=30; dayOfMonth[6]=31; dayOfMonth[7]=31;
			dayOfMonth[8]=30; dayOfMonth[9]=31; dayOfMonth[10]=30; dayOfMonth[11]=31;
		}
	}
	else
	{
		dayOfMonth[0]=31; dayOfMonth[1]=28; dayOfMonth[2]=31; dayOfMonth[3]=30;
		dayOfMonth[4]=31; dayOfMonth[5]=30; dayOfMonth[6]=31; dayOfMonth[7]=31;
		dayOfMonth[8]=30; dayOfMonth[9]=31; dayOfMonth[10]=30; dayOfMonth[11]=31;
	}
	var sUrl = location.href;
	var re = /(\d{4})-(\d{2})\/(\d{2})/i;
	var reg = sUrl.match(re);
	if(reg)
   	{
		currentDate[0] = reg[1];
   		currentDate[1] = reg[2];
   		currentDate[2] = reg[3];
		currentDate[3] = currentDate[0]+"-"+currentDate[1]+"-"+currentDate[2]; 
   	}
	//给版面图添加事件
	var mapObj = document.getElementsByName('pagepicmap');
	if(mapObj!=null&&mapObj.length>0)
	{
    	mapObj[0].onmouseover=function(){
                   drawline(event);
                   
         };
         mapObj[0].onmouseout=function(){
                   MouseOutMap();
         };
	}

}
function getPreDate(year,month)
{
	var preDate = new Array(3);
	if(month==1)
	{
		preDate[0] = parseInt(year-1)+"-12";
		preDate[1] = parseInt(year-1);
		preDate[2] = 12;
	}
	else if(month>=11&&month<=12)
	{
		preDate[0] = year + "-" + parseInt(month-1);
		preDate[1] = parseInt(year);
		preDate[2] = parseInt(month-1);
	}
	else
	{
		preDate[0] = year + "-0" + parseInt(month-1);
		preDate[1] = parseInt(year);
		preDate[2] = "0"+parseInt(month-1);
	}
	return preDate;
}

function getNextDate(year,month)
{
	var nextDate = new Array(3);
	if(month==12)
	{
		year = parseInt(year);
		nextDate[0] = parseInt(year+1)+"-01";
		nextDate[1] = parseInt(year+1);
		nextDate[2] = "01";
	}
	else if(month>=9&&month<=11)
	{
		if(month==9||month==09)
		{
			if(month.length==2)
				month = month.substring(1,2);
		}
		month = parseInt(month);
		month = parseInt(month+1);
		nextDate[0] = year + "-" + month;
		nextDate[1] = parseInt(year);
		nextDate[2] = month;
	}
	else
	{
		if(month.length==2)
		{
			month = month.substring(1,2);
		}
		month = parseInt(parseInt(month) +1);
		nextDate[0] = year + "-0" + parseInt(month);
		nextDate[1] = parseInt(year);
		nextDate[2] = "0"+parseInt(month);
	}
	return nextDate;
}
function appendZero(n){return(("00"+ n).substr(("00"+ n).length-2));}//日期自动补零程序