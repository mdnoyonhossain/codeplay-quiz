import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart, Bar, Area } from 'recharts';

const Statistics = () => {
    const data = useLoaderData().data;
    console.log(data);

    return (
        <div className='container py-5'>
            <div className="row">
                <div className="col-md-12">
                    <ComposedChart width={700} height={300} data={data}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="total" barSize={20} fill="#413ea0" />
                        <Line type="total" dataKey="uv" stroke="#ff7300" />
                    </ComposedChart>
                </div>
            </div>
        </div>
    );
};

export default Statistics;