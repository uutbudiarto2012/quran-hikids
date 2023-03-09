import Link from 'next/link'
import { BsDot } from 'react-icons/bs'
const SurahCard = ({
  nomor,
  nama,
  nama_latin,
  jumlah_ayat,
  tempat_turun,
  arti
}) => {
  return (
    <Link href={`${nomor}`} className='group'>
      <div className='p-3 bg-white hover:shadow relative overflow-hidden duration-200 md:p-4 my-2 border rounded-lg'>
        <div className='absolute z-0 top-0 right-0 w-44 group-hover:md:w-52 duration-300 md:w-48 rounded-lg rounded-tl-full bottom-0 bg-slate-300' />
        <div className='absolute z-0 top-0 right-0 w-40 md:w-48 rounded-lg rounded-tl-full bottom-0 bg-slate-900' />
        <div className='flex relative z-10 items-center'>
          <div className='flex-1 flex items-center gap-4'>
            <div className='w-6 h-6 relative flex items-center justify-center bg-slate-900'>
              <div className='absolute top-0 right-0 bottom-0 left-0 rotate-45 bg-slate-900' />
              <span className='relative z-10 text-xs mt-1 font-bold text-slate-200'>
                {nomor}
              </span>
            </div>
            <div className=' text-slate-700'>
              <div className='font-semibold mb-1'>{nama_latin}</div>
              <div className='flex items-center'>
                <span className='text-[10px] md:text-xs'>{tempat_turun}</span>
                <BsDot />
                <div className='text-xs'>{jumlah_ayat} ayat</div>
              </div>
            </div>
          </div>
          <div className='flex text-slate-200 justify-end'>
            <div>
              <div className='text-end mb-1 text-2xl font-bold'>{nama}</div>
              <span className='text-end block text-[10px] md:text-xs'>
                {arti}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default SurahCard
