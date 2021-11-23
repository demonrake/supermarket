<template>
  <div id='cart'>
      <cart-nav-bar></cart-nav-bar>
      <cart-list></cart-list>
      <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import CartNavBar from './childComponents/CartNavBar'
import CartList from './childComponents/CartList'
import BottomBar from './childComponents/BottomBar'
export default {
    name:'Cart',
    components:{
        CartNavBar,
        CartList,
        BottomBar,
    }
}
</script>

<style>

</style>