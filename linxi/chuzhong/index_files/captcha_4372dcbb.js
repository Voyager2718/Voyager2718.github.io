_.Module.define({path:"common/component/Captcha",requires:[],sub:{ERROR_MESSAGES:{38:"\u9a8c\u8bc1\u7801\u8f93\u5165\u8d85\u65f6\uff0c\u8bf7\u60a8\u91cd\u65b0\u8f93\u5165",37:"\u9a8c\u8bc1\u7801\u8f93\u5165\u5931\u6548\uff0c\u8bf7\u60a8\u91cd\u65b0\u8f93\u5165",40:"\u9a8c\u8bc1\u7801\u8f93\u5165\u9519\u8bef\uff0c\u8bf7\u60a8\u91cd\u65b0\u8f93\u5165"},DEFAULT_OPTIONS:{imgUrl:"/cgi-bin/genimg?",audioUrl:"/cgi-bin/genaudio?",checkUrl:"/f/commit/commonapi/checkVcode",vCodeUrl:"/f/commit/commonapi/getVcode",inputFocusClass:"c_captcha_focus",postType:"thread",isAnonymous:false,template:'<div class="tbui_captcha_component tbui_captcha_normal"><div class="tbui_captcha_tip j_captcha_tip"></div><div><span class="tbui_captcha_title">\u9a8c\u8bc1\u7801</span><span class="tbui_captcha_input_wrap"><input autocomplete="off" size="10" maxlength="4" class="j_captcha_input" ><span class="tbui_captcha_status j_captcha_status"></span></span><span class="j_captcha_content"><span class="tbui_captcha_img_wrap j_captcha_img_wrapper"></span><span class="tbui_captcha_buttons"><a class="j_captcha_img_change">\u770b\u4e0d\u6e05?</a>&nbsp;<a class="c_captcha_a_audio j_captcha_audio_switch" >\u6536\u542c\u9a8c\u8bc1\u7801</a></span><span><img class="j_captcha_audio_icon" src="http://tieba.baidu.com/tb/img/audio.gif" style="display:none;" /><span class="j_captcha_audio_wrapper"></span></span></span></div><div class="tbui_captcha_error j_captcha_err"></div><div class="tbui_captcha_info j_captcha_info"></div></div>',gridTemplate:'<div class="tbui_captcha_component tbui_captcha_grid"><div class="tbui_captcha_tip j_captcha_tip"></div><div class="tbui_captcha_grid_head clearfix"><div class="tbui_captcha_title">\u9a8c\u8bc1\u7801</div><div class="tbui_captcha_input_wrap"><div class="j_captcha_input tbui_captcha_grid_input"><div></div><div></div><div></div><div></div><div class="tbui_captcha_backspace j_captcha_backspace"></div></div><div class="tbui_captcha_status j_captcha_status"></div></div></div><div class="tbui_captcha_grid_content"><div><span class="tbui_captcha_img_wrap j_captcha_img_wrapper"></span><span class="tbui_captcha_buttons"><a class="j_captcha_img_change">\u770b\u4e0d\u6e05?</a></span></div><div class="tbui_captcha_error j_captcha_err"></div><div class="tbui_captcha_help j_captcha_help">\u70b9\u51fb\u6846\u5185\u6587\u5b57\u8f93\u5165\u4e0a\u56fe\u4e2d<span class="ui_text_emphasize">\u6c49\u5b57\u6216\u62fc\u97f3</span>\u5bf9\u5e94\u6c49\u5b57</div><div class="tbui_captcha_grid_buttons clearfix j_captcha_buttons"><a href="#" tabindex="0"><div class="tbui_captcha_btn_0"></div></a><a href="#" tabindex="0"><div class="tbui_captcha_btn_1"></div></a><a href="#" tabindex="0"><div class="tbui_captcha_btn_2"></div></a><a href="#" tabindex="0"><div class="tbui_captcha_btn_3"></div></a><a href="#" tabindex="0"><div class="tbui_captcha_btn_4"></div></a><a href="#" tabindex="0"><div class="tbui_captcha_btn_5"></div></a><a href="#" tabindex="0"><div class="tbui_captcha_btn_6"></div></a><a href="#" tabindex="0"><div class="tbui_captcha_btn_7"></div></a><a href="#" tabindex="0"><div class="tbui_captcha_btn_8"></div></a></div><div class="tbui_captcha_info j_captcha_info"></div></div></div>'},gridStyleSheetTpl:".tbui_captcha_grid_input div, .tbui_captcha_grid_content .tbui_captcha_img_wrap, .tbui_captcha_grid_buttons div {background: url('#{imgSrc}') -500px -500px no-repeat;}",gridPosition:{0:"-3px -41px",1:"-56px -41px",2:"-100px -41px",3:"-3px -90px",4:"-56px -90px",5:"-100px -90px",6:"-3px -138px",7:"-56px -138px",8:"-100px -138px"},gridKeyMap:{0:"00000000",1:"00010000",2:"00020000",3:"00000001",4:"00010001",5:"00020001",6:"00000002",7:"00010002",8:"00020002"},initial:function(c){if($.browser.msie&&$.browser.version==6){document.execCommand("BackgroundImageCache",false,true)}var b=this;this.options=c;this.options=$.extend({},this.DEFAULT_OPTIONS,c);this.$container=$(this.options.container);var a;if(c.vCodeType==4){a=$(this.options.gridTemplate)}else{a=$(this.options.template)}this.$input=a.find(".j_captcha_input");this.$tip=a.find(".j_captcha_tip");this.$error=a.find(".j_captcha_err");this.$status=a.find(".j_captcha_status");this.$imgWrapper=a.find(".j_captcha_img_wrapper");this.$imgChangeBtn=a.find(".j_captcha_img_change");this.$switchAudioBtn=a.find(".j_captcha_audio_switch");this.$info=a.find(".j_captcha_info");this.$imgChangeBtn.add(this.$imgWrapper).click(function(){b.reloadCaptchaImg();return false});if(c.vCodeType==4){this._initGridCaptcha(a)}else{this._initNormalCaptcha(a)}if(this.options.message){this.setTip(this.options.message)}this.updateCaptchaImg(this.options.vCode,this.options.vCodeType);if(this.options.exceptionalAccount){this.$tip.html('\u60a8\u5728\u5168\u5427\u53d1\u8d34\u65f6\u4f1a\u9047\u5230\u9a8c\u8bc1\u7801\uff0c<a target="_blank" href="http://tieba.baidu.com/pmc/main" class="ui_text_link">\u70b9\u51fb\u89e3\u9664</a>')}this.$container.append(a);this.$root=a},_initNormalCaptcha:function(a){var b=this;this.$audioIcon=a.find(".j_captcha_audio_icon");this.$audioWrapper=a.find(".j_captcha_audio_wrapper");this.$switchAudioBtn.click(function(){b.loadAudio();return false});this.$input.focus(function(){$(this).addClass(b.options.inputFocusClass)}).blur(function(){$(this).removeClass(b.options.inputFocusClass)}).keyup(function(c){if(c.which==13){b.trigger("captcha_submit")}else{if(b.vCodeType==1){if(/^[\u4e00-\u9fa5]+$/.test(this.value)&&this.value.length==4){b.checkCaptcha()}}else{if(this.value.length==4){b.checkCaptcha()}else{if(b.getStatus()){b.setStatus(false)}}}}})},_initGridCaptcha:function(a){var b=this;b.$help=a.find(".j_captcha_help");b.inputValue="";b.$inputGrid=b.$input.children();a.find(".j_captcha_backspace").click(function(){b.backspace()});a.find(".j_captcha_buttons").on("click","a",function(g){g.preventDefault();g.stopPropagation();var d=b.inputValue.length;if(d<4){var c=$(this);var f=c.index();b.$inputGrid.eq(d).css("background-position",b.gridPosition[f]);b.inputValue+=f;if(b.inputValue.length==4){b.checkCaptcha(function(e){if(e.anti_valve_err_no===0){setTimeout(function(){b.trigger("captcha_submit")},500)}else{if(b.vCodeType==4){b.reloadCaptchaImg()}}})}}});a.keydown(function(c){c.preventDefault();c.stopPropagation();if(c.which==8){b.backspace()}return false});a.keyup(function(c){c.preventDefault();c.stopPropagation();return false});a.keypress(function(c){c.preventDefault();c.stopPropagation();return false})},getVCode:function(){return this.vCode},getVCodeType:function(){return this.vCodeType},setVCodeType:function(a){this.vCodeType=a;if(a!=0){this.$switchAudioBtn.hide()}else{this.$switchAudioBtn.show()}},setStatus:function(a){this.isValid=a;if(a){this.$status.addClass("tbui_captcha_correct");this.setError("")}else{if(a===false){this.$status.removeClass("tbui_captcha_correct")}else{this.$status.removeClass("tbui_captcha_correct");this.setError("")}}},getStatus:function(){return this.isValid},setTip:function(a){this.$tip.text(a)},setError:function(a){if(this.vCodeType==4){if(a==""){this.$error.hide();this.$help.show()}else{this.$help.hide();this.$error.show()}}this.$error.text(a)},updateCaptchaImg:function(b,a){this.setStatus(undefined);if(a){this.setVCodeType(a)}this.vCode=b;if(this.vCodeType==4){this._updateGridCaptchaImg()}else{this._updateNormalCaptchaImg()}},_updateNormalCaptchaImg:function(){this.$input.val("").focus();var a=this.options.imgUrl+this.vCode+"&t="+Math.random();if(this.$img){this.$img.tbattr("src",a)}else{this.$img=$('<img src="'+a+'" />').appendTo(this.$imgWrapper)}},_updateGridCaptchaImg:function(){this.inputValue="";this.$inputGrid.each(function(){$(this).tbattr("style","")});var b=this.options.imgUrl+this.vCode+"&tag=pc&t="+Math.random();if(!this.captchaStyleSheet){this.captchaStyleSheet=$("<style type='text/css'></style>").appendTo("head")[0]}var a=$.tb.format(this.gridStyleSheetTpl,{imgSrc:b});if(this.captchaStyleSheet.styleSheet){this.captchaStyleSheet.styleSheet.cssText=a}else{this.captchaStyleSheet.innerHTML=a}},reloadCaptchaImg:function(b){b=b||{};var a=this;var c=this.options.paramsCallback?this.options.paramsCallback():{};$.extend(c,{lm:this.options.forumId,word:this.options.forumName,rs10:this.options.postType=="thread"?"1":"0",rs1:this.options.isAnonymous?"1":"0",t:Math.random()});if(this.vCodeType==4){c.tag=11}$.ajax({url:a.options.vCodeUrl,data:c,success:function(d){if(d.need_vcode){if((d.captcha_code_type==4&&a.vCodeType!=4)||(d.captcha_code_type!=4&&a.vCodeType==4)){a.trigger("captcha_type_change",d.captcha_vcode_str,d.captcha_code_type)}else{a.setTip(d.str_reason);a.setError(b.error||"");a.updateCaptchaImg(d.captcha_vcode_str,d.captcha_code_type)}}else{console.log("Captcha#reloadCaptchaImg: \u7406\u8bba\u4e0a\u4e0d\u5e94\u8be5\u770b\u5230\u8be5\u5206\u652f")}if(b.success){b.success.call(this)}},type:"post",dataType:"json"})},loadAudio:function(){this.$audioIcon.show();var a=this.options.audioUrl+this.vCode+"&t="+Math.random();if(!document.all){this.$audioWrapper.html('<embed src="'+a+'" name="MediaPlayer" type="video/x-ms-wmv" autostart="1" showcontrols="1" allowscan="1" playcount="1" enablecontextmenu="0" height="0" width="0"></object>')}else{this.$audioWrapper.html('<object height=0 width=0 classid=CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6><param name="AutoStart" value="1"><param NAME="url" value="'+a+'"><param name="PlayCount" value="1">')}this.$input.focus()},checkCaptcha:function(c){var a=this;var b={captcha_vcode_str:this.vCode,captcha_code_type:this.vCodeType,captcha_input_str:this.getInputValue(),fid:this.options.forumId};$.post(this.options.checkUrl,b,function(d){if(d.anti_valve_err_no===0){a.setStatus(true)}else{if(d.anti_valve_err_no===null||d.anti_valve_err_no===""){a.setStatus(undefined)}else{a.setStatus(false);a.setError(a.ERROR_MESSAGES[d.anti_valve_err_no]);if(d.anti_valve_err_no==37){a.reloadCaptchaImg({error:a.ERROR_MESSAGES[37]})}}}if(c){c(d)}},"json")},validate:function(){if(this.getInputValue().length==0){this.setError("\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801");this.focus();return false}else{return this.isValid||this.isValid===undefined}},backspace:function(){if(this.vCodeType==4){var a=this.inputValue.length;this.$inputGrid.eq(a-1).tbattr("style","");this.inputValue=this.inputValue.substring(0,a-1)}},getInputValue:function(){if(this.vCodeType==4){var c=this.inputValue.split("");var a=[];for(var d=0,b=c.length;d<b;d++){a.push(this.gridKeyMap[c[d]])}return a.join("")}else{return this.$input.val().replace(/\s/g,"")}},focus:function(){this.$input.focus()},clear:function(){this.$input.val("")},show:function(){this.$root.show()},hide:function(){this.$root.hide()}}});