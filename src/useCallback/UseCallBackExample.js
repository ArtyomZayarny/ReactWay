import React, { useState, useCallback } from 'react'
import List from './List';

export default function UseCallbackExample(props) {
    const [theme, setTheme] = useState('dark');
    const [number, setNumber] = useState(1)

    const themeColor = (theme) => {
        let color = theme === 'dark' ? '#282c34' : '#c3c3c3';
        return {
            'backgroundColor': color,
            'padding': 40
        }
    }
    const getItems = useCallback(() => {
        return [number, number + 1, number + 2]
    }, [number]);
    return (
        <div style={themeColor(theme)}>
            <input
                type="number"
                value={number}
                onChange={(e) => { setNumber(parseInt(e.target.value)) }}
            />
            <button onClick={() => { setTheme(theme === 'dark' ? 'light' : 'dark') }}>toggle theme</button>
            <List getItems={getItems} />
        </div>
    )
}
