import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="mx-auto">
      <Component {...pageProps} />
    </main>
  )
}