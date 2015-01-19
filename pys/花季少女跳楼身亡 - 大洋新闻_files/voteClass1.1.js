// JavaScript Document
dojo.require("dojo.cookie");
dojo.require("dojo.io.script");

//投票类
function VoteClass(){
	this.url='';//文章地址
	this.group='';//投票组名称
	this.value=1;//投票加1
	this.postURL='http://app5.dayoo.com/news_mood/vote.php';//提交地址
	this.sel_fun='';//查找后处理函数
	this.vote_fun='';//投票后处理函数
	this.vote_sel_fun='';//投票并查找后处理函数
	this.cookie_time='60';//投票cookie限时
	this.checkCookie=true;//是否进行投票限时检测
	this.cookie_fun='';//投票限时处理函数
		
	//查找
	this.sel=function(sel_fun){
		if(sel_fun==null || sel_fun=='')sel_fun=this.sel_fun;
		
		if(this.url=='' || this.group=='' || sel_fun==''){
			alert('plase set url&group&sel_fun first');
			return;
		}
		var params= { "action": "sel", "group": this.group, "url": dojo.trim(this.url) };
		this.dojoBind(params,sel_fun);
	}
	//投票
	this.vote=function(name,value,vote_fun){
		if(value==null || value=='')value=this.value;
		if(vote_fun==null || vote_fun=='')vote_fun=this.vote_fun;	
		
		if(this.url=='' || name=='' || value=='' || vote_fun==''){
			alert('plase set url&name&value&vote_fun first');
			return;
		}

		if(this.checkCookie){if(!this.setCookie())return;}
		
		var params= { "action": "vote", "name": name, "value": value, "url": dojo.trim(this.url) };
		this.dojoBind(params,vote_fun);
	}
	//投票并查找
	this.vote_sel=function(name,value,vote_sel_fun){
		if(value==null || value=='')value=this.value;
		if(vote_sel_fun==null || vote_sel_fun=='')vote_sel_fun=this.vote_sel_fun;	
		
		if(this.url=='' || name=='' || value=='' || this.group=='' || vote_sel_fun==''){
			alert('plase set url&name&value&group&vote_sel_fun first');
			return;
		}
		
		if(this.checkCookie){if(!this.setCookie())return;}
		
		var params= { "action": "vote_sel", "name=": name, "value": value, "group": this.group, "url": dojo.trim(this.url) };
		this.dojoBind(params,vote_sel_fun);
	}
	
	//一定时间内不能重复投票
	this.setCookie=function(cookie_time,fun){
		
		if(cookie_time==null || cookie_time=='')cookie_time=this.cookie_time;
		if(fun==null || fun=='')fun=this.cookie_fun;
		
		if(cookie_time==''){
			alert('plase set cookie_time first');
			return false;
		}
		
		if(fun==''){
			var cf=function(time){
				alert('place vote after '+time+' minutes');
			}
			fun='cf';
		}
		
		var url=dojo.trim(this.url.toString());
		var cookie_name=url.replace(/#/g,'');
		var dateObj=new Date();
		var dateT=dateObj.getTime();
	
		if(!dojo.cookie(cookie_name)){
			dojo.cookie(cookie_name,dateT);
			return true;
		}
		
		if(dateT-dojo.cookie(cookie_name)<0 || dateT-dojo.cookie(cookie_name)>cookie_time*60*1000){
			dojo.cookie(cookie_name,dateT);
			return true;
		}else{
			eval(fun+'('+this.cookie_time+')')
			return false;
		}
		
	}
	
	//检查cookie是否有限
	this.isVote=function(cookie_time){
		if(cookie_time==null || cookie_time=='')cookie_time=this.cookie_time;
		if(cookie_time==''){
			alert('plase set cookie_time first');
			return true;
		}
		var url=dojo.trim(this.url.toString());
		var cookie_name=url.replace(/#/g,'');
		var dateObj=new Date();
		var dateT=dateObj.getTime();
		
		if(!dojo.cookie(cookie_name)){
			return false;
		}

		if(dateT-dojo.cookie(cookie_name)<0 || dateT-dojo.cookie(cookie_name)>cookie_time*60*1000){
			return false;
		}
		return true;
	}
	
	this.dojoBind=function(params,handleFun){
		if(this.postURL==''){
			alert('plase set postURL first');
			return;
		}
		var kw = dojo.io.script.get( {
		  url: this.postURL,
		  callbackParamName: "callback",
		  content: params,
		  handleAs: "json",
		  preventCache: true,
		  handle: function(response, ioArgs){
			  if (response instanceof Error) {
				if (response.dojoType == "timeout") {
				  /*alert( "获取评论数据量时，连接服务器超时。" )*/;
				} else {
				  /*console.debug( "ERROR: ", response )*/;
				}
			  }else{
				eval(handleFun+"(response)");
			  }
		   }		  
		} );		  
	}
	
}

//获取投票类别类
function VoteListClass(){
	
	this.group='';
	this.type='';
	this.fun='';
	this.postURL='http://app5.dayoo.com/news_mood/voteList.php';//提交地址
	this.limit='10';
	this.date='';
	
	this.list=function(group,type,limit,fun){
		if(group==null || group=='')group=this.group;
		if(type==null || type=='')type=this.type;
		if(limit==null || limit=='')limit=this.limit;
		if(fun==null || fun=='')fun=this.fun;
		
		if( (group=='' && type=='') || fun==''){
			alert('plase set (url/type)&fun first');
			return;
		}

		
		var params= { "group": group, "type": type, "limit": limit, "date": this.date };
		this.dojoBind(params,fun);
	}
	
	this.dojoBind=function(params,handleFun){
		if(this.postURL==''){
			alert('plase set postURL first');
			return;
		}
		
		var kw = dojo.io.script.get( {
		  url: this.postURL,
		  callbackParamName: "callback",
		  content: params,
		  handleAs: "json",
		  preventCache: true,
		  handle: function(response, ioArgs){
			  if (response instanceof Error) {
				if (response.dojoType == "timeout") {
				  /*alert( "获取评论数据量时，连接服务器超时。" )*/;
				} else {
				  /*console.debug( "ERROR: ", response )*/;
				}
			  }else{
				eval(handleFun+"(response)");
			  }
		   }		  
		} );
		
	}
	
}