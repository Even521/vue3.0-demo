<template>
    <p>code:{{d.code}}</p>
    <p>data:{{d.data}}</p>
    <p>message:{{d.msg}}</p>
</template>


<script>
    import {onMounted,ref} from 'vue';
    import {post} from './../../utils/http.js';
    export default {
        name: "HttpRequest",
        setup(){
            const d = ref({});
            onMounted( async ()=>{
                d.value= await post('/user/login');
                console.log(d);
            });
           return {d}
        }
    }
</script>

<style scoped>

</style>