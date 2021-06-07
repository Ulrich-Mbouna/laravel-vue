<template>
    <div>
        <p>Note Count : {{ count }}</p>
    </div>
</template>

<script>
    import { emitter } from '../../api'

    export default {
        data() {
            return {
                count: 0
            }
        },
        created() {
            emitter.on('add-note', () => this.count++);
        }
    }
</script>

<style scoped>

</style>