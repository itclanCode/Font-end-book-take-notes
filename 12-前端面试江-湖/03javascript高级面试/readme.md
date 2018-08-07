### 146 this和a是什么?

```
   (function(a){
      console.log(this);
      return a;
   }).apply(0,[4,3]);
```
解析:这是this的作用域问题,这里的this并不指向函数,而是执行调用它的主体对象,a指的是接收的参数

### 147 

```
    (function(global,undefined){
       // code
    })()
    说说这段代码中,this和undefined的作用
```
解析:因为Ecmascript是从里到外执行的javascript执行的,因此把全局变量的window或jquery或jquery对象传进来,就避免了到外层去寻找,从而提高了效率undefined在老一辈的浏览器是不被支持的,直接使用会报错,Javascript框架要考虑到兼容性,因此增加一个形参:undefined

### 148 简述javascript中对this的理解,并举例s说明(至少两个场景)

解析:this代表的是函数运行时,自动生成的一个内部对象,只能在函数内部使用,比如:
```
   function test(){
      this.x = 1;
   }
```
随着函数使用场合的不同,this的值会发生变化,但是有一个总的原则,那就是this指的调用函数的那个对象

下面讨论一下四种情况：this的用法
情况一:纯脆的函数调用
这个是函数的最通常的用法,属于全局调用,因此this就代表全局对象Global
```
    function test(){
        this.x= 1;
        alert(this.x);
    }
    test();  // 1

```

### 149 在下拉菜单中,用户更改表单元素select中的值时,就会调用onchange事件处理程序

### 150 onclick事件处理程序用于在用户单机按钮时执行的函数

解析:事件就是用户或浏览器自身执行的某种动作,如click,load,mouseover都是事件的名称

### 151 下列哪项是按下键盘事件

A. onkeyDown B. onkeyPress C. keyCode D. onmouseover

解析:
1. keydown事件会在按下键盘时触发
2. keypress():keypress事件会在敲击按键时触发,我们可以理解为按下并抬起同一个按键

### 152. 写一段javascript,实现监听页面上所有a标签的click事件

解析:
原声的写法
document.getElementsByTagName("a").onclick = function(){
    
}
用Jquery的话就这么写
```
   $("a").click = function(){

   }
```
### 153 IE和标准DOM的事件模型有什么不同?

解析:IE 内核的浏览器事件模型是冒泡事件,也就是说,在IE内核下,事句柄的触发顺序是从childNode到parentNode

IE的内核是没有捕获事件过程的,那么在DOM标准的浏览器中,事件传播的过程又是怎么样的？

DOM标准的浏览器中多了一个事件捕获过程,也就是说,当开发者在一个元素上注册了事件后,这个事件的响应顺序是从window(顶层)开始一级一级地向下传播,然后到了该元素后事件捕获过程结束,事件开始冒泡,一级一级向父级元素冒泡,当然了,开发者可以很轻松的决定DOM标准的浏览器中事件需要在哪个传播过程触发,这就需要谈一下事件的注册机制

DOM标准的浏览器事件是通过addEventListener方法注册的,而IE内核的浏览器则是通过attachEvent方法注册的

### 155 怎么使用事件,IE和DOM事件模型之间有那些主要差别?

解析:
使用事件
1. 当我们要阻止浏览器中某个DOM元素的默认行为时,在w3c标准里调用e.preventDefault(),而在IE下通过设置window.evnet.returnValue = false;来实现
2. 当我们要阻止冒泡事件时,在w3c标准里调用e.stopProgation(),而在IE下通过设置window.event.cancelBubble = true;来实现
3. 差别
4. Traditional Module
5. 传统方式的事件模型即直接在DOM元素上绑定事件处理器,例如:
```
    window.onload = function(){...}
    obj.onmouseover = function(){...}
    obj.onclick = function(){...}
```
首先这种方式无论是在IE还是firefox等其他浏览器上,都可以成功运行,这便是它最大的优势,而且在event处理函数内部的this变量无一例外都被绑定到当前DOM元素,这使得javascript程序员可以大大的利用this关键字做很多的事情,至于它的缺点也很明显,就是传统方式支持Budding,而不支持capturing,并且在DOM元素上一次只能绑定一个事件处理器,无法实现多个Handler绑定,最后就是function参数中的event参数只对非IE浏览器有效果(因为ie有window.event)
2. w3c Event module
3. firefox等浏览器很坚决地遵循w3c标准来定制浏览器事件模型,使用addEventListener和removeEventListener两个函数
```
   window.addEventListener("load",function(){},false)
   document.body.addEventListener("keypress",function(){},false)
   obj.addEventListner("mouseover",MV,true);
   function MV(){..}
```
addEventListener带三个参数,第一个参数是事件类型,就是我们熟悉的那些事件名字去掉前面的'on',第二个参数就是处理函数,可以直接给函数自变量或者函数名,第三个参数是boolean值,表示事件是否支持capturing
w3c的事件模型优点是Bubbing和capturing都支持,并且在一个DOM元素上绑定多个事件处理器,各自并不会冲突,并且在处理函数内部时,this关键字仍然可以使用只想被绑定的DOM元素,另外functio参数列表的第一个位置(不管是否显示调用)永远都是event对象的引用

