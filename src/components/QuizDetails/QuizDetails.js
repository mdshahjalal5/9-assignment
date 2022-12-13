import React from 'react';

const QuizDetails = ({question}) => {
    console.log(question)
    return (
        <div className="flex justify-center border">
            <div>
            <h2 className='w-5/4'>{question.question} </h2>
           <div className=''>
           {question.options.map(option => <div>
            *<span>{option} </span>
           </div>)}
           </div>
        </div>
        </div>
    );
};

export default QuizDetails;