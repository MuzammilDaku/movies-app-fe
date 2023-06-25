import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState,useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { setSearchQuery, filterMovies } from "@/redux/movieFilter/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { setAllMovies } from "@/redux/movieFilter/movieSlice";
import DropdownMenu from "./DropDownMenu";
function Navbar1() {
  useEffect(()=>{
    const fetchSouthIndianMovies = async()=>{
    const res = await axios.get('http://localhost:5000/movies')
    console.log(res.data)
   await dispatch(setAllMovies(res.data))
   
    }
    fetchSouthIndianMovies()
   },[])
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.searchFilter.searchQuery);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const searchInput = (e) => {
    const value = e.target.value;
    dispatch(setSearchQuery(value));
    dispatch(filterMovies());
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
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{
            backgroundColor:'#d94242'
          }} />
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
              className="input-search px-3"
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
            {isDropdownOpen && searchQuery && <DropdownMenu />}
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
    </>
  );
}

export default Navbar1;
