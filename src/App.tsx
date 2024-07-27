import React, { useEffect, useState } from 'react'
import { Sun } from 'lucide-react';
import { useGetWeatherQuery } from './store/api/weather.api';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import styles from './App.module.css'

const App = () => {
  const [searchCity, setSearchCity] = useState<string>('')
  const [currentCity, setCurrentCity] = useState<string>('')  

  const {data} = useGetWeatherQuery(currentCity || 'Moscow', {
    skip: currentCity.length === 0
  })


  async function funcAddCityAPI () {
    setCurrentCity(searchCity)
    setSearchCity('')
  }

  useEffect(() => {
    if(data) console.log(data)
    setCurrentCity('')
  }, [data])

  useEffect(() => {
    setCurrentCity('Moscow')
  }, [])


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false
  };

  return (
    <div className='bg-[rgba(239,239,239,0.5)] w-full h-screen flex justify-center items-center'>
      <div className='max-w-[600px] w-full'>
        <div className='flex items-center gap-[10px] mb-[20px] '>
          <input onChange={(e) => setSearchCity(e.target.value)} value={searchCity} className="w-full outline-0 p-[20px]" placeholder='Add city...' type="text" />
          <button onClick={funcAddCityAPI} className='bg-white p-[20px]'>Ok</button>
        </div>
        <div className='flex flex-col justify-between gap-[10px]'>
          <div className='h-[200px] w-full shadow-[0_0_10px_3px_rgba(146,146,146,0.4)] rounded-[50px] flex items-center justify-between pl-[50px]'>
            <div>
              <div className='text-[#2f3956] text-[100px] font-semibold leading-[70px] relative'>{data?.current.temp_c}<span className="absolute top-0  w-[30px] h-[30px] border-[7px] border-[#2f3956] rounded-[50px]"></span></div>
              <div className='text-[#c0c1c5] font-semibold mt-[20px]'>{data?.location.name}, {data?.location.country}</div>
            </div>
            <div className='h-full flex items-center justify-center bg-gradient-to-r from-[#f7f7f7]  to-[#e6c6765d] max-w-[250px] w-full rounded-r-[50px]'>
            <Sun color='#f6cf6c' size={115} />
            </div>
          </div>
          <div className='h-[200px] w-full shadow-[0_0_10px_3px_rgba(146,146,146,0.4)] rounded-[50px] flex items-center justify-between px-[50px]'>
            <Slider {...settings} >
              {
                data?.forecast.forecastday[0].hour.map(item => 
                  <div className='flex justify-center text-[#343c57]'>
                    <div className={`pt-[10px] text-[14px] font-semibold relative flex justify-center items-center text-center font-bold` }>
                      {item.temp_c.toFixed()}
                      {/* <span className={`${styles.celc}`}></span> */}
                    </div>
                    <div className='flex justify-center'><img src={`${item.condition.icon}`} alt="" /></div>
                    <div className='text-[18px] font-bold text-center'>{item.time?.slice(11)}</div>
                  </div>
                )
              }
            </Slider>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default App