import { useState } from "react"
import NewsCard from "./NewsCard"

const Home = ({ allNews }) => {
  return (
    <div className="flex mt-8">
      <div className="flex flex-col w-[25%] pr-4 divide-y-[1px] divide-dark border-r-[1px] border-r-dark">
        {allNews.slice(0, 2).map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
      <div className="w-1/2 px-4">
        {allNews.slice(0, 1).map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
      <div className="flex flex-col w-[25%] pl-4 divide-y-[1px] divide-dark border-l-[1px] border-l-dark">
        {allNews.slice(0, 6).map((news) => (
          <NewsCard key={news.id} news={news} smallCard={true} />
        ))}
      </div>
    </div>
  )
}

export default Home