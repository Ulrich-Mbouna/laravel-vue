<template>
    <div>
        <input
                v-model="input"
                type="text"
                class="rounded uk-input placeholder-gray-500 placeholder-opacity-60"
                placeholder="Entrez une notes"
                @keyup.enter="monitorEnterKey()"
        >
    </div>
</template>

<script>
    import { emitter } from '../../api'
    export default {
        emits:["add-note"],
        data() {
            return {
                input:''
            }
        },
        methods:{
            monitorEnterKey() {
                emitter.emit('add-note', {
                    note: this.input,
                    timestamp: new Date().toLocaleString()
                });
                this.input = "";

            }
        }
    }
</script>

<style scoped>

</style>