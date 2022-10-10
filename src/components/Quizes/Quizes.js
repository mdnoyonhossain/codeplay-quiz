import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizeQuestions from '../QuizeQuestions/QuizeQuestions';
import './Quizes.css'
import { toast } from 'react-toastify';

const Quizes = () => {
    const quizes = useLoaderData().data;
    
    const handelCorrectAnswer = quiz => {
        toast.success(`"Correct Answer: "${quiz}`, {autoClose: 5000})
    }

    return (
        <div className='quizes'>
            <h3>Quize of {quizes.name}</h3>
            {
                quizes.questions.map(question => <QuizeQuestions key={question.id} question={question} handelCorrectAnswer={handelCorrectAnswer}></QuizeQuestions>)
            }
        </div>
    );
};

export default Quizes;