_.Module.define({path:"props/widget/MagicProps",requires:["props/widget/Residual","props/component/Guide"],sub:{initial:function(t){this.$wrap=t.wrap,this.dataObj=t.propsData,this.visible=!1,this.initOptions(),this.loadComponent(),this.buildProps()},initOptions:function(){this.propsOptions={1070001:{key:"worship",name:"魔拜",flashOptions:{width:320,height:390,marginLeft:0,marginTop:0}},1070002:{key:"egg",name:"魔蛋",flashOptions:{width:900,height:600,marginLeft:384,marginTop:70}}},this.mallurl="/tbmall/propslist?category=107",this.poolSize=5;var t=window.navigator.userAgent.match(/chrome/i);this.page=t?$(document.body):$(document.documentElement)},loadComponent:function(){this.residual=this.use("props/widget/Residual"),this.guide=this.use("props/component/Guide")},buildProps:function(){this.initPropsData(),this.propsList.length>0&&(this.visible=!0,this.initPropsUI(),this.bindPropsEvents())},initPropsData:function(){for(var t=this.dataObj.owner||{},i=null,a=null,s=[],e={},o=["1070001","1070002"],r=0;r<o.length;r++)a=o[r],i={id:a,count:t[a]&&t[a].left_num||0},$.extend(i,this.propsOptions[a]),s.push(i),e[a]=i;this.propsList=s,this.propsMap=e},initPropsUI:function(){for(var t=this,i=$('<ul class="tbui_aside_props_list clearfix" id="tbui_aside_props_list"></ul>'),a=new Array,s=null,e=0;e<t.propsList.length;e++)s=t.propsList[e],a.push('<li class="props_item props_item_'+s.id+'">'),s.count>0?a.push('<a class="j_props_btn props_item_btn" href="#" data-id="'+s.id+'"><img src="/tb/static-props/img/props/'+s.key+'.png"/></a>'):a.push('<a class="props_item_btn" target="_blank" href="'+t.mallurl+'" data-id="'+s.id+'"><img src="/tb/static-props/img/props/'+s.key+'.png"/><span class="props_buy_icon"></span></a>'),a.push('<p class="props_item_title">'),a.push("<span>"+s.name+"</span>"),s.count>0&&(a.push('<span class="props_item_sign">'+String.fromCharCode(215)+"</span>"),a.push('<span class="props_item_num">'+s.count+"</span>")),a.push("</p>"),a.push("</li>");i.html(a.join("")),i.hide().appendTo(t.$wrap),t.$propsList=i},bindPropsEvents:function(){var t=this;t.$wrap.delayhover({enterDelay:300,leaveDelay:700,mouseenter:function(){t.$propsList.fadeIn(),t.guide.initMagicGuide()},mouseleave:function(){t.$propsList.fadeOut()}}).children("a").click(function(t){t.preventDefault(),t.stopPropagation()}),t.$propsList.delegate(".j_props_btn","click",function(){var i=$(this).data("id"),a=t.propsMap[i];return t.propsObj=a,a.count>0&&("pb"==PageData.product?t.buildPostArea():"ihome"==PageData.product&&t.buildIhomeArea(),t.buildMask(),t.initFlashCallbacks()),!1})},buildIhomeArea:function(){var t={jdom:$("div.userinfo_wrap"),userId:this.dataObj.home_user_id,propsData:this.dataObj.home_user_props,propsType:0},i=$("#headinfo_wrap"),a=i.offset().left,s=i.offset().top,e=a+i.width(),o={marginLeft:a,marginRight:e,marginTop:s,marginBottom:$("body").height()-28};$.extend(t,o),this.limitArea=o,this.areaList=[t]},buildPostArea:function(){for(var t=$("#j_p_postlist"),i=t.find(".l_post"),a=null,s=null,e=[],o=t.offset().left,r=t.offset().top,p=o+t.width(),n=0;n<i.length;n++)a=$(i[n]),s=a.getData(),this.doPostItem(a,s,o,p,e);var l={marginLeft:o,marginRight:p,marginTop:r,marginBottom:r+t.height()};this.limitArea=l,this.areaList=e},doPostItem:function(t,i,a,s,e){var o=null,r=null,p=null,n=t.offset().top,l=n+t.height(),h={userId:i.author.user_id,postId:i.content.post_id,propsData:i.content.props,marginTop:n,marginBottom:l};r={},o=t.find(".d_author"),r.jdom=o,r.marginRight=a+130,r.marginLeft=a,$.extend(r,h),e.push(r),p={},o=t.find(".d_post_content_main"),p.jdom=o,p.marginRight=s,p.marginLeft=a+130,$.extend(p,h),e.push(p)},buildMask:function(){this.flashPool=[],this.currScrollTop=0,this.currAreaObj=null,this.initMask(),this.setMaskPosition(0,0,0,0),this.bindMaskEvents()},initMask:function(){var t=$('<div class="mask_layer mask_top"></div>'),i=$('<div class="mask_layer mask_right"></div>'),a=$('<div class="mask_layer mask_bottom"></div>'),s=$('<div class="mask_layer mask_left"></div>'),e=$('<div class="mask_layer light_area"></div>'),o=$('<div id="mask_wrap" class="mask_wrap mouse_'+this.propsObj.key+'"></div>');o.append(t).append(i).append(a).append(s).append(e).css({"z-index":$.getzIndex()}),$("body").append(o),this.$maskWrap=o,this.maskMap={topMask:t,rightMask:i,bottomMask:a,leftMask:s,lightArea:e}},setMaskPosition:function(t,i,a,s){var e=this.maskMap;e.topMask.css({height:i}),e.rightMask.css({left:t+a,top:i,width:$("body").width()-(t+a),height:s}),e.bottomMask.css({top:i+s,height:$("body").height()-(i+s)}),e.leftMask.css({top:i,width:t,height:s}),e.lightArea.css({left:t,top:i,width:a,height:s})},bindMaskEvents:function(){var t=this;$("body").bind("contextmenu",function(){return!1}),$(document).bind("keydown",function(i){if(27==i.which&&null!=t.$maskWrap){if(t.disabledMove)return!1;t.clear()}}),t.$maskWrap.mousedown(function(i){if(3==i.which){if(t.disabledMove)return!1;t.clear()}return!1});var i=50,a=$("body").width()-i,s=0;t.$maskWrap.mousemove(function(i){if(t.$bulletLayer||(t.$bulletLayer=t.buildBulletLayer(),t.$maskWrap.append(t.$bulletLayer)),s=i.pageX,s>a&&(s=a),t.$bulletLayer.css({left:s,top:i.pageY}),t.disabledMove)return!1;var e=null,o=t.limitArea;if(t.isInArea=i.pageX>=o.marginLeft&&i.pageX<=o.marginRight&&i.pageY>=o.marginTop&&i.pageY<=o.marginBottom?!0:!1,t.isInArea)for(var r=0;r<t.areaList.length;r++)e=t.areaList[r],i.pageX>=e.marginLeft&&i.pageX<=e.marginRight&&i.pageY>=e.marginTop&&i.pageY<=e.marginBottom&&(t.setMaskPosition(e.marginLeft,e.marginTop,e.marginRight-e.marginLeft,e.marginBottom-e.marginTop),e.propsType=r%2,t.areaObj=e);else t.setMaskPosition(0,0,0,0)})},buildBulletLayer:function(){var t=this,i=$('<div class="bullet_layer"><span class="bullet_layer_tip">右键取消</span></div>');return i.click(function(){t.isInArea?t.propsObj.count>0?t.flashPool.length<=t.poolSize&&(t.updatePosition(),t.post()):t.showTomallDialog():t.clear()}),i},clear:function(){this.clearPool(),this.$maskWrap.remove(),this.$maskWrap=null,this.$bulletLayer=null,setTimeout(function(){$("body").unbind("contextmenu")},300)},post:function(){var t=this,i="/tbmall/post/useAppraiseProps",a={props_id:t.propsObj.id,target_user_id:t.areaObj.userId||"",type:t.areaObj.propsType,post_id:t.areaObj.postId||"",tbs:PageData.tbs};$.tb.post(i,a,function(i){i&&0==i.no&&t.updatePage()})},updatePage:function(){var t=this.propsObj.id,i=".props_item_"+t;this.updatePropsBtnNum(t,i),("ihome"==PageData.product||"1"==this.areaObj.propsType)&&this.updatePostAreaNum(t,i)},updatePropsBtnNum:function(t,i){var a=$("#tbui_aside_props_list "+i),s=this.propsObj.count-1;s=s>0?s:0,this.propsObj.count=s,s>0?a.find(".props_item_num").text(s):(a.find(".props_item_btn").removeClass("j_props_btn").tbattr("target","_blank").tbattr("href",this.mallurl).append('<span class="props_buy_icon"></span>'),a.find(".props_item_sign").remove(),a.find(".props_item_num").remove())},updatePostAreaNum:function(t,i){var a=this.areaObj.propsData||{};a[t]||(this.areaObj.propsData={},this.areaObj.propsData[t]={num:0});var s=this.areaObj.propsData[t].num+1;s=s>0?s:0,this.areaObj.propsData[t].num=s;var e=this.areaObj.jdom.find("ul.props_appraise_wrap"),o=e.find(i);o[0]?o.find(".props_item_num").text(s):(htmlArr=[],htmlArr.push('<li class="props_item props_item_split"><span class="userinfo_split"></span></li>'),htmlArr.push('<li class="props_item props_item_'+t+'">'),htmlArr.push('<a href="#" data-postid="'+(this.areaObj.postId||"")+'" data-id="'+t+'" class="props_item_icon"></a>'),htmlArr.push('<span class="props_item_plus">'+String.fromCharCode(215)+"</span>"),htmlArr.push('<span class="props_item_num">'+s+"</span></li>"),"1070001"==t?e.prepend($(htmlArr.join(""))):"1070002"==t&&e.append($(htmlArr.join(""))))},updatePosition:function(){var t=this,i=this.propsOptions[this.propsObj.id].flashOptions,a=($(window).height()-i.height)/2;a=150>a?150:a;var s=this.areaObj.jdom.offset().top-a;this.disabledMove=!0;var e=$(window).scrollTop();0==e||e!=this.currScrollTop||this.currAreaObj&&this.currAreaObj.marginTop!=this.areaObj.marginTop?(this.currAreaObj=this.areaObj,this.currScrollTop=e,t.page.animate({scrollTop:s},300,"swing",function(){t.buildFlash(s)})):t.buildFlash(s)},buildFlash:function(t){var i=this,a=0,s=0,e=$('<div class="props_flash_wrap"></div>'),o=this.propsOptions[this.propsObj.id].flashOptions,r=($(window).width()-o.width)/2,p=t+o.marginTop;r=r>0?r:0,p=p>0?p:0,"0"==i.areaObj.propsType&&"1070002"==i.propsObj.id&&("ihome"==PageData.product?(a=100,s=-15):(a=60,s=-20),r=r-(r+o.marginLeft-i.areaObj.jdom.offset().left)+a,p+=s),e.css({width:o.width,height:o.height,left:r,top:p,"z-index":$.getzIndex()});{var n="/tb/static-props/swf/"+this.propsObj.key+".swf?t=140107";new $.swf(n,{container:e,width:o.width,height:o.height,params:{wmode:"transparent"}})}i.flashPool.push(e),i.$maskWrap.append(e),i.topzIndex=$.getzIndex(),i.$bulletLayer.css({"z-index":i.topzIndex})},buildPlusOne:function(){var t=this,i="plusone_"+this.propsObj.key;$.browser.msie&&6==$.browser.version&&(i+="_png8"),i="/tb/static-props/img/"+i+".png";var a=$('<div class="props_plusone"><img src="'+i+'"/></div>'),s=0,e=0;"ihome"==PageData.product?(s=t.areaObj.marginLeft+70,e=t.areaObj.marginTop+300):(s=t.areaObj.marginLeft+(t.areaObj.marginRight-t.areaObj.marginLeft)/2-18,e=t.areaObj.marginTop+100),a.css({left:s,top:e,"z-index":t.topzIndex+1}),t.$maskWrap.append(a),a.animate({top:"-=100px",opacity:.8},800,"swing",function(){a.remove()})},clearPool:function(){for(var t=this,i=t.flashPool,a=null,s=0;s<i.length;s++)a=i.shift(),a.remove();t.disabledMove=!1},initFlashCallbacks:function(){var t=this,i={},a=null;i.finishPlay=function(){if(t.flashPool.length>0){t.buildPlusOne();var i=t.flashPool.shift();i.remove(),t.flashPool.length<=0&&(t.disabledMove=!1,"0"==t.areaObj.propsType&&("ihome"==PageData.product?a=t.areaObj.jdom.find(".userinfo_left"):"pb"==PageData.product&&(a=t.areaObj.jdom.find(".icon_relative")),t.residual.showUI({wrap:a,key:t.propsObj.key})))}},window.MagicProps=i},showTomallDialog:function(){var t=this,i=new $.dialog({title:"提示",html:'<div class="props_buy_dialog"><p class="buy_dialog_content">你目前没有可用的道具了，快去商城购买吧</p><a class="buy_dialog_link" target="_blank" href="'+t.mallurl+'">去购买>></a><div>',width:400,height:80});i.element.find(".buy_dialog_link").on("click",function(){t.clear(),setTimeout(function(){t.showBuyDialog(t.mallurl)},200)})},showBuyDialog:function(t){var i='<p class="buy_txt">道具购买成功后即可使用！</p><div class="buy_dialog_btns"><a href="#" class="ui_btn ui_btn_m btn_success"><span><em>购买成功</em></span></a><a href="#{href}" target="_blank"  class="ui_btn ui_btn_sub_m btn_failure"><span><em>购买失败，重新购买</em></span></a></div>',a=new $.dialog({title:"提示",html:$.tb.format(i,{href:$.tb.unescapeHTML(t)}),width:400,height:80});a.bind("onclose",function(){$.tb.location.reload()}),a.element.find(".btn_success").on("click",function(t){t.preventDefault(),$.tb.location.reload()})}}});