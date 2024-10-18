import Image from 'next/image';
import React from 'react';
import { CardContainer, CardItem } from './components/ui/3d-effect';
import Link from 'next/link';
import TokenBlock from './assets/tokenBlock.png';
import arrow from './assets/arrow.png';
export default function Home() {
  return (
    <div className='flex h-screen w-screen bg-background px-[15%] items-center justify-center font-montserrat relative'>
      <div className='h-screen w-screen absolute z-[0] inset-0'>
        <svg className='w-full h-full'>
          <defs>
            <clipPath id='polygonClip' clipPathUnits='objectBoundingBox'>
              <polygon points='0.8 0, 1 0, 1 1, 0.4 1' />
            </clipPath>
          </defs>
          <rect
            width='100%'
            height='100%'
            fill='#51B4A1'
            clipPath='url(#polygonClip)'
          />
        </svg>
      </div>
      <div className='flex justify-between  w-full md:items-center md:flex-row flex-col'>
        <div>
          <div className='h-[180px] flex flex-col items-start relative'>
            <h1 className='text-baseColor font-bold text-[5rem] absolute '>
              Healthcare
            </h1>
            <p className='text-[3rem] text-black font-semibold top-[90px] absolute'>
              without the wait
            </p>
          </div>
          <div className='flex flex-col items-start gap-[30px] relative  text-[#353535]'>
            <ul className='list-disc pl-5 max-w-[500px]'>
              <li className='text-[1rem]  font-medium'>
                Save time and get the care you need, exactly when you need it
              </li>
              <li className='text-[1rem]  font-medium'>
                Book a token and meet your doctor at the exact time.
              </li>
              <li className='text-[1rem]  font-medium'>
                Easy one-click appointment booking
              </li>
            </ul>
            <Link href={'/doctors'}>
              {' '}
              <div className='w-[220px] h-[50px] bg-baseColor transition-all duration-300 hover:bg-[#83c7b9] flex flex-row items-center px-[10px] border-[1px] border-[black] rounded-md text-black font-medium cursor-pointer select-none'>
                <p>Find Doctors</p>
                <Image
                  src={arrow}
                  className='scale-75 object-cover rounded-xl group-hover/card:shadow-xl'
                  alt='Arrow'
                />
              </div>
            </Link>
          </div>
        </div>
        <div>
          <CardContainer className='inter-var'>
            {/* <CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  '> */}
            <CardItem translateZ='100' className='mt-4'>
              <Image
                src={TokenBlock}
                className='scale-75 object-cover rounded-xl group-hover/card:shadow-xl'
                alt='Tooken'
              />
            </CardItem>
            {/* </CardBody> */}
          </CardContainer>
        </div>
      </div>
    </div>
  );
}
