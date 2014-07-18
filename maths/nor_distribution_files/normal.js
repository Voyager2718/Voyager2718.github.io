// JavaScript Document
function zinv (p) {
	var t,v,theSign;
	if (p>=1){
		return 7;
	}
	else if (p<=0) {
		return -7;
	}
	if (p<.5) {
		t=p;
		theSign=-1;
	}
	else
	{
		t=1-p;
		theSign=1;
	}
	
	v = Math.sqrt(-2.0 * Math.log(t));
	var x = 2.515517 + (v * ( 0.802853 + v * 0.010328));
	var y = 1 + (v * (1.432788 + v * (0.189269  + v * 0.001308)));
	var Q = theSign *(v - (x /y));
	return Q;
}

function zProb (z){
				
				
			
	if (z<-7) {return 0.0;}
	if (z>7) {return 1.0;}


	if (z<0.0) {flag= true;}
	else
		{flag = false;}

	z = Math.abs(z);
	b=0.0;
	s=Math.sqrt(2)/3*z;
	HH=.5;
	for (var i=0;i<12;i++) {
		a = Math.exp(-HH*HH/9)*Math.sin(HH*s)/HH;
		b=b+a;
		HH=HH+1.0;
	}
	p= .5-b/Math.PI;
//p=b/Math.PI;
	if (!flag) {p=1.0-p;}
	return p;
}