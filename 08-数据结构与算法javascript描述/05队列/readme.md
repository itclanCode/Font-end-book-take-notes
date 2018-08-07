   ### 队列

   队列是一种列表,不同的是队列只能在队尾插入元素,在队尾删除元素,队列用于存储按顺序排列的数据,先进后出,这点和栈不一样,在栈中,最后入栈的元素反而被优先处理,可以将队列想象成在银行前排队的人群,排在最前面的人第一个办理业务,新来的人只能在后面排队,直到轮到他们为止

   队列是一种先进先出的数据结构,队列被用在很多地方,比如提交操作系统执行的一系列进程,打印任务池等,一些仿真系统用队列没来模拟银行或杂货店里排队的顾客

   ### 5.1 对队列的操作

   队列的两种主要操作是:向队列中插入新元素和删除队列中的元素,插入操作也叫做入队,删除操作也叫做出队,入队操作在队尾插入新元素,出队操作删除对头的元素

   队列的另外一项重要的操作时读取对头的元素,这个操作叫做peek(),该操作返回队头元素,但不把它从队列中删除,除了队列中删除,除了读取队头元素,我们还想知道队列中存储了多少元素,可以使用length属性满足该需求,要想清空队列中的所有元素,可以使用clear()方法来实现

   ### 一个用数组实现的队列

   使用数组来实现队列看起来顺理成章,javascript中数组具有其他编程语言中没有的优点,数组的push()方法可以在数组末尾加入元素,shift()方法可以删除数组中的第一个元素,push()方法将它的参数插入数组中第一个开发的位置,该位置总在数组的末尾,即使是个空数组也是如此
   ```
     names = [];
     name.push('cynthia');
     names.push('Jennifer');
     print(names);  // 显示Cythia,Jenifer
   ```
   然后使用shift()方法删除数组的第一个元素 
   ```
      names.shift();
      console.log(names);
   ```
   准备开始实现Queue类,先从构造函数开始
   ```
     function Queue(){
        this.dataStore = [];
        this.enqueue = enqueue;
        this.front = front;
        this.back = back;
        this.toString =  toString;
        this.empty = empty;
     }
   ```
   enqueue();
   enqueue()方法向队列添加一个元素
   ```
      function enqueue(element){
         this.dataStore.push(element);
      }
   ```
dequeue()方法删除队首的元素
   ```
 function dequeue(){
     return this.dataStore.shift();
  }
   ```
   可以使用如下方法读取队首和队尾的元素
   ```
 function front(){
     return this.dataStore[0];
  }
  function back(){
     return this.dataStore[this.dataStore.length-1];
  }
   ```
   还需要toString()方法显示队列内的所有元素
   ```
  function toString(){
      var reStr = "";
      for(var i = 0;i<this.dataStore.length;++i){
         retStr += this.dataStore[i]+"\n";
      }
      return retStr;
   }
   ```
   最后,需要一个方法判断队列是否为空

   ```
      function empty(){
         if(this.dataStore.length == 0){
            return true;
         }else{
            return false;
         }
      }
   ```
   ### 5-1 展示了完整的Queue类定义和一些测试代码

   ```
       function Queue(){
                  this.dataStore = [];
                  this.enqueue = enqueue;
                  this.dequeue = dequeue;
                  this.front =  front;
                  this.back =  back;
                  this.toString = toString;
                  this.empty = empty;
                }
                function dequeue(){
                  return this.dataStore.shift();
                }
                function front(){
                  return this.dataStore[0];
                }
                function back(){
                  return this.dataStore[this.dataStore.length;++i]
                }
                function toString(){
                  var retStr = "";
                  for(var i = 0;i<this.dataStore.length;++i){
                       retStr += this.dataStore.length;++i;
                  }
                  return retStr;
                }
                function empty(){
                  if(this.dataStore.length == 0){
                         return true;
                  }else{
                    return false;
                  }
                }
                    // 测试程序
                    var q = new Queue();
                    q.enqueue('Meredith');
                    q.enqueue('Cynthia');
                    console.log(q.toString());
                    q.dequeue();
                    console.log("Front of queue:"+q.front());
                    console.log("Back of queue"+q.back());
   ```
   ### 5.3 使用队列:方块哦舞的舞伴分配问题

   背景:前面我们提到过,经常用队列模拟排列的人,下面我们使用队列来模拟跳方块舞的人,当男男女女来到舞池，他们按照自己的性别排成两队,当舞池中有地方空出来时,选两个队列中的第一个人组成舞伴,他们身后的人各自向前移动一位,变成新的队首,当一对舞伴宛入舞池时,主持人会大声喊除他们的名字,当一对舞伴走出舞池,且两排列中有任意一队没人时,主持人也会把这个情况告诉大家



