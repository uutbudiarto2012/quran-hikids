import Image from 'next/image'

const TopBar = () => {
  return (
    <>
      <div className='wrapper sticky top-0 z-50 bg-slate-50 flex justify-between items-center h-[55px] md:h-[65px]'>
        <div className='w-8 h-8 relative'>
          <Image fill={true} src={'/hikids.png'} alt='hikids' />
        </div>
        <div className='flex gap-1 items-center'>
          <button className='text-slate-900 text-sm font-semibold'>
            Kumpulan Doa
          </button>
          <div>|</div>
          <button className='text-slate-900 text-sm font-semibold'>
            Jadwal Shalat
          </button>
        </div>
      </div>
    </>
  )
}

export default TopBar
