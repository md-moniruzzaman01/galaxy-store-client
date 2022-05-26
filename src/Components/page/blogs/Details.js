
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import blogimg1 from '../../../images/blog1.png'
import blogimg2 from '../../../images/blog2.jfif'
import blogimg3 from '../../../images/blog3.png'
import blogimg4 from '../../../images/blog4.jpg'
import blogimg5 from '../../../images/blog5.png'
const Details = () => {
    const [detail, setDetail]= useState([])
    const {id} = useParams()
    const blogs =[
        {name:'How will you improve the performance of a React Application?',img:blogimg1, body:"optimization is the number one thing that is on the mind of every dev when building any software, especially web apps. JS frameworks like Angular, React and others, have included some awesome configurations and features. Here, I’ll review the features and tricks that will help you optimize your app’s performance.Optimizing application performance is key for developers who are mindful of keeping a user’s experience positive to keep them on an app and engaged.According to research by Akamai, a second delay in load time can cause a 7 percent reduction in conversions, making it imperative for developers to create apps with optimized performance.In React applications, we are guaranteed a very fast UI by default. However, as an application grows, developers may encounter some performance issues.",tags:'React, javascript', id:'1',comments:'3'},
        {name:'What are the different ways to manage a state in a React application?',img:blogimg2, body:"Not only are there are a lot of different kinds of state, but there often dozens of ways of managing each kind. Which should you choose?.n this guide, we will uncover the several kinds of state in your React apps that you might not be aware of, plus how to manage them in the most effective way.Managing state is arguably the hardest part of any application. It's why there are so many state management libraries available and more coming around every day (and even some built on top of others... There are hundreds of 'easier redux' abstractions on npm). Despite the fact that state management is a hard problem, I would suggest that one of the things that makes it so difficult is that we often over-engineer our solution to the problem.Redux was created to resolve this particular issue. it provides a central store that holds all states of your application.These are functions that hook you into React state and features from function components. Hooks don't work inside classes and it allows you to use React features  ",tags:'Reactjs , nodejs', id:'2',comments:'3'},
        {name:'How does prototypical inheritance work?',img:blogimg3, body:"JavaScript is a bit confusing for developers experienced in class-based languages (like Java or C++), as it is dynamic and does not provide a class implementation per se (the class keyword is introduced in ES2015, but is syntactical sugar, JavaScript remains prototype-based).JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.JavaScript objects are dynamic 'bags' of properties (referred to as own properties). JavaScript objects have a link to a prototype object. When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.",tags:'javascript', id:'3',comments:'3'},
        {name:'You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?',img:blogimg4, body:"All your products are listed in the Products area in Shopify. 50 products are listed on each page. To organize the list of products, and to find products in a list that spans many pages, you can sort, search, and filter the list.By default, your product list is sorted alphabetically (from A to Z) by product name.You can sort your product list using the following sort options:1.product title 2.date created 3.date updated 4.inventory 5.product type Sorting affects the order of the products in the Shopify admin, but not in your online store. You can sort your product list to help you find the products that you need to update or review. For example, to see which of your products are running low in stock, you can sort your product list by inventory.",tags:'javascript', id:'4',comments:'3'},
        {name:'What is a unit test? Why should write unit tests?',img:blogimg5, body:"A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected. A unit can be anything you want it to be — a line of code, a method, or a class. Generally, smaller tests are better as they give a more granular view of your code’s performance. Also, when you test very small units, your tests can run fast, like a thousand tests in a second fast To justify any effort in business, there must be a positive impact on the bottom line. If any problems persist, they should ideally be taken care of earlier on so that they don’t show up when the final version is sent out to clients. Software unit testing mainly involves checking individual modules for errors.",tags:'javascript', id:'5',comments:'3'},
        
    ]
   useEffect(()=>{
    const detailFind = blogs.find(blog => blog.id == id);
    setDetail(detailFind);

   },[])
console.log(id);
    return (
        <div>
            <div  className='  shadow-md  mb-11 mt-7 py-5 p-3 px-5 max-w-6xl mx-auto rounded-md'>
        <div className='w-full relative'>
            <img className='w-full h-full rounded-sm' src={detail?.img} alt="" />
           
        </div>
        <div className='relative'>
            <h1 className='text-gray-800 mt-7 text-3xl'>{detail?.name}</h1>
            <p className='text-gray-700 mt-5 pb-16'>{detail?.body}</p>
            <div className='flex text-gray-400 absolute bottom-1'>
            <p className=' border-r-2 border-gray-400'> <span className='px-2'>{detail?.tags}</span></p>
            <p className='ml-2'> <span className='ml-2'>{detail?.comments} Comments</span></p>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Details;