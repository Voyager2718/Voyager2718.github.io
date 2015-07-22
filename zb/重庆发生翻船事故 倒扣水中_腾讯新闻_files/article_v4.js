/**
 * By jasonshan@tencent.com
 * date 2013.9.27
 * v  1.0
 */
if (navigator.userAgent.toLowerCase().match(/qqnews/i) == "qqnews"){
    $(".spread").hide();
    $(".tgbox").hide();
    $(".footnav").hide();
    $(".footer").hide();
    $(".gochannels").hide();
    $(".share").hide();
}
// var _olaURL -= window.location.href.split("/")[4];
var pgv_site = window.location.href.split("/")[3];
if (pgv_site == "digi_tech") {
    pgv_site = "digi"
};
if (pgv_site.indexOf('house') >= 0) {
    pgv_site = 'house'
};
if (pgv_site == "shijiebei" || pgv_site == "2014") {
    $(".header").addClass('worldcup');
    $(".header .logo a").attr("href","http://xw.qq.com/m/shijiebei")
    $('.global').addClass("worldcup_global")
};
var _ie8 = (function() {
    var rv = -1; // Return value assumes failure.
    if (navigator.appName == 'Microsoft Internet Explorer') {
        var ua = navigator.userAgent;
        var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat(RegExp.$1);
        // console.log(rv)
    }
    return rv != -1 && rv < 10;
})();


var Jsonp = {
    loadScript: function(url) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        if (script.readyState) {
            script.onreadystatechange = function() {
                if (this.readyState == "loaded" || this.readyState == "complete") {
                    this.onreadystatechange = null;
                    document.body.removeChild(this);
                }
            };
        } else {
            script.onload = function() {
                document.body.removeChild(this);
            };
        }
        script.setAttribute('src', url);
        document.body.appendChild(script);
    },
    encodeParameters: function(arg, parameters) {
        var paras = [];
        for (parameter in parameters) {
            paras.push(escape(parameter) + "=" + escape(parameters[parameter]));
        }
        return paras.length > 0 ? (arg == -1 ? '?' : '&') + paras.join('&') : '';
    },
    request: function(url, param) {
        if (typeof url === 'string') var str = url.indexOf('?');
        this.loadScript(url + this.encodeParameters(str, param));
    }
};
;(function($) {
  $.getScript = function(src, func) {
    var script = document.createElement('script');
    script.async = "async";
    script.charset = "utf-8";
    script.src = src;
    if (func) {
      script.onload = func;
    }
    document.getElementsByTagName("head")[0].appendChild(script);
  }
})($)
$.getScript('http://mat1.gtimg.com/www/mobi/js/template.min.js');
/*login*/
// cookie操作
var cooKie = {
    set: function(e, t, n, r, i) {
      typeof n == "undefined" && (n = new Date((new Date).getTime() + 36e5)),
      document.cookie = e + "=" + escape(t) + (n ? "; expires=" + n.toGMTString() : "") + (r ? "; path=" + r : "; path=/") + (i ? ";domain=" + i : "")
    },
    get: function(e) {
      var t = document.cookie.match(new RegExp("(^| )" + e + "=([^;]*)(;|$)"));
      return t != null ? unescape(t[2]) : null
    },
    clear: function(e, t, n) {
      this.get(e) && (document.cookie = e + "=" + (t ? "; path=" + t : "; path=/") + (n ? "; domain=" + n : "") + ";expires=Fri, 02-Jan-1970 00:00:00 GMT")
    }
};
var get_user_info = function(){
    uin = Number(cooKie.get("uin").substring(1));
    skey = cooKie.get("skey");
    try {
        $.getScript("http://qfwd.qq.com/?uin=" + uin + "&skey=" + skey + "&func=loginAll&refresh=0&ran=" + Math.random(),function(){

        })
    } catch (e) {
        return true;
    };
}
var loginAll = function(obj) {
    if (obj.result == 0) {
        var _nick = "";
        if (obj.nick.length > 8) {
            _nick = obj.nick.substring(0, 7) + "..."
        }else{
            _nick = obj.nick
        };
        $(".foot_user strong").text(_nick);
        $(".foot_logout").show();
        $(".foot_login").hide();
    };
}
var get_sky = function(){
    if (cooKie.get("skey")/* || cooKie.get("lskey")*/) {
        return true;
    }else{
        return false;
    };
};
var Passport ={
    login : function(){
            var theurl = window.location.href;
            window.location.href = "http://ui.ptlogin2.qq.com/cgi-bin/login?appid=636026402&hln_css=http://mat1.gtimg.com/www/webapp/images/shipei_logo.png&style=8&s_url="+theurl+"&low_login=0&pt_no_onekey=0";
            /*$(".global").hide();
            loginSrc ={
                src:'http://ui.ptlogin2.qq.com/cgi-bin/login?appid=636026402&hln_css=http://mat1.gtimg.com/www/webapp/images/shipei_logo.png&style=8&s_url=http://xw.qq.com/iphone/m/login/loginSuccess.htm&low_login=0&hln_u_tips=%E8%AF%B7%E8%BE%93%E5%85%A5%E6%82%A8%E7%9A%84QQ%E5%8F%B7%E7%A0%81'
            }
            var tpl = template.render("loginTpl", loginSrc);
            $('body').append(tpl)

            $("#login").show();
            $("#goclosed").click(function(){
                var t = $(this);
                setTimeout(function() {
                    $("#login").hide();
                    $(".global").show();
                }, 500);
            });*/
    },
    logout: function(){
        cooKie.clear("skey", '/', "qq.com");
        $(".foot_logout").hide();
        $(".foot_user strong").text("");
        $(".foot_login").show();
    },
    loginSuccess: function(){
        $(".global").show();
        $("#login").remove();
        get_user_info();
    }
}
$(".foot_logout").on("click",function(){
    Passport.logout();
})
$(".foot_login").on("click",function(){
    Passport.login();
})
// 判断是否登录
if (get_sky()) {
    get_user_info();
}else{
    $(".foot_login").show();
    $(".foot_logout").hide();
};

