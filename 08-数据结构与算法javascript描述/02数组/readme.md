### 数组

数组是计算机编程世界里最常见的数据结构,任何一种编程语言都包含数组,只是形式上略有不同罢了,数组是编程语言中的内建类型,通常效率很高,可以满足不同需求的数据存储

### 2.1 javascript中对数组的定义

数组的的标准定义时:一个存储元素的线性集合,元素可以通过索引来任意存储,索引通常是数字,用来计算元素之间存储位置的偏移量,几乎所有的编程语言都有类似的数据结构,然而javascript中的数组却略有不同

JavaScript中的数组是一种特殊的对象,用来表示偏移量的索引是该对象的属性,索引可以鞥是整数,然而,这些数字索引在内部被转换为字符串类型,这是因为javascript对象中的属性名必须是字符串,数组在javascript中只是一种特殊的对象,所以效率上不如其他语言中的数组高

JavaScript中的数组,严格来说应该成为对象,是特殊的javascript对象,在内部都被归类为数组,由于Array在javascript中被当做对象,因此他有许多属性和方法可以编程时使用

### 2.2 使用数组

JavaScript中的数组非常灵活,单是创建数组和存储元素的方法就有好几种,也可以通过不同的方式对数组进行查找和排序,JavaScript1.5提供了一些函数,让程序员在处理数组时可以使用函数式编程技巧

### 2.2.1 创建数组

最简单的方式是通过[]操作符声明一个数组变量

```
  var numbers = [];
```
使用这种方式创建数组,你将得到一个长度为0的空数组,可以通过调用内建的length属性来验证这一点
另一种方式就是在声明数组变量时,直接在[]操作符内放入一组元素
```
  var numbers = [1,2,3,4,5];
  console.log(numbers.length);
```
还可以调用Array的构造函数创建数组
```
  var numbers = new Array();
  console.log(numbers.length); 
```
最后,在调用Array的构造函数时,可以只传入一个参数,用来指定数组的长度
```
  var numbers = new Array(10);
  console.log(numbers.length);
```
在脚本语言里很常见的一个特性是:数组中的元素不必是同一种数据类型,这一点和很多编程语言不通
```
  var object = [1,"joe",true,null]
```
可以调用Array.isArray()来判断一个对象是否是数组,如下所示
```
  var numbers = 3;
  var arr = [7,4,1776];
  console.log(Array.isArray(numbers));
  console.log(Array.isArray(arr));
```
创建数组的几种方式,哪种方式最好?大多数javascript转嫁推荐使用[]操作符,和使用Array的构造函数相比,这种方式呗认为效率更高

### 2.2.2 读写数组

在一条赋值语句中,可以使用[]操作符将数据赋值给数组,比如下面的循环，将1-100的数字赋给一个数组
```
  var nums = [];
  for(var i = 0;i<100;++i){
     nums[i] = i+1;
  }
```
还可以使用[]操作符读取数组中的元素,如下所示
```
var numbers = [1,2,3,4,5];
var sum = numbers[0]+numbers[1]+numbers[2]+numbers[3]+numbers[4];
console.log(sum);
```
如果要依次读取数组中的所有元素,使用for循环无疑会更加简单
```
  var numbers = [1,2,3,4,5,13,21];
  var sum = 0;
  for(var i = 0;i<numbers.length;++i){
      sum += numbers[i];
  }
  console.log(sum);
```
注意,这里使用数组的length的属性来控制循环次数,而不是直接使用数字,javascript中的数组也是对象,数组的长度可以任意增长,超出其创建时指定的长度,length属性反映的是当前数组中元素的个数,使用它,可以确保循环遍历了数组中所有的元素

### 2.2.3由字符串生成数组 

调用字符串对象的split()方法也可以生成数组,该方法通过一些常见的分隔符,比如分隔单词的空格,将一个字符串分成几部分,并将每部分作为一个元素保存于一个新建的数组中
```
  var sentence = "the quick brown fox jumped over the lazy dog";
  var words = sentence.split("");
  for(var i = 0;i<words.length;++i){
     console.log("word"+i+":"+words[i]);
  }
```

