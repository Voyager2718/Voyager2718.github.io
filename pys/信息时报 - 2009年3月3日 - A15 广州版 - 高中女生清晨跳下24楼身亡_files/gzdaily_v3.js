/*
* 设定默认叠
* id 参考数据(取得当前叠的值)
* srcNode 叠的下拉
*/
function setDefaultFold (id, srcNode) {
	if (document.getElementById(id))
	{
		
		if (srcNode.tagName == 'input')
		{
			for (var i = 0; i < srcNode.options.length; i++)
			{
				if (document.getElementById(id).value == srcNode.options[i].value)
				{
					srcNode.selectedIndex = i;
					break;
				}
			}
		} else {
			if (document.getElementById(id).tagName == 'input')
			{
				srcNode.innerHTML = document.getElementById(id).value;
			} else {
				srcNode.innerHTML = document.getElementById(id).innerHTML;
			}
		}
	}
}

/*
* 设定叠显示的总版数
*/
function setTotalPage (num, srcNode) {
		if (srcNode.tagName == 'input')
		{
			srcNode.options[srcNode.selectedIndex].text += " / 今日共 " + num + " 版";
		}else{
			srcNode.innerHTML += " / 今日" + num + "版";
		}
		
}

function openCloseState(srcNodeImg, srcNodeList, imgObjectInfo, listObjectInfo){
	if (getObjectAttribute(srcNodeList, 'class') == listObjectInfo.open)
	{
		setObjectAttribute(srcNodeImg, 'src', imgObjectInfo.close);
		setObjectAttribute(srcNodeList, 'class', listObjectInfo.close);
	} else {
		setObjectAttribute(srcNodeImg, 'src', imgObjectInfo.open);
		setObjectAttribute(srcNodeList, 'class', listObjectInfo.open);
	}
}

var menu_timeout = {};
				
function menu_hide(id, timeout){
	if (!timeout)
	{
		timeout = 100;
	}
	menu_timeout[id] = setTimeout(function (){document.getElementById(id).style.display='none';}, timeout);
}

function menu_open(id){
	clearTimeout(menu_timeout[id]);
	document.getElementById(id).style.display='block';
}

function drawCalendar (id, y, m, selectedDate) {
	var mp_maxDate = '2008-03-31';
	var mp_minDate = '2006-05-01';
	var date = new Date();
	var nowDate = date.getFullYear()+"-"+appendZero(parseInt(date.getMonth()+1))+"-"+appendZero(date.getDate());
	var cal = new dyCalendar(y, m);
	if(nowY==y&&nowM==m)
	{
		selectedDate = new Date(nowY,nowM,nowD);
	}
	if (selectedDate != null) {
	 cal.setSelectedDate(selectedDate);
	}
	var calendarHtml = '<!-- year and month --><p class="title"><span class="year"><a href="###" onclick="drawCalendar(\''+id+'\', \''+(cal.getFullYear()-1)+'\', \''+cal.getMonth()+'\', null);"><img src="../../../tpl/blank.gif" alt="up" class="up" /></a>'+cal.getFullYear()+'年<a href="###" onclick="drawCalendar(\''+id+'\', \''+(cal.getFullYear()+1)+'\', \''+cal.getMonth()+'\', null);"><img src="../../../tpl/blank.gif" alt="next" class="next" /></a></span><span class="month"><a href="###" onclick="drawCalendar(\''+id+'\', \''+cal.getFullYear()+'\', \''+(cal.getMonth()-1)+'\', null);"><img src="../../../tpl/blank.gif" alt="up" class="up"/></a>'+(cal.getMonth()+1)+'月<a href="###" onclick="drawCalendar(\''+id+'\', \''+cal.getFullYear()+'\', \''+(cal.getMonth()+1)+'\', null);"><img src="../../../tpl/blank.gif" alt="next" class="next" /></a></span></p><!-- year and month Endding --><div class="date"><p class="week"><span>日</span><span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span></p><ul>';
	while (1) {

		if (cal.isStartOfMonth()) {
			calendarHtml += '';
			for (var w=0; w<cal.getWeekDay(); w++) {
				calendarHtml += '<li></li>';
			}
		}else if (cal.isStartOfWeek()) {
			calendarHtml += '';
		}
		
		var url = "http://informationtimes.dayoo.com/html/"+cal.getFullYear()+"-"+((cal.getMonth()+1)<10?'0':'')+(cal.getMonth()+1)+"/"+(cal.getDate()<10?'0':'')+cal.getDate();//+"/node_1.htm";

		var oldUrl = "/gb/node/"+cal.getFullYear()+"-"+((cal.getMonth()+1)<10?'0':'')+(cal.getMonth()+1)+"/"+(cal.getDate()<10?'0':'')+cal.getDate()+"/node_1.htm";
		
		if (cal.getTime() < new Date(2006,3,14).getTime()) {
		 url = oldUrl;
		}
		var currentDate = cal.getFullYear()+"-"+((cal.getMonth()+1)<10?'0':'')+(cal.getMonth()+1)+"-"+(cal.getDate()<10?'0':'')+cal.getDate();
		if(currentDate>mp_maxDate)
		{
		  url += '/node_1019.htm';
		}
		else if(currentDate>=mp_minDate&&currentDate<=mp_maxDate)
		{
			url += "/node_10228.htm";
		}
		else
			url = '#';
		if(currentDate<=nowDate)
		{
			if(nowY==cal.getFullYear()&&nowM==cal.getMonth()&&nowD==cal.getDate()){
				calendarHtml += '<li style="color:#ff0000;"><a href="'+ url+ '"><font color="red">'+cal.getDate()+'</font></a></li>';
			}
			else {
				calendarHtml += '<li style="color:#5a6069;"><a href="'+ url+ '"><font color="green">'+cal.getDate()+'</font></a></li>';
			}
		}
		
		else
		{
			calendarHtml += '<li style="color:#5a6069;"><a href="#">'+cal.getDate()+'</a></li>';
		}
		if (cal.isEndOfMonth()) {
			for (var ew=cal.getWeekDay(); ew<6; ew++) {
				calendarHtml += '<li ></li>';
			}
			calendarHtml += '';
			break;
		}else if (cal.isEndOfWeek()) {
			calendarHtml += '';
		}

		

		cal.next()
	}
	calendarHtml+='</ul></div>';
	document.getElementById(id).innerHTML = calendarHtml;
}



