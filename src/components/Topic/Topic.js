import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

const Topic = ({topic}) => {
    const navigate = useNavigate();
    const handleNavigate =()=>{
        navigate(`/topic/${id}`)
    }
    // console.log(topic, 'topic')
    const {id, name, logo, total } = topic;
    return (
        <div className='py-'>
       
<div className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={logo} alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {name} </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    <button onClick={()=>{
        navigate(`/topic/${id}`)}} className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" w-1/2 justify-center '>Start Practice</button>
    </div>
</div>


        </div>
    );
};

export default Topic;