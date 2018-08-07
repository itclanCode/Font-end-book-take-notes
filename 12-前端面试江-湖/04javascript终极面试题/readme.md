### 194 Ajax实时什么?它的全称?

解析:
Ajax的全称是异步javascript和XML，它是一种创建交互网页应用的网页开发技术

### 简述Ajax中javascript脚本缓存问题,如何解决

修改javascript内容,调试时并不能显示新写的代码结果,是因为javascript为了加速页面执行,当前页面会使用缓存来保持当前调用的相同链接
解决办法：为了开发时调试方便,可以在链接地止后面增加一个随机函数

### Ajax和javascript的区别
JavaScript是一种浏览器端执行的脚本语言,AJax是一种创建交互式的网页应用开发技术,它利用了一系列相关的技术,其中就包括javascript

在一般的web开发中,javascript是在浏览器端执行的,我们可以用javascript控制浏览器的行为和内容,在Ajax应用中,信息在浏览器和服务器之间是传递是通过XML数据或者字符串实现的

### Ajax应用和传统web应用有什么不同?

在传统的javascript编程中,如果想得到服务器端数据库或文件上的信息，或者发送客户端信息到服务器端,需要建立一个html form,然后get或者post数据到服务器端,用户需要单机submit按钮来发送或者接收数据信息,然后等待服务器响应请求,页面重新加载,因为服务器每次都会返回一个新的页面，所以传统的web应用有可能很慢,而且交互不太好,使用AJax技术,就可以使javascript通过XMLHttpRequest对象直接与服务器进行交互,通过HTttpRequest,一个web页面可以发送一个请求到web服务器,并且接收web服务器返回的信息,不用重新加载页面,展示给用户还是同一个页面,用户感觉页面刷新了,但看不到javascript后台进行发送请求和接受响应

### 198 Ajax有哪些优点和缺点?

优点:
1. 最大的优点就是页面无刷新,用户的体验非常好
2. 使用异步方式与服务器端通信,具有更加迅速的响应能力
3. 可以把以前一些服务器负担的工作转嫁到客户端,利用客户端闲置的能力来处理,减轻服务器和带宽的负担,节约空间和宽带租用成本,并且减轻服务器的负担,Ajax的原则是:按需取数据,可以最大程度减少冗余情趣和响应对服务器造成的负担
4. 基于标准化被广泛支持的技术,不需要下载插件或者小程序
却点:
1. Ajax不支持浏览器返回按钮
2. 安全问题,Ajax暴露了与服务器交互的细节
3. 对搜索引擎的支持比较弱
4. 破坏了程序的异常机制
5. 不容易调试

### 如何解决Ajax中文乱码的问题?

解析:
有中文乱码是因为javascript页面和action类中使用的编码方式不一致造成的,可采用如下两种方式解决
1. 页面对javascript做两次encodeURI，服务器的serverlet获取后做一次UTF-8转码,因为前两次进行编码后都变成了英文的字节码,所以到服务器端无论如何解码都不会错误,推荐使用该方法
2. JavaScript代码 var url = "Ajaxserver?name="+encodeURI(encodeURI($("#userName").val()))
* 服务器端代码:
* String old =  httpServletRequest.getParamer("name");
* String name =  URIDecoder.decode(old,"utf-8");

2. 在客户端javascript做一次编码,在服务器端做一次ISO-8859-1和utf-8转换
3. JavaScript代码
4. var url = "Ajaxserver?name="+encodeURI($("#userName").val())

### 201 Ajax的交互模型(流程)是什么样的?

解析:
Ajax的交互模型如下图所示:
Ajax的交互流程如下:
1. 启动获取XMLHTTPRequest对象
2. open打URL通道,并设置异步传输
3. 发送数据到服务器端
4. 服务器接收数据并处理,处理完后返回结果
5. 客户端接收服务器端返回

### 简述一下Ajax的工作原理

通过XMLHTTP对象来想服务器端发送异步其你去,从服务器端获得数据然后用javascript来操作DOM,从而更新页面,这其中最关键的一步就是从服务器获得请求数据

### Ajax跨域的解决办法?

