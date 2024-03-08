import { FaMoon } from "react-icons/fa";

export default function Settings({ toggleSettings }: { toggleSettings: any }) {
  return (
    <div className="bg-black/60 fixed flex inset-0 z-10 items-center justify-center md:px-10">
      <div className="effect px-8 py-6">
        <p className="text-3xl font-bold text-secondary mb-5">Pengaturan</p>
        <div className="flex flex-col gap-3">
          <div className="flex gap-8">
            <div>
              <p className="font-bold text-xl text-secondary">Blacklist Keyword</p>
              <p className="text-secondary">Berita yang mengandung kata-kata tertentu tidak akan ditampilkan</p>
            </div>
            <button className="text-xl font-bold bg-primary text-white px-5 rounded ml-auto">Atur</button>
          </div>
          <div className="flex gap-8">
            <div>
              <p className="font-bold text-xl text-secondary">Tampilan & Tema</p>
              <p className="text-secondary">Atur tampilan dan tema aplikasi</p>
            </div>
            <button className="text-xl font-bold border-2 text-primary border-primary px-5 rounded ml-auto flex items-center gap-3">
              <FaMoon className="text-2xl" />
              Mode Terang
            </button>
          </div>
          <div className="flex gap-8">
            <div>
              <p className="font-bold text-xl text-secondary">Masuk ke Sistem</p>
              <p className="text-secondary">Simpan data bookmark ke sistem cloud</p>
            </div>
            <button className="text-xl font-bold bg-primary text-white px-5 rounded ml-auto">Masuk</button>
          </div>
        </div>
        <div className="mt-8 flex gap-3 justify-center">
          <button onClick={toggleSettings} className="bg-red-400 text-white px-7 py-3 text-xl font-bold rounded">Batal</button>
          <button onClick={toggleSettings} className="bg-primary text-white px-4 py-3 text-xl font-bold rounded">Simpan</button>
        </div>
      </div>
    </div>
  )
}
