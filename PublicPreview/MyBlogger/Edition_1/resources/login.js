var login_display = false;
if (window.innerWidth > 1500)
    document.getElementById('menu').style.width = "60%";
var fps = 0;
var timerID;
document.onkeyup = key;

function show_login_div() {
    var login_div = document.getElementById("login_div");
    var login_eff = document.getElementById("login_eff");
    var cover = document.getElementById("cover");
    login_div.style.display = "block";
    login_eff.style.display = "block";
    if (fps >= 20) {
        document.getElementById("username").focus();
        clearTimeout(timerID);
    }
    else {
        fps++;
        cover.setAttribute("style", "-webkit-filter:blur(" + fps / 6 + "px);");
        login_div.style.marginTop = 9 + fps + "px";
        login_div.style.opacity = fps / 20;
    }
}


function close_login_div() {
    var login_div = document.getElementById("login_div");
    var login_eff = document.getElementById("login_eff");
    var cover = document.getElementById("cover");
    if (fps <= 0) {
        login_div.style.display = "none";
        login_eff.style.display = "none";
        clearTimeout(timerID);
    }
    else {
        fps--;
        cover.setAttribute("style", "-webkit-filter:blur(" + fps / 6 + "px);");
        login_div.style.marginTop = 9 + fps + "px";
        login_div.style.opacity = fps / 20;

    }
}

function login_form() {
    var login_div = document.getElementById("login_div");
    var login_eff = document.getElementById("login_eff");
    var cover = document.getElementById("cover");
    var window_h = document.body.scrollHeight;
    if (login_display == false) {
        login_eff.style.height = window_h + "px";
        login_display = true;
        timerID = setInterval(show_login_div, 15);
    }
    else {
        login_display = false;
        timerID = setInterval(close_login_div, 15);
    }
}

function key(e) {
    var kc = e.keyCode;
    if (login_display == true && kc == 27) {
        login_display = false;
        timerID = setInterval(close_login_div, 15);
    }
}