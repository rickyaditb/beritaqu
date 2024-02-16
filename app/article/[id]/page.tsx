import Header from "@/app/components/Header";
import Sidebar from "./Sidebar";
import { getNewsById } from "@/utils/database";

import { NewsItem } from "@/utils/types";
import { FaBookmark, FaExternalLinkAlt, FaGlobe, FaMeh, FaRegCalendarAlt, FaSadTear, FaSmileBeam, FaTags } from "react-icons/fa";
import Footer from "@/app/components/Footer";
import Link from "next/link";

export async function generateMetadata({ params }: { params: NewsItem }) {
  const news = await getNewsById(params.id);
  return {
    title: `${news.source} | ${news.title}`,
  }
}

export default async function page({ params }: { params: NewsItem }) {
  const news = await getNewsById(params.id);
  const formattedDate = news.time.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
  const shortDate = news.time.toLocaleDateString('id-ID', { day: 'numeric', month: 'long' });
  const parsedSentiment = parseFloat(news.sentiment);
  let counter = 0;
  return (
    <div className="container max-w-7xl mx-auto mt-5 w-full px-5">
      <Header />
      <div className="grid grid-cols-6">
        <Sidebar source={news.source} category={news.category} sentiment={news.sentiment} />
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
                        <span className={`bg-primary px-2 py-1 text-white font-bold rounded ${/^\s*-.*/.test(summaryItem) ? 'opacity-0' : counter++}`}>{counter}</span>
                      </div>
                      <p>{summaryItem.replace(/^\s*-*/, '')}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 order-1 md:order-2">
              <div className="effect p-2 rounded">
                <img src={news.image} alt="" className="rounded w-full" />
              </div>
              <div className="flex gap-4 mt-4 text-2xl md:text-xl lg:text-2xl">
                <a href={news.link} target="_blank" className="bg-primary px-4 py-3 text-white font-bold flex items-center gap-3 rounded w-full justify-center">
                  <FaExternalLinkAlt />
                  <span>Sumber</span>
                </a>
                <button className="bg-primary px-4 py-3 text-white font-bold flex items-center gap-3 rounded w-full justify-center">
                  <FaBookmark />
                  <span>Simpan</span>
                </button>
              </div>
              <div className="grid md:hidden grid-cols-2 gap-3 mt-3">
                <Link className="effect p-4 flex items-center gap-3" href={`/?source=${news.source}`}>
                  <FaGlobe className="text-4xl bg-primary p-2 rounded text-white shrink-0"/>
                  <p className="text-secondary text-xl xl:text-2xl font-semibold">{news.source}</p>
                </Link>
                <Link className="effect p-4 flex items-center gap-3" href={`/?category=${news.category}`}>
                  <FaTags className="text-4xl bg-blue-400 p-2 rounded text-white shrink-0"/>
                  <p className="text-secondary text-xl xl:text-2xl font-semibold">{news.category}</p>
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
                <div className="effect p-4 flex items-center gap-3">
                  <FaGlobe className="text-4xl bg-primary p-2 rounded text-white shrink-0" />
                  <p className="text-secondary text-xl xl:text-2xl font-semibold truncate">{shortDate}</p>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </div>
  )
}
