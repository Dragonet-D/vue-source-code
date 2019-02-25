function f() {
  with (this) {
    return _c('div', {attrs: {"id": "app"}}, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (value),
        expression: "value"
      }], attrs: {"type": "text"}, domProps: {"value": (value)}, on: {
        "input": function ($event) {
          if ($event.target.composing) return;
          value = $event.target.value
        }
      }
    }), _v(" "), _c('button', {on: {"click": submit}}, [_v("add")]), _v(" "), _c('div', _l((list), function (value, index) {
      return _c('li', {key: index}, [_v(_s(value))])
    }))])
  }
}
