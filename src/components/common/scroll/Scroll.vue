<template>
    <div ref='wrapper'>
        <div class='content'>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from "@better-scroll/core"

export default {
    name:'Scroll',
    data(){
        return{
            scroll:null,
        }
    },
    mounted(){
        this.init()
    },
    // updated(){
    //     this.$nextTick(()=>{
    //         this.scroll.refresh()
    //     })
    //     console.log(this.scroll)
    // },
    methods:{
        init(){
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: 3,
          click: true
        })
        },
        refresh(){
            this.scroll.refresh()
        }
    }
     
}
</script>

<style>

</style>