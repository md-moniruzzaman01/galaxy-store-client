import React from 'react';
import { IoPeopleOutline } from "react-icons/io5";
import { GoThumbsup } from "react-icons/go";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineFlag } from "react-icons/ai";
const Item = ({categorty}) => {
    return (
        <div className=''>
            
        <div className='flex flex-col justify-center items-center  shadow-md rounded-xl mx-3 my-7 py-5 '>
        <div className='m-7'>
            <p className='text-4xl md:text-6xl text-red-500'>{categorty?.head}</p>
        </div>
        <h1 className='text-2xl md:text-4xl font-semibold text-secondary'>{categorty?.body}</h1>
        <h1 className='text-md md:text-xl mt-3 font-semibold text-red-500'>{categorty?.footer}</h1>
        </div>
    </div>
    );
};

export default Item;