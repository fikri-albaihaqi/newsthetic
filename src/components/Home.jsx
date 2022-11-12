import { useState } from "react"
import NewsCard from "./NewsCard"
import SmallNewsCard from "./SmallNewsCard"

const Home = ({ allNews }) => {
  return (
    <div>
      <div className="flex mt-8">
        <div className="flex flex-col w-[25%] pr-4 divide-y-[1px] divide-dark border-r-[1px] border-r-dark">
          {allNews.slice(0, 2).map((news) => (
            <NewsCard key={news.id} news={news} vertical={true} />
          ))}
        </div>
        <div className="w-1/2 px-4">
          {allNews.slice(0, 1).map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
        <div className="flex flex-col w-[25%] pl-4 divide-y-[1px] divide-dark border-l-[1px] border-l-dark">
          <h1 className="font-extrabold text-4xl mb-6">Terbaru</h1>
          {allNews.slice(0, 6).map((news) => (
            <SmallNewsCard key={news.id} news={news} vertical={true} />
          ))}
        </div>
      </div>
      <div className="mt-8">
        <div>
          <h1 className="py-8 font-extrabold text-4xl text-center border-y-2 border-y-dark">OLAHRAGA</h1>
          <div className="grid gap-6 grid-cols-4">
            {allNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>
        
        <div className="mt-8">
          <h1 className="py-8 font-extrabold text-4xl text-center border-y-2 border-y-dark">OTOMOTIF</h1>
          <div className="grid gap-6 grid-cols-4">
            {allNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h1 className="py-8 font-extrabold text-4xl text-center border-y-2 border-y-dark">GAYA HIDUP</h1>
          <div className="grid gap-6 grid-cols-4">
            {allNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h1 className="py-8 font-extrabold text-4xl text-center border-y-2 border-y-dark">EKONOMI</h1>
          <div className="grid gap-6 grid-cols-4">
            {allNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h1 className="py-8 font-extrabold text-4xl text-center border-y-2 border-y-dark">DUNIA</h1>
          <div className="grid gap-6 grid-cols-4">
            {allNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h1 className="py-8 font-extrabold text-4xl text-center border-y-2 border-y-dark">KESEHATAN</h1>
          <div className="grid gap-6 grid-cols-4">
            {allNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h1 className="py-8 font-extrabold text-4xl text-center border-y-2 border-y-dark">TEKNOLOGI</h1>
          <div className="grid gap-6 grid-cols-4">
            {allNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home