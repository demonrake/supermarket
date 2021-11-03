<template>
  <swiper>
        <swiper-item v-for="item in banner" :key='item.title'>
          <a :href="item.link">
            <img :src="item.image" alt="" @load='imageLoad'>
          </a>
        </swiper-item>
      </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index'
export default {
    name:'HomeSwiper',
    components:{
        Swiper,
        SwiperItem
    },
    props:{
      banner:{
        type:Array,
        default(){
            return []
        }
      }
    },
    data(){
      return{
        isLoad:false
      }
    },
    methods:{
      imageLoad(){
        if(!this.isLoad){
          this.$emit('swiperImageLoad')
        }
        this.isLoad=true
      }
    }
}
</script>

<style>
  img{
    width:100%;
  }
</style>