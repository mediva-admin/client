import Image from 'next/image';
import React from 'react';
import { CardContainer, CardItem } from './components/ui/3d-effect';
import Link from 'next/link';
import TokenBlock from './assets/tokenBlock.png';
import arrow from './assets/arrow.svg';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row h-screen w-screen bg-background px-4 md:px-[10%] items-center justify-center font-montserrat relative">
      {/* Background SVG */}
      <div className="h-screen w-screen absolute z-[0] inset-0">
        <svg className="w-full h-full">
          <defs>
            <clipPath id="polygonClip" clipPathUnits="objectBoundingBox">
              <polygon points="0.8 0, 1 0, 1 1, 0.4 1" />
            </clipPath>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="#51B4A1"
            clipPath="url(#polygonClip)"
          />
        </svg>
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center md:items-start md:w-1/2 space-y-8 text-center md:text-left mt-[4rem] md:mt-0"> {/* Added margin for mobile */}
        {/* Title and Subtitle */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-baseColor font-bold text-[2.5rem] md:text-[5rem] leading-tight">
            Healthcare
          </h1>
          <p className="text-[1.5rem] md:text-[3rem] text-black font-semibold leading-snug">
            without the wait
          </p>
        </div>

        {/* List Items */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <ul className="list-disc pl-5 max-w-[500px]">
            <li className="text-[1rem] font-medium">
              Save time and get the care you need, exactly when you need it.
            </li>
            <li className="text-[1rem] font-medium">
              Book a token and meet your doctor at the exact time.
            </li>
            <li className="text-[1rem] font-medium">
              Easy one-click appointment booking.
            </li>
          </ul>
          <Link href={'/doctors'}>
            <div className="w-[180px] md:w-[220px] h-[40px] md:h-[50px] bg-baseColor transition-all duration-300 hover:bg-[#83c7b9] flex items-center justify-between px-4 border-[1px] border-[black] rounded-md text-black font-medium cursor-pointer">
              <p>Find Doctors</p>
              <Image
                src={arrow}
                className="scale-75 object-cover"
                alt="Arrow"
              />
            </div>
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative z-10 mt-8 md:mt-0 md:w-1/2">
        <CardContainer className="inter-var flex justify-center">
          <CardItem translateZ="100">
            <Image
              src={TokenBlock}
              className="w-full h-auto max-w-[250px] md:max-w-[400px] object-cover rounded-xl"
              alt="Token"
            />
          </CardItem>
        </CardContainer>
      </div>
    </div>
  );
}
