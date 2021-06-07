<template>
    <div class="uk-section">
        <div class="uk-container uk-container-expand">
            <div class="grid grid-cols-7">
                <CalendarDarDay v-for="day in sharedState.data" :key="day.id" :day="day" />
            </div>
        </div>
    </div>
</template>

<script>
    import { store } from '../store';
    import CalendarDarDay from './CalendarDay';
    export default {
        name: 'CalendarWeek',
        components:{
          CalendarDarDay
        },
        data() {
            return {
                sharedState: store.state
            }
        }
    }
</script>

<style scoped>

</style>