const NewsCard = ({ news, vertical, bigImage }) => {
  return (
    <a href="" className={`mb-4 pt-4 ${vertical === true && 'first:pt-0'}`}>
      {
        bigImage ?
          <img className="" src={news.urlToImage} alt="" />
          :
          <div className="h-[200px] bg-gray-400" style={{
            backgroundImage: 'url(' + news.urlToImage + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
          </div>
      }
      <p className="text-sm text-gray-500 font-medium mt-2">{news.publishedAt}</p>
      <h1 className="font-extrabold text-dark text-2xl mt-2 hover:underline">{news.title}</h1>
      <div className="w-[100px] h-[1px] my-4 bg-primary"></div>
      <p className="text-sm font-bold">
        Sumber: {news.source.name}
      </p>
    </a>
  )
}

export default NewsCard