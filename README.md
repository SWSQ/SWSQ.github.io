# swsqiao.cn
### 前端面试题目
1. 浏览器有哪三层构成，分别是什么，作用是什么？       
	 结构层（html实习页面结构）   
	 表示层（css完成页面的表现与风格）    
	 行为辰（JavaScript实现客户端功能与业务逻辑）
	 
2. HTML5的优点与缺点？     
	优点：网络标准统一； 多设备、跨平台； 即使更新； 提高有效性和改进用户的友好体验； 增加了有助于开发人员定义重要内容的标签； 可以给站点带来更多的多媒体元素； 可以很好的替代Flash和Silverlight； 涉及到网站的抓取和索引时对SEO很友好； 被大量应用于移动应用程序和游戏    
	缺点：     
	安全问题（web storage/web socket这样的功能容易被黑客盗取用户信息和资料）   
   浏览器兼容性（许多特性各浏览器的支持程度也不一样）    
   性能（某些平台上引擎问题导致HTML5性能底下）    
   
3. Doctype的作用？严格模式与混杂模式如何区别？   
	Doctype声明位于文档最前面，告知浏览器的解析器用什么文档类型的规范来解析文档   
	严格模式的排版和JS运作模式是以支持浏览器支持的最高标准运行； 混杂模式的页面模拟模拟老浏览器的行为以防站点无法工作    
	
4. HTML5有哪些新特性？移除了哪些元素？			
	新特性：图像（Canvas） 多媒体（video、audio） 本地存储（localStorage、sessionStorage） 语义化更好的内容元素（aticle、header、footer、nav、section） 表单控件（date、time、canlendar、url、search） 新的技术（webworker、websocket、Geolocation）   
	移除的元素：纯表现的元素（u、big、center、font等）  框架集（frame、frameset）
	
5. 各个浏览器的内核？   
	IE（trident内核） Firefox（gecko内核） Safari（webkit内核） chrom（Blink）
	
6. 对HTML5的认识？    
	HTML5指的是包括HTML、CSS和JavaScript在内的一套技术组合，它希望能够减少网页浏览器对于需要插件的丰富性网络应用服务，增强了浏览器的原生功能，减少web应用对插件的依赖
	
7. 对WEB标准以及对W3C的理解与认识？
	标签闭合、标签小写、不乱嵌套、提高搜索机器人的搜索几率、使用外链css和js脚本、结构行为表现的分离； 文件下载与页面更新快，内容能被更多的用户、更广泛的设备所访问，更少的代码和组件
	
8. HTML5行内元素有哪些，块极元素有哪些，空元素有哪些？     
	行内元素：code img input  span textarea cite 等   
	块元素：div form h# hr table p ul 等   
	空元素：br hr link  img 
	
9. 什么是WebGL，它有什么优点？  
	WebGL是一种3D绘图标准，可以被用于创建具有复杂3D结构的网站应用
	
10. 描述cookies，sessionStorage和localStorage的区别？    
	Cookie：每个域名存储量比较小，所有域名的存储量有限制，有个数限制，会随时发送到服务器  
	LocalStorage：永久存储，单个域名存储量较大，总体数量无限制  
	SessionStorage：只在同源同窗口内有效，窗口关闭后即被销毁，存储量更大
	
11. link和@import的区别？    
	link是html标签，是链接文件，而@import是导入文件； link标签没有兼容性问题； 页面加载时，link标签同时执行，而@import是页面加载完成时才执行
	
1. src和href的区别？    
	src用于替换当前元素，href用于在当前文档和引用资源之间确立联系；src指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置，当浏览器解析到该元素时，将暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕；href指向网络资源所在位置，浏览器解析到该元素时将会并行下载资源且不会停止对当前文档的处理
	
12. 对SVG的理解？   
	SVG可缩放矢量图形，是基于可拓展标记语言XML，用于描述二位矢量图形的一种图形格式，具有任意缩放、文本独立、较小文件、超强显示效果等特点
	
1. 对canvas的理解？     
	canvas是HTML5新增的标签，可以在网页中完成动态的2D与3D图像技术，可以完成动画、游戏、图表、图像处理等原来需要Flash完成的一些功能
	
13. 超链接target属性的取值和作用？   
	target指定所链接的页面在浏览器窗口中的打开方式，它的参数主要有：   
	_blank（在新浏览器窗口打开链接文件）     
    _parent（将该链接的文件载入含有该链接框架的父框架集或父窗口中）   
    _self（在同一框架或窗口中打开所链接的文档）   
    _top（在当前的整个浏览器窗口打开所链接的文档）
    
1. 对浏览器内核的理解？   
	主要分为渲染引擎和JS引擎；渲染引擎负责取得网页的内容、整理信息，以及计算网页的显示方式，然后输出至显示器或打印机；JS引擎负责解析和执行JavaScript来实现网页动态效果
	
1. 如何实现浏览器内多个标签页之间的通信？     
	HTML5的新特性WebSocket或SharedWorker；也可以调用localstorage、cookies等本地存储方式
	
1. WebSocket与消息推送？
	WebSocket是HTML5开始提供的一种浏览器与服务器间进行全双工通讯的网络技术，可以实现客户端和服务器端的长连接，双向实时通信，特点有：事件驱动；异步；使用ws或者wss协议的客户端socket；能够实现真正意义上的推送功能，但浏览器支持的程度与方式有区别
	
1. 如何在页面上实现一个圆形的可点击区域？ 

	```
document.οnclick=function(e){
var r=50;//圆的半径
var x1=100,y1=100,x2= e.clientX;y2= e.clientY;
//计算鼠标点的位置与圆心的距离
    var len=Math.abs(Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2)));
    if(len<=50){
        console.log("内")
    }else{
        console.log("外")
    }
	```

18.  实现不使用border画出1px高的线？     

	`<div style="width:100%; height:1px; background-color:black"></div> `
	
