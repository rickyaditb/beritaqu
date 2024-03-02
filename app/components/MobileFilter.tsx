import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Drawer } from 'vaul';

export default function MobileFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const sourceName = ['Antara', 'CNN', 'CNBC', 'Republika', 'Okezone', 'Kumparan', 'Vice', 'Suara', 'VOA'];
  const activeSource = searchParams.get('source') || '';
  const mappedSource = activeSource ? activeSource.split(' ').map(index => sourceName[Number(index)]) : [];
  const [tempSource, setTempSource] = useState(mappedSource || [] as string[]);
  const [savedSource, setSavedSource] = useState(mappedSource || [] as string[]);

  const [tempCategory, setTempCategory] = useState(searchParams.get('category') || '' as string);
  const [savedCategory, setSavedCategory] = useState(searchParams.get('category') || '' as string);

  const [tempSentiment, setTempSentiment] = useState(searchParams.get('sentiment') || '' as string);
  const [savedSentiment, setSavedSentiment] = useState(searchParams.get('sentiment') || '' as string);

  const handleSource = (buttonSource: string) => {
    if (tempSource.includes(buttonSource)) {
      setTempSource(tempSource.filter((id) => id !== buttonSource));
    } else {
      setTempSource((prevTempSource) => [...prevTempSource, buttonSource]);
    }
  }

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
    setSavedSource(tempSource)

    const currentQueryParams = new URLSearchParams(window.location.search);
    currentQueryParams.set('category', tempCategory);
    currentQueryParams.set('sentiment', tempSentiment);
    currentQueryParams.set('source', tempSource.map(source => sourceName.indexOf(source)).join(' '));
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
            <button onClick={() => handleSource('Antara')} className={`inline-block ${tempSource.includes('Antara') ? 'bg-pink-500' : 'bg-secondary'} px-3 py-2 select-none text-white font-bold text-lg rounded cursor-pointer`}>
              Antara
            </button>
            <button onClick={() => handleSource('CNN')} className={`inline-block ${tempSource.includes('CNN') ? 'bg-red-500' : 'bg-secondary'} px-3 py-2 select-none text-white font-bold text-lg rounded cursor-pointer`}>
              CNN
            </button>
            <button onClick={() => handleSource('CNBC')} className={`inline-block ${tempSource.includes('CNBC') ? 'bg-blue-500' : 'bg-secondary'} px-3 py-2 select-none text-white font-bold text-lg rounded cursor-pointer`}>
              CNBC
            </button>
            <button onClick={() => handleSource('Republika')} className={`inline-block ${tempSource.includes('Republika') ? 'bg-green-500' : 'bg-secondary'} px-3 py-2 select-none text-white font-bold text-lg rounded cursor-pointer`}>
              Republika
            </button>
            <button onClick={() => handleSource('Okezone')} className={`inline-block ${tempSource.includes('Okezone') ? 'bg-yellow-500' : 'bg-secondary'} px-3 py-2 select-none text-white font-bold text-lg rounded cursor-pointer`}>
              Okezone
            </button>
            <button onClick={() => handleSource('Kumparan')} className={`inline-block ${tempSource.includes('Kumparan') ? 'bg-purple-500' : 'bg-secondary'} px-3 py-2 select-none text-white font-bold text-lg rounded cursor-pointer`}>
              Kumparan
            </button>
            <button onClick={() => handleSource('Vice')} className={`inline-block ${tempSource.includes('Vice') ? 'bg-gray-500' : 'bg-secondary'} px-3 py-2 select-none text-white font-bold text-lg rounded cursor-pointer`}>
              Vice
            </button>
            <button onClick={() => handleSource('Suara')} className={`inline-block ${tempSource.includes('Suara') ? 'bg-rose-500' : 'bg-secondary'} px-3 py-2 select-none text-white font-bold text-lg rounded cursor-pointer`}>
              Suara
            </button>
            <button onClick={() => handleSource('VOA')} className={`inline-block ${tempSource.includes('VOA') ? 'bg-orange-500' : 'bg-secondary'} px-3 py-2 select-none text-white font-bold text-lg rounded cursor-pointer`}>
              VOA
            </button>
          </div>
          <p className='font-bold text-secondary text-2xl mt-6'>Kategori Berita</p>
          <div className='mt-2 flex flex-wrap gap-2'>
            <button onClick={() => handleFilter('category', 'Olahraga')} className={`inline-block ${tempCategory === 'Olahraga' ? 'bg-primary' : 'bg-secondary'} px-3 py-2 select-none text-white font-bold text-lg rounded cursor-pointer`}>
              Olahraga
            </button>
            <button onClick={() => handleFilter('category', 'Ekonomi')} className={`inline-block ${tempCategory === 'Ekonomi' ? 'bg-primary' : 'bg-secondary'} px-3 py-2 select-none text-white font-bold text-lg rounded cursor-pointer`}>
              Ekonomi
            </button>
            <button onClick={() => handleFilter('category', 'Kesehatan')} className={`inline-block ${tempCategory === 'Kesehatan' ? 'bg-primary' : 'bg-secondary'} px-3 py-2 select-none text-white font-bold text-lg rounded cursor-pointer`}>
              Kesehatan
            </button>
            <button onClick={() => handleFilter('category', 'Teknologi')} className={`inline-block ${tempCategory === 'Teknologi' ? 'bg-primary' : 'bg-secondary'} px-3 py-2 select-none text-white font-bold text-lg rounded cursor-pointer`}>
              Teknologi
            </button>
          </div>
          <p className='font-bold text-secondary text-2xl mt-6'>Sentimen Berita</p>
          <div className='mt-2 flex flex-wrap gap-2'>
            <button onClick={() => handleFilter('sentiment', 'Negatif')} className={`inline-block ${tempSentiment === 'Negatif' ? 'bg-primary' : 'bg-secondary'} px-5 py-2 select-none text-white font-bold text-lg rounded cursor-pointer`}>
              Negatif
            </button>
            <button onClick={() => handleFilter('sentiment', 'Netral')} className={`inline-block ${tempSentiment === 'Netral' ? 'bg-primary' : 'bg-secondary'} px-5 py-2 select-none text-white font-bold text-lg rounded cursor-pointer`}>
              Netral
            </button>
            <button onClick={() => handleFilter('sentiment', 'Positif')} className={`inline-block ${tempSentiment === 'Positif' ? 'bg-primary' : 'bg-secondary'} px-5 py-2 select-none text-white font-bold text-lg rounded cursor-pointer`}>
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
