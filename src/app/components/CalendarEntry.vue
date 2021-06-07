<template>
    <div id="calendar-entry" class="uk-section">
        <div class="uk-container">
            <div class="calebdar-entry-note justify-center border border-solid border-green-500 rounded border-3 p-3 uk-width-1-3 justify-center">
                <input type="text" class="uk-input rounded" placeholder="New Event" required v-model="inputEntry">
                <p class="calendar-entry-day">
                    Day of event : <span class="font-bold">{{ titleOfActiveDay }}</span>
                </p>
                <a @click.prevent="submitEvent(inputEntry)" class="uk-button rounded bg-green-500 text-white">Submit</a>
            </div>
            <p  class="text-red-500 text-[13px]" v-if="error">
                You must type something first!
            </p>
        </div>
    </div>
</template>

<script>
    import {store} from "@/app/store";

    export default {
        name: 'CalendarEntry',
        data() {
            return {
                inputEntry:'',
                error:''
            }
        },
        computed:{
            titleOfActiveDay() {
                return store.getActiveDay().fullTitle;
            }
        },
        methods:{
            submitEvent(eventDetails) {
                if (this.inputEntry === '') return this.error = true;

                    store.submitEvent(eventDetails);
                    this.inputEntry = "";
                    this.error = false
            }
        }
    }
</script>

<style scoped>

</style>