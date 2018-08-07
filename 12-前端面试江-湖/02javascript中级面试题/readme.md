### 56 请选择结果为真的表达式

* A. null instanceof Object
* B. null === undefined
* C. null == undefined 
* D. NaN == NaN 

null确实可以理解为原始类型,但不能当Object理解,null,init,float等这些用关键字表示的类型,都不属于Object,至于可以把null作为参数,只是特殊规定而已,对象的引用代表是一个内存的值,null是一个空引用,可以理解为内存的值为0

### 57 请说明javascript中"=="和"==="的区别

在javascript中,"=="直接表两个变量的值,但"==="则比较两个变量的值和类型,前者在对不同类型比较时javascript会做出相应的类型转换,转换之后若相等返回true,否则返回false
### 58 请选择结果为真的表达式

A. null instanceof object 
B. null === undefined
C. null == undefined 
D. NaN == NaN
E. null == null 
F. null === null 

答案:CEF
解析:除空之外所有的字符串,以及除0之外的所有数字,转换为布尔都是true

### 59 简要描述下列符号在javascript中作用,||，evel,call

1. "||"是或的意思
2. "eval":是把一个字符串当作一个javascript表达式一样去执行
3. call可以用来代替另一个对象调用一个方法,call方法可将一个函数的对象的上下文从初始的上下文改变为thisObj指定新对象

### 60. javascript中表达式parseInt("X8X8")+parseFloat("8")的结果是：
A. 8+8
B. 88 
C. 16  
D."8"+8

答案:C 
parseInt()提取整数部分,parseFloat()提取浮点数部分

### 61. 统计从1至400亿之间的自然数中含有多少个1？比如从1~21,1,10,11,21,这4g个自然数中总共5个1

解析：
1. 定义初始个数
2. 把每个数拆分成单个数字,如123拆分成"1","2","3"
3. 用toString()方法进行判断,如果包含1,则统计1的个数

### 62 分析下面的javascript代码

x = 11; y ='number'; m = x+y,m的值为多少?

答案:11 number
解析:在parseFloat中,相加的话,加号表示连接

### 63. 什么是三元条件语句?

解析:三元条件语句就是条件?结果1:结果2;这里吧条件卸载问号(?)的前面,后面跟着用冒号(:)分隔结果1和结果2,满足条件时为结果1,否则为结果2

### 64. 在javascript中,string对象的方法不包括
A. charAt()
B. substring()
C. toUpperCase()
D. length

解析:
charAt(): 从某个字符串取得具体的内容
substring()截取字符串
toUpperCase()将字符串中的小写字母转换为大写字母
length不是方法

### 请编写代码拓展javascript的string对象,让其拥有一个新的方法killpoint()来删除字符中所有英文句号"".,请用最少的代码实现

解析:
String.prototype.killpoint = function(){
    return this.replace(/\.g/,'');
}

### 66 对string对象进行拓展,使其具有删除前后空格的方法

解析:
```
    String.prototype.deletSpace = function(){
        var str = this;    // 提取需要操作的字符串
        while(str[0] == ''){ // 删除前面的空格
             str = str.substring[1];
        }
        while(str[str.length-1]==""){  // 删除后面的空格
             str =  str.substring(0,str.length-1);
        }
        return str;
    }
```

### 67 如何拓展javascript中原生的String对象?Stringd对象中的那些方法可返回字符串的指定部分

1. 用prototype添加方法
2. substring()函数时返回截取之后的字符串,不会对原字符串进行修改
```
    // 获取字符数组
    String.prototype.toCharArray = function(){
        return this.split("");
    }
    // 获取N个相同的字符串
    String.prototype.repeat = function(){
        var tmpArr = [];
        for(var i = 0;i<num;i++){
            tmpArr.push(this);
        }
        return tmpArr.join("");
    }
    // 逆序
    String.prototype.reverse = function(){
        return this.split.split("").reverse().join("");
    }
    // 测试是否是数字
    String.prototype.isNumeric = function(){
        var tmpFloat = parseFloat(this);
        if(isNaN(tmpFloat)){
            return false;
        }
        var tmplen = this.length-tmpFloat.toString().length;
        return tmpFloat+"0".Repeat(tmpLen) == this;
    }
    // 测试是否是整数
    String.prototype.isInt = function(){
        if(this == "NaN"){
            return false;
        }
        return this == parseInt(this).toString();
    }
    // 合并多个空白为一个空白
    String.prototype.reseBlank = function(){
        return this.replace(/s+/g,"");
    }
    // 除去左边空白
    String.prototype.LTrim = function(){
        return thisss.replace(/^s+/g,"");
    }
    // 除去右边空白
    String.prototype.Rtrim = function(){
        return this.replace(/s+$/g,"");
    }
    // 除去两边空白
    String.prototype.Trim = function(){
         return this.replace(/(^s+)| (s+$)/g,"");
    }
    // 保留数字
    String.prototype.getNum = function(){
        return this.replace(/[^A-Za-z]/g,"");
    }
    // 保留中文
    String.prototype.getCn = function(){
        return this.replace(/[^u4e00-u9fa5uf900-ufa2d]/g);
    }
    // 得到字节长度
    String.prototype.getRealLength = function(){
        return this.slice(0,n);
    }
    // 从右截取指定长度字符串
    String.prototype.right = function(){
        var re = this;
        var q1 = [/x26/g,/x3C/g,//x3E/g./x20/g];
        var q2 = ["&","<",">",""];
        for(var i = 0;i<q1.length;i++){
           re = re.replace(q1[i],q2[i]);
        }
        return re;
    }

```
### 68 请用javascript实现获取5个0-99之间不相同的随机数

