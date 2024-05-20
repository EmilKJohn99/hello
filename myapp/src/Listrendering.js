import React from 'react'
import { Link } from 'react-router-dom'

function Listrendering() {
    let arr=["arun","emil","ajay","jackson"]
    let obj=[{Name:"emil",age:20},{Name:"arun",age:19},{Nme:"Josh",age:20}]
  return (
    <div>
        {
            obj.map((a)=>{
                return(
                    <div>
                    {a.Name}
                    {a.Nme}

                    <button class="btn btn-primary"><Link to="/home">Hello</Link></button>
                    </div>

                )
            })
        }

    </div>
  )
}

export default Listrendering