function calendarInit () {
	var sUrl = window.location.href;
	var Today = new Date();
	var tY = Today.getFullYear();
	var tM = Today.getMonth();
	var tD = Today.getDate();
	var r = /(\d{4})-(\d{2})\/(\d{2})/i;
	var reg = sUrl.match(r);
	if(reg)
	{
		tY = reg[1];
		tM = reg[2];
		tD = reg[3];
	}
	nowY = tY;
	nowM = tM-1;
	nowD = tD;
	
	if (document.getElementById('calendar'))
	{
		drawCalendar('calendar', tY,tM-1, new Date(tY,tM-1,tD));
	}

	if (document.getElementById('topcalendar'))
	{
		drawCalendar('topcalendar', tY,tM-1, new Date(tY,tM-1,tD));
	}


}



//copyright jason [ AT ] dayoo dot com


function ShowHideBoard(button, bu_show, bu_hide, board_array, board_show, board_hide, event) {
	this.button = button;	//Array String
	this.bu_show = bu_show;	//string
	this.bu_hide = bu_hide;	//string
	this.board_array = board_array;//Array String
	this.board_show = board_show;//string
	this.board_hide = board_hide;//string
	this.event = (event?event:'onclick');

	//onClick不一定就是onclick的事件
	this.onClick = function (bu_object, b_show_id){
		for (var i=0; i<this.button.length; i++) {
		    setObjectAttribute(document.getElementById(this.button[i]), 'className', this.bu_hide)
		}
		setObjectAttribute(bu_object, 'className', this.bu_show)

		for (var i=0; i<this.board_array.length; i++) {
		    setObjectAttribute(document.getElementById(this.board_array[i]), 'className', this.board_hide);
		}
		setObjectAttribute(document.getElementById(b_show_id), 'className', this.board_show)

	};
	
	//bind事件处理
	//要用 board_array MUST 对应 button的位置
	this.attachElement = function (){
		
		var thisObject = this;
		//为了能被正确调用, 设一个对象, 以button的id为属性
		var bo_id_array =  new Object();

		for (var i=0; i<this.button.length; i++) {
			bo_id_array[this.button[i]] = this.board_array[i];
			_AddFuncToEvent(this.event, document.getElementById(this.button[i]), function(){thisObject.onClick(this, bo_id_array[this.id]);});
		}
	}
}




