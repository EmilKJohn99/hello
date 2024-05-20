import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [api, setApi] = useState([])
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((result) => {
                setApi(result.data)
                console.log(result.data);
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])

  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/home"><button class="nav-link active" aria-current="page" href="#">Home</button></Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </a>
          <ul class="dropdown-menu">
    <li><Link to='/categories/jewelery'><button class="dropdown-item">jewelery</button></Link></li>
    <li><Link to='/categories/electronics'><button class="dropdown-item">electronics</button></Link></li>
    <li><Link to="/categories/men's clothing"><button class="dropdown-item">mens clothing</button></Link></li>
    <li><Link to="/categories/women's clothing"><button class="dropdown-item">womens clothing</button></Link></li>
            
            
          </ul> 
        </li>
        
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar