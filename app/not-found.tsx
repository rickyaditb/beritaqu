import { Metadata } from 'next'
import Link from 'next/link'
import { FaHome } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Terjadi Kesalahan | Error 404',
}

export default function NotFound() {
  return (
    <div className='flex items-center justify-center h-screen bg-white text-center'>
      <div>
        <img src="/not-found.svg" alt="" className="max-w-96 mx-auto" />
        <p className='mt-10 text-secondary text-2xl'>Halaman yang kamu akses <br /> tidak dapat ditemukan</p>

        <Link href={"/"} className="bg-primary px-4 py-3 text-2xl text-white font-semibold rounded flex items-center gap-3 w-fit mx-auto mt-8">
          <FaHome className="text-3xl" />
          Beranda
        </Link>
      </div>
    </div>
  )
}