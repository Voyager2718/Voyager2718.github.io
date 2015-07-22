document.domain = "qq.com";
// 通过GET请求加载JS文件
;(function ($) { 
  $.getscript = function(src, func) {
    var script = document.createElement('script');
    script.async = "async";
    script.charset = "utf-8";
    script.src = src;
    if (func) {
      script.onload = func;
    }
    document.getElementsByTagName("head")[0].appendChild( script );
  }
})($)
/*  vote */

if(siteconfig.voteid && siteconfig.voteid!=0 && siteconfig.voteid!="0" ){
$("#vote").show();

var voteId=siteconfig.voteid; // 3826675 ,3830490

var postForm;
//var url="http://page.vote.qq.com/?id=3817551&tpl=json&result=yes";

var voteLiIndex=null;
var voteAttr= [];
var voteAttrIndex= [];
var voteAttrIndexHtml= [];
var voteAttrHtml=[];

//通过获得的投票id获取html数据
$.getscript ("http://page.vote.qq.com/?id="+voteId+"&tpl=json&result=yes",function(date){
    if(PrjtInfo.sbjinfo[0].f_Type=="0"){  //单选
        $(".voteHdOne").show();
        $(".voteHdMore").hide();
        voteFnOne();
    } else if(PrjtInfo.sbjinfo[0].f_Type=="1"){//多选
        $(".voteHdOne").hide();
        $(".voteHdMore").show();
        voteFnMore();
    }
});


// 单选 内容显示
function voteFnOne(){
    $(".voteHdOne .voteTitView").show();
    $(".voteHdOne .voteTitBtn").hide();
    var attr="<div class=\"votebdnum\">"+PrjtInfo.sbjinfo[0].allvotes+"\u4eba\u53c2\u4e0e\u6295\u7968</div><h2>"+PrjtInfo.sbjinfo[0].f_SbjTitle+"</h2><form id=\"voteContainer_0_form\" action=\"http://input.vote.qq.com/survey.php\"><ul class=\"voteUlSingle\">";
    $(PrjtInfo.sbjinfo[0].optinfo).each(function(index,obj){
            index=index+1;
            attr+="<li onclick=\"voteclick(this,"+index+","+PrjtInfo.f_PjtId+","+PrjtInfo.sbjinfo[0].f_SbjId+","+obj.f_OptId+")\"><div class=\"voteyixuan\"></div><span>0"+index+"</span>"+obj.f_OptTitle+"</li>";
    })
    attr+="</ul></form>"
    $("#vote .bd").eq(0).html(attr);
    postForm = $("#voteContainer_0_form")[0];
}


//单选 li 绑定的函数
// obj this ,voteindex 索引,votePjtId 投票id,voteSbjid ,voteOptid  
function voteclick(obj,voteindex,votePjtId,voteSbjid,voteOptid){
    voteLiIndex=voteindex;
    $(obj).addClass("on");
    //$(".voteTitView").hide();
    var vvId = document.createElement('input');
        vvId.type = 'hidden';
        vvId.name = 'PjtID';
        vvId.value = votePjtId;

    var vResult = document.createElement('input');
        vResult.type = 'hidden';
        vResult.name = 'result';
        vResult.value = '0';
    var vFmt = document.createElement('input');
        vFmt.type = 'hidden';
        vFmt.name = 'fmt';
        vFmt.value = 'js';
    var vSbj = document.createElement('input');
        vSbj.type = 'hidden';
        vSbj.name = 'sbj_' + voteSbjid + '[]';
        vSbj.value = voteOptid;
    var vWb = document.createElement('input');
        vWb.type = 'hidden';
        vWb.name = 'wb';
        vWb.value = '1';
    postForm.appendChild(vvId);
    postForm.appendChild(vResult);
    postForm.appendChild(vFmt);
    postForm.appendChild(vSbj);
    postForm.appendChild(vWb);

    postForm.target = 'Ansy_Post_iframe';
    postForm.action = 'http://input.vote.qq.com/survey.php';
    postForm.method = 'post';
    
    postForm.submit();
}



//查看投票函数
function voteView(obj,voteindex,votePjtId,voteSbjid,voteOptid){
    votePjtId=voteId;
    $(obj).hide();
    $(".voteTitBtn").show();
    voteDateShow(obj,voteindex,votePjtId,voteSbjid,voteOptid);
}




//拉取投票内容
function voteDateShow(obj,voteindex,votePjtId,voteSbjid,voteOptid){
    voteindex= voteindex || voteId;

    //请求投票后的新数据
    $.getscript ("http://page.vote.qq.com/?id="+voteId+"&tpl=json&result=yes&"+Math.random()*100+"",function(date){
        var attr="<div class=\"votebdnum\">"+PrjtInfo.sbjinfo[0].allvotes+"\u4eba\u53c2\u4e0e\u6295\u7968</div><h2>"+PrjtInfo.sbjinfo[0].f_SbjTitle+"</h2><ul class=\"voteUlSingleOn\">";
        $(PrjtInfo.sbjinfo[0].optinfo).each(function(index,obj){
            index=index+1;
            if(index==voteindex&& typeof(voteindex)=="number"){
                attr+="<li class=\"on\"><div class=\"voteR\">\u5df2\u6295\u7968</div><div class=\"voteL\"><div class=\"voteLTxt\"><span>0"+index+"</span>"+obj.f_OptTitle+"</div><div class=\"voteXian\"><div class=\"voteLine voteLine"+index+"\"  style=\"width:"+obj.percent+"%\"></div><div class=\"voteNum\">"+obj.percent+"%</div></div></div></li>";    
            }else{
                attr+="<li><div class=\"voteR\">\u5df2\u6295\u7968</div><div class=\"voteL\"><div class=\"voteLTxt\"><span>0"+index+"</span>"+obj.f_OptTitle+"</div><div class=\"voteXian\"><div class=\"voteLine voteLine"+index+"\"  style=\"width:"+obj.percent+"%\"></div><div class=\"voteNum\">"+obj.percent+"%</div></div></div></li>";
            }
        })
        // 写入数据
        attr+="</ul>";
        $("#vote .bd").eq(0).html(attr);
        if(voteAttrIndexHtml.length>0){
            $(".voteUlSingleOn li").each(function(index,obj){
                for(var i=0;i<voteAttrIndexHtml.length;i++){
                    if(voteAttrIndexHtml[i]==index){
                        $(obj).addClass("on");
                    }
                }
            })    
            
        }
        
    });
}

// 多选 内容显示
function voteFnMore(){
    $(".voteHdMore .voteTitView").eq(0).show();
    $(".voteHdMore .voteTitBtn").eq(0).hide();
    var attr="<div class=\"votebdnum\">"+PrjtInfo.sbjinfo[0].allvotes+"\u4eba\u53c2\u4e0e\u6295\u7968</div><h2>"+PrjtInfo.sbjinfo[0].f_SbjTitle+"</h2><form id=\"voteContainer_0_form\" action=\"http://input.vote.qq.com/survey.php\"><ul class=\"voteUlMore\">";
    $(PrjtInfo.sbjinfo[0].optinfo).each(function(index,obj){
            index=index+1;
            attr+="<li onclick=\"voteMoreclick(this,"+index+","+PrjtInfo.f_PjtId+","+PrjtInfo.sbjinfo[0].f_SbjId+","+obj.f_OptId+")\"><div class=\"voteyixuan\"></div><span>0"+index+"</span>"+obj.f_OptTitle+"</li>";
    })
    attr+="</ul><div class=\"voteBtn\" onclick=\"voteMoreSubmit("+PrjtInfo.f_PjtId+","+PrjtInfo.sbjinfo[0].f_SbjId+")\">\u63d0\u4ea4</div></form>"
    $("#vote .bd").eq(0).html(attr);
    postForm = $("#voteContainer_0_form")[0];
}

    



//多选 li 绑定的函数
function voteMoreclick(obj,voteindex,votePjtId,voteSbjid,voteOptid){
    if($(obj)[0].className == ""){
        $(obj)[0].className="on";
        voteAttr[voteindex-1]=voteOptid;
        voteAttrIndex[voteindex-1]=voteindex-1;
        //voteAttr.splice(voteindex-1,voteindex-1,voteOptid)
        
    }else if($(obj)[0].className == "on"){
        $(obj)[0].className="";
        voteAttr[voteindex-1]="";
        voteAttrIndex[voteindex-1]="";
        //voteAttr.splice(voteindex-1,voteindex-1,"2")
    };

}



//多选项提交函数
function voteMoreSubmit(votePjtId,voteSbjid){
    for(var i=0;i<voteAttr.length;i++){
        if(voteAttr[i]!= undefined && voteAttr[i]!= "" && typeof(voteAttr[i])!= "string"){
            voteAttrHtml.push(voteAttr[i]);
            voteAttrIndexHtml.push(voteAttrIndex[i]);
        }
    }
    var vvId = document.createElement('input');
        vvId.type = 'hidden';
        vvId.name = 'PjtID';
        vvId.value = votePjtId;

    var vResult = document.createElement('input');
        vResult.type = 'hidden';
        vResult.name = 'result';
        vResult.value = '0';
    var vFmt = document.createElement('input');
        vFmt.type = 'hidden';
        vFmt.name = 'fmt';
        vFmt.value = 'js';
    

    /*
    var vSbj = document.createElement('input');
    vSbj.type = 'hidden';
    vSbj.name = 'sbj_' + voteSbjid + '[]';
    vSbj.value = voteAttrHtml[0];
    */
    function createOptid(obj,voteOptid){
        
        var obj = document.createElement('input');
        obj.type = 'hidden';
        obj.name = 'sbj_' + voteSbjid + '[]';
        obj.value = voteOptid;
        postForm.appendChild(obj);
        
    }
    for(var i=0;i<voteAttrHtml.length;i++){
        createOptid("vSbj"+voteAttrHtml[i]+"",voteAttrHtml[i]);
            
    }
        
    var vWb = document.createElement('input');
        vWb.type = 'hidden';
        vWb.name = 'wb';
        vWb.value = '1';

        
    postForm.appendChild(vvId);
    postForm.appendChild(vResult);
    postForm.appendChild(vFmt);
    //postForm.appendChild(vSbj);
    postForm.appendChild(vWb);
    postForm.target = 'Ansy_Post_iframe';
    postForm.action = 'http://input.vote.qq.com/survey.php';
    postForm.method = 'post';
    postForm.submit();
    

}



//投票完成 执行函数
var AppPlatform = window['AppPlatform'] = {
    Survey: {
        Input: {
        callback: function (a, b) {
            try {
                window.frames["Ansy_Post"].location.replace("about:blank")
            } catch (e) { };
            document.getElementById("Ansy_Post").innerHTML = '<iframe id="Ansy_Post_iframe" name="Ansy_Post_iframe" src="about:blank" style="display:none"></iframe>';
            switch (a) {
                case '0':
                    //alert('感谢投票');
                    setTimeout(function(){
                        voteDateShow("",voteLiIndex);
                        $(".voteTitView").hide();
                        $(".voteTitBtn").hide();
                    },1000);
                    
                    var subId = b.split("-")[0], optid = b.split("-")[1].split(":")[0], count = b.split("-")[1].split(":")[1];
                    var show = document.getElementById("show_" + AppPlatform.bigid + "_" + AppPlatform.sid + "_" + AppPlatform.optid);
                    if (show) {
                        show.innerHTML = parseInt(count) + parseInt(show.innerHTML);
                    }
                    

                    break;
                case '3':
                    alert('\u5bf9\u4e0d\u8d77\uff0c\u8be5\u6295\u7968\u5c1a\u672a\u5f00\u59cb\uff0c\u8bf7\u7a0d\u4faf\u53c2\u4e0e');
                    break;
                case '4':
                    alert('\u5bf9\u4e0d\u8d77\uff0c\u8be5\u6295\u7968\u5df2\u7ed3\u675f');
                    break;
                case '5':
                    alert('\u5bf9\u4e0d\u8d77\uff0c\u8be5\u6295\u7968\u5c1a\u672a\u53d1\u5e03');
                    break;
                case '7':
                    alert('\u5bf9\u4e0d\u8d77\uff0c\u8bf7\u5b8c\u6210\u5fc5\u9009\u9898\u540e\u518d\u63d0\u4ea4');
                    break;
                case '11':
                    alert('\u5bf9\u4e0d\u8d77\uff0c\u60a8\u5df2\u53c2\u4e0e\u8fc7\u6b64\u6295\u7968\uff0c\u8bf7\u52ff\u91cd\u590d\u63d0\u4ea4');
                                    break;
                case '14':
                    alert('\u8bf7\u767b\u5f55\u53c2\u4e0e\u6295\u7968!');
                    window.location.hash = "TencentLogin_left_top";
                    // document.getElementById("Login_Box").style.display = "block";
                    // document.getElementById("Login_Frame").src = 'http://ui.ptlogin2.qq.com/cgi-bin/login?target=top&link_target=blank&f_url=loginerroralert&hide_title_bar=1&style=1&appid=5000501&s_url=http://lady.qq.com/vote20120323.htm';
                    return false;
                    break;
                default:
                    var subId = b.split("-")[0], optid = b.split("-")[1].split(":")[0], count = b.split("-")[1].split(":")[1];
                    var show = document.getElementById("show_" + AppPlatform.bigid + "_" + AppPlatform.sid + "_" + AppPlatform.optid);
                    if (show) {
                        show.innerHTML = parseInt(count) + parseInt(show.innerHTML);
                    }
                }

            }
        }
    }
};

}/*  |xGv00|3aa6d5382149b38a97f93e9d4a09178f */