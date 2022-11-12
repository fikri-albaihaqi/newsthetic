const SmallNewsCard = ({ news, vertical }) => {
  return (
    <a href="" className={`flex mb-4 pt-4 ${vertical === true && 'first:pt-0'}`}>
      <div className="m-auto w-[40%]">
        <img src={news.image} alt="" />
      </div>
      <div className="w-[60%] ml-4">
        <h1 className="font-extrabold text-dark mt-2 hover:underline">{news.title}</h1>
        <p className="text-sm text-gray-500 font-medium mt-2">
          {news.date}
        </p>
      </div>
    </a>
  )
}

export default SmallNewsCard