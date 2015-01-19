//copyright by jason [AT] dayoo.com

//属性 兼容性检测
//下标为IE属性名, 值为FireFox的属性名
var compatibility_ff = {'className':'class'}

var compatibility_ie = {'class':'className'}

var isIE = window.navigator.userAgent.toLowerCase().indexOf('msie') != -1;
var isFF = window.navigator.userAgent.toLowerCase().indexOf('firefox') != -1;

//取内容(innerText)
function getContent(object) {
	if(isIE){
		return object.innerText;
	} else{
		return object.textContent;
	}
}

function setContent(object, content) {
	if(isIE){
		object.innerText = content;
	} else{
		object.textContent = content;
	}
}


//设定对象的默认值
function setObjectAttribute(object, attribute, value){
	
	if (!isIE) {
		if (compatibility_ff[attribute]) {
			attribute = compatibility_ff[attribute];
		}
	}else {
		if (compatibility_ie[attribute]) {
			attribute = compatibility_ie[attribute];
		}
	}
	
	return object.setAttribute(attribute, value);
}

//设定对象的默认值
function getObjectAttribute(object, attribute){
	
	if (!isIE) {
		if (compatibility_ff[attribute]) {
			attribute = compatibility_ff[attribute];
		}
	}else {
		if (compatibility_ie[attribute]) {
			attribute = compatibility_ie[attribute];
		}
	}
	
	return object.getAttribute(attribute);
}

/**
 * _AddFuncToEvent
 *
 * @param string event  事件(onclick, onchange, onxxx等, DOM标准大小写)
 * @param Object element    要被增加func的对象
 * @param Function newFunc  增加的函数
 */
function _AddFuncToEvent(eventName, element, newFunc){
    /**
    //NOTE id011150027522: 取消 FF不兼容(not compatible)!!! ;( 类里没有定义的属性或没值(但定义了),FF总会返回undefined, 按ECMA应该是有定义的是null, 没定义才是undefined
    if(element.eventName === undefined){
        throw Error(element.tagName+"不支持"+eventName+"事件");
        return false;
    }
    */
    /* NOTE id011150023522: 不能用element.eventName 只能用element[eventName] */
	/* NOTE id211150027571: 改成这样用才不会死循环 */
    if(element["_add"+eventName+"orginalHadInit"] != true){
		element["orginal_event"] = element[eventName];
		element["_add"+eventName+"orginalHadInit"] = true;
	}
    
    /** 放入对象中 **/
    //初始化函数队列
    if(element["_add"+eventName+"FuncList"] == null){
        element["_add"+eventName+"FuncList"] = new Array();
    }
    
    element["_add"+eventName+"FuncList"].push(newFunc);
    
    element[eventName] = function() {
        //执行函数队列中的函数
        var result = void(0);
        for(var i=0; i<element["_add"+eventName+"FuncList"].length;i++){
            result = element["_add"+eventName+"FuncList"][i].call(element);
        }
        
		
        if(typeof element["orginal_event"] == "function"){
            return element["orginal_event"]();
        }
		
        
        return result;
    }
    
}


function numFormatter(object, tag, num) {
	var tags = object.getElementsByTagName(tag);
	
	var tagsLength = tags.length;
	
	//删去过多对象
	if (num < tagsLength) {
	    for (var i=0; i<tagsLength-num; i++) {
	        object.removeChild(tags[tags.length-1]);
	    }
	}
}

function textFormatter(object, tag, textLength, postfix){
	var tags = object.getElementsByTagName(tag);
	
	for(var i=0; i<tags.length; i++){

		var text = getContent(tags[i]);

		if (text.length > textLength){
			if (!getObjectAttribute(tags[i], 'title')) setObjectAttribute(tags[i], 'title', text);
			text = text.substr(0, textLength)+postfix;
			setContent(tags[i], text);
		}
	}
}

function getUrlParam(url, param)
{
	var re = new RegExp("(\\\?|&)" + param + "=([^&]+)(&|$)", "i");
	var m = url.match(re);
	if (m)
		return m[2];
	else
		return '';
}



//jason@2007-7-28 11:01
function replaceAttribute (object, tag, attribute, sourceString, replaceString) {
	var tags = object.getElementsByTagName(tag);
	
	for(var i=0; i<tags.length; i++){
		setObjectAttribute(tags[i], attribute, getObjectAttribute(tags[i], attribute).replace(sourceString, replaceString));
	}
}


function strftime(time, format) {
	var monthArray = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');
	
	var aTime = new Date(time);
	
	var month = (aTime.getMonth()+1).toString().length==1?'0'+(aTime.getMonth()+1):(aTime.getMonth()+1);
	var day = aTime.getDate().toString().length==1?'0'+aTime.getDate():aTime.getDate();
	var hour = aTime.getHours().toString().length==1?'0'+aTime.getHours():aTime.getHours();
	var min = aTime.getMinutes().toString().length==1?'0'+aTime.getMinutes():aTime.getMinutes();
	var sec = aTime.getSeconds().toString().length==1?'0'+aTime.getSeconds():aTime.getSeconds();
	
	if (!format){
		return (monthArray[aTime.getMonth()]+' '+day+' '+aTime.getFullYear()+' '+hour+':'+min+':'+sec);
	} else {
		return (format.replace(/%[a-zA-Z%]/g, function (word){
			switch (word) {
				case '%%': return '%';
				case '%Y': return aTime.getFullYear();
				case '%m': return month;
				case '%d': return day;
				case '%H': return hour;
				case '%i': return min;
				case '%s': return sec;
				case '%M': return monthArray[aTime.getMonth()];
			}
		}));
	}
}