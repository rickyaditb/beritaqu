"use client"

import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Pagination() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = parseInt(searchParams.get('page') || '1');

  const prevPage = () => {
    let url = `/?page=${page - 1}`;
    if (searchParams.get('search')) {
      url += `&search=${searchParams.get('search')}`;
    }
    if (searchParams.get('category')) {
      url += `&category=${searchParams.get('category')}`;
    }
    router.push(url);
  };

  const nextPage = () => {
    let url = `/?page=${page + 1}`;
    if (searchParams.get('search')) {
      url += `&search=${searchParams.get('search')}`;
    }
    if (searchParams.get('category')) {
      url += `&category=${searchParams.get('category')}`;
    }
    router.push(url);
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