1. web代理的方式,即用户访问A网站时所产生的对B站跨域的访问请求均提交到A网站的指定页面,由该页面代替用户页面完成交互,从而返回合适的结果,此方案可以解决现阶段所能够想到的多数跨域访问问题,但要求A网站提供web代码的支持,因此A网站与b网站之间必须是紧密协作的,且每次交互过程,A网站的服务器负担增加,无法代用户保存sesion状态
2. on-demand方式,Mymsm中不涉及跨域访问问题,动态控制script标记的生成,通过修改cript标记的src属性完成对跨域页面的调用,此方案的缺陷是:script的src属性完成该调用时,采取的是get方式,如果请求时传递的字符串过大,程序可能会无法正常的运行,不过此方案非常适合聚合类门户使用
3. iframe方式,采用iframe这种方式的确可以,但是由于父窗口与子窗口之间不能交互(跨域访问情况下,这种交互被拒绝)，因此无法完成对父窗口效果的影响
4. 用户本地转储方式,IE本身依附于windows平台的特性为我们提供了一种基于iframe利用内存来绕行的方案,即两个window之间可以在客户端通过windows剪贴板的方式进行数据传输,只需要在接收数据的一方设置interval进行轮询，获得结果后清楚interval即可,firefox的平台独立性决定了它不支持剪贴板这种方式,而以往版本的firefox中存在的插件扣动又被fixed,所以firexof无法通过内存来完成暗度陈仓,而由于文件操作firefox也没有提供支持,致使这种技巧性的方式只能在IE中使用

### 201 编写Ajax的4个主要步骤是什么?
1. 创建XMLHttpRequest对象
2. 事件处理函数,处理服务器的响应结果
3. 打开一个连接open(method,url,asynch)
4. 发送数据:send(data)

### 205 请写出一个最熟悉的javascript框架(，以及该框架中Ajax的使用方法

JQuery：使用方法：jQueyr里面的$.Ajax方法的作用是通过HTTP请求加载远程是数据,该方法是由jQuery底层Ajax实现的,最常见的参数$.Ajax({type:数据提交方式,url:数据提交的路径,data:需要提交的数据,dataType:服务器返回数据的类型,success:请求成功后的回调函数,err:请求失败后的回调函数})，在回调函数中执行操作

### 206 简述Ajax实现的步骤

1. 创建一个XMLHttpRequest对象,也就是创建一个异步调用对象
2. 创建一个新的HTTP请求,并指定该HTTP请求的方法,URL及验证信息
3. 设置响应HTTP请求状态变化的函数
4. 发送HTTP请求
5. 获取异步调用返回的数据
6. 使用javascript和DOM实现局部刷新

### 如何解决Ajax的安全性问题

解析：
增加验证码,增加随机Token,约束统一请求在规定时间内最大请求量,服务器端校验数据的正确性,尽量用post方法

### 208 简述Ajax实现异步机制,Ajax如何实现?

XMLHttpRequest对象是Ajax技术的核心,XMLHttpRequest对象使用javacript脚本能够实现对服务器的异步请求,即后台发送请求并接收服务器响应,通过动态获取响应数据来更新局部页面

### 介绍一下XMLHttpRequest对象的常用方法和属性

解析：
三个常用的属性如下:
1. onreadystatechange属性(存有处理服务器响应的函数)
2. readysState属性(存有服务器响应的状态的信息)
3. responseText属性(取回由服务器返回的数据)

两个方法：
1. open()方法,第一个参数定义发送请求所使用的方法,第二个参数规定服务器端脚本的URL,第三个惨呼规定应对当请求进行异步处理
2. send()方法,将请求送往服务器

### 212 XMLHttpRequest对象在IE和firefox中创建方式有没有什么不同?

解析：
有,该对象在IE中通过new ActiveXObject()得到,而在firefox中通过newXMLHttpRequest()得到

### 213 HTTP协议的状态消息有那些,200,302d的对应描述

1. 1xx: 消息
2. 2xx:成功
3. 3xx:重定向
4. 4xx:客户端错误
5. 5xx:服务器错误
6. 200 oK:请求成功
7. 302Found:所请求的页面已经临时转移至新的URL中

### 215 JavaScriptzhong d XMLHttpRequet对象,并说明此对象的属性onreadytatechange的作用

解析：
XMLHttpRequest对象暴露了各种属性,方法和事件,以便于脚本处理和控制http请求与响应,XMLHTTPRequest对象提供了对HTTP协议的完全的访问,包括做出post和head请求,以及普通的get请求的能力,XMLHttpRequest可以同步或异步地返回web服务器的响应,并且能够以文本或者一个DOM文档的形式返回内容
onreadyStateChage的作用:当readyState属性发生变化时触发此事件,用于触发回调函数

