### 第8章 CSS3伸缩性盒模型

### 8.1 FlexBox模型基础知识

CSS3引入一种新的布局模式--FlexBox,即伸缩性布局合模型,用来提供一个更加有效的方式指定,调整和分布一个容器力度项目布局,即使他们的大小是未知或者是动态的,这里简称Flex

### 8.1.1 CSS中的布局模式

谈到布局,CSS2.1中定义了四种布局模式,由一个盒与兄弟,祖先盒的关系决定其尺寸与位置的算法

* 块布局:呈现文档的布局模式
* 行内布局:呈现文本的布局模式
* 表格布局:用格子呈现2D数据的布局模式
* 定位布局:能够直接定位元素的布局模式,定位元素基本与其他元素没有任何关系

CSS3 引入的布局模式Flexbox布局,主要思想是让容器有能力让其子项能够改变其宽度,高度(甚至顺序)，以最佳的方式填充可用空间(主要是为了适应所有类型的显示设备和屏幕大小)，Fle容器会使子项目(伸缩项目)拓展来填满可用空间,或缩小它们以防止溢出容器

最重要的是,FlexBox布局方向不可预知,不像常规的布局(块就是从上到下,内联就是从左到右)而那些常规的适合页面布局,但对于支持大型或者复杂的应用程序(特别是涉及取向改变,缩放和收缩等)就缺乏灵活性

### 8.1.2 Flexbox模型的功能

FlexBox布局对涉及比较复杂的页面非常有用,可以轻松的实现屏幕和浏览器窗口大小发生变化时保持元素和相对位置和大小不变,同时减少了依赖于浮动布局实现元素位置的定义以及重置元素的大小

Flexbox布局在定义伸缩性项目大小时伸缩容器会预留一些可用空间,可以调整伸项目的相对大小的位置,例如可以确保伸缩容器中的多余空间平均分配多个伸缩项目,当然,如果伸缩容器没有足够大的空间放置伸缩项目时,浏览器会根据一定的比例减少伸缩项目的大小使其不溢出伸缩容器

综合而言,FlexBox布局功能主要具有以下几点
* 屏幕和浏览器窗口大小发生改变也可以灵活的调整布局
* 指定伸缩项目沿着主轴或者侧轴按照比例分配额外空间(伸缩容器额外空间)，从而调整伸缩项目的大小
* 指定伸缩项目沿着主轴或侧轴将伸缩容器额外空间,分配到伸缩项目之前,之后或之间
* 指定如何将垂直于元素布局轴的额外空间分布到该元素的周围
* 控制元素在页面上的布局方向
* 按照不同于文档对象模型(DOM)所指定排序方式对屏幕上的元素重新排序,也就是说可以在浏览器渲染中不按照文档流顺序重排伸缩项目顺序

### 8.1.3 Flexbox模型中的术语

和CSS3其他属性不一样,Flexnpx并不是一个属性,而是一个模块,包括多个CSS3属性,涉及很多东西,包括整个组属性,虽然现在现在对Flexbox有一定的了解,如果想更好的使用FlexBox

1. 主轴和侧轴

在Flexbox模型与布局计算偏向使用书写模式方向的块布局与行内布局不同,伸缩布局偏向使用伸缩流方向。为了让描述伸缩布局变得更容易,本章定义一系列相对于伸缩性流的术语

* 主轴,主轴方向：用户代码里沿着一个伸缩容的主轴配置伸缩项目,主轴是主轴方向的延伸,伸缩容器的主轴,伸缩项目主要沿着这条轴进行布局,小心,它不一定是水平的,这主要取决于justify-content属性,如果取其值为column，主轴的方向为纵向的
* 主轴起点,主轴终点:伸缩项目的配置从容器的主轴起点边开始,往主轴终点边结束,也就是说,伸缩项目防止在伸缩项目防止在伸缩容器内从主轴起点(main-start)向主轴终点(main-end)方向
* 主轴长度,主轴长度属性:伸缩项目的在主轴方向的宽度或高度就是项目的主轴长度,伸缩项目的主轴长度属性是windth或height属性,由哪一个对着主轴方向决定
* 侧轴,侧轴方向:与主轴垂直的轴承做侧轴,侧轴是侧轴方向的延伸,主要取决于主轴方向
* 侧轴起点,侧轴终点:填满项目的伸缩行的配置从容器的侧轴起点边开始,往侧轴终点边结束
* 侧轴长度,侧轴终点:填满项目的伸缩行的配置从容器的侧轴起点边开始,往侧轴终点边结束
* 侧轴长度,侧轴长度属性:伸缩项目的在侧轴方向的宽度或宽度或高度就是项目的侧轴长度,伸缩项目的侧轴长度属性是width或height属性,由哪一个对着侧轴方向决定

2. 伸缩容器和伸缩项目

通过display属性显示地给一个元素设置为Flex或者inline-flex,这个容器就是一个伸缩容器,伸缩容器会为其内容创立的伸缩格式化上下文，其中设置为flex的容器被渲染为一个块级元素,而设置inline-flex容器则渲染为一个行内元素怒,若元素display的指定值是inline-flex且元素时一个浮动或绝对定位元素,则display的计算值是flex

