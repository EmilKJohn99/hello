import React from 'react'

function Listrenderingobject() {
    let obj=[{Name:"Emil",Email:"emial@gmail.com",Phone:"99999999"},{Name:"Arun",Email:"Arun@gmail.com",Phone:"9889898989"},{Name:"Akash",Email:"Akash@gmail.com",Phone:"434344344"}]
  return (
    <div>
        {obj[0].Name}
    </div>
  )
}

export default Listrenderingobject