import React, { useState } from 'react';
import { toast } from 'react-toastify';

const QuizDetails = ({question}) => {
    // console.log(question)
    const [option, setOption] = useState('hellow');
    console.log(option)
    return (
        <div className="flex justify-center">
                
        <div className="flex justify-center border my-10 max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg--500">
            <div className='py-5 shadow-lg '>
                <div className="flex justify-center">
                <h2 className='w-5/4 bg-gray-300 px-3 rounded' >{question.question} </h2><span onClick={()=>{
                  toast.info(`${question.correctAnswer}`, {autoClose:1000})  
                }} className='ml-3'>#</span>
                </div>
           <div className=''>
           {question.options.map((option, index) => <div className='' key={index}>
           <input onClick={()=>{
            if(option === question.correctAnswer){
                toast.success('congrats', {autoClose:500})
            }
            else{
                toast.error('wrong answer, practice more', {autoClose:1000})
            }
           }} type="radio" name="option" id="" /> <span>{option} </span>
           </div>)}
           </div>
        </div>
        </div>
        </div>
    );
};

export default QuizDetails;