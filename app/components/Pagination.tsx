"use client"

import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Pagination() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = parseInt(searchParams.get('page') || '1');

  const prevPage = () => {
    if (searchParams.get('search')) {
      router.push(`/?page=${page - 1}&search=${searchParams.get('search')}`);
    } else {
      router.push(`/?page=${page - 1}`);
    }
  };

  const nextPage = () => {
    if (searchParams.get('search')) {
      router.push(`/?page=${page + 1}&search=${searchParams.get('search')}`);
    } else {
      router.push(`/?page=${page + 1}`);
    }
  };
  return (
    <nav className="mt-6">
      <div className="flex gap-3 justify-center text-primary">
        <button className={`effect text-2xl p-3 ${page === 1 && "opacity-40"}`} onClick={prevPage} disabled={page === 1}>
          <FaChevronLeft />
        </button>
        <div className="effect text-2xl py-3 px-5 font-bold">
          {page}
        </div>
        <button className="effect text-2xl p-3" onClick={nextPage}>
          <FaChevronRight />
        </button>
      </div>
    </nav>
  )
}
