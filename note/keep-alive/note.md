# keep-alive

## summary

- keep-alive 组件是一个内置抽象组件,它的实现通过定义render函数并且利用了插槽;
- keep-alive 组件的渲染分为首次渲染和缓存渲染,当命中缓存,则不会再执行created和mounted钩子函数,而会执行activated钩子函数.销毁时也不会执行destroyed钩子函数,而会执行deactivated钩子函数;

