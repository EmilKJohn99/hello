import React, { useEffect, useState } from 'react'
import axios from "axios"

function Api() {
    const[api,setApi]=useState({})

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products/1")
        .then((result)=>{
            console.log(result);
            setApi(result.data)
        })
        .catch((err)=>{
            console.log(err);
        })

    },[])
  return (
    <div>
        <h1>Category{api.category}<br/>
        {api.description}</h1>
    </div>
  )
}

export default Api