### 216 javascript如何得到HTTP的请求头信息和返回的头信息

解析:
getReponseHeader从响应信息中获取指定的http头信息
语法:strValue = oXMLHttpRequest.getResponeHeader(btrHeader)
getAllResponseHeaders获取响应的所有Http头信息
语法：strValue = oXmLHttpRequet.getAllResponseHeaders()

### 216 HTTP协议中,以下status code 返回值的含义是什么?

302,304,404,500

302:临时移动,服务器目前从不同位置的网页响应请求,但请求者应该继续会用原有位置来进行以后的请求
304:(未修改):自动上次请求后,请求的网页未修改过,服务器返回此响应时,不会返回网页的内容
404：未找到,服务器找不到请求的网页
500:服务器内部 错误，服务器遇到错误,无法完成请求

### 217 javascript如何实现面向对象中的继承,q请写段简单的代码

解析：
原型链继承,通过对象的child的prototype属性指向父对象parent的实例,使child对象实例能够通过原型链访问到父对象构造所定义的属性和方法等
使用call,apply方法,由于javascript内置的Function对象的apply,call方法改变了对象构造函数中this的上下文坏境,使特定的对象实例具有对象构造中所定义的属性和方法
对象实例间的继承,JavaScript对象的多态性,允许实例动态的添加属性方法,该特性造就了javacript中的另一种继承方法,对象实例间的继承

### 218 JavaScript中有哪几种形式可以实现继承,各有什么优缺点?

1. 构造继承法:在子类中执行父类的构造函数
2. 原型继承法:prototype的最大特性就会能够让对象实例共享原型对象的属性,因此,如果把某个对象作为一个类型的原型,那么我们说这个类型的所有实例都有这个对象为原型,此时,这个对象的类型也可以作为那些以这个对象为原型的实例的类型
3. 实例继承法:子类的原型=父类的实例
4. 复制继承法:复制继承法是通过对象属性的拷贝来实现继承的

### 219 怎么样体现javascript继承关系

解析:
由于javascript是prototype对象模型,所以没有严格意义上的类class,全部都说是对象Object实现继承,可以先创建一个父对象
```
    oldObject = function(){
        this.a = "属性"
    }
    // 复制出一个新对象,新对象里面已经具有旧对象内容
    newObject oldObject();
    // 新增些内容,拓展新对象
    newObject.b = "属性";
    newObject.function(){
        // 新方法
    }
    // 新对象具有旧对象的属性
    alert(newObject.a);
```

### 220 编写一段代码,让f1继承f2的所有成员

```
   function f2(){
      this.a2 = 3;
      this.b2 = 4;
   }
   function f1(){
      this.a1 = 1;
      this.b1 = 2;
   }
   f1.prototype = new f2()
   f1.prototype.constructor = f1;
```

### 221 选择javascript的一项特性,例如原型链继承,闭包模型,d对象原型,对其进行简单的介绍或者给出一个实例

我们经常需要将一个函数对象暂时挂到一个应用上留待后面执行,因为不到执行时是很难知道其具体参数的,而先前将它赋予那个引用时更是不知道

执行一个与特定的javascript对象关联的事件处理函数,并且要知道调用该对象的哪个方法,相关的例子是:用javascript对象来封装与特定的DOM元素的交互,这个javascript对象具有doOnclick,doMoreOver和doMouseOut方法,并且当用户在该特定的DOM元素中触发了相应的事件要执行这些方法

### 222 写一个让b继承a的方法

```
    function a(name,age){
        this.age = age ?age:30;
        this.name = name ?name:'小明'
        this.say = function(){
            alert(this.name+'今年'+this.age+'岁了');
        }
    }
    function b(){
        B.prototype = new a();
        var c = new b();
        c.say();
    }
```

### 223 JavaScript实现一个类A,包含私有属性,公有属性,私有方法和公有方法

