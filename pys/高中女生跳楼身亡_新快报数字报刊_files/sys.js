String.prototype.Trim = function()
{
    return this.replace(/(^\s*)|(\s*$)/g, "");
}
String.prototype.lTrim = function()
{
    return this.replace(/(^\s*)/g, "");
}
String.prototype.rTrim = function()
{
    return this.replace(/(\s*$)/g, "");
}

function isGo(url,msg)
{
    if(confirm(msg)){
	   location.href=url;
	   return true;
	}
	return false;
}

function isSel()
{
   i = 1;
   while(eval('cbox = document.all.chk' + i) && cbox != 'undefined'){
	  if(cbox.checked){
	     return true;
	  }
	  i++;
   }
   alert('没有选择数据');
   return false;
}

function selAll() // 全选
{
   i = 1;
   while(eval('cbox = document.all.chk' + i) && cbox != 'undefined'){
	  cbox.checked = true;
	  i++;
   }
}

function clearAll() // 
{
   i = 1;
   while(eval('cbox = document.all.chk' + i) && cbox != 'undefined'){
	  cbox.checked = false;
	  i++;
   }
}

function reverseAll() // 反选
{
   i = 1;
   while(eval('cbox = document.all.chk' + i) && cbox != 'undefined'){
	  cbox.checked = !cbox.checked;
	  i++;
   }
}

function isDel(url)
{
    isGo(url,'确认删除？');
}

function isDelete(url)
{
    isGo(url,'确认放入回收站？');
}

function isClean(url)
{
    isGo(url,'此操作不可恢复，确认清除？');
}

function isClean_multi()
{
   document.all.multiflag.value = 1; // 清除
   checkSubmit();
}

function isDelete_multi()
{
   document.all.multiflag.value = 2; // 回收站
   checkSubmit();
}

function isAllow_multi()
{
   document.all.multiflag.value = 3; // 通过
   checkSubmit();
}

function isUndel_multi()
{
   document.all.multiflag.value = 4; // 恢复
   checkSubmit();
}

function checkSubmit()
{	
	if(isSel()){	   
	   msgs = new Array('未知操作','此操作不可恢复，确认清除所选项?','确认将所选项放入回收站?','确认通过所选项?','确认恢复所选项?');
	   flag = document.all.multiflag.value;
	   flag = parseInt(flag);
	   if(flag!=1 && flag!=2 && flag!=3 && flag!=4){
	      flag = 0;
		  alert(msgs[flag]);
		  return false;
	   }else{
	      if(confirm(msgs[flag])){
			 acts = new Array('','mclean','mdelete','mallow','mundel');
			 document.all.mact.value = acts[flag];
		     document.all.multiform.submit(); // 恢复
		  }
		  return false;
	   }
	}
	return false;
}

function isUndel(url)
{
    isGo(url,'确认恢复？');
}

function isLockurl(url)
{
    isGo(url,'确认封锁该URL？');
}

function isLockip(url)
{
    isGo(url,'确认封锁该IP？');
}

function isUnlock(url)
{
    isGo(url,'确认解锁？');
}

function isAllow(url)
{
    isGo(url,'确认通过？');
}

function isStatistics(url)
{
    isGo(url,'统计可能会花较长的时间，并影响到新闻跟帖的访问，确认统计？');
}

function isLogout(url)
{
    isGo(url,'确认退出？');
}