import React from 'react'
import { BsDot } from 'react-icons/bs'

const LoaderSurah = ({ count = 8 }) => {
  const x = new Array(count).fill(1).map((_, i) => i + 1)
  return (
    <>
      {x.map(item => (
        <div
          key={item}
          className='p-3 animate-pulse bg-white hover:shadow relative overflow-hidden duration-200 md:p-4 my-2 border border-slate-200 rounded-lg'
        >
          <div className='flex relative z-10 items-center'>
            <div className='flex-1 flex items-center gap-4'>
              <div className='w-6 h-6 relative flex items-center justify-center bg-slate-500'>
                <div className='absolute top-0 right-0 bottom-0 left-0 rotate-45 bg-slate-500' />
                <span className='relative h-3 w-3 z-10 text-xs rounded-full font-bold bg-slate-200' />
              </div>
              <div className=' text-slate-500'>
                <div className='font-semibold mb-1 h-2 bg-slate-500 rounded-lg' />
                <div className='flex items-center'>
                  <div className='font-semibold w-12 mb-1 h-2 bg-slate-500 rounded-lg' />
                  <BsDot />
                  <div className='font-semibold mb-1 w-32 h-2 bg-slate-500 rounded-lg' />
                </div>
              </div>
            </div>
            <div className='flex flex-col items-end text-slate-200 justify-end'>
              <div className='text-end mb-1 text-2xl font-bold'>
                <div className='font-semibold mb-1 w-32 h-3 bg-slate-500 rounded-lg' />
              </div>
              <div className='text-end block text-[10px] md:text-xs'>
                <div className='font-semibold mb-1 w-40 h-2 bg-slate-500 rounded-lg' />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default LoaderSurah
