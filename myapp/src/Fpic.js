import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

function Fpic() {
    const [api,setApi]=useState([]);

    const {id}=useParams();
    console.log(id);

    useEffect(()=>
    {
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((result)=>
        {
            setApi(result.data)
        })
        .catch((err)=>
        console.log(err)
    )
    },[])
  return (
    <div>
        <img src={api.image} height="400px" width="400px"/>
        <p>{api.description}</p>
    </div>
  )
}

export default Fpic