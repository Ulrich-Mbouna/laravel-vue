<template>
    <div @click="setActiveDay(day.id)" class="bg-[#4A4A4A] text-white cursor-pointer text-[12px] border border-solid hover:bg-[#4A4A4A] ">
        <div class="bg-[#333333] p-5 text-white">{{ day.abbvTitle }}</div>
        <div class="p-5">
            <div class="">{{ day.id }}</div>
            <CalendarEvent v-for="(event,index) in day.events" :key="index" :day="day" :event="event" />
        </div>
    </div>
</template>

<script>
    import CalendarEvent from './CalendarEvent'
    import {store} from "@/app/store";

    export default {
        name:'CalendarDay',
        components:{
          CalendarEvent
        },
        props:['day'],
        methods:{
            setActiveDay(dayId) {
                store.setActiveDay(dayId)
            }
        }

    }
</script>

<style scoped>

</style>