解析:思路,首先创建一个0-99的数组,每次取一个数,然后去除数组中去除这个数,这样就可以实现永不重复

公式:document.write(Math.floor(Math.random()*10+1*));
使用函数:
1. Math.random()结果为0-1间的一个随机数,包括0,不包括1
2. Math.floor(num)参数num为一个数值,函数结果为num的整数部分
3. Math.round(num); 参数num为一个数值,函数结果为num四舍五入后的整数

### 69. 请给出下面a,b,c的输出结果

var parseInt("11",2);
var b = parseInt("02",10);
var c = parseInt("09/08/2009");
解析:parseInt()的用法,parseInt()函数可以解析一个字符串,并返回一个整
语法：parseInt(string,radix)
c的首字符是0,一般想法是按8进制进行解析

### 70. 编写javascript脚本,生成0-7之间的随机整数

解析：
公式:document.write(Math.floor(Math.random()*7));
使用函数:
1. Math.random(); 结果为0-1间同一个随机数(包括0,不包括1)
2. Math.floor(num):参数num为一个数值,函数结果为num的整数部分
3. Math.round(num):参数num为一个数值,函数结果为num四舍五入后的整数

### 71. 使用javscript求两个数的最大公约数

解析:
```
    function f(num1,num2){
       for(var i = Math.min(num1,num2);i>0;i--){
          if(num1%i == 0&& num2%i == 0){
             return i;
          }
       }
    }
```
### 72. 获取一个1~50的随机不重复数组

解析:
```
    var arr = [];
    var number = 50;
    for(var i =0;i<=number;i++){
       arr.push(i);
    }
    var result = [];
    for(var j =  number-1;j>=0;j--){
        var rand = Math.ceil(Math.random()*j);
        result.push(arr.splice(rand,1));
    }
```
### 73. Math.ceil(),Math.floor()和Math.round()三个方法都是四舍五入,请问有什么区别?Math.round(-11,5)的值是多少?

解析:
1. Math.ceil()用于向上取整
2. Math.floor()用于向下取整
3. Math.round()用于四舍五入取整
4. Math.round(-11,5)的值是-11

### 在javscript中,下列选项中不属于数组方法的是?

A. sort()
B. length()
C. concat()
D. reverse()

答案:B
解析:
1. sort()方法用于对数组的元素进行排序
2. length()返回的hi字符串的长度
3. concat()方法用于连接两个或多个数组
4. reverse()方法用于点到数组中元素的顺序

### 75 请见如下代码

```
      var emp = new Array(3);
      for(var i in emp)
```
以下答案中能与for循环代码互换的是
A. for(var i = 0;i<emp;i++)
B. for(var i = 0;i<Array(3);i++)
C. for(var i = 0;i<emp.length();i++)
D. for(var i = 0;i<emp.length;i++);

答案:D 

解析:
for/in 循环遍历对象的属性,而length不是方法,也不是对象的属性

### 76 下列声明数组的语句中,错误的选项是
A. var arry =  new Array()  B. var arry = new Array(3)
C. var arry[] = new Array(3)(4) D. var arry = new Array("3","4")

答案:C
创建一个数组,arrayObj=new Array()  // 创建一个数组
arrayObj = new Array([size]);      // 创建一个数组并指定长度,注意不是上限,是长度

arrayobject= new Array([element0[,lement1,[,...]]])；

### 77 请编写尽可能简洁的javascript代码,找到在第一个数组array1中出现,而在第二个数组array2中没有出现的数字

解析：
indexOf()判断数字是否出现,join()用于把数组中的所有元速速放入一个字符串,元素时通过指定的分隔符进行分隔

```
    function findNulloNum(arr1,arr2){
        var str = arr2.join("");
        var result = [];
        for(var i = 0,x = 0;i<arr1.length;i++){
           if(str.indexOf(arr1[i]) == -1){
               result[x] = arr1[i];
               x++;
           }
        }
        return result;
    }
```

### 78. 编写函数,用于过滤一个数组内重复的元素,并用这些元素重构一个新数组,新数组内也补鞥有重复元素

```
    var arrNum = [1,4,1,1,3,3,4,5,7,83,7,0,11,22,22]
```
解析:将数组中重复的元素去掉,并将各元素放到新的数组中,原理:将重复的元素替换为空

