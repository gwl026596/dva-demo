import React from 'react'
import {connect} from 'dva'
class Product extends React.Component{
    
   
    onclickHandle(){
        const {dispatch}=this.props
        console.log(dispatch);
        const data={
            name:"衡水市",
            data1:[]
        }
        const pay={
            data1:[
                {id: 24, tabName: "YYsports店", shopName: "新理念，新知识", shopDesc: "新理念，新知识"},
                {id: 14, tabName: "ExP合作夥伴", shopName: "裕元花園酒店"}
            ]
        }
        const last={...data,...pay}
        console.log(last);
        dispatch({
            type:"product/updateProductList",
            payload:{name:"土豆"}
        })
    }
    render(){
        console.log(this.props);
        const {product}=this.props
        return(
            <div>
                product
                {
                    product.productList.map((element,index)=>{
                        return(
                        <div>{element.name}</div>
                        )
                    })
                }
                <button onClick={this.onclickHandle.bind(this)}>添加数据</button>
            </div>
        )
    }
}

export default connect(({ product }) => ({
    product,
  }))(Product)