import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
    return (
        <div>
            <div className="error">
                <div className="container-floud">
                    <div className="col-xs-12 ground-color text-center">
                        <div className="container-error-404">
                            <div className="clip"><div className="shadow"><span className="digit thirdDigit">4</span></div></div>
                            <div className="clip"><div className="shadow"><span className="digit secondDigit">0</span></div></div>
                            <div className="clip"><div className="shadow"><span className="digit firstDigit">4</span></div></div>
                            <div className="msg">OH!<span className="triangle"></span></div>
                        </div>
                        <Link to="/"><button classNameName='btn btn-danger'>Back Home Page</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;