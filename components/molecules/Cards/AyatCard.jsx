const AyatCard = ({ data }) => {
  return (
    <div className='border border-slate-200 rounded-lg bg-white my-2 overflow-hidden'>
      <div className='p-3'>
        <div className='inline-flex p-1.5 text-xs font-semibold rounded-md bg-slate-900 text-slate-200'>
          {data.surah} : {data.nomor}
        </div>
        <div className='flex text-2xl leading-[50px] sm:leading-[60px] md:text-3xl md:leading-[60px] justify-end text-end py-4 font-semibold'>
          {data.ar}
        </div>
        <div className='text-slate-700'>
          <div className='text-[10px] md:text-xs font-semibold uppercase'>
            {data.tr}
          </div>
          <div className='h-[1px] bg-slate-200 my-2' />
          <div className='text-[10px] md:text-xs'>{data.idn}</div>
        </div>
      </div>
    </div>
  )
}

export default AyatCard
