//Init
$(document).ready(function () {
    //Device detect
    var zoom = 100;
    if (device.mobile()) {
        $("body").css("font-size", "300%");
        zoom = 300;
    }
    else if (device.tablet()) {
        $("body").css("font-size", "400%");
        zoom = 400;
    }
    $("#cv").text(lang.WebCV);
    $("#cardTitle0").text(lang.PersonalInfo);
    $("#cardTitle1").text(lang.PersonalInfo);
    $("#contact").text(lang.Email).css({
        "title": lang.Clickboard,
        "cursor": "pointer",
        "display": "inline-block",
    }).attr("title", lang.Clipboard);
    setPositions();

    //Onclick listener
    $(".cardContent").css("display", "none");
    $(".cardTitle").click(function () {
        $("#cardContent" + $(this).attr("id").substring(9, 10)).slideToggle("fast");
    })
    $("#contact").click(function () {

    });
});

//Onresize
$(window).resize(function () {
    setPositions();
});

//Functions
function setPositions() {
    $("#canvas").css("left", ($(window).width() - 900) / 2 + "px");
    if (device.landscape())
        $("body").css("font-size", "400%");
    else
        $("body").css("font-size", zoom + "%");
}