function replaceObjectString(id, fromString, toString){
	if (document.getElementById(id))
	{
		try
		{
			return document.getElementById(id).innerHTML.toString().replace(new RegExp(fromString,"gm"),toString);
		}
		catch (e)
		{
		}
	}

	return '';
}

function replaceObjectHTML(id, fromString, toString){
	if (document.getElementById(id))
	{
		try
		{
			document.getElementById(id).innerHTML = replaceObjectString(id, fromString, toString);
		}
		catch (e)
		{
		}
	}

	return '';
}


function winOpenSearch(object){
	var url = "http://59.42.241.171:8080/hlftiweb/articlesearch.jsp";
	//var url ='http://gzdaily.dayoo.com/hlftiweb/articlesearch.jsp';
	object.action = url;
	//object.submit();
	return true;
}


function openMagazine(url, weekday, target){
	var now = new Date();
	if (!target)
	{
		target = '_blank';
	}

	var r = /(\d{4})-(\d{2})\/(\d{2})/i;
	var reg = window.location.href.match(r);
	if(!reg)
	{
		return false;
	}

	var urlToday = new dyCalendar(reg[1],reg[2]-1,reg[3]);
	
	if (urlToday.getDay() > weekday || (urlToday.getDay() == weekday && urlToday.getFullYear() == now.getFullYear() && urlToday.getMonth() == now.getMonth() && urlToday.getDate() == now.getDate()))
	{
		//打开上星期的
		while (urlToday.prev())
		{
			if (urlToday.getWeekDay() == weekday)
			{
				break;
			}
		}

	} else if (urlToday.getDay() < weekday || (now.getTime() - urlToday.getTime()) < 7*24*60*60*1000) {	//未到最新一周的指定日
		//打开上星期的
		while (urlToday.prev())
		{
			if (urlToday.getWeekDay() == weekday)
			{
				break;
			}
		}
	} else {
		//打开本星期的
		//后next(),因为有可能打开的过去的某个星期四
		while (1)
		{
			if (urlToday.getWeekDay() == weekday)
			{
				break;
			}

			urlToday.next()
		}
	}

	window.open(strftime(urlToday.getTime(), url), target);
}/*
* 设定默认叠
* id 参考数据(取得当前叠的值)
* srcNode 叠的下拉
*/
function setDefaultFold (id, srcNode) {
	if (document.getElementById(id))
	{
		
		if (srcNode.tagName == 'input')
		{
			for (var i = 0; i < srcNode.options.length; i++)
			{
				if (document.getElementById(id).value == srcNode.options[i].value)
				{
					srcNode.selectedIndex = i;
					break;
				}
			}
		} else {
			if (document.getElementById(id).tagName == 'input')
			{
				srcNode.innerHTML = document.getElementById(id).value;
			} else {
				srcNode.innerHTML = document.getElementById(id).innerHTML;
			}
		}
	}
}

/*
* 设定叠显示的总版数
*/
function setTotalPage (num, srcNode) {
		if (srcNode.tagName == 'input')
		{
			srcNode.options[srcNode.selectedIndex].text += " / 今日共 " + num + " 版";
		}else{
			srcNode.innerHTML += " / 今日" + num + "版";
		}
		
}

function openCloseState(srcNodeImg, srcNodeList, imgObjectInfo, listObjectInfo){
	if (getObjectAttribute(srcNodeList, 'class') == listObjectInfo.open)
	{
		setObjectAttribute(srcNodeImg, 'src', imgObjectInfo.close);
		setObjectAttribute(srcNodeList, 'class', listObjectInfo.close);
	} else {
		setObjectAttribute(srcNodeImg, 'src', imgObjectInfo.open);
		setObjectAttribute(srcNodeList, 'class', listObjectInfo.open);
	}
}

var menu_timeout = {};
				
function menu_hide(id, timeout){
	if (!timeout)
	{
		timeout = 100;
	}
	menu_timeout[id] = setTimeout(function (){document.getElementById(id).style.display='none';}, timeout);
}

function menu_open(id){
	clearTimeout(menu_timeout[id]);
	document.getElementById(id).style.display='block';
}

