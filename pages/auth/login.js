import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
const login = () => {
  return (
    <>
    <div className="container">

     <div className="d-flex vh-100 justify-content-center" >
        <div className="box col-xl-5 col-lg-5 col-md-7 col-sm-8 col-10 align-self-center  " >
             <div className="log mt-3">
                <img src="/logo`.png" alt="" />
             </div>
             <div className="info">
                <h3>Welcome To Login Form </h3>
             </div>
             <div className="form-group py-2">
              <input type="text" placeholder='Username' className='login-input px-5' />
             </div>
             <div className="form-group py-3">
              <input type="password" placeholder='Password' className='login-input px-5' />
             </div>
             <div className=" py-3">
                <button className='btn-login '>Log in</button>
             </div>
             <span className='font-18 fw-bold'>OR</span>
             <div className='mb-3'>Login With</div>
             <div className='btns'>
                <span className="btnGoogle mx-4">
                    <Link href="#" className='btn-fb '>
                    <FontAwesomeIcon className='fb' icon={faGoogle} />
                    <span className='fb-text'>Google</span>
                    </Link>
                </span>
                <span className="btnGoogle">
                    <Link href="#" className='btn-fb '>
                    <FontAwesomeIcon className='fb' icon={faFacebook} />
                    <span className='fb-text'>Facebook</span>
                    </Link>
                </span>
                <p className='mt-3 mx-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quas provident eius.</p>
             </div>
        </div>
     </div>
    </div>
    
    </>
  )
}

export default login