import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";


export default function Home() {
  return (
    <div className="container max-w-7xl mx-auto mt-5 w-full px-5">
      <Header />
      <div className="grid grid-cols-6">
        <Sidebar />
        <main className="col-span-6 lg:col-span-5 pl-5">
          <div className="grid md:grid-cols-2">
            <Card title="ini title" date="ini date" category="ini category" publisher="ini publisher" image="https://asset.kgnewsroom.com/photo/pre/2024/01/07/1c0b2c45-af73-4eac-957c-da7aaf90f827_jpg.jpg" />
          </div>
        </main>
      </div>
    </div>
  );
}
