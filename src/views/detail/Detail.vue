<template>
    <div id="detail">
        <detail-nav-bar class='detail-nav-bar'>
        </detail-nav-bar>
        <scroll class='content' ref='scroll' :pull-up-load='true'>
          <detail-swiper :top-images='topImages'>
          </detail-swiper>
          <detail-base-info :goods='goods'></detail-base-info>
          <detail-shop-info :shop='shop'></detail-shop-info>    
          <detail-goods-info :detail-info='detailInfo'></detail-goods-info>
          <detail-param-info :param-info='paramInfo'></detail-param-info>
          <detail-comment-info></detail-comment-info>
        </scroll>
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

import { getDetail,Goods,Shops,GoodsParam} from 'network/detail'

import Scroll from 'components/common/scroll/Scroll'

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
    },
    data(){
        return{
            iid:null,
            topImages:[],
            goods:{},
            shop:{},
            detailInfo:{},
            paramInfo:{},
        }
    },
    created(){
        this.iid=this.$route.params.iid,
        this.getDetail()
    },
    mounted(){
    },
    methods:{
        getDetail(){
        getDetail(this.iid).then(res=>{
            console.log(res)
            const data=res.result
            this.topImages=data.itemInfo.topImages
            this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
            this.shop=new Shops(data.shopInfo)
            this.detailInfo=data.detailInfo
            this.paramInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule)
         })
        },
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
        height:calc(100% - 44px)
    }
</style>