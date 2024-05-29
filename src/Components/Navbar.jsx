import h from '../assets/h.jpg'
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className=" flex w-full h-[100px]  justify-between bg-white   ">
    <img
    src={h}
    alt="logo"
    className=' w-[170px] max-md:ml-[50px] h-[110px] lg:mt-[-5px]  max-sm: ml-4 lg:ml-[90px]'

    />
    <div className=' flex pt-9 gap-7 font-semibold lg:ml-[640px] '>
    <p className='   max-sm:hidden  text-slate-500 max-md:hidden '>Find Suppliers</p>
    <span className=' gap-1 lg:flex  hidden '>
    <p className=' pl-10  text-slate-500 '>Find Service Tags </p>
  
    <IoIosArrowDown className='pt-1  text-slate-500 ' size={20} />
    </span>

   
    </div>
    <button className=' text-green-600 border max-sm:mt-[20px]   max-sm:ml-[100px] border-solid border-green-600  font-bold rounded-lg lg:w-[190px] mt-6 lg:h-[50px] max-sm:w-[200px] max-sm:mr-[20px] max-sm:h-[55px] max-md:w-[200px] max-md:h-[50px] max-md:mr-[60px] lg:mr-[60px]'>
    Login / Sign Up
    </button>
    </nav>
  )
}

export default Navbar
