### 块级作用域绑定

* var声明及变量提升(Hosting)机制
* 块级声明
  * let声明
  * 禁止重声明
  * const声明
  * 临时死区
* 循环中的块级作用域
  * 循环中的函数
  * 循环中的let声明
  * 循环中的const声明
* 全局块作用域绑定
* 块级绑定最佳实践的进化

之前的javascript中,何时创建变量要看怎么声明变量,Ecmascript6的新语法可以帮助更好的控制作用域,为什么经典的var声明容易让人迷惑,介绍Ecmaxript6新引入的块级作用域绑定机制及其最佳实践

### 块级作用域绑定 
### var 声明变量提升(Hoisting)机制
在函数作用域或者全局作用域中通过关键字var声明的变量,无论实际上是在哪声明的,都会被当成在当前作用域顶部的声明的变量,这就是我们常说的提升机制
```
    function getValue(condition){
       if(condition){
          var value = "blue";
          // 其他代码
          return value;
       }else{
           // 此处可访问变量value,其值为undefined
           console.log(value);
           return null;
       }
       // 此处访问变量value，其值为undeied
       console.log(value);
    }

```
如果你熟悉javascript,可能会认为只有当condition的值为true时才会创建变量value,事实上,无论如何变量vaule都会被创建,在预编译阶段,Javascript引擎会将上面的getValue函数修改下面这样
```
   function getValue(condition){
      var value;
      if(condition){
         value = "blue";
         // 其他代码 
         return value;
      }else{
         return null;
      }
   }
```
变量value的声明被提升至函数顶部,而初始化操作依旧留在原处执行,这就意味着在else子句中也可以访问到该变量,且由于此时变量尚未初始化,所以其值为undefined

刚接触javascript开发者通常会花时间来习惯变量提升,有时还会误以为这是javascript引擎的一个bug,所以ecmascript6引入块级作用域来强化对变量生命周期的控制

### 块级声明

块级声明用于声明在指定块级作用域之外无法访问的变量,块级作用域被称为词法作用域存在于
* 函数内部
* 块中(字符{和}之间的区域)
* 很多类c语言都有块级作用域,而ecmascript6引入块级作用域就是为了让Javascript更灵也更普适

### let 声明

let声明的用法与var相同,用let代替var来声明变量,就可以把变量的作用域限制在当前代码块中,由于let声明不会被提升,因此开发者通常将let声明语句放在封闭代码块的顶部,以便整个代码块都可以访问,下面是let声明的示例
```
    function getValue(condation){
       if(condation){
         let value = "blue";
         // 其他代码 
         return value;
       }else{
          // 变量value在此处不存在
          return null;
       }
       // 变量value在此处不存在
       console.log(value);
    }
```
现在这个getValue函数的运行结果更像类c语言,变量value改由关键字let进行声明后,不在被提升至函数顶部,执行流离开if块,value立刻被销毁,如果condition的值为false,就永远不会声明并初始化value

### 禁止重声明

假设作用域中已经存在某个标识符,此时再使用let关键字声明它就会抛出错误,举例来说:
```
var count =  30;
// 抛出语法错误
let count = 40;
```
在这个示例中,变量count被声明了两次,一次是用var关键字,一次是用let关键字,如前所述,同一个作用域中不能用let重复定义已经存在的标识符,所以此处的let声明会抛出错误,但如果当前作用域内嵌另一个作用域,便可在内嵌的作用域中用let声明同名变量,示例代码如下:
```
   var count = 30;
   if(condition){
     // 不会抛出错误
     let count = 40;
   }

```
由于此处的let是在if块内声明新变量count,因此不会抛出错误,内部块中的count会遮蔽全局作用域中的count,后者只有在if块外才能访问

### const声明 

Ecmascript6标准还提供了const关键字,使用const声明的是常量,其值一旦被设定后不可更改,因此,每个通过const声明的常量必须进行初始化,示例如下:
```
   // 有效的常量
   const maxItems = 30;
   // 语法错误,常量未初始化
   const name;

```
这里在声明maxItems时进行了初始化操作,而声明name时没有赋值,因此执行后者时会抛出语法错误

### const 与let

const与let声明都是块级标识符,所以常量也只在当前代码块内有效,一旦执行到块外会立即被销毁,常量同样也不会被提升至作用域顶部,示例代码如下
```
   if(condition){
     const maxItems = 5;
     // 更多代码
   }
  // 此处无法访问maxItems
```
在这段代码中,在if语句中声明了常量maxItems,语句执行一结束,maxItems即刻被销毁,在代码块外访问不到这个常量
与let相似,在同一个作用域用const声明已经存在的标识符也会导致语法错误,无论该标识符是使用var(在全局或函数作用域中)还是let(在块级作用域中)声明的,举例来说
```
   var message = "hello";
   let age = 25;
   // 这两条语句都会抛出错误
   const message = "GoodBye";
   const age = 30;
```
后两条const声明语句本身没有问题,但由于前面用var和let声明了两个同名变量,结果代码就无法执行了
尽管相似之处很多,但const声明与let声明有一处很大的不同,即无论在严格模式还是非严格模式下,都不可以为const定义的常量在赋值,否则会抛出错误,例如:
```
   const maxItems = 5;
   // 抛出语法错误
   maxItems = 6;
```
Ecmascript6中的常量与其他语言中的很像,此处定义的maxItems不可在被赋值,然而,与其他语言中的常量不同的是,javascript中的常量如果是对象,则对象中的值可以修改

