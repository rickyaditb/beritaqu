import { FaKey, FaUserAlt } from "react-icons/fa";

export default function page() {
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="justify-center items-center px-10 hidden md:flex">
        <img src="/login.svg" alt="" className="max-w-lg w-full" />
      </div>
      <div className="bg-white flex flex-col justify-center items-center gap-9 px-10 col-span-2 md:col-span-1">
        <div className="flex gap-3 flex-col items-center">
          <p className={`text-primary text-5xl font-custom`}>
            Beritaku
          </p>
          <p className="text-secondary text-2xl text-center">Baca Berita Jadi Gampang</p>
        </div>
        <div className="flex flex-col gap-5 w-full items-center">
          <div className="flex items-center w-full max-w-96">
            <FaUserAlt className="text-xl text-gray-300 absolute ml-5" />
            <input type="text" className="bg-gray-50 p-5 border-gray-200 border-2 w-full pl-14 focus:outline-none" placeholder="Masukan Username" />
          </div>
          <div className="flex items-center w-full max-w-96">
            <FaKey className="text-xl text-gray-300 absolute ml-5" />
            <input type="text" className="bg-gray-50 p-5 border-gray-200 border-2 w-full pl-14 focus:outline-none" placeholder="Masukan Kata Sandi" />
          </div>
          <button className="bg-primary max-w-96 w-full py-4 text-xl text-white font-bold rounded">Masuk</button>
        </div>
        <p className="text-secondary text-lg">Belum Punya Akun ? <b className="cursor-pointer">Daftar Disini</b></p>
      </div>
    </div>
  )
}
