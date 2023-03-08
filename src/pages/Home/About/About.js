import React from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../../../assets/pic1.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 px-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className=' relative w-1/2 '>
                    <img src={pic1} alt='' className="w-4/5 px-4 h-full rounded-lg shadow-2xl" />
                    <div className='px-3 invisible lg:visible text-center w-3/5 bottom-3/4 absolute bg-white rounded-lg'>
                        <p className='text-6xl font-semibold font-serif'>“</p>
                        <p>“Ask not what you can do for your country. Ask what’s for lunch.”</p>
                        <p className='m-3'>- Orson Welles</p>
                    </div>
                </div>
                <div className='w-1/2'>
                    <p className='font-bold text-red-600 mb-5'>WHO WE ARE</p>
                    <h1 className="text-5xl font-bold">Thousand Reviews In One Place.</h1>
                    <p className="py-6">User have rights to give review what they feel about the particular food. Restaurant review sites are important because so many potential customers use them. There’s no avoiding online reviews, so it’s best to accept their influence and work to improve ratings and reviews.</p>
                    <button className="btn btn-outline"><Link to='/foods'>Leave A Review</Link></button>
                </div>
            </div>
        </div>
    );
};

export default About;