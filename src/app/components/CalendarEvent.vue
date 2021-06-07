<template>
    <div class="day-event mt-6 mb-6 text-[#4C4C4C] p-5" :style="getEventBgColor">
        <div class="" v-if="!event.edit">
            <span class="text-center">{{ event.details }}</span>
            <div class="">
                <i @click="editEvent(event.details,day.id)" class="fas fa-pen pr-2"></i>
                <i @click="deleteEvent(day.id,event.details)" class="fa fa-trash pr-2"></i>
            </div>
        </div>
        <div class="" v-else>
            <input type="text" :placeholder ="event.details" v-model="newEventDetails" class=" rounded w-full border-0 border-bottom-2">
            <div class="text-center mt-2 border text-green-500 rounded" >
                <i class="fas fa-check" @click="updateEvent(day.id,event.details,newEventDetails)"></i>
            </div>
        </div>
    </div>
</template>

<script>
    import {store} from "@/app/store";

    export default {
        props:['event','day'],
        data() {
            return {
                newEventDetails:''
            }
        },
        computed:{
            getEventBgColor() {
                const colors = ['#FF9999', '#85D6FF', '#99FF99'];
                let randomColor = colors[Math.floor(Math.random() * colors.length)];
                return `background-color:${randomColor}`;
            }
        },
        methods:{
            editEvent(eventDetails,dayId) {
                store.editEvent(eventDetails,dayId)
            },
            updateEvent(dayId,originalEventDetails,updatedEventDetails) {
                if (updatedEventDetails === "") updatedEventDetails = originalEventDetails;
                store.updateEvent(dayId,originalEventDetails,updatedEventDetails);
                this.newEventDetails = ""
            },
            deleteEvent(dayId,eventDetails) {
                store.deleteEvent(dayId,eventDetails);
            }
        }
    }
</script>

<style scoped>

</style>