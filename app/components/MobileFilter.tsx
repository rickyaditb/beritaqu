import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Drawer } from 'vaul';

export default function MobileFilter() {
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
            <button className={`inline-block bg-secondary px-3 py-2 select-none text-white font-bold text-lg rounded cursor-pointer`}>
              Olahraga
            </button>
            <button className={`inline-block bg-secondary px-3 py-2 select-none text-white font-bold text-lg rounded cursor-pointer`}>
              Ekonomi
            </button>
            <button className={`inline-block bg-secondary px-3 py-2 select-none text-white font-bold text-lg rounded cursor-pointer`}>
              Kesehatan
            </button>
            <button className={`inline-block bg-secondary px-3 py-2 select-none text-white font-bold text-lg rounded cursor-pointer`}>
              Teknologi
            </button>
          </div>
          <p className='font-bold text-secondary text-2xl mt-6'>Sentimen Berita</p>
          <div className='mt-2 flex flex-wrap gap-2'>
            <button className={`inline-block bg-secondary px-5 py-2 select-none text-white font-bold text-lg rounded cursor-pointer`}>
              Negatif
            </button>
            <button className={`inline-block bg-secondary px-5 py-2 select-none text-white font-bold text-lg rounded cursor-pointer`}>
              Netral
            </button>
            <button className={`inline-block bg-secondary px-5 py-2 select-none text-white font-bold text-lg rounded cursor-pointer`}>
              Positif
            </button>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <Drawer.Close>
              <button className="bg-red-400 text-white py-3 text-xl font-bold rounded w-full">Batal</button>
            </Drawer.Close>
            <Drawer.Close>
              <button className="bg-primary text-white py-3 text-xl font-bold rounded w-full">Simpan</button>
            </Drawer.Close>
          </div>
        </Drawer.Content>
        <Drawer.Overlay />
      </Drawer.Portal>
    </Drawer.Root>
  )
}
