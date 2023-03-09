import React from 'react';
import sign from '../../../assets/sign.png'
const Message = () => {
    return (
        <div className="hero my-10 min-h-screen bg-[url('/src/assets/message.jpg')]">
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-neutral-content">
                <div className="">
                    <p className="mb-2 text-xs text-start font-bold text-white">MESSAGE FROM FOUNDER</p>
                    <p className='text-4xl font-bold'>First, Eat. Then, Do everything else.</p>
                    <p className='mt-2 text-white'>Food reviews are a critical component of the dining experience as they provide customers with valuable <br /> information that can help them make informed decisions. By reading reviews, customers can learn about <br /> the quality of the food, the atmosphere of the restaurant, and the level of service provided. This information <br /> can be particularly useful when trying a new restaurant or selecting a dish from the menu. Moreover,<br /> food reviews can also help restaurants improve their offerings by providing feedback from customers. <br /> Positive reviews can attract new customers, while negative reviews can hurt a restaurant's reputation. <br /> Finally, reading and sharing food reviews can be a fun way for people to explore new culinary <br /> experiences and connect with others who share their passion for food.</p>
                    <img className='w-52' src={sign} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Message;