### 1.1 javascript坏境

[下载javascript shell](http://mzl.la/MKOuFY)

### 1.2 Javascript编程实践

### 1.2.1 声明和初始化变量

JavaScript的变量默认是全局变量,严格的说,甚至不需要在使用前进行声明,如果对一个事件未予以声明的javascript变量进行初始化,该变量就成了一个全局变量,在使用变量前先对其进行声明,这样做的好处就是,声明的变量都是局部变量

### 1.2.2 javascript的算术运算符合数学库函数

* +(加)
* -(减)
* *(乘)
* /(除)
* %(取余)

javascript同时拥有一个数学库,用来完成一些高级原酸,比如平方根,绝对值,和三角函数,算术运算符遵循标准的运算顺序,可以用括号来改变运算顺序

### 1.2.3 判断结构

根据布尔表达式的值,判断结构让程序可以选择执行那些程序语句
if语句有如下三种结构
1. 简单的if语句
2. if-else语句
3. if-else if语句 
4. if-else if语句 

### 1.2.4 循环结构

### 1.2.5 函数

JavaScript提供了两种定义函数定义,一种是有返回值,一种是没有返回值(这种函数有时也叫子程或void函数)


### 1.2.6 变量的作用域

变量的作用域是指一个变量在程序中哪些地方可以访问,javascript中的变量作用域被定义为函数作用域,这是指变量的值定义该变量的函数内是可见的,并且定义在该函数内的嵌套函数中也可访问该变量

在主程序中,如果在函数外定义一个变量,那么该变量拥有全局作用域,这是指可以在包括函数体内的程序的任何部分访问该变量,下面用一段简短的程序展示全局作用域的工作原理
```
   function showScope(){
      return scope;
   }
   var scope = "global";
   console.log(scope);  // 显示global
   console.log(showScope());
```
函数showScope()可以访问变量scope，因为scope是一个全局变量,可以在程序的任何位置定义全局变量,比如在函数定义前或者函数定义后
在howScope()可以访问变量scope,因为scope是一个全局变量,可以在程序的任意位置定义全局变量,比如在函数定义前或者函数定义后

```
   function showScope(){
      var scope = "local";
      return scope;
   }
   var scope = "global";
   console.log(scope);  // 显示global
   console.log(showScope());  // 显示local

```
showScope()函数内定义的变量scope拥有局部作用域,而在主程序中定义的变量scope是一个全局变量,尽管两个变量名字相同,但他们的作用域不同,在定义他们的地方访问时得到的值也不一样

这些行为都是正常符合预期的,但是,如果定义变量时省略了关键字var,那么一切都变了,JavaScript允许在定义变量时不使用关键字var,但这样做的后果就是定义的变量自动拥有了全局作用域,即使你是在一个函数内定义该变量,也是全局变量

### 1.2.7 递归

Javascript中允许函数递归调用,前面定义过的factorial()函数也可以用递归的方式定义
```
  function factorial(number){
      if(number == 1){
         return number;
      }else{
         return number*factorial(number-1);
      }
  }
  console.log(factorial(5));
```
当一个函数被递归调用,在递归没有完成时,函数的计算结果暂时被挂起,为了说明这个过程，这里用一副图展示了以5作为参数,调用factorial()函数时函数的执行过程

任何可以被递归定义的函数,都可以被改写为迭代式的程序,要将这点牢记于心

### 1.3 对象和面向对象编程

javascript提供了多种方式来创建和使用对象

对象通过如下方式创建,定义包含属性和方法声明的构造函数,并在构造函数后紧跟方法的定义
```
   function Checking(amout){
      this.balance = amout;  // 属性
      this.deposit = deposit;  // 方法
      this.withdraw =  withdraw;  // 方法
      this.toString= toString;    // 方法
   }
```
this关键字用来将方法和属性绑定到一个对象的实例上,下面我们来看看对于前面声明过的方法是如何定义的
```
   function deposit(amout){
       this.balance += amout;
   }
   function withdraw(amout){
       if(amout <= this.balance){
         this.balance -= amout;
       }
       if(amout>this.balance){
        console.log("Insufficient funds");
       }
   }
   function toString(){
      return "Balance:"+this.balance;
   }
```