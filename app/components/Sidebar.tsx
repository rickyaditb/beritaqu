import Link from "next/link";
import { FaMedkit, FaMeh, FaMoneyBill, FaRocket, FaSadTear, FaSmileBeam, FaVolleyballBall } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="hidden lg:block">
      <div className="flex flex-col gap-3">
        <div className="effect text-center p-6 font-semibold">
          <p className="text-2xl text-secondary border-b-2 pb-3 mb-6">Kategori</p>
          <div className="gap-4 flex flex-col">
            <button className="flex items-center gap-2 justify-center w-full text-primary">
              <FaVolleyballBall className="text-3xl shrink-0" />
              <span className="text-2xl">Olahraga</span>
            </button>
            <button className="flex items-center gap-2 justify-center w-full text-secondary">
              <FaMoneyBill className="text-3xl shrink-0" />
              <span className="text-2xl">Ekonomi</span>
            </button>
            <button className="flex items-center gap-2 justify-center w-full text-secondary">
              <FaMedkit className="text-3xl shrink-0" />
              <span className="text-2xl">Kesehatan</span>
            </button>
            <button className="flex items-center gap-2 justify-center w-full text-secondary">
              <FaRocket className="text-3xl shrink-0" />
              <span className="text-2xl">Teknologi</span>
            </button>
          </div>
        </div>
        <div className="effect text-center p-6 font-semibold">
          <p className="text-2xl text-secondary border-b-2 pb-3 mb-6">Sentimen</p>
          <div className="gap-4 flex flex-col">
            <button className="flex items-center gap-2 justify-center w-full text-green-500">
              <FaSmileBeam className="text-3xl" />
              <span className="text-2xl">Positif</span>
            </button>
            <button className="flex items-center gap-2 justify-center w-full text-secondary">
              <FaMeh className="text-3xl" />
              <span className="text-2xl">Netral</span>
            </button>
            <button className="flex items-center gap-2 justify-center w-full text-secondary">
              <FaSadTear className="text-3xl shrink-0" />
              <span className="text-2xl">Negatif</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}
