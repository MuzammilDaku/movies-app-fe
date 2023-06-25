import Head from "next/head"
import { useState ,useEffect} from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { setAllMovies } from "@/redux/movieFilter/movieSlice";
import { useDispatch, useSelector } from "react-redux";
const index = () => {
  useEffect(()=>{
   const fetchSouthIndianMovies = async()=>{
   const res = await axios.get('http://localhost:5000/movies')
   console.log(res.data)
  await dispatch(setAllMovies(res.data))
  
   }
   fetchSouthIndianMovies()
  },[])
  const AllMovies = useSelector((state)=>state.searchFilter.AllMovies)
  const dispatch = useDispatch()
  
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const router= useRouter()
  const handleCardClick = (title) =>{
   router.push(`/movies/${title}`)
  }

  return (
    <>
       <Head>
        <title>Movies App By MAKB</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
            </Head>
    <div className="container my-3">
    <div className=' text-center my-3' style={{
      backgroundColor:'#da283b',
      width:'16rem',
      color:'#fefefe',
      border:'1px solid #da283b',
      borderRadius:'3px'
    }}>
        <h3 className='fw-lighter'>Featured Movies</h3>
    </div>
    <div className="cards row justify-content-center">
   {AllMovies?.map((e,index)=>{
    return(
      <>
        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-5 my-3" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}  key={index} style={{
      height:'15rem',
      
     }}>
      <Link href={`/movies/${e.title}`}>
                <div onClick={() => handleCardClick(e.title)}>
                  <img
                    src={e.img}
                    style={{
                      height: "14rem",
                      width: "100%",
                      borderRadius: "7px",
                    }}
                    alt="Movie Thumbnail"
                  />
                  <p
                    className="color-fe text-center text-decoration-none"
                    style={{
                      position: "relative",
                      top: "-3rem",
                    }}
                  >
                    {e.title}
                  </p>
                  {isHovering && (
                    <div
                      className=""
                      style={{
                        position: "relative",
                        top: "-15rem",
                        left: "1.6rem",
                        opacity: "50%",
                      }}
                    >
                      <img
                        src="/assets/icons/btn-overlay-red.png"
                        alt="Play Video Image"
                      />
                    </div>
                  )}
                </div>
              </Link>
     </div>
      </>
    )
   })}
    </div>
    
    </div>
    </>
  )
}

export default index