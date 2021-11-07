<template>
    <div class="detail-nav-bar">
        <nav-bar>
            <template v-slot:center >
                <div class='title'>
                    <div v-for='(item,index) in title' 
                        :key='index'
                        class='title-item'
                        :class='{active:currentIndex===index}'
                        @click='titleClick(index)'>
                        {{item}}
                    </div>     
                </div>
            </template>
            <template #left>
                <div class='back' @click='backClick'>
                    <img src="~assets/img/common/back.svg" alt="">
                </div>
            </template>
        </nav-bar>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
    name:'DetailNavBar',
    data(){
        return{
            title:['商品','参数','评论','详情'],
            currentIndex:0,
        }
    },
    components:{
        NavBar
    },
    methods:{
        titleClick(index){
            this.currentIndex=index
        },
        backClick(){
            this.$router.back()
        }
    },
}
</script>

<style scope>
    .title{
        display:flex;
        font-size:13px;
    }
    .title-item{
        flex:1
    }
    .active{
        color:var(--color-high-text)
    }
    .back img{
        margin-top:10px;
        width:40%;
    }
</style>