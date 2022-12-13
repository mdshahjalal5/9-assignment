import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css';
const Topics = () => {
    const {data:topics} = useLoaderData();
    return (
        <>
            <div className="text-center border bg-gray-100 text-purple-700 p-3 text">
            The best time to start a career in coding is right now. Plus, you don’t even need to have a computer science degree to get a coding job. <br /> That’s right; your job prospects won’t be   limited if you don’t have a degree. People that used to work in construction <br /> and factories all their lives are now learning to code.
            </div>
        
        <div className="grid md:grid-cols-2  justify-items-center gap-8 py-8">
        {
                topics.map(topic => {
                    // console.log(topic)
                    return <Topic key={topic.id} topic={topic}/>})
            }
        </div>
        </>
    );
};

export default Topics;