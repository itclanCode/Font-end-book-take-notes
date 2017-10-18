### 简单的页面布局说起

* DOCTYPE文档类型的作用
* 盒模型的概念
* 盒模型的运用
* 页面布局的设计原则

盒模型:元素内容,内边距,边框，外边距4个部分组成，因此计算盒模型的宽高就是将4个部分的属性值相加

#### 盒模型的宽度

盒模型的宽度= margin-lef值+border-left-width+padding-left+width值+padding-right值+border-right-width值+margin-right值

### 盒模型的高度
盒模型的高度 = margin-top值+border-top-height值+padding-top值+height值+padding-bottom-height值+border-bottom值+margin-bottom值

### 怪异盒模型计算方式

盒模型的宽度=margin-left值+width值+margin-right的值(不包括border+padding)
盒模型的高度=margin-top值+height值+margin-bottom的值(不包括border+padding)