```
     var str =  arrNum.join('.');
     var newArr = [];
     for(var i = 0;i<arrNum.length;i++){
         if(str.indexOf(arrNum[i]) != -1){
            newArr[newArr.length] = arr[i];
         }
         while(str.indexOf(arrNum[i]) != -1){
             str = str.replace(arrNum[i],'');
         }
     }

```
### 84 怎么判断一个对象为数组类型?

解析:
typeof操作符
typeof可以解决大部分的数据类型判断,它是一个一元运算,放在一个运算值之前,其返回值为一个字符串,该字符串说明运算数的类型,所以判断某个是否为String类型,可以直接if(typeof(你的值)== string){}
instanceof 操作符
instanceof 顾名思义,实例,例子,所以Instanceof用于判断一个变量是否为某个对象的实例,是一个三目运算符,这是和它和typeof最实质上的区别

### 85 var aPush = [1,2,3]

```
   console.log("len:"+aPush.push(4)+",push后数组:"+aPush);
```
解析:
len 4:push后数组 1,2,3,4 
push()方法可向数组的末尾添加一个或多个元素,并返回新的长度
语法:arrayObject.push(newelement1,newelement2,...newelementX)
参数:newelement1
描述:必须,要添加到数组的第一个元素
参数:elemementX
描述:可选,要添加多个元素
返回值:把指定的值添加到数组后的新长度

### 86 var aPop = ["a","b","c"]

```
   console.log("返回"+aPop.pop()+",pop后数组:"+aPop);
```
解析:
返回:c;pop后数组,a,b
pop():方法用于删除返回数组的最后一个元素
语法:arrayObject的最后一个元素

### 87 var aUnshift = [1,2,3]
```
   var aUnshift = [1,2,3]
   console.log("len:"+aUnshift.unshift(0)+",unshift后数组+",+aUnshift);
```

解析:
len: 4;unshift后数组：0,1,2,3
unshift()方法可向数组的开发添加一个或更多个元素,并返回新的长度
语法:arrayObject.unsfhit(newelement1,newelement2,...newelementX)
参数:newelement1
描述:必须,向数组添加第一个元素
参数:newelement2 
描述:可选,向数组添加的第二个元素
参数:newelementX 
描述:可选,可添加若干个元素

### 88 var aShift = ["a","b","c"]

```
     var aShift = ["a","b","c"]
     console.log("返回"+aShift.shift()+",shift后数组:"+aShift);
     解析:
     返回:a,shift后数组,b,c 
     shift():方法用于把数组的第一个元素从中删除,并返回第一个元素的值
     语法:arrayObject.shift()
     返回值:数组原来的第一个元素的值
     说明:如果数组是空的,那么shift()方法将不进行任何操作,返回undefined值,请注意,该方法不创建新数组,而是直接修改原有的arrayObject
```
### 89 splice()方法

```
    var aSplice = [1,2,3],
        aSplice2 = [1,2,3],
        aSplice3 =  [1,2,3];
    sSplice.splice(0,0,0)
    console.log(sSplice);  // 添加
    sSplice.splice(0,1)
    Splice()方法从数组中添加/删除项目,然后返回被删除的项目
    注释:该方法会改变原始数组
    语法:arrayObject.splce(index,owmany,item1,...itemX)
    参数:index 
    描述:必须,整数,规定添加/删除项目的位置,使用负数可以从数组结尾处规定位置
    参数:howmany
    描述:必须,要删除的项目数量,如果设置为0,则不会删除项目
    参数:item1,...itemX 
    描述:可选,向数组添加的新项目


```
### 90 console.log([1,2,3]).slice(0,2);

解析:
[1,2]
slice()方法可以从已有的数组中返回选定的元素
语法:arrayObject.slice(start,end)
参数:start 
描述:必须,规定从何处开始选取,如果是负数,那么它规定从数组尾部开始选取,也就是说,-1指最后一个元素,-2指倒数第二个元素,以此类推
参数:end
描述:可选,规定从何处结束选取,该参数是数组片断结束处的数组下标,如果没有指定该参数,那么切分的数组包含从开始到结束的所有元素,如果这个参数是负数,那么规定的是从数组尾部开始算起的元素

### 91 console.log(["a","c","d","b"]).sort())
```
   console.log(["a","c","d","b"]);
   console.log(["10,"1","2","5"]).sort(function(v1,v2){
       return v1-v2;
   })
```
push()方法可向数组的末尾添加一个或多个元素,并返回新的长度
语法:arrayObject.push(newelement1,newelement2,newelementX)
参数:newelement1,newelement2,newelementX
描述:必须,要添加到数组的第一个元素
参数:newelement2 
描述:可选,要添加到数组的第二个元素
参数:newelementX 
描述:newelementX;

### 92. 将数组["a","b"]和["c","d"]合并,并且删除第二个元素

解析:
合并数组
Array.prototype.push.apply(mergeTo,mergeFrom);
删除数组中某个值
splice有三个参数,它可以用来替换,删除,添加数组内某一个或者几个值
1. index:数组开始下标
2. len:替换/删除的长度
3. item:替换的值,删除操作的话,item为空

