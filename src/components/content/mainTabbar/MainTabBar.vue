<template>
  <div>
      <router-view></router-view>
      <tab-bar>
          <tab-bar-item path="/" activeColor='gold'>
            <template #item-img>
                <img  src="~assets/img/tabbar/home.svg" alt="">
            </template>
           <template #item-img-active>
                <img src="~assets/img/tabbar/home_active.svg" alt="">
            </template>
            <template #item-text>
                <div>目录</div>
            </template>
          </tab-bar-item>
          <tab-bar-item path="/category" activeColor='gold'>
            <template #item-img>
                <img src="~assets/img/tabbar/category.svg" alt="">
            </template>
            <template #item-img-active>
                <img src="~assets/img/tabbar/category_active.svg" alt="">
            </template>
            <template #item-text>
                <div>分类</div>
            </template>
          </tab-bar-item>
          <tab-bar-item path="/cart" activeColor='gold'>
            <template #item-img>
                <img src="~assets/img/tabbar/shopcart.svg" alt="">
            </template>
            <template #item-img-active>
                <img  src="~assets/img/tabbar/shopcart_active.svg" alt="">
            </template>
            <template #item-text>
                <div>正文</div>
            </template>
          </tab-bar-item>
          <tab-bar-item path="/profile" activeColor='gold'>
            <template #item-img>
                <img src="~assets/img/tabbar/profile.svg" alt="">
            </template>
            <template #item-img-active>
                <img src="~assets/img/tabbar/profile_active.svg" alt="">
            </template>
            <template #item-text>
                <div>我的</div>
            </template>
          </tab-bar-item>
      </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar"
import TabBarItem from "components/common/tabbar/TabBarItem"
export default {
    name:'MainTabBar',
    components:{
        TabBar,
        TabBarItem
    }
}
</script>

<style>

</style>