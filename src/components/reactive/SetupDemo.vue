<template>
    <div class="home">
        这里是一个计数器 >>> <span class="red">{{count}}</span> <br>
        <button @click="countAdd">{{btnText}}</button>
    </div>
</template>

<script>
    import { ref } from 'vue'
    export default {
        name: "SetupDemo",
        setup(){
            // 定义一个不需要改变的数据
            const btnText = '点这个按钮上面的数字会变'
            // 定义一个 count 的响应式数据，并赋值为 0
            const count = ref(0)
            // 定义一个函数，修改 count 的值。
            const countAdd = () => {
                count.value++
            }
            // 导出一些内容给上面的模板区域使用
            return {
                btnText,
                count,
                countAdd
            }
        }
    }
</script>

<style >
    .home {
        line-height: 2;

    }
    .home .red {
        color: red;
    }
</style>