### 函数

### 箭头函数

在Ecmascript6中,箭头函数时其中最有趣的新增特性,顾明思议,箭头函数是一种使用(=>)定义函数的新语法,但是它与传统的javascript函数有些不同,主要集中在以下方面
* 没有this,super,arguments和new.target绑定,箭头函数中的this,super,arguments以及new.target这些值由外围最近一层非箭头函数决定,
* 不能通过new关键字调用,箭头函数没有[[construct]]方法,所以不能被用作构造函数,如果通过new关键字调用箭头函数,程序就会抛出错误
* 没有原型,由于不可以通过new关键字调用箭头函数,因为没有构建原型的需求,所以箭头函数不存在prototype这个属性
* 不可以改变this的绑定,函数内部的this值不可被改变,在函数的生命周期内始终保持一致
* 不支持arguments对象,箭头函数没有arguments绑定,所以你必须通过命名参数和不定参数这两种形式访问函数的参数
* 不支持重复的命名参数,无论在严格还是非严格模式下,箭头函数都不支持重复命名参数,而在传统函数的规定中,只有在严格模式下才不能有重复的命名参数

这些差异的产生有如下几个原因:首先也是最重要的,this绑定是javascript程序中一个常见的错误来源,在函数内很容易就对this的值失去控制,其经常导致程序出现意想不到的行为,箭头函数消除了这方面的烦恼,其次,如果限制箭头函数的this值,简化代码执行的过程,则javascript引擎可以更轻松的优化这些操作,而常规函数往往同时会作为构造函数使用或者以其他方式对其进行修改

在箭头函数内,其余的差异主要是减少错误以及清理模糊不清的地方,这样一来,JavaScript引擎就可以更好的优化箭头函数的执行过程

箭头函数同样也有一个name属性,这与其他函数的规则相同

### 箭头函数的语法

箭头函数的语法形式多变,根据实际的使用场景有多重形式,所有变种都由函数参数,箭头,函数体组成,根据使用的需求,参数和函数体可以分别采取多种不同的形式,举个例子,在下面的这段代码中,箭头函数采用了单一参数
```
let reflect = value => value;
等价于
let reflect = function(value){
    return value;
}
```
当箭头函数只有一个参数时,可以直接写参数名,箭头函数紧随其后,箭头右侧的表达式被求值后便立即返回,即使没有显示的返回语句,这个箭头函数也可以返回传入的第一个参数,不需要更多的语法铺垫

如果要传入两个或两个以上的参数,要在参数的两侧添加一对小括号,就像这样
```
   let sum = (num1,num2) => num1+num2;
   // 实际上相当于
   let sum = function(num1,num2){
       return num1+num2;
   }
```
这里的sum()函数接受两个参数,将它们简单相加后返回最终结果,它与reflect()函数唯一的不同是,它的参数被包裹在小括号中,并且用逗号进行分隔(类似传统函数)

如果函数没有参数,也要在声明的时候写一组没有内容的小括号,就像这样
```
let getName = () => "Nicholas";

// 实际上相当于
let getName = function(){
    return "Nicholas";
} 
```
如果你希望为函数编写由多个表达式组成的更传统的函数体,那么需要用花括号包裹函数体,并显示地定义一个返回值,就像这个版本的sum()函数一样
```
  let sum = (num1,num2) =>{
    rturn num1+num2;
  }

  // 实际上相当于

  let sum = function(num1,num2){
     return num1+num2;
  }
```
除了arguments对象不可用以外,某种程度上都可以将花括号里面的代码视作传统的函数体定义

如果想创建一个空函数,需要写一对没有内容的花括号,就像这样:
```
    let doNothing = ()=>{}
    // 实际上相当于:
    let doNothing = function(){};
```
花括号代表函数体的部分,到目前为止一切都运行良好,但是如果想在箭头函数外返回一个对象字面量,则需要将该字面量包裹在小括号里,举个例子
```
    let getTempItem = id => ({id:id,name:"Temp"})  
    
    // 实际上相当于 
    let getTempItem =  function(id){
        return {
            id:id,
            name:"Temp"
        }
    }
```
将对象字面量包裹在小括号中是为了将其与函数体区分开来

### 创建立即函数表达式

javascript函数的一个流行的使用方式是创建立即执行函数表达式(IIFE),你可以定义一个匿名函数并立即调用,自始自终不保存对该函数的引用,当你想创建一个与其他程序隔离的作用域时,这种模式非常方便,举个例子
```
     let person = function(name){
         return {
            getName:fucntion(){
                return name;
            }
         }
     }("Nicholas");
```
console.log(person.getName());  // "Nicholas"

在这段代码中,立即执行函数表达式通过getName()方法创建了一个新对象,将参数name作为该对象的一个私有成员返回给函数的调用者

只要将箭头函数包裹在小括号里面,就可以用它实现相同的功能
```
  let person = ((name) => {
      return {
        getName:function(){
            return name;
        }
      }
  })("Nicholas")
  console.log(person.getName());
```

