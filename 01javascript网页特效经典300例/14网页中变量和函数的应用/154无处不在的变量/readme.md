### 无处不在的变量

变量和函数式任何一种计算机语言基本的组成元素,这是因为计算的组成核心就是程序和数据,变量用来保存数据,函数用来计算逻辑,正是因为javascript的动态性,才使得他的变量和函数显得非常有特点,而且功能很强大

### 无处不在的变量
### 实例描述
可以这么说,如果没有变量,那么程序将无法进行,而对于javascript来说,变量更是无处不在,甚至可以这么认为,所有可以称作元素的东西都是一个变量
### 实现代码
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>无处不在的变量</title>
</head>
<body style="text-align:center">
       

       <script>
                var a,b;  // 定义变量a,b
                var c;    // 定义变量c
                function abc(){  // 定义函数abc,它也是一个函数
                    a = 10;          // 为变量a赋值
                    b = "hello";     // 为变量b赋值
                    c = function(){} // 变量c本身就是一个函数
                }
                abc();     // 执行abc函数
                alert(b);  // 展示b的值
       </script>
</body>
</html>
```
### 具体分析
最常规的声明变量的方式是使用"var"关键词,当然,也可以不写var,直接使用变量名,之所以这样使用,与javascript弱数据类型的特点是分不开的,javascript的变量类型可以是动态类型指定,比如实例中的变量a和b,他们的值是undefined,变量c赋值为一个函数,这是什么意思呢?