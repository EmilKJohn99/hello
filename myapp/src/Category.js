import React, { useEffect, useState } from 'react'
import { useParams,Link  } from 'react-router-dom'
import axios from 'axios'

function Category({category}) {
    const [api,setApi]=useState([])
    

   useEffect(()=>
    {
        
        axios.get(`https://fakestoreapi.com/products/category/${category}`)
        .then((result)=>{
            console.log(result);
            setApi(result.data)
        })
        .catch((err)=>{
        console.log(err)
        }
    )
    
    },[])


    
  return (
    <div>
        <div className='row d-flex' >

{
  api.map((a) => {
    return (

        <div class="col-md-4 col-6">
          <div class="card">
            <img src={a.image} height="300px" width="300px" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{a.title}</h5>
              <p class="card-text">{a.description}</p>
              <Link to={`/pic/${a.id}`}><button class="btn btn-primary">buy now @{a.price}</button></Link>
            </div>
          </div>
        </div>

)
}
  )
}
  </div>
  </div>
  )
}


export default Category