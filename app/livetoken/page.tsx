'use client';
import { ChangeEvent, useEffect, useState } from 'react';
import Image from 'next/image';
import logo from './../assets/logo-black.png';
import optionsIcon from './../assets/options.svg';
import arrow from './../assets/arrow_status.svg';
import mapsIcon from './../assets/maps_icon.png';
import successfull from './../assets/successfull.svg';
import { Combobox, useCombobox, Switch } from '@mantine/core';
import Link from 'next/link';
import PostCheckin from '../components/TokenComponents/PostChecin';
import Precheckin from '../components/TokenComponents/PreCheckin';

export default function Livetoken() {
  const [checkin, setCheckin] = useState(false);
  const [name, setName] = useState('Vignesh');
  const [doctor, setDoctor] = useState('Dr. Mukesh');
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.get('checkin') === 'true') {
      setCheckin(true);
    }
    if (searchParams.get('name') !== null) {
      setName(searchParams.get('name') as string);
    }
    if (searchParams.get('doctor') !== null) {
      setDoctor(searchParams.get('doctor') as string);
    }
  }, [checkin]);

  const [location] = useState(
    'https://www.google.com/maps/dir/13.0912037,80.2180086/Cogent+Care+(+ENT+n+Gynae+Clinic),+Whitefield+Main+Rd,+opposite+4+Point+Sheraton+Hotel,+Above+Caf%C3%A9+Coffee+Day,+Happy+Valley,+Whitefield,+Bengaluru,+Karnataka+560066/@12.8510397,76.3353326,7z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x3bae0e06b5824ec7:0x2f7051c7fb29e0c6!2m2!1d77.751292!2d12.979305!3e0?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D'
  );
  const groceries = ['Contact hospital', `Doctor's profile`, 'Cancel Bookings'];
  // const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));
  const handleCheckin = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    if (event.target.checked) {
      setCheckin(true);
      const url = new URL(window.location.href);
      url.searchParams.set('checkin', 'true');
      window.history.pushState({}, '', url.toString());
    } else {
      const url = new URL(window.location.href);
      url.searchParams.set('checkin', 'false');
      window.history.pushState({}, '', url.toString());
      setCheckin(false);
    }
  };
  return (
    <div className='text-black flex h-screen w-screen bg-background px-[4%] md:px-[10%]  font-montserrat flex-col items-center  relative'>
      <Link href={location} className=' w-full absolute bottom-0'>
        {' '}
        <div className=' w-full h-[50px] rounded-tr-2xl rounded-tl-2xl bg-black flex flex-row items-center justify-around p-[5px] px-[10px]'>
          <Image src={mapsIcon} alt='india' className='h-[20px] w-auto'></Image>
          <p className='text-white text-[0.8rem] ml-[10px]'>
            Navigate to Cogent Care
          </p>
          <Image src={arrow} alt='india' className='h-[20px] w-auto'></Image>
        </div>
      </Link>

      <div className='h-[60px] sm:h-[70px] w-full  flex flex-row justify-between items-center mb-[50px]'>
        <div className='flex flex-row items-center gap-[10px]'>
          <div className='h-[15px] w-[15px] rounded-[50%] bg-[#c54242]'></div>
          <p className='font-semibold text-[1.4rem]'>Live Token Status</p>
        </div>
        <Image
          src={logo}
          alt='mediva'
          className='h-[30px] sm:h-[50px] w-auto'
        ></Image>
      </div>
      <div className='h-auto w-full flex flex-col'>
        <p className='text-[1.4rem] mb-[10px]'>
          Dear <span className='font-semibold'>{name}</span>
        </p>
        <div className='flex flex-row items-center gap-[10px]'>
          <Image
            src={successfull}
            alt='successfull'
            className='h-[20px] w-auto'
          ></Image>

          <p>Your appointment with {doctor} is confirmed</p>
        </div>

        {checkin ? <PostCheckin /> : <Precheckin />}

        <div className='flex justify-between items-center'>
          <Switch
            checked={checked}
            label='Checkin'
            onChange={(event) => handleCheckin(event)}
          />
          <Combobox
            store={combobox}
            width={150}
            position='bottom-start'
            withArrow
            onOptionSubmit={() => {
              // setSelectedItem(val);
              combobox.closeDropdown();
            }}
          >
            <Combobox.Target>
              <div
                className='cursor-pointer select-none flex flex-row items-center text-1.2rem font-medium gap-[10px]'
                onClick={() => combobox.toggleDropdown()}
              >
                <p>Options</p>
                <Image
                  src={optionsIcon}
                  alt='options'
                  className='h-[20px] w-auto'
                ></Image>
              </div>
            </Combobox.Target>

            <Combobox.Dropdown>
              <Combobox.Options>{options}</Combobox.Options>
            </Combobox.Dropdown>
          </Combobox>
        </div>
      </div>
    </div>
  );
}