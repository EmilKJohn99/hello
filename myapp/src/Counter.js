import React, { useEffect, useState } from 'react'

function Counter() {
    const [state, setState] = useState(0)
    function add() {
        setState(state + 1)
    }
    function sub() {
        setState(state - 1)
    }

    useEffect(()=>{
        console.log('mounting');
    },[state])

    console.log('updating');

    return (
        <div>
            {state}<br />
            <button onClick={add}>add</button>
            <button onClick={sub}>sub</button>
        </div>
    )
}

export default Counter