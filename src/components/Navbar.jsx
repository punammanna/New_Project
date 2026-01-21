import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Menu as MenuIcon, Search, X as XIcon } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-between px-6 md:px-16 lg:px-36 py-5 w-full bg-transparent">
      <Link to="/" className="max-md:flex-1">
        <img src={logo} alt="Logo" className="w-36 h-auto" />
      </Link>

      <div
        className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-40 flex flex-col md:flex-row items-center max-md:justify-center gap-8 md:px-8 py-3 max-md:h-screen md:rounded-full backdrop-blur bg-black/70 md:bg-white/10 md:border border-gray-300/20 overflow-hidden transition-all duration-300 ${
          isOpen
            ? "max-md:w-full max-md:opacity-100"
            : "max-md:w-0 max-md:opacity-0"
        }`} 
      >
        <XIcon
          onClick={() => setIsOpen(false)}
          className="md:hidden absolute top-6 right-6 w-6 cursor-pointer"
        />

        {[
          { name: "Home", to: "/" },
          { name: "Movies", to: "/movies" },
          { name: "Theaters", to: "/" },
          { name: "Releases", to: "/" },
          { name: "Favorites", to: "/favorites" },
        ].map((link, i) => (
          <Link
            key={i}
            to={link.to}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setIsOpen(false);
            }}
            className="transition-colors hover:text-primary md:border-b-2 md:border-transparent md:hover:border-primary"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-8">
        <Search className="max-md:hidden w-6 h-6 cursor-pointer" />
        <button className="px-4 py-1 sm:px-7 sm:py-2 bg-[#F84565] hover:bg-[#D63854] text-white rounded-full font-medium transition">
          Login
        </button>
      </div>

      <MenuIcon
        className="max-md:ml-4 md:hidden w-8 h-8 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />
    </div>
  );
};

export default Navbar;
