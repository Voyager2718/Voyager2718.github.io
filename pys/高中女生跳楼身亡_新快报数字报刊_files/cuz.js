function altdiv(chk)
{
	for(i=1;i<5;i++){
		obj = document.getElementById('div'+i);
		obj.style.display = chk==true ? '' : 'none';
	}
}

function checklen()
{
	obj = document.getElementById('textarea');
	v = obj.value;
	v = v.Trim();
	l = v.length; 

    if(l==0){
	   alert('�������ݲ���Ϊ��');
	   obj.value = '';
	   obj.focus();
	   return false;
	}else{
	   document.getElementById('submitbutton').disabled = true;
	   document.getElementById('submitbutton').value = '�����ύ...';
	   return true;
	}
	
}


document.writeln("<script type=\"text/javascript\" src=\"http://www.ycwb.com/outfile/js/tongji.js\"></script>");