import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const Quiz = () => {
    const {data} = useLoaderData();
    // console.log(data, 'data');
    const { name, logo, questions} = data;
    // console.log(logo)
    return (
        <>
          <div className="flex justify-center mt-6">
          <div className="bg-gray-900 h-16 w-16 rounded-lg ">
           <img src={logo} alt="" />
          </div>
          </div>
          <h2 className='text-center pt-3'>Quiz of {name} </h2>

          {
            questions.map((question, index) => <QuizDetails question={question} index={index} key={index}/>)
          }
         
        </>
    );
};

export default Quiz;