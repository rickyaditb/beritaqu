import { FaHome } from "react-icons/fa";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function page() {
  return (
    <div className="container max-w-7xl mx-auto mt-5 w-full px-5">
      <Header />
      <div className="grid grid-cols-6">
        <div className="effect col-span-6 grid grid-cols-2 p-32">
          <img src="/empty.svg" alt="" className="max-w-96" />
          <div className="text-center flex flex-col items-center justify-center gap-4">
            <p className="text-4xl font-semibold text-secondary text-center">Oopsss... Belum ada berita yang kamu simpan</p>
            <p className="text-2xl text-center text-secondary">Cari berita yang kamu suka <br />dan simpan untuk dibaca nanti</p>
            <Link href={"/"} className="bg-primary px-4 py-3 text-2xl text-white font-semibold rounded flex items-center gap-3">
              <FaHome className="text-3xl" />
              Beranda
            </Link>
          </div>
        </div>
        <div className="col-span-6">
          <Footer />
        </div>
      </div>
    </div>
  )
}
