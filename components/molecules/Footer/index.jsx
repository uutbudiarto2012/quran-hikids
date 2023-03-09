import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center text-slate-400 h-16 items-center'>
      <div className='text-xs'>
        <span>Design & Build by : </span>
        <a
          href='https://uutbudi.vercel.app'
          target='_blank'
          className='text-cyan-400'
          rel='noopener noreferrer'
        >
          Uut Budiarto
        </a>
      </div>
      <div className='text-xs'>
        <span>sumber data : </span>
        <a
          href='https://equran.id/apidev'
          target='_blank'
          className='text-cyan-400'
          rel='noopener noreferrer'
        >
          equran.id
        </a>
      </div>
    </div>
  )
}

export default Footer
