### 列表

在日常生活当中,人们经常使用列表,购物清单,十佳榜单,最后十名榜单等,计算机程序也在使用列表,尤其是列表保存的元素不是太多时,当不需要在一个很长的序列中查找元素时,或者对其进行排序时,列表显得尤为有用,反之,如果数据结构非常复杂,列表的作用就没有那么大了

本章展示了如何创建一个简单的列表类,我们首先给出列表的抽象数据类型定义,然后描述入社实现该抽象是数据类型(ADT),最后,分析几个列表适合解决的实际问题

### 3.1 列表的抽象数据类型定义

为了设计列表抽象数据类型,需要给出列表的定义,包括列表应该拥有哪些属性,应该在列表上执行哪些操作

列表是一组有序的数据,每个列表中的数据项称为元素,在javascript中,列表中的元素可以是任意数据类型,列表中可以保存多少元素并没有事先限定,实际使用时元素的数量受到程序内存限制

不包含任何元素的列表为空列表,列表中包含元素的个数称为列表的Length,在内部实现上,用一个变量listsize保存列表中元素的个数,可以在列表末尾append一个元素,也可以在一给定的元素后或列表的起始位置insert一个元素,使用remove方法从列表中删除元素,使用clear方法清空列表中所有元素

还可以使用toString()方法显示列表中的所有元素,使用getElement()方法显示当前元素列表拥有描述元素位置的属性,列表有前右后(分别对应front和end),使用next()方法可以从当前元素移动到下一个元素,使用prev()方法可以移动到当前元素的前一个元素,还可以使用moveTo()方法直接移动到指定位置,这里的n表示要移动到第n个位置,currPos属性表示列表中当前位置

列表的抽象数据类型并未指明列表的存储结构,在本章实现中,我们使用一个数组dataStore来存储元素

1. listSize(属性):列表的元素个数
2. pos(属性):列表当前位置
3. length(属性):返回列表中元素的个数
4. clear(方法):清空列表中所有元素
5. toString(方法):返回列表的字符串形式
6. getElement(方法):返回当前位置的元素
7. insert(方法):在现有元素后插入新元素
8. append(方法):在列表的末尾添加新元素
9. remove(方法):从列表中删除元素
10.front(方法):将列表的当前位置移动到第一个元素
11.end(方法):将列表的当前位置移动到最后一个元素
12.prev(方法):将当前位置后移一位
13.next(方法):将当前位置前移一位
14.hasNext(方法):判断后一位
15.hasPrev(方法):判断前一位
16.currPos(方法):返回列表的当前位置
17.moveTo(方法):将当前位置移动到指定位置

### 实现列表类

根据上面定义的列表抽象数据类型,可以直接实现一个list类,让我们从定义构造函数开始,虽然它本身并不是列表抽象数据类型定义的一部分

```
    function List(){
        this.listSize = 0;
        this.pos = 0;
        this.dataStore = []; // 初始化一个空数组来保存列表元素
        this.clear =  clear;
        this.find = find;
        this.toString =  toString;
        this.insert =  insert;
        this.append =  append;
        this.remove = remove;
        this.front = front;
        this.end = end;
        this.prev =  prev;
        this.next = next;
        this.hasNext;
        this.hasPrev;
        this.length = length;
        this.currPos = currPos;
        this.moveTo = moveTo;
        this.getElement = getElement;
        this.contains = contains;
    }
```
### 3.2.1 append给列表添加元素
我们要实现第一个方法是append(),该方法给列表的下一个位置增加一个新的元素,这个位置刚刚好等于变量listSize的值
```
   function append(element){
       this.dataStore[this.listSize++] = element;
   }
```
当新元素就位后,变量ListSize加1
### 3.2.2 remove：从列表中删除元素

接下来,让我们看看如何从列表中删除一个元素,remove()方法是clist类中较难实现的一个方法,首先,需要在列表中找到该元素,然后删除它,并且调整底层的数组对象以填补删除该元素后留下的空白,可以使用splice()方法简化这一过程,让我们先从一个辅助方法find()开始,该方法用于查找要删除的元素
```
  function find(element){
     for(var i = 0;i<this.dataStore.length;i++){
        if(this.dataStore[i] == element){
           return i;
        }
     }
  }
```
### 3.2.3 find:在列表中查找某一个元素