### 2.2.4 对数组的整体性操作

有几个操作时将数组作为一个整体进行的,首先,可以将一个数组赋给另外一个数组

```
  var nums =  [];
  for(var i = 0;i<10;++i){
     nums[i] = i+1;
  }
  var amenums = nums;
```
但是,当把一个数组赋给另外一个数组时,只是为被赋值的数组增加一个新的引用,当你通过原引用修改了数组的值,另外一个引用也会感知到这个变化,下面的的代码展示了这种情况
```
   var nums = [];
   for(var i = 0;i<100;++i){
      nums[i] = i+1;
   }
   var samenums = nums;
   nums[0] = 400;
   console.log(samenums[0]);
```
这种行为被称为浅复制,新数组依然指向原来的数组,一个更好的方案是使用深复制,将原数组中的每一个元素都复制一份到新数组中,可以写一个深复制函数来做这件事
```
   function copy(arr1,arr2){
      for(var i = 0;i<arr1.length;++i){
          arr2[i] = arr1[i];
      }
   }
```
这样,下面的代码输出就和我们希望的一样了
```
   var nums = [];
   for(var i = 0;i<100;++i){
      nums[i] = i+1;
   }
   var samenums = [];
   copy(nums,samenums);
   nums[0] = 400;
   console.log(samenums[0]);
```
另一个将数组视为整体的操作的是print()函数,用它可以显示数组的元素,比如:
```
  var nums = [1,2,3,4,5]
  console.log(nums);
```
### 2.3.1 存储函数

Javascript提供了一组用来访问数组元素的函数,叫做存取函数,这些函数返回目标数组的某种变体

### 2.3.1 查找元素

indexOf()函数时最常用的存取函数之一,用来查找传进来的参数在目标数组中是否存在,如果目标数组包含该参数,就返回该元素在数组中的索引,如果不包含,就返回-1
```
   var names = ["David","cynthia","Raymond","clayton","jennifer"];
   pusstr("Enter a name to search for:");
   var name =  readline();
   var position = names.indexOf(name);
   if(position >= 0){
      print("Found"+name+"at position"+positon);
   }else{
      print(name+"not found in array");
   }
```
执行该程序,并且输出cnthia
如果数组中包含多个相同的元素,indexOf()函数总是返回第一个与参数相同的元素的索引,有另外一个工嗯呢该与之类似的函数,lastIndexOf(),该函数返回相同元素中最后一个元素的索引,如果没有找到相同的元素,则返回-1,下面是一个例子:
```
  var names = ["David","Mile","Cynthia","Raymond","Clayton","Mike","Jennifer"];
  var name = "Mike";
  var firstPos =  names.indexOf(name);
  print("First found"+name+"at position"+firstPos);
  var lastPos = names.lastIndexOf(name);
```

### 2.3.2 数组的字符串表示

有两个方法可以将数组转化为字符串,join()和toString(),这两个方法都返回一个包含数组所有元素的字符串,各元素之间用逗号分隔开,下面是一些例子

```
   var names = ["David","Cynthia","Raymond","clayton","Mike","jennifer"];
   var namestr = names.join();
   print(namestr);
   namestr = names.toString();
   print(namestr);
```
事实上,当直接对一个数组使用print()函数时,系统会自动调用那个数组的toString()方法

### 2.3.3 由已有数组传经的新数组

 concat()和splice()方法允许通过已有数组创建新数组,concat方法可以合并多个数组创建一个新数组,splice()方法截取一个数组的子集创建一个新数组

 我们先来看看concat()方法的工作原理,该方法发起者是一个数组,参数是另一个数组,作为参数的数组,其中的所有元素都被连接到调用concat()方法的数组后面,下面的程序展示了concat()方法的工作原理

 ```
    var cisDept = ["Mike",""clayton],"Terrill","Danny","jennifer"];
    var dmpDent = ["Raymond","Cynthia","Bryan"];
    var itDiv = cisDept.concat(dmDept);
    console.log(itDiv);
    itDiv = dmpDept.concat(cisDept);
    console.log(itDiv);
 ```
 第一行首先输出cisDept数组里的元素,第二行首先输出dmpDept数组里的元素
 splice()方法从现有的数组里截取一个新数组,该方法的第一个参数是截取的起始索引,第二个参数是截取的长度,下面的程序展示了splice()方法的工作原理
 ```
   var itDiv = ["Mick","Clayton","Terrill","Raymond","Cynthia","Danny","Jennifer"];
   var dmpDept =  itDiv;
   console.log(dmpDept);   // Raymond,cynthia,Danny
   console.log(cisDept);   // Mike,Clay,Terrill,Jennifer
 ```

 ### 2.4 可变函数

 JavaScript拥有一组可变函数,使用它们,可以不必引用数组中的某个元素,就能够改变数组内容,这些函数常常画繁为简,让困难的事情变得容易

 ### 2.4.1 为数组添加元素

 有两个方法可以为数组添加元素,push()和unshift(),push()方法会将一个元素添加到数组末尾
 ```
   var nums =  [1,2,3,4,5];
   console.log(nums);
   nums.push(6);
 ```
 也可以使用数组的length属性为数组添加元素,但push()方法看起来更加直观
 ```
    var nums = [1,2,3,4,5];
    console.log(nums);
    nums.push(6);
    console.log(nums);  // 1,2,3,4,5,6
 ```
 也可以使用数组的length属性为数组添加元素,但push()方法看起来更直观 
 ```
    var nums = [1,2,3,4,5,6];
    console.log(nums);
    nums[nums.length] = 6;
    console.log(nums);  //1,2,3,4,5,6
 ```
 和在数组的末尾添加元素比起来,在数组的开头添加元素更难,如果不利用数组提供的可变函数,则新的元素添加进来后,需要把后面的每个元素都相应地向后移一个位置
 ```
    var nums = [2,3,4,5];
    var newnum = 1;
    var N =  nums.length;
    for(var i = N;i>=0;--i){
        nums[i] = nums[i-1];
    }
    nums[0] =  newnum;
    console.log(nums);
 ```
 随着数组中存储的元素越来越多,上述代码将会变得越来越低效
 unshift()方法可以将元素添加在数组的开头,下述代码展示了该方法的用途
 ```
   var nums = [2,3,4,5];
   console.log(nums); 
   var newnum = 1;
   nums.unshift(newnum);
   console.log(nums);
   nums = [3,4,5];
   nums.unshift(newnum,2);
   console.log(nums);
 ```
 第二次出现的unshift()方法展示了可以通过一次调用,为数组添加多个元素

 ### 2.4.2 从数组中删除元素

 使用pop()方法可以删除数组末尾的元素
 ```
    var nums = [1,2,3,4,5,9];
    nums.pop();
    console.log(nums);  // 1,2,3,4,5
 ```
 如果没有可变函数,从数组中删除第一个元素需要将后续元素各自向前移动一个位置,和在数组开头添加一个元素一样低效
 ```
   var nums = [9,1,2,3,4,5];
   console.log(nums);
   for(var i = 0;i<nums.length;++i){
      nums[i] =  nums[i+1];
   }
   console.log(nums);
 ```
 除了要将后续元素前移意味,还多出了一个元素,当打印出数组中的元素时,会发现最后多出一个逗号
 shift()方法可以删除数组的第一个元素,下述代码展示了该方法的用法
 ```
   var nums = [9,1,2,3,4,5];
   nums.shift();
   console.log(nums);
 ```
 对数组进行排序是经常会遇到的需求,如果元素是字符串类型,那么数组的可变方法sort()就非常好使
 ```
   var names = ["David","Mike","Cynthia","Claython","Bryan","Raymond"];
   names.sort();
   console.log(names);  
 ```
 但是如果数组元素是数字类型,sort()方法的排序结果就不能让人满意了
 ```
   var nums =  [3,1,2,100,4,200];
   nums.sort();
   console.log(nums);
 ```
sort()方法是按照字典顺序对元素进行排序的,因此它假定元素都是字符串类型,在上一个例子中,即使元素时数字类型,也被认为是字符串类型,为了让sort()方法也能排序数字类型的元素,可以在调用方法时传入一个大小比较函数,排序时，sort()方法将会根据该函数比较数组中两个元素的大小,从而决定整个数组的顺序

对于数字类型,该函数可以是一个简单的相减操作,从一个数字中减去另外一个数字,如果结果为负,那么背减数小于减数,如果结果为0,那么被减数与减数相等,如果结果为正,那么被减数大于减数

将这些搞清楚之后,传入一个大小比较函数,再来看看前面的例子
```
   function compart(num1,num2){
      return num1-num2;
   }
   var nums = [3,1,2,100,4,200];
   nums.sort(compare);
   console.log(nums);  
   sort()函数使用了compare()函数对数组按照数字大小进行排序,而不是按照字典顺序
```

### 2.5 迭代器方法

最后一组方法是迭代器方法,这些方法对数组中的每个元素应用一个函数,可以返回一个值,一组值或者一个新数组

### 2.5.1 不生成新数组的迭代器方法

这组中第一个方法是forEach(),该方法接受一个函数作为参数,对数组中的每个元素使用该函数,下面这个例子展示了如何使用该方法
```
   funciton square(num){
        console.log(num,num*num);
   }
   var nums = [1,2,3,4,5,6,7,8,9,10];
   nums.forEach(square);
```
另一个迭代器方法是every(),该方法接受一个返回值为布尔类型的函数,对数组中的每个元素使用该函数,如果对于所有的元素,该函数均返回true,则该方法返回true,下面是一个例子
```
   function isEven(num){
      return num%2 = 0;
   }
   var nums = [2,4,6,8,10];
   var even = nums.every(isEven);
   if(even){
      console.log("all numbers are even");
   }else{
      console.log("not all numbers are even");
   }
```
some()方法也接受一个返回值为布尔类型的函数,只要有一个元素使用该函数返回true,该方法就返回true
```
    function isEven(num){
       return num % 2 == 0; 
    }
    var nums = [1,2,3,4,5,6,7,8,9];
    var someEven = nums.some(isEven);
    if(someEven){
       console.log("some numbers are even");
    }else{
       console.log("no numbers are even");
    }
    nums = [1,3,5,7,9];
    someEven = nums.some(isEven);
    if(omeEven){
       console.log("ome numbers are even");
    }else{
      console.log("no numbers are even");
    }
```
reduce()方法接受一个函数,返回一个值,该方法会从一个累加值开始,不断对累加和数组中的后续元素调用该函数,直到数组中最后一个元素,最后返回得到的累加值,下面的这个例子展示了如何使用reduce()方法为数组中的元素求和
```
    function add(runnningTotal,currentValue){
       return runningTotal+currentValue;
    }
    var nums = [1,2,3,4,5,6,7,8,9];
    var sum = nums.reduce(add);
    console.log(sum);

```
reduce()方法也可以用来将数组中的元素连接成一个长的字符串
``` 
   function concat(accumulatedString,item){
        return accumlatedString+item;
   }
   var words = ["the","quick","brown","fox"];
   var sentence = words.reduce(concat);
   console.log(sentence);
```
javascript还提供了reduceRight()方法,和reduce()方法不同,它是从右到左执行,下面的程序使用reduceRight()方法将数组中的元素进行翻转
```
    function concat(accumulatedString,item){
      return accumulatedString+item;
    }
    var words = ["the","quick","brown","fox"];
    var sentence = words.reduceRight(concat);
    console.log(sentence);
```
### 2.5.2 生成新数组的迭代器方法

