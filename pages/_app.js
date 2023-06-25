import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from "@/components/Navbar"
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import Head from 'next/head'
export default function App({ Component, pageProps }) {
  return (
    <>
    <Provider store={store}>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Pontano+Sans:wght@300&family=Poppins:wght@200&family=Roboto+Condensed:wght@300&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
    <div className="font background-body">
    <Navbar />  
    <Component {...pageProps} />
    </div>
    </Provider>

    </>
  )
  
}