find()方法通过对数组对象dataStore进行迭代,查找给定元素,如果找到,就返回该元素在列表中的位置,否则返回-1,这是在数组中找不到指定元素时返回的标准值,我们可以在remove()方法中利用此值做错误的校验

remove()方法使用find()方法返回的位置对数组dataStore进行截取,数组改变后将量listSize的值减1以反映列表最新长度,如果元素删除成功,该方法返回true,否则返回false,代码如下所示
```
    function remove(element){
       var foundAt = this.find(element);
       if(foundAt>-1){
          this.dataStore.splice(foundAt,1);
          --this.listSize;
          return true;
       }
       return false;
    }
```
### 3.2.4 length:列表中有多少个元素
length()方法返回列表中元素的个数

```
    function length(){
        return this.listSize;
    }
   }
```
### 3.3.5 toString:显示列表中的元素

现在是时候创建一个方法,用来显示列表中的元素了,下面是一段简单的代码,实现了toString()方法:
```
    function toString(){
        return this.dataStore;
    }
```
严格来说,该方法返回的是一个数组,而不是一个字符串,但它的目的是为了显示列表的当前状态,因此返回一个数组就够了

让我们暂且从实现clist类的工中解放出来,来看看这个类目前表现如何,下面是一个简短的测试代码,检验了我们之前创建的方法
```
   var  name =  new  List();
   names.append("Cynthia");
   names.append("Raymod");
   console.log(names.toString());
   names.remove("Raymond");
   console.log(namees.toString());
```
### 3.2.6 insert:向列表中插入一个元素]

接下来要讨论的方法是insert(),如果在前面的列表中除了Raymond,但是现在又想将它放回原来的位置,该怎么办?insert()方法需要知道将元素插入到什么位置,因此现在我们假设插入的是插入到列表中某个元素之后,知道这些,就可以定义insert()方法了
```
   function insert(element,after){
      var insertPos = this.find(after);
      if(insertPos>-1){
         this.dataStore.splice(insertPos+1,0,element);
         ++this.listSize;
         return true;
      }
      retrun false;
   }
```
在实现中,insert()方法用到了find()方法,find()方法会寻找传入的after参数在列表中的位置,找到该位置后,使用splice()方法将新元素插入该位置之后,然后将变量listSize1并返回true,表明插入成功

### 3.2.7 clear:清空列表中所有的元素

接下来,我们需要一个方法清空列表中的所有元素,为插入新元素腾出空间
```
   function clear(){
      delete this.dataStore;
      this.dataStore.length = 0;
      this.listSize = this.pos = 0;
   }
```
clear()方法使用delete操作符删除数组dataStore,接着在下一行创建一个空数组,最后一行将listSize和pos的值设为1,表明这是一个新的空列表

### 3.2 contains:判断给定值是否在列表中

当需要判断一个给定值是否在列表中时,contains()方法就变得很有用,下面是该方法的定义
```
 function contains(element){
    for(var i =0;i<this.dataStore.length;++i){
       if(this.dataStore[i]==element){
          return true;
       }
    }
    return false;
 }
```
### 3.2.9 遍历列表

最后一组方法允许用户在列表上自由移动,最后一个方法getElement()返回列表的当前元素

```
   function front(){
      this.pos = 0;
   }
   function end(){
     this.pos = this.listSize-1;
   }
   function prev(){
      --this.pos;
   }
   function next(){
      if(this.pos<this.listSize){
         ++this.pos;
      }
   }
   function currPos(){
     return this.pos;
   }
   function moveTo(postion){
     this.pos = positon;
   }
   function getElement(){
      return this.dataStore[this.pos];
   }
   function hasNext(){
      return this.pos<this.list size;
   }
   function hasPrev(){
      return this.pos >= 0;
   }
```
让我们创建一个有姓名组成的列表,来展示怎么使用这些方法
```
   var names = new List();
   names.append("Clayton");
   names.append("Cynthia");
   names.append("Jennifer");
   names.append("Bryan");
   names.append("Danny");
   names.front();
   console.log(names.getElenment()); 
```
### 3.3 使用迭代器访问列表
使用迭代器,可以不必关心数据的内部存储方式,以实现对列表的遍历,前面提到的方法front(),end(),next()和currPos就实现了clist类的一个迭代器,以下是和使用数组索引的方式相比,使用迭代器的一些优点
* 访问列表元素时不必关心底层的数据存储结构
* 当为列表添加一个元素时,索引的值就不对了,此时只用更新列表,而不用更新迭代器
* 可以用不同类型的数据存储方式实现clist类,迭代器为访问列表里的元素提供了一种统一的方式
* 了解这些优点后,来看一个使用迭代器遍历列表的例子

