function ResetPage() {
    //var test = document.getElementById('test');
    //test.innerHTML = window.innerWidth;
    var TL = document.getElementById('title_list');
    var TB = document.getElementById('top_bar');
    var MI = document.getElementById('more_info');
    if (window.innerWidth < 1262) {
        TL.style.width = '100%';
        TL.style.marginLeft = '0px';
        TL.style.marginBottom = '10px';
        TB.innerHTML = '建议在横向分辨率大于1280的设备上浏览本网页';
        TB.style.display = 'inline';
        MI.style.top = '450px';
    }
    if (window.innerWidth <= 900)
        MI.style.left = '60%';
    if (window.innerWidth <= 555)
        MI.style.left = '50%';
    if (window.innerWidth <= 430)
        MI.style.left = '45%';
    if (window.innerWidth > 430)
        MI.style.left = '50%';
    if (window.innerWidth > 555)
        MI.style.left = '60%';
    if (window.innerWidth > 900)
        MI.style.left = '70%';
    if (window.innerWidth < 380) {
        if (noti == false) {
            alert('本页面暂不支持横向分辨率过小的设备，将有可能导致浏览体验降低，建议使用分辨率更高设备浏览本页面');
            noti = true;
        }
    }
    if (window.innerWidth < 647)
        MI.style.top = '550px';
    if (window.innerWidth >= 647)
        MI.style.top = '450px';
    if (window.innerWidth >= 1262) {
        TL.style.width = '45%';
        TL.style.marginLeft = '50px';
        TL.style.marginBottom = '0px';
        TB.innerHTML = '';
        TB.style.display = 'none';
        MI.style.top = '380px';
    }
}