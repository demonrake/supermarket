<template>
  <div id='home'>
      <nav-bar class='home-nav'>
        <template #center>
          <div>购物街</div>
        </template>
      </nav-bar>
      <home-swiper :banner='banner'></home-swiper>
      <recommend-view :recommend='recommend'></recommend-view>
      <feature-view></feature-view>
      <TabControl :title="['娜美','莉莉丝','利亚纳']" class='tab-control'/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"

import {getHomeMultidata,getHomeGoods} from 'network/home'

import HomeSwiper from 'views/home/childComponents/HomeSwiper'
import RecommendView from 'views/home/childComponents/RecommendView'
import FeatureView from 'views/home/childComponents/FeatureView'

import TabControl from 'components/content/tabControl/TabControl'
export default {
    name:"Home",
    components:{
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
    },
    data(){
      return {
        banner:[],
        recommend:[],
        goods:{
          'pop' : {page:0,list:[]},
          'news':{page:0,list:[]},
          'sell':{page:0,list:[]}
      }
      }
    },
    created(){
      getHomeMultidata().then(data=>{
        this.banner=data.data.banner.list,
        this.recommend=data.data.recommend.list
      }),
      getHomeGoods('pop',1).then(data=>{
        console.log(data)
      }) 
    }
}
</script>

<style>
  #home{
    height:2000px;
  }
  .home-nav{
    background-color:var(--color-tint);
    color:white;
    position: fixed;
    top:0;
    left:0;
    right:0;
    z-index:9;
  }
  #home{
    padding-top:44px;
  }
  .tab-control{
    position: sticky;
    top:44px;
  }
</style>