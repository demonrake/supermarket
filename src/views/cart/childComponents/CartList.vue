<template>
    <div class='cart-list'>
      <scroll class='content' :pull-up-load='true' ref='scroll'>
        <cart-list-item v-for='(item,index) in cartList' :key='index' :itemInfo='item'></cart-list-item>
      </scroll>

    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Scroll from 'components/common/scroll/Scroll'
import CartListItem from './CartListItem'
export default {
  name:'CartList',
  components:{
    Scroll,
    CartListItem,
  },
  activated(){
      this.$refs.scroll.refresh()
  },
  computed:{
    ...mapGetters([
      'cartList'
    ])
  }
}
</script>

<style scoped>
.cart-list{
  height:100vh;
}
.content{
  height:calc(100% - 44px - 52px);
  overflow: hidden;
  /* background-color: red; */
}
</style>