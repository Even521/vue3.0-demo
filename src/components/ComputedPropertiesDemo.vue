<template>
    <div id="computed-basics" class="demo">
        <p>Has published books:</p>
        <span>{{ publishedBooksMessage }}</span>
    </div>
</template>

<script>
    export default {
        name: "ComputedPropertiesDemo",
        data() {
            return {
                author: {
                    name: 'John Doe',
                    books: ['Vue 2 - Advanced Guide',
                        'Vue 3 - Basic Guide',
                        'Vue 4 - The Mystery']
                }
            }
        },
        computed: {
            // a computed getter
            publishedBooksMessage() {
                // `this` points to the vm instance
                return this.author.books.length > 0 ? 'Yes' : 'No'
            }
        }
    }
</script>

<style scoped>

</style>