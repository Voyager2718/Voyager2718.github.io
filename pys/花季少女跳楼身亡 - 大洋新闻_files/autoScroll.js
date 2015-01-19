	var MatoScoCen = document.getElementById("MatoScoCen");
	var MatoJsList = document.getElementById("js_list");
	var MatoSubMitOne = document.getElementById("roll_submit_one");
	var MatoSubMitTwo = document.getElementById("roll_submit_two");
	var MatoSubMitThree = document.getElementById("roll_submit_three");
	var MatoRollJsnew = document.getElementById("roll_jsnew");
	var MatoJsListCopy = document.getElementById("js_list_copy");
	var MatoJsUl = MatoJsList.getElementsByTagName("ul");
	var MatoButtom = document.getElementById("roll_buttom");
	var matoButtom_span = MatoButtom.getElementsByTagName("span");
	var MatoSubmt_None = document.getElementById("MatoSubmt_None");
	var MatoSubmt_None_Box = document.getElementById("MatoSubmt_None_Box");
	var MatoJsLi = '';
	var MatoJsUlHi = '';
	var MatoClickN = true;
	var MatoClickU = true;
	var MatoNum = 0;
	var MatoSum = 0;
	var MatoJsNum = 0;
	var MatoCleartimeout;
	var MatoJsClear;
	var MatoJsClearTwo;
	var MatoNameTop;
	var MatoJsClearList;
	var MatoJsClearListTwo;
	var MatoJsClearListZeow;
	var MatoJsClearListZeowTwo;
	var MatoMouOut;
	var MatoisLoadIng = false;
	var MatoCookieValueN;
	matoButtom_span[0].style.display = 'none';
	

// 读取稿件
	var DayooFP = {};
	var MatoAddCen = function(result){	
	var MatoRes_Win = result.win_content;
	var MatoRes_New = result.news;
	var MatoRes_WinLi = MatoRes_Win.split("<br/>");
	var TopFour_jd_news = [MatoRes_WinLi[0] , MatoRes_WinLi[1] , MatoRes_WinLi[2] , MatoRes_WinLi[3]];
	var TopFour_jd_news_html = '<li>'+MatoRes_WinLi[0]+'</li>'+'<li>'+MatoRes_WinLi[1]+'</li>'+'<li>'+MatoRes_WinLi[2]+'</li>'+'<li>'+MatoRes_WinLi[3]+'</li>';
	var MatoRes_HTML= "";
	var MatoRes_NewHtml= "";
	for(var i=0; i<MatoRes_WinLi.length; i++){
		MatoRes_HTML+= '<li>'+MatoRes_WinLi[i]+'</li>';
	}

	for(var j=0;j<MatoRes_New.length;j++){
		var js_time = MatoRes_New[j][0].split(" ")[1].split(":");
		var js_time_fen = [js_time[0] , js_time[1]];
		MatoRes_NewHtml+= '<li><tt>'+js_time_fen.join(":")+'</tt><span><a href="'+MatoRes_New[j][2]+'" target="_blank">'+MatoRes_New[j][1]+'</a></span></li>';	
	}

	
	Bottom_four_js_news_html = 
		'<li><tt>'+js_time_fen.join(":")+'</tt><span><a href="'+MatoRes_New[MatoRes_New.length-4][2]+'" target="_blank">'+MatoRes_New[MatoRes_New.length-4][1]+'</a></span></li>'
		+'<li><tt>'+js_time_fen.join(":")+'</tt><span><a href="'+MatoRes_New[MatoRes_New.length-3][2]+'" target="_blank">'+MatoRes_New[MatoRes_New.length-3][1]+'</a></span></li>'
		+'<li><tt>'+js_time_fen.join(":")+'</tt><span><a href="'+MatoRes_New[MatoRes_New.length-2][2]+'" target="_blank">'+MatoRes_New[MatoRes_New.length-2][1]+'</a></span></li>'
		+'<li><tt>'+js_time_fen.join(":")+'</tt><span><a href="'+MatoRes_New[MatoRes_New.length-1][2]+'" target="_blank">'+MatoRes_New[MatoRes_New.length-1][1]+'</a></span></li>';

	Top_four_js_news_html = 
		'<li><tt>'+js_time_fen.join(":")+'</tt><span><a href="'+MatoRes_New[MatoRes_New.length-12][2]+'" target="_blank">'+MatoRes_New[MatoRes_New.length-12][1]+'</a></span></li>'
		+'<li><tt>'+js_time_fen.join(":")+'</tt><span><a href="'+MatoRes_New[MatoRes_New.length-11][2]+'" target="_blank">'+MatoRes_New[MatoRes_New.length-11][1]+'</a></span></li>'
		+'<li><tt>'+js_time_fen.join(":")+'</tt><span><a href="'+MatoRes_New[MatoRes_New.length-10][2]+'" target="_blank">'+MatoRes_New[MatoRes_New.length-10][1]+'</a></span></li>'
		+'<li><tt>'+js_time_fen.join(":")+'</tt><span><a href="'+MatoRes_New[MatoRes_New.length-9][2]+'" target="_blank">'+MatoRes_New[MatoRes_New.length-9][1]+'</a></span></li>';
	
	/*
	Bottom_four_js_news_html = 
		'<li><tt>'+js_time_fen.join(":")+'</tt><span><a href="'+MatoRes_New[MatoRes_New.length-1][2]+'" target="_blank">'+MatoRes_New[MatoRes_New.length-1][1]+'</a></span></li>';
	*/
	//document.getElementById("innerHtml_news").innerHTML = Bottom_four_js_news_html + '<br style="clear:both" />' + MatoRes_HTML + '<br style="clear:both" />' + MatoRes_NewHtml + '<br style="clear:both" />' + TopFour_jd_news_html;	
	document.getElementById("innerHtml_news").innerHTML = Bottom_four_js_news_html + '<br style="clear:both" />' + MatoRes_NewHtml+ '<br style="clear:both" />' + Top_four_js_news_html;	
	MatoisLoadIng = true;
	MatoJsLi = MatoJsList.getElementsByTagName("li");
	MatoJsUlHi = -(Math.ceil(MatoJsLi.length/4)*28)+28;

	js_list_scroll();
	}


