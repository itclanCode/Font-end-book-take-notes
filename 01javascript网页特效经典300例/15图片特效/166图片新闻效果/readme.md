### 图片新闻效果
### 实例描述
图文并茂是一个新闻网站所必须的展示效果,尤其是新闻图片让人可以直观的了解新闻主题,一些重大的新闻往往会以图片链接的形式放在新闻网站首页,但是网站首页的空间有限,就不得不采用一种图片链接的切换的效果来展示多个新
### 实现代码
```
<!DOCTYPE html>
<html>

<head>
    <title>图片新闻效果</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <style>
    .flashNews {
        position: relative;
        width: 305px;
        height: 214px;
        left:50%;
        margin-left:-150px;
        margin-bottom: 12px;
        overflow: hidden;
        border: 1px solid #B6CAE3;
    }

    .flashNews img {
        border: 0;
    }
    </style>
</head>

<body style="text-align:center" onload="init();">
    <div class="flashNews">
        <div id="Switch_1"><a href="#"><img src="img/1.jpg" onmouseover="pauseSwitch();"  onmouseout="goonSwitch();"  /></a></div>
        <div id="Switch_2"><a href="#"><img src="img/2.gif" onmouseover="pauseSwitch();"  onmouseout="goonSwitch();"  /></a></div>
    </div>
    <script type="text/javascript">
    var CurScreen = 1;
    var MaxScreen = 2;
    var timer = null;

    function switchPic(screen) {
        if (screen > MaxScreen)
            screen = 1;
        for (i = 1; i <= MaxScreen; i++)
            document.getElementById("Switch_" + i).style.display = "none";
        document.getElementById("Switch_" + screen).style.display = "block";
        CurScreen = screen;
    }

    function reSwitchPic() {
        timer = null;
        switchPic(CurScreen + 1);
        timer = setTimeout('reSwitchPic();', 3000);
    }

    function pauseSwitch() {
        clearTimeout(timer);
    }

    function goonSwitch() {
        clearTimeout(timer);
        timer = setTimeout('reSwitchPic();', 3000);
    }

    function goManSwitch(index) {
        clearTimeout(timer);
        CurScreen = index - 1;
        reSwitchPic();
    }

    function init() {
        var timer = null;
        switchPic(CurScreen);
        timer = setTimeout('reSwitchPic();', 3000);
    }
    </script>
</body>

</html>
```
### 具体效果
![图片新闻效果](img/图片新闻效果.gif)
### 具体分析
图片切换主要是为了节省空间,把多个图片的显示放在一块区域来进行,这种特效经常出现在一写图片新闻网站里,该特效的主要原理是定时器的切换和控制,当切换动作开始以后,需要判断是否已经切换到了最后一个,如果是,则需要重新开始,另外,还要监听鼠标移入图片的事件,当发生该事件时,需要停止切换,同样当鼠标移出时,则恢复切换的动作
