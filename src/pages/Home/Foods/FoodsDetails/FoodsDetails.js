import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const FoodsDetails = () => {
    const { name, img, details, price, rName } = useLoaderData()
    return (
        <div className="card m-9 w-96 text-center mb-10 mx-auto glass">
            <figure>
                <PhotoProvider speed={() => 800}
                    easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}>
                    <PhotoView key={img} src={img}>
                        <img className='rounded-xl cursor-pointer p-2' src={img} style={{ objectFit: 'cover' }} alt="foods" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="text-2xl text-center font-bold">{name}</h2>
                <p>{details}</p>
                <div className="card-actions mt-5 justify-center mb-5">
                    <div className="badge badge-error">{price}tk</div>
                    <div className="badge badge-warning">{rName}</div>
                </div>
                <Link to='/foods'><button className="btn glass">Back</button></Link>
            </div>
        </div>
    );
};

export default FoodsDetails;