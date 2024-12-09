'use client';
import Image from 'next/image';
import logo from './../../assets/logo-black.png';
import { Avatar } from '@mantine/core';

import ManageIcon from './../../assets/manage_icon.svg';
import DashboardIcon from './../../assets/dashboard_icon.svg';
import ScheduleIcon from './../../assets/schedule_icon.svg';
import HelpIcon from './../../assets/help_icon.svg';
import SettingsIcon from './../../assets/settings_icon.svg';
import { useState } from 'react';
import Link from 'next/link';

interface DashboardSnippetProps {
  icon: string;
  name: string;
}

interface DashboardSnippetSectionProps {
  name: string;
  list: DashboardSnippetType[];
}

type DashboardSnippetType = {
  id: number;
  name: string;
  icon: string;
};

const DashboardSnippet: React.FC<DashboardSnippetProps> = ({ icon, name }) => {
  const endpoint = name.split(' ')[0].toLowerCase();
  return (
    <Link href={'/hospital/' + endpoint}>
      {' '}
      <div className='flex flex-row items-center w-full gap-[5px] hover:bg-[#F6F7F9] duration-[0.3s] cursor-pointer select-none pl-[5px] py-[4px] rounded'>
        <Image src={icon} alt='mediva' className='h-[20px] w-auto' />
        <p className='font-semibold'>{name}</p>
      </div>
    </Link>
  );
};

const DashboardSnippetSection: React.FC<DashboardSnippetSectionProps> = ({
  name,
  list,
}) => {
  return (
    <div className='w-full flex flex-col gap-[6px] text-[#323232]'>
      {' '}
      <h3 className='font-medium text-[#646464] text-[0.8rem] ml-[5px]'>
        {name}
      </h3>
      {list.map((item) => (
        <DashboardSnippet icon={item.icon} name={item.name} key={item.id} />
      ))}
    </div>
  );
};
export default function DashboardWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hospitalName] = useState('Cogent Care');
  const [operatorName] = useState('Akshay A');
  const [operatorRole] = useState('Admin');

  const [general] = useState([
    { id: 1, name: 'Dashboard', icon: DashboardIcon },
    { id: 2, name: 'Schedule', icon: ScheduleIcon },
    { id: 3, name: 'Manage Doctors', icon: ManageIcon },
  ]);

  const [support] = useState([
    { id: 2, name: 'Settings', icon: SettingsIcon },
    { id: 1, name: 'Help', icon: HelpIcon },
  ]);
  return (
    <div className='flex flex-row h-screen w-screen font-montserrat transition-all'>
      <div className='h-full w-[20%] bg-[#FFFFFF] border-r-[4px] border-[#f0f0f0] '>
        <div className='w-full h-[60px]  border-b-[4px] border-[#f0f0f0] flex flex-row items-center  px-[13%] gap-[20px]'>
          <Image src={logo} alt='mediva' className='h-[30px]  w-auto '></Image>
          <h1 className='text-2xl font-bold text-gray-800'>Mediva</h1>
        </div>
        <div className='w-full flex flex-col px-[10%] py-[10%] gap-[20px]'>
          <DashboardSnippetSection name='General' list={general} />
          <DashboardSnippetSection name='Support' list={support} />
        </div>
      </div>
      <div className='h-full w-[80%] flex flex-col '>
        <div className='flex w-full justify-between min-h-[60px] h-[60px] bg-[#FFFFFF]  border-b-[4px] border-[#f0f0f0] flex-row items-center px-[20px]'>
          <div className='flex flex-row gap-[10px]'>
            <Avatar name={operatorName} color='initials' />
            <div className='flex flex-col gap-0'>
              <h1 className='font-semibold text-[0.9rem]'>{operatorName}</h1>
              <p className='text-[#646464] text-[0.6rem]'>{operatorRole}</p>
            </div>
          </div>
          <p className='text-[#898989]'>{hospitalName}</p>
        </div>
        {children}
      </div>
    </div>
  );
}
