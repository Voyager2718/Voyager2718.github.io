var t = 5;
var p = document.getElementById('time');
function TimeOut() {
    if (t <= 0) {
        self.location.href = 'http://changletech.com';
        clearInterval(inter);
    }
    t--;
}
var inter = setInterval("TimeOut()", 1000);