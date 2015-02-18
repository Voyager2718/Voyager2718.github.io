function key(e) {
    if (e.keyCode == 27)
        document.getElementById('Admin').style.display = 'none';
    if (e.keyCode == 82 && e.altKey)
        document.getElementById('Admin').style.display = 'block';
}

function getPMS() {
    var pw = document.getElementById("pw").value;
    var pmsID = document.getElementById("pmsID").value;
    if (pw == "" || pmsID == "")
        alert("Please fill in all spaces.");
    else {
        var xmlhttp;
        if (window.XMLHttpRequest)
            xmlhttp = new XMLHttpRequest();
        else if (window.ActiveXObject)
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        else
            throw new Error("Your browser doesn't support Ajax");
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.status == 200 && xmlhttp.readyState == 4)
                document.getElementById("PMSShow").innerHTML = xmlhttp.responseText;
        }
        xmlhttp.open("POST", "act.php", true);
        xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xmlhttp.send("pmsID=" + pmsID + "&password=" + pw + "&type=query");
    }
}