import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import ReviewRow from './ReviewRow';

const Reviews = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    return (
        <div>
            <h2 className='text-center my-6 text-5xl font-bold'>You Have {reviews.length} Reviews</h2>

            <div className="overflow-x-auto w-full">
                <table className="table w-full my-10">

                    <thead>
                        <tr>
                            <th>
                                <label>

                                </label>
                            </th>
                            <th>Food</th>
                            <th>Your Details</th>
                            <th>Ratings</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review => <ReviewRow
                                key={review._id}
                                review={review}
                            ></ReviewRow>)
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Reviews;