### 93 Javascript数组方法sort()的作用是

sort()方法用于实现对数组元素的排序,该方法默认按照数组项Ascii码字符的顺序升序排列,在执行过程中并不会创建新的Array对象
如果sort()参数提供了一个函数,那么该函数必须返回下列值之一
* 负值(如果所传递的第一个参数比第二个参数小)
* 零(如果两个参数相等)
* 正值(如果第一个参数比第二个参数大)

### 94. 写出一个javascript函数,实现对一个数组去重的功能
```
/*
                   解析:
                   1. 构建一个新的数组存放结果
                   2. for循环中每次从原数组中取出一个元素,用这个元素循环与结果数组对比
                   3. 若结果数组中没有该元素,则存到结果数组中
                 */
                Array.prototype.uniquel = function(){
                    var res = [this[0]];
                    for(var i = 1;i<this.length;i++){
                       var repeat = false;
                       if(this[i] == ress[j]){
                           repeat = true;
                           break;
                       }
                    }
                    if(!repeat){
                       res.push(this[i]);
                    }
                    return res;
                }
```
### 95请写出如下javascript代码的运行结果

```
   var name = "zhangsan";
   function getName(){
       var arr = [1,2,3];
       var name = "list"+arr;
   document.write(name+"</br>")
   }
   getName();
   document.write(name);
```
1. 如果一个函数被赋予一个对象的属性值,这个函数只能通过该对象来访问,(但并非是说该函数只能被该对象调用),通过该对象调用该函数的方式类似以面向编程语言中的方法调用,(实际上在javascript中习惯使用该方法这种称呼)
2. 任意指定函数的调用对象,在某个语法坏境中,如果可以同时访问到函数fun和对象obj,只要你愿意,可以指定通过obj对象来调用fun函数,指定方法有两种:call方法和apply方法
3. 另一种比较容易疏忽的错误是:在A对象的方法中,执行了使用B对象的方法调用,试图在B对象的方法里使用this来访问A对象,这在各种回调函数中比较常见,最常见的情形就是Ajax回调函数中使用this

### 96 请写出如下javascript代码片段的运行结果

```
   var my_arr= [];
   for(var i = 0;i<=5;i++){
      my_arr.push(i*(i+1));
   }
   var val = 0;
   while(var = my_arr.pop()){
       document.write(val+"");
   }
```
解析:my_arr.pop()一个一个删除数组最后一个元素,当删除到第一个0之后,返回的值为undefined,那么就跟下面的while条件不符合了,故最后一个0是不会输出的
while语句总是先检测循环表达式,所以他的循环体可能一次都不执行
while循环会在指定条件为真时,循环执行代码块

### 97 JavaScript中给全部都是死数字元素的数组排序的原生方法是,sort,其中使用的是自定义排序规则

javascript中将数组排序的方法有很多,其中sort()方法默认是按字符来排序的,所以在对数字型数组排序时,不可想当然地以为会按照数字大小排序,要想改变默认的sort行为(按照字符排序),可以自行指定规则函数

### 98 join()和split()的区别
解析:join()函数获取一批字符串,然后用分隔字将他们连接起来,从而返回一个字符串,split函数获取一个字符串,然后在分隔符处将其断开,从而返回一批字符串,但是,这两个函数之间的主要区别在于,join可以使用任何分隔符字符串将多个字符串连接起来,而split只能使用一个字符分隔符将字符串断开

简单的说,split是把一字符串(根据某个分隔符)分成若干个元素存放在一个数组里,而join是把数组中的字符串连成一个长串,可以大体行认为是split的逆操作

### 99 console.log([1,2,3].length)

length属性表示数组的长度,即其中元素的个数,因为数组的索引总是从0开始时的,所以一个数组的上下限分别是0和length-1
### 100 console.log([1,2,3].concat("a","b"));的结果是什么?

[1,2,3,"a","b"]
解析:
concat()方法用于连接两个或多个数组
该方法不会改变现有的数组,而仅仅会返回被连接数组的一个副本,返回一个新的数组,该数组是通过把所有arrayX参数添加到arrayObject中生成的,如果要进行concat()操作的参数是数组,那么添加的是数组中的元素,而不是狐族

### 101. console.log([2013,10,10,1]).join("");的结果是什么?
2013101

解析:
join()方法用于把数组中的所有元素放入一个字符串,元素时通过指定的分隔符进行分隔的,返回一个字符串,此字符串由包含在数组中的许多子字符串连接创建
语法:join(list[,delimter])
join函数的语法有以下参数
list:必选,包含要连接的子字符串一维数组
delimiter,可选,在返回字符串中用于分隔字符串的字符,如果省略,将使用空字符(""),如果delimiter是零长度字符串,则在同一列出全部项,没有分届符

### 102 slice()与splice()分别具备什么功能?有什么区别?