function drawCalendar (id, y, m, selectedDate) {
	var mp_maxDate = '2008-03-31';
	var mp_minDate = '2006-05-01';
	var date = new Date();
	var nowDate = date.getFullYear()+"-"+appendZero(parseInt(date.getMonth()+1))+"-"+appendZero(date.getDate());
	var cal = new dyCalendar(y, m);
	if(nowY==y&&nowM==m)
	{
		selectedDate = new Date(nowY,nowM,nowD);
	}
	if (selectedDate != null) {
	 cal.setSelectedDate(selectedDate);
	}
	var calendarHtml = '<!-- year and month --><p class="title"><span class="year"><a href="###" onclick="drawCalendar(\''+id+'\', \''+(cal.getFullYear()-1)+'\', \''+cal.getMonth()+'\', null);"><img src="../../../tpl/blank.gif" alt="up" class="up" /></a>'+cal.getFullYear()+'年<a href="###" onclick="drawCalendar(\''+id+'\', \''+(cal.getFullYear()+1)+'\', \''+cal.getMonth()+'\', null);"><img src="../../../tpl/blank.gif" alt="next" class="next" /></a></span><span class="month"><a href="###" onclick="drawCalendar(\''+id+'\', \''+cal.getFullYear()+'\', \''+(cal.getMonth()-1)+'\', null);"><img src="../../../tpl/blank.gif" alt="up" class="up"/></a>'+(cal.getMonth()+1)+'月<a href="###" onclick="drawCalendar(\''+id+'\', \''+cal.getFullYear()+'\', \''+(cal.getMonth()+1)+'\', null);"><img src="../../../tpl/blank.gif" alt="next" class="next" /></a></span></p><!-- year and month Endding --><div class="date"><p class="week"><span>日</span><span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span></p><ul>';
	while (1) {

		if (cal.isStartOfMonth()) {
			calendarHtml += '';
			for (var w=0; w<cal.getWeekDay(); w++) {
				calendarHtml += '<li></li>';
			}
		}else if (cal.isStartOfWeek()) {
			calendarHtml += '';
		}
		
		var url = "http://informationtimes.dayoo.com/html/"+cal.getFullYear()+"-"+((cal.getMonth()+1)<10?'0':'')+(cal.getMonth()+1)+"/"+(cal.getDate()<10?'0':'')+cal.getDate();//+"/node_1.htm";

		var oldUrl = "/gb/node/"+cal.getFullYear()+"-"+((cal.getMonth()+1)<10?'0':'')+(cal.getMonth()+1)+"/"+(cal.getDate()<10?'0':'')+cal.getDate()+"/node_1.htm";
		
		if (cal.getTime() < new Date(2006,3,14).getTime()) {
		 url = oldUrl;
		}
		var currentDate = cal.getFullYear()+"-"+((cal.getMonth()+1)<10?'0':'')+(cal.getMonth()+1)+"-"+(cal.getDate()<10?'0':'')+cal.getDate();
		if(currentDate>mp_maxDate)
		{
			url += "/node_1019.htm";
		}
		else if(currentDate>=mp_minDate&&currentDate<=mp_maxDate)
		{
			url += "/node_10228.htm";
		}
		else
			url = '#';
		if(currentDate<=nowDate)
		{
			if(nowY==cal.getFullYear()&&nowM==cal.getMonth()&&nowD==cal.getDate()){
				calendarHtml += '<li style="color:#ff0000;"><a href="'+ url+ '"><font color="red">'+cal.getDate()+'</font></a></li>';
			}
			else {
				calendarHtml += '<li style="color:#5a6069;"><a href="'+ url+ '"><font color="green">'+cal.getDate()+'</font></a></li>';
			}
		}
		
		else
		{
			calendarHtml += '<li style="color:#5a6069;"><a href="#">'+cal.getDate()+'</a></li>';
		}
		if (cal.isEndOfMonth()) {
			for (var ew=cal.getWeekDay(); ew<6; ew++) {
				calendarHtml += '<li ></li>';
			}
			calendarHtml += '';
			break;
		}else if (cal.isEndOfWeek()) {
			calendarHtml += '';
		}

		

		cal.next()
	}
	calendarHtml+='</ul></div>';
	document.getElementById(id).innerHTML = calendarHtml;
}



