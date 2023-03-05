import React from 'react';
import Typewriter from 'typewriter-effect';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-[url('/src/assets/banner.jpg')]">
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 font-serif text-7xl font-bold text-red-500">
                        <Typewriter
                            options={{
                                strings: ['Textured?', 'Juicy?', 'Tender?'],
                                autoStart: true,
                                loop: true,
                                cursor: '',

                            }}
                        />
                    </h1>
                    <p className="mb-5 text-xl font-bold text-white">Every Food Reviewed Here</p>

                </div>
            </div>
        </div>
    );
};

export default Banner;