slice()方法,接收1个或2个参数,既要提取的项起始位置和结束位置,如果只有一个参数,该方法返回从该位置开始到起始位置的所有项,不包括第二个位置的项
splice()方法:把数据项插入数组中部,调用该方法时传入的参数不同,就用不同的方法删除,传入2个参数,这2个参数书是要删除的第一个项的位置和要删除的项的个数,替换而不删除,传入3个参数,这三个参数是起始位置和0(要删除的个数),要插入的项,替换并删除

### 103 请写出一个函数,功能是删除数组指定下标元素

解析:
array.pop():删除最后一个元素,并返回该元素
array.shift();删除第一个元素,数组元素位置自动前移,返回被删除的元素
array.splice(start,delCount); // 从start的位置开始向后删除delCount个元素
```
   Array.protoype.del = function(){
      if(isNaN(index) || index >= this.length){
         return false;
      }
      for(var i = 0,n=0;i){

      }
   }
```
### 104 请写出一个函数removeVoid(arr),删除该数组中值为"null,undefined"的项,返回原数组

```
   function ClearNulArr(arr){
      for(var i = 0,len =  arr.length;i<len;i++){
          if(!arr[i] || arr[i] == '' || arr[i] === undefined){
             arr.splice(i,1);
             len--;
             i--;
          }
      }
      return arr;
   }
```
### 105 数组方法pop(),push(),unshift()和shift()分别具备什么功能？
解析:
1. pop():从集合中把最后一个元素删除,并返回这个元素的值
2. push():在集合中添加元素,并返回新的长度
3. unshift():在集合开头添加一个或更多的元素,并返回新的长度
4. shift():从集合中吧第一个元素删除,并返回这个元素的值

### 106 请给Array本地对象增加一个原型方法,它的用途是删除数组中重复的条目,并将数组返回

解析:
```
    Array.prototype.delrepeat = function(){
        var arr = this;
        var _arr = new Array();
        for(var i in arr){
            if(i == 'delrepeat') containue;
            if(_arr.length == 0) _arr.push(arr[i])
            for(var j = 0;j<_arr.length;j++){
               if(arr[i] == _arr[j]){
                  break;
               }
               if(j > _arr.length-2){
                  _arr.push(arr[i]);
               }
            }
            return _arr;
        }
    }
```
### 107 在javascript中如何写定时调用函数foo()?

解析:
```
   function foo(){
      alert("132432");
   }
   setTimeout(foo,1000)
```
### 在javascript中如何规避多人开发函数重名问题

1. 命令空间,根据不同的开发人员开发的功能在函数前加前缀
2. 立即执行函数模式(对象初始化),避免污染全局坏境

### 109 请分别描述javascript中prototype,constructor,this,argument的含义

解析:
1. prototype:prototype的行为类似于c++中的静态域,将一个属性添加为prototype的属性,这个属性将被该类型创建的所有实例所共享,但是这种共享是只读的,在任何一个实例中只能够用自己的同名属性覆盖这个属性,而不能够改变它,换句话说,对象在读取某个属性时,总是在检查自身域的属性表,如果有这个属性,则会返回这个属性,总是先检查自身域的属性prototype域上的属性,另外,javascript允许prototype域引用任何类型的对象,因此,如果对prototype域所指向对象的prototype域,直到这个对象的prototype域为它本身或者出现循环为止
2. constructor:即构造函数,在对象创建或者实例化时被调用的方法,通常使用该方法来初始化数据成员和所需资源,构造器constructor不能被继承,因此,不能重写overriding,但可以被重载overloading，对象(或global对象)对于一个onclick属性,则为它所属的HTML元素所拥有,this应该指向该HTML元素
argument:所有的函数都有属于自己的一个arguments对象,它包括了函数所要调用的参数,它不是一个数组,如果用typeof arguments,那么返回的hiobject,虽然我们可以用调用数据的方法来调用argument，比如:length,index方法,但是数组的push和pop对象hi不适用的

### 110 写一个函数,参数为一个元素,返回指定元素的第一个子元素,要求兼容IE6/7/8+8

```
  function getfirst(el){

  }
```
解析:function getfirsst(el){
    var nodes = el.children;  // 获取元素下所有子节点
    return nodes.length != 0?nodes[0]:null
}

### 写出下面函数console的值,并说明什么?

```
   var b = 1;
   function c(){
      console.log(b);
      if(!b){
          var b =  2;
      }
      console.log(b);
   }
   c();
```
解析:
此题考查的是JS局部变量声明前置,也就是说,函数中语句var b = 2;b声明在函数的最前面,但赋值语句不变,因此答案为先输出undefined再输出2
### 112 看下面一段代码,请写出结果 
```
    function b(){
        a = 10;
        alert(arguments[1]);
    }
    b(1,2,3)
```
解析:arguments对象不能显示创建,argument对象只有函数开始时才可用,函数的arguments对象并不是一个数组,访问单个参数的方式与访问数组元素的方式相同,索引n实际上是arguments对象的0~n属性的其中的一个参数

