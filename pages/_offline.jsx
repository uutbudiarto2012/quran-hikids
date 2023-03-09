import Image from 'next/image'
import React from 'react'

const Offline = () => {
  return (
    <div className='h-[calc(100vh-110px)] flex flex-col justify-center items-center md:h-[calc(100vh-130px)]'>
      <div className='aspect-square w-24 h-24 relative'>
        <Image fill src={'/offline.png'} alt='offline' />
      </div>
      <div className='mt-6 text-slate-500'>
        <h1 className='text-sm font-semibold text-center'>
          UPS ANDA SEDANG OFFLINE
        </h1>
        <h2 className='text-xs font-light text-center'>
          Mungkin ada masalah dengan jaringan Anda
        </h2>
      </div>
    </div>
  )
}

export default Offline
