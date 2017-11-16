### 巧妙的使用内部变量

### 实例描述
javascript变量的作用范围大致可以分为两种:全局变量和局部变量,定义在函数内部的变量的局部变量,而定义在函数外部的变量是全局变量,但是因为javascript没有块区域的概念,所以会出现一些特殊的情况
### 实现代码
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>巧妙使用内部变量</title>
</head>
<body style="text-align:center">
      


        <script>
              var scope = "我是全局变量";   // 自定义全局变量scope
              function fun(){     // 定义函数fun()
                  console.log(scope);   // 打印scope变量的值
                  var scope = "我是局部变量"; // 重新定义一个局部变量,名称也scope
                  console.log(scope);  // 在打印scope变量的值
              }
              fun();            // 执行fun()函数
        </script>
</body>
</html>
```
### 运行效果
![巧妙地使用变量](img/巧妙地使用内部便令.gif)
### 具体分析
第一个scope的值是undefined,这是因为javascript在处理函数,是把函数放在一个执行上下文中的,在创建这个执行上下文时,会把函数需要所有局部预先定义好,即使scope的定义不在第一行,也会先定义好,所以当执行函数的第一句的,此时的scope变量还是undefined,因此