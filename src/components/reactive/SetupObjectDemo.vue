<template>
    <dl>
        <dt>{{name}}</dt>
        <dd>性别：{{sex}}</dd>
        <dd>地址：{{address}}</dd>
    </dl>
    <button @click="addressChange">更新地址</button>
</template>

<script>
    import { reactive } from 'vue'
    export default {
        name: "SetupObjectDemo",
        setup () {
            // 定义一个 state 的响应式对象数据，并赋值
            const state = reactive({
                name: 'even',
                sex: 'boy',
                address: '成都'
            })
            console.log(state)
            // 定义一个函数，修改 state 的值。
            const addressChange = () => {
                state.address += '浦东'
            }
            // 导出一些内容给上面的模板区域使用
            return {
                ...state,
                addressChange
            }
        }
    }
</script>

<style scoped>

</style>