import React from 'react'; 
import Image from 'next/image';
import DoctorImage from './../assets/doctorImage.png';
import Gps from './../assets/gps.svg';
import Timer from './../assets/timer.svg';
import Link from 'next/link';
import ratingLogo from './../assets/rating.svg';

type DoctType = {
  doctorName: string;
  rating: number;
  ratingcount: number;
  speciality: string;
  location: string;
  etaMins: number;
  minsFar: number;
  queueLength: number;
  insuranceCovered: boolean;  // Add the insuranceCovered prop
};

export const DoctorComponent = ({
  doctorName,
  rating,
  ratingcount,
  speciality,
  location,
  etaMins,
  minsFar,
  queueLength,
  insuranceCovered,  // Destructure insuranceCovered
}: DoctType) => {
  return (
    <div>
      <Link href={'/profile/doctor'}>
        <div className='h-[200px] w-[550px] bg-[#CBE6E2] flex flex-row items-center shadow-lg hover:scale-105 transition-all duration-300'>
          <div className='w-[30%]'>
            <Image
              src={DoctorImage}
              className='h-fit w-full'
              alt='DoctorImage'
            />
          </div>

          <div className='flex w-[70%] flex-col text-black justify-between px-[20px] p-[5px] gap-[20px]'>
            <div>
              <div className='flex justify-between w-full items-center'>
                <h1 className='font-semibold text-[1.4rem]'>{doctorName}</h1>
                <div className='flex flex-row items-center gap-1'>
                  <Image
                    src={ratingLogo}
                    className='h-fit w-[18px]'
                    alt='ratingLogo'
                  />
                  <p>
                    <span className='font-medium'>{rating}</span> rating ({ratingcount})
                  </p>
                </div>
              </div>

              {/* Speciality and Insurance */}
              <div className='flex flex-row items-center gap-2'>
                <p>{speciality}</p>
                {insuranceCovered && (
                  <div className= "flex flex-row items-center gap-2">
                   <div className='text-black-500 font-bold'>
              Insurance Covered
                  </div>

               </div>             
                )}
              </div>

              <div className='mt-[10px] flex flex-row justify-between w-full'>
                <div className='flex flex-row gap-[5px]'>
                  <Image src={Gps} className='h-fit w-[25px]' alt='Gps' />
                  <p>{location}</p>
                </div>
                <div className='w-[150px] flex items-center justify-between'>
                  <p className='font-medium'>ETC</p>
                  <p>
                    <span className='font-medium'>{etaMins}</span> mins
                  </p>
                </div>
              </div>

              <div className='flex flex-row justify-between w-full'>
                <div className='flex flex-row gap-[5px]'>
                  <Image src={Timer} className='h-fit w-[25px]' alt='Timer' />
                  <p>{minsFar} mins away</p>
                </div>

                <div className='w-[150px] flex items-center justify-between'>
                  <p className='font-medium'>Queue</p>
                  <p>{queueLength}</p>
                </div>
              </div>
            </div>
            <div className='w-[200px] h-[40px] bg-baseColor flex items-center justify-center text-white font-semibold rounded-sm'>
              Book now
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