至于它的缺点,很不幸的就是在市场份额最大的IE浏览器下不可使用这一点

3. IE event Module
IE自己的事件模型跟w3c类似,但主要是通过attachEvent和detachEvent个函数来实现的,依旧看几个例子
```
  window.attachEvent("onload",function(){})
  document.body.attachEvent("onkeypress",myKeyHandler)
```
可以发现,它跟w3c的区别就是没有第三个参数,而且第一个表示事件类类型的参数也必须把"on"加上
这种方式的优点就是在同一个DOM元素上能绑定多个事件处理函数
至于它的缺点,为什么如今在实际开发中很少见呢?首先IE浏览器本身只支持Budding,不支持Capturing,而且在事件处理的function内部,this关键字也无法使用,因为this永远都只想得到window object这个全局对象,要想得到event对象,必须通过window.event方式,最后一点,在别的浏览器中,它显然是无法工作的

### 156 IE和firefox事件对象怎么处理兼容性的?
解析:
如果在使用javascript时涉及event处理,就需要知道event在不同的浏览器中的差异,主要的javascript事件模型有三种,他们分别是NN4,IE4

1. window.event
2. 分析说明:先看一段代码
```
    function et(){
        alert(event);
    }
```
以上代码在IE中运行的结果是[object],而在firefox中无法运行
因为在IE中event作为window对象的一个属性可以直接使用,但是在firefox中却使用了dw3c模型,它是通过传参的方式来传播事件的,也就是说你需要为你的函数提供一个事件的响应的接口
兼容处理:添加对event的判断,根据浏览器的不同来得到正确的event
```
   function et(){
       evt = evt?evt:(window.event?window.event:null);
       // 兼容IE和firefox
       alert(evt);
   }
```
2. 键盘值的取得
分析说明：IE和firefox获取键盘值的方式不同,可以理解为,firefox下的event.which与IE下的evet.keyCode相当 
```
    function myKeyPress(evt){
      // 兼容IE和firefox获得keyBoardEvent对象
      evt =  (evt)?evt:(window.event)?window.event:"")
      // 兼容IE和firefox获得keyboardEvent对象的键值
      var key = evt.keyCode?evt.keyCode:evt.which;
      if(evt
      }
    }

```
3. 事件源的获取

在使用事件委托时,通过事件源获取来判断事件到底来自哪个元素,但是在IE下,event对象有srcElement属性,却没有target属性,在firefox下,even对象有target属性,却没有srcElement属性
兼容性处理:
```
ele = function(evt){
   evt = evt || window.event;
   return (obj=event.srcElemt?event.srcElement:event.target;)
}
```

4. 事件监听

在事件监听处理方面,IE提供了attachEvent和detachEvent两个接口,而firefox提供的是addEventListener和removeEventListener
兼容处理:最简单的兼容性处理就是封装这两套接口
```
   function addEvent(elem,eventName,handler){
     if(elem.attachEvent){
         elem.attachEvent("on"+eventName,function(){
            handler.call(elem);
            // 此处使用回调函数call()，让this指向elem
         }
     }else{
        elem.addEventListener(eventName,handler,false);
     }
   }
   function removeEvent(elem,eventName,handler){
    if(elem.detachEvent){
      elem.detachEvent("on"+eventName,function(){
         handler.call(elem);
      }else if(elem.removeEventListener){
         elem.removeEventListener(eventName,handler);
      }
      }
    }
   }

```
5. 鼠标位置
在IE下,event对象有x,y属性,但是没有pageX,pageY属性,在firefox下,event对象有pageX,pageY属性,但是没有x,y属性

### 157 如何为元素绑定多个事件,要求同时支持firefox和IE

解析:
event = event || window.event; //  使event兼容firefox与IE
firefox的firebug,不仅能测试js,还能检测css错误
要测试ie,就用IEtest,它几乎测试IE 所有版本,用法也很方便,至于js对不同浏览器的兼容注意事项,的确很多,下面给出的仅仅只是一部分

一般还是建议采用jQuery,prototype等一些处理好了兼容的脚本库,更重要的是,他们简化了很多操作,还提供了平常你很难实现的增强功能

## 158 请写一个通用的事件侦听器函数

