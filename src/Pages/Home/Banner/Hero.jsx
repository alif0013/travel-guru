import React from 'react';
import heroImg from '../../../assets/Rectangle 1.png'
import { Link } from 'react-router-dom';
const Hero = () => {
    return (
        <div className="hero h-[550px]">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                <img src={heroImg} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Cox's bazar</h1>
                    <p className="py-6">Cox's Bazar is a city, fishing port, tourism centre <br /> and district headquarters in southeastern Bangladesh. It is <br /> famous mostly for its long natural sandy beach, and it ...</p>
                    <Link to='/booking' className="btn bg-[#F9A51A]">Boking</Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;