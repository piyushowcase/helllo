
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CountDown from './pages/CountDown';
import HappyBdy from './pages/HappyBdy';
import BirthdayGuard from './pages/BirthdayGurad';
import Letter from './pages/Letter';
import Cakebrust from './pages/Cakebrust';
import LifeTimer from './pages/LifeTimer';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CountDown />} />
        
        <Route path="/birthday" element={
              <HappyBdy />
         } />
             <Route path="/beautiful" element={
              <LifeTimer />
            } />
             <Route path="/letter" element={
              <Letter/>
            } />
                    <Route path="/cake" element={<Cakebrust />} />

      </Routes>
    </BrowserRouter>
  );
}
export default App;

    