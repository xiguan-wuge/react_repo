'use strict';

var React = { //创建命名空间
  createElement: createElement
};

// 创建虚拟节点，并未创建真正的dom节点
function createElement(tag, attrs) {
  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  return {
    tag: tag,
    attrs: attrs,
    children: children
  };
}
// console.log(element)
// babel index.js -o a.js  es6转译成js

var ReactDOM = {
  render: function render(vnode, container) {
    return _render(vnode, container);
  }
};

function _render(vnode, container) {
  console.log(vnode);
  if (typeof vnode === 'string') {
    console.log(vnode);
    var textNode = document.createTextNode(vnode);
    return container.appendChild(textNode, container);
  }
  // 如果有属性，遍历属性
  if (vnode.attrs) {
    Object.keys(vnode.attrs).forEach(function (key) {
      if (key === 'className') key = 'class';
      dom.setAttribute(key, vnode.attrs[key]);
    });
  }
  // 拿出tag节点
  var dom = document.createElement(vnode.tag);
  vnode.children.forEach(function (child) {
    return _render(child, dom);
  });
  return container.appendChild(dom);
}

var element = React.createElement(
  'div',
  null,
  'hello',
  React.createElement(
    'span',
    null,
    'world'
  )
);
// console.log(element);

// 把虚拟DOM转化成真实DOM
ReactDOM.render(React.createElement(
  'h1',
  null,
  'Hello, World!',
  React.createElement(
    'h2',
    null,
    'www',
    React.createElement('h3', null)
  )
), document.getElementById('root'));
