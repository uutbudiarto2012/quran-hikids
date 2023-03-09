import axios from 'axios'
import { useRouter } from 'next/router'
import { BsArrowLeft, BsFillPlayFill, BsStopFill } from 'react-icons/bs'
import useSWR from 'swr'
import utils from '../../data/utils.json'
import AyatCard from '../molecules/Cards/AyatCard'
import LoaderAyat from '../molecules/Skeleton/LoaderAyat'

import { useState } from 'react'
import AudioPlayer from 'react-h5-audio-player'

async function fetcher (url) {
  const response = await axios({
    method: 'GET',
    url: url
  })
  return response.data
}

const Ayat = () => {
  const router = useRouter()
  const URL = `${process.env.api}/surat/${router?.query?.nomor}`
  const { data, isLoading } = useSWR(URL, fetcher)
  const [play, setPlay] = useState(false)
  const playAudioHandler = () => {
    setPlay(!play)
  }
  return (
    <>
      <div className='flex mt-2 sticky z-30 top-[55px] md:top-[65px] bg-slate-50 py-2 justify-between'>
        <button
          onClick={() => router.back()}
          className='flex gap-1 text-sm items-center'
        >
          <BsArrowLeft fontSize={18} />
        </button>
        <div className='text-end text-xl font-semibold'>{utils.basmalah}</div>
      </div>
      <div className='flex justify-between my-3'>
        <button className='text-sm'>Tafsir</button>
        <button className='flex items-center gap-2' onClick={playAudioHandler}>
          {play ? (
            <>
              <div className='w-6 h-6  border bg-red-500 text-slate-50 rounded-md flex items-center justify-center'>
                <BsStopFill />
              </div>
              <span className='text-sm mt-1 block font-semibold'>
                Stop Audio
              </span>
            </>
          ) : (
            <>
              <div className='w-6 h-6  border bg-slate-900 text-slate-200 rounded-md flex items-center justify-center'>
                <BsFillPlayFill />
              </div>
              <span className='text-sm mt-1 block font-semibold'>
                Play Audio
              </span>
            </>
          )}
        </button>
      </div>
      {isLoading && <LoaderAyat count={12} />}
      {data?.ayat?.map(item => (
        <AyatCard
          key={item.id}
          data={{
            id: item.id,
            surah: item.surah,
            nomor: item.nomor,
            ar: item.ar,
            tr: item.tr,
            idn: item.idn
          }}
        />
      ))}

      {play && (
        <div className='fixed md:sticky left-0 right-0 bottom-0'>
          <AudioPlayer
            className='player-custom-audio md:border md:rounded-lg'
            src={data?.audio}
            autoPlay
          />
        </div>
      )}
    </>
  )
}

export default Ayat
