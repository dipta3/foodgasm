import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { AiFillStar } from 'react-icons/ai';
const ReviewForm = () => {
    const { _id, name, img, details, price, rName } = useLoaderData()
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()

    const handlePlaceReview = event => {
        event.preventDefault();
        const form = event.target;
        const fullName = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const email = user?.email || 'unregistered';
        const photo = user?.photoURL || 'N/A';
        const message = form.message.value;
        const ratings = form.ratings.value;
        const ttj = form.ttj.value;

        const review = {
            reviewId: _id,
            foodName: name,
            reviewerName: fullName,
            email,
            photo,
            phone,
            message,
            ratings,
            ttj

        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Thanks For Your Feedback')
                    form.reset()
                    navigate('/reviews')
                }
                console.log(data)
            })
            .catch(error => console.error(error))

    }

    return (
        <div>
            <div className="card text-center mb-10 mx-auto w-96 bg-base-100 shadow-xl image-full mt-5">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="font-bold text-xl">{name}</h2>
                    {
                        details.length > 200 ?
                            <>{details.slice(0, 250) + '.....'}
                            </>
                            :
                            <>{details}</>
                    }
                    <div className="card-actions mt-2 justify-center">
                        <div className="badge badge-error">{price} tk</div>
                        <div className="badge badge-warning">{rName}</div>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-center flex justify-center text-4xl font-extrabold m-5'>Give Your <span className='ml-3'>
                    <Typewriter
                        options={{
                            strings: ['FeedBack'],
                            autoStart: true,
                            loop: true,
                            cursor: '',
                            pauseFor: 250000

                        }}
                    />
                </span></h2>
                <form onSubmit={handlePlaceReview}>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 px-10 my-10'>
                        <input name='firstName' type="text" placeholder="First Name" className="input input-bordered w-full " required />
                        <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered w-full " required />
                        <input name='phone' type="text" placeholder="Your Phone Number" className="input input-bordered w-full " required />
                        <input type="text" placeholder="Email" className="input input-bordered w-full " defaultValue={user?.email} readOnly />
                        <input className="input input-bordered w-full " name='photo' placeholder="photo" defaultValue={user?.photoURL} readOnly />
                        <input name='ttj' type="text" placeholder="Is that TTJ? 'Textured' 'Tender' 'Juicy'" className="input input-bordered w-full " required />


                        <input name='ratings' type="text" placeholder="Rate (1-5)" className="input input-bordered w-full  max-w-xs" />
                        <input type="button" value="" required />
                        <div>
                            <textarea name='message' className="textarea textarea-bordered w-full h-24" placeholder="Give Your Review"></textarea>
                            <input type="submit" className='btn btn-outline my-2' value="Submit Your Order" required />
                        </div>

                    </div>
                </form>

            </div>
        </div >
    );
};

export default ReviewForm;