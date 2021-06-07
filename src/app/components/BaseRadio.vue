<template>
        <input 
            type="radio"
            :checked="modelValue === value"
            :value="value"
            @change="$emit('update:modelValue',value)"
            class="uk-radio  rounded mr-1"
            v-bind="$attrs"
            >
        <label v-if="label"> {{ label }}</label>
</template>

<script>
    export default {
        name:'BaseRadio',
        props:{
            label:{
                type: String,
                default: ''
            },
            modelValue:{
                type:[String,Number],
                default:''
            },
            value:{
                type:[String,Number],
                require: true
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>