一个伸缩容器的内容具有零个以上的伸缩项目,伸缩容器的每个子元素(除了需要盒修复的元素之外)都会成为一个伸缩项目,且用户代理将会将任何直接在伸缩容器里的连续文字块抱起来成为匿名伸缩项目

3. 伸缩容器的属性

Flexbox伸缩布局中伸缩容器和伸缩项目是伸缩布局模块中的重要部分,其中同一个部分都具有各自的属性,伸缩容器的属性包括以下几个

1. 伸缩流方向 

是指伸缩容器的主轴方向,其决定了伸缩项目防止在伸缩容器的方向,伸缩流方向主要通过flex-direction属性来设置,其默认值为flow,伸缩流方向和书写模式有关系,换句话说,伸缩项目根据书写模式的方向布局

2. 伸缩行换行

伸缩项目在伸缩容器中有时候也会溢出容器,与传统的盒模型一样,css允许使用overflow属性来处理溢出内容的显示方式,在伸缩容器中有一个换行属性,主要用来设置伸缩容器的伸缩项目是单行显示还是多行显示,以及决定侧轴的方向,使用此属性来启用溢出的伸缩容器的伸缩项目自动换行到下一行以及控制流动的方向,在伸缩容器属性中,主要通过flex-wrap属性来设置伸缩项目是否换行,默认值为nowrap

3. 伸缩方向与换行

是伸缩流方向与伸缩航航的结合物,换句话说,伸缩方向与换行属性flex-flow同时设定了伸缩流方向flex-direction和伸缩换行flex-wrap两个属性,简而言之是这两个属性的缩写,这两个属性决定了伸缩容器的主轴与侧轴

4. 主轴对齐 

用来设置伸缩容器当前行伸缩容器当前行伸缩项目在主轴方向的对其方式,指定如何在伸缩项目之间分布伸缩容器额外空间,当一行上的所伸缩项目不能伸缩或可伸缩但已经达到最大长度时,这一属性才会对伸缩容器额外空间进行分配,当伸缩项目溢出某一行时,这一属性也会在项目的对齐上施加一些控制

5. 侧轴对齐

伸缩项目可以在伸缩容器当前行的侧轴上进行对齐,这类似于主轴对齐的方式,只是另一个方向,也就是说侧轴对齐主要用来指定伸缩项目在伸缩容器中如何放置和对齐方式,换句话说,用来定义伸缩项目在伸缩容器的当前行的侧轴对齐方式

6. 伸缩项目的属性 

一个伸缩项目是一个伸缩容器的子元素,伸缩容器中的文本也被视为一个伸缩项目,伸缩项目中内容与普通流一样,比如说,当一个伸缩项目被设置为浮动,依然可以在这个伸缩项目中放置一个浮动元素

伸缩项目都有一个主轴长度和一个侧轴长度,主轴长度是伸缩项目在主轴上的尺寸,侧轴长度是伸缩项目在侧轴上的尺寸,或者说,一个伸缩项目被设置为浮动,依然可以在这个伸缩项目中放置一个浮动元素

伸缩项目都有一个主轴长度和一个侧轴长度,主轴长度是伸缩项目在主轴上的尺寸,侧轴长度是伸缩项目在侧轴上的尺寸,或者说,一伸缩项目的宽度或高取决于伸缩容器的轴,可能就是他的主轴长度或者侧轴长度,下面的几个属性可以调整伸缩项目的行为

1. 显示环旭,伸缩容器中的伸缩项目默认显示顺序是遵循文档在源码中出现的先后顺序,可以通过伸缩项目的显示顺序修改伸缩项目在页面中显示顺序,也可以通过这个属性对伸缩醒目进行排序组合

2). 侧轴对齐

包括两种,一种是align-items属性,可以用来设置伸缩容器中包括匿名伸缩项目的所有项目的对齐方式一样,另一种是align-self属性,主要用来在单独的伸缩项目上复写默认的对齐方式,对于匿名伸缩项目,align-self的值永远与其关联的伸缩容器的align-items的值相同

3). 伸缩性 

定义伸缩项目可改变他们的宽度或高度填补可用的空间,可以将伸缩容器额外空间分给其他伸缩项目(与伸缩项目的正弹性成正比)或将他们缩小以防止伸缩项目溢出(与伸缩项目的负弹性成正比)

5. 伸缩行

伸缩项目沿着伸缩容器内的一个伸缩行定位,伸缩容器可以是单行的,也可以是多行的,其主要由flex-wrap属性决定,单行的伸缩容器会将其所有的子元素在单独的一行进行布局,这种情况下有可能导致内容溢出伸缩容器,多行的伸缩窗口会将其伸缩项目配置在多个伸缩行上,这类似于文本的排列,当文本过宽导致一行无法容纳时,内容会断开并移至新的一行,当用户代码创建新的伸缩行时,这些伸缩行会根据flex-wrap属性沿着侧轴进行堆叠,除非伸缩容器本身是空的,每一个伸缩行至少包含一个伸缩项目

