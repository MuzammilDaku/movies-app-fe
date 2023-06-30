import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from "@/components/Navbar"
import Footer from '@/components/Footer'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import Head from 'next/head'
import LoadingSpinner from '@/components/LoadingSpinner'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
export default function App({ Component, pageProps }) {
  const router = useRouter()
  const renderNavbarAndFooter = !router.pathname.includes('auth/')
  const [show,setShow] = useState(false)
  const [show1,setShow1] = useState(true)
  // useEffect(()=>{
  //   setTimeout(() => {
  //     setShow(false)
  //     setShow1(true)
  //   }, 3000);
  // },[])
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
      {
        show == true?    <div style={{
          textAlign:'center',
          position:'relative',
          top:'50vh'
        }}>
        <LoadingSpinner />
        </div> :null
      }
        
        
     
        {show1 == true ? (
          <div>
            {renderNavbarAndFooter && (
              <>
               <div>
        <Navbar />  
        <Component {...pageProps} />
        <div style={{
          marginTop:'120px'
        }}>
        <Footer />
        </div>
        </div>
              </>
            )}
            {!renderNavbarAndFooter &&  <Component {...pageProps} />}
          </div>
          ):null}
      
   
      
    </div>
    </Provider>

    </>
  )
  
}
