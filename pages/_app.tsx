import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Geist, Geist_Mono } from 'next/font/google'
import { useEffect } from 'react'


const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Carrega o Bootstrap JS dinamicamente
    const bootstrap = document.createElement('script')
    bootstrap.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js'
    bootstrap.integrity = 'sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz'
    bootstrap.crossOrigin = 'anonymous'
    document.body.appendChild(bootstrap)

    return () => {
      document.body.removeChild(bootstrap)
    }
  }, [])

  return (
    <>
      <Head>
        {/* Bootstrap CSS CDN */}
        <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
          rel="stylesheet" 
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" 
          crossOrigin="anonymous"
        />
        {/* Bootstrap Icons CDN */}
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css"
        />
      </Head>
      
      <style jsx global>{`
        :root {
          --bs-body-bg: black;
          --font-geist-sans: ${geistSans.style.fontFamily};
          --font-geist-mono: ${geistMono.style.fontFamily};
        }
        body {
          background-color: black;
          color: white;
        }
        .bg-body {
          background-color: black !important;
          color: white !important;
        }
      `}</style>
      
      <Component {...pageProps} />
    </>
  )
}