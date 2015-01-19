function dohit(){		
		if (document.readyState == 'complete' )
    	{		
		document.frames("hitClickIframe").document.hitform.url.value = location.href;
		document.frames("hitClickIframe").document.hitform.submit();
		document.hitClickIframe.style.display="none";
		}else
		window.setTimeout("dohit()","300"); 	
}
