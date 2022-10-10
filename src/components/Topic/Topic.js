import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css'

const Topic = ({topic}) => {
    const {id, logo, name, total} = topic;

    return (
        <div className="col-lg-3 col-md-6 mb-5">
            <div className="card h-100 shadow border-0">
                <img className="card-img-top bg-dark" src={logo} alt="..." />
                <div className="card-body p-4 d-flex justify-content-evenly align-items-center">
                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">Total: {total}</div>
                    <h5 className="card-title mb-3">{name}</h5>
                </div>
                <Link to={`/topic/${id}`} className='w-50' style={{margin: 'auto'}}><button className='btn btn-danger mb-3 btn-quiz' >Start Quiz</button>  </Link>              
            </div>
        </div>
    );
};

export default Topic;