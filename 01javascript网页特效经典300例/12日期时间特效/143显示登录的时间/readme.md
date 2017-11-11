### 显示登陆时间
### 实例描述
很多网站会要求用户在浏览自己的网页时多停留一会,会显示用户的停留时间,一般会根据停留的时间来赠送积分,为了让用户知道他已经在网站上停留了多久,可以显示一个登陆时间的提示
### 实现代码
```
<!DOCTYPE html>
<html>
    <head>
        <title>显示登录的时间</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        
    </head>
    <body style="text-align:center" onload="init();">
        <p id="stay_time"></p>

        <script type="text/javascript">         
            //定义时分秒数据的变量
            var s=0;            //秒
            var m=0;            //分
            var h=0;            //小时
            function init(){    //网页load回调函数
                window.setInterval(function(){//开始定时器
                    s++;        //把秒加一
                    if(s==60){  //如果超过60秒，则用1分钟表示
                        s=0;    //秒置零
                        m+=1;   //分加1
                    }
                    if(m==60){  //如果分为60，则用小时表示
                        m=0;    //分置零
                        h+=1;   //时加1
                    }
                    //展示结果到网页上
                    document.getElementById('stay_time').innerHTML
                        = "您已经登录了：<br>" + h+"时"+m+"分"+s+"秒";
                },1000);
            }
        </script>
    </body>
</html>
```
### 运行效果
![显示登陆时间](img/显示登录的时间.gif)
### 具体分析
实现示例中的案例,主要依赖两点,一是采用间隔时间为1秒的定时器,二是对时,分,秒的除余计算,对于前者,采用的是setInterval()函数即可实现,而后者需要执行这样的逻辑计算,当满足60秒以后,就进位1分,如果满60分,则进位为1小时