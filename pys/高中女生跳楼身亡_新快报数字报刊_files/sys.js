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
   alert('û��ѡ������');
   return false;
}

function selAll() // ȫѡ
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

function reverseAll() // ��ѡ
{
   i = 1;
   while(eval('cbox = document.all.chk' + i) && cbox != 'undefined'){
	  cbox.checked = !cbox.checked;
	  i++;
   }
}

function isDel(url)
{
    isGo(url,'ȷ��ɾ����');
}

function isDelete(url)
{
    isGo(url,'ȷ�Ϸ������վ��');
}

function isClean(url)
{
    isGo(url,'�˲������ɻָ���ȷ�������');
}

function isClean_multi()
{
   document.all.multiflag.value = 1; // ���
   checkSubmit();
}

function isDelete_multi()
{
   document.all.multiflag.value = 2; // ����վ
   checkSubmit();
}

function isAllow_multi()
{
   document.all.multiflag.value = 3; // ͨ��
   checkSubmit();
}

function isUndel_multi()
{
   document.all.multiflag.value = 4; // �ָ�
   checkSubmit();
}

function checkSubmit()
{	
	if(isSel()){	   
	   msgs = new Array('δ֪����','�˲������ɻָ���ȷ�������ѡ��?','ȷ�Ͻ���ѡ��������վ?','ȷ��ͨ����ѡ��?','ȷ�ϻָ���ѡ��?');
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
		     document.all.multiform.submit(); // �ָ�
		  }
		  return false;
	   }
	}
	return false;
}

function isUndel(url)
{
    isGo(url,'ȷ�ϻָ���');
}

function isLockurl(url)
{
    isGo(url,'ȷ�Ϸ�����URL��');
}

function isLockip(url)
{
    isGo(url,'ȷ�Ϸ�����IP��');
}

function isUnlock(url)
{
    isGo(url,'ȷ�Ͻ�����');
}

function isAllow(url)
{
    isGo(url,'ȷ��ͨ����');
}

function isStatistics(url)
{
    isGo(url,'ͳ�ƿ��ܻỨ�ϳ���ʱ�䣬��Ӱ�쵽���Ÿ����ķ��ʣ�ȷ��ͳ�ƣ�');
}

function isLogout(url)
{
    isGo(url,'ȷ���˳���');
}