为了模拟这种情况,我们把跳方块舞的男男女女的姓名存储在一个文本文件中
```
F Allison McMillan
M Frank Optiz
M Clayton Ruff
M Clayton Ruff
F Raymond Williams
M Bryan Frazer
M Danny Martin
F Aurora Adney
```
每个舞者信息都存储在一个Dancer对象中,封装成Dancer一功能函数,接收了两个name,sex形参数
```
function Dancer(name,sex){
   this.name = names;
   this.sex = sex;
}
```
下面我们需要一个函数,将舞者信息从文件中读到程序里来
```
function getDancers(males,females){
   var names =  read("dancers.txt").split("\n");
   for(var i = 0;i<names.length;++i){
      names[i] = names[i].split("");
   }
   for(var i = 0;i<names.length;++i){
      var dancer =  names[i].split("");
      var sex = dancer[0];
      var name = dancer[1];
      if(sex == "F"){
          females.enqueue(new Dancer(name,sex));
      }else{
         males.enqueue(new Dancer(name,sex));
      }
   }
}
```
舞者的姓名被从文件读入数组,然后trim()函数除去了每行字符串后的空格,第二个循环将每行字符串按性别和姓名分成两部分存入一个数组,然后根据性别,将舞者加入不同的队列



下面是一个函数将男性和女性组成舞伴,并且宣布配对结果
```
function dance(males,females){
   print("The dance partners are:\n");
   while(!females.empty()&& !males.empty()){
     person = females.dequeue();
     pustr("Female dancer is:"+person.name);
     person = males.dequeue();
     print("add the male dancer is:"+person.name);
   }
   print();
}
​```
### 5.4 使用队列对数据进行排序

队列不仅用于执行现实生活中与排队有关的操作,还可以用于对数据进行排序,计算机刚刚出现时，程序是通过穿孔机卡输入主机的,每张卡包含一条程序语句,这些穿孔卡装在一个盒子里,经一个机械装置进行排序,我们可以使用一组队列来模拟这一个过程,这种排序技术叫做基数排序,它不是最快的排序算法,但它展示了一些有趣的队列使用方法

对于0-99的数字,基数排序将数据集扫描两次,第一次按个位上的数字进行排序,第二次按十位上的数字进行排序,每个数字根据对应位上的数值被分在不同的盒子里,假设有如下数字:
```
91,46,85,15,92,35,31,22
```
经过技术排序第一次扫描之后,数字被分配到如下的盒子当中
```
Bin 0;
Bin 1:91,31
Bin 2:92,92 
Bin 3:
Bin 4:
Bin 5:85,15,35
Bin 6:46
Bin 7:
Bin 8:
BBin 9:
```
根据盒子的顺序,对数字进行第一次排序的结果如下:
```
Bin:0 
Bin:1 
Bin2:22 
Bin3:31,35
Bin4:46
Bin5:
Bin6:
Bin7:
Bin8:
Bin9: 91,92
```
最后,将盒子中的数字取出,组成一个新的列表,该列表即为拍好序的数字
```
15,22,31,35,46,85,91,92
```
使用队列代表盒子,可以实现这个算法,我们需要九个队列,每个对应一个数字,将所有的队列保存在一个数组中,使用取余和除法操作决定个位和十位,算法的剩余部分将数字加入相应的队列,根据个位数值对应重新排序,然后在根据十位上的数值进行排序，结果为排好序的队列,根据个位数值对其重新排序,然后在根据十位上的数值进行排序，结果为排好序的数字

