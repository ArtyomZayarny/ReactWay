import React, { useState, useEffect } from 'react'

export default function List({ getItems }) {
    const [items, setItems] = useState([]);


    useEffect(() => {
        setItems(getItems());
        console.log('update items')

    }, [getItems])


    return items.map(item => <div key={item}><h2 style={{ color: '#fff' }}>{item}</h2></div>)
}
