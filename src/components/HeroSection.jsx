import React from "react";
import { ArrowRight, CalendarIcon, ClockIcon } from "lucide-react";
import HeroImage from "../assets/heroimage/kantara.png";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div
      className="relative flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${HeroImage})`,
      }}
    >
      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content on top of overlay */}
      <div className="relative z-10">
        <img src="/logo.png" alt="Kantara Logo" className="w-32" />

        <h1 className="text-5xl md:text-[70px] md:leading-[80px] font-semibold max-w-[110ch] text-white">
          Kantara premiered on <br /> 30 Sep 2022
        </h1>

        <div className="flex items-center gap-4 text-gray-300 mt-2">
          <span>Action | Thriller | Mythology</span>

          <div className="flex items-center gap-1">
            <CalendarIcon className="w-4 h-4" /> 2025
          </div>

          <div className="flex items-center gap-1">
            <ClockIcon className="w-4 h-4" /> 2h 8m
          </div>
        </div>
        <p className="max-w -md text-gray-300  ">
          “Kantara” tells the story of a village where the people’s faith in a
          divine spirit (Daiva) protects their land. Conflict arises when greed,
          power, and modern law challenge tradition, leading to a fierce battle
          between man and nature.
        </p>
        <button
          onClick={() => navigate("/movies")}
          className="flex items-center gap-2 px-6 py-3 text-sm font-medium
             bg-[#F84565] hover:bg-[#D63854] text-white
             transition rounded-full shadow-md cursor-pointer"
        >
          Explore Movies
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
