import React from 'react';
import { Link } from 'react-router-dom';

const FoodCard = ({ food }) => {
    const { _id, name, details, price, img, rName } = food
    return (
        <div className="card w-96 p-2 bg-base-100 shadow-xl border">
            <figure><img className='rounded-xl' src={img} alt="foods" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">
                    {name}
                    <div className="badge badge-secondary ">{rName}</div>
                </h2>
                <p>
                    {
                        details.length > 50 ?
                            <>{details.slice(0, 50) + '.....'}<Link>Read More</Link>
                            </>
                            :
                            <>{details}</>
                    }
                </p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{price} tk</div>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/foods/${_id}`}><button className="btn ">Leave A Review</button></Link>
                </div>
            </div>
        </div >
    );
};

export default FoodCard;