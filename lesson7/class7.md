1. 1 个 CSS 像素对应 2*2 个物理像素 
2. <a>标签
 <ul>
<li><a href="https://www.baidu.com">baidu</a></li>/跳转网站
    <li><a href="../lesson5/index.html">index</a></li>/跳转文件内的网页
    <li><a href="mailto:3117207985@qq.com">youxiang</a></li>/发送邮件
    <li><a href="tel:+13917869672">phone</a></li>/拨打电话
  </ul>
3. Block 元素（块级元素） 是 HTML 中默认会独占一行的元素，会在页面中以块的形式呈现。

- 核心特性
  1.  宽度默认撑满父元素的可用宽度，高度由内容或设置的属性决定。
  2.  可以直接设置  width 、 height 、 margin  和  padding  属性。
  3.  块级元素前后会自动换行，多个块级元素会自上而下依次排列。
- 常见示例
   <div> 、 <p> 、 <h1>-<h6> 、 <ul> 、 <ol> 、 <li> 、 <form>  等。
- 代码示例
  html

<div style="background: #f0f0f0; margin: 10px 0;">这是一个块级div元素</div>
<p style="background: #e0e0e0;">这是块级p元素，会独占一行</p>
 
margin:边缘
padding:内边距
4. inline 元素（行内元素） 是 HTML 中默认不会独占一行的元素，会和其他行内元素在同一行内并排显示。
 
- 核心特性
1. 宽度和高度由自身内容决定，无法直接设置  width  和  height  属性（设置也不会生效）。
2. 只能设置水平方向的  margin  和  padding ，垂直方向的边距不会影响行高和布局。
3. 多个行内元素会在一行内依次排列，超出父元素宽度时才会自动换行。
- 常见示例
 <span> 、 <a> 、 <strong> 、 <em> 、 <img> （特殊行内替换元素，可设宽高）等。
- 代码示例
html
  
<p>这是一段文本，<span style="color: red;">红色文字</span>和<a href="#">超链接</a>都是行内元素</p>
<table>  标签是 HTML 中用于定义表格的核心标签，用于在网页上展示行列结构的二维数据。
 
核心子标签
 
-  <tr> ：定义表格中的一行（table row），是单元格的容器。
-  <th> ：定义表头单元格（table header），内容默认加粗且居中，用于描述列/行的含义。
-  <td> ：定义数据单元格（table data），用于存放表格的具体数据。
 
基础示例
 
html
  
<table border="1">
  <tr>
    <th>姓名</th>
    <th>专业</th>
  </tr>
  <tr>
    <td>张三</td>
    <td>计算机科学</td>
  </tr>
</table>
HTML 中的行内元素（inline 元素）主要分为普通行内元素和行内替换元素两类，以下是常见的所有行内元素：
 
1. 普通行内元素（无法直接设置宽高）
-  <a> ：超链接
-  <span> ：通用行内容器
-  <strong> ：强调文本（加粗）
-  <em> ：强调文本（斜体）
-  <code> ：标记计算机代码文本
-  <kbd> ：标记键盘输入文本
-  <sup> ：上标文本
-  <sub> ：下标文本
-  <abbr> ：缩写文本
-  <cite> ：引用文献、作品名称
-  <q> ：短引用
-  <var> ：标记变量
-  <time> ：标记时间日期
-  <b> ：粗体文本（无强调语义）
-  <i> ：斜体文本（无强调语义）
-  <u> ：下划线文本
-  <s> ：删除线文本
2. 行内替换元素（可直接设置宽高）
-  <img> ：图片
-  <input> ：表单输入控件
-  <textarea> ：多行文本输入框
-  <select> ：下拉选择框
-  <button> ：按钮
-  <object> ：嵌入外部资源
-  <embed> ：嵌入插件
