### 无所不能的变量载体
### 实例描述
变量的类型可以是一个函数,如果变量是函数,那么该函数是否能传递参数呢?是否能和操作普通函数一样进行各种操作呢?
### 实现代码
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>无所不鞥的变量载体</title>
</head>
<body style="text-align:center" onload = "callme(f)">
          

          <script>
                // 定义变量f，并为它赋值,函数名时f
                var f =  function(){
                    alert("我是一个函数");  // 函数的功能就是执行alert操作
                }
                // 定义函数callme(),传入参数就是一个函数
                function callme(fun){
                   fun();     // 执行函数
                }
          </script>
</body>
</html>
```
### 运行效果
![无所不能的变量载体](img/无所不能的变量的载体.gif)
### 具体分析
变量f具有一个普通变量所具有特性,唯一的不同之处在于这个变量的值是一个函数,并且可以通过"()"来执行这个函数,在javascript里,这种类似的应用的比较多,而且为javascript的灵活性起到不可或缺的作用