// cookie 记录
function cookieSet(){
	document.cookie = 'scorllBar='+escape(MatoSubmt_None_Box.style.display)+';expires='+new Date(2099,12,31).toUTCString()+';path='+'/'+';domain=dayoo.com;';
}

function cookieGet(NAME){
var cookieName = unescape(document.cookie);

var cookieAddW = cookieName.indexOf(NAME);
var cookieBf = cookieName.substring(cookieAddW);
MatoCookieValueN = cookieBf.split(";")[0].split("=")[1];
if(cookieAddW == -1){
	SecQuery();
	DayooFP.run = MatoAddCen;
	MatoScoCen.style.display = 'block';
	MatoSubmt_None_Box.style.display = 'none';
}

if(cookieAddW != -1 && MatoCookieValueN == "block"){
	MatoScoCen.style.display = 'none';
	MatoSubmt_None_Box.style.display = 'block';
	return;
}

if(cookieAddW != -1 && MatoCookieValueN == "none"){
	SecQuery();
	DayooFP.run = MatoAddCen;
	MatoScoCen.style.display = 'block';
	MatoSubmt_None_Box.style.display = 'none';
}


}


// 请求数据
function SecQuery(){
var sourceURL="http://app5.dayoo.com/roll_bar/getNews.php";
var e=document.createElement('script');   
e.id='DFPSourceScript';
e.type='text/javascript';
e.charset='utf-8';
e.src=sourceURL+"?cleanCache="+new Date();   
document.getElementsByTagName("head")[0].appendChild(e);
}

	// 即时新闻列表自动滚动 
	function js_list_scroll(){
		clearTimeout(MatoJsClearList);
		MatoNum = MatoNum - 2;
		MatoJsUl[0].style.top = MatoNum + 'px';
		MatoCleartimeout=setTimeout(js_list_scroll , 40);
		if(MatoNum % 28 == 0){
			clearTimeout(MatoCleartimeout);
			MatoCleartimeout=setTimeout(js_list_scroll , 4000);
		}
		if(MatoNum <= MatoJsUlHi){	
			MatoNum = -28;	
			//matoButtom_span[0].style.display = 'block';
			//matoButtom_span[1].style.display = 'none';
		}	
		if(MatoNum == -84){
			//matoButtom_span[0].style.display = 'none';
			//matoButtom_span[1].style.display = 'block';
		}
	}

	// 点击向上翻页
	MatoSubMitOne.onclick = function(){
			
			if(MatoClickN== false){
				
				return false;
			}

			MatoClickN = false;

			
			setTimeout(function(){
				MatoClickN = true;
			},1000);


			MatoNameTop = parseInt(MatoJsUl[0].style.top);

				if(parseInt(MatoJsUl[0].style.top) == -28){
					//matoButtom_span[0].style.display = 'none';
					//matoButtom_span[1].style.display = 'block';
					zeom_list();
				}
				if(parseInt(MatoJsUl[0].style.top)%28 == 0 && parseInt(MatoJsUl[0].style.top) < -28){
					if(parseInt(MatoJsUl[0].style.top) == -84){
						//matoButtom_span[0].style.display = 'block';
						//matoButtom_span[1].style.display = 'none';
					}
					up_list(); 

				}else{
					return false;
				}

			
	}
	
	// 点击向下翻页
	MatoSubMitTwo.onclick = function(){
		

		if(MatoClickU== false){
				
				return false;
			}

			MatoClickU = false;

			
			setTimeout(function(){
				MatoClickU = true;
			},1000);
			
		MatoNameTop = parseInt(MatoJsUl[0].style.top);

		if(parseInt(MatoJsUl[0].style.top) == MatoJsUlHi + 28){
			//matoButtom_span[0].style.display = 'block';
			//matoButtom_span[1].style.display = 'none';
			maxtop_list();
		}
		if(parseInt(MatoJsUl[0].style.top)%28 == 0 && parseInt(MatoJsUl[0].style.top) > MatoJsUlHi + 28){	
			if(parseInt(MatoJsUl[0].style.top) == -56){
				//matoButtom_span[0].style.display = 'none';
				//matoButtom_span[1].style.display = 'block';
			}
			next_list();
		}else{
			return false;
		}
	}

