import { seedData } from "@/app/seed";
import {reactive} from 'vue'

export const store = {
    state: {
        data: reactive(seedData)
    },
    getActiveDay() {
        return this.state.data.find(day => day.active)
    },
    setActiveDay(dayId) {
        return this.state.data.map((dayObject) => {
            dayObject.id === dayId ? dayObject.active = true : dayObject.active = false;
        })
    },
    submitEvent(eventDetails) {
        const activeDay = this.getActiveDay();
        activeDay.events.push({"details": eventDetails, "edit": false})
    },
    editEvent(eventDetails, dayId) {
        this.resetEditOfllEvents();
        const eventObj = this.getEventObj(dayId,eventDetails);
        eventObj.edit = true;
    },
    resetEditOfllEvents() {
        this.state.data.map((dayObj) => {
            dayObj.events.map((event) => {
                event.edit = false;
            })
        })
    },
    updateEvent(dayId, originalEventDetails, updatedEventDetails) {
        const eventObj = this.getEventObj(dayId,originalEventDetails);
        eventObj.details = updatedEventDetails;
        eventObj.edit = false;
    },
    getEventObj(dayId, eventDetails) {
        const dayObj = this.state.data.find((day) => day.id === dayId);
        return dayObj.events.find((event) => event.details === eventDetails);
    },
    deleteEvent(dayId, eventDetails) {
        const dayObj = this.state.data.find((day) => day.id === dayId);
        const eventObjIndex = dayObj.events.findIndex((event) => event.details === eventDetails);
        if (eventObjIndex!== -1) {
            dayObj.events.splice(eventObjIndex,1)
        }
    }
}