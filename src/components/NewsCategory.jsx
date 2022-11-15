import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getTopHeadlines } from "../api"
import NewsCard from "./NewsCard"
import SmallNewsCard from "./SmallNewsCard"
import Loader from "./Loader"
import useViewport from "./useViewport"

const NewsCategory = () => {
  const params = useParams()
  const [allNews, setNews] = useState(null)
  const { width } = useViewport()
  const breakpoints = 1025

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getTopHeadlines(params.category)

      setNews(data.articles)
    }

    fetchData()
  }, [params.category])

  return (
    allNews ?
      <div className="xl:grid gap-4 grid-cols-4 mt-24 md:mt-48 pb-24">
        {
          allNews.map((news, i) => (
            width < breakpoints ? <SmallNewsCard key={i} news={news} /> : <NewsCard key={i} news={news} />
          ))
        }
      </div>
      :
      <div className="min-h-screen mt-96">
        <Loader />
      </div>
  )
}

export default NewsCategory