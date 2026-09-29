import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import cake from "../assets/cake.png"
import cut from "../assets/cut.jpg"
import birthdaySong from "../assets/bd.mp3";

function Birthday() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
const buttonTexts = [
    "Start the celebration 🎈",
    "make a sweet birthday wish first! 🎂",
    
   "Make sure your wish fullfill Open your birthday letter 💌 this is corct grammer",
  ];
  const handleClick = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      navigate("/letter"); // 4th click → go to letter page
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-pink-100 via-yellow-100 to-purple-200 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Floating Balloons Background */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -200, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
          className="absolute pointer-events-none select-none"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 40 + 20}px`,
          }}
        >
          🎈
        </motion.div>
      ))}

      {/* Title */}
      <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-pink-700 drop-shadow-lg">
        🎉 Happy Birthday Antuuuuu🥳 🎉
        
        <span className="h-16 w-16">  </span>
      </h1>

     
      <div className="mt-8 text-center">
        
      {step === 1 && (
  <div className="flex justify-center">
    {/* Big Cake Image */}
    <img
      src={cake}
      alt="Birthday Cake"
      className="w-72 sm:w-[28rem] drop-shadow-2xl"
    />
    {/* Play music when cake appears */}
    <audio autoPlay>
      <source src={birthdaySong} type="audio/mpeg" />
    </audio>
  </div>
)}

         {step === 2 && (
            <div className="flex justify-center">

          <img
              src={cut}
              alt="Birthday Cake"
              className="w-72 sm:w-[28rem] drop-shadow-2xl"
            />
             <audio autoPlay>
      <source src={birthdaySong} type="audio/mpeg" />
    </audio>
    </div>
        )}

      

       
      </div>
       <div className="absolute bottom-6 w-full flex justify-center">
        <button
          onClick={handleClick}
          className="px-6 py-3 bg-pink-600 text-white rounded-lg shadow-lg hover:bg-pink-700 transition"
        >
          {buttonTexts[step]}
        </button>
      </div>
    </div>
  );
}

export default Birthday;