argument对象和function对象紧密地联系在一起,也就是说,每一个函数都有自己的arguments属性

通过arguments属性(相对function来说),函数可以处理可以处理可变数量的参数,argument对象的length属性包含了传递给函数的参数的数目,对于arguments对象包含所包含的单个参数,其访问方法与数组中所包含的参数的访问方法相同,用0到arguments.length-1来枚举每一个元素,callee属性是arguments对象的一个成员,仅当相关函数正在执行时才有用,callee属性的初始值就是正被执行的function对象,这允许匿名的递归函数

### 113 简述javascript封装

解析：
封装可以被定义为对象的内部户表现形式和实现细节进行隐藏,通过封装可以强制实施信息隐藏

在javascript中,并没有显示的声明私有成员的关键字等，所以要想实现封装或信息隐藏,就需要从另外的思路出发,我们可以使用闭包的概念来创建只允许从对象内部访问方法和属性，来达到封装的要求

### 114下面javascript代码的运算结果是2还是undefined?请阐述原因

```
    function show(){
        var b = 1;
        a = ++b;
    }
    show();
    alert(a);
```

### 115 判断以下两段代码的正误,并阐述错误代码为何报错

```
   sum(1);
   functon sum(){
      alert(sum);
   }
   sum(1);
   var sum = function(){
      alert(sum);
   }
```
解析:javascript中需要创建函数的话,有两种方法:函数声明与函数表达式
各自写法如下:
方法一:函数声明
function foo(){}
方法二:函数表达式 
var foo =  function(){} 
另外,还有一种自执行函数表达式,主要是用于创建一个新的作用域,在此作用域内声明的变量不会和其他作用域内的变量冲突或混淆,大多数以匿名函数的方式存在,且立即自动执行
```
   (function(){
       // var x
   })()
```
此种自动执行函数表达式归类于以上梁红方法中的第二种,也算是函数表达式

### 116 javascript中,有一个函数,在执行对象查找时,永远不会去查找原型,这个函数是什么?

解析:
javascript中有hasOwnProperty函数方法是返回一个布尔值，并指出一个对象是否具有指定名称和属性,使用方法:object.hasOwnProperty(proName),其中,参数object是必选项,一个对象的示例,proName是必选项,一个属性名称的字符串值,如果object具有指定名称的属性,那么javascript重hasOwnProperty函数方法返回true,反之则返回fale,此方法无法检查该对象的原型链中是否具有该属性,该属性必须是对象本身的一个成员

### 117 请写一个函数closest(element,clasName)传入DOM对象及css名称,或者标签名称,查找到离它自身最近的父节点

```
   function closest(element,clasname){
       if(element){  // 判断元素会否存在
          if(element.className == classname){  // 如果存在,则判断当前元素的css名称会否等于接收的css名称
          return element.parentName; // 如果等于,返回当前元素最近的父节
          }
       }else{
          console.log("该元素不存在");  // 否则该元素不存在
       }
   }

```
### 18. 请写一个函数getParamenters()来获取浏览器地止栏URL全部参数,并返回一个JSON字符串
```
function getParamenters(name){
    var reg = new RegExp("(^|&)"+name+"=([^&]*)(&|$)");
    var r =  window.location.search.substr(1).match(reg);
    if(r!=null){
       return unescape(r[2]);
       return null;
    }
}

```
### 119 请写一个函数来验证电子邮件是否正确

解析:
```
      function CheckMail($mailaddress){
         if(eregi('^[a-zA-z0-9_-.]+@[a-zA-z0-9-]+.[a-zA-z0-9-.]+$')){
            $mailaddress;
            return true;
         }else{
            return fale;
         }
      }
```

### 120 写一个获取非行间样式的函数

解析:
```
    function getStyle(obj,attr,value){
       if(!value){
          if(obj.currentStyle){
              if(!value){
                  return obj.currentStyle(attr);
              }else{
                 obj.getComputedStyle(attr,false);
              }
          }else{
            obj.style[attr] = value;
          }
       }
    }

```
### 121 写一个函数来验证E-mail的有效性


### 122 以下哪些是javascript的全局函数

A. escape B. parseFloat C. eval D. settimeout  E. alert 

### 124. 以下哪条语句会产生错误()

A. var obj = (); B. var obbj = {}' C. var obj = //; D. var obj = [];

对象的创建方式,objectName = {property1:value1,property2:value2,...propertyN:valueN}
其中,property是对象的属性,value则是对象的值,值可以是字符串,数字或对象三者之一

构造函数方式:
编写一个构造函数,并通过New方式来创建对象,构造函数本可以带有构造函数
例如:
```
   function User(name,age){
       this.name = name;
       this.age = age;
       this.canFly = false;
   }
   var use = new User();
```
私有属性定义,私有属性只能在构造函数内部定义与使用
语法格式:var propertyName = value;
实例属性定义存在两种方式
1. property方式
语法格式:functionName.prototype.propertyName = value;

2. this方式

