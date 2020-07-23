export default{
    namespace:"product",
    state:{
        productList:[
        {name:"辣椒"},
        {name:"黄瓜"}
    ]},
    reducers:{
        updateProductList(state,action){
           let copyProductList= copyList(state)
           copyProductList.productList.push(action.payload)
           return copyProductList
        }
    }
}
function copyList(arr){
    return JSON.parse(JSON.stringify(arr))
}