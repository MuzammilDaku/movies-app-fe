import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
const DropdownMenu = () => {
  
  const filteredMovies = useSelector((state) => state.searchFilter.filterMovies);
  const router= useRouter()
  const handleCardClick = (title) =>{
   router.push(`/movies/${title}`)
  }
  return (
    <div className="dropdown-menu color-fe">
    <div className="cards row justify-content-center">
   {filteredMovies?.map((e,index)=>{
    return(
      <>
        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-5 my-3"  key={index} style={{
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
                 
                </div>
              </Link>
     </div>
      </>
    )
   })}
    </div>
    </div>
  );
};

export default DropdownMenu;
