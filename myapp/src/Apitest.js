import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Apitest() {
    const [api,setApi]=useState([])
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products') 
        .then((result)=>{
            console.log(result);
            setApi(result.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

  return (
    
    <div>
        {
            api.map((a)=>{
                return(
                    <div>
                        {a.id} &nbsp;   
                        {a.title} &nbsp;
                        {/* <img src={a.image}></img> */}
                    </div>
                )
            })
        }
    </div>
  )
}

export default Apitest