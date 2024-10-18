import Logo from './../assets/logo-black.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className='flex h-[70px] w-screen bg-white px-[15%] items-center  font-montserrat border-b-[1px] justify-between border-b-[#00000098] absolute z-[10] top-0'>
      <Link href={'/'}>
        <div className='flex flex-row items-center gap-3 '>
          <Image src={Logo} className='h-[35px] w-fit ' alt='Arrow' />
          <p className='font-bold text-black text-[1.6rem]'>Mediva</p>
        </div>
      </Link>
      <div className='flex flex-row items-center gap-[50px] text-[1rem]'>
        <Link href={'/fordoctors'}>
          <p className='font-medium text-black'>For doctors</p>
        </Link>{' '}
        <Link href={'/history'}>
          <p className='font-medium text-black'>History</p>
        </Link>{' '}
        <Link href={'/doctors'}>
          <p className='font-medium text-black'>Find doctors</p>
        </Link>
        <div className='font-medium text-black rounded-full border-[2px] border-black p-[5px] px-[30px] '>
          <p>Login</p>
        </div>
      </div>
    </div>
  );
}
