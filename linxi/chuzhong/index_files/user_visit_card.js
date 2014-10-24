_.Module.define({path:"ihome/widget/UserVisitCard",requires:["common/widget/Card","UserVisitCardBase","ihome/widget/Interaction","props/widget/Residual"],sub:{_visit_card:null,_visit_card_ajax:null,_option:{width:370},initial:function(a,i){window.Page&&Page.checkLoadedModules("UserVisitCard")||(this.dataObj=a,this._wrap=$("body"),this._util=this.use("userVisitCardBase"),this._interaction=this.use("ihome/widget/Interaction"),this._residual=this.use("props/widget/Residual"),i||this.bindEvents())},bindEvents:function(){var a=this;this._wrap.delegate(".j_user_card","mouseenter",function(){return a.buildCard($(this)),!1}),this._wrap.delegate(".j_user_card","mouseleave",function(){return a._visit_card_ajax&&a._visit_card_ajax.abort(),a._visit_card&&a._visit_card.closeCard({type:"delayClose",time:200}),a._visit_card=null,!1}),this._wrap.delegate(".card_userinfo_close","click",function(){return $("#user_visit_card").remove(),!1})},buildCard:function(a){var i=this;i._visit_card&&(i._visit_card.closeCard(),i._visit_card=null);var t='<div class="user_card_loading"><img src="/tb/static-ihome/img/loading2.gif"/>���ڼ��أ����Ժ�...</div>',e={content:t,card_css:{width:i._option.width,zIndex:$.getcurzIndex()},auto_positon:!0,event_target:a,attr:"id='user_visit_card'",wrap:$("body")};i._visit_card=i.use("common/widget/Card",e),i._visit_card.showCard({type:"delayShow",time:200}),i.buildVisitCard(a)},getVisitCardContent:function(a){var i=this,t={ie:"utf-8"};a.un?t.un=a.un:t.id=a.id,$.ajax({type:"get",url:"/home/get/panel",data:t,dataType:"json"}).success(function(t){if(t&&0===t.no){var e=t.data;e.bg_id=a.bg_id;var r=i._util.getVisitCardTpl(1,e,!0);a.wrap.html(r)}else{var r='<div class="user_card_loading">�������<a href="#" id="user_card_reload" class="user_card_reload">ˢ��</a></div>';a.wrap.html(r)}})},buildVisitCard:function(a){var i=this,t={ie:"utf-8"};a.getData().un?t.un=a.getData().un:t.id=a.getData().id,i._visit_card_ajax&&i._visit_card_ajax.abort(),i._visit_card_ajax=$.ajax({type:"get",url:"/home/get/panel",data:t,dataType:"json"}).success(function(t){if(t&&0===t.no){var e=t.data,r=e.name==i.dataObj.uname,s=i._util.getVisitCardTpl(r,e,!0);i._visit_card.setContent(s),i._visit_card._j_card.bindData({un:e.name}),i._visit_card.showCard(),i._interaction._resetDataObj({is_login:PageData.user.is_login,un:e.name,tbs:PageData.tbs}),i._residual.showUI({wrap:$("#user_visit_card .userinfo_head_wrap"),props:e.appraise||{}}),$.stats.track("cardinfo","ihome_v1")}else{var s='<div class="user_card_loading">�������<a href="#" id="user_card_reload" class="user_card_reload">ˢ��</a></div>';i._visit_card.setContent(s),$("#user_card_reload").on("click",function(){return i.buildCard(a),!1})}})},bindVisitCardEvent:function(){var a=this;a._visit_card.showCard({type:"delayShow",time:200}),$.stats.track("cardinfo","ihome_v1")}}});
;_.Module.define({path:"ihome/widget/UserVisitCard/UserVisitCardBase",requires:["common/widget/Icons","common/widget/UserHead","common/widget/MemberApi","ihome/widget/MonthIcon"],sub:{countLen:0,initial:function(){},getVisitCardTpl:function(e,a,n){var r=PageData.product||"",i=this.use("common/widget/Icons"),t=this.use("common/widget/UserHead"),s=this.use("ihome/widget/MonthIcon"),o=this.use("common/widget/MemberApi"),_=t.getHeadFrameStyle(a,"105"),c={head_img:"/tb/static-ihome/img/panel_"+a.bg_id+".jpg",concernClass:"0"==a.can_followed?"btn_concern_done":"btn_concern",un:encodeURIComponent(a.name),btn_group:n?this.getBtnGroup(a):"",frameClass:_.hasFrame?"card_userinfo_left_frame":"",frameStyle:_.stylestr,portrait:t.getHeadUrl(a),fr:r,icon_pre:i.getPreIconHtml(a.mParr_props,a.free_flag),member_class:o.getMemberNameClass(a.mParr_props,a.free_flag),name:a.name_show,icon:i.getIconsHtml(a),sex:a.sex,tb_age:"-"==a.tb_age?a.tb_age:a.tb_age+"��",post_num:a.post_num,good_num:a.good_num,honor:s.getMonthIcon(a.tbmall_month_icon,2),honor_margin:this.getHonorMargin()};a.is_verify&&"0"!==a.is_verify&&(c.verify_info=this.getVerifyHTML(a.identify_info));var l="";e||(l='<div class="interaction_wrap interaction_wrap_theme2"><a class="#{concernClass}" target="_blank" href="#" onclick="return false"></a><a class="btn_sendmsg" target="_blank" href="http://msg.baidu.com/ms?ct=21&cm=1&tn=bmSendMessage&un=#{un}"></a></div>');var m=['<div class="card_headinfo_wrap" id="card_headinfo_wrap">','<img class="card_userinfo_img" src="#{head_img}"/>','<a class="card_userinfo_guide" target="_blank" href="/tbmall/home"></a>',l,"</div>",'<div class="card_userinfo_wrap">','<div class="card_userinfo_left #{frameClass}">','<div class="userinfo_head_wrap">','<div class="userinfo_head" style="#{frameStyle}"></div>','<a href="/home/main?un=#{un}&fr=#{fr}&ie=utf-8" class="j_avatar" target="_blank"><img src="#{portrait}"/></a>',"</div>","</div>",'<div class="card_userinfo_middle">','<div class="card_userinfo_title clearfix">','#{icon_pre}<a href="/home/main?un=#{un}&fr=#{fr}&ie=utf-8" target="_blank" class="userinfo_username #{member_class}">#{name}</a>#{icon}',"</div>",'<div class="card_userinfo_num clearfix">','<span class="userinfo_sex userinfo_sex_#{sex}"></span>',"<span>����:#{tb_age}</span>",'<span class="userinfo_split"></span>',"<span>����:#{post_num}</span>","</div>",'<div class="card_userinfo_honor honor_margin_#{honor_margin} clearfix">',"#{honor}","</div>","</div>","</div>","#{verify_info}"].join("");return $.tb.format(m,c)},getBtnGroup:function(e){var a="";if(e.id!==PageData.user.id){var n=e.can_begcard,r="";0==n?r='<a class="btn_begcard j_begcard" href="#"></a>':1==n?r='<a class="btn_begcard btn_forbidden">������</a>':2==n&&(r='<a class="btn_begcard btn_forbidden">�ѽ���</a>');var i={private_msg:"http://msg.baidu.com/ms?ct=21&cm=1&tn=bmSendMessage&un="+encodeURIComponent(e.name),btn_begcard:r};a=['<div class="card_btn_grounps">','<a class="btn_privatemsg" target="_blank" href="#{private_msg}"></a>',"#{btn_begcard}","</div>"].join(""),a=$.tb.format(a,i)}return a},getIcon:function(e){var a="";return e.identity&&(a+='<span title="����ʵ����֤" class="card_userinfo_icon card_icon_verify"></span>'),e.meizhi_level>0&&(a+='<a href="/p/'+e.meizhi_thread_id+'" target="_blank" title="������ֽ��֤" class="card_userinfo_icon meizhi_vip card_icon_meizhi_vip'+e.meizhi_level+'"></a>'),a},getHonor:function(e){if(e.novice)return'<div class="grade_level grade_level_novice" title="���ɲ���">���ɲ���</div>';var a={manager:{title:"����",level:19},assist:{title:"С����",level:20},picadmin:{title:"ͼƬС��",level:21},videoadmin:{title:"��ƵС��",level:22},novice:{title:"����",level:23}},n=e.manager,r=null,i="",t="";this.countLen=0;for(var s in n){r=n[s];var o=r.forum_list.join("��"),_=a[s];o=r.count>2?o+"�Ȱ�"+_.title:o+"��"+_.title,i+=this.getHonorItem(_.level,r.count,o),this.countLen+=String(r.count).length}var c=e.grade,l=[];for(var m in c)l.push(m);l.sort(function(e,a){return a-e});for(var d=0,f=l.length;f>d;d++){r=c[l[d]];var o=r.forum_list.join("��");r.count>2&&(o+="�ɵ�"),t+=this.getHonorItem(l[d],r.count,o),this.countLen+=String(r.count).length}return i+t},getHonorMargin:function(){var e={2:"8px",3:"6px",4:"4px"},a=this.countLen-4;return e[a]||""},getHonorItem:function(e,a,n){var r={level:e,title:n,count:a},i=['<div class="grade_level grade_level_#{level}" title="#{title}">',"<span>#{count}</span>","</div>"].join("");return $.tb.format(i,r)},getVerifyHTML:function(e){for(var a={verify_reason:e[0]&&e[0].v_reason,verify_forums:""},n=['<div class="verify_wrap">','<div class="verify_content">','<div class="verify_desc">',"<span>�ٷ���֤��</span>","<span>#{verify_reason}</span>","</div>",'<div class="verify_forum">','<a class="verify_home" href="http://v.tieba.baidu.com/" target="_blank">������ҵ�ٷ���</a>',"<span>��פ�ɣ�</span>","#{verify_forums}","<span>�ٷ�����</span>","</div>","</div>","</div>"].join(""),r=0;r<e.length;r++)a.verify_forums+=this.getVForumItem(r,e[r].forum_name);return $.tb.format(n,a)},getVForumItem:function(e,a){var n="",r={},i=[];return a.length>5?(n=a.substring(0,5),n+="..."):n=a,r={index:e,verify_forum_name:n,origin_forum_name:encodeURIComponent(a)},i=['<span class="verify_forum_info">','<a target="_blank" class="verify_forum_name_#{index}" href="/f?ie=utf-8&kw=#{origin_forum_name}">#{verify_forum_name}</a>','<a target="_blank" href="http://v.tieba.baidu.com/">','<img class="verify_forum_icon" src="/tb/static-ihome/img/platform_blue_icon14.gif" alt="�ٷ���֤ͼ��" title="�ٶ����ɹٷ�ƽ̨��֤">',"</a>","</span>"].join(""),$.tb.format(i,r)}}});