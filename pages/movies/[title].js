import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios';
const Movie = () => {
    const [movieInfo,setMovieInfo] = useState([])
    const router = useRouter()
    const data= router.query; 
    console.log(data)
    const title =data.title
    
    useEffect(()=>{
      console.log('Use Effect Working')
      const sendTitle= async()=>{
        axios.post('http://localhost:5000/movies',{
          title:title
        }).then((res)=>{
          console.log(res.data)
          setMovieInfo(res.data)
        })
        
      }
      sendTitle()
    },[])
  return (
    <>
    <div className="container my-3 row justify-content-center color-fe">
      {movieInfo?.map((e,index)=>{
        return(
          <>
          <div className="col-10 ">
          <div class="row" style={{
            backgroundColor:'#19232f',
            color:'#fefe',
            borderRadius:'8px'
          }}>
            <div className="col-xl-6 col-lg-6">
            <img class="" src={e.img} alt="Card image cap" style={{
              height:'25rem',
              width:'100%'
            }}/>
            </div>
            <div className="col-xl-6 col-lg-6 my-3">
             <h2 className=''>{e.title}</h2>
             <p style={{fontSize:'14px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consectetur libero quam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quos fugiat animi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit cum doloribus nisi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolorem debitis dolore?</p>
             <div className='text-center my-3'>
               <button className='default-button text-center'>Stream in HD</button>
             </div>
             <div className='text-center my-3'>
               <button className='default-button text-center'>Download in HD</button>
             </div>
             <div>
              {/* <p>This</p> */}
             </div>
            
            </div>
</div>
          </div>
          </>
        )
      })}
    </div>
    </>
  )
}

export default Movie