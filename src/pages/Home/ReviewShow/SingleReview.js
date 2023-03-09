import React from 'react';

const SingleReview = ({ review }) => {
    const { foodName, message, photo, ratings, ttj, reviewerName
    } = review
    return (
        <div className="carousel-item h-full">
            <div className="card w-96 bg-base-100 border shadow-xl">
                <div className="avatar p-5">
                    <div className="w-24 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={photo} alt='' />
                    </div>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{reviewerName}</h2>
                    <h2 className="">Food: {foodName}</h2>
                    <p>{message}</p>
                    <div className="card-actions">
                        <div className="badge badge-error gap-2">
                            <p>Ratings: {ratings}</p>
                        </div>
                        <div className="badge badge-warning gap-2">
                            {ttj}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default SingleReview;