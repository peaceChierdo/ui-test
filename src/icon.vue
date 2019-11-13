<template>
    <svg v-if="icon" class="icon">
        <use :xlink:href="`#k-${icon}`"></use>
    </svg>    
</template>

<script>
    export default {
        props: ['icon']
    }
</script>

<style lang="scss">
    .icon {
       width: 1em; height: 1em;
       position: relative;
       top: .05em;
       fill: currentColor;
       overflow: hidden;
    }
</style>