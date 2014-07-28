<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title>登陆</title>
    <link rel="stylesheet" type="text/css" href="http://voyager2718.github.io/songlinxi/resources/login_style.css" />
    <script type="text/javascript" src="http://voyager2718.github.io/songlinxi/resources/md5.js"></script>
    <script>
        function value0(id) {
            var d_id = document.getElementById(id);
            if (d_id.value == ZhangSanFeng)
                this.value = '';
        }
    </script>
</head>
<body>
    <input class="homebutton" type="button" value="Home" onclick="self.location.href = ('http://www.songlinxi.com');" />
    <div class="logindiv">
        <span>Name
            <input id="name" class="loginbox" type="text" value="ZhangSanFeng" onfocus="if(this.value=='ZhangSanFeng')this.value='';" /></span>
        <br />
        <span>Password
            <input id="password" class="loginbox" type="password" value="123" onfocus="if(this.value=='123')this.value='';" /></span>
        <br />
        <span>Anniversary
            <input id="anniversary" class="loginbox" type="text" value="20130104" onfocus="if(this.value=='20130104')this.value='';" /></span>
        <br />
        <br />
        <div style="width: 81px; height: 50px; margin: 0 auto;">
            <input class="loginbutton" onclick="md5()" type="button" value="Login" />
        </div>
    </div>
    <br />
    <br />
    <p>If this is your first login, you don't have to enter the password.</p>
</body>
</html>
