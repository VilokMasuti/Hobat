import { FaFacebook, FaLinkedin } from "react-icons/fa";
import ho from "../assets/ho.png";
import { BsInstagram } from "react-icons/bs";
import { TiSocialTwitter } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="w-full h-[160px] max-md:h-[520px] max-sm:h-[600px] mt-36 bg-[#123557]">
      <div className="pt-5 border-b-2 max-sm:hidden  border-slate-500 max-w-6xl mx-auto"></div>
      <div className="flex max-sm:pt-[50px]   flex-col lg:flex-row lg:gap-20 items-center lg:items-start mt-6 lg:mt-[-12px] px-4 lg:px-0">
        <div className="flex flex-col items-center lg:ml-[300px]">
          <img
            src={ho}
            alt="logo"
            className="w-[150px] h-[90px] lg:mt-[15px]"
          />
          <p className="text-white text-xs mt-[-20px] lg:ml-4">© R Singhania</p>
        </div>
        <div className="flex flex-col gap-2 mt-8 text-center lg:text-left">
          <h1 className="text-white text-xl">Company</h1>
          <p className="text-slate-200 text-xs">About</p>
          <p className="text-slate-200 text-xs">FAQ</p>
        </div>
        <div className="flex flex-col gap-2 mt-8 text-center lg:text-left">
          <h1 className="text-white text-xl">Terms</h1>
          <p className="text-slate-200 text-xs">Data privacy</p>
          <p className="text-slate-200 text-xs">Terms</p>
          <p className="text-slate-200 text-xs">Accessibility</p>
        </div>
        <div className="flex flex-col gap-2 mt-8 text-center lg:text-left">
          <h1 className="text-white text-xl">Related</h1>
          <p className="text-slate-200 text-xs">Find Buyer</p>
          <p className="text-slate-200 text-xs">Feedback</p>
        </div>
        <div className="flex gap-5 mt-8 lg:mt-[60px]">
          <div className="rounded-full border-slate-600 border  p-3 flex items-center justify-center">
            <FaLinkedin size={20} className="text-slate-200" />
          </div>
          <div className="rounded-full  border-slate-600 border p-3 flex items-center justify-center">
            <TiSocialTwitter size={20} className="text-slate-200" />
          </div>
          <div className="rounded-full border-slate-600 border p-3 flex items-center justify-center">
            <BsInstagram size={20} className="text-slate-200" />
          </div>
          <div className="rounded-full border-slate-600 border p-3 flex items-center justify-center">
            <FaFacebook size={20} className="text-slate-200" />
          </div>
        </div>
      </div>
      <div className="pt-2  max-sm:hidden border-b-2 border-slate-500 max-w-6xl mx-auto"></div>
    </footer>
  );
};

export default Footer;
