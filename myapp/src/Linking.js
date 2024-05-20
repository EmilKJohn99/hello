import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Linking() {
    const[api,setApi]=useState([])

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((result)=>{
            setApi(result.data)
            console.log(result.data)
        })
        .catch((err)=>
        {
            console.log(err)
        })
    },[])
   

  return (
    <div>
       
        
                         <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
      <Link to="/home" ><img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-sunset-surrounded-by-grass_181624-22807.jpg?t=st=1715747646~exp=1715751246~hmac=27300a9ba4f1c40c4ae0c5f1c00fed542a0b919279613e5ae300ea3d0bc7091c&w=900" class="d-block w-100" alt="ded" /></Link>
      
      </div>
      <div class="carousel-item">
      <Link to="/list"><img src="https://img.freepik.com/free-photo/3d-tree-against-sunset-sky_1048-9754.jpg?t=st=1715747908~exp=1715751508~hmac=0c3cdbb8bcb472d99ca2c026d19f9ac04d5a8b8ad3b3a3777a65dd82f2e02d06&w=826" class="d-block w-100" alt="https://im" /></Link>
      </div>
      <div class="carousel-item">
      <Link to="/counter"><img src="https://img.freepik.com/free-photo/3d-render-tree-against-sunset-sky_1048-4191.jpg?t=st=1715747996~exp=1715751596~hmac=ffaedb66c8fcf7c8e9f736e46abaa178afbeb3b1e93357c02714279da673f58e&w=826" class="d-block w-100" /></Link>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  
  </div>
        
    
   
  )
}

export default Linking