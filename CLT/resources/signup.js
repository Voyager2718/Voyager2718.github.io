var bg_color = 'rgba(255 ,63 ,63 ,0.9)';
var verified = new Array(false, false, false, false);
function veri_username(id) {
    var un = document.getElementById(id);
    if (un.value.length < 4 || un.value.length > 16) {
        un.style.backgroundColor = bg_color;
        verified[0] = false;
    }
    else {
        un.style.backgroundColor = 'white';
        verified[0] = true;
    }
    if (verified[0] == true && verified[1] == true && verified[2] == true && verified[3] == true)
        document.getElementById('signinbutton').disabled = false;
    else
        document.getElementById('signinbutton').disabled = true;
}
function veri_nickname(id) {
    var un = document.getElementById(id);
    if (un.value.length < 4 || un.value.length > 32) {
        un.style.backgroundColor = bg_color;
        verified[1] = false;
    }
    else {
        un.style.backgroundColor = 'white';
        verified[1] = true;
    }
    if (verified[0] == true && verified[1] == true && verified[2] == true && verified[3] == true)
        document.getElementById('signinbutton').disabled = false;
    else
        document.getElementById('signinbutton').disabled = true;
}
function veri_password(id) {
    var un = document.getElementById(id);
    if (un.value.length < 6 || un.value.length > 16) {
        un.style.backgroundColor = bg_color;
        verified[2] = false;
    }
    else {
        un.style.backgroundColor = 'white';
        verified[2] = true;
    }
    if (verified[0] == true && verified[1] == true && verified[2] == true && verified[3] == true)
        document.getElementById('signinbutton').disabled = false;
    else
        document.getElementById('signinbutton').disabled = true;
}
function veri_add(id) {
    var un = document.getElementById(id);
    if (un.value.length < 6 || un.value.length > 128) {
        un.style.backgroundColor = bg_color;
        verified[3] = false;
    }
    else {
        un.style.backgroundColor = 'white';
        verified[3] = true;
    }
    if (verified[0] == true && verified[1] == true && verified[2] == true && verified[3] == true)
        document.getElementById('signinbutton').disabled = false;
    else
        document.getElementById('signinbutton').disabled = true;
}