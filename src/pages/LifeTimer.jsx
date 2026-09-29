import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import pretty from "../assets/hi.jpeg"
import { useNavigate } from "react-router-dom";

function LifeTimer() {
  const [timeLived, setTimeLived] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
const navigate=useNavigate()
  // Your friend's birthdate: 30 Aug 2005
  const birthDate = new Date("2005-08-30T00:00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = now - birthDate;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLived({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col sm:flex-row items-center justify-center bg-gradient-to-r from-pink-200 via-yellow-100 to-purple-200 relative overflow-hidden p-6">
      
      {/* Left side: Birthday girl image */}
      <motion.img
        src={pretty}
        alt="Birthday Girl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-64 sm:w-96 drop-shadow-2xl mb-6 sm:mb-0 sm:mr-12 rounded-2xl border-4 border-white/40"
      />

      {/* Right side: Timer */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-10 text-center max-w-md border border-pink-100"
      >
        {/* Prettier Heading */}
        <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4 tracking-wide">
          ✨ Celebrating You ✨
        </h1>
        
        {/* Prettier Sub-heading */}
        <p className="text-base sm:text-lg font-medium text-gray-500 tracking-wider uppercase">
          Moments of Pure Magic:
        </p>
        
        {/* Cute & Clean Styled Timer Display */}
        <div className="mt-4 text-2xl sm:text-3xl font-bold text-purple-700 tracking-wide bg-purple-50/50 rounded-xl py-4 px-2 border border-purple-100/50">
          {timeLived.days} beautiful days <br />
          <span className="text-xl sm:text-2xl font-semibold text-pink-500">
            {timeLived.hours}h : {timeLived.minutes}m : {timeLived.seconds}s
          </span>
        </div>

        {/* Ultra-Pretty Cinematic version of your core lines */}
        <p className="mt-6 text-gray-700 italic font-serif text-lg sm:text-xl leading-relaxed px-2">
          "The entire universe smiles much brighter, simply because your soul choice to shine within it..." ✨🌍
        </p>
        
        {/* Prettier Ending Wish */}
        <p className="mt-4 text-pink-600 font-bold text-sm sm:text-base tracking-wide bg-pink-50/50 py-2 rounded-lg border border-pink-100/30">
          May your life stay filled with endless warmth, sweet smiles, and infinite love! 💞
        </p>

        {/* Animated Button */}
        <motion.button onClick={()=>navigate("/birthday")}
          whileTap={{ scale: 0.9, rotate: -3 }}
          whileHover={{ scale: 1.05 }}
          className="mt-6 px-7 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-pink-200 transition cursor-pointer tracking-wider text-sm sm:text-base"
        >
          Begin the Celebration 🎉
        </motion.button>
      </motion.div>
    </div>
  );
}

export default LifeTimer;
