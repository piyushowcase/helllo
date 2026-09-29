import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Letter() {
  const navigate=useNavigate()
  return (
    <div className="min-h-screen w-full bg-[#fff5f5] flex items-center justify-center p-4 sm:p-8 relative overflow-hidden bg-gradient-to-b from-[#ffe4e6] to-[#fecdd3]">
      
      {/* Decorative Floating Hearts Background */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.4,
          }}
          className="absolute text-pink-300 pointer-events-none select-none"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 24 + 12}px`,
          }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Main Letter Container */}
      <motion.div
        initial={{ opacity: 0, y: 50, rotate: -1 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full max-w-2xl bg-[#fffdf9] rounded-2xl p-6 sm:p-12 shadow-xl border border-pink-100 relative before:absolute before:inset-0 before:rounded-2xl before:border-4 before:border-pink-200/20 before:pointer-events-none"
      >
        {/* Cute Top Ribbon Header Decor */}
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-400 to-rose-400 text-white px-6 py-1 text-xs font-bold rounded-full tracking-widest uppercase shadow-md">
          💌 Open With Love
        </div>

        {/* Letter Header */}
        <div className="border-b border-dashed border-pink-200 pb-4 mb-6">
          <h2 className="font-serif text-2xl sm:text-3xl text-rose-600 font-bold tracking-tight">
            Dearest madam ji, ✨
          </h2>
          <p className="text-right text-xs sm:text-sm font-mono text-gray-400 mt-1">
            {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        {/* Letter Main Content Body */}
        <div className="space-y-6 text-gray-700 font-serif leading-relaxed text-sm sm:text-base tracking-wide">
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Happy, happy birthday, 🎉. I know you are officially a 21-year-old budiya now 👵, but look on the bright side—at least you found an incredible, chaotic bandu friend like me to keep you young during your old-age budhapa years! Happy birthday, my favorite chmkadar!
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
         Honestly, I need to thank the universe for matching my level of crazy with someone as incredibly chaotic and amazing as you! I always wanted a best friend, but I ended up finding a literal partner-in-crime who exceeded every single expectation. Our time together might fly by too fast, but it is packed with enough wild moments, absolute madness, and dramatic little fights to last a lifetime. I wouldn't trade our chaotic energy for anything in the world. You completely flipped my perspective on life and taught me how to live it out loud. Thanks for being the ultimate sanity-saver and the best kind of crazy!" 🤪💥✨
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.9, duration: 0.6 }}
          >
            I hope this upcoming year brings you endless laughter, massive success, and everything beautiful your heart desires. You deserve the entire universe and then some. Let's make this day unforgettable! 🥂✨
          </motion.p>

        </div>

        {/* Letter Sign-off Footer */}
        <div className="mt-12 pt-6 border-t border-dashed border-pink-200 flex flex-col items-end">
          <p className="font-serif italic text-gray-500 text-sm">Forever & always,</p>
          <p className="font-serif text-xl sm:text-2xl font-bold text-rose-500 mt-1 tracking-wide">
            Your gay freind ❤️
          </p>
        </div>
    <div className="mt-8 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/beautiful")}
            className="px-6 py-3 bg-pink-600 text-white rounded-lg shadow-lg hover:bg-pink-700 transition"
          >
          Good night!
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default Letter;

