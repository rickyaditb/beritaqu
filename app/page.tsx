import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";
import { getNews } from "../utils/database";
import { NewsItem } from "@/utils/types";
import Link from "next/link";
import Pagination from "./components/Pagination";

export default async function Home({searchParams}: {searchParams: {[key: string]: string}} ) {
  const page = parseInt(searchParams['page'] ?? '1');
  const news = await getNews(page);
  return (
    <div className="container max-w-7xl mx-auto mt-5 w-full px-5">
      <Header />
      <div className="grid grid-cols-6">
        <Sidebar />
        <main className="col-span-6 lg:col-span-5 lg:pl-5">
          <div className="grid md:grid-cols-2 gap-5">
            {news.map((item: NewsItem) => (
              <Link href={`/article/${item.id}`} key={item.id}>
                <Card
                  id={item.id}
                  title={item.title}
                  time={item.time}
                  category={item.category}
                  source={item.source}
                  sentiment={item.sentiment}
                  image={item.image}
                />
              </Link>
            ))}
          </div>
          <Pagination />
        </main>
      </div>
    </div>
  );
}
