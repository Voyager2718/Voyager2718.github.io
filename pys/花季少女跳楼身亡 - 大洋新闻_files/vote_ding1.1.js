var VC=new VoteClass();

dojo.addOnLoad(function(){

	if(typeof(VC_Url)=="undefined" || VC_Url==null || VC_Url=='')	VC.url=window.location.toString();
	else VC.url=VC_Url;

	if(typeof(VC_Group)=="undefined" || VC_Group==null || VC_Group=='') VC.group='vote_default';
	else VC.group=VC_Group;
	
	VC.sel_fun='handle_sel';
	VC.vote_sel_fun='handle_vote_sel';
	VC.vote_fun='handle_vote';
	VC.cookie_fun='cookie_fun';
	VC.checkCookie=true;
	if(Math.ceil(Math.random()*30)==1 && DingSetCookie(VC.url,60)==true){
		VC.checkCookie=false;
		VC.vote('vote_default');
		VC.checkCookie=true;
	}
	VC.sel();
});

function VC_Vote(itemName){
	if(VC.isVote()==false && document.getElementById(itemName)!=null){
		document.getElementById(itemName).innerHTML=parseInt(document.getElementById(itemName).innerHTML)+1;
	}
	VC.vote(itemName);
	hasVote();
}

//查找后处理
/*
	data 格式
	
	data.msg  返回的操作标识，当为“ok”时，表示成功。
	data.data 返回的数据，二维数组 
			   data.data[i][0] 为类型名称
			   data.data[i][1] 为投票值

*/
function handle_sel(data){
	
	if(data["msg"]!="ok")return;
	var result= data["data"];
	
	for(var i=0;i<result.length;i++){
		if(document.getElementById(result[i][0])!=null){
			result[i][1]=parseInt(result[i][1]);
			if(result[i][1]==0)continue;
			
			document.getElementById(result[i][0]).innerHTML=result[i][1];
		}
	}
	if(VC.isVote()==true){
		hasVote();
	}
}

//投票并查找处理
function handle_vote_sel(data){
	if(data["msg"]=="ok"){
		handle_sel(data);
	}
}

//投票后处理
function handle_vote(data){

}

//已经投票了
function hasVote(){
	var p=document.getElementById("vote_default").parentNode;
	p.onclick=function(){};
	p.style.cursor='text';
	p.getElementsByTagName("span")[1].innerHTML='<a href="http://digg.dayoo.com" target="_blank">进入掘客</a>';
}

//一定时间内不能重复投票
function cookie_fun(t){
	window.location='http://digg.dayoo.com';
	//alert('您已投票了，谢谢您的支持！');
}


function DingSetCookie(url,cookie_time){
	if(cookie_time==null)cookie_time=60;

	var url=dojo.trim(url.toString());
	var cookie_name=url.replace(/#/g,'')+"_Ding";
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
		return false;
	}
}