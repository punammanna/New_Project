import { useNavigate } from "react-router-dom";
import React from "react";
import BlurCircle from "./BlurCircle"; 

const FeatureSection = () => {
  const navigate = useNavigate();

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-24 overflow-hidden">
      {/* Header Row */}
      <div className="relative flex items-center justify-between pt-20 pb-10">
        <BlurCircle top="0" right="-80px" />

        <p className="text-lg font-semibold text-white">Now showing</p>

        <button
          onClick={() => navigate("/movies")}
          className="group flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
        >
          View All →
        </button>
      </div>

      {/* Movie cards grid (placeholder for now) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-gray-800 rounded-lg h-48 flex items-center justify-center text-gray-400">
          Movie 1
        </div>
        <div className="bg-gray-800 rounded-lg h-48 flex items-center justify-center text-gray-400">
          Movie 2
        </div>
        <div className="bg-gray-800 rounded-lg h-48 flex items-center justify-center text-gray-400">
          Movie 3
        </div>
        <div className="bg-gray-800 rounded-lg h-48 flex items-center justify-center text-gray-400">
          Movie 4
        </div>
        <div className="flex justify-center mt-20">
        <button onClick={() => { navigate("/movies"); scrollTo(0, 0); }}
        className="px-4 py-1 sm:px-7 sm:py-2 bg-[#F84565] hover:bg-[#D63854] text-white rounded-full font-medium transition">
          Show more
        </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
