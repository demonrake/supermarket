<template>
    <div id="detail">
        <detail-nav-bar>
        </detail-nav-bar>
        <detail-swiper :topImages='topImages'>
        </detail-swiper>
    </div>
</template>

<script>
import DetailNavBar from 'views/detail/childComponents/DetailNavBar'
import DetailSwiper from 'views/detail/childComponents/DetailSwiper'

import { getDetail } from 'network/detail'
export default {
    name:'Detail',
    components:{
        DetailNavBar,
        DetailSwiper
    },
    data(){
        return{
            iid:null,
            topImages:[]
        }
    },
    created(){
        this.iid=this.$route.params.iid
    },
    mounted(){
        this.getDetail()
    },
    methods:{
        getDetail(){
            getDetail(this.iid).then(res=>{
                console.log(res)
             this.topImages=res.result.itemInfo.topImages
            })
        }
    }
}
</script>

<style>

</style>