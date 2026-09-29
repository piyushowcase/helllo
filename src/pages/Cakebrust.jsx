import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

function CandlePage() {
  const [isLit, setIsLit] = useState(true);
  const [micAllowed, setMicAllowed] = useState(false);
  const [timeAlive, setTimeAlive] = useState({ years: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
  
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const streamRef = useRef(null);
  const audioRef = useRef(null);

  // 1. Friend's exact Date of Birth: September 30, 2005
  const birthDate = new Date('September 30, 2005 00:00:00').getTime();

  // 2. Continuous "Time Survived on Earth" Counter Engine
  useEffect(() => {
    const calculateTimeAlive = () => {
      const now = new Date().getTime();
      const totalDifferenceMs = now - birthDate;

      // Calculations for total time breakdowns
      const totalSeconds = Math.floor(totalDifferenceMs / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);
      const totalHours = Math.floor(totalMinutes / 60);
      const totalDays = Math.floor(totalHours / 24);
      
      // Calculate realistic rolling Year -> Day distribution
      const approximateYears = Math.floor(totalDays / 365.25); 
      const remainingDays = Math.floor(totalDays % 365.25);
      
      const displayHours = totalHours % 24;
      const displayMinutes = totalMinutes % 60;
      const displaySeconds = totalSeconds % 60;

      setTimeAlive({
        years: approximateYears,
        days: remainingDays,
        hours: displayHours,
        minutes: displayMinutes,
        seconds: displaySeconds
      });
    };

    calculateTimeAlive();
    const liveTicker = setInterval(calculateTimeAlive, 1000);
    return () => clearInterval(liveTicker);
  }, [birthDate]);

  // 3. Audio Stream Microphone Recognition Setup
  const startMicDetection = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      setMicAllowed(true);

      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      analyserRef.current = audioContextRef.current.createAnalyser();
      const source = audioContextRef.current.createMediaStreamSource(stream);
      source.connect(analyserRef.current);
      
      analyserRef.current.fftSize = 256;
      const bufferLength = analyserRef.current.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      const checkVolume = () => {
        if (!analyserRef.current || !isLit) return;
        analyserRef.current.getByteFrequencyData(dataArray);
        
        let values = 0;
        for (let i = 0; i < bufferLength; i++) {
          values += dataArray[i];
        }
        const averageVolume = values / bufferLength;

        if (averageVolume > 55) {
          triggerCelebration();
        } else {
          requestAnimationFrame(checkVolume);
        }
      };

      requestAnimationFrame(checkVolume);
    } catch (err) {
      console.warn("Microphone access blocked. Using click fallback.", err);
    }
  };

  // 4. Firecrackers Explosion & Audio Trigger
  const triggerCelebration = () => {
    setIsLit(false);

    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log("Audio playback interaction error:", e));
    }

    // Party Popper & Cracker Loops
    const duration = 7 * 1000;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);

      confetti({
        particleCount: 5,
        angle: 60,
        spread: 60,
        origin: { x: 0, y: 0.8 },
        colors: ['#ff007f', '#00f5ff', '#ffdf00', '#ab00ff']
      });
      
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 60,
        origin: { x: 1, y: 0.8 },
        colors: ['#ff007f', '#00f5ff', '#ffdf00', '#ab00ff']
      });
    }, 150);

    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-950 via-purple-950 to-slate-900 flex flex-col items-center justify-between p-6 relative overflow-hidden text-white font-sans">
      
      {/* 5. Traditional Happy Birthday Song Stream */}
      <audio 
        ref={audioRef} 
        src="https://google.com" // Reliable baseline audio or replace with any custom .mp3 file
        preload="auto"
      />

      {/* Top Banner Context Instruction */}
      <div className="text-center max-w-md mt-4 z-10">
        <motion.h2 
          animate={{ scale: isLit ? [1, 1.03, 1] : 1.1 }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-3xl sm:text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-pink-400 to-yellow-200 drop-shadow-md mb-2"
        >
          {isLit ? "🎂 Make a Wish!" : "🎉 HAPPY BIRTHDAY! 🎉"}
        </motion.h2>
        <p className="text-xs sm:text-sm text-gray-400 px-4">
          {isLit 
            ? "Turn on your mic and blow out the candle flame to trigger your birthday surprise!"
            : "Cheers to another brilliant year on this planet! 🥂✨"}
        </p>
      </div>

      {/* Interactive Birthday Cake and Flickering Flame Centerpiece */}
      <div className="relative flex flex-col items-center justify-center w-64 h-64 my-6">
        <AnimatePresence>
          {isLit && (
            <motion.div
              initial={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0, y: -30 }}
              animate={{ 
                scale: [1, 1.15, 0.95, 1.08, 1],
                y: [0, -3, 1, -1, 0],
                rotate: [-2, 3, -1, 2, 0]
              }}
              transition={{ duration: 0.4, repeat: Infinity }}
              onClick={triggerCelebration}
              className="absolute bottom-[130px] w-7 h-12 bg-gradient-to-t from-orange-500 via-amber-400 to-yellow-100 rounded-full blur-[0.5px] shadow-[0_0_25px_#f59e0b] cursor-pointer origin-bottom z-20"
            />
          )}
        </AnimatePresence>

        {isLit && <div className="absolute bottom-[122px] w-0.5 h-3 bg-gray-600 z-10" />}

        <div className="absolute bottom-[70px] w-5 h-14 bg-gradient-to-r from-pink-400 to-rose-400 rounded-t-sm shadow-md z-10 flex flex-col justify-around items-center">
          <div className="w-full h-0.5 bg-white/40 transform -rotate-12" />
          <div className="w-full h-0.5 bg-white/40 transform -rotate-12" />
        </div>

        <div className="absolute bottom-0 w-56 h-20 bg-amber-50 rounded-2xl shadow-2xl border-t-4 border-pink-300 flex flex-col justify-between overflow-hidden">
          <div className="w-full h-4 bg-pink-500 rounded-b-lg flex justify-between px-1">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="w-4 h-4 bg-pink-500 rounded-full -mt-0.5" />
            ))}
          </div>
          <div className="flex justify-around items-center pb-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-2.5 h-2.5 bg-rose-500 rounded-full shadow-inner" />
            ))}
          </div>
        </div>
      </div>

      {/* 6. Live Time Survived Grid Block Layout */}
      <div className="w-full max-w-xl bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 text-center shadow-xl mb-4 z-10">
        <h3 className="text-xs sm:text-sm font-bold tracking-widest text-pink-400 uppercase mb-4">
          Time Survived on Earth Since 2005
        </h3>
        
        <div className="grid grid-cols-5 gap-2 font-mono">
          {[
            { label: 'Years', value: timeAlive.years },
            { label: 'Days', value: timeAlive.days },
            { label: 'Hours', value: timeAlive.hours },
            { label: 'Mins', value: timeAlive.minutes },
            { label: 'Secs', value: timeAlive.seconds },
          ].map((block, idx) => (
            <div key={idx} className="bg-black/40 border border-white/5 p-2 sm:p-3 rounded-xl">
              <span className="block text-lg sm:text-3xl font-black text-white text-glow">
                {String(block.value).padStart(2, '0')}
              </span>
              <span className="text-[9px] sm:text-xs text-amber-300 uppercase tracking-wider block mt-1 font-sans font-semibold">
                {block.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Activation controller button check */}
      {isLit && !micAllowed && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={startMicDetection}
          className="mb-6 px-6 py-2.5 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-bold rounded-xl shadow-lg cursor-pointer text-xs sm:text-sm uppercase tracking-wider"
        >
          🎙️ Connect Blow Detector
        </motion.button>
      )}

      {isLit && micAllowed && (
        <p className="mb-6 text-[11px] text-gray-500 italic animate-pulse">
          🌬️ Blow into your phone/laptop microphone now!
        </p>
      )}
    </div>
  );
}

export default CandlePage;
