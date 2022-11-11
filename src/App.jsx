import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
  const [allNews, setNews] = useState([
    {
      id: 1,
      date: '14 Agustus 2022',
      image: 'https://thumb.viva.co.id/media/frontend/thumbs3/2022/11/04/6364b1cd4147e-siaran-analog-berubah-ke-digital_665_374.jpg',
      title: 'Perkembangan Televisi dan Peningkatan Kualitas Siaran',
      source: 'Viva.co.id',
    },
    {
      id: 2,
      date: '14 Agustus 2022',
      image: 'https://thumb.viva.co.id/media/frontend/thumbs3/2022/11/04/6364b1cd4147e-siaran-analog-berubah-ke-digital_665_374.jpg',
      title: 'Perkembangan Televisi dan Peningkatan Kualitas Siaran',
      source: 'Viva.co.id',
    },
    {
      id: 3,
      date: '14 Agustus 2022',
      image: 'https://thumb.viva.co.id/media/frontend/thumbs3/2022/11/04/6364b1cd4147e-siaran-analog-berubah-ke-digital_665_374.jpg',
      title: 'Perkembangan Televisi dan Peningkatan Kualitas Siaran',
      source: 'Viva.co.id',
    },
    {
      id: 4,
      date: '14 Agustus 2022',
      image: 'https://thumb.viva.co.id/media/frontend/thumbs3/2022/11/04/6364b1cd4147e-siaran-analog-berubah-ke-digital_665_374.jpg',
      title: 'Perkembangan Televisi dan Peningkatan Kualitas Siaran',
      source: 'Viva.co.id',
    },
    {
      id: 5,
      date: '14 Agustus 2022',
      image: 'https://thumb.viva.co.id/media/frontend/thumbs3/2022/11/04/6364b1cd4147e-siaran-analog-berubah-ke-digital_665_374.jpg',
      title: 'Perkembangan Televisi dan Peningkatan Kualitas Siaran',
      source: 'Viva.co.id',
    },
    {
      id: 6,
      date: '14 Agustus 2022',
      image: 'https://thumb.viva.co.id/media/frontend/thumbs3/2022/11/04/6364b1cd4147e-siaran-analog-berubah-ke-digital_665_374.jpg',
      title: 'Perkembangan Televisi dan Peningkatan Kualitas Siaran',
      source: 'Viva.co.id',
    },
    {
      id: 7,
      date: '14 Agustus 2022',
      image: 'https://thumb.viva.co.id/media/frontend/thumbs3/2022/11/04/6364b1cd4147e-siaran-analog-berubah-ke-digital_665_374.jpg',
      title: 'Perkembangan Televisi dan Peningkatan Kualitas Siaran',
      source: 'Viva.co.id',
    },
  ])

  return (
    <div className='font-mulish'>
      <Navbar />
      <div className='w-[90vw] m-auto'>
        <Home allNews={allNews} />
      </div>
    </div>
  )
}

export default App
