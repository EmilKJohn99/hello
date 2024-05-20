import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import axios from 'axios'
import { Link } from 'react-router-dom'
function Cardimp() {
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
            <div className='row d-flex '>

                {
                    api.map((a) => {
                        return (
                            <div className='col-6 md-6 '>
                                <div className="card" style={{ height:"400px", width: "400px" }} id='imagebox'>
                                    <img src={a.image} height="200px" width="304px" alt="..."></img>
                                    <div class="card-body">
                                        <h5 >{a.title}</h5>
                                        <p >{a.description}</p>
                                        <Link to={`/pic/${a.id}`}><button class="btn btn-primary">Buy now @ ${a.price}</button></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Cardimp