有两个迭代器的方法可以产生新数组,map()和filter(),map()和forEach()优点儿像,对于数组中的每个元素使用某个函数,两者的区别是map()返回一个数组,该数组的元素是对原有元素应用某个函数得到的结果
```
   function curve(grade){
      return grade += 5;
   }
   var grade = [77,65,81,92,83];
   var newgrades = grades.map(curve);
   console.log(newgrades);
```
<!-- 下面是对一个字符传输组使用map方法的例子 -->
```
    function first(word){
       return word[0];
    }
    var words = ["for","your","information"];
    var acronym = words.map(first);
    console.log(acronym.join(""));
```
在上面的例子中,数组acronym保存了数组words中每个元素的第一个字母,然而,如果想将数组显示为真正的缩略形式,必须想办法除掉连接每个数组元素的逗号,如果直接调用toString()方法,就会显示出这个逗号,调用join()方法,为其传入一个空字符串作为参数,则可以帮助我们解决这个问题

filter()和every()类似,传入一个返回值为布尔类型的函数,和every()方法不同的是,当对数组中的所有元素应用该函数,结果均为true时,该方法并不返回true,而是返回一个新数组,该数组包含应用该函数后结果为true的元素
```
   function isEven(num){
    return num %2 == 0;
   }
   function isOdd(num){
     return num % 2!= 0;
   }
   var nums = [];
   for(var i = 0;i<20;++i){
      num[i] = i+1;
   }
   var evens = nums.filter(isEven);
   console.log(Event numbers);
   console.log(evens);
   var odds =  nums.filter(isOdd);
   console.log("Odd numbers");
   console.log(odds);
```
下面是另一个使用filter()方法的有趣案例
```
   function passing(num){
      return num >= 60;
   }
   var grades = [];
   for(var i = 0;i<20;++i){
      grades[i] = Math.floor(Math.random()*101);
   }
   var passGrades = grades.filter(passing);
   console.log("All grades");
   console.log(grades);
   console.log("passing grades");
   console.log(passGrades);
```
当然,还可以使用filter()方法过滤字符串数组,下面的这个例子过滤掉了那些不包含cie的单词
```
    function afterc(str){
       if(str.indexOf("cie")>-1){
          return true;
       }
       return false;
    }
    var words = ["recieve","deceive","percieve","deceit","concieve"];
    var isspelled = words.filter(afterc);
    console.log(misspelled);
```
### 二维和多维数组

javascript只支持一维数组,但是通过哟在数组里保存数组元素的方式,可以轻松的创建多维数组

### 2.6.1 创建多维数组

二维数组类似一种由行和列构成的数据表格,在javascript中创建二维数组,需要先创建一个数组,然后让数组的每个元素也是一个数组,最起码,我们需要知道二维数组要包含多少行,有了这个信息,就可以创建一个N行1列的二维数组了
```
   var twod = [];
   var rows = 5;
   for(var i = 0;i<rows;++i){
       twod[i] = [];
   }
```
这样做的问题是,数组中的每个元素都是undefined,为其增加一个新方法,该方法根据传入的参数,设定了数组的行数,列数,和初始值,下面是这个犯法的定义
```
   Array.matrix = function(numrows,numcols,initial){
       var arr = [];
       for(var i = 0;i<numrows;++i){
          var columns = [];
          for(var j = 0;j<numcols;++j){
            columns[j] = initial;
          }
          arr[i] =  columns;
       }
       return arr;
   }
```
下面是测试该方法的一些测试代码
```
     var nums = Array.matrix(5,5,0);
     console.log(nums[1][1]); // 显示0
     var names = Array.matrix(3,3,"");
     names[1][2] = "Joe";
     print(name)[1][2];
     还可以仅用一行代码就会创建并且使用一组初始化来初始化一个二维数组
     var grades = [[89,77,78],[76,82,81],[91,94,89]];
     console.log(names[1][2]);
```
### 2.6.2 处理二维数组的元素

