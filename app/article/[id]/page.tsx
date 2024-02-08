import Header from "@/app/components/Header";
import Sidebar from "@/app/components/Sidebar";
import { getNewsById } from "@/utils/database";

import { NewsItem } from "@/utils/types";
import { FaBookmark, FaExternalLinkAlt, FaGlobe, FaRegCalendarAlt } from "react-icons/fa";

export default async function page({ params }: { params: NewsItem }) {
  const news = await getNewsById(params.id);
  const formattedDate = news.time.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
  return (
    <div className="container max-w-7xl mx-auto mt-5 w-full px-5">
      <Header />
      <div className="grid grid-cols-6">
        <Sidebar />
        <main className="col-span-6 lg:col-span-5 lg:pl-5">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 md:col-span-7 order-2 md:order-1">
              <div className="effect p-7 text-secondary">
                <h1 className="font-bold text-2xl">{news.title}</h1>
                <div className="flex gap-8">
                  <div className="flex items-center gap-2 text-xl mt-2">
                    <FaRegCalendarAlt />
                    <p>{formattedDate}</p>
                  </div>
                  <div className="flex items-center gap-2 text-xl mt-2">
                    <FaGlobe />
                    <p>{news.source}</p>
                  </div>
                </div>
                <div className="mt-5">
                  <h2 className="font-semibold text-xl mb-2">Rangkuman Berita</h2>
                  {news.summary.map((summaryItem: string, index: number) => (
                    <div key={index} className="flex gap-2 mt-3">
                      <div>
                        <span className="bg-primary px-2 py-1 text-white font-bold rounded">{index + 1}</span>
                      </div>
                      <p>{summaryItem}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 order-1 md:order-2">
              <div className="effect p-2 rounded">
                <img src={news.image} alt="" className="rounded" />
              </div>
              <div className="flex gap-4 mt-4">
                <button className="bg-primary px-4 py-3 text-white font-bold text-2xl flex items-center gap-3 rounded w-full justify-center">
                  <FaExternalLinkAlt />
                  <span>Sumber</span>
                </button>
                <button className="bg-primary px-4 py-3 text-white font-bold text-2xl flex items-center gap-3 rounded w-full justify-center">
                  <FaBookmark />
                  <span>Simpan</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
