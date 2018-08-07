### 1.1 设计理念

jQuery是一个javascript库,倡导写得更少,做得更多

JQuery的核心特性可以总结为:

* 兼容主流浏览器,支持IE6，Chrome,firefox.6+,opera等
* 具有独特的链式语法和短小清晰的功能接口
* 具有高效灵活的css选择器,并且对css选择器进行拓展
* 拥有便捷的插件拓展机制和丰富的插件

### 1.2 总体架构

jQuery的模块可以分为3部分：入口模块,底层支持模块和功能模块

在构造jQuery对象的模块中,如果在调用构造函数jQuery()创建jQuery对象时传入了选择器表达式,则会调用选择器sizzle遍历文档,查找与之匹配的DOM元素,并创建一个包含了这些DOM元素引用的jQuery对象

选择器Sizzle是一款纯javascript实现css选择器的引擎,用于查找与选择器表达式匹配的元素集合

工具方法模块提供了一些编程辅助方法,用于简化对jQuery对象,DOM元素,数组,对象,字符串等的操作,例如,JQuery.each(),each(),jQuery.map(),map()等,其他所有的模块都会用到工具方法模块

在底层支持模块中,回调函数列表模块用于增强对回调函数的管理,支持添加,移除,触发,锁定,禁用回调函数等功能:异步队列模块用于解耦异步任务和回调函数,它在回调函数列表的基础上为回调函数增加了状态,并提供了多少个回调函数列表,支持传播任意同步或异步回调函数的成功或失败状态,数据缓存模块用于对DOM元素和javascript对象附加任意类型的数据,队列模块用于管理一组函数,支持函数的入队和出队操作,并确保函数按顺序执行,它基于数据缓存模块实现

在功能模块中,事件系统提供了统一的事件绑定,响应,手动触发和移除机制,它并没有将事件直接绑定到DOM元素上,而是基于数据缓存模块来管理事件,Ajax模块允许从服务器上加载数据,而不刷新页面,它基于异步队列模块来管理和触发回调函数,动画模块用于向网页中添加动画下过,它基于队列模块来管理和执行动画函数,属性操作模块用于对HTML属性和DOM属性进行读取,设置和移除操作,DOM遍历模块用于在DOM树中遍历父元素,子元素和兄弟元素,DOM操作模块用于插入,移除,复制,和替换DOM元素,样式操作模块用于获取计算样式或设置内联样式,坐标模块用于读取或设置DOM元素文档坐标,尺寸模块用于获取DOM元素的高度和宽度
代码-1.7.1.js总体架构 
```
   (function(window,undefined){
      // 构造jQuery对象
      var JQuery = (function(){
          var jQuery =  function(selectory,context){
             return new JQuery.fn.init(selector,context,rootjQuery);
          }
      })
      return jQuery;
   })(window)
```
* 工具方法utilities
* 回调函数列表Callbacks Object 
* 异步队列 Deferred Object 
* 浏览器功能测试 Support 
* 数据缓存Data 
* 队列Queue 
* 属性操作 Attributes
* 事件系统 Events
* 选择器 Sizzle 
* DOM遍历 Traversing
* DOM操作 Manipulation
* 样式操作 css(计算样式,内联样式)
* 异步请求Ajax
* 动画Effects
* 坐标offset,尺寸,Dimensions
* window.jQuery = window.$ = jQuery

### 1.3 自调用的匿名函数

自调用匿名函数,当浏览器加载完jQuery文件后,自调用匿名函数就会立即开始执行,初始化jQuery的各个模块,比如代码
```
   (function(window,undefined){
      var jQuery = ...
       window.jQuery = window.$ = jQuery;
   })(window);
```
上面的这段代码涉及一些javascript基础知识和编码习惯
#### 为什么要创建这样一个自调用的匿名函数?

通过创建一个自调用匿名函数,创建了一个特殊的函数作用域,该作用域中的代码不会和已有的同名函数,方法和变量以及第三方库冲突,由于jQuery会被应用在成千上万的javascript程序中,所以必须确保jQuery的代码不会受到其他代码的干扰,并且jQUery的代码不能破坏和污染全局变量以至于影响到其他代码,这一点是任何一个javascript库和框架所必须具备的功能

注意,这个自调用的匿名函数的最后,通过手动吧变量jQuery添加到window对象上,明确的使用变量jQuery成为公开的的全局变量,而其他的部分将是私有的

另外,自调用匿名函数还可以有两种等价的写法,如下所示:
```
// 写法1(常见系非法,也是jQuery所采用的)
(function(){
  //..
})()
// 写法2
(function(){
  // 
}())
// 写法3 
!function(){

}

```
#### 2. 为什么要为自调用匿名函数设置wwindow,并传入window对象?

通过传入window对象,可以使window对象变为局部变量(即把函数参数作为局部变量使用),这样挡在jQuery代码块中访问window对象时,不需要将作用域链中访问window对象时,不需要将作用域链回退到顶层作用域,从而可以更快的访问到window对象,这是原因之一,另外，将window对象作为传入,可以在压缩代码时进行优化
```
   (function(a,b){})(window)
   // 参数window被压缩成a,参数udnefined被压缩成b
```

#### 3. 为什么要自调用匿名函数设置参数undefined？

特殊值udneifned是window对象的一个属性,例如：执行下面的diamante会弹出true
```
 alert("undeifined" in window)  // true
```
通过把参数undeinfe作为局部变量使用,但是又不传入任何值,可以缩短查找undefined时的作用域链,并且可以在压缩代码时进行优化,如前面的代码所示,参数undefined会被压缩成b

另外,更重要的原因是,通过这种方式可以确保参数undeinfend是undeifneind,因为undeinfiend有可能会被重写为新的值,可以用下面的代码来尝试修改undeinfied的值,在各个浏览器中测试结果

#### 4. 注意到自调用匿名函数最后的分号;了？

通常在JavaScript中,如果语句分别防止在不同的行中,则分号;是可选的,但是对于自调用匿名函数来说,在之前或之后省略分号都可能会引起语法错误,例如:执行下面的两个例子,就会抛出异常

在下面的代码中,如果自调用匿名函数的前一行末尾没有加分号,则自调用匿名函数的第一对括号会被当做是函数调用
```
  var n = 1;
  (function(){})()  // typeError:number is not a function 
```
例2. 在下面的代码中,如果未在第一自调用匿名函数的末尾加分好,则下一行自调用匿名函数的第一对括号会被当做是函数调用
```
(function(){})()
(functon(){})()
// typeError:undeinfed is not a function 

```
所以在使用自调用匿名函数时,最好不要省略自调用匿名函数之前和之后的分号

### 1.4 总结

