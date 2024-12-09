'use client';

import { Menu } from '@mantine/core';
import Logo from './../assets/logo-black.png';
import Image from 'next/image';
import Link from 'next/link';
import { Menu as MenuIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
const DesktopNavbar = () => (
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
      <Link href={'/signup'}>
        <div className='font-medium text-black rounded-full border-[2px] border-black p-[5px] px-[30px] '>
          <p>Sign Up</p>
        </div>
      </Link>
    </div>
  </div>
);

const MobileMenu = () => (
  <Menu shadow='md' width={200}>
    <div className='flex justify-between mx-[0.5rem] my-2'>
      <div className='flex flex-row items-center gap-3 '>
        <Image src={Logo} className='h-[35px] w-fit ' alt='Arrow' />
        <p className='font-bold text-black text-[1.6rem]'>Mediva</p>
      </div>
      <Menu.Target>
        <MenuIcon />
      </Menu.Target>
    </div>

    <Menu.Dropdown>
      <Menu.Item>
        <Link href={'/fordoctors'}>
          <p className='font-medium text-black'>For doctors</p>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={'/history'}>
          <p className='font-medium text-black'>History</p>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={'/doctors'}>
          <p className='font-medium text-black'>Find doctors</p>
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <Link href={'/signup'}>
          <div className='font-medium text-black '>
            <p>Sign Up</p>
          </div>
        </Link>
      </Menu.Item>
    </Menu.Dropdown>
  </Menu>
);

export default function Navbar() {
  const pathname = usePathname();

  if (pathname.includes('hospital') || pathname.includes('livetoken')) {
    return null;
  }

  return typeof window !== 'undefined' && window.innerWidth > 768 ? (
    <DesktopNavbar />
  ) : (
    <MobileMenu />
  );
}
