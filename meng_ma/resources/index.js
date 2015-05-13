function positioning() {
    var pic = document.getElementById("picBox"),
        left = document.getElementById("left"),
        right = document.getElementById("right");
    pic.style.margin = ((window.innerHeight - 600) / 2) + "px auto";
    left.style.left = ((window.innerWidth / 2 - 337 / 2) - 40) + "px";
    right.style.right = ((window.innerWidth / 2 - 337 / 2) - 40) + "px";
}

function displayQRCode() {
    var qrcode = document.getElementById("qrcode");
    qrcode.style.display = "block";
    qrcode.style.left = (window.innerWidth / 2 - 157) + "px";
}

function hideQRCode() {
    var qrcode = document.getElementById("qrcode");
    qrcode.style.display = "none";
}


var flames = 0, picNum = 1, lock = false;
var interval0;
function changeImgAnimation(type) {
    var pic0 = document.getElementById("pic0"),
       pic1 = document.getElementById("pic1");
    if (flames == 21) {
        lock = false;
        pic1.style.backgroundImage = pic0.style.backgroundImage;
        pic0.style.left = "0";
        pic1.style.left = "0";
        flames = 0;
        clearInterval(interval0);
        return;
    }
    if (type == "left") {
        pic0.style.left = -337 + (16 * (flames + 1)) + "px";
        pic1.style.left = (16 * (flames + 1)) + "px";
        flames++;
    }
    else if (type == "right") {
        pic0.style.left = 337 - (16 * (flames + 1)) + "px";
        pic1.style.left = (-16 * (flames + 1)) + "px";
        flames++;
    }
}

function changeImg(type) {
    if (lock)
        return;
    var pic0 = document.getElementById("pic0"),
        pic1 = document.getElementById("pic1");
    if (type == "left") {
        if (picNum > 1) {
            pic0.style.backgroundImage = "url(resources/pic/" + (picNum - 1) + ".png)";
            picNum--;
        }
        else {
            pic0.style.backgroundImage = "url(resources/pic/" + 17 + ".png)";
            picNum = 17;
        }
    }
    else if (type == "right") {
        if (picNum < 17) {
            pic0.style.backgroundImage = "url(resources/pic/" + (picNum + 1) + ".png)";
            picNum++;
        }
        else {
            pic0.style.backgroundImage = "url(resources/pic/" + 1 + ".png)";
            picNum = 1;
        }
    }
    interval0 = setInterval(changeImgAnimation, 25, type);
    lock = true;
}