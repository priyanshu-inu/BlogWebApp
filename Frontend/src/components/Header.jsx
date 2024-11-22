import { Button, Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import Logo from "../assets/favicon.png";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react"; // Import useState

const Header = () => {
  // State to manage the mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For dropdown menu

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to toggle dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <Navbar className="border-b-2 shadow-2xl">
        <div className="flex justify-between items-center w-full px-4 py-2">
          {/* Logo */}
          <Link to="/" className="self-center">
            <img src={Logo} alt="Voyagers Logo" className="h-6 sm:h-8 mr-2" />
          </Link>

          {/* Mobile Search Button */}
          <Button
            className="w-12 h-10 lg:hidden border-2 rounded-3xl"
            color="gray"
          >
            <AiOutlineSearch />
          </Button>

          {/* Desktop Search Form */}
          <form className="relative hidden lg:flex items-center max-w-xs w-full">
            <TextInput type="text" className="w-full" placeholder="Search..." />
            <AiOutlineSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </form>

          {/* User and Hamburger Menu */}
          <div className="flex items-center gap-2 md:order-2">
            {/* Navigation Links on Large Screen */}
            <div className="hidden lg:flex gap-7 text-lg font-medium items-center">
              <Link to="/" className="text-sm text-black hover:text-gray-500">
                Home
              </Link>
              <Link
                to="/about"
                className="text-sm text-black hover:text-gray-500"
              >
                About
              </Link>

              {/* Destination with margin-top and dropdown */}
              <div className="relative -mt-1">
                {" "}
                {/* Added mt-2 here for margin from top */}
                <button
                  onClick={toggleDropdown}
                  className="text-sm text-black hover:text-gray-500"
                >
                  Destination
                </button>
                {/* Dropdown menu */}
                <div
                  className={`absolute left-0 w-48 bg-white border border-gray-300 rounded-md shadow-lg ${
                    isDropdownOpen ? "block" : "hidden"
                  }`}
                >
                  <Link
                    to="/destination1"
                    className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                  >
                    Tips
                  </Link>
                  <Link
                    to="/destination2"
                    className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                  >
                    Blogs
                  </Link>
                </div>
              </div>

              <Link
                to="/writeforus"
                className="text-sm text-black hover:text-gray-500"
              >
                Write For Us
              </Link>
              <Link
                to="/contact-us"
                className="text-sm text-black hover:text-gray-500"
              >
                Contact Us
              </Link>
            </div>

            {/* Hamburger Icon for mobile menu */}
            <Button
              className="p-2 bg-transparent border-none text-xl lg:hidden"
              onClick={toggleMenu} // Call toggleMenu when clicked
              aria-label="Menu"
            >
              {/* Hamburger Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>

            {/* Sign In Button */}
            <Link to="/sign-in">
              <Button
                color="black"
                className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 ml-5 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-2 py-1 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-1"
              >
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </Navbar>

      {/* Mobile Navigation Links */}
      <div
        className={`lg:hidden flex flex-col gap-4 px-4 py-2 bg-white border-t-2 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <Link to="/" className="text-xl text-black hover:text-gray-500">
          Home
        </Link>
        <Link to="/about" className="text-xl text-black hover:text-gray-500">
          About
        </Link>
        <Link
          to="/destination"
          className="text-xl text-black hover:text-gray-500"
        >
          Destination
        </Link>
        <Link
          to="/writeforus"
          className="text-xl text-black hover:text-gray-500"
        >
          Write For Us
        </Link>
        <Link
          to="/contact-us"
          className="text-xl text-black hover:text-gray-500"
        >
          Contact Us
        </Link>
      </div>
    </>
  );
};

export default Header;
