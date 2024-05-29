import { BsArrowRight } from "react-icons/bs";


const City = () => {
  const Citys = [  "Abu Dhabi",
  "Sharjah & Ajman",
  "Dubai",
  "Ras Al Khaimah", // Corrected spelling
  "Umm Al Quwain", // Removed extra space
  "Fujairah", ]
  const leftCities = Citys.slice(0, 3);
  const rightCities = Citys.slice(3, 6);
  return (
    <section className="flex flex-col lg:flex-row mt-14">
      <div className="lg:ml-12 px-4 lg:px-0 lg:w-1/2">
        <h1 className="text-2xl lg:text-4xl font-bold text-black">
          Ready to dive into HABOT?
        </h1>
        <p className="mt-4 lg:mt-9 text-black lg:w-[600px] text-left">
          Signing up with HABOT opens the door to a world of new opportunities
          and potential for business growth. Gain access to a vibrant community
          of like-minded individuals, unlock valuable resources, and take the
          first step towards realizing your entrepreneurial dreams.
        </p>
        <button className="flex items-center font-bold gap-3 px-6 lg:px-16 py-3 tracking-wider text-white text-lg lg:text-xl mt-6 lg:mt-9 bg-green-700 rounded-lg">
          Sign up Today!
          <BsArrowRight size={30} />
        </button>
      </div>
      <div className="flex flex-col lg:flex-row lg:ml-12 lg:w-[550px] lg:gap-7 px-4 lg:px-0 mt-6 lg:mt-0">
      <div className="flex flex-col gap-2 lg:gap-6 w-full">
        {leftCities.map((city, index) => (
          <button
            key={index}
            className="flex items-center justify-center  gap-3 px-6 lg:px-5 py-3 lg:py-4 tracking-wider text-slate-800 text-lg border-2 border-orange-400 rounded-lg"
          >
            {city}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-2 lg:gap-6 lg:ml-1 w-full mt-2 lg:mt-0">
        {rightCities.map((city, index) => (
          <button
            key={index}
            className="flex items-center justify-center  gap-3 px-6 lg:px- py-3 lg:py-4 tracking-wide text-slate-800 text-lg  border-2 border-orange-400 rounded-lg"
          >
            {city}
          </button>
        ))}
      </div>
    </div>
    </section>
  );
};

export default City;