// lazyload 延迟加载图片
;(function($) {
  $.fn.lazyload = function(threshold, callback) {

    var $w = $(window),
        th = threshold || 0,
        attrib = "data-src",
        images = this,
        loaded;

    this.one("lazyload", function() {
      var source = this.getAttribute(attrib);
      source = source || this.getAttribute("data-src");
      if (source) {
        this.setAttribute("src", source);
        if (typeof callback === "function") callback.call(this);
      }
    });

    function lazyload() {
      var inview = images.filter(function() {
        var $e = $(this);
        // if ($e.is(":hidden")) return;
        var wt = $w.scrollTop(),
            wb = wt + $w.height(),
            et = $e.offset().top,
            eb = et + $e.height();

        return eb >= wt - th && et <= wb + th;
      });

      loaded = inview.trigger("lazyload");
      images = images.not(loaded);
    }

    $w.scroll(lazyload);
    $w.resize(lazyload);
    lazyload();
    return this;
  };
})(window.jQuery || window.Zepto);
/*青奥会隐藏项*/
var qah_href = window.location.href;
var pindao_Name = qah_href.split('/')[4];
if(pindao_Name == 'nanjing2014')
{
    $('.gochannels').hide();
    $('.spread').hide();
    $('.footnav').hide();
    $('.footer .smlweb').hide();
}

// 文章过长分页处理
var pagination = function(){
    var contentelems  = $(".split");
    var contentlength = contentelems.length;
    var splitlength   = 30;
    var splitpage     = Math.ceil(contentlength / splitlength);
    var pagelength    = Math.floor(contentlength / splitpage);
    var hidepage      = [];
    if (splitpage != 1 && pagelength) {
        $.each(contentelems, function(i, n) {
            if (i > pagelength) {
                hidepage.push($(n).hide());
            }
        });
        $(".primary .more").show().on("click", function() {
            var i = 0,
                self;
            do {
                self = hidepage.shift();
                if (self) {
                    self.show();
                }
                if (!hidepage.length) {
                    $(".primary .more").hide();
                    return false;
                }
                i++;
            } while (i < pagelength)
        });
    };
};

