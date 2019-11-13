import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import buttonGroup from './button-group'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', buttonGroup)

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)

const expect = chai.expect


new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
    }
})

//单元测试
{
    //动态创建按钮
    const Constructor = Vue.extend(Button) //拿到构造函数
    const vm = new Constructor({
        propsData: {
            icon: 'setting1',
            loading: true
        }
    }) //创建实例
    vm.$mount('#test') // 实例挂载
    console.log('1111111',vm.$el)
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    // expect(href).to.eq('#i-loading')
    expect(href).to.eq('#k-loading1')
}
{
    const Constructor = Vue.extend(Button) //拿到构造函数
    const button = new Constructor({
        propsData: {
            icon: 'setting1',
            iconPosition: 'right'
        }
    }) //创建实例
    const div = document.createElement('div')
    document.body.appendChild(div)
    button.$mount(div) // 实例挂载
    let svg = button.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    button.$el.remove()
    button.$destroy()  //清除战场
}
{
    const Constructor = Vue.extend(Button) //拿到构造函数
    const vm = new Constructor({
        propsData: {
            icon: 'setting1'
        }
    }) 
    vm.$mount()
    let spy = chai.spy(()=>{})
    // vm.$on('click', function(){
    //     expect(1).to.eq(1)
    // })
    vm.$on('click', spy)
    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called()
    //？？？
}