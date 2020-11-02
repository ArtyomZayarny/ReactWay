import React, { useEffect, useState } from 'react'

export default function Counter(props) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (count === 3) {
            throw new Error()
        }
    }, [count])

    return (
        <>
            <p>{count}</p>
            <button onClick={() => { setCount(count + 1) }}>+</button>
        </>
    )
}