注意,小括号只包含箭头函数定义,没有包含("Nicholas"),这一点与正常函数有所不同,由正常函数定义的立即执行函数表达式既可以用小括号包裹函数体,也可以额外包裹函数调用的部分

### 箭头函数没有this绑定

函数内的this绑定是javascript中的最常出现错误的因素,函数内的this值可以根据函数调用的上下文而改变,这有可能错误的影响其他对象
```
let PageHandler = {
    id:'1234565',
    init:function(){
        document.addEventListener('click',function(event){
            this.doSomething(event.type);  // 抛出错误
        },false)
        doSomething:function(type){
           console.log("Handling"+type+"for"+this.id);
        }
    }
}
```
这段代码中,对象PageHandler的设计初衷是用来处理页面上的交互,通过调用init()方法设置交互,依次分配事件处理程序来调用this.doSomething(),然而,这段代码并没有如预期的正常的运行

实际上,因为this绑定的是事件目标对象的引用(在这段代码中引用的是document),而没有绑定PageHandler,且由于this.doSomething()在目标document中不存在,所以无法正常的执行,尝试运行这段代码只会使程序在触发事件处理程序时抛出错误

可以使用bind()方法显示的将this绑定到pageHandler函数上来修正这个问题,就像这样:
```
 let PageHandler = {
    id:"123456",
    init:function(){
        document.addEventListener('click',(function(event){
           this.doSomething(event.type);  // 没有错误产生
        }).bind(this),false)
    },
    doSomething:function(){
        console.log("Handling"+type+"for"+this.id);
    }
 }

```
现在代码如预期的运行,但可能看起来仍然优点奇怪,调用bind(this)后事实上创建了一个新函数,它的this被绑定到当前的this,也就是PageHandler,为了避免创建一个额外的函数,我们可以通过一个更好的方式来修正这段代码,使用箭头函数

箭头函数中没有this绑定,必须通过查找作用域链来决定其值,如果箭头函数被非箭头函数包含,则this绑定的是最近一层非箭头函数的this:否则,this的值会被设置为undefined,可以通过以下这种方式使用箭头函数
```
let PageHandler = {
    id:'123456',
    init:function(){
        document.addEventListener('click',event=>this.doSomething(event.type),false);
    },
    doSomething:function(type){
       console.log("Handling"+type+"for"+this.id);
    }
}
```
这个示例中的事件处理程序是一个调用了this.doSomething()的箭头函数,此处的this与init()函数里的this一致,所以此版本diamante的运行结果与使用bind(this)一致,虽然doSomething()方法不返回值,但是它仍然是函数体内唯一的一条执行语句,所以不必用花括号将它包裹起来

箭头函数缺少正常函数所拥有的prototype属性,它的设计初衷手势“即用即弃”,所以不能用它来定义新的类型,如果尝试通过new关键字调用一个箭头函数,会导致程序抛出错误,就像这个示例一样
```
   var MyType = () => {},
   object = new MyType();   // 错误,不可以通过new 关键字调用箭头函数
```
在这段代码中,MyType是一个没有[[constructor]]方法的箭头函数,所以不能正常执行new MyType(),也正因为箭头函数不能与new关键字混用,所以javascript引擎可以进一步优化他们的行为

同样,箭头函数中的this值取决于该函数外部非箭头函数的this值,且不能通过call(),apply()或bind()方法来改变this的值
### 箭头函数和数组

箭头函数的语法的简洁,非常适合于数组的处理,举例来说,如果你想给数组排序,通常需要写一个自定义的比较器
```
  var result =  values.sort(function(a,b){
     return a-b;
  });
```
我们只想实现一个简单的功能,但这些代码实在太多了,这是用箭头函数简化后的版本
```
var result = values.sort((a,b) => a-b)；
```
诸如sort(),map(),以及reduce()这些可以接受回调函数的数组方法,都可以通过箭头函数衣服啊简化编程并减少编码量

### 箭头函数没有arguments绑定

箭头函数没有自己的arguments对象,且未来无论函数在那个上下文中执行,箭头函数始终可以访问外围系统的arguments对象,举个例子
```
   function createArrowFunctionReturningFirstArg(){
      return () => arguments[0];
   }
   var arrowFunction = createArrowFunctionReturningFirstArg(5);
   console.log(arrowFunction());
```
在createArrowFunctionReturningFirstArg()函数中,箭头函数引用了外围函数传入的第一个参数arguments[0],也就是后续执行过程中传入的数组5，即使函数箭头此时已不再处于创建它的函数的作用域中,却依然可以访问当时的argeuments对象,这是arguments标识符的作用域链解决方案所规定的