处理二维数组中的元素,有两种最基本的方式,按列访问和按行访问,我们使用前面创建的数组grade来展示着两种方式的工作原理

对于两种方式,我们均使用一组嵌入式的for循环,对于按列访问,外层循环对应行,内层循环对应列,以数组grades为例,每一行对应一个学生成绩记录,我们可以将该学生的所有成绩相加,然后除以科目数得到该学生的平均成绩
```
    var grades = [[89.77,78],[76,82,81],[91,94,89]];
    var total = 0;
    var average = 0.0;
    for(var row = 0;row<grades.length;++row){
       total += grades[row][col];
    }
    average = total /grades.length;
    console.log("Student"+parseInt(row+1)+"average:"+average.toFixed(2));
    total = 0;
    average = 0.0;
```
内存循环由下面这个表达式控制
```
   col < grades[row].length;
```
### 2.6.3 参差不齐的数组

参差不齐的数组是指数组中每行的元素个数彼此不同,有一行可能包含三个元素,另一个行可能包含五个元素,有些行甚至只包含一个元素,很多编程语言在处理这种参差不齐的数组时表现都不是很好,但是JavaScript却表现良好,因为每一行长度是通过计算得到的

为了给个示例,假设数组grades中,每个学生成绩记录的个数不一样,不用修改代码,依然可以正确的计算出正确的平均分
```
    var grades = [[89,77],[76,82,81],[91,94,89,99]];
    var total =0;
    var average = 0.0;
    for(var rw = 0;row<grades.length;++row){
      for(var col =0;row<grades.length;++row){
         total += grades[row][col];
      }
      average = total /grades[row].length;
      console.log("student"+parseInt(row+1)+"average:"+average.toFixed(2));
      total = 0;
      average = 0.0;
    }

```
### 2.7 对象数组

到现在为止,本章讨论的数组都只包含基本数据类型的元素,比如数字和字符串,数组还可以包含对象,数组的方法和属性对象依然适用

```
    function Pont(x,y){
      this.x = x;
      this.y = y;
    }
    function displayPts(arr){
        for(var i = 0;i<arr.length;++i){
           console.log(arr[i].x+","+arr[i].y);
        }
    }
    var p1 = new Point(1,2);
    var p2 = new Point(3,5);
    var p3 = new Point(2,8);
    var p4 = new Point(4,4);
    var points = [p1,p2,p3,p4];
    for(var i = 0;i<points.length;++i){
        print("Point"+parseInt(i+1)+":"+points[i]+","+points[i].y);
    }
    var p5 = new Point(12,-3);
    points.push(p5);
    console.log("After push");
    displayPts(points);
    points.shift();
    console.log("After shift:");
    displayPts(points);
```
### 2.8 对象中的数组

在对象中,可以使用数组存储复杂的数据,本书中讨论的很多数据都被实现一个对象,对象内部使用数组保存数据

我们创建了一个对象,用于保存观测到最高气温,用于保存观测到的最高气温,该对象有两个方法:一个方法用来增加一条新的气温记录,另外一个方法用来计算存储在对象中的平均气温
```
   function weekTemps(){
       this.dataStore = [];
       this.add = add;
       this.average = average;
   }
   function add(temp){
      var total = 0;
      for(var i = 0;i<this.dataStore.length;++i){
          total += this.dataStore[i];
      }
      return total/this.dataStore.length;
   }
   var thisWeek = new weekTemps();
   thisWeek = new weekTemp();
   thisWeek.add(52);
   thisWeek.add(55);
   thisWeek.add(61);
   conosle.log(thisWeek.average());  
```

add()方法用到了数组的push()方法,将元素添加到数组dataStore中,为什么这个方法名为add()而不是puh()?这是因为在定义方法时,使用一个更直观的名字是常用的技巧,不是所有人都知道puh一个元素是什么意思,但是所有人都知道add一个元素是什么意思

