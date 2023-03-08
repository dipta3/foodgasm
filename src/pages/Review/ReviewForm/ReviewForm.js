import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const ReviewForm = () => {
    const { name, img, details, price, rName } = useLoaderData()

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
                <h2 className='text-center flex justify-center text-4xl font-extrabold m-5'>Give Your <p className='ml-3'>
                    <Typewriter
                        options={{
                            strings: ['FeedBack'],
                            autoStart: true,
                            loop: true,
                            cursor: '',
                            pauseFor: 250000

                        }}
                    />
                </p></h2>
                <form >
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 px-10 my-10'>
                        <input type="text" placeholder="Name" className="input input-bordered w-full " />
                        <input type="text" placeholder="Your Phone Number" className="input input-bordered w-full " />
                        <input type="text" placeholder="Email" className="input input-bordered w-full " />
                        <select className="select w-full">
                            <option disabled selected>Is that TTJ?</option>
                            <option>Textured</option>
                            <option>Tender</option>
                            <option>Juicy</option>
                            <option>Other</option>
                        </select>
                        <div className='flex'>
                            <p className='font-semibold'>Is that worth it? Y/N</p>
                            <input type="checkbox" className="toggle text-center ml-3" />
                        </div>

                        <div className="rating">
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="text" placeholder="Rate (1-5)" className="input input-bordered w-full  max-w-xs" />

                        </div>

                        <div>
                            <textarea className="textarea textarea-bordered w-full h-24" placeholder="Give Your Review"></textarea>
                            <input type="submit" className='btn btn-outline my-2' value="Submit Your Order" />
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default ReviewForm;