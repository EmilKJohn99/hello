import React, { useState } from 'react'

function StateComponent() {

    const [state, setState] = useState('hi')
    function Call() {
        setState("hello");

    }
    return (
        <div>
            <button onClick={Call}>{state}</button>
        </div>

    )



}

export default StateComponent