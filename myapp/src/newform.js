import React, { useState } from 'react'

function Newform() {
    const [data,setData]=useState({name:'',age:'',phone:'',batch:'',dob:'',district:'',gen:''})
    function updates(e)
    {
        setData({...data,[e.target.name]:e.target.value})
      
    }
    console.log(data)
    function print()
    {
        document.write(data.name,"<br/>")
        document.write(data.age,"<br/>")
        document.write(data.phone,"<br/>")
        document.write(data.batch,"<br/>")
        document.write(data.dob,"<br/>")
        document.write(data.district,"<br/>")
        document.write(data.gen,"<br/>")

    }
    
  return (
    <div>
        <input type='text' placeholder='name' name="name" onChange={updates}></input>
        <input type='number' placeholder='age' name="age" onChange={updates}></input>
        <input type='number' placeholder='phone' name="phone" onChange={updates}></input>
        <input type='number' placeholder='batch' name="batch" onChange={updates}></input>
        <input type="date" placeholder='dob' name="dob" onChange={updates}></input><br/>
        Select district
        <br/>
        <select name='district' size={4} onChange={updates}>
            <option value={"kerala"}>kerala</option>
            <option value={"tamil nadu"}>tamil nadu</option>
            <option value={"andhra"}>andhra pradesh</option>
            <option value={"karnataka"}>karnataka</option>
        </select>
        <br/>
        enter gender
        <input type='radio' name="gen" onChange={updates} value={"male"}></input>male
        <input type='radio' name="gen" onChange={updates} value={"female"}></input>female
        <input type='submit' onClick={print}></input>
    </div>
  )
}

export default Newform