### 用const声明对象

记住用const声明不允许修改绑定,但允许修改值,这也就意味着用const声明对象后,可以修改该对象的属性值
```
   const person = {
      name:'Nicholas'
   }
   // 可以修改对象属性的值
   person.name = "Greg";
   // 抛出语法错误
   person = {
      name:"Greg"
   }
```
在这段代码中,绑定person的值的一个包含一个属性的对象，改变person.name的值,不会抛出任何错误,因为修改的是person包含的值,如果直接给person赋值,既要改变person的绑定,就会抛出错误,切记const声明不允许修改绑定,但允许修改绑定的值

### 临时死区
与var不同,let和const声明的变量不会被提升到作用域顶部,如果在声明之前访问这些变量,即使是相对安全的typeof操作符也会触发引起错误
```
   if(condition){
     console.log(typeof value);
     let value = "blue";
   }
```
由于console.log(typeof value)语句会抛出错误,因此用let定义并初始化变量value语句不会执行,此时的value还位于javascript社区临时区
javascript引擎在扫描代码发现变量声明时,要么将他们提升至作用域顶部(遇到var声明),要么将声明放到TDZ中(遇到let和const声明),访问TDZ中的变来个会触发运行时错误,只有执行过变量声明语句后,变量才会从TDZ中移出,然后方可正常访问

在声明前访问由let定义的变量就是这样,由前面示例可见,即便是相对不易出错的typeof操作符也无法阻挡引擎抛出错误,但在let声明的作用域外对该变量使用typeof则不会报错
```
   console.log(typeof value);  // undeinfeind
   if(condition){
      let value = "blue";
   }
```
typeof是在声明变量value的代码块外执行的,此时value并不在TDZ中,这也就意味着不存在value这个绑定,typeof操作最终返回undeined

TDZ只是块级绑定的特色之一,而在循环中使用块级绑定也是一个特色

### 循环中的块级作用域绑定

开发者可能最希望实现for循环的块级作用域了,因为可以把随意声明的计数器变量限制在循环内部,例如类似这样的代码在javascript中很常见
```
   for(var i = 0;i<10;i++){
     process(items[i]);
   }
   console.log(i); // 10
```
在默认拥有块级作用域的其他语言中,这个示例也可以正常的运行,并且变量i只在for循环中才能访问得到,而在javascript中,由于var声明得到了提升,变量i在循环结束后仍可以访问,如果换用let声明变量就能得到想要的结果,就像这样
```
   for(let i = 0;i<10;i++){
      process(items[i]);
   }
   // i在这里不可访问,抛出一个错误
   console.log(i);
```
在这示例中,变量i只存在于for循环中,一旦循环结束,在其他的地方均无法访问变量

### 循环中的函数 

一直以来,var申明的变量让开发者在循环中创建函数变得异常困难,因为变量到了循环之外仍然能够访问,请看这段代码
```
    var funcs = [];
    for(var i = 0;i<10;i++){
       funcs.push(function(){
          console.log(i);
       })
    }
    funcs.forEach(function(){
       func();   // 输出10次数字10
    })
```
你预期的结果可能是输出数字0-9,但它却一连串输出10次数字10,这是因为循环里的每次迭代同时共享着变量i,循环内部创建的函数全都保留了对相同变量的引用,循环结束时变量i的值为10,所以每次调用console.log(i)时就会输出数字10
为了解决这个问题,开发者们在循环中使用立即调用函数表达式,以强制生成计数器变量的副本,就像这样
```
   var funcs = [];
   for(var i = 0;i<10;i++){
      funcs.push((function(value){
         return function(){
            console.log(value);
         }
      }(i)))
   }
   funcs.forEach(function(func){
      func();
   })
```
在循环内部,IIFE表达式为接受的每一个变量i都创建了一个副本并存储为变量value,这个变量的值就是相应迭代创建的函数所使用的值,因此调用每个函数都会像从0到9循环一样得到期望的值,Ecmascript6中的let和const提供的块级绑定让我们无须在这么折腾

### 循环中的let声明

let声明模仿上述示例中IIFE所做的一切简化循环过程,每次迭代循环都会创建一个新变量,并以之前迭代中的同名变量的值将其初始化,这意味着你彻底删除IIFE之后仍可得到预期中的结果,就像这样
```
   var funcs = [];
   for(let i = 0;i<10;i++){
      funcs.push(function(){
          console.log(i);
      })
   }
   funcs.forEach(function(func){
       func();
   })
```
这段循环与之前那段结合了var和IIFE的循环的运行结果相同,但相比之下更为简洁,每次循环时候let都会创建一个新变量i,并将其初始化为i的当前值,所以循环内部创建的每个函数都能得到属于他们自己的i的副本,对于for-in循环和for-of循环来说也是一样的,示例如下:
```
   var funcs = [];
   object = {
      a:true,
      b:true,
      c:true
   }
   for(let key in object){
      funcs.push(function(){
        console.log(key);
      })
   }
   funcs.forEach(function(func){
      func();
   })
```
在这个示例中,for-in循环与for循环表现的行为一直,每次循环创建一个新的key绑定,因此每个函数都有一个变量key的副本,于是每个函数都输出不同的值,如果使用var声明key,则这些函数都会输出"c"
let声明在循环内部的行为是标准中专门定义的,它不一定与let的不提升特性相关,理解这一点至关重要,事实上,早期的let实现不包含这一行为,是后来加入的

