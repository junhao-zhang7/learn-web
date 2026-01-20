1.  ARIA(Accessible Rich Internet Application)补充充分说明
    例： <div role="button">
2.  p>lorem5:五个单词
3.  时间 tag:<time datetime="2024-08-02">August 2nd</time>
4.  <button
    data-user-role="guest"

    > 注册
    > </button>
    > data-XXX(元素属性)
    > <button data-user-role="guest" id="signup-btn">注册</button>

        <script>

          const btn = document.getElementById('signup-btn')
          console.log(btn)-> <button data-user-role="guest" id="signup-btn">注册</button>
          console.log(btn.dataset.userRole)->guest
        </script>

    srcset  是 HTML  <img>  标签的属性，用于为不同设备/屏幕条件提供多张备选图片，让浏览器自动选择最合适的版本加载。

它的核心作用是实现响应式图片，提升不同设备的加载性能和显示效果，语法上通过   图片 URL 宽度描述符   或   图片 URL 像素密度描述符   来定义备选图。

两种常用用法

1.  按屏幕像素密度（dpr）适配
像素密度描述符用  x  表示，适用于高清屏和普通屏的区分。
html

<img
src="image-1x.jpg"
srcset="image-1x.jpg 1x, image-2x.jpg 2x, image-3x.jpg 3x"
alt="示例图"

>

解释：1x 对应普通屏，2x 对应 Retina 屏，3x 对应超高清屏，浏览器会根据自身屏幕密度选择。
2.  按图片宽度适配
宽度描述符用  w  表示，需要配合  <picture>  标签或  sizes  属性使用，指定不同宽度区间加载的图片。
html

<img
src="image-small.jpg"
srcset="image-small.jpg 400w, image-medium.jpg 800w, image-large.jpg 1200w"
sizes="(max-width: 600px) 400px, (max-width: 1000px) 800px, 1200px"
alt="示例图"

>

解释： sizes  定义屏幕宽度对应的图片显示宽度，浏览器结合  srcset  的  w  值计算后选择最优图片。
