import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import {
  faChessKing,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import {
  setAllMovies,
  setSearchQuery,
  filterMovies,
} from "@/redux/AllMovieFilter/movieFilterSlice";
import { useDispatch, useSelector } from "react-redux";
function Navbar1() {
  const [showFilter,setShowFilter] = useState(false)
  const filterData =
    useSelector((state) => state.movieFilter.filteredMovies) || [];
  // console.log("filterData", filterData);
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      await axios.get("http://localhost:5000/movies").then((res) => {
        const action = setAllMovies(res.data);
        dispatch(action);
      });
    };
    getData();
  }, []);
  const router = useRouter();
  const handleCardClick = (title) => {
    router.push(`/movies/${title}`);
  };

  const searchInput = (e) => {
    const value = e.target.value;
    console.log(value);
    if (value == "") {
      setShowFilter(false)
    } else {
      setShowFilter(true)
      const action = setSearchQuery(value);
      dispatch(action);
      dispatch(filterMovies());
    }
  };

  return (
    <>
      <Navbar
        style={{
          backgroundColor: "#19232f",
        }}
        expand="lg"
      >
        <Container>
          <div className="navbar-brand py-2">
            <Link className="color-fe fw-bold" href="/">
              <Image
                src="/logo`.png"
                height={38}
                width={170}
                alt="Logo"
              ></Image>
            </Link>
          </div>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{
              backgroundColor: "#d94242",
            }}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div className="nav-link ">
                <Link className="color-fe fw-bold" href="/movies/indian">
                  Indian{" "}
                </Link>
              </div>
              <div className="nav-link ">
                <Link className="color-fe fw-bold" href="/movies/hollywood">
                  Hollywood{" "}
                </Link>
              </div>
              <div className="nav-link ">
                <Link className="color-fe fw-bold" href="/movies/south-indian">
                  South Indian
                </Link>
              </div>
              <div className="nav-link ">
                <Link className="color-fe fw-bold" href="/movies/pakistani">
                  Pakistani
                </Link>
              </div>
            </Nav>
            <input
              type="search"
              className="input-search px-3 "
              onChange={searchInput}
              placeholder="Search Here"
              style={{
                border: "1px solid red",
                color: "#fefefe",
                backgroundColor: "#19232f",
                height: "2.2rem",
                width: "16.4rem",
                borderRadius: "8px",
              }}
            />

            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              height={20}
              width={20}
              color="red"
              style={{
                position: "relative",
                right: "1.8rem",
              }}
            />
      
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className=" container">
      
        {showFilter ?   <>
        <div
          className=" text-center my-3 col-12"
          style={{
            backgroundColor: "#da283b",
            width: "15rem",
            height:'2.5rem',
            color: "#fefefe",
            border: "1px solid #da283b",
            borderRadius: "3px",
          }}
        >
          <h3 className="fw-lighter">Search Results</h3> 
          
        </div> 
        <div className="row">
        
        
          {filterData.map((e, index) => {
            return (
              <>

                <div
                  className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-5 my-3"
               
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
                      
                    </div>
                  </Link>
                </div>
              </>
            );
          })}
          </div>
        </>:null}
     
      </div>

     
     
    </>
  );
}

export default Navbar1;
