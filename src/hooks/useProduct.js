
import React, { useEffect, useState } from 'react';

const useCourse = () => {
    const [popularProduct, setPopularProduct] =useState([]);
useEffect(()=>{
    fetch('https://gentle-coast-39284.herokuapp.com/popular/product')
    .then(res => res.json())
    .then(data => setPopularProduct(data))
},[])
    return  [popularProduct, setPopularProduct]
};

export default useCourse;