<template>
  <div class="toast" v-show='show'>
    <div>
      {{message}}
    </div>
  </div>
</template>

<script>
export default {
  name:'Toast',
  data(){
    return{
      message:'',
      show:false
    }
  },
  methods:{
    showMessage(message='默认文字',duration=1000){
      this.show=true,
      this.message=message,
      setTimeout(()=>{
        this.show=false,
        message=''
      },duration)
    },
  }
}
</script>

<style>
    .toast{
      position:fixed;
      left:50%;
      top:50%;
      padding:8px 10px;
      color:#fff;
      background-color:rgb(0,0,0,.75);
      z-index:999;
    }
</style>