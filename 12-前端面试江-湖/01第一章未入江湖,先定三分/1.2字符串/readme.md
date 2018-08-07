### 1.2 字符串

### 004 如何截取字符串www.itclan.cn 中的itclan？

解析:采用substr方法
定义和用法:substr方法用于返回一个从指定位置开始的指定长度的子字符串
语法:stringObject.substr(start,[,length]);
参数描述:
* start必需:它是所需的子字符串的起始位置,字符串中的第一个字符串的缩影为0
* length可选,指定返回的子字符串中应包括的字符个数
示例代码
```
    var siteurl = 'www.itclan.cn' 
    var result = siteurl.substr(4,5);
    console.log(result);
```
### 005 判断字符串是否是这样组成的,第一个必须是字母,后面可以是字母,数字,下划线,总长度为5~20

解析:采用正则的匹配方法,^[a-z]是匹配小写的26个字母,[A_Z]是匹配大写的26个字母,{n}表示匹配几位,\w,表示任意的字母,数字,下划线
注意:正则有大小写之分
代码如下:
```
var c = /^[a-zA-Z]{1}\w{4,19}/
```
### 006编写一个方法,求一个字符串的长度

代码如下
```
    function getLength(str){
       return str.length;
    }
    var result = getLength("www.itclan.cn")

```
### 007 给你一个字符串string="adadfdsetffqdijsdjkfjskgskgksd";要求你找出里面的字符串qdijs使用javascript实现
解析:这里要用到indexOf()
返回字符indexof(string)中字符串string在父串首次出现的位置,从0开始,没有返回-1,方便判断和截取字符串
代码如下:
```
    var str =  "adadfdsetffqdijsdjkfjskgskgksd";
    var search = "qdijs";
    var start = str.indexOf(search);
    var result = str.substring(start,start+search.length);
```

### 008 如何获取浏览器URL中查询字符串的参数
解析:
```
    function getQuery(name){
       var reg = new RegExp("^(^|&)"+name+"=([^&]*)(&|$)");
       var r = window.location.search.substr(1).match(reg);
       if(r!=null){
           return unescape(r[2]);
           return null;
       }
    }
```
### 009 如何实现一个删除字符串左边空白字符的方法?

解析:
去掉字符串左边的空格
```
    function leftTrim(str){
        return str.replace(/^\s*/g,"");  // ^符号表示从头开始(即左边)进行匹配
    }
```

### 10 javascript的typeof都返回那些数据类型?

解析:undefined,boolean,string,number,null,Object,function

### 11. 写出一下语句运算结果的语句:
* A. typeof(null)
* B. typeof(undefined)
* C. typeof(NaN)
* D. typeof(NaN==undefined)
解析:
A. Object B:undefined C:number D:boolean

### 12 "5"+3的结果是多少?为什么
解析:结果说是53,这时的"5"是一个字符串,“+”,起的作用,不是相加,所以结果是53

### 13 请自定义一个函数,实现字符串反转

解析:javascript实现字符串反转,主要把字符串从末尾开始的每一个元素截取后,在重新组成一个新的字符串,代码如下:
```
    function revStr(str){
       var tmpStr = "";
       for(var l = str.length-1;l>=0;l--){
           tmpStr+= str.charAt(1);
       }
       return tmpStr;
    }
    var str = "abcdef";
    console.log(revStr(str));
``` 

### 14 字符串操作主要有那些

1. 求字符串长
2. 字符串赋值
3. 连接字符串操作
4. 求子串
5. 字符串定位
6. 子串定位
7. 字符串插入
8. 字符串删除
9. 字符串替换

### 15. 变量,javascript中变量声明有var与无var的区别

解析:
javascript中变量声明的作用域是以函数为单位的,在函数内部,有var与无var声明的变量是不一样的,有var声明的是局部变量,没var声明的是全局变量,在javascript的函数作用域内,声明的变量或内部函数在函数体内都是可见的,这意味着,函数在定义之前可能已经可用,函数定义有两种方式,一种是函数定义表大会,一种是函数声明语句,函数声明语句被提前到外部脚本或外部函数作用域的顶部,所以以这种方式声明的函数,可以被它定义之前出现的代码所调用,而函数定义表达式中,变量的声明被提前了,但是给变量的赋值是不会提前的,所以以表达式方式定义的函数在函数定义之前无法调用