// 如果ie
if(window.ActiveXObject){
	MatoJsList.onmouseover = function(){
		if (isMouseLeaveOrEnter(event,this)){
			if(MatoNum % 28 == 0){
			clearTimeout(MatoCleartimeout);
			clearTimeout(MatoJsClearList);
			clearTimeout(MatoJsClearListZeow);
			clearTimeout(MatoJsClearListTwo);
			clearTimeout(MatoJsClearListZeowTwo);
			clearTimeout(MatoMouOut);
			}
		}
	}

	MatoJsList.onmouseout = function(){
		if (isMouseLeaveOrEnter(event,this)){
			clearTimeout(MatoCleartimeout);
			clearTimeout(MatoJsClearList);
			clearTimeout(MatoJsClearListZeow);
			clearTimeout(MatoJsClearListTwo);
			clearTimeout(MatoJsClearListZeowTwo);
			clearTimeout(MatoMouOut);
			MatoMouOut = setTimeout("js_list_scroll()" , 1000);
		}
	}
}
else{
	var e;
	MatoJsList.onmouseover = function(e){
		if (isMouseLeaveOrEnter(e,this)){
			if(MatoNum % 28 == 0){
			clearTimeout(MatoCleartimeout);
			clearTimeout(MatoJsClearList);
			clearTimeout(MatoJsClearListZeow);
			clearTimeout(MatoJsClearListTwo);
			clearTimeout(MatoJsClearListZeowTwo);
			clearTimeout(MatoMouOut);
			}
		}
	}

	MatoJsList.onmouseout = function(e){
		if (isMouseLeaveOrEnter(e,this)){
			clearTimeout(MatoCleartimeout);
			clearTimeout(MatoJsClearList);
			clearTimeout(MatoJsClearListZeow);
			clearTimeout(MatoJsClearListTwo);
			clearTimeout(MatoJsClearListZeowTwo);
			clearTimeout(MatoMouOut);
			MatoMouOut = setTimeout("js_list_scroll()" , 1000);
		}
	}
}


