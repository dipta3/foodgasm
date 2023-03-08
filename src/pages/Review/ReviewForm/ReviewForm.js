import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ReviewForm = () => {
    const { name, img, details, price, rName } = useLoaderData()

    return (
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
                <div className="card-actions justify-center">
                    <div className="badge badge-error">{price}tk</div>
                    <div className="badge badge-warning">{rName}</div>
                </div>
            </div>
        </div>
    );
};

export default ReviewForm;