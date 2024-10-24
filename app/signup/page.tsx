'use client';
import { useState } from 'react';
import Image from 'next/image';
import authImage from './../assets/authAsset.svg';
import india from './../assets/india.svg';
import axios from 'axios';
import toast from 'react-hot-toast';

import Link from 'next/link';

export default function Signup() {
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isLoading, setIsloading] = useState(false);

  const handleGetOtp = async () => {
    setIsloading(true);
    try {
      const response = await axios.post('http://localhost:8000/auth/send-otp', {
        name,
        phoneNumber,
      });
      console.log(response);
      if (response) setIsloading(false);

      if (response.status === 200 || response.status === 201) {
        setIsOtpSent(true);
        toast.success('OTP sent successfully!');
      } else {
        console.log(response);
        console.error('Failed to send OTP');
        toast.error('Failed to send OTP');
      }
    } catch (error) {
      console.error('Failed to send OTP', error);
      toast.error('Failed to send OTP');
    }
  };

  const handleSubmitOtp = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8000/auth/verify-otp',
        {
          phoneNumber,
          otp,
        }
      );
      if (response.status === 200 || response.status === 201) {
        console.log('OTP verified successfully');
        toast.success('OTP verified successfully!');
        window.location.href = '/';
      } else {
        console.error('Failed to verify OTP');
        toast.error('Failed to verify OTP');
      }
    } catch (error) {
      console.error('Failed to verify OTP', error);
      toast.error('Failed to verify OTP');
    }
  };

  return (
    <div className='flex h-screen w-screen bg-background px-[2%] sm:px-[15%] pt-[140px] font-montserrat flex-col md:flex-row items-center justify-around md:justify-normal'>
      <div className='w-[50%] flex'>
        <Image src={authImage} alt='auth image'></Image>
      </div>
      <div className='w-[50%] flex flex-col items-center h-[500px] gap-[50px]'>
        <div className='w-auto h-auto gap-[50px] flex flex-col'>
          <h1 className='font-bold sm:text-[2.6rem] w-[300px] text-[2rem]'>
            Hassle free Appoinments
          </h1>
          {!isOtpSent ? (
            <div className='flex flex-col w-[300px] sm:w-[400px] space-y-4 ic'>
              <label className='flex flex-col'>
                <span className='mb-1'>Name</span>
                <input
                  type='text'
                  className='shadow-md rounded-md h-[50px] w-full px-3 focus:outline-none'
                  placeholder='Enter your name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label className='flex flex-col'>
                <span className='mb-1'>Phone Number</span>
                <div className='flex items-center border-2 border-[#ffffff] rounded-md h-[50px] p-[10px] shadow-md'>
                  <span className='flex items-center justify-center min-w-[60px] bg-gray-200 border-r-2 border-[#cfbfbf00]'>
                    <Image
                      src={india}
                      className='w-6 h-4 mr-2'
                      alt='India Flag'
                    ></Image>
                    +91
                  </span>
                  <input
                    type='tel'
                    className='flex-1 px-3 h-full focus:outline-none'
                    placeholder='Enter your phone number'
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </label>
            </div>
          ) : (
            <div className='flex flex-col w-[300px] sm:w-[400px] space-y-4 my-[20px] gap-[30px]'>
              <label className='flex flex-col'>
                <span className='mb-1'>Enter OTP</span>
                <div className='flex space-x-5'>
                  {[...Array(6)].map((_, index) => (
                    <input
                      key={index}
                      type='text'
                      maxLength={1}
                      className='border-[2px] border-[solid] border-[#929292] rounded-xl h-[50px] w-[45px] text-center focus:outline-none'
                      value={otp[index] || ''}
                      onChange={(e) => {
                        const value = e.target.value;
                        if (/^\d*$/.test(value)) {
                          const newOtp = otp.split('');
                          newOtp[index] = value;
                          setOtp(newOtp.join(''));

                          if (value && index < 5) {
                            const nextSibling = e.target.nextElementSibling;
                            if (nextSibling) {
                              (nextSibling as HTMLElement).focus();
                            }
                          }
                        }
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Backspace' && !otp[index] && index > 0) {
                          const prevSibling = (e.target as HTMLInputElement)
                            .previousElementSibling;
                          if (prevSibling) {
                            (prevSibling as HTMLElement).focus();
                          }
                        }
                      }}
                    />
                  ))}
                </div>
              </label>
              <div className='flex justify-between'>
                <button
                  className='w-[100px] text-black font-medium flex items-center justify-center h-[35px] rounded-full border-[2px] border-[solid] border-[#303030]'
                  onClick={() => setIsOtpSent(false)}
                >
                  Back
                </button>
                <button
                  className='w-[100px] text-white font-medium flex items-center justify-center h-[35px] rounded-full bg-[#303030]'
                  onClick={handleSubmitOtp}
                >
                  {isLoading ? (
                    <svg
                      className='animate-spin h-5 w-5 text-white'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <circle
                        className='opacity-25'
                        cx='12'
                        cy='12'
                        r='10'
                        stroke='currentColor'
                        strokeWidth='4'
                      ></circle>
                      <path
                        className='opacity-75'
                        fill='currentColor'
                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                      ></path>
                    </svg>
                  ) : (
                    'Submit'
                  )}
                </button>
              </div>
            </div>
          )}
          {!isOtpSent && (
            <div className='flex flex-row w-[300px] sm:w-[400px] items-start justify-between'>
              <p>
                or{' '}
                <Link href={'/login'}>
                  <span className='font-semibold'>Login</span>
                </Link>
              </p>

              <button
                className={`w-[100px] text-white font-medium flex items-center justify-center h-[35px] rounded-full bg-[#303030] ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={handleGetOtp}
                disabled={isLoading}
              >
                {isLoading ? (
                  <svg
                    className='animate-spin h-5 w-5 text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <circle
                      className='opacity-25'
                      cx='12'
                      cy='12'
                      r='10'
                      stroke='currentColor'
                      strokeWidth='4'
                    ></circle>
                    <path
                      className='opacity-75'
                      fill='currentColor'
                      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                    ></path>
                  </svg>
                ) : (
                  'Get OTP'
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