### 循环中的const声明 

Ecmascript6标准中没有明确指明不允许在循环中使用const声明,然而,针对不同类型的循环它会表现出不同的行为,对于普通的for循环来说,可以在初始化变量时使用const,但是更改这个变量的值就会抛出错误,就像这样
```
   for(const i = 0;i<10;i++){
      funcs.push(function(){
         console.log(i);
      })
   }
```
在这段代码中,变量i被声明为常量,在循环的第一个迭代中,i是0,迭代执行成功,然后执行i++,因为这条语句试图修改常量,因此抛出错误,所以,如果后续循环不会修改该变量,那可以使用const声明
在for-in或for-of循环中使用const的行为与使用let一致,下面这段代码应该不会产生错误
```
  var funcs = [],
      object = {
        a:true,
        b:true,
        c:true
      }
    // 不会产生错误
    for(const key in object){
       funcs.push(function(){
           console.log(key);
       })
    }
    funcs.forEach(function(func){
       func();
    })
```
这段代码中的函数与循环中的let声明一节中第二个示例几乎完全一样,唯一的区别就是在循环内不能改变key的值,之所以可以运行在for-in和for-of循环中,是因为每次迭代不会(像前面for循环的例子一样)修改已有绑定,而是会创建一个新绑定

### 全局块作用域绑定

let和const与var的另外一个区别是他们在全局作用域中的行为,当var被用于全局作用域时,它会创建一个新的全局变量作为全局对象(浏览器坏境)中的window对象的属性,这意味着用var很可能会无意中覆盖一个已经存在的全局变量,就像这样
```
// 在浏览器中
var regExp = "hello";
console.log(window.RegExp);  // "hello"

var ncz = "Hi";
console.log(window,ncz);  // "Hi"

```
即使全局对象RegeExp定义在window上,也不能幸免于被var声明覆盖,示例中声明的全局对象RegExp会覆盖原来那个,同样,ncz被定义为一个全局变量,并且立即成为window属性,javascript过去一直都是这样
如果你在全局作用域中使用let或const，会在全局作用域下创建一个新的绑定,但该绑定不会添加为全局对象的属性,换句话说,用let或const不能覆盖全局变量,而只能遮蔽它
```
  // 在浏览器中 
  let RegExp = "Hello";
  console.log(RegExp);   // "Hello"
  conosle.log(window.RegExp === RegExp);

  const nac = "Hi";  
  console.log(ncz);  // Hi 
  console.log("ncz" in window);  // false
```
这里let声明的RegExp创建了一个绑定并遮蔽了全局的RegExp变量,结果是window.RegExp和RegExp不相同,但不会破坏全局作用域,同样,const声明的ncz创建了一个绑定但没有创建为全局对象的属性,如果不想为全局对象创建属性,则使用let和const要安全得多

如果希望在全局对象下定义变量,仍然可以使用var,这种情况常见于在浏览器中跨iframe或跨frame或跨window访问代码

### 块级绑定最佳实践的进化 

Ecmascript6标准尚在开发阶段,人们普遍认为应该默认使用let而不是var,对很多javascript而言,let实际上与他们想要的var一样,直接替换符合逻辑,这种情况下,对于需要写保护的变量则要使用const
然而,更多的开发者，默认使用const,只有确实需要改变变量的值时使用let,因为大部分比那辆的值在初始化后不应该在改变,而预料外的变量值的改变是很多bug的源头,这一理念获得了很多人的支持

### 结论

块级作用域绑定的let和const为javascript引入的词法作用域,他们声明的变量不会提升,而且只可以在声明这些变量的代码块中使用,如此一来,javascript声明的变量的语法与其他语言更为相似了,同时也大幅降低了产生错误的几率,因为变量只会在需要他们的地方声明,与此同时,这一新特性还存在一个副作用,既不能在声明比那辆前访问他们,就算用typeof这样安全的操作符也不行,在声明前访问块级绑定会导致错误,因为绑定还在临时死区中

let和const的行为很多时候与var一致,然而,他们在循环中的行为却不一样,在for-in中,和for-of循环中,let和const都会每次迭代时创建新绑定,从而使循环体内创建的函数可以访问到相应迭代的值,而非最后一次迭代后的值(像使用var那样),let在for循环中同样如此,但在for循环中使用const声明则可能引发错误
当前使用块级作用域板顶的最佳实践是:默认使用const,只在确实需要改变变量的值时使用let,这样就可在某种程度上实现代码的不可变,从而防止某些错误的产生