### 8.1.4 Flexbox模型规范状态

Flexbox布局语法规范主要分为三种
 * 旧版本:2009年,使用display:box或者display:inline-box
 * 混合版本,2011年,使用display:flexbox或者display:inline-flexbox
 * 最新版本,使用display:flex或者display:inline-flex;

### 8.1.5 Flexbox模型浏览器兼容性

Flexbox规范版本众多,浏览器对此语法支持度也各有不同

Flexbox布局的旧版本语法规范是最早的伸缩布局,各大浏览器对其支持性略有不同,可惜的是,各浏览器对其Flexbox布局的各属性支持并不完全
对于Flexbox旧版本,各大浏览器以及手持设备都不完全支持FLexbox模块的所有属性，而且在使用时都必须在前面加各浏览器的前缀,在webkit内核浏览器还需要使用其前缀,-webkit，在手持设备中,Opera Mobile12.1+支持Flexbox最新版本的语法

Flexbox模型各版本规范开启Flexbox,换句话说,让一个元素编程伸容器,都是通过display属性来设置,当一个元素变成了伸缩容器,其子元素会自动编程伸缩项目


### 8.2.1 伸缩容器设置display

要改变元素的模式,需要使用display属性,如果在让一个元素变成伸缩容器,也离不开display属性

1. display属性的语法及参数
伸缩容器设置语法很简单,只需要将display显示设置为box或者inline-box属性值
display:box | inline-box

属性值主要有两种
1. box:设置为块伸缩容器
2. inline-box：设置为内联级伸缩容器

2. display属性的基本使用

伸缩容器主要用来将元素设置为伸缩容器,伸缩容器为其内容创建新的伸缩格式化上下文(Flex formatting context)除了伸缩排版用来代替块布局以外,创建一个伸缩格式化上下文与创建一个块格式化上下文格式是一样的,浮动无法影响伸缩容器,而且伸缩容器的margin与其内容的margin不会重逢,如果给浮动元素或者绝对定位元素设置了内联伸缩容器,元素将会以块伸缩容器展示

如果想把某个元素变成伸缩容器,只需要给这个元素显示设置display值,并且将其值设置为box或者inline-box

```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>display属性的基本使用</title>
<meta name="description" content="" author="随笔川迹" personQQ="1046678249">
<meta name="keywords" content="" weChatPublicId="itclanCoder">
<link href="" rel="stylesheet">
<style type="text/css">
     *{
        padding:0;
        margin:0;
     }
     body>div{
        border:1px solid #ccc;
        margin:20px;
        padding:10px;
     }
     div>div{
        border:1px solid #f36;
        width:100px;
        height:100px;
        text-align:center;
        line-height:100px;
     }
     .box{
        display:-moz-box;
        display:-webkit-box;
        display:box;
     }
     .inline-box{
        display:-moz-inline-box;
        display:-webkit-inline-box;
        display:inline-box;
     }
</style>
</head>
<body>
       <div class="box">
            <div>A</div>
            <div>B</div>
            <div>C</div>
            <div>D</div>
       </div>   
       <div class="inline-box">
                <div>A</div>
                <div>B</div>
                <div>C</div>
                <div>D</div>
       </div>                           
</body>
</html>
```
如果给元素设置块伸缩容器,其效果类似于块元素的渲染风格,不过在firefox浏览器下和inline-block风格一致,如果给元素设置内联伸缩容器,其效果类似于inline-box风格

### 8.2.2 伸缩流方向box-orient

伸缩流方向box-orient属性主要用来创建主轴,从而定义了伸缩项目在伸缩容器中的流动方向,换句话说主要用来指定伸缩项目如何防止在伸缩容器的主轴上

1. box-orient属性的衣服啊及参数

给伸缩项目确定其在伸缩容器中的流动方向,通过box-orient属性来设置,其语法如下所示
```
box-orient:horizontal | vertical | inline-axis | block-axis
```
伸缩流方向box-orident主要适用于伸缩容器,伸缩流方向主要是用来确定伸缩项目在伸缩容器中的流动布局方向,该属性主要有四个属性值,其取值说明如下
1. horizontal:伸缩项目在伸缩容器中从左到右在一条水平线上排列显示
2. vertical:伸缩项目在伸缩容器中从上到下在一条水平线上排列显示
3. inline-axis:伸缩项目沿着内联轴排列
4. block-axis:伸缩项目沿着块轴排列显示

伸缩流方向和文本书写模式也有关系,如果书写模式是1tr，表示排版方向从左向右,如果书写模式是rtl表示排版方向从右向左排列,伸缩流的取值为horizontal和inline-axis时,确认伸缩项目的伸缩流方向和书写模式的方向关联性非常的强,可以说书写模式直接影响了他们的排列方向

2. box-orient属性的基本使用

