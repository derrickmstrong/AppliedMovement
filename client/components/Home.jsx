import React, { useState, useEffect, Fragment } from 'react';

const Home = () => {
    const [name, setName] = useState('');

    const fetchApi = async () => {
      const res = await fetch('http://localhost:3000/api');
      const data = await res.json();
      setName(data);
    };

    useEffect(() => {
      fetchApi();
      return () => {};
    }, []);

    return (
      <Fragment>
        <h1>Welcome {name}</h1>
      </Fragment> 
    )  
}

export default Home
