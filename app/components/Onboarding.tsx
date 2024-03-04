export default function Onboarding() {
  return (
    <div className="bg-black/60 fixed inset-0 z-10 flex items-center justify-center">
      <div className="bg-white p-10 rounded-xl grid grid-cols-2 max-w-screen-lg w-full">
        <img src="/onboarding.svg" alt="" className="max-w-lg w-full p-5" />
        <div className="flex flex-col justify-center items-center gap-6">
          <p className="text-primary text-6xl font-custom text-center">Beritaku</p>
          <p className="text-secondary text-center px-16 text-lg">Beritaku adalah aplikasi agregator berita yang ditenagai oleh kecerdasan buatan untuk merangkum kontennya.</p>
          <button className="bg-primary text-white font-bold text-2xl px-4 py-3 rounded w-fit">Mulai Membaca</button>
        </div>
      </div>
    </div>
  )
}