```
  for(names.front();names.hasNext();names.next()){
    console.log(names.getElement());
  }
```
在for循环的一开始,将列表的当前位设置为第一个元素,只要currPos的值小于列表的长度,就一直循环,每一次循环都调用next()方法将当前位置向前移动一位
同理:还可以从后向前遍历列表,代码如下
```
  for(names.end();names.hasPrev();names.preve(){
    console.log(names.getElement());
  }
```
循环列表的最后一个元素开始,当前位置大于或等于0时,调用prev()方法后移一位
,迭代器只是用来在列表上随意移动,而不应该和任何为列表增加或删除元素的方法使用

### 3.4 读取文本文件

```
  function createArr(file){
      var arr = read(file).split("\n");
      for(var i =0;i<arr.length;++i){
         arr[i] =  arr[i].trim();
      }
      return arr;
  }
```
### 3.4.2 使用列表管理影碟租赁

下一步要将数组movies中的元素保存到一个列表中,代码如下:
```
   var movieList = new List();
   for(var i = 0;i<movies.length;++i){
      movieList.append(movies[i]);
   }
```
现在我们可以写一个函数来显示影碟店里现有的影碟清单了
```
   function displayList(list){
      for(list.front();list.currPos()<list.length();list.next()){
         print(list.getElement());
      }
   }
```
displayList()函数对于原生的数据类型没有什么问题,比如由字符串组成的列表,但是它用不了自定义类型,比如我们将在下面定义的customer对象,让我们对它稍作修改,让它可以发现列表是由customer对象组成的,这样就可以对应的对其进行显示了,下面是重新定义的displayList()函数
```
   functon displayList(list){
      for(list.front();list.currPos()<list.length();list.next()){
         if(list.getElement() instanceof Customer){
           console.log(list.getElement()["name"])+","+list.getElement()["movie"];
         }else{
            console.log(list.getElement());
         }
      }
   }

```
对于列表中的每一个元素,都使用instanceof操作符判断该元素是否是Customer对像,如果是,就使用name和Movie做索引,得到客户检出的相应条目的值,如果不是,返回该元素即可

现在已经有了列表的movies，还需要创建一个列表customers，用来保存在系统中检出电影的客户
```
  var customers = new List();
```
该列表包含customer对象,该对象由用户的姓名和用户检出的电影组成,下面是customer对象的构造函数
```
   function Customer(name,movie){
       this.name = name;
       this.movie = movie;

   }
```
接下来需要创建一个允许客户检出电影的函数,该函数有两个参数,客户姓名和客户想要检出的电影,如果该电影目前可以租赁,该方法会从影碟店的影碟清单里删除该元素
下面是用于检出电影的函数的定义
```
   function checkOut(name,movie,movieList,customerList){
      if(movieList.contains(movies)){
         var c = new Customer(name,movie);
         customerList.append(c);
         movieList.remove(movie);
      }else{
        console.log(movie+"is not aviailable");
      }
   }
```
该方法首先查询想要租赁的电影是否存在,如果可以,就创建一个新的customer对象,该对象包含影片的暂时不存在,则显示一行简短的提示
可以用下列简单代码测试checkOut()函数
```
   var movies = createArr('films.txt');
   var movieList = new List();
   var customer = new List();
   for(var i = 0;i<movies.length;++i){
      movieList.append(movies[i]);
   }
   console.log("Availiable movies\n");
   displayList(movieList);
   checkOut("Jane one","The Godfather",movieList,customers);
   console.log("\nCustomer Rentals");
   displayList(Customers);
```
输出显示"The Godfather"从影碟列表中删除了,跟着又被加入了客户列表