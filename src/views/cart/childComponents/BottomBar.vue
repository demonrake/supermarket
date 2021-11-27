<template>
  <div class="bottom-menu">
    <CheckButton class="select-all" :isChecked='isSelectAll' @click.native='allChecked'></CheckButton>
    <span>全选</span>
    <span class="total-price" @click='click()'>合计: ¥{{totalPrice}}</span>
    <span class="buy-product" @click='buttonClick()'>去计算({{checkLength}})</span>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'
  import {mapGetters} from 'vuex'

	export default {
		name: "BottomBar",
    components: {
		  CheckButton
    },
    computed: {
      ...mapGetters(['cartList']),
		  totalPrice() {
        let totalPrice=0
        for(let item of this.cartList){
          if(item.check){
          totalPrice=totalPrice+item.count*item.price
          }
        }
        return totalPrice
      },
      checkLength(){
        let checkLength=0;
        for(let item of this.cartList){
          if(item.check){
            checkLength=checkLength+item.count
          }
        }
        return checkLength
      },
      isSelectAll(){
        let checkLength=0;
        for(let item of this.cartList){
          if(item.check){
            checkLength+=1
          }
        };
        if(checkLength==this.cartList.length)
        {
          return true
        }else{
          return false
        }
      },
    },
    methods: {
      allChecked(){
        if(!this.isSelectAll){
          for (let item of this.cartList){
            item.check=true
          }
        }
        else{
          for (let item of this.cartList){
            item.check=false
          }
        } 
      },
      buttonClick(){
        if(this.isSelectAll){
          this.$toast.showMessage('去添加商品',2000)
        }
      },
      click(){
        console.log(',,,')
      }
  }
}
</script>

<style scoped>
  .bottom-menu {
    width: 100%;
    height: 44px;
    background-color: #eee;
    position: fixed;
    bottom: 50px;
    left: 0;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    font-size: 14px;
    color: #888;
    line-height: 44px;
    padding-left: 35px;
    box-sizing: border-box;
  }

  .bottom-menu .select-all {
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 13px;
  }

  .bottom-menu .total-price {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }

  .bottom-menu .buy-product {
    background-color: orangered;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
  }
</style>
