<template>
    <div>
        <input type="text" v-model="loginForm.userName" placeholder="用户名"/>
        <input type="text" v-model="loginForm.password" placeholder="密码"/>
        <button @click="loginSubmit">登录</button>
        <p></p>
    </div>
    <div>
        <p></p>
        <p> <span v-if="loginSuccess">登陆成功</span></p>
        <p>用户ID:{{userInfo.userId}}</p>
        <p>用户名:{{userInfo.userName}}</p>
        <p>用户角色:{{userInfo.role}}</p>
    </div>
</template>

<script>
    import {reactive,ref} from 'vue';
    import {login} from './../../api/api.js';
    import {useStore} from 'vuex';
    import jwt from 'jwt-decode'
    export default {
        name: "Login",
        setup(){
            //定义一个对象
            const loginForm=reactive({
                userName: 'even',
                password:'123'
            });
            const store=useStore();
            const userInfo=ref({});
            const loginSuccess=ref(false);
            const loginSubmit= async ()=>{
                let d = await login();
                loginSuccess.value=d.code===1?true:false;
                const userToken = 'Bearer ' + d.data;
                store.commit('changeLogin',userToken);
                userInfo.value = jwt(userToken)  ;
                
            };
            return {loginForm,loginSubmit,userInfo,loginSuccess}
        }
    }
</script>

<style scoped>

</style>