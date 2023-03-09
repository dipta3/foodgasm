import React, { useEffect, useState } from 'react';

import SingleReview from './SingleReview';

const ReviewShow = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <div className='text-center'>
                <h2 className='text-6xl font-bold '>What They Say</h2>
                <p className='text-white mt-4'>Scroll down to see what they are saying about the food</p>
            </div>
            <div className='flex justify-center my-8'>
                <div className="h-96 carousel carousel-vertical rounded-box">

                    {
                        reviews.map(review => <SingleReview
                            key={review._id}
                            review={review}
                        ></SingleReview>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ReviewShow;