解析:
```
   function A(){
      this.name = "world"; // 公有属性
      var message = "No message";  // 私有属性
      this.sayHello = function(){
          alert("Hello!"+this.name+"I wangt to say"+message);
      }
      function getMesage(){
        alert(mesage);
      }
   }
   class1.staticMethod = function(){
      alert("staticMethod()");
   }
```
说起类,其实javascript中所有的function 都可以当做一个类来使用,从上述的一个个例子当中可以看出,可以new(实例化)一个类,也可以直接当做function调用

### 224 Javascript如何实现继承,请举例说明

1. 子类的实例可以共享父类的方法
2. 子类可以覆盖父类的方法或者拓展新的方法
3. 子类和父类都是子类实例的类型

使用原型继承,中间使用临时对象作为child的原型属性,临时对象的原型属性在指向父类的原型,防止所有子类和父类原型属性都指向同一个对象,这样当修改子类的原型属性，就不会影响其他子类和父类

### 225 什么是闭包?

解析:
闭包就是能够读取其他含少数内部变量的函数
1. 闭包外层是一个函数
2. 闭包额你不都有函数
3. 闭包会return 内部函数
4. 闭包返回的函数内部不能有return(因为这样就真的结束了)
5. 执行闭包后,闭包内部变量会存在,而闭包内部函数的内部变量不会存在

### 226 闭包有什么特性,对页面有什么影响

解析:闭包的特性
1. 作为函数变量的一个引用,当函数返回时,其处于激活状态
2. 闭包就是当一个函数返回时,并没有释放资源的战区
3. 闭包对页面的影响
4. 通过会用闭包,我们可以做很多事情,模拟面向对象的代码的风格,更优雅,更简洁的表达出代码,在某些方面提升代码的执行效率

### 闭包的含义是什么?它的作用和原理h是什么?j具体能在什么场景会用

闭包的含义:
能够读取其他函数内部的变量的函数
作用和原理:
因为闭包只有在被调用时才执行操作,所以他可以被用来定义控制结构
多个函数可以使用一个相同的坏境,这使得他们可以通过改变那个坏境相互交流
闭包可以用来实现对象系统
使用场景:
1. 采用函数引用方式的setTimeout调用
2. 将函数关联到对象的实施方法
3. 封装相关的功能集

### 228 闭包的好处和坏处

1. 逻辑连接,当闭包作为另一个函数调用参数时,避免脱离当前逻辑而单独编写额外逻辑
2. 方便调用上下文的局部变量
3. 加强封装性,既可以达到对变量的保护作用

闭包的坏处:
闭包有一个非常严重的问题,即浪费内存,浪费内存不仅仅因为它常驻内存,更重要的是,对闭包的上使用不当会造成无效内存的产生

### 229 请写出一个闭包的简单实例

```
   function a(){
      var i = 0;
      function b(){
        alert(++i);
      }
      return b;
   }
   var c = a();
   c();
```

这个是标准的闭包,在函数a中,定义了函数b,a又return了b的值
```
  var c = a();
  c();
```
这两句执行很重要,var  c = a(),这里执行了a函数,那么a肯定经过了return,按照主流语言的函数特性,现在c的值就是a返回的值

第二行c()实际执行的就是b的函数,最后不管执行的是谁,会弹出一个值为0的窗口,到此为止,按照理论来说所有生命周期算是全部结束了,可是如果我们在多执行一行var c = a();c(),c()第一次弹出0,第二次弹出执行却是1,也就是说第一次c()后,a中的i依然保留,所以a在内存栈区依然保留

### 请使用javascript创建video标签,并创建播放,暂停的方法


### 241 解释一下json是如何进行跨域的

解析:
json可以跨域,但是必须有jsoncallback这个参数约定
比如:
```
  $.getJson('http:ww.qdjhu.com/api/users/items/?username=desandro'+'&apikey=8b604e5d4841c2cd976241dd90d319d7'+'&tag=bestofisotope&callback=?');
```
对方必须有callback=?这个约定,如果没有这个约定,json硬直跨域,难度太大,最后你会发现,费了一个九牛二虎之力还不如用服务器写个services去抓取,然后用json请求自己这个sservices地止,因为服务器不涉及跨域安全性问题,javascript是有这个安全性限制的

### 242 请实现一个Json.stringify(json)方法,能够对标准的json序列化

