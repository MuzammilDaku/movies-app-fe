import Head from "next/head";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
const index = () => {
  
  const [AllMovies,setAllMovies] = useState([])
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    const fetchSouthIndianMovies = async () => {
      const res = await axios.get("http://localhost:5000/movies");
         setAllMovies(res.data)
    };
    fetchSouthIndianMovies();
  }, []);
 
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const router = useRouter();
  const handleCardClick = (title) => {
    router.push(`/movies/${title}`);
  };
 // Pagination Logic
 const [currentPage,setCurrentPage] = useState(1)
 const ITEMS_PER_PAGE = 20
 const totalPages = Math.ceil(AllMovies.length/ITEMS_PER_PAGE)
 const startIndex = (currentPage-1)*ITEMS_PER_PAGE
 const endIndex = startIndex+ITEMS_PER_PAGE
 const handlePageChange =(page)=>{
  setCurrentPage(page)
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
        <div
          className=" text-center my-3"
          style={{
            backgroundColor: "#da283b",
            width: "16rem",
            color: "#fefefe",
            border: "1px solid #da283b",
            borderRadius: "3px",
          }}
        >
          <h3 className="fw-lighter">Featured Movies</h3>
        </div>
        <div className="cards row justify-content-center">
          {AllMovies.slice(startIndex,endIndex).map((e, index) => {
            return (
              <>
                <div
                  className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-5 my-3"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  key={index}
                  style={{
                    height: "15rem",
                  }}
                >
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
            );
          })}
          <div className="pagination justify-content-center">
          {Array.from({ length: totalPages }, (_, i) => i +1).map((page) => (
       <li class="page-item"><button class="page-link" key={page} onClick={() => handlePageChange(page)}>{page}</button></li>

  ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
