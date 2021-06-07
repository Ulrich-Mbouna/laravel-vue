<template>
    <component
        v-for="option in options"
        :key="option.value"
        :is="vertical ? 'div' : 'span'"
        :class="{'mr-2':!vertical}"
    >
        <BaseRadio
                :label="option.label"
                :value="option.value"
                :name="name"
                @update:model-value="$emit('update:modelValue',$event)"
        />
    </component>


</template>

<script>
    import BaseRadio from "@/app/components/BaseRadio";
    export default {
        name:'BaseRadioGroup',
        components:{
            BaseRadio
        },
        props:{
            options:{
                type:Array,
                require:true
            },
            name:{
                type:String,
                require: true
            },
            vertical: {
                type: Boolean,
                default:false
            }
        },
        data() {
            return {
                pets: []
            }
        }

    }
</script>

<style scoped>

</style>