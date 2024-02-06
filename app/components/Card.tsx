import { FaGlobe, FaMeh, FaRegCalendarAlt, FaSadTear, FaSmileBeam } from "react-icons/fa";
import { NewsItem } from "@/utils/types";

export default function Card({ title, time, category, source, sentiment, image }: NewsItem) {
  const formattedDate = time.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
  const parsedSentiment = parseFloat(sentiment);
  return (
    <article className="effect">
      <div className="group bg-cover bg-center bg-no-repeat relative rounded-t-lg p-5" style={{ backgroundImage: `linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0) 25%), url('${image}')`, height: "250px" }}>
        <div className="flex justify-between group-hover:opacity-0 transition ease-in-out duration-300">
          <button className={`self-start ${source} px-4 py-1 font-bold text-white rounded text-2xl`}>{source}</button>
          {parsedSentiment > 0 && (
            <div className="bg-green-500 text-white p-2 rounded">
              <FaSmileBeam className="text-3xl" />
            </div>
          )}
          {parsedSentiment === 0 && (
            <div className="bg-gray-500 text-white p-2 rounded">
              <FaMeh className="text-3xl" />
            </div>
          )}
          {parsedSentiment < 0 && (
            <div className="bg-red-500 text-white p-2 rounded">
              <FaSadTear className="text-3xl" />
            </div>
          )}
        </div>
      </div>
      <div className="p-5 text-secondary">
        <p className="font-bold text-xl truncate-2-lines">{title}</p>
        <div className="grid grid-cols-2 text-xl mt-1.5 gap-5">
          <div className="flex items-center">
            <FaRegCalendarAlt className="text-xl mr-2" />
            <p className="truncate">{formattedDate}</p>
          </div>
          <div className="flex items-center">
            <FaGlobe className="text-xl mr-2" />
            <p>{category}</p>
          </div>
        </div>
      </div>
    </article>
  )
}
