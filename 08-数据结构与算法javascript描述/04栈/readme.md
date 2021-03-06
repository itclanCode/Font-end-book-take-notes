### 栈

列表是一种最自然的数据组织方式,上一章已经介绍了如何使用list类将数据组织成一个列表,如果数据存储的顺序不重要,也不必对数据进行查找,那么列表就是一种在好不过的数据结构,对于其他一些应用,列表就显得太过简陋了,我们需要某种和列表类似但是更复杂的数据结构

栈就是和列表类似的一种数据结构,它可以用来解决计算机世界里的很多问题,栈是一种高效的数据结构,因为数据只能在栈顶添加或删除,所以这样的操作很快,而且容易实现,栈的使用遍布程序语言的方方面面,从表达式求值到处理函数调用

### 4.1 对栈的操作

栈是一种特殊的列表,栈内的元素只能通过列表的一端访问,这一端称为栈顶,咖啡厅的一摞盘子是现实世界中常见的栈的例子,只能从最上面取盘子,盘子洗干净后,也只能摞在这一摞盘子的最上面,栈被称为一种后入先出的数据结构

由于栈具有后入先出的特点,所以任何不在栈顶的元素都无法访问,为了得到栈底的元素,必须先拿掉上面的元素

对栈的两种主要操作是将一个元素压入栈和将一个元素弹出栈,入栈使用push()方法,出栈使用pop()方法

另一个常用的操作时预览栈顶的元素,pop()方法虽然可以访问栈顶的元素,但是调用该方法后,栈使用pop()方法

另一个常用的操作是预览栈顶的元素,pop()方法虽然可以访问栈顶的元素,但是调用该方法后,栈顶元素也从栈顶中被永久性删除了,peek()方法则只返回栈顶的元素,而不删除它

为了记录栈顶元素的位置,同时也是为了标记那里可以加入新元素,我们使用变量top,当向栈内压入元素时,该变量增大,从站内弹出元素时,该变量减少

push(),pop(),peek()是栈的3个主要方法,但是栈还有其他方法和属性,clear()方法清除栈内是否含有元素,不过使用length属性也可以达到同样的目的

### 4.2 栈的实现

实现一个栈,当务之急是决定存储数据的底层数据结构,这里采用的数组

我们可以实现以定义stack类的构造函数开始
```
   function Stack(){
      this.dataStore = [];
      this.top = 0;
      this.push = push;
      this.pop = pop;
      this.peek = peek;
   }
```
我们用数组dataStore保存栈内元素,构造函数将其初始化为一个空数组,变量top记录栈顶的位置,被构造函数初始化为0,表示栈顶对应数组的起始位置0,如果有元素被压入栈,该变量的值将随之变化

先来实现Push方法,当想栈中压入一个新元素时,需要将其保存在数组中比那辆top所对应的位置,然后将top值加1,让其指向数组中下一个空位置,代码如下所示
```
   function push(element){
      this.dataStore[this.top++] = element;
   }
```
这里要特备注意++操作符的位置,它放在this.top的后面,这样新入栈的元素就被放在top的当前值对应的位置,然后在将变量top的值加1,指向下一个位置

pop()方法恰好与push()方法相反,它返回栈顶元素,同时将变量top的值减1

```
    function pop(){
        return this.dataStore[--this.top];
    }
```
peek()方法返回数组的第top-1个位置的元素,即栈顶元素
```
   function peek(){
      return this.dataStore[this.top-1];
   }
```

如果对一个空栈调用peek()方法,结果为undefined,这是因为栈是空的,栈顶没有任何元素

有时需要知道站内存储了多少个元素,length()方法通过返回比那辆top值的方式返回栈内的元素个数

```
   function length(){
       return this.top;
   }
```
最后,可以将变量top的值设为0,轻松清空一个栈:
```
   function clear(){
       this.top = 0;
   }
```

### 4.3 使用statck类

有一些问题特备适合用栈来解决

### 4.3.1 数制间的相互转换

可以利用栈将一个数字从一种数制转换成另一种数制,假设想将数字n转换为以b为基数的数字,实现转换的算法如下
1. 最高位n%b,将此位压入栈
2. 使用n/b代替n
3. 重复步骤1和2,直到n等于0,且没有余数
4. 持续将站内元素弹出,直到栈为空,依次将这些元素排列,就得到转换后数字的字符串形式
此算法只针对基础为2-9的情况

使用栈,在javascript中实现该算法就是小菜一碟,下面就是该函数的定义,可以将数字转化为二至九进制的数字
```
   function mulBase(num,base){
       var s = new Statck();
       do{
          s.push(num%base);
       }while(num>0){
          var converted = "";
          while(s.length()>0){
             coverted += s.pop();
          }
          return coverted;
       }
   }
```
### 4.3.2 回文

回文是指这样一种现象,一个单词,短语或数字,从前往后写和从后往前写都是一样的,比如:单词"dad","racecar"就是回文,如果忽略空格和标点符号,夏敏这个句子也是回文，数字10001也是回文

使用栈,可以轻松判断一个字符串时否是回文,我们将拿到的字符串的每个字符按从左至右的顺序压入栈,当字符串中的字符都入栈后,栈内就保存了一个反转后的字符串,最后的字符在栈顶,第一个字符在栈底

字符串完整压入栈内后,通过持续弹出栈中的每个字母就可得到一个新字符串,该字符串刚好与原来的字符串顺序相反,我们只需要比较这两个字符串即可,如果他们相等,就是一个回文

### 4.3.3 递归演示

栈常常被用来实现编程语言,使用栈实现递归即为一例,这里用栈来模拟递归过程
```
5!=5*4*3*2*1 =120
```下面是一个递归函数,可以静思园任何数字的阶乘
```
   function factorial(){
       if(n === 0){
          return 1;
       }else{
          return n*factorial(n-1);
       }
   }
```
使用该函数计算5的阶乘,返回120
使用栈来模拟计算5!的过程,首先将数字从5到1压入栈,然后使用一个循环,将数字挨个弹出连乘,就得到了正确的答案,120

### 4.4 练习

1. 栈可以用来判断一个算术表达式中的括号是否匹配,编写一个函数,该函数接受一个算术表达式作为参数,返回括号确实的位置,下面是一个括号不匹配的算术表达式的例子:
2.3+23/12+(3.14159*0.24)

2. 一个算术表达式的后缀表达式形式如下:

op1 op2 operator
