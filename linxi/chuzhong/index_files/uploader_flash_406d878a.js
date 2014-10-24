_.Module.define({path:"common/widget/image_uploader_manager/uploader_flash",requires:[],sub:{initial:function(a){var b={container:null,width:200,height:50,isAutoUp:false,queueLen:10,maxParallel:2,maxSize:3*1024*1024,maxWidth:1000,maxHeight:1000,uploadUrl:"",getUploadParams:null};this._options=$.extend(b,a||{});this._token=this._makeToken();this._flashVars="";this._version="1_0_1_3";this._EVENTS=["onFileSelected","onStartUpload","onProgressListen","onComplete","onError"];this._reset()},_reset:function(){this._initFlashvars();this._generateCallBack();this._initUI()},_initFlashvars:function(){this._flashVars=["maxSize="+encodeURIComponent(this._options.maxSize),"maxWidth="+encodeURIComponent(this._options.maxWidth),"maxHeight="+encodeURIComponent(this._options.maxHeight),"isAutoUp="+encodeURIComponent(this._options.isAutoUp),"queueLen="+encodeURIComponent(this._options.queueLen),"maxParallel="+encodeURIComponent(this._options.maxParallel),"useWorker=false","uploadURL="+encodeURIComponent(this._options.uploadUrl),"get_upload_params="+(this._options.get_upload_params?encodeURIComponent(this._options.get_upload_params):"")].join("&")},_initUI:function(){var c=this._flashChecker();var a=c.version;var b;var f="flashUploader"+this._token;if(!c.hasFlash){this._flashError()}if(a[0]<11||a[1]<4){b="/tb/static-common/img/uploader/uploaderwithoutworker.swf?v="+this._version}else{b="/tb/static-common/img/uploader/uploader.swf?v="+this._version}var d='<object id="'+f+'" name="'+f+'" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="'+this._options.width+'" height="'+this._options.height+'"><param name="allowScriptAccess" value="always" /><param value="transparent" name="wmode"><param name="flashvars" value="'+this._flashVars+'" /><param name="allowFullScreen" value="false" /><param name="movie" value="'+b+'" /></object>';var e='<object id="'+f+'" type="application/x-shockwave-flash" data="'+b+'" width="'+this._options.width+'" height="'+this._options.height+'"><param name="allowScriptAccess" value="always" /><param value="transparent" name="wmode"><param name="flashvars" value="'+this._flashVars+'" /></object>';if(!this._options.container){this._options.container=$("<div>").appendTo(document.body).css({position:"absolute",width:"1px",height:"1px",overflow:"hidden",left:1,bottom:1})}if(navigator.appName.indexOf("Microsoft")!=-1){this._options.container.html(d)}else{this._options.container.html(e)}this.flash=document[f]||window[f]},_generateCallBack:function(){var b=this;for(var c=0;c<this._EVENTS.length;c++){var a=this._EVENTS[c],d=a+this._token;window[d]=(function(e){return function(g){var f=Array.prototype.slice.call(arguments,0);f.unshift(e);b.trigger.apply(b,f)}})(a);this._flashVars+="&"+this._decodeCamel(a)+"="+d}},_decodeCamel:function(a){return a.replace(/([A-Z])/g,function(c,b){return"_"+b.toLowerCase()})},start:function(){this.flash.startUpload()},stop:function(){this.flash.pauseUpload()},deleteFile:function(a){this.flash.deleteFile(a)},clearList:function(){this.flash.clearList()},reUploadError:function(a){this.flash.resetErrorStatus(a)},_flashChecker:function(){var hasFlash=false;var flashVersion;var isIE=
/*@cc_on!@*/
0;var swf;if(isIE){swf=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");if(swf){hasFlash=true;flashVersion=swf.GetVariable("$version")}}else{if(navigator.plugins&&navigator.plugins.length>0){swf=navigator.plugins["Shockwave Flash"];if(swf){hasFlash=true;flashVersion=swf.description}}}return{hasFlash:hasFlash,version:flashVersion.match(/\d+/g)}},_flashError:function(){$.dialog.alert('\u68c0\u6d4b\u5230\u60a8\u7684\u6d4f\u89c8\u5668\u6ca1\u6709\u5b89\u88c5\u6700\u65b0Adobe Flash Player\u63d2\u4ef6\uff0c\u8fd9\u4f1a\u5f71\u54cd\u60a8\u8bbf\u95ee\u672c\u9875\u9762\u7684\u90e8\u5206\u529f\u80fd\u3002<br /><center>\u8bf7<a href="http://get.adobe.com/cn/flashplayer/" target="_blank">\u70b9\u6b64</a>\u5b89\u88c5</center>')},_makeToken:function(){var a=function(){return(((1+Math.random())*65536)|0).toString(16).substring(1)};return(a()+a()+"_"+a()+a()+a())},uploadBase64:function(b,c){var a="flashUploadBase64_"+this._makeToken();window[a]=(function(d){return function(e){d(e)}})(c);this.flash.uploadBase64(b,a)}}});