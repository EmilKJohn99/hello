import React, { useEffect, useState } from 'react'


function Login() {
    const [state,setState]=useState(true)
    useEffect(()=>{
        console.log("updates");
    },[state])
    
    if (state) {
  return (
    <div>You need to login to continue<br/>
    <input type="submit" value={"login"} onClick={()=>{setState(false)}}></input>
    <br/>
    </div>
  )
}
else
{
    return(
        <div>
            you have logged in<br/>
            <input type='submit' value={"logout"} onClick={()=>{setState(true)}}></input>

        </div>
    )
}

}


export default Login