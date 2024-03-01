import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Drawer } from 'vaul';

export default function MobileFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [tempCategory, setTempCategory] = useState(searchParams.get('category') || '' as string);
  const [savedCategory, setSavedCategory] = useState(searchParams.get('category') || '' as string);

  const [tempSentiment, setTempSentiment] = useState(searchParams.get('sentiment') || '' as string);
  const [savedSentiment, setSavedSentiment] = useState(searchParams.get('sentiment') || '' as string);

  const handleFilter = (filterType: string, keyword: string) => {
    if (filterType === 'category') {
      if (tempCategory === keyword) {
        setTempCategory('');
        keyword = '';
      } else {
        setTempCategory(keyword);
      }
    } else if (filterType === 'sentiment') {
      if (tempSentiment === keyword) {
        setTempSentiment('');
        keyword = '';
      } else {
        setTempSentiment(keyword);
      }
    }
  }

  const handleSave = () => {
    setSavedCategory(tempCategory);
    setSavedSentiment(tempSentiment);

    const currentQueryParams = new URLSearchParams(window.location.search);
    currentQueryParams.set('category', tempCategory);
    currentQueryParams.set('sentiment', tempSentiment);
    router.push(`/?${currentQueryParams.toString()}`);
  }

  const handleCancel = () => {
    setTempCategory(savedCategory);
    setTempSentiment(savedSentiment);
  }

  return (
    <Drawer.Root>
      <Drawer.Trigger>
        <FaBars className="text-5xl bg-primary text-white mr-4 rounded py-2 px-3 block lg:hidden" />
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed lg:hidden inset-0 bg-black/40" />
        <Drawer.Content className="bg-white fixed lg:hidden bottom-0 p-5 rounded-t-3xl w-full">
          <button className='w-16 border-secondary border-2 mx-auto block mb-5'></button>
          <p className='font-bold text-secondary text-2xl'>Sumber Berita</p>
          <div className="flex flex-wrap mt-2 gap-2">
            <button className={`inline-block bg-secondary px-3 py-2 select-none text-white font-bold text-lg rounded cursor-pointer`}>
              Antara
            </button>
            <button className={`inline-block bg-secondary px-3 py-2 select-none text-white font-bold text-lg rounded cursor-pointer`}>
              CNN
            </button>
            <button className={`inline-block bg-secondary px-3 py-2 select-none text-white font-bold text-lg rounded cursor-pointer`}>
              CNBC
            </button>
            <button className={`inline-block bg-secondary px-3 py-2 select-none text-white font-bold text-lg rounded cursor-pointer`}>
              Republika
            </button>
            <button className={`inline-block bg-secondary px-3 py-2 select-none text-white font-bold text-lg rounded cursor-pointer`}>
              Okezone
            </button>
            <button className={`inline-block bg-secondary px-3 py-2 select-none text-white font-bold text-lg rounded cursor-pointer`}>
              Kumparan
            </button>
            <button className={`inline-block bg-secondary px-3 py-2 select-none text-white font-bold text-lg rounded cursor-pointer`}>
              Vice
            </button>
            <button className={`inline-block bg-secondary px-3 py-2 select-none text-white font-bold text-lg rounded cursor-pointer`}>
              Suara
            </button>
            <button className={`inline-block bg-secondary px-3 py-2 select-none text-white font-bold text-lg rounded cursor-pointer`}>
              VOA
            </button>
          </div>
          <p className='font-bold text-secondary text-2xl mt-6'>Kategori Berita</p>
          <div className='mt-2 flex flex-wrap gap-2'>
            <button onClick={() => handleFilter('category', 'olahraga')} className={`inline-block ${tempCategory === 'olahraga' ? 'bg-primary' : 'bg-secondary'} px-3 py-2 select-none text-white font-bold text-lg rounded cursor-pointer`}>
              Olahraga
            </button>
            <button onClick={() => handleFilter('category', 'ekonomi')} className={`inline-block ${tempCategory === 'ekonomi' ? 'bg-primary' : 'bg-secondary'} px-3 py-2 select-none text-white font-bold text-lg rounded cursor-pointer`}>
              Ekonomi
            </button>
            <button onClick={() => handleFilter('category', 'kesehatan')} className={`inline-block ${tempCategory === 'kesehatan' ? 'bg-primary' : 'bg-secondary'} px-3 py-2 select-none text-white font-bold text-lg rounded cursor-pointer`}>
              Kesehatan
            </button>
            <button onClick={() => handleFilter('category', 'teknologi')} className={`inline-block ${tempCategory === 'teknologi' ? 'bg-primary' : 'bg-secondary'} px-3 py-2 select-none text-white font-bold text-lg rounded cursor-pointer`}>
              Teknologi
            </button>
          </div>
          <p className='font-bold text-secondary text-2xl mt-6'>Sentimen Berita</p>
          <div className='mt-2 flex flex-wrap gap-2'>
            <button onClick={() => handleFilter('sentiment', 'negatif')} className={`inline-block ${tempSentiment === 'negatif' ? 'bg-primary' : 'bg-secondary'} px-5 py-2 select-none text-white font-bold text-lg rounded cursor-pointer`}>
              Negatif
            </button>
            <button onClick={() => handleFilter('sentiment', 'netral')} className={`inline-block ${tempSentiment === 'netral' ? 'bg-primary' : 'bg-secondary'} px-5 py-2 select-none text-white font-bold text-lg rounded cursor-pointer`}>
              Netral
            </button>
            <button onClick={() => handleFilter('sentiment', 'positif')} className={`inline-block ${tempSentiment === 'positif' ? 'bg-primary' : 'bg-secondary'} px-5 py-2 select-none text-white font-bold text-lg rounded cursor-pointer`}>
              Positif
            </button>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <Drawer.Close>
              <button className="bg-red-400 text-white py-3 text-xl font-bold rounded w-full" onClick={handleCancel}>Batal</button>
            </Drawer.Close>
            <Drawer.Close>
              <button className="bg-primary text-white py-3 text-xl font-bold rounded w-full" onClick={handleSave}>Simpan</button>
            </Drawer.Close>
          </div>
        </Drawer.Content>
        <Drawer.Overlay />
      </Drawer.Portal>
    </Drawer.Root>
  )
}