### 箭头函数的辨识方法
尽管箭头函数与传统函数的语法不同,但它同样可以被识别出来
下面这段代码
```
var comparator = (a,b) => a-b;
console.log(type comparator);  // function 
console.log(comparator instanceof Function);
```
由console.log()的输出结果可知,使用typeof和instanceof操作符调用箭头函数与调用其他函数并无二致
同样，仍然可以在箭头函数上调用call(),apply()以及bind()方法,但与其他函数不同的是,箭头函数的this值不会受到这些方法的影响,这里有一些示例
```
var sum = (num1,num2) => num1+num2;

console.log(sum.call(null,1,2));
console.log(sum.apply(null,[1,2]));

var boundSum =  sum.bind(null,1,2);

console.log(boundSum());  // 3
```
通过call()方法和apply()方法调用sum()函数并传递参数,通过bind()方法创建boundSum()函数,并传入参数1和参数2,这些参数都不需要直接传入,包括回调函数在内所有使用匿名函数表达式的地方都适合用箭头函数来改写

### 尾调用优化

Ecmascript关于函数最有趣的变化可能就是尾调用系统的引擎优化,尾调用指的是函数作为另一个函数的最后一条语句被调用，就像这样
```
  function doSomething(){
    return doSomethingElese();  // 尾调用
  }
```
在Ecmascript5的引擎中,尾调用的实现与其他函数调用的实现类似,创建一个新的栈帧,将其推入调用栈来表示函数调用,也就是说,在循环调用中,每一个未用完的栈帧都会被保存在内存中,当调用栈变得过大时会造成程序问题

### ECMAscript6中尾调用的优化

ECMAscript6缩减了严格模式下尾调用栈的大小(非严格模式下不受影响),如果满足以下条件,尾调用不在创建新的栈帧,而是清除并重用当前栈帧
* 尾调用不访问当前栈帧的变量
* 在函数内部,尾调用是最后一条语句 
* 尾调用的结果作为函数值返回

以下这段示例代码满足上述的三个条件,可以被javascript引擎自动优化
```
 use strict
 function doSomething(){
    // 优化后
    return doSomethingElse();
 }
```
在这个函数中,尾调用doSomethingElse()的结果立即返回,不调用任何局部作用域变量,如果做一个小小改动,不返回最终结果,那么引擎就无法优化当前函数
```
   use strict
   function doSomething(){
      // 无法优化,无返回
      doSomethingElse();
   }
```
同样地,如果你定义了一个函数,在尾调用的返回后执行其他操作,则函数也无法得到优化

```
    use strict 
    function doSomething(){
        // 无法优化,必须在返回值后添加其他操作
        return 1+doSomethingElse();
    }
```
在这个示例当中,在返回doSomething()的结果将其加1,这足以使引擎失去优化空间

还有另外一种意外情况,如果把函数调用的结果存储在一个变量里,最后在返回这个变量,则可能导致引擎无法优化,就像这样
```
  use strict 

  function doSomething(){
    // 无法优化,调用不在尾部
    var result = doSomethingElse();
    return result;
  }
```
由于没有立即发返回,doSomethingElse()函数的值,因此此例中的代码无法被优化,可能最难避免的情况是闭包的使用,它可以访问作用域中所有的变量,因而导致尾调用优化失效，举个例子
```
   use strict
   function doSomething(){
      var num = 1;
      func = () => num;

      // 无法优化,该函数是一个闭包
      return func();
   }
```
在此示例中,闭包func()可以访问局部变量num,即使调用func()后立即返回结果,也无法对这段代码进行优化

### 如何尾调用优化

实际上,尾调用的优化发生在引擎背后,除非你尝试优化一个函数,否则无需思考此类问题,递归函数其最主要的应用场景,此时尾调用优化的效果最显著,请看下面的这个阶乘函数
```
   function factorial(n){
      if(n<=1){
        return 1;
      }else{
        // 无法优化,必须在返回后执行乘法操作
        return n*factorial(n-1);
      }
   }
```
由于在递归调用前执行了乘法操作，因而当前版本的阶乘函数无法被引用优化,如果n是一个而非常大的数,则调用栈的尺寸就会不断增长并存在最终导致栈溢出的潜在风险

优化这个函数,首先要确保乘法不会再函数调用后执行,你可以通过默认参数来讲陈方法操作移出return 语句,结果函数可以携带者临时的结果进入到下一个迭代中,以这段新代码具有相同的行为,但可以被Ecmascript6引擎优化
```
   function factorial(n,p=1){
     if(n<=1){
       return 1*p;
     }else{
        let result = n*p;

        // 优化后 
        return factorial(n-1,result);
     }

   }
```
在这个重写后的factorial()函数中,第二个参数p的默认值为1,我们用它来保存乘法的结果,下一次迭代中可以取出它用于计算,不在需要额外的函数调用,当n大于1时,先执行一轮乘法计算,然后将结果传给第二次factoial()调用的参数,现在,Ecmascript6引擎可以优化递归调用了
当你写递归函数的时候,记得使用尾递归优化的提醒,如果递归函数的计算量足够大，则尾递归优化可以大幅提升程序的性能

