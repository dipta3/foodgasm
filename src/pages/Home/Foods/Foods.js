import React, { useEffect, useState } from 'react';
import FoodCard from '../FoodCard/FoodCard';

const Foods = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/foods')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    return (
        <div>
            <h3 className='text-6xl text-red-700 my-9 text-center font-bold'>Foods For Review</h3>
            <div className='grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 my-10'>
                {
                    foods.map(food => <FoodCard
                        key={food._id}
                        food={food}
                    ></FoodCard>)
                }
            </div>
        </div>
    );
};

export default Foods;