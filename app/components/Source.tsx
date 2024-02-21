import { useState } from "react";
import { FaGlobe } from "react-icons/fa";

export default function Source() {
  const [modal, setModal] = useState(false);

  const handleModal = (bool: Boolean) => {
    if (bool) {
      document.body.style.overflow = 'hidden';
      setModal(true);
    } else {
      document.body.style.overflow = 'visible';
      setModal(false);
    }
  }
  return (
    <>
      <div className={`bg-black/60 fixed inset-0 z-10 justify-center items-center ${modal ? 'flex' : 'hidden'}`}>
        <div className="effect p-5 text-center relative w-5/12">
          <p className="font-bold text-2xl text-secondary">Sumber Berita</p>
          <p className="text-secondary text-xl mt-1">Menampilkan Berita Dari Seluruh Sumber</p>
          <div className="mt-5 flex flex-wrap gap-3 justify-center">
            <div>
              <input type="checkbox" name="source" id="Antara" value="Antara" className="hidden peer" />
              <label htmlFor="Antara" className="inline-block bg-secondary peer-checked:bg-pink-500 px-4 py-3 select-none text-white font-bold text-xl rounded cursor-pointer">
                Antara
              </label>
            </div>
            <div>
              <input type="checkbox" name="source" id="CNN" value="CNN" className="hidden peer" />
              <label htmlFor="CNN" className="inline-block bg-secondary peer-checked:bg-red-500 px-4 py-3 select-none text-white font-bold text-xl rounded cursor-pointer">
                CNN
              </label>
            </div>
            <div>
              <input type="checkbox" name="source" id="CNBC" value="CNBC" className="hidden peer" />
              <label htmlFor="CNBC" className="inline-block bg-secondary peer-checked:bg-blue-500 px-4 py-3 select-none text-white font-bold text-xl rounded cursor-pointer">
                CNBC
              </label>
            </div>
            <div>
              <input type="checkbox" name="source" id="Republika" value="Republika" className="hidden peer" />
              <label htmlFor="Republika" className="inline-block bg-secondary peer-checked:bg-green-500 px-4 py-3 select-none text-white font-bold text-xl rounded cursor-pointer">
                Republika
              </label>
            </div>
            <div>
              <input type="checkbox" name="source" id="Okezone" value="Okezone" className="hidden peer" />
              <label htmlFor="Okezone" className="inline-block bg-secondary peer-checked:bg-yellow-500 px-4 py-3 select-none text-white font-bold text-xl rounded cursor-pointer">
                Okezone
              </label>
            </div>
            <div>
              <input type="checkbox" name="source" id="Kumparan" value="Kumparan" className="hidden peer" />
              <label htmlFor="Kumparan" className="inline-block bg-secondary peer-checked:bg-purple-500 px-4 py-3 select-none text-white font-bold text-xl rounded cursor-pointer">
                Kumparan
              </label>
            </div>
            <div>
              <input type="checkbox" name="source" id="Vice" value="Vice" className="hidden peer" />
              <label htmlFor="Vice" className="inline-block bg-secondary peer-checked:bg-gray-500 px-4 py-3 select-none text-white font-bold text-xl rounded cursor-pointer">
                Vice
              </label>
            </div>
            <div>
              <input type="checkbox" name="source" id="Suara" value="Suara" className="hidden peer" />
              <label htmlFor="Suara" className="inline-block bg-secondary peer-checked:bg-rose-500 px-4 py-3 select-none text-white font-bold text-xl rounded cursor-pointer">
                Suara
              </label>
            </div>
            <div>
              <input type="checkbox" name="source" id="VOA" value="VOA" className="hidden peer" />
              <label htmlFor="VOA" className="inline-block bg-secondary peer-checked:bg-orange-500 px-4 py-3 select-none text-white font-bold text-xl rounded cursor-pointer">
                VOA
              </label>
            </div>
          </div>
          <div className="mt-5 flex gap-3 justify-center">
            <button className="bg-red-400 text-white px-7 py-3 text-xl font-bold rounded" onClick={() => handleModal(false)}>Batal</button>
            <button className="bg-primary text-white px-4 py-3 text-xl font-bold rounded" onClick={() => handleModal(false)}>Simpan</button>
          </div>
        </div>
      </div>
      <button className="bg-primary text-white font-bold p-3 rounded flex justify-center items-center text-2xl" onClick={() => handleModal(true)}>
        <FaGlobe className="mt-0.5 mr-2 hidden xl:block" />
        <span>Sumber</span>
        <span className="mt-0.5 ml-4 bg-white text-primary rounded p-1 w-6 h-6 flex items-center justify-center text-lg">
          3
        </span>
      </button>
    </>
  )
}