function calendarInit () {
	var sUrl = window.location.href;
	var Today = new Date();
	var tY = Today.getFullYear();
	var tM = Today.getMonth();
	var tD = Today.getDate();
	var r = /(\d{4})-(\d{2})\/(\d{2})/i;
	var reg = sUrl.match(r);
	if(reg)
	{
		tY = reg[1];
		tM = reg[2];
		tD = reg[3];
	}
	nowY = tY;
	nowM = tM-1;
	nowD = tD;
	
	if (document.getElementById('calendar'))
	{
		drawCalendar('calendar', tY,tM-1, new Date(tY,tM-1,tD));
	}

	if (document.getElementById('topcalendar'))
	{
		drawCalendar('topcalendar', tY,tM-1, new Date(tY,tM-1,tD));
	}


}



//copyright jason [ AT ] dayoo dot com


function ShowHideBoard(button, bu_show, bu_hide, board_array, board_show, board_hide, event) {
	this.button = button;	//Array String
	this.bu_show = bu_show;	//string
	this.bu_hide = bu_hide;	//string
	this.board_array = board_array;//Array String
	this.board_show = board_show;//string
	this.board_hide = board_hide;//string
	this.event = (event?event:'onclick');

	//onClick不一定就是onclick的事件
	this.onClick = function (bu_object, b_show_id){
		for (var i=0; i<this.button.length; i++) {
		    setObjectAttribute(document.getElementById(this.button[i]), 'className', this.bu_hide)
		}
		setObjectAttribute(bu_object, 'className', this.bu_show)

		for (var i=0; i<this.board_array.length; i++) {
		    setObjectAttribute(document.getElementById(this.board_array[i]), 'className', this.board_hide);
		}
		setObjectAttribute(document.getElementById(b_show_id), 'className', this.board_show)

	};
	
	//bind事件处理
	//要用 board_array MUST 对应 button的位置
	this.attachElement = function (){
		
		var thisObject = this;
		//为了能被正确调用, 设一个对象, 以button的id为属性
		var bo_id_array =  new Object();

		for (var i=0; i<this.button.length; i++) {
			bo_id_array[this.button[i]] = this.board_array[i];
			_AddFuncToEvent(this.event, document.getElementById(this.button[i]), function(){thisObject.onClick(this, bo_id_array[this.id]);});
		}
	}
}




function replaceObjectString(id, fromString, toString){
	if (document.getElementById(id))
	{
		try
		{
			return document.getElementById(id).innerHTML.toString().replace(new RegExp(fromString,"gm"),toString);
		}
		catch (e)
		{
		}
	}

	return '';
}

function replaceObjectHTML(id, fromString, toString){
	if (document.getElementById(id))
	{
		try
		{
			document.getElementById(id).innerHTML = replaceObjectString(id, fromString, toString);
		}
		catch (e)
		{
		}
	}

	return '';
}


function winOpenSearch(object){
	var url = "http://59.42.241.171:8080/hlftiweb/articlesearch.jsp";
	//var url ='http://gzdaily.dayoo.com/hlftiweb/articlesearch.jsp';
	object.action = url;
	//object.submit();
	return true;
}


function openMagazine(url, weekday, target){
	var now = new Date();
	if (!target)
	{
		target = '_blank';
	}

	var r = /(\d{4})-(\d{2})\/(\d{2})/i;
	var reg = window.location.href.match(r);
	if(!reg)
	{
		return false;
	}

	var urlToday = new dyCalendar(reg[1],reg[2]-1,reg[3]);
	
	if (urlToday.getDay() > weekday || (urlToday.getDay() == weekday && urlToday.getFullYear() == now.getFullYear() && urlToday.getMonth() == now.getMonth() && urlToday.getDate() == now.getDate()))
	{
		//打开上星期的
		while (urlToday.prev())
		{
			if (urlToday.getWeekDay() == weekday)
			{
				break;
			}
		}

	} else if (urlToday.getDay() < weekday || (now.getTime() - urlToday.getTime()) < 7*24*60*60*1000) {	//未到最新一周的指定日
		//打开上星期的
		while (urlToday.prev())
		{
			if (urlToday.getWeekDay() == weekday)
			{
				break;
			}
		}
	} else {
		//打开本星期的
		//后next(),因为有可能打开的过去的某个星期四
		while (1)
		{
			if (urlToday.getWeekDay() == weekday)
			{
				break;
			}

			urlToday.next()
		}
	}

	window.open(strftime(urlToday.getTime(), url), target);
}