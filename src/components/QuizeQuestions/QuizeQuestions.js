import React from 'react';
import QuizeOption from '../QuizeOption/QuizeOption';
import { EyeIcon } from '@heroicons/react/24/solid'

const QuizeQuestions = ({ question, handelCorrectAnswer }) => {
    const {correctAnswer} = question;
    
    const handelOnClickCorrectAnswer = correct => {
        // console.log( correct, correctAnswer);
        if(correct === correctAnswer){
            alert('match')
        }else{
            alert('not match')
        }
    }

    return (
        <div className="container shadow py-5 w-75 text-center">

            <p>{question.question}</p>
            <div className="row g-2">
                {
                    question.options.map(option => <QuizeOption key={option.id} option={option} handelOnClickCorrectAnswer={handelOnClickCorrectAnswer}></QuizeOption>)
                }
            </div>
            <p onClick={() => handelCorrectAnswer(correctAnswer)}><EyeIcon className="h-6 w-6" style={{color: 'black', width: '30px', float: 'right', marginTop: '20px', cursor: 'pointer'}}/></p>
        </div>
    );
};

export default QuizeQuestions;