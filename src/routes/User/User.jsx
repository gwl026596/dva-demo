import React, { useEffect } from 'react'
import { connect } from 'dva'
import NProgress from 'nprogress';
import "nprogress/nprogress.css"
const User = ({ dispatch, example, loading }) => {
    const isLoading = loading.effects['example/fetch']
    console.log(loading);
      if(isLoading){
        NProgress.start(); 
      }else{
        NProgress.done(); 
      }
    const startgetData = () => {
       
        dispatch({
            type: "example/fetch",
            payload: {
                id: 100
            }
        })
    }
    useEffect(() => {
       
        startgetData()
    }, [])
    return (

        <div>
            <div>
                {

                    //console.log( example.result.length)
                    example.result.length > 0 ? (example.result.map((element, index) => {
                        return (
                            <div key={element.id}>
                                <img src={element.bannerUrl} alt="" style={{ height: "150px", width: "100%" }} />
                            </div>
                        )
                    })) : <div>正在请求...</div>
                }
            </div>

        </div>
    )
}
export default connect(({ example, loading }) => ({ example, loading }))(User)