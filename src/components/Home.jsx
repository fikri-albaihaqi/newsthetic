import { useState, useEffect } from "react"
import { getTopHeadlines, getEntertainment, getBusiness, getHealth, getScience, getSports, getTechnology, } from "../api"
import NewsCard from "./NewsCard"
import SmallNewsCard from "./SmallNewsCard"

const Home = () => {
  const [topHeadlines, setTopHeadlines] = useState([])
  const [entertainment, setEntertainment] = useState([])
  const [business, setBusiness] = useState([])
  const [health, setHealth] = useState([])
  const [science, setScience] = useState([])
  const [sports, setSports] = useState([])
  const [technology, setTechnology] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const topHeadlinesData = await getTopHeadlines()
      const entertainmentData = await getEntertainment()
      const businessData = await getBusiness()
      const healthData = await getHealth()
      const scienceData = await getScience()
      const sportsData = await getSports()
      const technologyData = await getTechnology()

      setTopHeadlines(topHeadlinesData.data.articles)
      setEntertainment(entertainmentData.data.articles)
      setBusiness(businessData.data.articles)
      setHealth(healthData.data.articles)
      setScience(scienceData.data.articles)
      setSports(sportsData.data.articles)
      setTechnology(technologyData.data.articles)
    }

    fetchData()
  }, [])

  return (
    <div>
      <div className="flex mt-16">
        <div className="flex flex-col w-[25%] pr-4 divide-y-[1px] divide-dark border-r-[1px] border-r-dark">
          {topHeadlines.slice(1, 3).map((news) => (
            <NewsCard key={news.id} news={news} vertical={true} />
          ))}
        </div>
        <div className="w-1/2 px-4">
          {topHeadlines.slice(0, 1).map((news) => (
            <NewsCard key={news.id} news={news} bigImage={true} />
          ))}
        </div>
        <div className="flex flex-col w-[25%] pl-4 divide-y-[1px] divide-dark border-l-[1px] border-l-dark">
          <h1 className="font-extrabold text-4xl mb-6">Entertainment</h1>
          {entertainment.slice(0, 4).map((news) => (
            <SmallNewsCard key={news.id} news={news} vertical={true} />
          ))}
        </div>
      </div>
      <div className="mt-8">
        <div>
          <h1 className="py-8 font-extrabold text-4xl text-center border-y-2 border-y-dark">OLAHRAGA</h1>
          <div className="grid gap-6 grid-cols-4">
            {sports.slice(0, 8).map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h1 className="py-8 font-extrabold text-4xl text-center border-y-2 border-y-dark">BISNIS</h1>
          <div className="grid gap-6 grid-cols-4">
            {business.slice(0, 8).map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h1 className="py-8 font-extrabold text-4xl text-center border-y-2 border-y-dark">SAINS</h1>
          <div className="grid gap-6 grid-cols-4">
            {science.slice(0, 8).map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h1 className="py-8 font-extrabold text-4xl text-center border-y-2 border-y-dark">TEKNOLOGI</h1>
          <div className="grid gap-6 grid-cols-4">
            {technology.slice(0, 8).map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h1 className="py-8 font-extrabold text-4xl text-center border-y-2 border-y-dark">KESEHATAN</h1>
          <div className="grid gap-6 grid-cols-4">
            {health.slice(0, 8).map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home