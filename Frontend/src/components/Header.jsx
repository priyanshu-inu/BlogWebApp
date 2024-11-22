import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation hook
import Logo from "../assets/favicon.png";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

const Header = () => {
  // State to manage the mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to toggle dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to handle destination dropdown toggle for mobile
  const toggleMobileDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Get the current route using useLocation
  const location = useLocation();

  // Function to check if the link is active
  const isActive = (path) => {
    return location.pathname === path ? "text-olive-600" : "text-black"; // Set the active link to olive
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
              <Link
                to="/"
                className={`text-sm ${isActive("/")} hover:text-gray-500`} // Apply active class
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-sm ${isActive("/about")} hover:text-gray-500`} // Apply active class
              >
                About
              </Link>

              {/* Destination with margin-top and dropdown */}
              <div className="relative -mt-1">
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
                    to="/tips"
                    className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                  >
                    Tips
                  </Link>
                  <Link
                    to="/blog"
                    className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                  >
                    Blogs
                  </Link>
                </div>
              </div>

              <Link
                to="/writeforus"
                className={`text-sm ${isActive(
                  "/writeforus"
                )} hover:text-gray-500`} // Apply active class
              >
                Write For Us
              </Link>
              <Link
                to="/contact-us"
                className={`text-sm ${isActive(
                  "/contact-us"
                )} hover:text-gray-500`} // Apply active class
              >
                Contact Us
              </Link>
            </div>

            {/* Sign In Button */}
            <Link to="/sign-in">
              <Button
                color="black"
                className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 ml-5 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-2 py-1 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-1"
              >
                Sign In
              </Button>
            </Link>

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
          </div>
        </div>
      </Navbar>

      {/* Mobile Navigation Links */}
      <div
        className={`lg:hidden flex flex-col gap-4 px-4 py-2 bg-white border-t-2 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <Link
          to="/"
          className={`text-xl ${isActive("/")} hover:text-gray-500`} // Apply active class
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`text-xl ${isActive("/about")} hover:text-gray-500`} // Apply active class
        >
          About
        </Link>

        {/* Mobile Destination with Dropdown */}
        <div className="relative">
          <button
            onClick={toggleMobileDropdown}
            className="text-xl text-black hover:text-gray-500"
          >
            Destination
          </button>
          {/* Mobile Dropdown */}
          <div
            className={`${
              isDropdownOpen ? "block" : "hidden"
            } absolute left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg`}
          >
            <Link
              to="/tips"
              className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
            >
              Tips
            </Link>
            <Link
              to="/blog"
              className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
            >
              Blogs
            </Link>
          </div>
        </div>

        <Link
          to="/writeforus"
          className={`text-xl ${isActive("/writeforus")} hover:text-gray-500`} // Apply active class
        >
          Write For Us
        </Link>
        <Link
          to="/contact-us"
          className={`text-xl ${isActive("/contact-us")} hover:text-gray-500`} // Apply active class
        >
          Contact Us
        </Link>
      </div>
    </>
  );
};

export default Header;
