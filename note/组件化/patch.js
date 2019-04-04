function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
  let i = vnode.data;
  if (isDef(i)) {
    const isReactivated = isDef(vnode.compoentInstance) && i.keepAlive;
  }
}

/*
组件vnode有data有hook,
占位节点 <HelloWorld/> 起占位作用相当于parent vnode

1, patch 整体流程: createComponent -> 子组件初始化 -> 子组件render -> 子组件patch

2, activeInstance 为当前激活的vm实例; vm.$vnode为组件的占位vnode; vm._vnode为组件的渲染vnode
3, 嵌套组件的插入顺序是先子后父
*/
