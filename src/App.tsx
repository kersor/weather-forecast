import React from 'react'
import { Sun } from 'lucide-react';
import { useGetWeatherQuery } from './store/api/weather.api';

const App = () => {
  const {data} = useGetWeatherQuery('Moscow')

  return (
    <div className='bg-[rgba(239,239,239,0.5)] w-full h-screen flex justify-center items-center'>
     <div className='max-w-[600px] w-full h-[700px] grid grid-cols-1 gap-[20px]'>
      <div className='w-full shadow-[0_0_10px_3px_rgba(146,146,146,0.4)] rounded-[50px] flex items-center justify-between pl-[50px]'>
        <div>
          <div className='text-[#2f3956] text-[100px] font-semibold leading-[70px] relative'>23<span className="absolute top-0  w-[30px] h-[30px] border-[7px] border-[#2f3956] rounded-[50px]"></span></div>
          <div className='text-[#c0c1c5] font-semibold mt-[20px]'>Coimbra, Portugal</div>
        </div>
        <div className='h-full flex items-center justify-center bg-gradient-to-r from-[#f7f7f7]  to-[#e6c6765d] max-w-[250px] w-full rounded-r-[50px]'>
         <Sun color='#f6cf6c' size={115} />
        </div>
      </div>
      <div className='w-full shadow-[0_0_10px_3px_rgba(146,146,146,0.4)] rounded-[50px] flex items-center px-[50px]'>
      </div>
      <div className='w-full shadow-[0_0_10px_3px_rgba(146,146,146,0.4)] rounded-[50px] flex items-center px-[50px]'>
      </div>
     </div>
    </div>
  )
}

export default App