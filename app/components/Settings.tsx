export default function Settings({ toggleSettings }: { toggleSettings: any }) {
  return (
    <div className="bg-black/60 fixed flex inset-0 z-10 items-center justify-center md:px-10">
      <div className="bg-white rounded p-5">
        <p className="text-2xl font-bold text-secondary">Pengaturan</p>
        <div className="mt-5 flex gap-3 justify-center">
          <button onClick={toggleSettings} className="bg-red-400 text-white px-7 py-3 text-xl font-bold rounded">Batal</button>
          <button className="bg-primary text-white px-4 py-3 text-xl font-bold rounded">Simpan</button>
        </div>
      </div>
    </div>
  )
}
