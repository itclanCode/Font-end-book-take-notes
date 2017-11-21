### 判断文件上传类型
### 实例描述
文件在上传时,如果每次都通过服务器端来判断别文件是否正确的话,就会给服务器带来不少的压力,那么,能否通过客户端预先判断一下文件的类型呢?
### 实例代码
```
<!DOCTYPE html>
<html>
    <head>
        <title>判断文件上传的类型</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
            
    </head>
    <body style="text-align:center">
        <form action="" method="post" enctype="multipart/form-data" name="myform" onsubmit="chkform();return false;">
          <label>
          <input type="file" name="mypic" />
          </label>
          <label>
          <input type="submit" name="Submit" value="提交"/>
          </label>
        </form>

        <script type="text/javascript">     
            function chkform(){                     // 判断函数
                var str = document.forms[0].mypic.value; // 获取上传文件的路径值
                var name = str.substring(str.lastIndexOf(".")+1).toUpperCase(); 
                if (name!="JPG"&&name!="GIF"&&name!='PNG'&&name!='BMP'){
                    alert("格式不正确");     // 提示格式错误
                    return false;               // 返回错误
                }else{
                    document.forms[0].submit(); // 否则提示表单
                }
            }
        </script>
    </body>
</html>
```
### 运行效果
![判断文件上传的类型](img/判断文件上传的类型.gif)
### 具体分析
代码首先监听了表单的提交事件,在提交之前,获取提交文件的路径值,然后通过截取字符串的方式得到文件的拓展名,如果不属于网站需要的文件格式,则直接提示用户格式错误,在进行文件类型的判断时,只提供了客户端的验证并不算严谨的程序,如此,客户端的判断只是在一定程度上减轻了服务端的压力,在实际的开发当中,仍需要提供完善的服务器端文件类型来判断