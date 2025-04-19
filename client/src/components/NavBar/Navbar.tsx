import { useState } from "react";
import { toggleHamburgerMenu } from "./NavbarProps";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <>
      <nav className="w-full b-white shadow-md py-4 px-6 flex justify-between items-center">
        <a href="/" className="text-decoration-none">
          <span className="text-3xl font-extrabold text-black-700">
            FoundersNote
          </span>
        </a>

        {/* Desktop menu */}
        <div className={`hidden md:flex items-center space-x-8`}>
          <a
            href="/notes"
            className="text-black text-[21px] hover:text-gray-700"
          >
            Notes
          </a>
          <a
            href="/profile"
            className="text-black text-[21px] hover:text-gray-700"
          >
            Profile
          </a>
          <a
            href="/logout"
            className="text-black text-[21px] hover:text-gray-700"
          >
            Logout
          </a>
          <a
            href="/logout"
            className="text-black text-[21px] hover:text-gray-700"
          >
            Login
          </a>
          <a
            href="/get-started"
            className="bg-black text-white font-bold text-[21px] px-4 py-2 rounded-md shadow-md hover:bg-gray-900 transition duration-300"
          >
            Getting Started
          </a>
        </div>

        {/* Mobile Menu hidden by default */}
        <div className="md:hidden border-2 border-black-200 flex justify-content-center items-center">
          <button
            onClick={() => toggleHamburgerMenu(setisOpen, isOpen)()}
            className="md:hidden text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`${
          isOpen ? "" : "hidden"
        } md:hidden mt-0 space-y-4 bg-black absolute top-0 right-0 shadow-lg p-4 z-50`}
      >
        <div className="flex justify-end">
          <div
            onClick={() => toggleHamburgerMenu(setisOpen, isOpen)()}
            className="w-8 h-8 flex justify-center items-center rounded-full p-2 bg-white text-xl text-black font-extrabold"
          >
            x
          </div>
        </div>

        <a href="/login" className="block text-white">
          Login
        </a>
        <a href="/notes" className="block text-white">
          Notes
        </a>
        <a href="/profile" className="block text-white">
          Profile
        </a>
        <a
          href="/get-started"
          className="block bg-white text-black font-bold px-4 py-2 rounded shadow-lg"
        >
          Getting Started
        </a>
      </div>
    </>
  );
};

export default Navbar;
