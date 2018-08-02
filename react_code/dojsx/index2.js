//创建命名空间
const React = { 
  createElement
}; 

// 创建虚拟节点，并未创建真正的dom节点
function createElement(tag, attrs, ...children) {
  return {
    tag,
    attrs,
    children
  }
}
const element = (
  <div>hello
    <span>world</span>
  </div>
)
// console.log(element)
// babel index.js -o a.js  es6转译成js

// 把虚拟DOM转化成真实DOM
ReactDOM.render(
  <h1>Hello,World</h1>,
  document.getElementById('root')
)

const ReactDOM = {
  render: (vnode, container) => {
    return render(vnode, container);
  }
};

function render(vnode, container) {
  console.log(vnode)
  if(typeof vnode === 'string') {
    const textNode = document.createTextNode(vnode);
    return container.appendChild(textNode, container);
  }
  if(vnode.attrs) {
    Object.keys(vnode.attrs).forEach(key => {
      if(key === 'className') key = 'class';
      dom.setAttrbute(key, vnode.attrs[key])
    })
  }
  // 拿出tag节点
  const dom = document.createElement(vnode, tag);
  vnode.children.forEach(child => render(child, dom));
  return container.appendChild(dom)
  // render();
}