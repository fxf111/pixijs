(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{219:function(s,t,a){"use strict";a.r(t);var n=a(28),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("您现在知道如何制作各种图形对象，但是您可以使用它们做什么呢？ 一个有趣的事情是构建一个简单的"),a("code",[s._v("碰撞检测")]),s._v("系统。 您可以使用一个名为"),a("code",[s._v("hitTestRectangle")]),s._v("的自定义函数，该函数检查是否有两个矩形的Pixi精灵正在接触。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hitTestRectangle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("spriteOne"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" spriteTwo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果它们重叠，"),a("code",[s._v("hitTestRectangle")]),s._v("将返回"),a("code",[s._v("true")]),s._v("。你可以"),a("code",[s._v("if")]),s._v("语句来判断两个精灵是否碰撞：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hitTestRectangle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//There's a collision")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//There's no collision")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("正如你所看到的，"),a("code",[s._v("hitTestRectangle")]),s._v("是通往游戏设计世界的大门。")]),s._v(" "),a("p",[s._v("运行"),a("code",[s._v("examples")]),s._v("目录下的"),a("code",[s._v("collisionDetection.html")]),s._v("文件，查看如何使用"),a("code",[s._v("hitTestRectangle")]),s._v("。使用箭头键移动猫。如果猫碰到了盒子，盒子就会变成红色，文本对象就会显示“Hit!”")]),s._v(" "),a("p",[a("img",{attrs:{src:"/25.png",alt:""}})]),s._v(" "),a("p",[s._v("您已经看到了创建这些元素的所有代码，以及使猫移动的键盘控制系统。唯一的新变化是"),a("code",[s._v("play")]),s._v("函数内部使用"),a("code",[s._v("hitTestRectangle")]),s._v("来检查碰撞。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("play")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("delta")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//use the cat's velocity to make it move")]),s._v("\n  cat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" cat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  cat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("y "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" cat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//check for a collision between the cat and the box")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hitTestRectangle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//if there's a collision, change the message text")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//and tint the box red")]),s._v("\n    message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("text "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hit!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tint "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0xff3300")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//if there's no collision, reset the message")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//text and the box's color")]),s._v("\n    message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("text "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"No collision..."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tint "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0xccff99")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("p",[s._v("因为游戏循环每秒调用"),a("code",[s._v("play")]),s._v("函数60次，所以这个"),a("code",[s._v("if")]),s._v("语句会不断检查猫和盒子之间的碰撞。如果"),a("code",[s._v("hitTestRectangle")]),s._v("为"),a("code",[s._v("true")]),s._v("，则"),a("code",[s._v("message")]),s._v("文本对象显示“Hit”文字。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("text "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hit!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后，通过将盒子的"),a("code",[s._v("tint")]),s._v("属性设置为十六进制红色值，盒子的颜色就从绿色更改为红色。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tint "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0xff3300")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果没有碰撞，则"),a("code",[s._v("message")]),s._v("和盒子将保持其原始状态。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("text "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"No collision..."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nbox"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tint "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0xccff99")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("这段代码非常简单。\n到此为止，您已经拥有了使用Pixi制作游戏所需的所有技能。")]),s._v(" "),a("h2",{attrs:{id:"hittestrectangle函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hittestrectangle函数"}},[s._v("#")]),s._v(" hitTestRectangle函数")]),s._v(" "),a("p",[a("code",[s._v("hitTestRectangle")]),s._v("函数是什么呢？ 它有什么作用，如何运作？ 像这样的碰撞检测算法如何工作的细节超出了本教程的范围。如果您真的想知道，可以到"),a("a",{attrs:{href:"https://www.apress.com/us/book/9781430258001",target:"_blank",rel:"noopener noreferrer"}},[s._v("这本书"),a("OutboundLink")],1),s._v("里了解。）最最重要的是您应当知道如何使用它。 但是，以防万一，您可以参考完整的h"),a("code",[s._v("itTestRectangle")]),s._v("函数定义。 您能从注释中找出这些问题的答案吗？")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hitTestRectangle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("r1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" r2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//Define the variables we'll need to calculate")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" hit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" combinedHalfWidths"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" combinedHalfHeights"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" vx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" vy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//hit will determine whether there's a collision")]),s._v("\n  hit "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//Find the center points of each sprite")]),s._v("\n  r1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("centerX "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" r1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" r1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("width "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  r1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("centerY "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" r1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("y "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" r1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("height "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  r2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("centerX "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" r2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" r2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("width "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  r2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("centerY "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" r2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("y "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" r2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("height "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//Find the half-widths and half-heights of each sprite")]),s._v("\n  r1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("halfWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" r1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("width "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  r1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("halfHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" r1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("height "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  r2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("halfWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" r2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("width "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  r2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("halfHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" r2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("height "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//Calculate the distance vector between the sprites")]),s._v("\n  vx "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" r1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("centerX "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" r2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("centerX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  vy "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" r1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("centerY "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" r2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("centerY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//Figure out the combined half-widths and half-heights")]),s._v("\n  combinedHalfWidths "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" r1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("halfWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" r2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("halfWidth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  combinedHalfHeights "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" r1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("halfHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" r2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("halfHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//Check for a collision on the x axis")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("abs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" combinedHalfWidths"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//A collision might be occurring. Check for a collision on the y axis")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("abs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" combinedHalfHeights"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//There's definitely a collision happening")]),s._v("\n      hit "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//There's no collision on the y axis")]),s._v("\n      hit "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//There's no collision on the x axis")]),s._v("\n    hit "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//`hit` will be either `true` or `false`")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" hit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);