export default{
  addCounter(state,payload){
    payload.count+=1
  },
  addCart(state,payload){
    payload.check=false;
    state.cartList.push(payload)
  }
}