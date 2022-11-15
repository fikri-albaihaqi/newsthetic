const NewsCard = ({ news, vertical, bigImage }) => {
  const changeDateFormat = () => {
    const newDate = new Date(news.publishedAt)
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ]

    return `${newDate.getDate()} ${monthNames[newDate.getMonth()]}, ${newDate.getFullYear()}`
  }

  return (
    <a href={news.url} className={`mb-4 pt-4 ${vertical === true && 'first:pt-0'}`}>
      {
        bigImage ?
          <img className="" src={news.urlToImage} alt="" />
          :
          <div className="h-[200px] bg-gray-400" style={{
            backgroundImage: 'url(' + news.urlToImage + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'top center'
          }}>
          </div>
      }
      <p className="text-sm text-gray-500 font-medium mt-2">{changeDateFormat()}</p>
      {
        bigImage ? 
          <h1 className="font-extrabold text-dark text-5xl mt-2 hover:underline">{news.title}</h1>
          :
          <h1 className="font-extrabold text-dark text-2xl mt-2 hover:underline">{news.title}</h1>
      }
      <div className="w-[100px] h-[1px] my-4 bg-primary"></div>
      {
        bigImage ?
          <p className="mb-8 text-xl">
            {news.description}
          </p>
          :
          <></>
      }
      <p className="text-sm font-bold">
        Sumber: {news.source.name}
      </p>
    </a>
  )
}

export default NewsCard