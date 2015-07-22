
var House = (function(){
    var that = {};
    var shareArea = $('.share');
    var relatedArea = $('.related');
    var spreadArea = $('.spread');
    var ishouse = (function(){
        var REG = /^http:\/\/xw.qq.com\/+house\/(\d*).*/;
        var TestREG = /^http:\/\/testshipei.qq.com\/+house\/(\d*).*/;
        if(REG.test(location.href) || TestREG.test(location.href)){
            return true;
        }
        return false;
    })();

    var showDiscount = function(info){
        if(info['citysubname'] == 'all'){
            var content = '<a class="btn_more" href="http://m.db.house.qq.com/index.php?mod=searchhouse&act=searchlist&rf=newswap_newshouse#LXBhZ2VfMS1zbV8xLUNCXzkwJDkw">腾讯房产特价楼盘7折起</a>';
        }else{
            var url = info['url'].replace('#','&rf=newswap_newscity#');
            var content = '<a class="btn_more" href="'+url+'">'+ info['cityname'] + '共有'+info['count']+'个楼盘正在打折'+'</a>';
        }
        
        
        var html = '<div class="mod_more">'+content+'</div>';
        shareArea.after(html);
    }

    var showPromotion = function(content){ 
        if(relatedArea.length == 0){
             var html = '<div class="promot" style="border-top: 2px solid #4998e7;"><ul><li>'+content+'</li></ul></div>';
        }else{
            var html = '<div class="promot"><ul><li>'+content+'</li></ul></div>';
        }
        spreadArea.before(html);    
        
    }

    function anti_csrf_get_cookie(cName)
{
    if(document.cookie.length <= 0)
    {
        return false;
    }
        
    var cookies = document.cookie.split(';');
    for(var i=0; i < cookies.length;i++)
    {
        var cArr = cookies[i].split('=');
        cArr[0] = cArr[0].replace(/(^\s*)|(\s*$)/, "");
        if((2 == cArr.length) && (cArr[0] == cName))
        {
            return cArr[1];
        }
    }
    
    return false;
}

function get_anti_csrf_token()
{
    var cUin = anti_csrf_get_cookie('uin');
    var cSkey = anti_csrf_get_cookie('skey');
    
    var tokenStr = '';
    if((false != cUin) && (false != cSkey))
    {
        tokenStr = cUin + cSkey;
    }
    
    if("" == tokenStr)
    {
        var cLuin = anti_csrf_get_cookie('luin');
        var cLskey = anti_csrf_get_cookie('lskey');
        if((false != cLuin) && (false != cLskey))
        {
            tokenStr = cLuin + cLskey;
        }
    }
    
    if("" == tokenStr)
    {
        var cHuid = anti_csrf_get_cookie('h_uid');
        if(false != cHuid)
        {
            tokenStr = cHuid;
        }
        
    }
    
    if("" == tokenStr)
    {
        return "";
    }
    
    var hash = 5381;
    for(var i = 0, len = tokenStr.length;i < len; ++i)
    {
        hash = ((hash << 5)&0x7fffffff) + tokenStr.charAt(i).charCodeAt() + hash;
    }
    
    return hash & 0x7fffffff;
}
function getUin(){
    var uin = anti_csrf_get_cookie('uin');
    uin = ""  == uin ? anti_csrf_get_cookie('luin') : uin;
    uin = ""  == uin ? anti_csrf_get_cookie('h_uid') : uin;
    
    return uin;
    
}
function boss(action){
    var xw_house = $('.xw_house_promotion');
    var bossname = xw_house.attr('bossname');
    var bossaction = bossname + '_' + action;//view ,click

    var dsturl = encodeURIComponent(xw_house.attr('href'));
    var uin = getUin();
    var g_btrace_BOSS = new Image(1,1);
    g_btrace_BOSS.src = "http://btrace.qq.com/kvcollect?BossId=2944&Pwd=903828399&iQQ="+uin+"&sDomain=xw.qq.com&sSrc1=newswap&sUrl="+location.href+"&dSrc1="+bossaction+"&dSrc2="+dsturl+"&_dc=" + Math.random();
}
    that.init = function(){
         if(!ishouse){
             return;
         }

        var pat = /.qq.com\/house\/\d+\/([A-Za-z]+)/;
        var result = pat.exec(location.href);
        var cityname = 'HOS';
        if(result && result[1]){
            cityname = result[1];
        }

        $('head').append('<link rel="stylesheet" href="http://house.qq.com/css/mobile/news_promotion.css" type="text/css" />');
        var g_tk = get_anti_csrf_token();
        $.getJSON('http://openapi.house.qq.com/index.php?mod=newsapi&act=getdiscount&cityname='+cityname+'&g_tk='+g_tk+'&callback=?',function(result){

            if(result['retcode'] != 0){
                return;
            }
            showDiscount(result['data']['discountarea']);
            showPromotion(result['data']['promotionarea']);
            boss('view');
            $(".xw_house_promotion" ).click(function() {
              boss('click');
            });
        });


    }

    return that;
})();
House.init();/*  |xGv00|5d6d1ec5fd9f686aa954d81930f077a0 */