json对象有两个方法:stringify()和parse(),在最简单的情况下,这两个方法分别用于把javascript对象序列化为json字符串,以及把json字符串解析为原生javascript,早起的json解析器基本上就是使用javascript的eval()函数,由于json是javascript自己的语法,因此eval()函数可以解析,解释并返回javacript对象和数组,Ecmascript5对解析json的行为进行了规范,定义了全局对象json
```
    function init(){
        var book = {
            title:"javascript高级程序设计",
            authors:['Nicholas c.zakas'],
            edition:3,
            year:2018
        }
    }
    var jsonBook = json.stringify(book);
    var objectBook = Json.parse(JsonBook);
    var title =  objectBook.title;
```
默认情况下,json.stringify()输出的json字符串不包含任何空字或缩进,因此保存在jsonBook中的字符串如下所示
```
    {
        "title":"javascript高级程序设计",
        "authors":["Nicholas c zhou","edition":3,"year":2018]
    }
```
在序列化javascript对象时,所有函数以及原型成员都会被有意忽略,不体现在结果中,此外,值为undefined的任何属性也都会被跳过,最后,结果中都是值为有效的json数据类型的实例属性
注意：虽然book与objectBook具有相同的属性,但他们是两个独立的,没有任何关系的对象,如果传给json.pause()的字符串不是有效的json,该方法会显示错误

### 243 说说jsonp的实现方式

解析:
最简单的jsonp实现方式:
```
    var Jsonp =  document.createElement('script');
    Jsonp.onload = Jsonp.onreadystatechange =  function(){
        if(!this.readyState || this.readySState === "loaded" || this.readyState === "complete"){
           alert($("#demo").html());
           Jsonp.onload =  Jsonp.onreadystatechange = null;
        }
    }
    Jsonp.type = "text/javascript";
    Jsonp.src = "http://www.qdjhu.com";
    //在head之后添加js文件
    document.getElementsByTagName("head")[0].appendChild(Jsonp);
```
简单解释:我们通过创建script,指定它的src等属性,然后插入head执行,建议onload,onreadystatechange写在src赋值之前,防止载入javascript太快而没有给onload,onreadystatechange赋值(Image对象在IE下具有此类现象)
JSONP实例
首先我们可以定义一个函数来执行json返回的数据,然后通过jsonp的src传此函数给后台,进行处理,返回可执行的函数
```
    function JsonpHandle(a){
       alert(a);
    }
    var Jsonp = doucment.createElement("script");
    Jsonp.type = "text/javascript";
    Json.src=http://www.qdjhu.com/jsonp.php?callback=jsonPHandle;
    // 在head之后添加javascript文件
    document.getElementsByTagName("head")[0].appendChild(Jsonp);
    // 后台jsonp.php的代码 
    echo $_GET["callback"]."('hello world')"
```
### 244 Jsonp是解决快鱼的唯一途径?可异步吗,实现的机制是什么？
Jsonp和Json有关系?

解析:
1. Jsonp不是解决跨域的唯一途径
2. 可以异步
3. 实现机制如下

jsonp的全称是jsonp with padding，是为了解决跨域请求资源而产生的解决方案,很多时候我们需要在客户端获取服务器数据进行操作,一般我们会使用Ajax+web+service做此事,但是如果我们希望获取的数据和当前页面并不是一个域,著名的同源策略(不同域的客户端脚本在没明确授权的情况下,不能读写对方的资源)会因为安全原因拒绝请求,也就是说,我们不能向其他域直接发送请求以获取资源,在localhot域上有一个books.php,里面包含脚本对test.com域的books.php发送get请求,希望获取其book列表资源,这就是一个跨域请求资源
```
 $.ajax({
     type:'get',
     url:'http://www.qdjhu.com/books.php'
 })
```
页面会爆出这样一个错误,XMLHttpRequest cannot load 而http://www.qdjhu.com/books.php，originhttp://localhostinotallowed  by Access-Control-Allow-<Origin class="jsonp是为了解决这个问题出现">

4. Jsonp和Json关系 
5. json和jsonp虽然只有一个字母的差别,但其实他们根本就不是一回事儿,json是一种数据及哦啊胡格式,而jsonp是一种依靠开发人员的聪明创造出来的一种非官方跨域数据交互协议，jsonhi的下当用来上书写和交换情报的暗号，而jsonp就是把用暗号书写的情报传递给自己同志时使用的接头方式
### 245 解释jsonp的原理,以及它为什么不是真正的Ajax

