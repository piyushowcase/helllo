import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function CountDown() {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState('');
  
  // Set target to August 30 at 12:00 AM
  const targetDate = new Date('2026-09-30T00:00:00').getTime();

  useEffect(() => {
    const checkTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        // 🚀 Time is up! Programmatically navigate to the birthday page
        navigate('/birthday'); 
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    };

    checkTime();
    const timer = setInterval(checkTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate, navigate]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-pink-500 via-pink-400 to-pink-500 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/30 text-center max-w-md w-full text-white"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 tracking-wide text-white drop-shadow-sm">
          🔒 Locked Until Sep 30
        </h2>
        <p className="text-sm sm:text-base opacity-90 mb-6">
          Something super special is coming up! Hang tight until midnight.
        </p>
        <div className="text-xl sm:text-2xl font-mono bg-amber-500/80 text-white py-3 px-6 rounded-xl inline-block tracking-wider font-bold shadow-md">
          {timeLeft || 'Calculating...'}
        </div>
              <button
        onClick={() => navigate("/beautiful")}
        className="px-6 py-3 bg-pink-600 text-white rounded-lg shadow-lg hover:bg-pink-700 transition animate-pulse"
      >
        🎉 Part de dena🎉
      </button>
      </motion.div>
    </div>
  );
}

export default CountDown;

// import React from "react";
// import { motion } from "framer-motion";

// import { useEffect,useState } from "react";


// const CountDown= () => {
// // --- 1. COUNTDOWN & LOCK LOGIC ---
  
//   // Set the target date: August 30, 2026 at 00:00:00 (12:00 AM)
//   // Note: Adjust the year if needed (e.g., 2026, 2027)
//   const targetDate = new Date('August 30, 2026 00:00:00').getTime();

//   // State to check if the birthday has arrived
//   const [isBirthday, setIsBirthday] = useState(false);
//   // State to store the remaining time text
//   const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//     useEffect(() => {
//     const checkTime = () => {
//       const now = new Date().getTime();
//       const difference = targetDate - now;

//       if (difference <= 0) {
//         setIsBirthday(true);
        
//       } else {
//         // Calculate remaining time units
//         const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
//         setTimeLeft({ days, hours, minutes, seconds });
//       }
//     };

//     // Run immediately on load
//     checkTime();const timer = setInterval(checkTime, 1000);

//     return () => clearInterval(timer);
//   }, [targetDate];
// //  function CountdownGate({ targetDate, onUnlock }) {

// //   const [timeLeft, setTimeLeft] = useState('');

// //   useEffect(() => {
// //     const checkTime = () => {
// //       const now = new Date();
// //       const difference = targetDate - now;

// //       if (difference <= 0) {
// //         onUnlock(); // Call the unlock function when time hits 0
// //       } else {
// //         const days = Math.floor(difference / (1000 * 60 * 60 * 24));
// //         const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
// //         const minutes = Math.floor((difference / 1000 / 60) % 60);
// //         const seconds = Math.floor((difference / 1000) % 60);

// //         setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
// //       }
// //     };

// //     checkTime();
// //     const timer = setInterval(checkTime, 1000);
// //     return () => clearInterval(timer);
// //   }, [targetDate, onUnlock]);

      
//   return (
//     <div className="min-h-screen w-full bg-gradient-to-r from-pink-500 via-pink-400 to-pink-500 flex items-center justify-center p-4">
//       <motion.div 
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//         className="bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/30 text-center max-w-md w-full text-white"
//       >
//         <h2 className="text-2xl sm:text-3xl font-bold mb-2 tracking-wide text-white drop-shadow-sm">
//           🔒 Locked Until Aug 30
//         </h2>
//         <p className="text-sm sm:text-base opacity-90 mb-6">
//           Something super special is coming up! Hang tight until midnight.
//         </p>
//         <div className="text-xl sm:text-2xl font-mono bg-amber-500/80 text-white py-3 px-6 rounded-xl inline-block tracking-wider font-bold shadow-md">
//           {timeLeft || 'Calculating...'}
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// export default CountDown;