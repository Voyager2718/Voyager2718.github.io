_.Module.define({path:"common/widget/Icons/IconsBookGetIcon",requires:[],sub:{_dialog:null,initial:function(){},get:function(){return this._dialog},show:function(){this._dialog.show()},hide:function(){this._dialog.hide()},close:function(){this._dialog.close()},_init:function(c){var b={modal:true,showTitle:false,fixed:true,width:290,height:180};var a=this;b.html='<div class="icon_book_dialog_wrap">'+c+"</div>",this._dialog=new $.dialog(b);this._dialog.element.find(".icon_book_dialog_wrap .icon_book_msgbox_close").click(function(d){d.preventDefault();a._dialog.close()});this._dialog.element.find(".icon_book_dialog_wrap .icon_book_msgbox_close").hover(function(d){$(this).addClass("icon_book_msgbox_close_hover")},function(){$(this).removeClass("icon_book_msgbox_close_hover")})},getOneIcon:function(c){var a=this;if(!c){a._handleError();return}var b={ie:"utf-8"};b.tbs=PageData.tbs;b.icon_name=c;a._ajax&&a._ajax.abort();a._ajax=$.ajax({type:"post",url:"/icon/seticon",data:b,dataType:"json"}).success(function(d){if(d&&d.no===0){var e=d.data;if(!e.icon_info){a._handleError();return}a.showOneIcon(e.icon_info)}else{if(d&&d.no===2270028){}else{a._handleError()}}})},_handleError:function(){var a=this;var b=a._getErrorTpl();a._init(b);a.show();this._dialog.element.find(".icon_book_dialog_wrap .ui_btn").click(function(c){$.tb.location.reload()})},showOneIcon:function(c){var a=this;var b=a._getOneIconTpl(c);a._init(b);a.show()},_getOneIconTpl:function(l){if(!l){return}var j=0;var f=0;var k="http://tb1.bdstatic.com/tb/cms/com/icon/icon_sprite.png";var m=l.sprite[l.value].split(",");var h=50;var c=m[0];var g=m[1];j=(3-1)*h;f=g*h;var d="background: url("+k+"?stamp="+c+") no-repeat -"+f+"px -"+j+"px;";var b=PageUnit.load("icons_new_cfg")||{};var e=l.name+"_"+l.value;var a={styleBg:d,iconTitle:b[e][0]};var i=['<div class="icon_book_msgbox">','<div class="icon_book_msgbox_wrap">','<div class="icon_book_msgbox_body">','<div class="icon_msgbox_title">\u606d\u559c\u4f60\u83b7\u5f97\u4e86#{iconTitle}</div>','<div class="icon_msgbox_get_icon">','<div class="msg_icon_get_one" style="left:110px;background: #{styleBg}"></div>','<div class="msg_icon_get_two"></div>','<div class="msg_icon_get_three"></div>',"</div>",'<div class="icon_msgbox_action">','<a href="javascript:void(0)" class="ui_btn ui_btn_m">',"<span><em>\u5feb\u53bb\u770b\u770b\u6211\u7684\u56fe\u9274</em></span>","</a>","</div>","</div>",'<div class="icon_book_msgbox_close"></div>',"</div>","</div>"].join("");return $.tb.format(i,a)},showIconList:function(e,d){var a=this;var c={hide_btn:false,close_callback:function(){},close_time:0};c=$.extend(c,d);var b=a._getIconListTpl(e,c.hide_btn);a._init(b);a.show();if(c.close_time&&parseInt(c.close_time)>0){setTimeout(function(){a._dialog.close()},parseInt(c.close_time))}if(c.close_callback&&typeof c.close_callback==="function"){a._dialog.onclose(function(){c.close_callback()})}},_getIconListTpl:function(j,g){var e=this;if(!j&&!$.isArray(j)){return}var c=[];var f=[];var h=g?"":['<div class="icon_msgbox_action">','<a href="javascript:void(0)" class="ui_btn ui_btn_m">',"<span><em>\u5feb\u53bb\u770b\u770b\u6211\u7684\u56fe\u9274</em></span>","</a>","</div>"].join("");for(var b=0;b<j.length;b++){var a=e._getIconFormatInfo(j[b],j.length);c.push(a.iconTitle);f.push(a.iconTpl)}c=c.join(",");f=f.join("");var d=['<div class="icon_book_msgbox">','<div class="icon_book_msgbox_wrap">','<div class="icon_book_msgbox_body">','<div class="icon_msgbox_title">\u606d\u559c\u4f60\u83b7\u5f97\u4e86'+c+"</div>",'<div class="icon_msgbox_get_icon">',f,"</div>",h,"</div>",'<div class="icon_book_msgbox_close"></div>',"</div>","</div>"].join("");return d},_getIconFormatInfo:function(l,i){var j=0;var g=0;var k="http://tb1.bdstatic.com/tb/cms/com/icon/icon_sprite.png";var m=l.sprite[l.value].split(",");var h=50;var c=m[0];var f=m[1];j=(3-1)*h;g=f*h;var d="background: url("+k+"?stamp="+c+") no-repeat -"+g+"px -"+j+"px;";var b=PageUnit.load("icons_new_cfg")||{};var e=l.name+"_"+l.value;var a={iconTpl:'<div class="msg_icon_get msg_icon_get_'+parseInt(i)+'" style="left:110px;'+d+'"></div>',styleBg:d,iconTitle:b[e][0]};return a},_getErrorTpl:function(){var a=['<div class="icon_book_msgbox">','<div class="icon_book_msgbox_wrap">','<div class="icon_book_msgbox_body">','<div class="icon_msgbox_title">\u672a\u77e5\u9519\u8bef</div>','<div class="icon_msgbox_action">','<a href="javascript:void(0)" class="ui_btn ui_btn_m" style="height: 27px; border-radius: 3px;">',"<span><em>\u5237\u65b0</em></span>","</a>","</div>","</div>",'<div class="icon_book_msgbox_close"></div>',"</div>","</div>"].join("");return a}}});