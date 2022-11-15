const SmallNewsCard = ({ news, vertical }) => {
  const changeDateFormat = () => {
    const newDate = new Date(news.publishedAt)
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ]

    return `${newDate.getDate()} ${monthNames[newDate.getMonth()]}, ${newDate.getFullYear()}`
  }

  return (
    <a href={news.url} className={`flex items-center mb-4 pt-4 ${vertical === true && 'first:pt-0'}`}>
      <div className="w-[130px] md:w-[200px] xl:w-[100px] h-[100px] md:h-[150px] xl:h-[70px] bg-gray-400" style={{
        backgroundImage: 'url(' + news.urlToImage + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'top center'
      }}>
      </div>
      <div className="w-[60%] ml-4">
        <h1 className="font-extrabold text-dark mt-2 hover:underline">{news.title}</h1>
        <p className="text-sm text-gray-500 font-medium mt-2">
          {changeDateFormat()}
        </p>
      </div>
    </a>
  )
}

export default SmallNewsCard