语法格式:this.propertyName = value;
实例属性定义存在两种方式
1. property方式 
语法格式:this.propertyName = value;
注意后面例子中thi使用的位置

### 125已知对象var obj = {},但对象的属性未知,如何对该对象的户型进行遍历?

```
   function allProps(obj){
      // 用来保存所有的属性名称和值\
      var prop = "";
      // 开始遍历
      for(var p in obj){
         // 方法 
         if(typeof(obj[p])=="function"){
            obj[p]();
         }else{
            // p为属性名称，obj[p]为对应属性的值
            props += p+"="+obj[p]+"\t"
         }
      }
      // 最后显示所有的属性
      alert(props);
   }

```
### 126 在javascript中,如何实现对象的私有属性,并说明原理

在javascript中没有块级作用域的概念,同样也没有私有属性的概念,但是存在着私有变量,如果我们想把一些护具封装隐藏起来要怎么做？想必大家已经想到了,可以通过闭包+私有变量的方式来实现对象的私有属性

1. 实例私有属性
实例私有属性的特点就是每个对象都会包含独立的属性,对象和对象之间没有共享,为了实现这个目标,可以在构造函数中增加一个私有的变量,然后定义公共的方法来访问这个私有变量
2. 静态私有属性
在有些情况下,我们可能希望数据全局共享,那么就会用到静态属性,同时,我们还希望这个属性是私有的,那么怎么辉县静私有属性呢,首先这个私有应该在构造函数的外包部,为了吧构造函数外部的变量和构造函数结合为一体,可以使用闭包把私有变量和构造函数都包含在其作用域中,为了在闭包外面访问内部的构造函数,可以会用一个全局变量来引用构造函数

### 127 请使用javascript语言创建一个对象来代表一个学生,学生要有以下户型

解析:
```
    function xs(name,age,frIEnd){
        this.name = name;
        this.age = age;
        this.frIEnd = frIEnd;
    }
    xs.prototype.play = function(){
        alert("football");
    }
    var s = new xs("Jeriy",22,["li","chen","zhan"]);
```

### 128 在javascript中obj.childNodes()和obj.children()的区别是什么?

解析:
1. childNodes:标准属性,它返回指定元素的子元素集合,包括HTML节点,所有属性,文本节点
可以通过nodeType来判断是哪种类型的节点，只有当nodeType==1时才是元素的节点,值为2时是属性节点,值为3时是文本节点
2. children:非标准属性,它返回指定元素的子元素的集合,但它只返回HTML节点,甚至不返回文本节点,虽然不是标准的DOM属性,但它和innerHTML方法一样,得到了几乎所有浏览器的支,因此,如果想获取指定元素的第一个HTML节点,可以使用childremn[0]来替代getFirst函数

### 129 编写一个函数，去掉数组的重复元素

解析:
```
   function unique(arr){
        var result = [],isRepeated;
        for(var i = 0,len = arr.length;i<len;i++){
           isRepeated = false;
           for(var j = 0,len = reult.length;j<len;j++){
              if(arr[i] == result[j]){
                 isRepeated = true;
                 break;
              }
           }
           if(!isRepeated){
               result.push(arr[i]);
           }
        }
        return result;
   }
```
### 130 如何创建一个对象?请举例说明
解析:我们可以利用javacript语法特征,以类的思想来创建对象
1. 原始方法,代码如下:
```
    var obj = new Object();
    obj.name = "Koji";      // 为对象添加属性
    obj.age = 21;
    obj.showName = function(){  // 为对象添加方法
       alert(this.name);
    }
    obj.showAge = function(){
        alert(this.age);
    }
    obj.showName();
    obj.showAge();

```
### 工厂方法,代码如下

```
    function createObj(){
        var obj = new Object(); // 创建对象
        obj.name =  "Koji";
        obj.age = 21;
        obj.showName = function(){
            alert(this.name);
        }
        obj.showAge = function(){
            alert(this.age);
        }
        return obj;  // 返回对象
    }
    var obj1 =  createObj();
    var obj2 =  createObj();

    obj1.showName();
    obj2.showAge();  // 21

```
下面这种方法提高了代码重用率,还可以改变工厂方法,传入参数赋值,代码如下
```
   function createObj(name,age){  // 构造对象时可以传入初始化参数
       var obj = new Object();  // 创建对象 
       obj.name = name;
       obj.age = age;
       obj.showName = function(){
          alert(thi.name);
       }
       obj.showAge = function(){
          alert(this.age);
       }
       return obj;  // 返回对象
   }

```
var obj1 =  createObj("koji",22);
var obj2 = createObj("Luo",21);
obj1.sshowName();
obj1.showAge();
obj2.showName();
obj2.showAge();  
```
该方式UI然可以提高代码的重用率,但和面向对象中类的概念相比,有一个很大的缺陷,面向对象强调对象的属性私有,但对象的方法是共享的,而上面的工厂方法在创建对象时,要为每个对象创建各自私有的方法,同时,由于为每个对象都创建逻辑相同的方法,所以很浪费内存

```
     function createObj(name,age){
         var obj =  new Object();  // 创建对象
         obj.name = name;
         obj.age = age;
         obj.showName = showName;
         obj.showAge = showAge;
         return obj;  // 返回对象
     }
     function showName(){  // 函数也是一个对象
        alert(this.name);
     }
     function showAge(){
        alert(this.age);
     }
     var obj1 =  createObj("Koji",22);
     var obj2 =  createObj("Luo",21);
     obj1.showName();
     obj1.showAge();
     obj2.showAge();
