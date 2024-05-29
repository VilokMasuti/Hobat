import { FaCheckCircle } from "react-icons/fa";

const Youtube = () => {
  return (
    <section className="flex lg:gap-10 max-sm:flex-col w-full lg:w-[1450px] mt-20 mx-auto items-center justify-center bg-[#072F57] h-auto lg:h-[500px] p-4 lg:p-0">
      <div className="w-full lg:ml-[-190px] mt-20  lg:w-[700px] flex items-center justify-center gap-8">
        <iframe
          width="100%"
          height="400px"
          src="https://www.youtube.com/embed/IZLp-TZyDkQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-lg"
        ></iframe>
      </div>
      <div className="flex relative max-md:ml-[50px] flex-col mt-24  w-full lg:w-[350px]">
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="  text-2xl lg:text-3xl font-bold  text-orange-500 mr-4">
              Buyer
            </h2>
            <div className=" absolute top-[60px] border-[3px] border-b     left-[-10px] w-[150px]  border-orange-500 "></div>
            <span className=" max-sm:ml-[-260px]">
              <h2 className="text-2xl lg:text-3xl font-bold text-white ml-[220px]">
                Supplier
              </h2>
            </span>
          </div>

          <ul className="list-none    space-y-5 ml-[-30px] mt-10 text-white font-bold  w-[500px]">
            <li className="flex max-sm:text-sm items-center text-lg">
              <FaCheckCircle className="text-green-500 mr-2" />
              Post your requirements.
            </li>
            <li className="flex  max-sm:text-sm items-center text-lg">
              <FaCheckCircle className="text-green-500 mr-2" />
              Sit back for multiple suppliers to contact you.
            </li>
            <li className="flex max-sm:text-sm max-sm: text-balance max-sm:pb-[-40px] items-center text-lg">
              <FaCheckCircle className="text-green-500 mr-2 mb-5 " />
              <p className=" max-sm:mb-[20px] max-sm:w-[400px]">
                Choose among the suppliers based on the ratings and reviews.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Youtube;
