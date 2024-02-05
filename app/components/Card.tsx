import { FaGlobe, FaRegCalendarAlt } from "react-icons/fa";

interface CardProps {
  title: string;
  time: Date;
  category: string;
  publisher: string;
  image: string;
}

export default function Card({ title, time, category, publisher, image}: CardProps) {
  const formattedDate = time.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric'});
  return (
    <article className="effect">
      <div className="group bg-cover bg-center bg-no-repeat relative rounded-t-lg p-5" style={{ backgroundImage: `linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0) 25%), url('${image}')`, height: "250px" }}>
        <button className="group-hover:opacity-0 transition ease-in-out duration-300 bg-red-400 px-4 py-1 font-bold text-white rounded text-2xl">{publisher}</button>
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
            <p>Teknologi</p>
          </div>
        </div>
      </div>
    </article>
  )
}
