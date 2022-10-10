import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizeQuestions from '../QuizeQuestions/QuizeQuestions';
import './Quizes.css'

const Quizes = () => {
    const quizes = useLoaderData().data;
    
    const handelCorrectAnswer = quiz => {
        alert(quiz);
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