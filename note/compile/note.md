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

