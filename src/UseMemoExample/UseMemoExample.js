import React, { useState, useMemo, useEffect } from 'react'

function slowFunction(num) {
    console.log('Slow functions');
    for (let i = 0; i < 1000000000; i++) { }
    return num * 2
}

export default function UseMemoExample(props) {
    const [number, setNumber] = useState(0);
    const [theme, setTheme] = useState(false);


    const doubleNUmber = useMemo(() => { return slowFunction(number) }, [number])

    const themeColor = useMemo(() => {
        let color = theme ? '#c3c3c3' : '#282c34';
        return {
            'backgroundColor': color,
            'padding': 40
        }
    }, [theme]);

    useEffect(() => {
        console.log('Theme is change')

    }, [themeColor]);

    return (
        <>
            <div style={themeColor}>
                <input
                    type="number"
                    value={number}
                    onChange={(e) => { setNumber(parseInt(e.target.value)) }}
                />
                <button onClick={() => { setTheme(!theme) }}>toggle theme</button>
                <h2>{doubleNUmber}</h2>
            </div>
        </>
    )
}
