import React, { useState, useEffect } from 'react';

const App = () => {
    const [name, setName] = useState(null)

    const fetchApi = async () => {
        const res = await fetch('http://localhost:3000/api/hello');
        const data = await res.json();
        setName(data)
    }

    useEffect(() => {
        fetchApi()
        return () => {
        }
    }, [])

    return (
        <div>
            <h1>Hello {name}!</h1>
        </div>
    )
}

export default App