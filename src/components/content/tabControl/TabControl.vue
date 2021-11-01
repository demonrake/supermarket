<template>
  <div class="tab-control">
      <div class="tab-control-item" 
      v-for="(item,index) in title" 
      :key='index'
      :class='{active:index===currentIndex}'
      @click='itemClick(index)'
      >
      <!-- 循环将标签数组显示，index为当前标签的索引，当currentIndex与当前index相同时，active样式为true，同时我们做了点击会更改currentIndex
      值与index相同，即点击后会将样式切换到活跃标签上。 -->
        <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name:"TabControl",
    props:{
        title:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            currentIndex:0,
        }
    },
    methods:{
        itemClick(index){
            this.currentIndex=index;
            this.$emit('tabClick',index)
        }
    }       
}
</script>

<style scoped>
    .tab-control{
        display:flex;
        text-align:center;
        height:40px;
        line-height: 40px;
        font-size: 15px;
        background-color:white;
    }
    .tab-control-item{
        flex:1;
    }
    .tab-control-item span{
        padding:5px;
    }
    .active{
        color:var(--color-high-text)
    }
    .active span{
        border-bottom:3px solid var(--color-tint)
    }
</style>