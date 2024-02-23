import { useState } from "react";
import { FaGlobe } from "react-icons/fa";

export default function Source() {
  const [modal, setModal] = useState(false);
  const [tempSource, setTempSource] = useState([] as string[]);
  const [savedSource, setSavedSource] = useState([] as string[]);

  const handleModal = (bool: Boolean) => {
    if (bool) {
      document.body.style.overflow = 'hidden';
      setModal(true);
    } else {
      document.body.style.overflow = 'visible';
      setModal(false);
    }
  }

  const handleClick = (buttonSource: string) => {
    if (tempSource.includes(buttonSource)) {
      setTempSource(tempSource.filter((id) => id !== buttonSource));
    } else {
      setTempSource((prevTempSource) => [...prevTempSource, buttonSource]);
    }
  }

  const handleSave = () => {
    setSavedSource(tempSource);
    handleModal(false)
  };

  return (
    <>
      <div className={`bg-black/60 fixed inset-0 z-10 justify-center items-center ${modal ? 'flex' : 'hidden'}`}>
        <div className="effect p-5 text-center relative w-5/12">
          <p className="font-bold text-2xl text-secondary">Sumber Berita</p>
          <p className="text-secondary text-xl mt-1">Menampilkan Berita Dari {tempSource.length === 0 || tempSource.length === 9 ? 'Seluruh' : tempSource.length} Sumber</p>
          <div className="mt-5 flex flex-wrap gap-3 justify-center">
            <div>
              <button className={`inline-block ${tempSource.includes('Antara') ? 'bg-pink-500' : 'bg-secondary'} px-4 py-3 select-none text-white font-bold text-xl rounded cursor-pointer`} onClick={() => handleClick('Antara')}>
                Antara
              </button>
            </div>
            <div>
              <button className={`inline-block ${tempSource.includes('CNN') ? 'bg-red-500' : 'bg-secondary'} px-4 py-3 select-none text-white font-bold text-xl rounded cursor-pointer`} onClick={() => handleClick('CNN')}>
                CNN
              </button>
            </div>
            <div>
              <button className={`inline-block ${tempSource.includes('CNBC') ? 'bg-blue-500' : 'bg-secondary'} px-4 py-3 select-none text-white font-bold text-xl rounded cursor-pointer`} onClick={() => handleClick('CNBC')}>
                CNBC
              </button>
            </div>
            <div>
              <button className={`inline-block ${tempSource.includes('Republika') ? 'bg-green-500' : 'bg-secondary'} px-4 py-3 select-none text-white font-bold text-xl rounded cursor-pointer`} onClick={() => handleClick('Republika')}>
                Republika
              </button>
            </div>
            <div>
              <button className={`inline-block ${tempSource.includes('Okezone') ? 'bg-yellow-500' : 'bg-secondary'} px-4 py-3 select-none text-white font-bold text-xl rounded cursor-pointer`} onClick={() => handleClick('Okezone')}>
                Okezone
              </button>
            </div>
            <div>
              <button className={`inline-block ${tempSource.includes('Kumparan') ? 'bg-purple-500' : 'bg-secondary'} px-4 py-3 select-none text-white font-bold text-xl rounded cursor-pointer`} onClick={() => handleClick('Kumparan')}>
                Kumparan
              </button>
            </div>
            <div>
              <button className={`inline-block ${tempSource.includes('Vice') ? 'bg-gray-500' : 'bg-secondary'} px-4 py-3 select-none text-white font-bold text-xl rounded cursor-pointer`} onClick={() => handleClick('Vice')}>
                Vice
              </button>
            </div>
            <div>
              <button className={`inline-block ${tempSource.includes('Suara') ? 'bg-rose-500' : 'bg-secondary'} px-4 py-3 select-none text-white font-bold text-xl rounded cursor-pointer`} onClick={() => handleClick('Suara')}>
                Suara
              </button>
            </div>
            <div>
              <button className={`inline-block ${tempSource.includes('VOA') ? 'bg-orange-500' : 'bg-secondary'} px-4 py-3 select-none text-white font-bold text-xl rounded cursor-pointer`} onClick={() => handleClick('VOA')}>
                VOA
              </button>
            </div>
          </div>
          <div className="mt-5 flex gap-3 justify-center">
            <button className="bg-red-400 text-white px-7 py-3 text-xl font-bold rounded" onClick={() => handleModal(false)}>Batal</button>
            <button className="bg-primary text-white px-4 py-3 text-xl font-bold rounded" onClick={handleSave}>Simpan</button>
          </div>
        </div>
      </div>
      <button className="bg-primary text-white font-bold p-3 rounded flex justify-center items-center text-2xl" onClick={() => handleModal(true)}>
        <FaGlobe className="mt-0.5 mr-2 hidden xl:block" />
        <span>Sumber</span>
        {savedSource.length !== 0 && savedSource.length !== 9 &&
        <span className="mt-0.5 ml-4 bg-white text-primary rounded p-1 w-6 h-6 flex items-center justify-center text-lg">
          {savedSource.length}
        </span>
        }
      </button>
    </>
  )
}
