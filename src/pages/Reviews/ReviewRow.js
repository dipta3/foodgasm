import React, { useEffect, useState } from 'react';

const ReviewRow = ({ review, handleDelete }) => {
    const { _id, reviewId, foodName, reviewerName, email, photo, phone, message, ratings, ttj } = review;
    const [reviewService, setReviewService] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/foods/${reviewId}`)
            .then(res => res.json())
            .then(data => setReviewService(data))
    }, [reviewId])

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {reviewService?.img &&
                                < img src={reviewService.img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{foodName}</div>
                        <div className="badge badge-info gap-2">
                            {ratings}
                        </div>
                        <div className="badge ml-2 badge-warning gap-2">
                            {ttj}
                        </div>
                    </div>
                </div>
            </td>
            <td>

                {reviewerName}
                <br />
                <div>
                    <span className="badge badge-outline badge-sm">{email}</span>
                    <span className="badge badge-outline ml-2 badge-sm">{phone}</span>
                </div>
            </td>
            <td>
                <div className="w-10 h-10">
                    <img src={photo} alt="Avatar Tailwind CSS Component" />
                </div>
            </td>
            <th>
                <p>{message}</p>
            </th>
        </tr >
    );
};

export default ReviewRow;