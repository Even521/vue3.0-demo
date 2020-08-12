<template>
    <div>
        <input type="text" v-model="loginForm.userName" placeholder="用户名"/>
        <input type="text" v-model="loginForm.password" placeholder="密码"/>
        <button @click="loginSubmit">登录</button>
    </div>
    <div>
        <p>用户信息:</p>
    </div>
</template>

<script>
    import {reactive} from 'vue';
    import {login} from './../../api/api.js';
    import {useStore} from 'vuex'
    export default {
        name: "Login",
        setup(){
            //定义一个对象
            const loginForm=reactive({
                userName: 'even',
                password:'123'
            });
            const store=useStore();
            const loginSubmit= async ()=>{
                let d = await login();
                const userToken = 'Bearer ' + d.data;
                store.commit('changeLogin',userToken);
                console.log(store, 'store');
            };

            return {loginForm,loginSubmit}
        }
    }
</script>

<style scoped>

</style>