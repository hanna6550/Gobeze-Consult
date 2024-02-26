"use client";
import React from 'react';
import { useState, useEffect } from 'react';

import Image from 'next/image'
import Nav from './navbar';
import bgAdwa from '../public/images/BgAdwa.png';
import bgBikila from '../public/images/BgBikila.png';
import { FaChevronCircleDown } from "react-icons/fa";
import Features from "./features"

function Landing() {

    const [currentIndex, setCurrentIndex] = useState(1);

    const images = [
        bgAdwa,
        bgBikila,
    ]

    useEffect(() => {
        const autoplay = setInterval(() => {
            nextSlide();
        }, 4000);
        
        return () => clearInterval(autoplay);
    }, [currentIndex]);

    const prevSlide =() =>{
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length -1 : prevIndex -1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length -1 ? 0 : prevIndex + 1 ))
    };

    return (
        <div className="relative h-screen">
            <Image src={images[currentIndex]} alt='bg-img' className="w-full h-full object-cover absolute z-[-1]" />
            <Nav className="fixed absolute top-0 left-0 w-full z-10" />
            <div className="relative z-10">
            <div className='mt-56 flex justify-center flex-col'>
            <h1 className='absolute bg-[#FF7F00] text-white h-20 w-fit text-4xl pt-6 px-20 xs:tes-[8px] mb-44'>Helping Good People WIN.</h1>
            <div className='flex justify-center flex-col'>
            <h1 className='bg-opacity-90 bg-gray-900 text-white h-30 w-fit text-2xl pt-10 px-16 pb-6 ml-24'>
                <p>What does Abebe Bikila and the Battle of</p>
                <p>Adwa have in Common? Underdogs, good </p>
                <p>people winning. <a className='text-orange-500 text-sm'>Read more </a></p></h1>
                </div>
            </div>

        {/* <a className='justify-end'><FaChevronCircleDown /></a> */}
            </div>

            <div className='mt-40'>
                <Features/>
            </div>
        </div>
    )
}

export default Landing;
