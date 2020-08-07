<template>
    <router-link to="/hello-world">
       <p>hello world</p>
    </router-link>
    <router-link to="/counter-demo">
       <p>计数demo</p>
    </router-link>
    <router-link to="/v-bind-demo">
        <p>绑定元素属性v-bind</p>
    </router-link>
    <router-link to="/v-on-demo">
        <p>指令附加事件侦听器v-on</p>
    </router-link>
    <router-link to="/v-model-demo">
        <p>使表单输入和应用程序状态之间的双向绑定v-model</p>
    </router-link>
    <router-link to="/v-if-demo">
        <p>条件v-if</p>
    </router-link>
    <router-link to="/v-for-demo">
        <p>循环v-for</p>
    </router-link>

    <router-link to="/v-html-demo">
        <p>原始HTMLv-html</p>
    </router-link>

    <router-link to="/computed-properties-demo">
        <p>计算属性</p>
    </router-link>


</template>

<script>
    export default {
        name: "Index.vue"
    }
</script>

<style scoped>

</style>