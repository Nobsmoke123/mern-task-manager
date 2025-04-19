import Navbar from "../NavBar/Navbar";
import { IoRocketOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="px-2">
      <Navbar />
      <div className="mt-2 pb-8 flex flex-col items-center bg-gray-50">
        <div className="mt-20 md:mt-40 md:w-100 py-3 px-5 flex justify-center items-center bg-purple-primary-shade rounded-full space-x-2">
          <IoRocketOutline className="text-purple-primary-shade-2 text-lg md:text-2xl" />{" "}
          &nbsp;{" "}
          <span className="text-md md:text-xl text-purple-primary-shade-2 font-bold">
            Built for ambitious founders
          </span>
        </div>

        <p className="text-5xl md:text-7xl font-bold text-center mt-12 tracking-tighter">
          <span>Your Founder Journey</span>, <br />
          <span className="text-purple-primary">Documented</span>
        </p>

        <p className="text-xl md:text-3xl text-center mt-8 tracking-tighter">
          The ultimate note-taking tool designed specifically for founders.
          Capture <br /> ideas, track progress, and build your empire - all in
          one place.
        </p>

        <a
          href="#"
          className="w-50 text-center text-2xl bg-black text-white py-4 rounded-md font-bold mt-10"
        >
          Start Free Trial
        </a>
      </div>
    </header>
  );
};

export default Header;
