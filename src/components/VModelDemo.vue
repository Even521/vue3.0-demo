<template>
    <div id="two-way-binding">
        <p>{{ message }}</p>
        <input v-model="message" />
    </div>
</template>

<script>
    export default {
        name: "VModelDemo",
        data() {
            return {
                message: 'Hello Vue!'
            }
        }
    }
</script>

<style scoped>

</style>