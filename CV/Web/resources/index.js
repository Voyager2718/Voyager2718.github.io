function copyToClipboard(value) {
    var target = document.getElementById("hiddenText");
    target.textContent = value;
    console.log(target.textContent);
    select(target);
    document.execCommand("copy");
}

function select(element) {
    var selectedText;

    if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        element.focus();
        element.setSelectionRange(0, element.value.length);

        selectedText = element.value;
    }
    else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

function setPositions() {
    $("#canvas").css("left", ($(window).width() - 900) / 2 + "px");
    if (!device.landscape())
        $("body").css("font-size", 1.5 * zoom + "%");
    else
        $("body").css("font-size", zoom + "%");
}

function closeInfoWindow() {
    if (!inInfoWindow && !stopClosingInfoWindow) {
        $("#infoWindow").remove();
        infoWindowOpened = false;
    }
}