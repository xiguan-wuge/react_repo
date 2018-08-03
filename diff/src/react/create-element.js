function createElement(tag, attrs, ...children) {  //createElement  返回虚拟节点
  attrs = attrs || {};
  // console.log(tag, attrs, children);
  return {
    tag,
    attrs,
    children,
    keys: attrs.key || null
  }
}

export default createElement;