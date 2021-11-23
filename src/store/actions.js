export default{
  addCart(context,payload){
    return new Promise((reslove,reject)=>{
      let oldProduct=context.state.cartList.find(item=>item.iid===payload.iid)
      if(oldProduct){
        context.commit('addCounter',oldProduct)
        reslove('商品数量加1')
        // oldProduct.count+=1
      }
      else{
        payload.count=1;
        context.commit('addCart',payload)
        reslove('添加商品成功')
        // state.cartList.push(payload)
      }
    })
  }
}