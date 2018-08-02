虚拟dom ？ VNode Virtual DOM 
mvvm 封装了dom层，因为dom太消耗内存，性能，（修改dom,..）最耗内存
VNode + diff 算法来解决

jsx 语法 ： 用js对象来描述html结构

jsx的背后隐含着VNode的真相
React.createElement(
  h1,第一个参数，ele = document.createElement()
  attribute，第二个参数， ele.setAttribute(key,val)
  children 第三个参数
    文本节点 textNode
    node 递归一下
)


虚拟dom 保留在内存中，creatElement一下, 就生成真实的Dom
真实dom在浏览器中 dom树

??? 怎么做到减小内存消耗   -》
      虚拟DOM不会立即操作DOM，而是将这 多次 更新的diff内容保存到本地的一个js对象中，最终将这个js对象一次性attach到DOM树上，通知浏览器去执行绘制工作，这样可以避免大量的无谓的计算量。
虚拟DOM 描述： 一个JSON
 DOM: <h1 calssName="title">标题<span>副标题</span></h1>
 虚拟DOM： 
  VNode = {
    tag: "h1",
    atts: {
      class: "title"
    },
    children: [
      '标题',
      递归 VNode...  
    ]
  }

jsx 内在就是虚拟dom VNode

虚拟dom 是真实dom在内存中的虚拟化，替代真实dom实现dom操作