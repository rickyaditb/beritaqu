"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaMedkit, FaMeh, FaMoneyBill, FaRocket, FaSadTear, FaSmileBeam, FaVolleyballBall } from "react-icons/fa";
import Source from "./Source";

export default function Sidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || '')
  const [activeSentiment, setActiveSentiment] = useState(searchParams.get('sentiment') || '')

  const handleFilter = (filterType: string, keyword: string) => {
    if (filterType === 'category') {
      if (activeCategory === keyword) {
        setActiveCategory('');
        keyword = '';
      } else {
        setActiveCategory(keyword);
      }
    } else if (filterType === 'sentiment') {
      if (activeSentiment === keyword) {
        setActiveSentiment('');
        keyword = '';
      } else {
        setActiveSentiment(keyword);
      }
    }

    const currentQueryParams = new URLSearchParams(window.location.search);
    currentQueryParams.set(filterType, keyword);
    if (keyword === '') {
      currentQueryParams.delete(filterType);
    } else {
      currentQueryParams.set(filterType, keyword);
    }
    router.push(`/?${currentQueryParams.toString()}`);
  }

  return (
    <aside className="hidden lg:block">
      <div className="flex flex-col gap-3">
        <Source />
        <div className="effect text-center p-6 font-semibold">
          <p className="text-2xl text-secondary border-b-2 pb-3 mb-6">Kategori</p>
          <div className="gap-4 flex flex-col">
            <button className={`flex items-center gap-2 justify-center w-full ${activeCategory === 'Olahraga' ? 'text-primary' : 'text-secondary'}`} onClick={() => handleFilter('category', 'Olahraga')}>
              <FaVolleyballBall className="text-3xl shrink-0" />
              <span className="text-2xl">Olahraga</span>
            </button>
            <button className={`flex items-center gap-2 justify-center w-full ${activeCategory === 'Ekonomi' ? 'text-primary' : 'text-secondary'}`} onClick={() => handleFilter('category', 'Ekonomi')}>
              <FaMoneyBill className="text-3xl shrink-0" />
              <span className="text-2xl">Ekonomi</span>
            </button>
            <button className={`flex items-center gap-2 justify-center w-full ${activeCategory === 'Kesehatan' ? 'text-primary' : 'text-secondary'}`} onClick={() => handleFilter('category', 'Kesehatan')}>
              <FaMedkit className="text-3xl shrink-0" />
              <span className="text-2xl">Kesehatan</span>
            </button>
            <button className={`flex items-center gap-2 justify-center w-full ${activeCategory === 'Teknologi' ? 'text-primary' : 'text-secondary'}`} onClick={() => handleFilter('category', 'Teknologi')}>
              <FaRocket className="text-3xl shrink-0" />
              <span className="text-2xl">Teknologi</span>
            </button>
          </div>
        </div>
        <div className="effect text-center p-6 font-semibold">
          <p className="text-2xl text-secondary border-b-2 pb-3 mb-6">Sentimen</p>
          <div className="gap-4 flex flex-col">
            <button className={`flex items-center gap-2 justify-center w-full ${activeSentiment === "Positif" ? "text-green-500" : "text-secondary"}`} onClick={() => handleFilter('sentiment', 'Positif')}>
              <FaSmileBeam className="text-3xl" />
              <span className="text-2xl">Positif</span>
            </button>
            <button className={`flex items-center gap-2 justify-center w-full ${activeSentiment === "Netral" ? "text-green-500" : "text-secondary"}`} onClick={() => handleFilter('sentiment', 'Netral')}>
              <FaMeh className="text-3xl" />
              <span className="text-2xl">Netral</span>
            </button>
            <button className={`flex items-center gap-2 justify-center w-full ${activeSentiment === "Negatif" ? "text-green-500" : "text-secondary"}`} onClick={() => handleFilter('sentiment', 'Negatif')}>
              <FaSadTear className="text-3xl shrink-0" />
              <span className="text-2xl">Negatif</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}