在传统的盒模型中,HTML
的文档流(DOM)总是先后顺序从上到下垂直排列,使用伸缩布局的伸缩流方向,可以重新设置其文档流的方向,前提条件时要开启Flexbox模式,基于前面的实例上,分别在Flexbox模型上设置伸缩流方向为horizontal,vertical,inline-axis和block-axis
```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>box-orient属性基本使用,伸缩流方向</title>
<meta name="description" content="" author="随笔川迹" personQQ="1046678249">
<meta name="keywords" content="" weChatPublicId="itclanCoder">
<link href="" rel="stylesheet">
<style type="text/css">
     *{
        padding:0;
        margin:0;
     }
     body>div{
        border:1px solid #ccc;
        margin:20px;
        padding:10px;
     }
     div>div{
        border:1px solid #f36;
        width:100px;
        height:100px;
        text-align:center;
        line-height:100px;
     }
     .box{
        display:-moz-box;
        display:-webkit-box;
        display:box;
     }
     .box-horizontal{
        -moz-box-orient:horizontal;
        -webkit-box-orient:horizontal;
        box-orient:horizontal; 
     }
     .box-vertical{
        -moz-box-orient:vertical;
        -webkit-box-orient:vertical;
        box-orient:vertical;
     }
     .box-inline-axis{
        -moz-box-orient:inline-axis;
        -webkit-box-orient:inline-axis;
        box-orient:inline-axis;
     }
     .box-block-axis{
        -moz-box-orient:block-axis;
        -webkit-box-orient:block-axis;
        box-orient:block-axis;
     }
</style>
</head>
<body>
      <div class="box box-horizontal">
            <div>A</div>
            <div>B</div>
            <div>C</div>
            <div>D</div>
       </div>   
       <div class="box box-vertical">
            <div>A</div>
            <div>B</div>
            <div>C</div>
            <div>D</div>
       </div>   
       <div class="box box-inline-axis">
                <div>A</div>
                <div>B</div>
                <div>C</div>
                <div>D</div>
       </div>   
       <div class="box box-block-axis">
                <div>A</div>
                <div>B</div>
                <div>C</div>
                <div>D</div>
       </div>       
</body>
</html>
```
给伸缩容器设置horizontal和inline-axis值后,可以修改文档流的默认显示方式,也就是在垂直方向上从上向下显示,而给伸缩容器设置vertical和block-axis值,其显示的方式和文档流默认显示的方式一样

其实还可以通过设置书写模式的方向，可以进一步改变文档流的显示方向,一旦给伸缩容器显示设置了伸缩流方向后,其中horziontal和inlineaxis修改的文档流显示方向,在表面上与传统的display:inline-block,或者display:inline渲染的效果一样,索然在浏览器下渲染设计效果一样,但实际上显示的技术却完全不同

### 8.2.3 布局顺序box-direction

布局顺序是指伸缩项目在伸缩容器中的流动顺序,文档流的方向是按照文档在HTML(DOM)中出现的先后顺序决定,在伸缩容器中,可以通过box-direction属性来设置伸缩容器中的伸缩项目的流动顺序,该属性的基本语法如下:
box-direction: normal | reverse
box-direction:主要包括两个属性参数,其取值简单说明如下
1. normal:正常显示顺序,如果伸缩容器设置box-orient的值horzontal或者Inline-axis时,伸缩项目从主轴起始开始文档流结构顺序,从左向右按顺序排序,如果伸缩容器设置box-orient值为vertical或者block-axis时,伸缩项目从主轴起始点开始按文档流结构,从上到下按顺序排列
2. reverse:反向显示,如果伸缩容器设置box-orient的值为horizontal或者inline-axis时，伸缩项目从主轴终点开始按照文档结构的反向，从右向左排列,如果伸缩容器设置box-orient值为vertical或者block-axis时,伸缩项目从主轴终点开始按文档流结构反向,从下往上排列

### 8.2.4伸缩换行box-lines 

在传统盒模型布局中常有元素溢出容器,在Flexbox模型中同样会有这样的现象发生,伸缩项目会跑出伸缩容器,为了让伸缩项目不溢出伸缩容器,可以像传统的盒模型一样,通过overflow属性来控制伸缩项目溢出的部分隐藏,或者通过给伸缩容器添加滚动条,不过在Flexbox模型中,还可以使用伸缩换行属性box-lines来控制伸缩项目是否溢出伸缩容器

1. box-lines属性的语法及参数

box-lines用来设置伸缩容器的伸缩容器的伸缩项目是单行还是多行显示,以及定侧轴的方向,默认情况下都是单行或单列显示,该属性的基本语法如下
```
box-lines:single | multiple
```
伸缩换行属性只包括两个参数,其取值简单说明如下
1. single:伸缩容器的所有伸缩项目一行或一列显示,如果伸缩容器设置了overflow属性,可以直接控制伸缩项目是否隐藏,裁剪或者出现滚动条
2. mulitple:指定伸缩容器多行或多列显示伸缩项目,当伸缩容器没有足够空间放置所有伸缩项目的时候,指定伸缩容器多行或多列显示

如果没有给伸缩容器显示设置box-lines属性值时,一旦伸缩容器没有足够的空间容纳伸缩项目时，伸缩项目就会溢出伸缩容器

