import React, { useState } from 'react'

function Form() {

    const [data,setData]=useState({
        name:'',
        age:''
    })

    function change(e){
        setData({...data,[e.target.name]:e.target.value})
    }

    console.log(data);
   
  return (
    <div>
        <input type='text' placeholder='enter name' id="h" onChange={change} name='name' ></input>
        <input type='number' placeholder='age' onChange={change} id="v" name='age'></input>
        <input type='submit' ></input>
        <br/>
        

    </div>
  )
}

export default Form