在全局作用域内声明变量时,有var和无var是有区别的,使用var语句重复声明语句时合法且无害的,如果重复声明且带有赋值,那么就和一般的赋值语句没有差别,如果尝试读取没有声明过的变量,

### 16. 在javascript中,以下那个变量名hi非法的

A. Name B. 9Name C. Name_a  D. Name9

### 17. 在javascript中,全局变量在函数外声明,并可以从脚本的任意位置访问
解析:全局变量无论是在函数内部还是外部都可以访问,而局部变量只能在函数内部访问

### 18. javascript中如何检测一个变量是一个string类型,请写出函数实现

解析: 
```
var str = "hello world";
function isString(str){
    if(typeof str == "string" || str.constructor == String){
       return true;
    }else{
       return false;
    }
}

```

### 19 计算下面的变量值

```
    var a = (Math.PI++);
    var b = (Math.PI++);
    alert(a);
    alert(b);
```
解析:Math.PI是圆周率数值,输出是3.14592653589793,没有改变,说明系统对象的属性是只读的

### 20 有一个字符串abcd-ef-ghi,请用javascript将他处理成ghi&ef&abcd

解析: 
```
    var str = "abcd-ef-ghi";
    var arr1 =  str.split("-");
    var result =  arr1.reverse().join("&");
```
### 21 undefined变量和undeclared变量分别指什么?

解析:根本区别在于,undefined是javascript语言类型,而undeclared却实一种javascript语法错误,在javascript中两个表示空的值,undefined和null,其中比较有用的是undefined,undefined是一个值为undefined的类型,javascript语言也定义了一个全局变量,它的值是undefined,这个变量也成为undefined,但是这个变量不是一个常量,也不是一个关键字,这意味着他的值可以轻易被覆盖,为了能够避免可能对undefined值的改变,一个常用的技巧是使用一个传递到匿名包装器的额外参数,在调用时,这个参数不会获取任何值

而undeclared则是一种语法错误,其实访问undeclared的变量并非会中断浏览器执行,在浏览器运行上下文中,undeclared出来的变量简单可以认为没有var a这样的定义变量,JavaScript引擎执行的时候,由于无法找到其对应的上下文(scope),所以会简单的认为该变量是全局的变量,就会回吧该变量定义到window中去

### 22. javascript的两种变量范围有什么不同?

解析:全局变量:当前页面内有效
     局部变量:方法内有效

### 23 列举javascript中的数据类型

解析:
原始数据类型：
1. undefined类型 
undefined类型只有一个值,就会undefined,当声明变量为初始化时,该变量默认就是undefined,如果函数没有返回值,也会显示undefined

2. Null类型
Null类型(空型)只有一个值,就是Null

undefined实际上是从null派生而来的,所以显示true
undefined是申明了变量但未赋值,null是找不到对象

3. Boolean类型
非0即真,0可以看成false

4. Number类型

Number类型中所有值都在最大值和最小值之间,如果非数字NaN(niot a number)是一个特殊的值,判断是否是数字用isNaN()

5. String类型

理论上String可以无限制存放unicode字符,赋值是双引号和单引号都一样

复合数据类型:
function 函数类型[*]object对象类型,object本质是由一组无序的名值对组成的
array数组类型(它是一种特护的object对象类型),检查一个不变量的数据类型

### 024 javascript中基本数据类型有哪些?与primitive数据类型有哪些不同?

解析:在javascript中有4种基本的数据类型：数值(整数和实数),字符串型(用""或''扩起来的字符或数值),布尔型(用true或false表示),和空值,在javascript的基本类型中的数据可以是常量,也可以是变量
primitive数据类型有:byte(字节),short(短整型),int(整型),long(长整型),float(浮点型),double(双精度型),char(字符串)

### 27 要动态的改变层中的内容可以使用的方法有()

* A: innerHTML
* B: innerText
* C: 通过设置层的隐藏和显示来实现
* D: 通过设置层的样式属性的display属性

解析:通过改变Div的innerHTML属性动态的改变页面的内容,这种情况适合动态显示的内容较少时使用,所以,当动态显示的内容(如用户名,不能为空,占据一行时比较适合此种方法),使用mdiv.innerHTML = "html"代码,来动态改变页面内容

### 28 document.write和innerHTML的区别 
write是document对象的一个方法,是在页面里写内容,它会覆盖页面内容,是写死的,innerHTML是DOM元素对象的一个属性,用于设置内容

