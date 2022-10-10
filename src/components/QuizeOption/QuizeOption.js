import React from 'react';

const QuizeOption = ({ option, handelOnClickCorrectAnswer }) => {
    // console.log(option);
    return (
        <div className="col-6">
            <div onClick={() => handelOnClickCorrectAnswer(option)} className="p-3 border bg-light">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id={option} />
                <label className="form-check-label" for={option}> 
                <p className='ms-3'>{option}</p>
                </label>
            </div>
        </div>
    );
};

export default QuizeOption;