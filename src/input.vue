<template>
    <div class="wrapper" :class="{error}">
        <input :value="value" :disabled="disabled"
            @input="$emit('input', $event.target.value)"
        />

        <template v-if="error">
            <icon icon="error" class="icon"></icon>
            <span>{{error}}</span>
        </template>
    </div>


</template>

<script>
    import icon from './icon'
    export default {
        components: {icon},
        props: {
            value:{
                type: String
            },
            disabled:{
                type: Boolean
            },
            error: {
                type: String
            }
        }    
    }
</script>>

<style lang="scss">
    .wrapper{
        display: flex;
        align-items: center;
        > :not(:last-child){margin-right: .5rem; }
        > input{
            &[disabled], &[readonly] {border-color: #bbb;color: #bbb;cursor: not-allowed; }
        }
        &.error{
            color: red;
            > icon{fill: red;}
        }
    }
</style>