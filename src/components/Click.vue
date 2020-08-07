<template>
    <div id="basic-event">
        <button @click="counter += 1">Add 1</button>
        <p>The button above has been clicked {{ counter }} times.</p>
    </div>

    <div id="inline-handler">
        <button @click="say('hi')">Say hi</button>
        <button @click="say('what')">Say what</button>
    </div>
</template>

<script>
    export default {
        name: "Click",
        data() {
            return {
                counter: 1
            }
        },
        methods:  {
            say(message) {
                alert(message)
            }
        }
    }
</script>

<style scoped>

</style>