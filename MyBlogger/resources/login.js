var login_display = false;
if (window.innerWidth > 1500)
    document.getElementById('menu').style.width = "60%";
function create_login_form() {
    var login_div = document.getElementById("login_div");
    var login_eff = document.getElementById("login_eff");
    var window_h = document.body.scrollHeight;
    if (login_display == false) {
        login_div.style.display = "block";
        login_eff.style.display = "block";
        login_eff.style.height = window_h + "px";
        login_display = true;
    }
    else {
        login_div.style.display = "none";
        login_eff.style.display = "none";
        login_display = false;
    }
}

function key() {
    if (login_display == true)
        if (event.keyCode == 27) {
            document.getElementById("login_div").style.display = "none";
            document.getElementById("login_eff").style.display = "none";
        }
}