var p = 0;
var switchPagesHandle;

function setSwitchPages() {
    switchPagesHandle = setInterval(switchPages, 5000);
}

function switchPages() {
    p = p < 5 ? p + 1 : 0;
    switch (p) {
        case 0: self.location.href = "#1st"; break;
        case 1: self.location.href = "#2nd"; break;
        case 2: self.location.href = "#2nd/1"; break;
        case 3: self.location.href = "#3rd"; break;
        case 4: self.location.href = "#4th"; break;
        case 5: self.location.href = "#5th"; break;
    }
}