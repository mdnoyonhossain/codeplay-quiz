import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useLoaderData().data;

    return (
        <section className="py-5">
        <div className="container px-5 my-5">
            <div className="row gx-5 justify-content-center">
                <div className="col-lg-8 col-xl-6">
                    <div className="text-center">
                        <h2 className="fw-bolder">Quiz Topic</h2>
                        <p className="lead text-muted mb-5">The daily quiz provides a more-focused review of className topics; it provides a sharper focus in terms of assessing cognitive learning</p>
                    </div>
                </div>
            </div>
            <div className="row gx-5">   
                {
                    topics.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
                }
            </div>
        </div>
    </section>
    );
};

export default Topics;