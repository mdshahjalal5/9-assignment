import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEye } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';
const QuizDetails = ({question}) => {
    return (
    <>  
         <div className="flex justify-center">
                
                <div className="flex justify-center border my-10 max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg--500">
                    <div className='py-5 shadow-lg '>
                        <div className="flex justify-center items-center">
                        <h2 className='w-5/4 bg-gray-300 px-3 rounded' >{question.question} </h2>
                        <FontAwesomeIcon className='ml-2' onClick={()=>{
                            toast.info(<h2 className='text-2xl font-bold '>write ans: <span>${question.correctAnswer}</span> </h2>,{autoClose:1000})
                        }} icon={faEye} />
                        </div>
                   <div className=''>
                   {question.options.map((option, index) => <div className='' key={index}>
                   <input onClick={()=>{
                    if(option === question.correctAnswer){
                        toast.success('Great job, you have done', {autoClose:500})
                    }
                    else{
                        toast.error('wrong answer, practice more', {autoClose:1000})
                    }
                   }} type="radio"  name="option" id="" /> <span>{option} </span>
                   </div>)}
                   </div>
                </div>
                </div>
                </div>
    </>
    );
};

export default QuizDetails;