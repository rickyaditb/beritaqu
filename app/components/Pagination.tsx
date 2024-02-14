"use client"

import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Pagination() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = parseInt(searchParams.get('page') || '1');

  const changePage = (increment: number) => {
    let url = `/?page=${page + increment}`;
    if (searchParams.get('search')) {
      url += `&search=${searchParams.get('search')}`;
    }
    if (searchParams.get('category')) {
      url += `&category=${searchParams.get('category')}`;
    }
    if (searchParams.get('sentiment')) {
      url += `&sentiment=${searchParams.get('sentiment')}`;
    }
    router.push(url);
  };
  
  return (
    <nav className="mt-6">
      <div className="flex gap-3 justify-center text-primary">
        <button className={`effect text-2xl p-3 ${page === 1 && "opacity-40"}`} onClick={() => changePage(-1)} disabled={page === 1}>
          <FaChevronLeft />
        </button>
        <div className="effect text-2xl py-3 px-5 font-bold">
          {page}
        </div>
        <button className="effect text-2xl p-3" onClick={() => changePage(1)}>
          <FaChevronRight />
        </button>
      </div>
    </nav>
  )
}
