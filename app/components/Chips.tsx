'use client'

import { useSearchParams } from "next/navigation";

export default function Chips() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const sentiment = searchParams.get('sentiment');
  const source = searchParams.get('source') || '';
  const sourceName = ['Antara', 'CNN', 'CNBC', 'Republika', 'Okezone', 'Kumparan', 'Vice', 'Suara', 'VOA'];
  const mappedSource = source ? source.split(' ').map(index => sourceName[Number(index)]) : [];
  return (
    <div className={`mb-5 ${category || sentiment || source ? 'flex' : 'hidden'} lg:hidden gap-2 items-center`}>
      {category &&
        <button className="bg-primary text-white px-3 py-2 rounded font-bold flex justify-center items-center gap-2">
          <span>{category}</span>
        </button>
      }
      {sentiment &&
        <button className="bg-primary text-white px-3 py-2 rounded font-bold flex justify-center items-center gap-2">
          <span>{sentiment}</span>
        </button>
      }
      {mappedSource.length !== 0 && mappedSource.length !== 9 &&
        <button className="bg-primary text-white px-3 py-2 rounded font-bold flex justify-center items-center gap-2">
          <span className="bg-white text-primary px-2 rounded-full">{mappedSource.length}</span>
          <span>Sumber</span>
        </button>
      }
    </div>
  )
}
