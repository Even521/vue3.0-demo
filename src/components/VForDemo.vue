<template>
    <div id="list-rendering">
        <ol>
            <li v-for="todo in todos">
                {{ todo.text }}
            </li>
        </ol>
    </div>
</template>

<script>
    export default {
        name: "VForDemo",
        data() {
            return {
                todos: [
                    { text: 'Learn JavaScript' },
                    { text: 'Learn Vue' },
                    { text: 'Build something awesome' }
                ]
            }
        }
    }
</script>

<style scoped>

</style>