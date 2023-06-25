import React, { useEffect } from 'react'
import Link from 'next/link'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
const IndianMovies = () => {
  const router= useRouter()
  const handleCardClick = (title) =>{
   router.push(`/movies/${title}`)
  }
  const [indianMovies, setIndianMovies] = useState([]);

  useEffect(()=>{
   const fetchIndianMovies = async()=>{
   const res = await axios.get('http://localhost:5000/movies/indian-movies')
   console.log(res.data)
   setIndianMovies(res.data)
   }
   fetchIndianMovies()

  },[])


  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
 
  return (
    <>
    <div className="container my-3">

    <div className=' text-center my-3' style={{
      backgroundColor:'#da283b',
      width:'12rem',
      color:'#fefefe',
      border:'1px solid #da283b',
      borderRadius:'3px'
    }}>
        <h3 className='fw-lighter'>Indian Movies</h3>
    </div>
    <div className="cards row justify-content-center">
    {indianMovies?.map((e,index)=>{
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

export default IndianMovies