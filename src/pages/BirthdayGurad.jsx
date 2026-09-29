import React from 'react';
import { Navigate } from 'react-router-dom';

function BirthdayGuard({ children }) {
  // Set your exact validation unlock time (September 30, 2027 at 12:00 AM)
  const targetDate = new Date('September 30, 2027 00:00:00').getTime();
  const now = new Date().getTime();

  // If the target time has NOT arrived yet, redirect back to the countdown page
  if (now < targetDate) {
    return <Navigate to="/" replace />;
  }

  // Otherwise, allow access to the celebration component
  return children;
}

export default BirthdayGuard;
