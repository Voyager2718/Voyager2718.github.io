/*广州日报为日报,所以不用取period.xml,直接写死上下期跳转*/
var dayOfMonth= new Array(12);
var currentDate = new Array(4);
//一代的使用时间
var mp_maxDate = '2007-06-30';
var mp_minDate = '2006-05-01';
var node_jump = "node_1.htm";
var node_old_jump = "node_10264.htm";
/*
function goPrePeriod()
{
	var sUrl = location.href;
	var date = new Date();
	var month = date.getMonth();//JS得到的月会往前推一个月,如现在是8月,但此处month等于7
	var check = false;
	if(currentDate!=null)
	{
		if(currentDate[3]>'2007-07-01')
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
			sUrl = sUrl.replace(/\d{4}-\d{2}\/\d{2}/g,'2007' + "-" +'06' + "/" + '30');
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
*/

/*
 *上一天,下一天每个日期首页的开始页会有不同,故转跳是要读取当天的开始的页面如:node_1.htm等,所以改为读xml文件  by Ct 2009.12.04
 */
var $Date = {
	toGo: '',
	year: 0,
	month: 0,
	day: 0,
	link: ''
};

//上一天
function goPrePeriod(){
	var arr = [];
	//解析当前url获得今天年月日
	//arr[0]:前面链接,arr[1]:年,arr[2]:月,arr[3]:日
	arr = get_date();
	
	var year;
	var month;
	var day;

	//如果这天是1号，则日期应定位到上个月最后一日
	if(parseInt(arr[3]) == 1){
		//如果这个月是1月, 则日期是定位上年12月最后一日
		if(parseInt(arr[2]) == 1){
			year = parseInt(arr[1]) - 1;
			//获取该年12月最大日子
			var dd = new Date(year + '/' + '13' + '/0');
			var d = dd.getDate();
			
			month = '12';
			day = d;
		}else{
			//否则,日期定位到今年的上个月最后一日
			year = arr[1];
			month = parseInt(arr[2]) - 1;
			//获取上个月最大日子
			var dd = new Date(year + '/' + parseInt(arr[2]) + '/0');
			var d = dd.getDate();
			
			month = month > 9? month : ('0'+month);
			day = d;
		}
	}else{
		//否则,这天不是1号,只需向前减一天
		year = arr[1];
		month = arr[2];
		day = parseInt(arr[3],10) - 1;
		day = day > 9? day : ('0'+day);
	}

	$Date.toGo = year + '-' + month + '-' + day;
	$Date.year = year;
	$Date.month = month;
	$Date.day = day;
	$Date.link = arr[0];
	
	//alert($Date.toGo);
	var requestlink = $Date.link + $Date.year + '-' + $Date.month + '/period.xml';
	//alert(requestlink)
	//获取当月xml文件
	getNodeFromXML(requestlink);
	return false;
}

//下一天
function goNextPeriod(){
	var arr = [];
	//解析当前url获得今天年月日
	//arr[0]:前面链接,arr[1]:年,arr[2]:月,arr[3]:日
	arr = get_date();
	
	var year;
	var month;
	var day;

	//先获取当前报纸日期的那个月的最大日
	var maxD = new Date(arr[1] + '/' + (parseInt(arr[2]) + 1) + '/0');
	var max = maxD.getDate();

	//如果这天是最后一日
	if(parseInt(arr[3]) == max){
		//如果这个月是12月,则日期定位到下年1月1日
		if(parseInt(arr[2]) == 12){
			year = parseInt(arr[1]) + 1;
			month = '01';
			day = '01';
		}else{
			//否则, 日期定位到下个月的1号
			year = parseInt(arr[1],10);
			month = parseInt(parseInt(arr[2]) + 1);
			month = month > 9? month : ('0'+month);
			day = '01';
		}

	}else{
		//如果不是最后一日,则日期最需向后推一日
		year = parseInt(arr[1]);
		month = arr[2];
		day = parseInt(arr[3],10) + 1;
		day = day > 9? day : ('0'+day);
	}

	$Date.toGo = year + '-' + month + '-' + day;
	$Date.year = year;
	$Date.month = month;
	$Date.day = day;
	$Date.link = arr[0];
	
	//alert($Date.toGo);
	var requestlink = $Date.link + $Date.year + '-' + $Date.month + '/period.xml';
	//alert(requestlink)
	//获取当月xml文件
	getNodeFromXML(requestlink);
	return false;
}


function get_date(){
	var localUrl = location.href;
	var re = /[\s\S]+?\d{4}-\d{2}\/\d{2}\//i;
	var monthRe = /\d{4}-\d{2}/i;
	var url = localUrl.match(re);
	var temp = url[0].substr(url[0].length-11, 10); //2009-12/03

	var arr=[];
	arr[0] = url[0].substr(0, url[0].length-11);
	arr[1] = temp.substr(0, 4);
	arr[2] = temp.substr(5, 2);
	arr[3] = temp.substr(temp.length-2, 2);
	
	return arr;
}


function getNodeFromXML(url){
	new Ajax.Request(
		url,
		{
			method: 'get',
			onSuccess: function(request){
				ajaxGetDateSuccess(request);
			},
			onFailure: function(){
				
			}
		}
	)
}

function ajaxGetDateSuccess(data){
	var xList;
	var retDoc = data.responseXML;
	
	xList = retDoc.getElementsByTagName("period");
	
	var period_date = [];
	var front_page = [];
	for(var i=0; i<xList.length; i++){
		period_date[i] = xList[i].getElementsByTagName('period_date')[0].text || xList[i].getElementsByTagName('period_date')[0].firstChild.nodeValue;
		front_page[i] = xList[i].getElementsByTagName('front_page')[0].text || xList[i].getElementsByTagName('front_page')[0].firstChild.nodeValue;
	}
	
	var node_jump = '';
	//获取xml日期对应我们所需要去的日子的html文件

	var haveThatday = false;
	for(var j=0; j<period_date.length; j++){
		if(period_date[j] == $Date.toGo){
			node_jump = front_page[j];
			haveThatday = true; 
		}
	}
	
	//如果不存在这天
	if(!haveThatday){ 
		alert('暂无此日的数据');
		return false; 
	}
	
	node_jump = node_jump == ''? 'node_10264.htm' : node_jump;
	var togo = $Date.link + $Date.year + '-' + $Date.month + '/' + $Date.day + '/' + node_jump;
	//alert(togo);
	window.location = togo;
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