2. box-lines属性的基本使用

下面通过一个简单的实力来说明box-lines的基本使用,
在例中创建两个伸缩容器,一个伸缩容器里的所有伸缩项目水平显示,另一个伸缩容器的项目垂直显示,接下来主要通过box-lines属性来控制伸缩容器里的伸缩项目避免伸缩容器空间不足时溢出伸缩容器

box-lines到目前为止只有firefox浏览器支持,在IE和chrome浏览器中不支持,并且在不同浏览器内核器解析也并不相同,所以导致box-lines属性还无法直接使用到实际项目中

### 8.2.5 主轴对其box-pack

主轴对其用来设置伸缩器当前伸缩项目在主轴方向的对齐方式,指定如何在伸缩项目之间分布伸缩容器额外的空间,当一行上的所有伸缩项目不能伸缩或可伸缩但是已经达到最大长度时,这一属性才会对伸缩容器额外空间进行分配,当伸缩项目溢出某一行时,这一属性也会在项目的对齐上施加一些控制

1. box-pack属性的语法及参数

box-pack:start | end | center | justify

box-pack:主要有四个属性值,其取值简单说明一下:
* start:伸缩项目向一行的起始位置靠齐,伸缩容器沿着布局轴方向的所有额外空间都被置于布局轴的末
* end:和start值相反,伸缩项目向一行的结束位置靠齐,伸缩容器沿着布局轴方向的所有额外空间都被置于布局轴的开始
* center:伸缩项目向一行的中间位置靠齐,伸缩容器所有额外空间平均分布在第一伸缩项目前面和最后一个伸缩项目的后面
* justify:伸缩项目会平均分布在一行里,伸缩容器所额外空间平均分布在所有伸缩项目之间,而且在第一个伸缩项目之前和最后一个伸缩项目之后不分配伸缩容器的任何额外空间

2. box-pack属性的基本使用

box-pack主要是用来控制伸缩项目在主轴的对齐方式,以及管理伸缩容器额外空间,伸缩布局主轴的方向和box-pack的值直接影响了伸缩容器额外的空间的位置,换句话说,box-orient和box-pack的值可以直接管理伸缩容器额外空间

当box-pack取值为start,第一个伸缩项目的起始边缘置于伸缩容器的主轴起始点位置,下一个伸缩项目的起始边缘与第一个伸缩容器的末尾边缘边挨边一放置在一起,其他的伸缩项目依次方式沿着布局继续排列,伸缩容器沿着布局轴方向的所有额外空间都置于布局轴的末尾

```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>box-lines的使用</title>
<meta name="description" content="" author="随笔川迹" personQQ="1046678249">
<meta name="keywords" content="" weChatPublicId="itclanCoder">
<link href="" rel="stylesheet">
<style type="text/css">
         *{
            padding:0;
            margin:0;
         }
         body>div{
            border:1px solid #ccc;
            margin:10px;
            width:200px;
            height:200px;
         }
         div>div{
            border:1px solid #f36;
            padding:10px;
         }
         .box{
            display:-moz-box;
            display:-webkit-box;
            display:box;

            -webkit-box-pack:start;
            -webkit-box-pack:start;
            box-pack:start;

            -moz-box-align:start;
            -webkit-box-align:start;
            box-align:start;

            -moz-box-lines:multiple;
            -webkit-box-lines:multiple;
            box-lines:multiple;

         }
         .box-horizontal{
            -moz-box-orient:horizontal;
            -webkit-box-orient:horizontal;
            box-orient:horizontal;
         }
         .box-vertical{
            -moz-box-orient:vertical;
            -webkit-box-orient:vertical;
            box-orient:vertical;
         }
</style>
</head>
<body>
        <div class="box box-horizontal">
              <div>A</div>
              <div>B</div>
              <div>C</div>
              <div>D</div>
              <div>E</div>
              <div>F</div>
              <div>G</div>
              <div>H</div>
              <div>I</div>
              <div>J</div>
              <div>K</div>
        </div>
        <div class="box box-vertical">
              <div>A</div>
              <div>B</div>
              <div>C</div>
              <div>D</div>
              <div>E</div>
              <div>F</div>
              <div>G</div>
              <div>H</div>
              <div>I</div>
              <div>J</div>
              <div>K</div>
        </div>
</body>
</html>
```
当box-pack取值为end时,其效果与'start'效果相反,第一个伸缩项目的末尾边被置于伸缩容器的结束位置,下一个伸缩项目的末尾边缘与第一个伸缩项目的起始边缘边挨边地放置在一起,其他伸缩项目依此方式沿着布局轴方向继续排列放置在一起,其他伸缩项目依此方式沿着布局轴方向继续排列,伸缩容器沿着布局轴方向向所有额外空间都被放置于布局轴方向所有额外空间都被放置于布局轴的开始

