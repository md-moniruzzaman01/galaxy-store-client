import React from 'react';
import Item from './Item';
import { IoPeopleOutline } from "react-icons/io5";
import { GoThumbsup } from "react-icons/go";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineFlag } from "react-icons/ai";
const Businesstrust = () => {
    const items =[
        {
            head:<AiOutlineFlag/>,
            body: '72',
            footer: 'Countries',
            _id:1
        },
        {
            head:<CgWebsite/>,
            body: '535+' ,
            footer:'Complete Projects',
            _id:2
        },
        {
            head:<IoPeopleOutline/>,
            body: '273+',
            footer:'Happy Clients',
            _id:3
        },
        {
            head:<GoThumbsup/>,
            body: '432+',
            footer:'Feedbacks',
            _id:4
        },
        
       
        
    ]
    return (
        <div className=' mt-24 container mx-auto font-poppins  max-w-7xl'>
           <div>
               <h2 className='text-red-600 text-2xl md:text-4xl font-bold text-center'>MILLIONS BUSINESS TRUST US</h2>
               <p className='text-secondary text-lg md:text-xl mt-5 font-bold text-center'>TRY TO UNDERSTAND USERS EXPECTATION</p>
           </div>
            <div className='grid grid-cols-2 mx-auto my-11 gap-3.5 md:grid-cols-2 lg:grid-cols-4 '>
                {
                   items.map(categorty=> <Item 
                    categorty={categorty}
                    key={categorty._id}
                   ></Item>) 
                }
            </div>
            
        </div>
    );
};

export default Businesstrust;