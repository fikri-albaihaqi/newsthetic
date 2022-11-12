const NewsCard = ({ news, vertical }) => {
  return (
    <a href="" className={`mb-4 pt-4 ${vertical === true && 'first:pt-0'}`}>
      <img className="" src={news.image} alt="" />
      <p className="text-sm text-gray-500 font-medium mt-2">{news.date}</p>
      <h1 className="font-extrabold text-dark text-2xl mt-2 hover:underline">{news.title}</h1>
      <div className="w-[100px] h-[1px] my-4 bg-primary"></div>
      <p className="font-light mb-4">
        {news.description}
      </p>
      <p className="text-sm font-bold">
        Sumber: {news.source}
      </p>
    </a>
  )
}

export default NewsCard