//改变字体大小
function f10px() {
    p1.style.fontSize = "10px";
}
function f18px() {
    p1.style.fontSize = "18px";
}
function f25px() {
    p1.style.fontSize = "25px";
}





//灯泡测试
function changeImage() {
    element = document.getElementById('myimage');
    if (element.src.match("Lighton")) {
        element.src = "Lightoff.gif";
    }
    else {
        element.src = "Lighton.gif";
    }
}


//音乐测试
function bgsoundpause() {
    document.getElementById("bgsound").pause();
}
function bgsoundplay() {
    document.getElementById("bgsound").play();
}