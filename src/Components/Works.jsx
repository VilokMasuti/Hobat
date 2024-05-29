import { BsPersonAdd } from "react-icons/bs";
import { BiSolidFoodMenu } from "react-icons/bi";
import { RiMenuSearchFill } from "react-icons/ri";
import { PiNotePencilFill } from "react-icons/pi";
import { RiContactsBook2Fill } from "react-icons/ri";
import { PiHandshakeThin } from "react-icons/pi";

const Works = () => {
  const Work = [
    {
      id: 1,
      icon: <BsPersonAdd />,
      title: "Select Your Role and Sign Up",
      color: "bg-[#E8FBFF]",
    },
    {
      id: 2,
      icon: <BiSolidFoodMenu />,
      title: "Buyers Post Your Requirements",
    },
    {
      id: 3,
      icon: <RiMenuSearchFill />,
      title: "Review, Select, and Contact the Best Suppliers",
      color: "bg-[#E8FBFF]",
    },
    {
      id: 4,
      icon: <PiNotePencilFill />,
      title: "Suppliers Complete your profile and get notified for opportunities",
    },
    {
      id: 5,
      icon: <RiContactsBook2Fill />,
      title: "Contact to Buyers and Share your Quote for the service",
      color: "bg-[#E8FBFF]",
    },
    {
      id: 6,
      icon: <PiHandshakeThin />,
      title: (
        <>
          Both the Parties can Connect and Make <span className="  bg-blue-200">Business</span> Leave a Feedback
        </>
      ),
    },
  ];

  return (
    <section className="mt-16 px-4">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl md:text-4xl text-black font-bold text-center">How it works?</h1>
        <p className="mt-5 font-medium text-lg md:text-xl text-black text-center max-w-4xl">
          Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
        {Work.map((item) => (
          <div key={item.id} className={`${item.color} p-8 w-full max-w-xs mx-auto rounded-lg flex flex-col items-center`}>
            <div className="text-4xl text-black mb-4">{item.icon}</div>
            <p className="text-lg font-medium text-center text-black">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