// 冒泡
function isMouseLeaveOrEnter(e, handler) {   
    if (e.type != 'mouseout' && e.type != 'mouseover') return false;   
    var reltg = e.relatedTarget ? e.relatedTarget : e.type == 'mouseout' ? e.toElement : e.fromElement;   
    while (reltg && reltg != handler)   
        reltg = reltg.parentNode;   
    return (reltg != handler);   
}   

	//up_list 翻页
	function up_list(){	
		clearTimeout(MatoCleartimeout);
		clearTimeout(MatoJsClearList);
		clearTimeout(MatoJsClearListZeow);
		clearTimeout(MatoJsClearListTwo);
		clearTimeout(MatoJsClearListZeowTwo);
		clearTimeout(MatoMouOut);
		MatoSum = MatoSum + 2;
		MatoJsUl[0].style.top = MatoNameTop + MatoSum + 'px';
		MatoNum = parseInt(MatoJsUl[0].style.top);
		MatoJsClear = setTimeout(up_list , 40);	

		if(MatoSum == 28){	
			clearTimeout(MatoJsClear);
			MatoSum =0;
			MatoJsClearList = setTimeout("js_list_scroll()" , 4000);
		}	
		
	}

	//当top=0时向上翻动
	function zeom_list(){
		clearTimeout(MatoCleartimeout);
		clearTimeout(MatoJsClearList);
		clearTimeout(MatoJsClearListZeow);
		clearTimeout(MatoJsClearListTwo);
		clearTimeout(MatoJsClearListZeowTwo);
		clearTimeout(MatoMouOut);
		MatoJsNum = MatoJsNum + 2;
		MatoJsUl[0].style.top = MatoNameTop + MatoJsNum + 'px';
		MatoJsClearListZeow = setTimeout(zeom_list , 40);
		if(MatoJsNum == 28){	
			clearTimeout(MatoJsClearListZeow);
			MatoJsUl[0].style.top = MatoJsUlHi + 28 + 'px';
			MatoNum = parseInt(MatoJsUl[0].style.top);
			MatoJsNum =0;
			MatoJsClearListZeow = setTimeout("js_list_scroll()" , 4000);
		}
	}

	//next_list 翻页
	
	function next_list(){
		clearTimeout(MatoJsClearListTwo);
		clearTimeout(MatoCleartimeout);
		clearTimeout(MatoJsClearList);
		clearTimeout(MatoJsClearListZeow);
		clearTimeout(MatoJsClearListZeowTwo);
		clearTimeout(MatoMouOut);
		MatoSum = MatoSum - 2;
		MatoJsUl[0].style.top = MatoNameTop + MatoSum + 'px';
		MatoNum = parseInt(MatoJsUl[0].style.top);
		MatoJsClearTwo = setTimeout(next_list , 40);		
		if(MatoSum == -28){	
			clearTimeout(MatoJsClearTwo);
			MatoSum =0;
			MatoJsClearListTwo = setTimeout("js_list_scroll()" , 4000);
		}		
	}


	//当top = maxtop时向上翻动
	function maxtop_list(){
		clearTimeout(MatoJsClearListZeowTwo);
		clearTimeout(MatoJsClearListTwo);
		clearTimeout(MatoCleartimeout);
		clearTimeout(MatoJsClearList);
		clearTimeout(MatoJsClearListZeow);	
		clearTimeout(MatoMouOut);
		MatoJsNum = MatoJsNum - 2;
		MatoJsUl[0].style.top = MatoNameTop + MatoJsNum + 'px';
		MatoJsClearListZeowTwo = setTimeout(maxtop_list , 40);
		if(MatoJsNum == -28){	
			clearTimeout(MatoJsClearListZeowTwo);
			MatoJsUl[0].style.top = -28 + 'px';
			MatoNum = parseInt(MatoJsUl[0].style.top);
			MatoJsNum =0;
			MatoJsClearListZeowTwo = setTimeout("js_list_scroll()" , 4000);
		}
	}

	//点击关闭 
	MatoSubMitThree.onclick = function(){
		MatoScoCen.style.display = 'none';
		MatoSubmt_None_Box.style.display = 'block';
		clearTimeout(MatoJsClearListZeowTwo);
		clearTimeout(MatoJsClearListTwo);
		clearTimeout(MatoCleartimeout);
		clearTimeout(MatoJsClearList);
		clearTimeout(MatoJsClearListZeow);
		cookieSet();
	}

	//点击打开新闻
	MatoSubmt_None.onclick = function(){	
		if(MatoisLoadIng == true){
			MatoScoCen.style.display = 'block';
			MatoSubmt_None_Box.style.display = 'none';	
			js_list_scroll();
		}
		if(MatoisLoadIng == false){
			SecQuery();
			DayooFP.run = MatoAddCen;
			MatoScoCen.style.display = 'block';
			MatoSubmt_None_Box.style.display = 'none';
		}
		cookieSet();
	}


// 按钮高亮效果
	MatoSubMitThree.onmouseover = function(){
		this.className = 'matobak_3'	
	}
	MatoSubMitThree.onmouseout = function(){
		this.className = 'matobak_three'	
	}

	MatoSubMitOne.onmouseover = function(){
		this.className = 'matobak_1'	
	}
	MatoSubMitOne.onmouseout = function(){
		this.className = 'matobak_one'	
	}

	MatoSubMitTwo.onmouseover = function(){
		this.className = 'matobak_2'	
	}
	MatoSubMitTwo.onmouseout = function(){
		this.className = 'matobak_two'	
	}
// 
	cookieGet("scorllBar");


