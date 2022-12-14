import React from 'react';
import { Link } from 'react-router-dom';
import Topics from '../Topics/Topics';

const Home = () => {
    return (
        <div>
           <header className="bg-dark py-5">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center justify-content-center">
                        <div className="col-lg-8 col-xl-7 col-xxl-6">
                            <div className="my-5 text-center text-xl-start">
                                <h1 className="display-5 fw-bolder text-white mb-2">The Prodigious eLearning for you</h1>
                                <p className="lead fw-normal text-white-50 mb-4">Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                    <Link className="btn btn-outline-light btn-lg px-4" to="/blog">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img className="img-fluid rounded-3 my-5" src="https://dummyimage.com/600x400/343a40/6c757d" alt="..." /></div>
                    </div>
                </div>
            </header> 
            <Topics></Topics>
        </div>
    );
};

export default Home;