```
上面通过定义几个函数对象,解决了不同对象持有函数对象的私有问题,现在所有对象的方法都持有绗棉两个函数的引用,但这么一来,对象的函数又和对象相互独立了,这和面向对象中特定的方法属于特定类的思想不符合

构造含少数的方式和工厂方式一样,会为每个对象创建独享的函数对象,当然也可以将这些含糊对象定义在构造函数外面,这样又有了对象和方法相互独立的问题

// 原型方法,代码如下
```
   function Person(){  // 定义一个空构造函数,且不能传递参数
      // 将所有的属性的方法都赋予prototype属性
      Person.prototype.name = "Koji"  // 添加属性
      Peron.prototyp.age = 22;
      Peron.prototype.showName = function(){
           alert(this.name);
      }
      Person.prototype.showAge() = function(){
          alert(thi.age);
      }
      var obj1 = new Peron();  // 生成一个Person对象
      var obj2 = new Person();
      obj1.showName();
      obj2.showAge();
      obj2.showName();
   }
```
上面的代码通过obj1向obj1的属性array添加元素时,obj2的array属性的元素也跟着受到影响,原因在于obj1和obj2对象的array属性引用的hi同一个array对象,那么改变这个array对象,另一引用该Array对象的属性自然也会受到影响,混合的构造函数/原型方式会用构造函数定义对象的属性,使用原型定义对象的方法,这样可以做到属性的私有，而方法共享

混合的构造函数/原型方式,代码如下:
```
    function Person(name,age){
       this.name = name;
       this.age = age;
       thiss.array = new Array("Koji","Luo");
    }
    Peron.prototype.showName = function(){
        alert(this.name);
    }
    Person.prototype.showName =  function(){
        alert(this.name);
    }
    Person.prototype.showArray  = function(){
        alert(this.array);
    }
    Person._initialized = true;
    var obj1 =  new Person("Koji",22);
    var obj2 =  new Person("Luo",21);
    obj1.array.push("Kyo");
    obj1.showName();
    obj2.showArray();
    obj2.showName();
```
这种方法和构造函数/原型方式大同小异,只是将方法的添加放到了构造函数之中,同时在构造含糊Person上添加了一个属性用来保证if语句只能成功执行一次,在实际应用中,采用最广泛的是构造函数/原型方法,动态原型方法也很流行,它在功能上和构造函数/原型方法是等价的,不要单独使用构造函数/原型方法 

### 131 javascript中有那些内置对象?

Javascript中有11种内置对象:Array,String,Date,Math,Boolean,Number,Function，Global,Error，RegExp,Object

### 132. 什么是js的原型链型及原型链?

原型模型的主要思想是:先借用已有的系统作为原型模型,通过不断改进的样品,使得最后的产品就会用户所需要的,原型模型通过向用户提供原型来获取用户的反馈,使开发触动软件能够真正反映用户的需求,同时,原型模型采用逐步求精的方法完善原型,使得原型能够快速的响应,相对瀑布模型而言,原型模型更符合人们开发软件的习惯,是目前较流行的一种实用软件生存期模型

原型链一般在定义构造函数时用到,可以认为是针对构造函数的或者说是针对构造函数对应的类的,javascript没有对应继承的关键字,所以用原型链来模拟继承的效果

### 133 注释的代码会否可以实现?如不能实现请修改

### 137 请描述setTimeout和setInterval的区别?在性能上谁更好?为什么要用se
tTimeout和setInterval

因为setTimeout(表达式,延时时间)在执行时,是在载入后延迟指定时间去执行一次表达式m记住,次数是一次,而setInterval(表达式,交互时间)则不一样,它从载入后,每隔指定的时间就执行一次表达式,所以两者完全是不一样的,它从载入后,每隔指定的时间就执行一次表达式,所以,两者完全是不一样的,很多人习惯将setTimeout包含于被执行函数中,然后在函数外再次使用setTimeout来达到定时执行的目的,这样,函数外的setTimeout在执行函数时再次出发setTimeout,从而形成周而复始的定时效果,使用时各有各的优势,使用setInterval，需要手动停止tick出发,而使用嵌套setTimeout,可以根据方法内部本身的逻辑不在需要调用setTimeout，此时就等于停止了触发,其实两种方法完全可以相互模仿,具体使用哪个,就要看当时的需要而定了

### 145 简述typeof和instanceof的作用

typeof 返回一个字符串,用于说明元算数的类型
instanceof判断一个变量是否是某个对象(类的)实例,返回值是布尔类型的