1. jsonp原理 
2. 虽然有同源策略的限制,但是并不是HTML上苏搜友资源都必须是同一个域,我们常见的页面为了节省流量或者加载速度,采用Google或微软的jQUery cdn,在页面上我们写一下代码,iframe,img ,style,script元素等的src属性可以直接向不同域请求资源,jsonp正是利用script标签实现跨越请求资源
3. 原因:
4. jsonp是需要动态创建script标签的,是回调函数
5. Ajax是页面无刷新请求的数据操作

### 246 假设一个父容易里有一万个子元素,要给他们全部绑定事件,如何绑定性最好?

解析:
有这样一道javascript题目,在如下的DOM结构中,如何高效地给li元素绑定click事件,从而当用户单机li元速速时能够提示li中的内容
```
   <ul>
      <li></li>
      <li>xxx</li>
   </ul>
```
最初的想法就是遍历每个Li元素,循环给li绑定onclick事件,代码如下
```
   window.onload = function(){
       var ul  = document.getElementById("ul");
       var lis =  ul.getElementsByTagName("li");
       for(var i = lis.length-1;i>=0;i--){
              lis[i].onclick = function(e){
                  alert(this.innerHtml);
              }
       }
   }
```
这种想法当然是最简单,最直观也正确的,但是存在一点的问题就算是,当DOM中的Li元素特别多时,这样循环遍历的绑定操作势必会占用大量的资源,这个时候,我们可以使用事件的一些特性,将操作绑定到ul元素上面,当事件触发时,自动获取当前时间操作的对象,然后在完成操作,如下面代码所示
```
    window.onlaod =  function(){
        var ul = document.getElementById("ul");

        ul.onclick = functioni(e){
           e = window.event ? window.event:0;
           var who =  e.target ? e.target : e.srcElement;
           alert(who.innerHTML);
        }
    }
```
### 247 描述一下事件冒泡,介绍一下事件委托()事件代码的实现方法,以及他的原理和优点

解析：
1. 事件冒泡,在一个对象身上触发某些事件(比如单机onclick事件),如果该对象定义了此事件处理程序或者事件返回true,那么这个事件会向这个对象的父级对象传播,从里到外,直至它被处理(父级对象所有同类事件都将被激活),或者它达到了对象层次的顶层,即document对象(有些浏览器是window)
2. 事件委托的实现方法,通俗来讲,onclick,onmouseover,onmouseout等就是事件,而委托,就是让别人来做,这个事件本来是加在某些元素上的,然而你却加到别人身上来做,即将事件委托给别人
3. 事件委托的原理,事件委托,就是自己的事件交给别人去做,即将事件委托给别人
4. 事件委托的优点:比如有很多li元素,我们想要为每一个Li元素注册一个单机事件,当然你可以将每个元素挨个进行注册,但是如果有100个或者更多个li元素的话,这绝对是一项海量的工作,如果我们利用冒泡原理,将事件委托给li元素的父级元素处理,那么无论有多少个li元素,都能够轻松的搞定
```
   window.onload = function(){
       var obox = document.getElementById("box");
       var oshow = document.getElementById("show");
       obox.onclick =  function(ev){
          var ev = ev || window.event;
          var target =  ev.target || ev.srcElement;
          oshow.innerHTML = target.innerHTML;
       }
   }

````
### 248 事件委托是什么?

解析:
事件:在浏览器客户端应用平台,基本上都是以事件驱动的,即某个事件发生,然后做出相应的动作,浏览器的事件表示的某些事情发生的信号

冒泡:例如：气泡从水底开始往上升,由深到浅,升到最上面,在上升过程中,气泡会经过不同深度层次的水,这个气泡就相当于这里的事件,而水则相当于整个DOM树,事件从DOM树的底层一层一层往上传递,直至传递到DOM的根节点

### 251 分别写出普通与绑定的阻止默认事件

解析:
普通：
```
return false;
绑定:
preventDefault();
if(oEvent.preventDefault){
  oEvent.preventDefault();
}
return false;
```

### 252 事件处理程序以及事件对象的跨浏览器实现

### 253 event.preventDefault的作用是什么?与event.stopPropagation有什么区别?请举例说明

解析:
event.preventDefault()和event.stopPropagation()不会jQuery的方法,而是js本身自带的
event.preventDefault()用法,介绍该方法将通知web浏览器不要执行与事件关联的默认动作,如果存在这样的动作,例如:如果type属性是submit,在事件的传播的任意阶段可以调用任意的事件句柄,通过调用该方法,可以阻止提交表单,注意,如果Event对象的cancelable属性是false,那么没有默认动作,或者不能阻止默认动作,无论哪种情况,调用该方法都没有作用

event.stopPropagation()用法,介绍该方法将停止事件的传播,阻止他被分派到其他document节点,在回见传播的任何阶段都可以调用它,注意,虽然该方法不能阻止同一个document节点上的其他事件句柄被调用,但是它可以阻止把事件分派到其他节点

### 254 如何阻止冒泡事件和默认事件?

解析:
阻止冒泡事件发生需要调用以下函数
```
   function stopBubble(e){
      if(e&&stopPropagation){  // 非IE
        e.stopPropagation();
      }else{
        window.event.cancelBubble = true;
      }
}
阻止默认事件发生需要调用以下函数
function stopDefault(e){
    // 阻止默认浏览器动作(w3c)
    if(e && e.preventDefault){
       e.preventDefault();
    }else{
       // 非IE阻止浏览器默认动作的方式
       window.event.returnValue = false;
       return false;
    }
}
```
### 255 javascript程序中异常捕获的方法有哪些

使用Try..catch...来异常捕获(主要适用于IE5以上内核的浏览器)，也是最常用的异常捕获方式
使用onerror事件异常捕获,这种捕获方式是比较古老的一种方式,目前一些主流的浏览器暂不支持此种捕获方式

### 256 写一个设置cookie值的封装函数

解析:
1. encodeURI()转换字符编码为统一的编码
2. toUTCString()将时间转换为字符串,cookie只能接收字符串形式
```
   function setCookie(key,value,t){
      var oDate = new Date();
      oDate.setDate(oDate.getDate()+t);
      document.Cookie = key+"="+encodeURI(value)+';expores='+oDate.toUTCString();
   }
