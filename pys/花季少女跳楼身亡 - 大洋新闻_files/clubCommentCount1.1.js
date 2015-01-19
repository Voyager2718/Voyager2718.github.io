dojo.addOnLoad(function(){
	if(typeof(CC_Url)=="undefined" || CC_Url==null || CC_Url=='')	 CC_Url=window.location.toString();
	if(typeof(CC_Item)=="undefined" || CC_Item==null || CC_Item=='')	 CC_Item='CommentCount_Item';
	getCommentCount(CC_Url,CC_Item);
}
);

function getCommentCount(url,CCItem){		
		var postURL= "http://comment1.dayoo.com/comment/comment_json_count.dy";
		if(url==null || url==''){
			url=window.location.toString();
		}
		
		var handleFun=function(data){
			var items=document.getElementsByName(CCItem);
			for(var k=0;k<items.length;k++){
				try{items[k].innerHTML=data.commentCount;}catch(e){}
				try{items[k].innerText=data.commentCount;}catch(e){}
				try{items[k].textContent=data.commentCount;}catch(e){}
			}
		}

		var kw = dojo.io.script.get( {
		  url: postURL,
		  callbackParamName: "callback",
		  content: { url: dojo.trim(url) },
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
				handleFun( response );
			  }
		   }		  
		} );
}