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
    console.log(searchParams);
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
            <button className={`flex items-center gap-2 justify-center w-full ${activeCategory === 'olahraga' ? 'text-primary' : 'text-secondary'}`} onClick={() => handleFilter('category', 'olahraga')}>
              <FaVolleyballBall className="text-3xl shrink-0" />
              <span className="text-2xl">Olahraga</span>
            </button>
            <button className={`flex items-center gap-2 justify-center w-full ${activeCategory === 'ekonomi' ? 'text-primary' : 'text-secondary'}`} onClick={() => handleFilter('category', 'ekonomi')}>
              <FaMoneyBill className="text-3xl shrink-0" />
              <span className="text-2xl">Ekonomi</span>
            </button>
            <button className={`flex items-center gap-2 justify-center w-full ${activeCategory === 'kesehatan' ? 'text-primary' : 'text-secondary'}`} onClick={() => handleFilter('category', 'kesehatan')}>
              <FaMedkit className="text-3xl shrink-0" />
              <span className="text-2xl">Kesehatan</span>
            </button>
            <button className={`flex items-center gap-2 justify-center w-full ${activeCategory === 'teknologi' ? 'text-primary' : 'text-secondary'}`} onClick={() => handleFilter('category', 'teknologi')}>
              <FaRocket className="text-3xl shrink-0" />
              <span className="text-2xl">Teknologi</span>
            </button>
          </div>
        </div>
        <div className="effect text-center p-6 font-semibold">
          <p className="text-2xl text-secondary border-b-2 pb-3 mb-6">Sentimen</p>
          <div className="gap-4 flex flex-col">
            <button className={`flex items-center gap-2 justify-center w-full ${activeSentiment === "positif" ? "text-green-500" : "text-secondary"}`} onClick={() => handleFilter('sentiment', 'positif')}>
              <FaSmileBeam className="text-3xl" />
              <span className="text-2xl">Positif</span>
            </button>
            <button className={`flex items-center gap-2 justify-center w-full ${activeSentiment === "netral" ? "text-green-500" : "text-secondary"}`} onClick={() => handleFilter('sentiment', 'netral')}>
              <FaMeh className="text-3xl" />
              <span className="text-2xl">Netral</span>
            </button>
            <button className={`flex items-center gap-2 justify-center w-full ${activeSentiment === "negatif" ? "text-green-500" : "text-secondary"}`} onClick={() => handleFilter('sentiment', 'negatif')}>
              <FaSadTear className="text-3xl shrink-0" />
              <span className="text-2xl">Negatif</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}
