import Link from "next/link";
import { FaChevronLeft, FaGlobe, FaMedkit, FaMeh, FaMoneyBill, FaRocket, FaSadTear, FaSmileBeam, FaTags, FaVolleyballBall } from "react-icons/fa";


export default function Sidebar({ source, category, sentiment }: { source: string, category: string, sentiment: string }) {
  const parsedSentiment = parseFloat(sentiment);
  return (
    <aside className="hidden lg:block">
      <div className="flex flex-col gap-3">
        <Link href={"/"} className="effect p-4 text-2xl text-secondary font-semibold flex items-center justify-center gap-2">
          <FaChevronLeft />
          <span>Kembali</span>
        </Link>
        <div className="effect p-4 flex items-center gap-3">
          <FaGlobe className="text-4xl bg-primary p-2 rounded text-white" />
          <p className="text-secondary text-2xl font-semibold">{source}</p>
        </div>
        <div className="effect p-4 flex items-center gap-3">
          <FaTags className="text-4xl bg-blue-400 p-2 rounded text-white" />
          <p className="text-secondary text-2xl font-semibold">{category}</p>
        </div>
        {parsedSentiment > 0 && (
          <div className="effect p-4 flex items-center gap-3">
            <FaSmileBeam className="text-4xl bg-green-400 p-2 rounded text-white" />
            <p className="text-secondary text-2xl font-semibold">Positif</p>
          </div>
        )}
        {parsedSentiment === 0 && (
          <div className="effect p-4 flex items-center gap-3">
            <FaMeh className="text-4xl bg-gray-400 p-2 rounded text-white" />
            <p className="text-secondary text-2xl font-semibold">Netral</p>
          </div>
        )}
        {parsedSentiment < 0 && (
          <div className="effect p-4 flex items-center gap-3">
            <FaSadTear className="text-4xl bg-red-400 p-2 rounded text-white" />
            <p className="text-secondary text-2xl font-semibold">Negatif</p>
          </div>
        )}
      </div>
    </aside>
  )
}
