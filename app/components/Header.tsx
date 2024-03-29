"use client";

import { useDebouncedCallback } from 'use-debounce';
import { FaBookmark, FaChevronLeft, FaCog, FaSearch } from "react-icons/fa";
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import MobileFilter from './MobileFilter';
import { Suspense, useState } from 'react';
import Settings from './Settings';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const [showSettings, setShowSettings] = useState(false);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  const handleSearch = useDebouncedCallback((e: any) => {
    if (e.target.value === "") {
      router.push(`/`);
    } else {
      router.push(`/?search=${e.target.value}`);
    }
  }, 1000);

  return (
    <header className="grid grid-cols-12 gap-3 mb-5">
      <div className={`p-6 effect col-span-6 lg:col-span-5 order-1 text-primary text-4xl font-custom lg:block ${pathname === "/" || pathname === "/bookmark" ? "block" : "hidden"}`}>
        Beritaku
      </div>
      {pathname.startsWith('/article/') &&
        <div className="p-6 effect col-span-6 lg:col-span-5 order-1 text-secondary text-2xl font-bold flex items-center justify-center gap-3 lg:hidden" onClick={() => router.back()}>
          <FaChevronLeft />
          Kembali
        </div>
      }
      <div className={`pl-6 effect col-span-12 lg:col-span-5 order-4 lg:order-2 items-center lg:flex ${pathname === "/" || pathname === "/bookmark" ? "flex" : "hidden"}`}>
        <FaSearch className="text-4xl text-secondary" />
        <input
          onChange={(e) => handleSearch(e)}
          type="text" name="" id="" placeholder="Cari Berita Disini" className="text-2xl w-full py-6 ml-5 border-none focus:outline-none rounded-lg" />
        <Suspense>
          <MobileFilter />
        </Suspense>
      </div>
      <Link href="/bookmark" className="p-6 effect flex items-center justify-center col-span-3 lg:col-span-1 order-2 lg:order-3">
        <FaBookmark className="text-secondary text-4xl shrink-0" />
      </Link>
      <button
        onClick={() => setShowSettings(true)}
        className="p-6 effect flex items-center justify-center col-span-3 lg:col-span-1 order-3 lg:order-4">
        <FaCog className="text-secondary text-4xl shrink-0" />
      </button>
      {showSettings && <Settings toggleSettings={toggleSettings} />}
    </header>
  )
}
