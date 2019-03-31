import Vue from 'vue'

const sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: () => { },
    set: () => { }
}

export function proxy(target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter() {
        return this[sourceKey][key]
    }
    sharedPropertyDefinition.set = function proxySetter(val) {
        this[sourceKey][key] = val
    }
    Object.defineProperty(target, key, sharedPropertyDefinition)
}

const app = new Vue({
    el: '#app',
    mounted() {
        console.log(this.message)
        // 通过proxy 代理 实际上方访问的是 this._data.message
        // proxy(this, '_data', 'message')
    },
    data() {
        message: 'hello vue'
    }
})

function once(fn) {
    let called = false
    return function () {
        if (!called) {
            called = true
            fn.apply(this, arguments)
        }
    }
}