// 获取UA以及跳转处理
var browser = {
    getUA:function(callback){
        var res = this.matchUA(this.data, navigator.userAgent || navigator.appVersion || navigator.vendor);
            if(callback){
                callback.call(window,res);
            }
            return res;
    },
    getname: function(){
          return navigator.appName;
    },
    getversion: function(){
      return navigator.appVersion;
    },
    matchUA: function(regex, ua){
      var _this = this,
          _result = [];
      $.each(regex,function(i,n){
        var reg = n.replace('/', '\/');
        reg = new RegExp(reg,"gi");
        (function(r,i){
          if(ua.match(reg)){
            _result.push(i);
          }
        })(reg,i);
      });
      return Boolean(_result.length);
    },
    data: {
      'iPhone': '(iPhone.*Mobile|iPod|iTunes)',
      'BlackBerry': 'BlackBerry|rim[0-9]+|PlayBook|BB10',
      'HTC': 'HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6425|001HT|Inspire 4G',
      'Nexus': 'Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile',
      'Dell': 'Dell.*Streak|Dell.*Aero|Dell.*Venue|DELL.*Venue Pro|Dell Flash|Dell Smoke|Dell Mini 3iX|XCD28|XCD35',
      'Motorola': 'Motorola|\bDroid\b.*Build|DROIDX|Android.*Xoom',
      'Samsung': 'Samsung|BGT-|GT-|SCH-|SGH-|SHW-|SPH-',
      'Sony': 'sony|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i',
      'Asus': 'Asus.*Galaxy',
      'Palm': 'PalmSource|Palm',
      'Pantech': 'PANTECH',
      //'Micro': "MicroMessenger",  // todo: 针对微信的扩展，在此处识别
      'Ucweb': "JUC|IU|UCWEB", // todo: 极速模式使用JUC，另外在使用极速模式的时候服务器报500错误，待检查
      'QBrowse': "MQQBrowser",
      'GenericPhone': 'MB200C|MI-ONE',
      'MX':'M.*Build',
      'HUAWEI':'HW-HUAWEI_C8650'
    },
    jump: function(){
        this.getUA(function(res) {
            //
            if (!res) {
                // console.log(res);
                var _href = window.location.href;
                if (_href.indexOf("/a/") < 0) {
                    _href = _href.replace("/c/", "/a/");
                    window.location.href = _href;
                }else{
                    window.location.href = _href;
                }
            }
        });
    }
};

// 看比赛下载跳转
var openapp = function (){
    var h = window.location.href;
    if (h.indexOf("isappinstalled=1") > -1) {
        $(".spread span").text("打开⌈看比赛⌋更多直播点播")
        $(".spread a").attr("href","qqsports://kbsqqsports");
    };
};

var tuiguang = function(){
//     $(".spread").after('<div class="tgbox"><a href="http://m.baidu.com/from=1005586m/s?word=小说热搜榜&tn=iphone">人丑就要多读书</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="http://m.baidu.com/from=1005586m/s?word=小说热搜榜&tn=iphone">史上最畅销小说榜
// </a></div>')
// 底层百度推广boss
$(".tgbox a").eq(0).click(function(){
   BossCode.updata("", "", "tuiguang_baidu", "", "", "", "", "", "", "", "", "", "", "", "", "", "");
    });
// 底层推广boss
$(".tgbox a").eq(1).click(function(){
   BossCode.updata("", "", "tuiguang_self", "", "", "", "", "", "", "", "", "", "", "", "",
        "", "");
    });
};
tuiguang();

// 频道获取
/*var channelname = function(){
    var path = window.location.pathname;
    var site = path.split("/")[2];

    Jsonp ={
        androidlink : "",
        iphonelink  : "",
        link        : "",
        text        : "",
        target      : "_blank"
    };

}*/

