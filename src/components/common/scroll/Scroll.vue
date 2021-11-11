<template>
    <div ref='wrapper'>
        <div class='content'>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from "@better-scroll/core"
import ObserveDom from '@better-scroll/observe-dom'
import ObserveImage from "@better-scroll/observe-image"
import PullUp from '@better-scroll/pull-up'

BScroll.use(ObserveDom)
BScroll.use(ObserveImage)
BScroll.use(PullUp)

export default {
    name:'Scroll',
    data(){
        return{
            scroll:null,
        }
    },
    props:{
        probeType:{
            type:Number,
            default:0
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        }
    },
    mounted(){
        this.init()
    },
    updated(){
        // this.$nextTick(()=>{
        //     this.scroll.refresh()
        // })
        // console.log(this.scroll)
    },
    methods:{
        //创建BScroll对象
        init(){
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click: true,
          observeDOM:true,
          observeImage:true,
          pullUpLoad: this.pullUpLoad,
        }),
        //监听滚动距离
        this.scroll.on('scroll',(pos)=>{
            this.$emit('scroll',pos)
        })
        //监听上拉事件
        this.scroll.on('pullingUp',()=>{
            this.$emit('pullingUp')
        })
        },

        //重新计算滚动距离
        refresh(){
           this.scroll&&this.scroll.refresh()
        },
        //滚动工具
        scrollTo(x,y,time=300){
             this.scroll&&this.scroll.scrollTo(x,y,time)
        },
        //重置加载状态
        finishPullUp(){
             this.scroll&&this.scroll.finishPullUp()
        },
        getScrollY(){
            return this.scroll? this.scroll.y:0
        }
    }
     
}
</script>

<style>

</style>