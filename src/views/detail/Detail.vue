<template>
    <div id="detail">
        <detail-nav-bar class='detail-nav-bar' @titleClick='titleClick'>
        </detail-nav-bar>
        <scroll class='content' ref='scroll' :pull-up-load='true'>
          <detail-swiper :top-images='topImages'>
          </detail-swiper>
          <detail-base-info :goods='goods'></detail-base-info>
          <detail-shop-info :shop='shop'></detail-shop-info>    
          <detail-goods-info :detail-info='detailInfo'></detail-goods-info>
          <detail-param-info :param-info='paramInfo' ref='param'></detail-param-info>
          <detail-comment-info :comment-info="commentInfo" ref='comment'></detail-comment-info>
          <goods-list :goods='recommend' ref='recommend'></goods-list>
        </scroll>
        <detail-bottom-bar-vue @addCart='addToCart'></detail-bottom-bar-vue>
    </div>
</template>

<script>
import DetailNavBar from 'views/detail/childComponents/DetailNavBar'
import DetailSwiper from 'views/detail/childComponents/DetailSwiper'
import DetailBaseInfo from 'views/detail/childComponents/DetailBaseInfo'
import DetailShopInfo from 'views/detail/childComponents/DetailShopInfo'
import DetailGoodsInfo from 'views/detail/childComponents/DetailGoodsInfo'
import DetailParamInfo from 'views/detail/childComponents/DetailParamInfo'
import DetailCommentInfo from 'views/detail/childComponents/DetailCommentInfo'
import DetailBottomBarVue from 'views/detail/childComponents/DetailBottomBar.vue'

import { getDetail,Goods,Shops,GoodsParam,getRecommend} from 'network/detail'

import Scroll from 'components/common/scroll/Scroll'

import GoodsList from 'components/content/goods/GoodsList'

import {mapActions} from 'vuex'
export default {
    name:'Detail',
    components:{
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        Scroll,
        DetailGoodsInfo,
        DetailParamInfo,
        DetailCommentInfo,
        GoodsList,
        DetailBottomBarVue,
    },
    data(){
        return{
            iid:null,
            topImages:[],
            goods:{},
            shop:{},
            detailInfo:{},
            paramInfo:{},
            commentInfo:{},
            recommend:[],
            titleTopY:[],
        }
    },
    created(){
        this.iid=this.$route.params.iid,
        this.getDetail(),
        this.getRecommend()
    },
    mounted(){
        this.getOffsetTop()
    },
    updated(){
       
    },
    methods:{
        ...mapActions(['addCart']),
        getDetail(){
        getDetail(this.iid).then(res=>{
            console.log(res)
            const data=res.result
            this.topImages=data.itemInfo.topImages
            this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
            this.shop=new Shops(data.shopInfo)
            this.detailInfo=data.detailInfo
            this.paramInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule)
            if(data.rate.cRate!==0)
            {
                this.commentInfo=data.rate.list[0]
            }
         })
        },
        getRecommend(){
            getRecommend().then(res=>{
               this.recommend=res.data.list
            })
        },
        titleClick(index){
            this.$refs.scroll.scrollTo(0,-this.titleTopY[index],500)
        },
        getOffsetTop(){
        this.titleTopY=[],
        this.titleTopY.push(0),
        this.titleTopY.push(this.$refs.param.$el.offsetTop),
        this.titleTopY.push(this.$refs.comment.$el.offsetTop),
        this.titleTopY.push(this.$refs.recommend.$el.offsetTop)
        // console.log(this.titleTopY)
        },
        addToCart(){
            const product={};
            product.image=this.topImages[0];
            product.title=this.goods.title;
            product.desc=this.goods.des;
            product.price=this.goods.realPrice;
            product.iid=this.iid;
            this.addCart(product).then(res=>{
               this.$toast.showMessage(res)
            })
        }
    }
}
</script>

<style scoped>
    #detail{
        position: relative;
        z-index:10;
        background-color: #fff;
        height:100vh; 
    }
    .detail-nav-bar{
        background-color: #fff;
        position:relative;
        z-index:10;
        top:0;
        left:0;
    }
    .content{
        height:calc(100% - 44px - 58px)
    }
</style>