// 分享功能
var share = {
    url:window.location.href,
    twb:function(){
        // console.log("腾讯微博");
         window.location = "http://share.v.t.qq.com/index.php?c=share&a=index&url="+share.url+"&appkey=801378464&title="+document.title+"&pic&line1=";
    },
    qzone:function(){
        // console.log("腾讯空间");
         window.location = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+share.url+"&site=&title="+document.title+"&pics=";
    },
    swb:function(){
        // console.log("新浪微博");
        window.location = "http://weibo.cn/ext/share?rt="+document.title+"&ru="+share.url+"";
    },
    clickfn:function(){
        if (_ie8) {
            $(".sharet").click(function(){
                // alert("share")
                $(this).attr("href","http://share.v.t.qq.com/index.php?c=share&a=index&url="+share.url+"&appkey=801378464&title="+document.title+"&pic&line1=")
                // share.twb();
            });
            $(".shareqzone").click(function(){
                $(this).attr("href","http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+share.url+"&site=&title="+document.title+"&pics=")

                // share.qzone();
            });
            $(".sharewb").click(function(){
                $(this).attr("href","http://weibo.cn/ext/share?rt="+document.title+"&ru="+share.url+"")
                // share.swb();
            });
        }else{
            $(".sharet").click(function(){
                share.twb();
            });
            $(".shareqzone").click(function(){
                share.qzone();
            });
            $(".sharewb").click(function(){
                share.swb();
            });
        };
    }
};
// 主导航
$(".gochannels").click(function(){
    var t = $(".channels");
    t.toggleClass("channelstoggle");
});
$(".channels li").click(function(){
    $(this).siblings().removeClass("current");
    $(this).addClass("current");
});
$(".gotop").click(function(){
   window.scroll(0, 0);
   BossCode.updata("", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
        "", "gotop");
});
var cooKie = {
    set: function(e, t, n, r, i) {
      typeof n == "undefined" && (n = new Date((new Date).getTime() + 36e5)),
      document.cookie = e + "=" + escape(t) + (n ? "; expires=" + n.toGMTString() : "") + (r ? "; path=" + r : "; path=/") + (i ? ";domain=" + i : "")
    },
    get: function(e) {
      var t = document.cookie.match(new RegExp("(^| )" + e + "=([^;]*)(;|$)"));
      return t != null ? unescape(t[2]) : null
    },
    clear: function(e, t, n) {
      this.get(e) && (document.cookie = e + "=" + (t ? "; path=" + t : "; path=/") + (n ? "; domain=" + n : "") + ";expires=Fri, 02-Jan-1970 00:00:00 GMT")
    }
};
var _fontCookie = cooKie.get("fontsize");
if (_fontCookie) {
    // console.log(_fontCookie)
    var _this = $("#fontsize");
    var _t = $(".content");
    if (_fontCookie == "size_s") {
        _this.removeClass("size_l").addClass("size_s");
        _this.text("大字");
        _t.removeClass("fontlarge").addClass("fontsmall");
    }else{
        _this.removeClass("size_s").addClass("size_l");
        _this.text("小字");
        _t.removeClass("fontsmall").addClass("fontlarge");
    };
};
$("#fontsize").click(function(){
    var _this = $(this);
    var _t = $(".content");
    var _c = _this.attr("class");
    if (_c == "size_s") {
        _this.removeClass("size_s").addClass("size_l");
        _this.text("小字");
        _t.removeClass("fontsmall").addClass("fontlarge");
        cooKie.set("fontsize","size_l")
    }else{
        _this.removeClass("size_l").addClass("size_s");
        _this.text("大字");
        _t.removeClass("fontlarge").addClass("fontsmall");
        cooKie.set("fontsize","size_s")
    };
});
function isSupportFixed() {
    var userAgent = window.navigator.userAgent,
        ios = userAgent.match(/(iPad|iPhone|iPod)\s+OS\s([\d_\.]+)/),
        ios5below = ios && ios[2] && (parseInt(ios[2].replace(/_/g, '.'), 10) < 5),
        operaMini = /Opera Mini/i.test(userAgent),
        body = document.body,
        div, isFixed;

    div = document.createElement('div');
    div.style.cssText = 'display:none;position:fixed;z-index:100;';
    body.appendChild(div);
    isFixed = window.getComputedStyle(div).position != 'fixed';
    body.removeChild(div);
    div = null;
    return !!(isFixed || ios5below || operaMini);
}
// 图片放大
/*if (!/Windows Phone/i.test(navigator.userAgent)) {
    if (isSupportFixed) {
        (function() {
            $(".primary").delegate(".image img", "click", function() {

                var _timg = $(this).attr("src");
                $("#imgglobal img").attr("src", _timg);
                $("#imgglobal").addClass("imgglobalshow");
            });
            touch.on('#imgglobal img', 'touchstart', function(ev) {
                ev.originEvent.preventDefault();
                //ev.originEvent.stopPropagation();
            });
            var initialScale = 1;
            touch.on('#imgglobal img', 'pinch', {
                interval: 10
            }, function(ev) {
                var currentScale = ev.scale - 1;
                currentScale = initialScale + currentScale;
                if (ev.fingerStatus === 'end') {
                    initialScale += (ev.scale - 1);
                    initialScale = initialScale > 2.5 ? 2.5 : initialScale;
                }
                currentScale = currentScale > 2.5 ? 2.5 : currentScale;
                currentScale = currentScale < 1 ? 1 : currentScale;

                this.style.webkitTransform = 'scale(' + currentScale + ')';

                log('当前缩放比率：' + currentScale, this);
            });

            $("#imgglobal span").click(function() {

                $("#imgglobal").removeClass("imgglobalshow");
            });

        })();

    };
};*/

var boss = {
    gochannel: ["news", "finance", "ent", "sports", "mil", "digi", "lady", "auto", "games", "house", "astro"],
    appList: ["newapp", "finance", "qq", "weixin", "video", "weibo", "qzone", "more"],
    otherList: ["weibo", "qzone", "mail", "pengyou"],
    navchangeList: ["nav", "index", "news", "finance", "ent", "sports", "mil","tech", "digi","lady", "auto", "games", "house", "astro", "photo", "video", "dy","qzone","book","games","software"],
    nav2List: ["weibo", "qzone", "book", "games", "software"]
}
var speedAgSt = new Date();
var BossRef = new Image(1, 1),
    BossTJ1 = new Image(1, 1);
var BossCode = {
    RndNum: function(n) {
        var rnd = "";
        for (var i = 0; i < n; i++) {
            rnd += Math.floor(Math.random() * 10);
        }
        return rnd;
    },
    updata: function(url, refer, topnav, toplogo, indextoppl, share, yuedu, applist, plback, writepl, morepl, login, fabiaopl, indexplnum, zutu, zutuclose, tongji01) {
        BossTJ1.src = "http://btrace.qq.com/collect?sIp=&iQQ=" + trimUin(pgvGetCookieByName("o_cookie=")) + "&sBiz=MobileTencentShuJu&sOp=&iSta=&iTy=1723&iFlow=" + BossCode.RndNum(9) + "&url=" + encodeURIComponent(url) + "&refer=" + encodeURIComponent(refer) + "&topnav=" + encodeURIComponent(topnav) + "&toplogo=" + encodeURIComponent(toplogo) + "&indextoppl=" + encodeURIComponent(indextoppl) + "&share=" + encodeURIComponent(share) + "&yuedu=" + encodeURIComponent(yuedu) + "&applist=" + encodeURIComponent(applist) + "&plback=" + encodeURIComponent(plback) + "&writepl=" + encodeURIComponent(writepl) + "&morepl=" + encodeURIComponent(morepl) + "&login=" + encodeURIComponent(login) + "&fabiaopl=" + encodeURIComponent(fabiaopl) + "&indexplnum=" + encodeURIComponent(indexplnum) + "&zutu=" + encodeURIComponent(zutu) + "&zutuclose=" + encodeURIComponent(zutuclose) + "&tongji01=" + encodeURIComponent(tongji01) + "&tongji02=xx&tongji03=xx&tongji04=xx&tongji05=xx&tongji06=xx&tongji07=xx&tongji08=xx&tongji09=xx&tongji10=xx&tongji11=xx&tongji12=xx&tongji13=xx&tongji14=xx&tongji15=xx&tongji16=xx";
    }
};
upRefer ={
    ref : function(u, r) {
        var _u = trimUin(pgvGetCookieByName("o_cookie=")) || "";
        var _t = new Date().getTime();
        BossRef.src = 'http://btrace.qq.com/collect?sIp=&iQQ=' + _u + '&sBiz=shipei&sOp=&iSta=&iTy=1934&iFlow=' + _t + '&url=' + encodeURIComponent(u) + '&refer=' + encodeURIComponent(r);
    }
};
$(".spread").click(function() {
    BossCode.updata("", "", "", "", "", "", "", "newsapp", "", "", "", "", "", "", "", "", "");
});
$(".relatedlist li").each(function(i) {
    $(this).bind("click", function() {
        BossCode.updata("", "", "", "", "", "", 1, "", "", "", "", "", "", "", "", "", "");
    })
});
$(".gochannels").click(function() {
    BossCode.updata("", "", "nav", "", "", "", "", "", "", "", "", "", "", "", "", "", "");
});
$(".logo").bind("click", function() {
    BossCode.updata("", "", "", 1, "", "", "", "", "", "", "", "", "", "", "", "", "");
});
$(".commententry").bind("click", function() {
    BossCode.updata("", "", "", "", 1, "", "", "", "", "", "", "", "", "", "", "", "");
});
$(".channels li").each(function(i){
    $(this).bind("click",function(){
        BossCode.updata("", "", boss.navchangeList[i + 1], "", "", "", "", "", "", "", "", "", "", "", "", "", "");
    })
});
$(".footnav li").each(function(i){
    $(this).bind("click",function(){
        BossCode.updata("","","","",boss.navchangeList[i+1],"","","","");
    })
});

$(".contentbar .count").click(function(){
    BossCode.updata("", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
        "", "pinglun");
});
/*$(".contentbar .size_s").each(function(i){
    $(this).bind("click",function(){
        BossCode.updata("", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
        "", "dazi");
    })
});
$(".contentbar .size_l").each(function(i){
    $(this).bind("click",function(){
        BossCode.updata("", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
        "", "xiaozi");
    })
});*/
$(".comments .gochannel").click(function(){
    BossCode.updata("", "", "", "", "", "", "", "", "", "", "plmore", "", "", "", "",
        "", "");
});

$("#fontsize").click(function(){
    BossCode.updata("", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
        "", "font");
});

$(".repweb").click(function(){
    BossCode.updata("", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
        "", "fankui");
});
$(".pcs").click(function(){
    BossCode.updata("", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
        "", "pc");
});
$(".smlweb").click(function(){
    BossCode.updata("", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
        "", "jianban");
});
$(".foot_login").on("click",function(){
    BossCode.updata("", "", "", "mynews_bottom_login", "", "", "", "", "", "", "", "","","")
});
$(".foot_logout").on("click",function(){
    BossCode.updata("", "", "", "mynews_logout", "", "", "", "", "", "", "", "","","")
});
var boss_ref = function(){
    var h = window.location.href;
    var ref="";
    if (h.indexOf("?pgv_ref=") > -1) {
        ref = h.split("?pgv_ref=")[1];
        upRefer.ref(h,ref);
    };
};

/*var pcSite = function(){
    var url = window.location.pathname.split("/");
    var _site= "";
    var _time= url[3].substring(0,8);
    var _aid = url[3].substring(8);
    if (url[2].indexOf("_") > -1) {
        _site = url[2].split("_")[0];
    }else{
        _site = url[2];
    };
    window.location.href="http://"+_site+".qq.com/a/"+_time+"/"+_aid+".htm";
};
try{
    if(/Macintosh|Mac_PowerPC|Windows NT|Windows XP|Linux/i.test(navigator.userAgent)){
        pcSite();
    }
}catch(e){};*/

window.onload=function(){
    // if(document.referrer == 'http://testshipei.qq.com/m/shijiebei/'){ $('body').addClass("sjb");}

/*    if (/Windows Phone/i.test(navigator.userAgent)) {
        $(".commententry").hide();
        $(".spread").hide();
    };*/
try{
    if(/Macintosh|Mac_PowerPC|Windows NT|Windows XP/i.test(navigator.userAgent)){
        // console.log("pc")
        // pcSite();
    }else if (/Android|webOS|iPhone|Windows Phone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)) {
        // console.log("X Phone");
    }else{
       // console.log("Phone")
    //    browser.jump();
    }
}catch(e){};

    $.getScript("http://pingjs.qq.com/ping.js",function(){
        // var host = window.location.href;

        // console.log(_site)
        if (typeof pgvMain == "function") {
            // pvRefDomain=host;
            // if (window.location.href.indexOf("finance") > 0) {
            //     pvCurDomain = "finance.xw.qq.com";
            // };
            if(pgv_site == "shijiebei"){
                pgv_site = "2014"
            }
            pvCurDomain = pgv_site+".xw.qq.com";
            pgvMain();
        }
        BossCode.updata(window.location.href, document.referrer, "", "", "", "", "", "", "", "", "", "", "", "", "", "", siteconfig.cat);
        boss_ref();
    });

    $.getScript("http://tajs.qq.com/stats?sId=22253286",function(){});
    if (_ie8) {
        $(".share").hide();
    }else{
        share.clickfn();
    }

    var _channel = window.location.pathname.split("/")[2].replace(/[^a-z]/ig, "")
    if (_channel == "sports") {
        openapp()
    };
    $(".content img").lazyload();
    pagination();

    Auto.init();
    $.getScript("http://house.qq.com/js/mobile/news_house.js",function(){});
    //动态加载315建言的JS
    $.getScript('http://bj.jjj.qq.com/js/zt2/315gh/jianyan.js');
}
// add by aslinwang
// 2015.1.27
var Auto = (function(){
    var that = {};
    var id;
    var img = new Image(1,1);

    var qqcarUrl = (function(){
        if($.os.ios){
            return 'http://itunes.apple.com/cn/app/id935183922?mt=8';
        }
        else if($.os.android){
            return 'http://mct.auto.qq.com/index.php?mod=download&channelid=chuping';
        }
        else{
            return 'http://auto.qq.com/mobile.htm?come_ref=news_h5';
        }
    })();

    var isauto = (function(){
        var REG = /^http:\/\/xw.qq.com\/+auto\/(\d*).*/;
        if(REG.test(location.href)){
            id = location.href.match(REG);
            id = id[1];
            return true;
        }
        return false;
    })();

    window.getQQNewsSimpleHtmlContent = function(data){
        if(data.ret == 0 && data.extInfo && data.extInfo.commonKeyword){
            var cars = JSON.parse(data.extInfo.commonKeyword);
            addcar(cars);
        }
    }

    var addcar = (function(){
        var carHtml = '';
        var contentEl = $('.primary .content');

        function genhtml(selector){
            var html = [
                '<span', (selector ? ' data-pos="' + selector + '"' : '') ,' style="padding: 4px 9px 12px;display:inline-block;font-size: 1.125em;line-height: 28px;">',
                    '相关车型&nbsp;&nbsp;',
                    carHtml,
                '</span>'
            ].join('');

            return html;
        }

        return function(cars){
            if(cars.length == 0){
                return;
            }
            $.each(cars, function(idx, car){
                carHtml += [
                    '<a href="http://w.auto.qq.com/car_serial/', car.id ,'/index.shtml?comefrom=xw&sfrom=xw" style="color: #5170A6;border-bottom: 1px dotted #5170A6;margin-right:12px;">',
                        car.word,
                    '</a>'
                ].join('');
            });

            contentEl.prepend(genhtml('head'));
            if($(window).height() < contentEl.height()){
                contentEl.append(genhtml('foot'));
            }
        }
    })();

    function boss(sop){
        img.src = [
            'http://btrace.qq.com/kvcollect',
            '?sOp=', sop,
            '&BossId=2584',
            '&sBiz=autoAdapt',
            '&sUrl=', encodeURIComponent(location.href)
        ].join('');
    }

    function event(){
        $('.spread').click(function(){
            boss('downQQCar_xw');
        });

        $('.primary .content').on('click', 'span', function(e){
            if($(this).data('pos') == 'head'){
                boss('btnRelateCarHead_xw');
            }
            else if($(this).data('pos') == 'foot'){
                boss('btnRelateCarFoot_xw');
            }
        });
    }

    that.init = function(){
        if(!isauto){
            return;
        }

        $.getJSON('http://openapi.inews.qq.com/getQQNewsSimpleHtmlContent?callbck=?&otype=jsonp&id=AUT' + id + '00');

        $('.spread a').attr('href', qqcarUrl);
        $('.spread a span').html('下载⌈购车通⌋查看更多车型');

        event();
    }
    return that;
}());
/*  |xGv00|1c12136356b90586638624db9c05263c */