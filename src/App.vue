<template>
  <div>
    <!-- <keep-alive>
      <router-view>
      </router-view>
    </keep-alive> -->
    <router-view v-slot="{ Component }">
      <keep-alive exclude='Detail'>
        <component :is="Component"  />
      </keep-alive>
    </router-view>
    <main-tab-bar/>
  </div>  
</template>

<script scoped>
import MainTabBar from "components/content/mainTabbar/MainTabBar"
export default {
  name: 'App',
  components: {
    MainTabBar,
  }
}
</script>

<style>
@import "assets/css/base.css"
</style>