当box-pack取值为center时,所有伸缩项目边挨边放置在一起,如同start和end关键词描中的那样,但是,该伸缩项目在伸缩容器的起始和末尾边缘之间位于中间位置,这样,伸缩容器所有额外的空间都平均分布在第一个伸缩项目的前面和最后一个伸缩项目的后面

当box-pack取值为justify时,第一个伸缩项目始终在一行开始位置,最后一个伸缩项目在一行终点位置,沿着布局轴方向的任何额外空间都平均分布于各个伸缩项目之间,如果伸缩容器没有足够空间或者只有一个伸缩项目时,会以start方式显示

注意:box-pack取值为justify时,在firefox浏览器下会以start方式显示

box-pack除了和伸缩流方向有关之外,当box-pack取值为start和end时,还与伸缩布局顺序box-direction有关,当box-pack取值为start,box-direction取值为reverse时,box-pack的start和end效果等同,换过来,当box-pack取值为end,box-direction取值为reverse时,box-pack的end与start效果等同

### 8.2.6 侧轴对齐box-align

box-align属性和box-pack同样是用来管理伸缩容器额外空间,不同的是,box-pack是用来管理伸缩容器主轴方向的额外空间,而box-align是用来管理伸缩容器侧周方向的额外空间,也就是垂直方向的,换句话说就是用来定义伸缩项目在伸缩容器的当前行的侧轴上对齐方式

1. box-align属性的语法及参数

box-align主要是用来管理伸缩容器在侧轴方向的额外空间,也就是用来定义伸缩项目在侧轴的对齐方式,该属性的语法如下:
box-align:start | end | center | baseline | stretch

box-align属性参数在box-pack的基础上减去了两端对齐的justify,但增加了另外两个属性参数baseline和stretch,各属性参数简单介绍如下:

* start:伸缩项目顶部边缘放置在伸缩容器的顶端,伸缩容器的额外空间放置在伸缩项目底端
* end:与start值相反,所有伸缩项目底部边缘放置在伸缩容器底端,伸缩容器额外空间放置在伸缩项目顶部
* center:伸缩项目紧靠在一起,垂直居中于伸缩容器,伸缩容器额外的空间平均分配在伸缩项目的顶部和底部
* baseline:伸缩项目根据他们的基线对齐,伸缩容器额外空间可前后显示
* stretch:伸缩项目填充整个伸缩容器

### 2. box-align属性的基本使用

box-align属性和box-pack属性所起的作用非常类似,都是用来管理伸缩容器额外的空间,也就是定义伸缩项目的对齐方式,不同的是,box-align是控制伸缩项目在伸缩容器侧轴的对齐方式,接下来演示box-align的基本使用,进一步了解box-align各属性值所起的作用

当box-align取值为start时,伸缩项目顶部边缘放置在伸缩容器的顶端,如果box-direction设置reverse反向值,伸缩项目的底部边缘放置在伸缩容器的底部,伸缩容器额外的空间放置在伸缩项目的顶端

代码如下
```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>box-align属性的基本使用</title>
<meta name="description" content="" author="随笔川迹" personQQ="1046678249">
<meta name="keywords" content="" weChatPublicId="itclanCoder">
<link href="" rel="stylesheet">
<style type="text/css">
        .box{
            width:330px;
            height:200px;
            border:1px solid #ccc;
            font-size:20px;
            font-weight:bold;
            color:#fff;
        }
        .box>div{
            padding:10px;
        }
        .box div:nth-child(1){
            background-color:#305ed5;
            line-height:50px;
        }
        .box div:nth-child(2){
            background-color:#3f8514;
            line-height:80px;
        }
        .box div:nth-child(3){
            background-color:#e6b710;
            line-height:100px;
        }
        .box div:nth-child(4){
            background-color:#e6b710;
        }
        .box div:nth-child(5){
            background-color:#f96;
        }
        /*box*/
        .box{
            display:-webkit-box;
            display:-moz-box;
            display:box;

            -webkit-box-align:start;
            -moz-box-align:start;
            box-align:start;
            height:400px;
        }
        .box-orient-vertical{
            -webkit-box-orient:vertical;
            -moz-box-orient:vertical;
            box-orient:vertical;
            height:400px;
        }
</style>
</head>
<body>
       <div class="box box-pack-start">
             <div class="box-item">box1</div>
             <div class="box-item">box2</div>
             <div class="box-item">box3</div>
             <div class="box-item">box4</div>
             <div class="box-item">start</div>
       </div>
       <div class="box box-pack-start box-orient-vertical">
             <div class="box-item">box1</div>
             <div class="box-item">box2</div>
             <div class="box-item">box3</div>
             <div class="box-item">box4</div>
             <div class="box-item">start</div>
       </div>
</body>
</html>
```
当box-align取值为end时,效果与取值为start刚好相反,所有伸缩项目底端边缘都放置在伸缩容器底端,伸缩容器的额外空间在所有伸缩项目的顶端,如果伸缩容器设置box-direction为reverse值时,所有伸缩项目的顶端边缘都放置在伸缩容器的顶部,伸缩容器的额外空间在所有伸缩项目的底部

