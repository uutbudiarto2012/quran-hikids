import DefaultLayout from '@/components/layouts/DefaultLayout'
import '@/styles/globals.css'
import 'react-h5-audio-player/lib/styles.css';

export default function App({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}
