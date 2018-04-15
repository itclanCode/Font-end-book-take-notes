Ajax其实就是XMLHttpRequest,Javascript，XML,css和HTML技术的组合,Ajax的使用可以给用户带来良好的体验,它可以在不刷新页面的情况下与服务器进行交互

### 实例185 创建动态的XMLHttpRequest对象

### 实现代码 
```
     var client; // 定义XMLHttpRequest对象,也称作为Ajax客户端
     // button 的click事件回调函数
     function sendAjax(){
         // 判断是否支持ActiveX控件,老IE浏览器需要使用ActiveXObject来创建
         if(window.ActiveXObject){
            // 通过实例化ActiveXObject来创建XMLHttpRequest对象
            client = new ActiveXObject("Microsoft.XMLHTTP");
         }
         // 其他的大多数浏览器都支持本地javascript对象
         else if(window.xMLHttpRequest){
            // 创建XMLHTTPRequest的一个实例(本地javascript对象)
            client = new XMLHttpRequest();
         }else{
            alert("创建ajax客户端失败,您的浏览器不支持该服务");
         }
         if(client){
            // 设置建立连接的方式和目标文件,以及是否为异步模式
            client.open("GET","test001.txt",true);
            client.send();  // 调用send函数,发出Ajax请求
            alert("ajax请求,已经发出");
         }
     }
```

### 难点分析

所有浏览器都应该提供XMLHttpRequest对象的接口,但是很可惜,一些老版本的IE浏览器不提供此接口,这需要用到IE浏览器的拓展对象ActiveObject
