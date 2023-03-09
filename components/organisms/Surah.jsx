import axios from 'axios'
import useSWR from 'swr'
import SurahCard from '../molecules/Cards/SurahCard'
import LoaderSurah from '../molecules/Skeleton/LoaderSurah'
async function fetcher (url) {
  const response = await axios({
    method: 'GET',
    url: url
  })
  return response.data
}
const Surah = () => {
  const URL = `${process.env.api}/surat`
  const { data, isLoading } = useSWR(URL, fetcher)
  return (
    <>
      {isLoading && <LoaderSurah count={12} />}
      {data?.map((item, index) => (
        <SurahCard
          nomor={item.nomor}
          nama={item.nama}
          nama_latin={item.nama_latin}
          jumlah_ayat={item.jumlah_ayat}
          tempat_turun={item.tempat_turun}
          arti={item.arti}
          deskripsi={item.deskripsi}
          audio={item.audio}
          key={index}
        />
      ))}
    </>
  )
}

export default Surah
