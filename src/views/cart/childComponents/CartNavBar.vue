<template>
    <div class="cart-nav-bar">
      <nav-bar>
        <template #center>
          购物车（{{cartLength}}）
        </template>  
      </nav-bar>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {mapGetters} from 'vuex'
export default {
  name:'CartNavBar',
  components:{
    NavBar,
  },
  computed:{
    ...mapGetters([
      'cartLength'
    ])
  }
}
</script>

<style>
  .cart-nav-bar{
    background-color: var(--color-tint);
    color:#fff;
    font-weight:300;
  }
</style>