export default{
  addCart(context,payload){
    let oldProduct=context.state.cartList.find(item=>item.iid===payload.iid)
    if(oldProduct){
      context.commit('addCounter',oldProduct)
      // oldProduct.count+=1
    }
    else{
      payload.count=1;
      context.commit('addCart',payload)
      // state.cartList.push(payload)
    }
  }
}