当伸缩容器设置box-direction取值为reverse时,并不会影响box-align取值为center的效果,当box-align取值为baseline时,伸缩项目根据他们的基线对齐,所有伸缩项目基线(取决于box-direction属性的起始边缘和末尾边缘)都彼此对齐,占用空间最多且垂直于布局轴的伸缩项目遵循start规则,然后所有剩余项目的基线于该伸缩项目的基线对齐

box-align取值为baseline时,而且box-orient值为vertical时,在webkit内核浏览器中会以center方式展示,而在firefox中却以start方式展示

当box-align取值为stretch时,伸缩项目拉伸填充整个伸缩容器,此值会使用伸缩项目的外边聚盒的尺寸在遵照,min/max-width和min/max-height属性的限制下尽可能接近所在行的尺寸,将对每个伸缩项目进行拉伸以便完全填充垂直于布局的可用空间,如果设置伸缩项目的max-width/height属性优先并且遵从start规则,只要有一个伸缩项目设置min/max-height或height,伸缩项目都会以start规则对齐

### 8.2.7 伸缩性box-flex

box-flex属性能够灵活的控制伸缩项目在伸缩容器中的显示空间,注意,显示空间包括了伸缩项目的宽度和高度,而不只是伸缩项目的所在伸缩容器的宽度,也可以说伸缩项目的伸缩容器中所占的面积

在一个水平导向框中,首先会计算每个伸缩项目的宽度,如果所有伸缩项目宽度和与伸缩容器的宽度相等,伸缩容器就没有额外的空间,这个时候运用在伸缩项目的宽度时每个伸缩项目的其次宽度,如果伸缩项目宽度之和小于伸缩容器宽度,这时伸缩容器有额外空间可用,伸缩项目会根据box-flex对应的比例值进行拓展,如果伸缩项目的宽度之和大于伸缩容器宽度,伸缩容器没有足够空间,这时伸缩项目会根据box-flex的比例值对伸缩项目进行收缩,以防止伸缩项目溢出伸缩容器

### 1. box-flex属性的语法及参数

box-flex属性在Flexbox模型中非常重要,它可以灵活的控制伸缩项目的宽度来填充伸缩容器额外的空间,解决了传统web设计中习惯使用百分比定义伸缩布局的弊端,box-flex属性的基本如下所示

```
  box-flex:<number>
```

其属性值就是一个整数或者小数,当伸缩容器中包含了多个定义了box-flex属性的伸缩项目时,浏览器将会吧这些伸缩项目的box-flex值相加,然后浏览器会根据他们各自的值的比例来分配伸缩容器额外的空间给各个伸缩项目

### 2. box-flex的基本使用

box-flex属性实际上不能阻止伸缩项目保持固定大小,但是它会强制伸缩项目内部的内容自动适应而不会把伸缩项目本身撑大,这样一来,让伸缩项目能够伸缩性适应伸缩容器的宽度,如果伸缩项目的固有宽度之和小于伸缩容器的宽度,伸缩项目会自动增加宽度以填充伸缩容器,反之,伸缩项目的固有宽度之和大于伸缩容器的宽度,伸缩项目会自动减少宽度以及适应伸缩容器,不让伸缩项目溢出伸缩容器

伸缩项目具体增加或者减少宽度值取决于伸缩项目的固有宽度的比例,而不是某个绝对的数值,设置了box-flex值的伸缩项目时按照特定比例来弹性适应的,举个例子:一个伸缩项目设置box-flex值为2,另一个伸缩项目设置box-flex值为1,伸缩容器额外的宽度将分成三等分,s设置box-flex为2的伸缩项目会占两份,而设置box-flex为1的伸缩项目会占一份

下面通过一个简单的实例来说明一切,有一个灰色的伸缩容器flex-box，其宽度是960px,里面里面包含了两个伸缩项目,而且伸缩项目的宽度由内部的文本决定,其中绿色的那个伸缩项目宽度为240px,另一个橙色项目的伸缩宽度为510px,这样伸缩容器还有210px时额外的空间


### 8.2.8 显示顺序box-ordinal-group

伸缩容器中的伸缩项目默认显示顺序 是遵循文档流在源码中出现的先后顺序,也就是DOM结构中的先后顺序,在Firefox模型中,伸缩项目具有其自己独立的顺序,使用box-oridinal-group属性可以修改伸缩项目在页面中的现实顺序,也可以用这个属性实现排序组

### 1. box-ordinal-group属性的语法及参数

box-ordinal-group属性在firefox模型中的主要功能重置伸缩项目的源顺序,能够设置每个伸缩项目在伸缩容器在页面中的具体显示位置,还可以设置伸缩项目的排序组

```
box-oridinal-group:<integer>
```
box-oridinal-group属性只有一个参数<integer>,默认值是1,而<integer>为正整数,主要用来设置伸缩项目在伸缩容器的位置顺序序列号,伸缩项目的排列将根据这个属性值从小到大进行排列,值越大,伸缩项目越排在后面

### box-ordinal-group属性的基本使用

