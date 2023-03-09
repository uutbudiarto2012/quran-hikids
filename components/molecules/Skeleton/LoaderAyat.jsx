import React from 'react'

const LoaderAyat = ({ count = 8 }) => {
  const x = new Array(count).fill(1).map((_, i) => i + 1)
  return (
    <>
      {x.map(item => (
        <div className='border border-slate-200 rounded-lg bg-white animate-pulse my-2 overflow-hidden'>
          <div className='p-3'>
            <div className='inline-flex gap-0.5 p-1.5 text-xs font-semibold rounded-md bg-slate-600 text-slate-50'>
              <div className='font-semibold mb-1 w-3 h-3 mt-1 bg-slate-400 rounded-lg' />
              <div className='font-semibold mb-1 w-3 h-3 mt-1 bg-slate-400 rounded-lg' />
            </div>
            <div className='flex flex-col items-end text-2xl leading-[50px] sm:leading-[60px] md:text-3xl md:leading-[60px] justify-end text-end py-4 font-semibold'>
              <div className='font-semibold mb-1 w-40 h-3 bg-slate-400 rounded-lg' />
              <div className='font-semibold mb-1 w-full h-2 bg-slate-400 rounded-lg' />
              <div className='font-semibold mb-1 w-full h-2 bg-slate-400 rounded-lg' />
              <div className='font-semibold mb-1 w-full h-2 bg-slate-400 rounded-lg' />
            </div>
            <div className='text-slate-700'>
              <div className='text-[10px] md:text-xs font-semibold uppercase'>
                <div className='font-semibold mb-1 w-full h-2 bg-slate-400 rounded-lg' />
              </div>
              <div className='h-[1px] bg-slate-200 my-2' />
              <div className='text-[10px] md:text-xs'>
                <div className='font-semibold mb-1 w-full h-2 bg-slate-400 rounded-lg' />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default LoaderAyat
