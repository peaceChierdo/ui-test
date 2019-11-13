<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]: true}"
    @click="$emit('click')">
        <g-icon v-if="icon && !loading" :icon="icon"></g-icon>
        <g-icon v-if="loading" icon="loading1" class="icon loading"></g-icon>
        <div class="slot">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    export default {
        // props: ['icon', 'iconPosition']
        props: {
            icon: {},
            iconPosition: {
                type: String,
                default: 'left',
                validator(value){
                    return value === 'left' || value === 'right'
                }
            },
            loading: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss">
    @keyframes  spin {
        0%{ transform: rotate(0deg)}
        100%{ transform: rotate(360deg)}
    }
    .loading{ animation: spin 1.5s infinite linear;}
    .g-button{
        font-size: var(--font-size);
        line-height: var(--line-height);
        padding: var(--button-padding);
        display: inline-flex;justify-content: center;align-items: center;
        vertical-align: middle;
        &:hover{opacity: .9;}
        > .icon{order: 1; margin-right: .2em;}
        > .slot{order: 2;}
        &.icon-right{
            > .icon{order: 2; margin-left: .2em;  margin-right: 0;}
            > .slot{order: 1;}            
        }
    }
</style>