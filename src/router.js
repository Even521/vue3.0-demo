import {createRouter,createWebHistory} from 'vue-router';
import Index from '../src/components/Index.vue';

const routes=[
    {
        path:'/',
        name:'Index',
        component: Index,
        meta:{title:'首页'}
    },
    {
        path:'/hello-world',
        name:'HelloWorld',
        component:()=>import('../src/components/HelloWorld.vue'),
        meta:{title:'hello world'}
    },
    {
        path:'/counter-demo',
        name:'CounterDemo',
        component:()=>import('../src/components/CounterDemo.vue'),
        meta:{title:'计数demo'}
    },
    {
        path:'/v-bind-demo',
        name:'VBindDemo',
        component:()=>import('../src/components/VBindDemo.vue'),
        meta:{title:'绑定元素属性v-bind'}
    },
    {
        path:'/v-on-demo',
        name:'VOnDemo',
        component:()=>import('../src/components/VOnDemo.vue'),
        meta:{title:'指令附加事件侦听器v-on'}

    },
    {
        path:'/v-model-demo',
        name:'VModelDemo',
        component:()=>import('../src/components/VModelDemo.vue'),
        meta:{title:'使表单输入和应用程序状态之间的双向绑定v-model'}
    },
    {
        path:'/v-if-demo',
        name:'VIfDemo',
        component:()=>import('../src/components/VIfDemo.vue'),
        meta:{title:'条件v-if'}
    },
    {
        path:'/v-for-demo',
        name:'VForDemo',
        component:()=>import('../src/components/VForDemo.vue'),
        meta:{title:'条件v-for'}
    },
    {
        path:'/v-html-demo',
        name:'VHtmlDemo',
        component:()=>import('../src/components/VHtmlDemo.vue'),
        meta:{title:'原始HTMLv-html'}
    },
    {
        path:'/computed-properties-demo',
        name:'ComputedPropertiesDemo',
        component:()=>import('../src/components/ComputedPropertiesDemo.vue'),
        meta:{title:'计算属性'}
    },
    {
        path:'/click',
        name:'Click',
        component:()=>import('../src/components/Click.vue'),
        meta:{title:'click'}
    },
    {
        path:'/setup-demo',
        name:'SetupDemo',
        component:()=>import('../src/components/reactive/SetupDemo.vue'),
        meta:{title:'setup 函数'}
    },
    {
        path:'/setup-object-demo',
        name:'SetupObjectDemo',
        component:()=>import('../src/components/reactive/SetupObjectDemo.vue'),
        meta:{title:'setup 对象多个值'}
    },
    {
        path:'/life-demo',
        name:'LifeDemo',
        component:()=>import('../src/components/reactive/LifeDemo.vue'),
        meta:{title:'生命周期'}
    },
    {
        path:'/http-request',
        name:'HttpRequest',
        component:()=>import('../src/components/axions/HttpRequest.vue'),
        meta:{title:'http request'}
    }


];

const router=createRouter({
    history:createWebHistory(),
    routes
});


export default router