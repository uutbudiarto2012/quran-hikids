import Ayat from '@/components/organisms/Ayat'
import { useRouter } from 'next/router'

const Detail = () => {
  const router = useRouter()
  return (
    <div className='py-6'>
      <div>
        <Ayat />
      </div>
    </div>
  )
}

export default Detail
