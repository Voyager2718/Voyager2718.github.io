var p = 0;
var switchPagesHandle;

function setSwitchPages() {
    switchPagesHandle = setInterval(switchPages, 5000);
}

function switchPages() {
    p = p < 9 ? p + 1 : 0;
    switch (p) {
        case 0: self.location.href = "#1st"; break;
        case 1: self.location.href = "#2nd"; break;
        case 2: self.location.href = "#2nd/1"; break;
        case 3: self.location.href = "#3rd"; break;
        case 4: self.location.href = "#4th"; break;
        case 5: self.location.href = "#4th/1"; break;
        case 6: self.location.href = "#4th/2"; break;
        case 7: self.location.href = "#4th/3"; break;
        case 8: self.location.href = "#5th"; break;
        case 9: self.location.href = "#6th"; break;
    }
}

var language = (window.navigator.userLanguage || window.navigator.language).toLowerCase();
switch (language) {
    case 'en-us': if (lan != 'en-us') window.location.href = './index.html'; break;
    case 'fr': if (lan != 'fr') window.location.href = './index_fr.html'; break;
    default: if (lan != 'en-us') window.location.href = './index.html'; break;
}