### 29 javascript中的三种弹出式消息提醒,分别是alert,confirm,prompt,请简要描述

1. alert 弹出警告框,在文本里面加入\n就可以换行
2. confirm: 弹出确认框,会返回布尔值,通过这个值可以判断单机时确认还是取消,tru表示单机了确认,false表示单机了取消
3. prompt-弹出输入框,单机确认,返回输入框中的值,单机取消返回null

### 36 单机一个按钮,如何刷新整个页面?

解析:首先介绍两个方法的语法
1):reload方法强迫浏览器刷新当前页面
2):location.reload([bForceGet])
参数:bForceGet,可选参数,默认为false,从客户端缓存里取当前页,如果为true,则以get方式,从服务端取最新的页面,相当于客户端单机"F5"刷新
replace方法通过指定URL来替换当前缓存历史里(客户端)的项目,因此,当使用replace方法之后,不能通过“前进”和"后退"来访问已经被替换的URL
语法：location.replace(URL);
在实际应用中,当重新刷新页面时,我们通常使用location.reload()或者是history.go(0),因为这种做法就像在是客户端单击"F5"刷新页面,所以页面的method="POST"的时候,会出现网页过期的提示,那是因为session的安全保护机制可以想到,当调用location.reload()方法时,此时aspx页面在服务端内存里已经存在,因此必定是IsPotback的,如果有这种应用,我们需要重新加载该页面,也就是说我们期望页面能够在服务端重新被创建,我们期望是Not isPostback的,这里,location.replace()就可以完成此任务,被replace的页面每次都在服务器端重新生成

### 037 javascript中获取元素有那几种方式?

解析:
1. document.getElementById()用于获得名为ID值的元素
2. document.myform.xxx 按照层次结构来获取
3. document.getElementsByTagName()用于获取所有的名字相同的元素

### 38 怎样创建,查找,删除DOM节点,如何修改DOM相应的属性?

解析:
创建DOM节点:var odiv = document.createElement('div');
查找DOM节点:getElementByID();
删除DOM节点:document.body.removeChild(oP);

### 41 nodeType是用来干什么?空白节点的nodeType等于多少?

解析:nodeType是用来判断节点类型的,nodeType等于3

### 43: 怎样添加,移除,复制,创建节点和查找节点?

解析:
appendChild添加节点
removeChild移除节点
cloneNode复制节点
createElement创建元素
getElementById,getElementsByTagName,getElementsByName查找节点

### 44 写出7个操作HTMLDOM对象的方法?

解析:getElementById(id)获取带有指定id的节点(元素)
removeChild(node):删除子节点(元素)
appendChild(node):插入新的子节点元素
createElement():用指定的标记名创建新的Element节点对象
createAttribute():用于指定名字创建新的Attr节点对象

### 45 列举文档对象模型DOM里document的常用查找的访问节点方法?

解析:
document.getElementById根据与爱尿素id查找元素 
document.getElementsByName根据元素name查找元素 
document.getElemetsByTagName根据标签名查找元素 

### 47 请说明javascript中的nodeName,nodeValue,和nodeType的区别

解析:
1. nodeName,nodeName属性含有某个节点的名称

* 元素节点的nodeName是标签名称
* 属性节点的nodeName是属性名称
* 文本节点的nodeName永远是#text 
* 文档节点的nodeName永远是#document

注意:nodeName所包含的XML元素的的标签名称永远是大写的
2. nodeValue

对于文本节点,nodeValue属性包含文本
对于属性节点,nodeValue属性包含属性值
nodeValue属性对于文档节点和元素节点是不可用的

3. nodeType

nodeType属性可返回节点的类型,最重要的节点类型是:

### 48 实现输出document对象中的所有成员的名称和类型

### 52 关键字与保留字的区别

解析:
从字面含义上理解,保留字是语言中已经定义过的字,使用者补鞥在将这些字作为变量名或过程名使用,而关键字则指在语言中有特定的含义,成为语法中一部分的那些字,在一些语言中,一些保留字可能并没有应用于当前的语法中,这就成了保留字与关键字的区别,一般出现这种情况可能是由于考虑了拓展性

### 53 javascript中有几种循环语句的写法?

解析:
1. for循环结构语句(可以嵌套)
2. for-in循环结构语句
3. while循环语句结构
4. do-whild循环语句结构

