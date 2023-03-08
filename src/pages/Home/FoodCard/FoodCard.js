import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const FoodCard = ({ food }) => {
    const { _id, name, details, price, img, rName } = food
    return (
        <div className="card w-96 p-2 bg-base-100 shadow-xl border">
            <figure>
                <PhotoProvider speed={() => 800}
                    easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}>
                    <PhotoView key={img} src={img}>
                        <img className='rounded-xl cursor-pointer' src={img} style={{ objectFit: 'cover' }} alt="foods" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold">
                    {name}
                    <div className="badge badge-secondary ">{rName}</div>
                </h2>
                <p>
                    {
                        details.length > 50 ?
                            <>{details.slice(0, 50) + '.....'}<Link to={`/foodsDetails/${_id}`} className='text-white'>Read More</Link>
                            </>
                            :
                            <>{details}</>
                    }
                </p>
                <div className="card-actions justify-end">
                    <div className="badge badge-error">{price} tk</div>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/foods/${_id}`}><button className="btn btn-outline">Leave A Review</button></Link>
                </div>
            </div>
        </div >
    );
};

export default FoodCard;