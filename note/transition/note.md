# transition

```javascript
let vm = new Vue({
  el: '#app',
  template: '<div id="demo">' +
  '<button v-on:click="show = !show">' +
  'Toggle' +
  '</button>' +
  '<transition :appear="true" name="fade">' +
  '<p v-if="show">hello</p>' +
  '</transition>' +
  '</div>',
  data() {
    return {
      show: true
    }
  }
})
```
```css
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
```

```javascript
export const transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
}
```
# transition-group

- transition-group组件是为了做列表的过渡,它会渲染成真实的元素

- 当我们去修改列表的数据的时候,如果是添加或者删除数据,则会触发相应元素本身的过渡动画,这点和<transition>组件的实现效果是一样,除此之外<transition-group>还实现了move的过渡效果,让我们的列表过渡动画更加丰富;
