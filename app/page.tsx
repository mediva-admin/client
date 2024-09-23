export default function Home() {
  return (
    <div className='flex h-screen w-screen bg-background px-[15%] items-center justify-center font-montserrat'>
      <div className='h-[300px] w-full flex flex-row  justify-between '>
        <div className='flex flex-col gap-[50px] w-[50%]'>
          <div className='flex flex-col'>
            <h1 className='text-baseColor font-bold text-[5rem] '>
              Healthcare
            </h1>
            <p className='text-[3rem] text-black font-semibold'>
              without the wait
            </p>
          </div>

          <div className='flex flex-col'>
            <p className='text-[1rem] text-[#585858] font-medium'>
              Save time and get the care you need,
            </p>
            <p className='text-[1rem]  text-[#585858] font-medium'>
              exactly when you need it
            </p>
          </div>
        </div>
        <div className='flex flex-col w-[50%] justify-around items-end'>
          <div className='w-[300px] h-[70px] bg-baseColor'></div>
          <div className='w-[300px] h-[70px] bg-baseColor'></div>
        </div>
      </div>
    </div>
  );
}