下面是根据相应位(个位或十位)上的数值,将数字分配到相应的UI列的函数
```
   function distribute(nums,queues,n,digit){// 参数digit表示个位或十位上的值
      for(var i < 0;i<n;++i){
        if(digit == 1){
          queues[nums[i]%10].enqueue(nums[i]);
        }else{
          queues[math.floor(nums[i]/10)].enqueue(nums[i]);
        }
      }
   }
```
下面,从队列中收集数字的函数
```
   function collect(queues,nums){
      var i = 0;
      for(var digit = 0;digit<10;++digit){
         while(!queues[digit].empty()){
           nums[i++] = queues[digit].dequeue();
         }
      }
   }
```
### 例5-4 基数排序
```
function distribute(nums,queues,n,digit){
    for(var i =0;i<n;++i){
       if(digit == 1){
          queues[nums[i]%10].enqueue(nums[i]);
       }else{
          queues[Math.floor(nums[i]/10)].enqueue(nums[i]);
       }
    }
}
function collect(queues,nums){
    var i = 0;
    for(var digit = 0;digit<10;++digit){
       while(!queues[digit].empty()){
          nums[i++] = queues[digit].dequeue();
       }
    }
}
function dispArray(arr){
    for(var i = 0;i<arr.length;++i){
       putstr(arr[i]+"");
    }
}
// 主程序
var queues = [];
for(var i = 0;i<10;++i){
    queues[i] = new Queue();
}
var nums = [];
for(var i = 0;i<10;++i){
    nums[i] = new Queue();
}
var nums = [];
for(var i = 0;i<10;++i){
    nums[i] = Math.floor(Math.floor(Math.random()*101));
}
print("Before radix sort:");
display(nums);
distribute(nums,queues,10,1);
collect(queues,nums);
distribute(nums,queues,10,10);
collect(queues,nums);
print("\n\nAfter radix sort");
dispArray(nums);
```
### 优先队列

在一般情况下,从队列中删除元素,一定是率先入队的元素,但是也有一些使用队列的应用,在删除元素时不必遵守先进先出的约定,这种应用,需要使用一个叫做优先队列的数据结构来进行模拟

从优先队列中删除元素时,需要优先权的限制,比如医院急症科的候诊室,就是一个采取优先队列的例子,当病人进入候诊室树，分诊护士会评估患者病情的严重性,然后给一个优先级代码,高优先级的患者优先于低优先级的患者就医,同样优先级的患者按照先来先服务的顺序就医

先来定义存储队列元素的对象,然后在构建我们的优先队列系统

```
   function Patient(name,code){
      this.name = name;
      this.code = code;
   }
```
变量code是一个整数,表示患者的优先级或病情严重程度

现在需要重新定义dequeue()方法,使其删除队列中拥有最高优先级的元素,我们规定,优先码的值最小的元素优先级最高,新的dequeue()方法遍历队列的底层存储数组,从中找出优先码最低的元素,然后使用数组的splice()方法删除优先级最高的元素,新的dequeue()方法定义如下所示
```
   function dequeue(){
     var entry = 0;
     for(var i = 1;i<this.dataStore.length;++i){
        if(this.dataStore[i].code<this.dataStore[entry].code){
           entry = i;
        }
     }
     return this.dataStore.splice(entry,1);
   }
```
dequeue()方法使用简单的顺序查找方法寻找优先级最高的元素(优先码越小优先级越高,比如:1比5的优先级高)该方法返回包含一个元素的数组-从队列中删除的元素,最后,需要定义toString()方法来显示Patient对象

```
   function toString(){
      var retStr = "";
      for(var i = 0;i<this.dataStore.length;++i){
         retStr += this.dataStore[i].name+"code:"+this.dataStore[i].code+"\n"
      }
      return retStr;
   }
```
### 例5-5 优先队列的实现

```
   var p = new Patient("smith",5);
   var ed = new Queue();
   ed.enqueue(p);
   p = new Patient("jones",4);
   ed.enqueue(p);
   p = new Patient("Fehrench",6);
   ed.enqueue(p);
   p = new Patient("Brown",1);
   ed.enqueue(p);
   p = new Patient("Ingram",1);
   ed.enqueue(p);
   print(ed.toString());
   var seen = ed.dequeue();
   print("Patient being treated:"+seen[0].name);
   print("Patients waiting to beSeen:");
   print(ed.toString());
   var seen =  ed.dequeue();
   print("Patinent being treated"+seen[0].name);
   print(ed.toString());
   var seen = ed.dequeue();
   print("Patient being treated:"+seen[0].name);
   print(ed.toString()); 
```

程序输出结果如下
```
Switch code:5
Jones  code:4
Fehrenbach code:6
Brown code:1 

Patient being treated:Ingram
Patients waiting to be seen 
Swith code:5 
Fehrenbach code:6
```


