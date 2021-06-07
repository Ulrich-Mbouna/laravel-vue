<template>
    <div id="app" class="">
        <CalendarWeek />
        <CalendarEntry />
    </div>
    <div class="uk-container uk-container-xsmall">
        <BaseGroupRadio
           :options="petOptions"
           name="answer"
           v-model="response"
           vertical
        />
    </div>
</template>

<script>
    import CalendarEntry from "@/app/components/CalendarEntry";
    import CalendarWeek from "@/app/components/CalendarWeek";
    import BaseGroupRadio from '@/app/components/BaseGroupRadio'
    export default {
        name:'APP',
        components:{
            CalendarWeek,
            CalendarEntry,
            BaseGroupRadio
        },
        data() {
            return {
                reveerseGreeting:'!dlrow olleH',
                petOptions:[
                    { label: 'Yes', value: '1'},
                    { label: 'No', value: '0'}
                ],
                response:''
            }
        },
        computed:{
            getGreting (){
               return this.reveerseGreeting.split("").reverse().join("");
            }
        }
    }
</script>

<style scoped>

</style>