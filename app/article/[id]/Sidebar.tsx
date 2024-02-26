"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { FaChevronLeft, FaGlobe, FaMeh, FaSadTear, FaSmileBeam, FaTags } from "react-icons/fa";

export default function Sidebar({ source, category, sentiment }: { source: string, category: string, sentiment: string }) {
  const router = useRouter()
  const parsedSentiment = parseFloat(sentiment);
  const sourceName = ['Antara', 'CNN', 'CNBC', 'Republika', 'Okezone', 'Kumparan', 'Vice', 'Suara', 'VOA'];
  const sourceIndex = sourceName.indexOf(source)
  return (
    <aside className="hidden lg:block">
      <div className="flex flex-col gap-3">
        <button onClick={() => router.back()} className="effect p-4 text-xl xl:text-2xl text-secondary font-semibold flex items-center justify-center gap-2">
          <FaChevronLeft />
          <span>Kembali</span>
        </button>
        <Link className="effect p-4 flex items-center gap-3" href={`/?source=${sourceIndex}`}>
          <FaGlobe className="text-4xl bg-primary p-2 rounded text-white shrink-0" />
          <p className="text-secondary text-xl xl:text-2xl font-semibold">{source}</p>
        </Link>
        <Link className="effect p-4 flex items-center gap-3" href={`/?category=${category}`}>
          <FaTags className="text-4xl bg-blue-400 p-2 rounded text-white shrink-0" />
          <p className="text-secondary text-xl xl:text-2xl font-semibold">{category}</p>
        </Link>
        {parsedSentiment > 0 && (
          <Link className="effect p-4 flex items-center gap-3" href={`/?sentiment=positif`}>
            <FaSmileBeam className="text-4xl bg-green-400 p-2 rounded text-white shrink-0" />
            <p className="text-secondary text-xl xl:text-2xl font-semibold">Positif</p>
          </Link>
        )}
        {parsedSentiment === 0 && (
          <Link className="effect p-4 flex items-center gap-3" href={`/?sentiment=netral`}>
            <FaMeh className="text-4xl bg-gray-400 p-2 rounded text-white" />
            <p className="text-secondary text-2xl font-semibold">Netral</p>
          </Link>
        )}
        {parsedSentiment < 0 && (
          <Link className="effect p-4 flex items-center gap-3" href={`/?sentiment=negatif`}>
            <FaSadTear className="text-4xl bg-red-400 p-2 rounded text-white" />
            <p className="text-secondary text-2xl font-semibold">Negatif</p>
          </Link>
        )}
      </div>
    </aside>
  )
}
