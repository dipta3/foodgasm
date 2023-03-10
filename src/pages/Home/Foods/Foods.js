import React, { useEffect, useState } from 'react';
import FoodCard from '../FoodCard/FoodCard';
import { GiFlame } from 'react-icons/gi';

const Foods = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch('https://foodgasm-server-site.vercel.app/foods')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    return (
        <div>
            <h3 className='text-6xl animate-pulse text-red-700 flex justify-center my-9 font-bold'>Foods For Review <GiFlame /></h3>
            <div className='grid px-5 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10 my-10'>
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