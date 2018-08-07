### 构造jQuery对象

jQuery对象是一个类数组对象,含有连续的整型属性,length属性和大量的jQuery方法,jQuery对象由构造函数jQuery()创建,$()则是jQuery()的缩写

### 构造函数jQuery()

如果调用构造函数jQuery()时传入的参数不同,创建jQuery对象的逻辑也会随之不同,构造函数jQuery()有七种用法:如下图所示

#### 2.1.1 JQuery(selector[,context])

如果传入一个字符串参数,JQuery会检查这个字符串是选择器表达式还是HTML代码,如果是选择器表达式,则遍历文档,查找与之匹配的DOM元素,并创建一个包含了这些DOM元素引用的jQuery对象,如果没有元素与之匹配,则创建一个空JQuery对象,其中不包含任何元素,其属性length等于0,字符串参数是HTML代码的情况

默认情况下,对匹配元素的查找将从根元素document独享开始,即查找范围是整个文档树,不过也可以传入第二个参数context来限定查找范围,context称为选择器上下文,或简称上下文,例如：在一个事件监听函数中,可以像下面这样限制查找范围
```
    $('div.foo').click(function(){
       $("span",this).addClass('bar');  // 限定查找范围
    })
```
在这个例子当中,对选择器表但是"span"的查找被限制在了this的范围内,即只有被点击元素内的span元素才会被添加类样式bar
如果选择器表达式selector是简单的“#ID”，且没有指定上下文context,则调用浏览器原生方法document.getElement-ById()查找属性id等于指定值的元素,如果是比#id复杂的选择器变得哦啊好似或指定了上下文，则通过jQuery方法.find()查找，因为$('span',this)等价于$(this).find('span');
至于find()方法，会调用css选择器引擎sizzle实现

### 2.1.2 jQuery(html[,owerDocument]),jQuery(html,props)

如果传入的字符串参数看起来像一段HTML代码,例如：字符串中含有`<tag>`jQuery则尝试用这段HTML代码创建新的DOM元素,并创建一个包含了这些DOM元素引用的JQuery对象,例如:下面的代码将把HTML代码转换成DOM元素并插入body节点的末尾
$('<p id='test'>My <em>new</em></p>').append('body');
如果HTML代码时一个单独的标签,例如:$('<img />')或$('<a></a>a>'),JQuery会使用浏览器原生方法document.createElement()创建DOM元素,如果是比单独标签更复杂的HTML片段,例如上面的例子中的$('<p id="test"></p>');则是利用浏览器的innerHTML机制创建DOM元素,这个过程有方法jQuery.buildFragment()和方法JQuery.clean()实现

第二个参数ownerDocument用于指定创建新的DOM元素的文档,如果不传入,则默认为当前的文档对象

如果HTML代码时一个单独的标签,那么第二个参数还可以是props,props是一个包含了属性,事件的普通对象,在调用document.createElement()创建DOM元素后,参数props会被传给jQuery方法的.attr()然后由.attr()负责把参数props中的属性,事件设置到新创建的DOM元素上

参数props的属性可以是任意的事件类型(如click),此时属性值应该是事件监听函数,它将绑定到新创建的DOM元素上,参数props可以含有以下特殊属性：val(),css(),html(),text(),data(),width(),height(),offset()将被执行,并且属性值会作为参数传入,其他类型的属性则会被设置到新创建的DOM元素上,某些特殊属性还会做跨浏览器兼容如type,value,tabindex等,可以通过属性名class设置类样式,但要引号把class包裹起来，因为class是javascript保留字,例如,在下面的例子中创建一个div元素,并设置类样式为test,设置文本内容为click me,绑定一个click事件,然后插入body节点的末尾,当点击该div元素时,还会切换类样式test
```
   $('<div />',{
      "class":"test",
      text:"click me",
      click:function(){
        $(this).toggleClass("test");
      }
   }).appendTo("body")

```
### 2.1.3 jQuery(element),jQuery(eleementArray)

如果传入一个DOM元素或DOM元素数组,则把DOM元素封装到jQuery对象中并返回,这个功能常见于事件监听函数,即把关键字this引用的DOM元素封装为jQuery对象,然后在该JQuery对象上调用jQuery对象调用jQuery方法,例如:在下面的例子中,先调用$(this)把被点击的div元素封装为JQuery对象,然后调用方法slideUp()以滑动动画隐藏该div元素

```
   $("div.foo").click(function(){
      $(this).slideUp();
   })
```

### 2.1.4 JQuery(object)

如果传入一个普通javascript对象,则把该对象封装到JQuery对象中并返回

这个功能可以方便地在普通javascript对象上实现自定义事件的绑定和触发,例如,执行下面的代码会在对象foo上绑定自定义事件custom,然后手动触发这个事件,执行绑定custom事件监听函数,如下所示:

```
   // 定义一个普通javascript对象
   var foo = {
      foo:'bar',
      hello:'world'
   }
   // 封装成JQuery对象
   var $foo = $(foo);
   // 绑定一个事件 
   $foo.on('custom',function(){
       console.log('custom event was called');
   })
   // 触发这个事件
   $foo.trigger('custom');  // 在控制台打印custom event was caled 

```
### 2.1.6 JQuery(callback)

如果传入一个函数,则在document上绑定一个ready事件监听函数,当DOM结构加载完成时执行,ready事件的触发要早于load事件,ready事件并不是浏览器原生事件,而是DOMContentLoaded事件,onreadystatechange事件和函数doScrollCheck()的统称
### 2.1.6 JQuery(jQuery object)
 如果传入一个JQuery对象,则创建该JQuery对象的一个副本并返回,副本与传入的JQuery对象引用完全相同的DOM元素

 ### 2.1.7 JQuery()

 如果不传入任何参数,则返回一个空的JQuery对象,属性length为0,注意,在Jquery1.4之前,会返回一个含有document对象的JQuery对象

 这个功能可以用来复用JQuery对象,例如:创建一个空的JQuery对象,然后在需要时先手动修改其中的元素,在调用JQuery方法,从而避免重复创建jQuery对象

 