在没有显示给伸缩项目设置box-oridinal-group值时,伸缩项目的box-oridinal-group默认值1,并且在伸缩容器中显示的顺序将按照页面文档流加载顺序进行排列

### 8.2.9 实战体验 box制作自适应的三列等高布局

自适应的三列布局是web布局中常见的一种,也称为流体布局,为了让布局能自适应调整布局中每列的宽度,常使用百分比配合浮动来实现(当然也可以使用inline-block撇和百分比实现)
在使用浮动或者inline-block配合百分比制作自适应布局的时候,通常会碰到一定的难题,例如,需要使用外边距或内边距,计算的时候比较复杂,但是如果使用Flexbox模型box属性来制作这样的布局,就简单多了

在制作人和一个布局效果,都离不开HTML结构,在这个实例中,使用一个简单的结构模板来制作这个自适应的三列布局,如下图所示


 ### 8.3 混合版本Flexbox模型的基本使用

 混合版本Flexbox模型是伸缩盒模型中的另一个语法规范.主要是针对IE10浏览器实现伸缩布局的效果,其功能上与最老版本的伸缩布局的合模型布局大同小异,只是使用细节上略有不同,下面一起来了解Flexbox的混合语法的使用细节

 ### 8.3.1 伸缩容器设置display 

 在混合版本伸缩布局中的伸缩容器设置与旧版本的语法相似,都是使用display属性来进行设置,只是所取的值不同,在混合版本伸缩布局时,display属性所取的值是flexbox或inline-flexbox

 1. display属性的语法及参数
 
 display属性语法如下
 ```
 display:flexbox | inline-flexbox
 ```   
 在Flexbox模型中混合版本中伸缩容器的属性设置的参数取值与伸缩布局旧版本中所取的值大同小异,只是所取的关键词不同,在伸缩布局的混合模型布局中主要取值如下:
 1. flexbox:设置元素为块级伸缩容器
 2. inline-flexbox:设置元素为内联块伸缩容器

 伸缩布局模型混合版本主要是用于IE10浏览器,在使用混合版本时需要使用浏览器前缀"-ms-"同样为了把一下元素设置为伸缩容器,只需要给元素显示设置为display属性,并且将其值设置为flexbox或者inline-flex的值,其中flexbox将某元素设置为块伸缩容器,作用类似于伸缩布局旧版本语法中的box属性值,而取值为inline-flexbox时,将元素设置为行内伸缩容器,所起的作用类似布局旧版本语法中的inline-box属性值

 ```
    .element{
        display:-ms-flexbox;  /*设置块级Flexbox容器*/
     }
     .element{
        display:-ms-inline-flexbox; /*设置内联级Flexbox容器*/
     }
 ```

### 8.3.2 伸缩流方向flex-direction

flex-direction属性和伸缩布局旧版本语法中的box-orient属性一样,主要用来创建伸缩布局主轴,从而定义了伸缩项目放置在伸缩容器的方向,flex-direction直接决定了伸缩项目在主轴上的列齐方式

1. flex-direction属性的语法及参数

flex-direction主要用来决定伸缩布局主轴的方向,也就是决定伸缩流的方法,其基本语法如下
```
-ms-flex-direction:row | row-reverse | column | column-reverse
```
flex-direction主要通过以下四个属性参数来控制伸缩流的方向

1. row:此值是flex-direction的初始值,伸缩项目按照他们在文档流中出现的顺序进行显示,其中文本书写模式直接影响了文挡流的方向,如果文本的书写模式为1tr,伸缩项目在伸缩容器中从左到右排列,如果文本的书写模式为rtl,伸缩项目在伸缩容器中从右向左排列

2. row-reverse:此值与row值效果相反,如果书写模式为1tr,伸缩项目从右向左排列,如果书写模式为rtl,伸缩项目从左向右排列

3. column:伸缩项目按照他们在文档流出现的顺序按列从上到下排列

### 2. flex-direction属性的基本使用

在Flexbox模型布局的旧版本语法规范中,主要是通过box-orient属性来决定伸缩布局的伸缩流方向,不过在Flexbox模型布局的混合版本语法规范中,将由flex-direction属性来决定伸缩流的方向,接下来通过一些简单的实例来了解flex-direction属性的基本使用

当flex-direction取值为row时,类似于box-orient中的horizontal和inline-axis属性,使伸缩容器中的伸缩项目按照在文流中出现的先后顺序,从左向右排列

### 8.3.3 伸缩换行flex-wrap

flex-wrap类似于box-lines属性,使用此属性来启用溢出伸缩容器的伸缩项目自动换行到下一行或自动换行到下一列以及控制伸缩流方向

1. flex-wrap属性的语法及参数

flex-wrap属性的基本语法如下:

```
flex-wrap：row| wrap | wrap-reverse
```

flex-wrap属性比旧版本box-lines属性多一个属性,除了能够控制伸缩项目单行,多行排列之外还有另外一个功能,能让伸缩项目多行反向排列,flex-wrap各个属性参数简单说明如下

style="margin:10rpx auto" longitude="116.46250200000001 " latitude="40.06106803225973" 

