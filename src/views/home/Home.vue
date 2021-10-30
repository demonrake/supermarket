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
      <TabControl :title="['娜美','莉莉丝','利亚纳']" class='tab-control' @tabClick='changeTab'/>
      <goods-list :goods="goods[currentType].list" ></goods-list>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"

import {getHomeMultidata,getHomeGoods} from 'network/home'

import HomeSwiper from 'views/home/childComponents/HomeSwiper'
import RecommendView from 'views/home/childComponents/RecommendView'
import FeatureView from 'views/home/childComponents/FeatureView'

import TabControl from 'components/content/tabControl/TabControl'

import GoodsList from 'components/content/goods/GoodsList'

export default {
    name:"Home",
    components:{
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
    },
    data(){
      return {
        banner:[],
        recommend:[],
        goods:{
          'pop' : {page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
      },
        currentType:'pop'
      }
    },
    created(){
      this.getHomeMultidata(),
      this.getHomeGoods('pop'),
      this.getHomeGoods('new'),
      this.getHomeGoods('sell')
    },
    methods:{
      /**
       *网络数据请求
       */
      getHomeMultidata(){
        getHomeMultidata().then(data=>{
        this.banner=data.data.banner.list,
        this.recommend=data.data.recommend.list
        })
      },
      getHomeGoods(type){
       let page=this.goods[type].page+1;
         getHomeGoods(type,page).then(data=>{
          this.goods[type].list.push(...data.data.list);
          this.goods[type].page+=1
         }) 
      },
      /*
      *tabControl点击事件 
      */
     changeTab(index){
       switch(index){
         case 0 :
           this.currentType='pop';
           break;
        case 1:
          this.currentType='sell';
          break;
        case 2 : 'new';
          this.currentType='new'
          break
       }
     }
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
    z-index:9;
    
  }
</style>