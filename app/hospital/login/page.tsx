import Image from 'next/image';
import logo from './../../assets/logo-black.png';

export default function Login() {
  return (
    <div className='flex flex-row h-full w-full font-montserrat bg-dashboardBase  justify-center items-center '>
      <div className='flex items-center justify-center min-h-screen bg-gray-50 w-[600px]'>
        <div className='w-full max-w-md p-6 bg-white rounded-lg shadow-md'>
          <div className='w-full flex flex-col items-center gap-[5px]'>
            <Image
              src={logo}
              alt='mediva'
              className='h-[30px] sm:h-[50px] w-auto '
            ></Image>
            <h1 className='text-2xl font-bold text-gray-800'>Mediva</h1>
          </div>

          <form className='mt-6 space-y-4'>
            <div>
              <input
                type='email'
                placeholder='Enter email'
                className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
            <div>
              <input
                type='password'
                placeholder='Password'
                className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
            <div className='flex items-center justify-between'>
              <p className='text-sm text-gray-600'>
                New here?{' '}
                <a
                  href='/hospital/register'
                  className='text-blue-500 hover:underline'
                >
                  Register here
                </a>
              </p>
            </div>
            <button
              type='submit'
              className='w-full px-4 py-2 font-medium text-white bg-black rounded-md hover:bg-gray-800'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
