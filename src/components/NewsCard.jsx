const NewsCard = ({ news, smallCard }) => {
  return smallCard ? (
    <a href="" className="flex mb-4 pt-4 first:pt-0">
      <div className="m-auto w-[40%]">
        <img src={news.image} alt="" />
      </div>
      <div className="w-[60%] ml-4">
        <h1 className="font-bold text-dark mt-2 hover:underline">{news.title}</h1>
        <p className="text-sm text-gray-500 font-medium mt-2">
          {news.date}
        </p>
      </div>
    </a>
  ) : (
    <a href="" className="mb-4 pt-4 first:pt-0">
      <img className="" src={news.image} alt="" />
      <p className="text-sm text-gray-500 font-medium mt-2">{news.date}</p>
      <h1 className="font-extrabold text-dark text-2xl mt-2 hover:underline">{news.title}</h1>
      <div className="w-[100px] h-[1px] my-4 bg-primary"></div>
      <p className="text-sm font-bold">
        Sumber: {news.source}
      </p>
    </a>
  )
}

export default NewsCard