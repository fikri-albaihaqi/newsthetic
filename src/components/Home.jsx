import { useState, useEffect } from "react"
import { getTopHeadlines } from "../api"
import { Link } from "react-router-dom"
import NewsCard from "./NewsCard"
import SmallNewsCard from "./SmallNewsCard"
import Loader from "./Loader"
import useViewport from "./useViewport"

const Home = () => {
  const [topHeadlines, setTopHeadlines] = useState(null)
  const [entertainment, setEntertainment] = useState(null)
  const [business, setBusiness] = useState(null)
  const [health, setHealth] = useState(null)
  const [science, setScience] = useState(null)
  const [sports, setSports] = useState(null)
  const [technology, setTechnology] = useState(null)
  const { width } = useViewport()
  const breakpoints = 1025

  useEffect(() => {
    const fetchData = async () => {
      const topHeadlinesData = await getTopHeadlines('general')
      const entertainmentData = await getTopHeadlines('entertainment')
      const businessData = await getTopHeadlines('business')
      const healthData = await getTopHeadlines('health')
      const scienceData = await getTopHeadlines('science')
      const sportsData = await getTopHeadlines('sports')
      const technologyData = await getTopHeadlines('technology')

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
    <div className="pb-24">
      <div className="xl:flex mt-32 md:mt-56">
        {topHeadlines ? (
          <div className="flex flex-col xl:w-[25%] pr-4 divide-y-[1px] divide-dark border-b-[1px] xl:border-b-0 xl:border-r-[1px] border-b-dark xl:border-r-dark">
            {topHeadlines.slice(1, 3).map((news, i) => (
              width < breakpoints ? <SmallNewsCard key={i} news={news} vertical={false} /> : <NewsCard key={i} news={news} vertical={false} />
            ))}
          </div>
        ) : (
          <div className="xl:w-[25%] pr-4 divide-y-[1px] divide-dark border-r-[1px] border-r-dark">
            <Loader />
          </div>
        )}
        {topHeadlines ? (
          <div className="hidden xl:block w-1/2 mt-8 xl:mt-0 px-4">
            {topHeadlines.slice(0, 1).map((news, i) => (
              <NewsCard key={i} news={news} bigImage={true} />
            ))}
          </div>
        ) : (
          <div className="hidden xl:block w-1/2 px-4">
            <Loader />
          </div>
        )}
        <div className="flex flex-col xl:w-[25%] mt-8 xl:mt-0 xl:pl-4 divide-y-[1px] divide-dark border-b-[1px] xl:border-b-0 xl:border-l-[1px] border-b-dark xl:border-l-dark">
          <h1 className="hidden xl:block font-extrabold text-4xl mb-6">Entertainment</h1>
          <h1 className="xl:hidden py-8 font-extrabold text-4xl text-center border-y-2 border-y-dark">ENTERTAINMENT</h1>
          {entertainment ? (
            entertainment.slice(0, 4).map((news, i) => (
              <SmallNewsCard key={i} news={news} vertical={false} />
            ))
          ) : (
            <div className="pt-16">
              <Loader />
            </div>
          )}
        </div>
      </div>

      <div className="mt-8">
        <div>
          <Link to='/category/sports'><h1 className="py-8 font-extrabold text-4xl text-center border-y-2 border-y-dark">OLAHRAGA</h1></Link>
          {sports ? (
            <div className="flex flex-col mt-8 xl:mt-0 xl:grid gap-6 grid-cols-4">
              {sports.slice(0, 8).map((news, i) => (
                width < breakpoints ? <SmallNewsCard key={i} news={news} vertical={false} /> : <NewsCard key={i} news={news} vertical={false} />
              ))}
            </div>
          ) : (
            <div className="pt-16">
              <Loader />
            </div>
          )}
        </div>

        <div className="mt-8">
          <Link to='/category/business'><h1 className="py-8 font-extrabold text-4xl text-center border-y-2 border-y-dark">BISNIS</h1></Link>
          {business ? (
            <div className="flex flex-col mt-8 xl:mt-0 xl:grid gap-6 grid-cols-4">
              {business.slice(0, 8).map((news, i) => (
                width < breakpoints ? <SmallNewsCard key={i} news={news} vertical={false} /> : <NewsCard key={i} news={news} vertical={false} />
              ))}
            </div>
          ) : (
            <div className="pt-16">
              <Loader />
            </div>
          )}
        </div>

        <div className="mt-8">
          <Link to='/category/science'><h1 className="py-8 font-extrabold text-4xl text-center border-y-2 border-y-dark">SAINS</h1></Link>
          {science ? (
            <div className="flex flex-col mt-8 xl:mt-0 xl:grid gap-6 grid-cols-4">
              {science.slice(0, 8).map((news, i) => (
                width < breakpoints ? <SmallNewsCard key={i} news={news} vertical={false} /> : <NewsCard key={i} news={news} vertical={false} />
              ))}
            </div>
          ) : (
            <div className="pt-16">
              <Loader />
            </div>
          )}
        </div>

        <div className="mt-8">
          <Link to='/category/technology'><h1 className="py-8 font-extrabold text-4xl text-center border-y-2 border-y-dark">TEKNOLOGI</h1></Link>
          {technology ? (
            <div className="flex flex-col mt-8 xl:mt-0 xl:grid gap-6 grid-cols-4">
              {technology.slice(0, 8).map((news, i) => (
                width < breakpoints ? <SmallNewsCard key={i} news={news} vertical={false} /> : <NewsCard key={i} news={news} vertical={false} />
              ))}
            </div>
          ) : (
            <div className="pt-16">
              <Loader />
            </div>
          )}
        </div>

        <div className="mt-8">
          <Link to='/category/health'><h1 className="py-8 font-extrabold text-4xl text-center border-y-2 border-y-dark">KESEHATAN</h1></Link>
          {health ? (
            <div className="flex flex-col mt-8 xl:mt-0 xl:grid gap-6 grid-cols-4">
              {health.slice(0, 8).map((news, i) => (
                width < breakpoints ? <SmallNewsCard key={i} news={news} vertical={false} /> : <NewsCard key={i} news={news} vertical={false} />
              ))}
            </div>
          ) : (
            <div className="pt-16">
              <Loader />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home