解析:
关于JavaScript中的事件监听大家用的比较多了,无非就是 判断浏览器是否支持addEventListener和attachEvent，网上搜素关于事件监听的的方法也有很多,但是总有些不是很完善

### 简述javascript的事件模型

解析:
1. 原始事件模型
属性事件处理模式如下:

1. 基本事件处理,其实大多数人使用javascript事件处理模式都是这种代码方式
2. 事件类型,分为输入事件(如onclick)和语义事件(如onsubmit)

2. 标准事件模型
DOM2对其作了标准化
1. 先有document向目标对象传播,称为捕捉阶段
2. 目标对象的事件处理程序运行
3. 从目标对象向document

3. IE事件模型 
1. 传播过程只起泡,不捕捉,起泡中断方法:window.event.cancelBulle = true;
2. event对象不是事件处理程序的函数参数,而是window的全局变量
3. 事件注册函数attachEvent()和反注册函数detachEvent()

### 161 javascript中mouseover与mouseenter,mouseout与mouseleave的区别

解析:
mouseover与mouseenter的区别
1. 不论鼠标指针穿过被选元素或子元素,都会触发mouseover事件
2. 只有在鼠标指针穿过被选元素时,才会触发mouseenter事件
mouseout与mouseleave的区别
* 不论鼠标指针离开被选元素还是任何子元素,都会触发mouseout事件
* 只有在鼠标指针离开被选元素时,才会触发mouseleave事件

### 162 简述addEventLisstener和attachEvent的作用,两者是否有区别?

解析:
1. 支持的浏览器
2. addEventLisstener在支持DOM2的浏览器中使用:如firefox，chrome等

2. 处理程序执行阶段

1. attachListener的第三个参数为true时,在捕获阶段执行,为false时,在冒泡阶段执行
2. attachEvent均在冒泡阶段执行

3. 作用域

1. addEventListener的作用域为元素作用域,this为element引用
2. addEvent的作用域为全局作用域,this为window引用

4. 事件处理程序执行顺序
1. addEventHander:执行顺序与添加顺序一致
2. attachEvent:执行顺序与添加顺序相反

### 163. document.load和document.rady有何区别 

页面加载完成两种事件,一是ready,表示文档结构已经加载完成(不包含图片非等文字媒体文件),二是:onload,表示页面包含图片等文件在内的所有元素加载完成

### 绑定事件监听函数

绑定啥时间的另一种方法是用addEvenListener()或attachEvent()来绑定事件监听函数

### 166. JavaScript进行表单验证的目的是:检查提交的数据必须符合实际

### 174 在form表单中get与post方式提交的区别

解析:
1. get是从服务器上获取数据,post是向服务器传送数据
2. get是把参数数据队列加到提交表单的action属性所指的url中,值和表单内各个字段一一对应,在URL中可以看到,post是通过HTTPpost机制,将表单内各个字段与其内容放置在HTML HEADER内一起传送到action属性所指的URL地止,用户看不到这个过程
3. get穿搜索那个数据量较小,不能大于2KB,post穿搜索那个的申诉局量较大,一般默认为不受限制,但理论上,IIS4中最大值为80KB,IIS5中最大值为100KB
4. get安全性非常低,post安全性较高
5. get限制form表单的数据集的值必须上司ASII字符,不是ASCII字符时要转换为ASCII字符

### 177 在form中的input有哪些类型?

解析:
类型有:text,radio,checkbox,file,button,image,submit,reset,hidden
submit是button的一个特例,也是bbutton的一种,它把提交这个动作自动集成了,如果表单在单机提交按钮后需要用javascript进行处理(包括输入验证)后提交的话,那么必须把submit改成button,即取消其自动提交的行为, 否则，将会造成提交两次的结果,对于动态网页来说,也就是对数据库操作两次
1. button具有name,value属性,能触发onclick事件
2. submit继承了button
3. button提交的是innerText
4. submit增加了触发表单onsubmit事件的功能,增加了执行表单的submit方法的功能呢
5. input type=submit，按回车提交表单

### 187 call和apply的区别
解析:
对于第一个参数,其意义都一样,但对第二个参数：apply传入的是一个参数数组,也就是将多个参数组合成一个数组传入,而call则作为call的参数传入,从第二个参数开始,如func.call(func2,var1,var2,var3);对应的apply写法为
func.apply(func1,[var1,var2,var3]);
同时使用apply的好处就是死可以直接将当前函数的arguments对象作为apply的第二个参数传入

### 188 call的作用是什么?它的参数是如何传递的?
call方法在msdn中的解释为:调用一个对象的方法,以另一个对象替换当前对象
javascript中,call的语法为call(thisObj,arg1,arg2..argn)
1. 参数thisObj:可选项,将被用作为当前对象的对象
2. 参数arg1,..argn;可选项，将被传递方法参数序列










