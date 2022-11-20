import { useState } from "react"
import { search } from "../api"
import NewsCard from "./NewsCard"

const Search = () => {
  const [searchResult, setSearchResult] = useState([])
  const [searchQuery, setSearchQuery] = useState('');

  const searchNews = async (query) => {
    const { data } = await search(query)
    setSearchResult(data.articles)
  }

  return (
    <div className="min-h-screen w-[90vw]">
      <div className="mt-64 w-[90vw]">
        <h1 className="text-center font-black text-6xl text-dark">Cari berita di Newsthetic</h1>
        <div className="flex xl:w-1/2 m-auto border border-gray-400 mt-8">
          <div className="flex items-center w-full">
            <span className="material-symbols-outlined font-bold text-2xl ml-2 text-gray-500">
              search
            </span>
            <input
              className="p-2 bg-white/20 placeholder:italic w-full"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  searchNews(searchQuery)
                }
              }}
              type="text"
              placeholder="Cari berita"
            />
          </div>
          <button className="bg-dark text-white px-6" onClick={() => searchNews(searchQuery)}>Search</button>
        </div>
        <div className="flex flex-col md:grid gap-4 md:grid-cols-3 xl:grid-cols-4 mt-8">
          {searchResult.sort((a, b) => {
            return new Date(b.publishedAt) - new Date(a.publishedAt)
          }).map((news, i) => (
            <NewsCard key={i} news={news} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Search