import React, { useState, useMemo, useEffect } from 'react'

function slowFunction(num) {
    console.log('Slow functions');
    for (let i = 0; i < 1000000000; i++) { }
    return num * 2
}

export default function UseMemoExample(props) {
    const [number, setNumber] = useState(0);
    const [theme, setTheme] = useState(false);


    const doubleNUmber = useMemo(() => slowFunction(number), [number]);

    const themeColor = {
        'backgroundColor': useMemo(() => { return theme ? '#c3c3c3' : '#282c34' }, [theme]),
        'padding': 40
    }


    useEffect(() => {
        console.log('Theme is change')
    }, [themeColor.backgroundColor]);

    return (
        <>
            <div style={themeColor}>
                <input
                    type="number"
                    value={number}
                    onChange={(e) => { setNumber(parseInt(e.target.value)) }}
                />
                <button onClick={() => { setTheme(!theme) }}>toggle theme</button>
                <h2 style={{ "color": '#fff' }}>{doubleNUmber}</h2>
            </div>
        </>
    )
}
