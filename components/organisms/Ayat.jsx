import axios from 'axios'
import { useRouter } from 'next/router'
import { BsArrowLeft } from 'react-icons/bs'
import useSWR from 'swr'
import utils from '../../data/utils.json'
import AyatCard from '../molecules/Cards/AyatCard'
import LoaderAyat from '../molecules/Skeleton/LoaderAyat'

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
  return (
    <>
      <div className='flex mt-2 sticky top-[55px] md:top-[65px] bg-slate-50 py-2 justify-between'>
        <button
          onClick={() => router.back()}
          className='flex gap-1 text-sm items-center'
        >
          <BsArrowLeft fontSize={18} />
        </button>
        <div className='text-end text-xl font-semibold'>{utils.basmalah}</div>
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
    </>
  )
}

export default Ayat
