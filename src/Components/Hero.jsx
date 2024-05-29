
import { CiLocationOn } from 'react-icons/ci';
import {  CiMail } from 'react-icons/ci';
import i from '../assets/i.png';

const Hero = () => {
  return (
    <section
      style={{
        background: `linear-gradient(356.01deg, rgba(7, 47, 87, 0.9) 50.8%, rgba(7, 47, 87, 0.7) 94.58%),
                     linear-gradient(0deg, rgba(7, 47, 87, 0.45), rgba(7, 47, 87, 0.45))`
      }}
      className='relative flex items-center justify-center h-[500px] '
    >
      <img
        className='absolute inset-0 w-full h-full object-cover bg-[#00008B] opacity-35 '
        src={i}
        alt="pic"
      />
      <div className='absolute flex flex-col items-center space-y-5 px-5'>
        <h1 className='text-white font-bold lg:text-6xl max-sm:text-4xl text-center'>Are You a Supplier?</h1>
        <h1 className='text-white  lg:text-6xl  max-sm:text-2xl  font-semibold text-center'>Explore Matching Opportunities.</h1>
        <div className='lg:flex max-sm:flex-col  max-sm:ml-[50px]   items-center justify-center mt-5 w-full max-w-4xl'>
          <div className='relative flex lg:ml-[-25px] max-md:ml-[70px]  max-sm:mr-[320px]  items-center w-full max-w-xs lg:max-w-md'>
            <CiMail className='absolute left-3 text-orange-500' />
            <input
              type='text'
              placeholder='Search your required service here'
              className='pl-10 pr-4 py-3 rounded-lg text-lg w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div className='relative  max-md:mt-4  max-md:ml-[70px] max-sm:mt-5 lg:ml-[15px]  flex items-center w-full max-w-xs lg:max-w-md'>
            <CiLocationOn className='absolute left-3 text-orange-500' />
            <input
              type='text'
              placeholder='Search your desired location here'
              className='pl-10 pr-4 py-3 rounded-lg text-lg w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <button className='lg:ml-3 max-md:ml-[160px]   max-md:mt-4 max-sm:ml-[170px] max-sm:mt-5  bg-green-800 text-white font-bold py-3 px-6 rounded-lg text-lg'>
            Search
          </button>
          
        </div>
        <span className=' max-sm:flex gap-2 lg:flex max-sm:flex-col'>
        <p className='  font-bold text-white text-2xl max-sm:text-4xl max-sm:ml-3 '> Are you a buyer?  </p>
        <a className=' text-xl underline  max-sm:ml-4 max-sm:text-xs max-sm: text-balance mxs  text-white  font-semibold'>Click here if you are looking to post a requirements   </a>
        </span>
       
      </div>
    </section>
  );
}

export default Hero;
