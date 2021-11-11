<template>
  <div id='home'>
      <nav-bar class='home-nav'>
        <template #center>
          <div>购物街</div>
        </template>
      </nav-bar>
      <TabControl :title="['娜美','莉莉丝','利亚纳']" ref='tabControl1'  :class="{tabcontrol:isShowTabControl}" @tabClick='changeTab'/>
      <scroll class='wrapper' ref='scroll' :probe-type='3' :pull-up-load='true' @scroll='contentScroll' @pullingUp='loadMore'>
      <home-swiper :banner='banner' @swiperImageLoad='swiperImageLoad'></home-swiper>
      <recommend-view :recommend='recommend'></recommend-view>
      <feature-view></feature-view>
      <TabControl :title="['娜美','莉莉丝','利亚纳']" ref='tabControl2' @tabClick='changeTab'/>
      <goods-list :goods="goods[currentType].list" ></goods-list>
      </scroll>
      <back-top @click.native='backClick' v-show='isShowBackTop'></back-top>
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

import Scroll from 'components/common/scroll/Scroll.vue'

import BackTop from 'components/content/backtop/BackTop.vue'

export default {
    name:"Home",
    components:{
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop,
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
        currentType:'pop',
        isShowBackTop:false,
        tabControlOffsetTop:0,
        isShowTabControl:false,
        saveY:Number,
      }
    },
    created(){
      this.getHomeMultidata(),
      this.getHomeGoods('pop'),
      this.getHomeGoods('new'),
      this.getHomeGoods('sell')
      console.log('aaa')
    },
   activated(){
      this.$refs.scroll.scrollTo(0,this.saveY,30)
      this.$refs.scroll.refresh()
    },
    deactivated(){
      this.saveY=this.$refs.scroll.getScrollY()
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
          this.$refs.scroll.scroll.finishPullUp()
        //   this.$nextTick(()=>{
        //   this.$refs.scroll.refresh()
        //  })
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
        this.$refs.tabControl1.currentIndex=index
        this.$refs.tabControl2.currentIndex=index
     },
     /*
     * 点击回到头部
     */
      backClick(){
        this.$refs.scroll.scrollTo(0,0)
      },
      /*
      *接收当前滚动距离，并且在滚动距离大于1000时才显示点击回到顶部按钮
      */
     contentScroll(pos){
       //判断tabTop是否显示
       this.isShowBackTop=-pos.y>1000
       //判断滚动距离是否大于tabcontrol的offset
       this.isShowTabControl=-pos.y>this.tabControlOffsetTop
     },
     loadMore(){
       this.getHomeGoods(this.currentType)
     },
     swiperImageLoad(){
       this.tabControlOffsetTop=this.$refs.tabControl2.$el.offsetTop
     }
    }
}
</script>

<style scoped>
  .home-nav{
    background-color:var(--color-tint);
    color:white;
    /* position: fixed;
    top:0;
    left:0;
    right:0;
    z-index:9; */
  }
  #home{
    /* padding-top:44px; */
  }
  .tabcontrol{
    position:relative;
    z-index:9
  }
  .wrapper{
    overflow: hidden;
    position:absolute;
    left:0;
    top:44px;
    bottom:49px;
}
</style>