function GBBCode(a){"use strict";function b(a,b,c){if(!h.test(a))return i.test(a)&&(a=a.replace(i,"http://img1.guokr.com$2")),{src:a,width:null,height:null,"data-hashkey":null,"data-orig-width":null,"data-orig-height":null};var d,e,f=window.devicePixelRatio||1,g=a.replace(h,"$2"),j=atob(g.replace(/_/g,"/").replace(/-/g,"+")),k=j.charCodeAt(32)+256*j.charCodeAt(33)+65536*j.charCodeAt(34)+16777216*j.charCodeAt(35),l=j.charCodeAt(36)+256*j.charCodeAt(37)+65536*j.charCodeAt(38)+16777216*j.charCodeAt(39);if(void 0===b&&c>0)c=c,b=Math.floor(c*k/l);else if(void 0===c&&b>0)b=b,c=Math.floor(b*l/k);else if(1>b||1>c)return{src:a,width:null,height:null,"data-hashkey":g,"data-orig-width":null,"data-orig-height":null};if(d=b,e=c,b=parseInt(b*f),c=parseInt(c*f),b>k||c>l)return{src:a,width:parseInt(k/f),height:parseInt(l/f),"data-hashkey":g,"data-orig-width":k,"data-orig-height":l};var m="$1/thumbnail/$2_",m=m+b||"",m=m+"x",m=m+c||"",m=m+".$3";return{src:a.replace(h,m),width:d,height:e,"data-hashkey":g,"data-orig-width":k,"data-orig-height":l}}function c(a){return/www\.tudou\.com/.test(a)?a+="&autoPlay=true":/www\.56\.com/.test(a)?a+="?auto=1":/player\.video\.qiyi\.com/.test(a)&&(a+="-autoPlay=1"),a}function d(c){c.each(function(){var c,d,e,f=a(this),g=f.parents(".gbbcode-content"),h=f.data("image"),i=a("<img>");f.replaceWith(i),e=i.css("max-width"),e=null!==e&&"px"===e.slice(-2)?parseInt(e):g.width(),d=Math.min(e,i.parent().width()||e),c=b(h,d),null===c.width?i.attr("src",c.src):i.attr(c)})}function e(b){b.each(function(){var b=a(this);b.attr("src",b.attr("src").replace(/\.svg$/,".png"))})}function f(d,e){var f=[];d.each(function(){var b=a(this).data("video-loaded"),c=a(this).data("video");b!==!0&&f.indexOf(c)<0&&f.push(c)}),0!==f.length&&a.ajax({url:"/apis/shortener/url.json",type:"post",data:{url:f},dataType:"json",traditional:!0,success:function(g){g.ok&&(f=[],d.each(function(){var d=a(this),e=d.parents(".gbbcode-content"),f=d.data("video"),h=g.result[f].extradata,i=g.result[f].urltype,j=d.width(),l=d.height();if(h&&void 0!==h.player_type){var m,n,o=h.preview_image,p=c(h.player_url),q=h.player_type,r=h.title+" - "+i.title,s=b(o,j,l);d.attr("title",r).css("background-image","url("+s.src+")").bind("click touch",function(b){var c,f;return"flash"==q&&k===!1?void d.attr("target","_blank"):(b.preventDefault(),d.css("display","none"),void 0===n?n=a('<a data-collapsed href="javascript: void(0)">↑ 收起</a>').data("collapsed",!1).insertAfter(d).bind("click touch",function(a){a.preventDefault(),n.data("collapsed")!==!0&&(m.remove(),m=void 0,d.css("display","block"),n.css("display","none").data("collapsed",!0))}):n.css("display","block").data("collapsed",!1),void(void 0===m&&(m=a("<iframe>").attr({src:p,frameborder:0,allowfullscreen:!0}).insertAfter(d),f=m.css("max-width"),f=null!==f&&"px"===f.slice(-2)?parseInt(f):e.width(),c=Math.min(f,m.parent().width()||f),m.attr({width:c,height:9*c/12}))))}).data("video-loaded",!0)}}),e instanceof Function&&e())}})}function g(b){b.each(function(){var b=a(this);b.bind("load",function(){b.height(b.contents().find("body").height()+50)}),b.height(b.contents().find("body").height()+50)})}var h=/^(http:\/\/img1\.(?:\w+\.)?guokr\.com(?:\:\d+)?)\/image\/([\w-]{56})\.(jpg|png|gif)(\?.*|$)/,i=/^(http:\/\/(?:\w+\.)*guokr\.com(?:\:\d+)?)?(\/gkimage\/[a-z0-9\/]{15}\.(gif|jpe?g|png))(\?.*|$)/,j=document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape","1.0"),k=!1;try{var l=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");l&&(k=!0)}catch(m){navigator.mimeTypes&&void 0!=navigator.mimeTypes["application/x-shockwave-flash"]&&navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin&&(k=!0)}return function(b){void 0===b&&(b={}),b.imageSelector=b.imageSelector||"noscript[data-image]",b.videoSelector=b.videoSelector||"a[data-video]",b.mathSelector=b.mathSelector||"img[data-math]",b.pollSelector=b.pollSelector||"iframe[data-poll]",d(a(b.imageSelector)),f(a(b.videoSelector)),g(a(b.pollSelector)),j!==!0&&e(a(b.mathSelector))}}!function(){function a(a){this.message=a}var b="undefined"!=typeof exports?exports:this,c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";a.prototype=new Error,a.prototype.name="InvalidCharacterError",b.btoa||(b.btoa=function(b){for(var d,e,f=0,g=c,h="";b.charAt(0|f)||(g="=",f%1);h+=g.charAt(63&d>>8-f%1*8)){if(e=b.charCodeAt(f+=.75),e>255)throw new a("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");d=d<<8|e}return h}),b.atob||(b.atob=function(b){if(b=b.replace(/=+$/,""),b.length%4==1)throw new a("'atob' failed: The string to be decoded is not correctly encoded.");for(var d,e,f=0,g=0,h="";e=b.charAt(g++);~e&&(d=f%4?64*d+e:e,f++%4)?h+=String.fromCharCode(255&d>>(-2*f&6)):0)e=c.indexOf(e);return h})}(),window.G?G.req(["jQuery"],function(a){GBBCode(a)()}):window.jQuery?jQuery(function(a){GBBCode(a)()}):window.Zepto&&Zepto(document).ready(function(a){GBBCode(a)()});