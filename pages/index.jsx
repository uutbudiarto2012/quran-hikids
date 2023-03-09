import Basmalah from '@/components/atoms/Basmalah'
import Surah from '@/components/organisms/Surah'
const Home = () => {
  return (
    <>
      <div className='sticky z-30 bg-slate-50 top-[55px]'>
        <Basmalah />
      </div>
      <Surah />
    </>
  )
}

export default Home
