<template>
    <div class="group-wrapper">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        mounted(){
            console.log(this.$children)
            console.log(this.$el)
            console.log(this.$el.children)
            for(let node of this.$el.children){
                if(node.nodeName.toLowerCase() !== 'button'){
                    console.warn(`g-button-group的子元素必须是g-button, 你写的是${node.nodeName.toLowerCase()}`)
                }
            }
        }      
        
    }
</script>

<style lang="scss">
    .group-wrapper{
        position: relative;
        display: inline-flex;
        vertical-align: middle;
        margin: 2em 0;
        > .g-button{
            
            &:first-child{
                border-top-left-radius: var(--border-radius)
            }
            &:not(:first-child){
                margin-left: -1px;
                background: #fff;
            }
            &:hover{
                border: 1px solid yellowgreen;
                z-index: 1;
            }
        }
    }
</style>