```

### 257 列举3-6个cookie的属性

解析:
Cookiehi浏览器提供的一种机制,它将document对象的cookie属性提供给javascript，可以由javascript对其进行控制,而并不是javascript本身的特性,cookie是存于用户硬盘的一个文件,这个文件通常对应于一个域名,当浏览器名下的多个网页,但不能跨域多个域名使用,可以用在保存用户登录状态《跟踪用户行为,定制页面,创建购物车

```
  $.Cookie("Cookie","CookieValue",{expire:7,path:"/",domain:"qdjhu.com",ecure:fale,raw:false});
  expires:有效时间,path:设置能够读取Cookie的顶级目录,domain:创建Cookie所在网页所拥有的域名,secure,默认是false,如果为true，cookie的传输协议为https:raw;默认为false,读取和写入时自动进行编码和解码(使用encodeURIComponent编码),使用decodeURIComponent解码,要关闭这个功能,需设置为true

  ### 259 异步加载javascript的方式有哪些?请分别举例

  1. $.getScript(URL,callback);
  2. 这个方法提供了异步加载script资源的方式,对于一些web网页内容比较多,需要按需加载的情况,提供了很大的帮助,jQuery1.2之后的这个方法可以跨域访问,它通过动态创建script,在加载成功后删除script节点,使用方法:$.getScript(/js/user.js"");
  
```
2. $.getJson()
该方法提供了访问同一个域中的json数据
```
    $("#AjaxLoadJson").click(function(){
       $.getJson("JS/user",function(data){
         $("#divTip").empty();  // 先清空标记中的内容
         var strhtml = "";  // 初始化保存内容变量
         $.each(data,function(InfoIndex,Info){
            
         }
       )};
    })
```
### 260 请简述同步和异步的区别

解析:
同步是指发送方发出数据,等接收方发回响应以后才发下一个数据包的通信方式
异步是指发送方发出数据后,不等接收方发回响应,接着发送下一个数据包的通信方式

### 261 请写一段代码,判断当前脚本运行在浏览器中还是node坏境中
解析:
判断Global对象是否为window,如果不为window,那么当前脚本没有运行在浏览器中

### 262 location.search()是什么?
解析：
设置或获取网页地止跟在问号后面的部分
当以get方式在URL中传递了请求参数时,可以利用location的search属性提取参数的值

### 263道,模拟一个HashTable类,包含add,remove,contains,length方法



