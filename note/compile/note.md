# Compile
- AST
```vue
<ul
  :class="bindCls"
  class="list"
  v-if="isShow"
>
    <li
      v-for="(item,index) in data"
      @click="clickItem(index)"
    >{{item}}:{{index}}</li>
</ul>
<script>
const ast = {
  'type': 1,
  'tag': 'ul',
  'attrsList': [],
  'attrsMap': {
    ':class': 'bindCls',
    'class': 'list',
    'v-if': 'isShow'
  },
  'if': 'isShow',
  'ifConditions': [{
    'exp': 'isShow',
    'block': ''// ul ast element
  }],
  'parent': undefined,
  'plain': false,
  'staticClass': 'list',
  'classBinding': 'bindCls',
  'children': [{
    'type': 1,
    'tag': 'li',
    'attrsList': [{
      'name': '@click',
      'value': 'clickItem(index)'
    }],
    'attrsMap': {
      '@click': 'clickItem(index)',
      'v-for': '(item,index) in data'
     },
    'parent': '',// ul ast element
    'plain': false,
    'events': {
      'click': {
        'value': 'clickItem(index)'
      }
    },
    'hasBindings': true,
    'for': 'data',
    'alias': 'item',
    'iterator1': 'index',
    'children': [
      {
        'type': 2,
        'expression': '_s(item)+":"+_s(index)',
        'text': '{{item}}:{{index}}',
        'tokens': [
          {'@binding':'item'},
          ':',
          {'@binding':'index'}
        ]
      }
    ]
  }]
}
</script>
```
## optimize
- 目标是通过标记静态根的方式,优化重新渲染过程中对静态节点的处理逻辑;
- 过程是深度遍历这个AST树,先标记静态节点再标记静态根;
- 如果他们是静态节点则他们生成的DOM永远不会改变,这对运行时模板的更新起到了极大的优化作用;
## codegen
```javascript
with(this){
  return (isShow) ?
    _c('ul', {
        staticClass: "list",
        class: bindCls
      },
      _l((data), function(item, index) {
        return _c('li', {
          on: {
            "click": function($event) {
              clickItem(index)
            }
          }
        },
        [_v(_s(item) + ":" + _s(index))])
      })
    ) : _e()
}

export function installRenderHelpers (target) {
  target._o = markOnce
  target._n = toNumber
  target._s = toString
  target._l = renderList
  target._t = renderSlot
  target._q = looseEqual
  target._i = looseIndexOf
  target._m = renderStatic
  target._f = resolveFilter
  target._k = checkKeyCodes
  target._b = bindObjectProps
  target._v = createTextVNode
  target._e = createEmptyVNode
  target._u = resolveScopedSlots
  target._g = bindObjectListeners
}
```
