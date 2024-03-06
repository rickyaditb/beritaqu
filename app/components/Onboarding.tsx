"use client";

import { useEffect, useState } from "react";

export default function Onboarding() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const firstTime = localStorage.getItem('firstTime');
    if(firstTime === null || firstTime === 'true') {
      document.body.style.overflow = 'hidden';
    }
    setIsVisible(firstTime === null || firstTime === 'true');
  }, []);

  if (!isVisible) {
    return null;
  }

  const handleClick = () => {
    setIsVisible(false);
    localStorage.setItem('firstTime', 'false');
    document.body.style.overflow = 'scroll';
  };
  return (
    <div className="bg-black/60 fixed inset-0 z-10 flex items-center justify-center md:px-10">
      <div className="bg-white md:p-10 flex flex-col justify-center gap-5 md:grid grid-cols-2 max-w-screen-lg w-full h-screen md:rounded-xl md:h-fit items-center">
        <img src="/onboarding.svg" alt="" className="max-w-lg w-full px-10 md:px-5 mx-auto" />
        <div className="flex flex-col justify-center items-center gap-6">
          <p className="text-primary text-6xl font-custom text-center">Beritaku</p>
          <p className="text-secondary text-center px-5 lg:px-16 text-lg">Beritaku adalah aplikasi agregator berita yang ditenagai oleh kecerdasan buatan untuk merangkum kontennya.</p>
          <button className="bg-primary text-white font-bold text-2xl px-4 py-3 rounded w-fit" onClick={handleClick}>Mulai Membaca</button>
        </div>
      </div>
    </div>
  )
}
