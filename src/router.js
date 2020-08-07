import {createRouter,createWebHistory} from 'vue-router';
import Index from '../src/components/Index.vue'

const routes=[
    {
        path:'/',
        name:'Index',
        component: Index
    },
    {
        path:'/hello-world',
        name:'HelloWorld',
        component:()=>import('../src/components/HelloWorld.vue')
    },
    {
        path:'/counter-demo',
        name:'CounterDemo',
        component:()=>import('../src/components/CounterDemo.vue')
    },
    {
        path:'/v-bind-demo',
        name:'VBindDemo',
        component:()=>import('../src/components/VBindDemo.vue')
    },
    {
        path:'/v-on-demo',
        name:'VOnDemo',
        component:()=>import('../src/components/VOnDemo.vue')
    },
    {
        path:'/v-model-demo',
        name:'VModelDemo',
        component:()=>import('../src/components/VModelDemo.vue')
    },
    {
        path:'/v-if-demo',
        name:'VIfDemo',
        component:()=>import('../src/components/VIfDemo.vue')
    },
    {
        path:'/v-for-demo',
        name:'VForDemo',
        component:()=>import('../src/components/VForDemo.vue')
    },
    {
        path:'/v-html-demo',
        name:'VHtmlDemo',
        component:()=>import('../src/components/VHtmlDemo.vue')
    },
    {
        path:'/computed-properties-demo',
        name:'ComputedPropertiesDemo',
        component:()=>import('../src/components/ComputedPropertiesDemo.vue')
    },


    {
        path:'/click',
        name:'Click',
        component:()=>import('../src/components/Click.vue')
    }
]
const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router