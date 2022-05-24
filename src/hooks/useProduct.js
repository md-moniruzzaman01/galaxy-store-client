
import React, { useEffect, useState } from 'react';

const useCourse = () => {
    const [popularProduct, setPopularProduct] =useState([]);
useEffect(()=>{
    fetch('http://localhost:5000/all')
    .then(res => res.json())
    .then(data => setPopularProduct(data))
},[])
    return  [popularProduct, setPopularProduct]
};

export default useCourse;